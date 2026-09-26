import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

export interface NoteRemotePresence {
    playerId: string;
    playerName: string;
    anchor: number;
    head: number;
    color: string;
    updatedAt: number;
}

type NotePresenceMeta =
    | { type: "upsert"; presence: NoteRemotePresence }
    | { type: "remove"; playerId: string }
    | { type: "removeMany"; playerIds: string[] }
    | { type: "keepPositions" }
    | { type: "clear" };

type NotePresenceState = Map<string, NoteRemotePresence>;

export const notePresencePluginKey = new PluginKey<NotePresenceState>(
    "notePresence",
);

/** Keeps a received cursor position inside the current ProseMirror document. */
function clampPosition(position: number, documentSize: number): number {
    return Math.max(0, Math.min(documentSize, Math.trunc(position)));
}

/** Builds the colored caret and name flag shown at a collaborator's selection head. */
function createCursorWidget(presence: NoteRemotePresence): HTMLElement {
    const cursor = document.createElement("span");
    cursor.className = "note-remote-cursor";
    cursor.contentEditable = "false";
    cursor.setAttribute("data-player-id", presence.playerId);
    cursor.style.setProperty("--note-presence-color", presence.color);

    const label = document.createElement("span");
    label.className = "note-remote-cursor-label";
    label.textContent = presence.playerName || "Collaborator";
    cursor.appendChild(label);
    return cursor;
}

/** Converts all live collaborator ranges into ProseMirror decorations. */
function presenceDecorations(
    state: NotePresenceState,
    documentSize: number,
): Decoration[] {
    const decorations: Decoration[] = [];
    for (const presence of state.values()) {
        const anchor = clampPosition(presence.anchor, documentSize);
        const head = clampPosition(presence.head, documentSize);
        const from = Math.min(anchor, head);
        const to = Math.max(anchor, head);

        if (from < to) {
            decorations.push(
                Decoration.inline(from, to, {
                    class: "note-remote-selection",
                    style: `--note-presence-color: ${presence.color}`,
                    "data-player-id": presence.playerId,
                }),
            );
        }

        decorations.push(
            Decoration.widget(head, () => createCursorWidget(presence), {
                key: `note-presence-${presence.playerId}`,
                side: head < anchor ? -1 : 1,
            }),
        );
    }
    return decorations;
}

/**
 * Renders ephemeral collaborator selections. Cursor data enters through
 * transaction metadata so presence updates never alter the note document.
 */
export const NotePresence = Extension.create({
    name: "notePresence",

    addProseMirrorPlugins() {
        return [
            new Plugin<NotePresenceState>({
                key: notePresencePluginKey,
                state: {
                    init: () => new Map(),
                    apply(transaction, previous) {
                        const meta = transaction.getMeta(
                            notePresencePluginKey,
                        ) as NotePresenceMeta | undefined;
                        if (!transaction.docChanged && !meta) return previous;

                        // External content sync replaces the whole doc with
                        // the sender's copy — the copy the stored positions
                        // were measured against. Mapping them through the
                        // full-range replace would collapse them to the doc
                        // boundary, so keep them as-is (decorations clamp).
                        if (meta?.type === "keepPositions") {
                            return previous;
                        }

                        const next = new Map<string, NoteRemotePresence>();
                        for (const [playerId, presence] of previous) {
                            next.set(playerId, {
                                ...presence,
                                anchor: transaction.mapping.map(
                                    presence.anchor,
                                    -1,
                                ),
                                head: transaction.mapping.map(presence.head, 1),
                            });
                        }

                        if (meta?.type === "clear") return new Map();
                        if (meta?.type === "remove") {
                            next.delete(meta.playerId);
                        } else if (meta?.type === "removeMany") {
                            for (const playerId of meta.playerIds) {
                                next.delete(playerId);
                            }
                        } else if (meta?.type === "upsert") {
                            next.set(meta.presence.playerId, meta.presence);
                        }
                        return next;
                    },
                },
                props: {
                    decorations(editorState) {
                        const presenceState =
                            notePresencePluginKey.getState(editorState) ||
                            new Map();
                        return DecorationSet.create(
                            editorState.doc,
                            presenceDecorations(
                                presenceState,
                                editorState.doc.content.size,
                            ),
                        );
                    },
                },
            }),
        ];
    },
});
