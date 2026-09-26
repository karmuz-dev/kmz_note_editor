import {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
    type DragEvent,
} from "react";
import NoteEditor from "./NoteEditor";
import NoteTabBar from "./NoteTabBar";
import NotePopup from "./NotePopup";
import { useNoteWorkspaceHost, type NoteEditorSelectOption } from "./host";
import { game } from "./proto/messages";
import { BUILTIN_TEMPLATES, type NoteTemplate } from "./noteTemplates";
import { parseNoteTabs, joinNoteTabs } from "./noteTabs";
import {
    NOTE_STATS_UNASSIGNED_OWNER_ID,
    isNoteStatsUnassignedOwnerId,
    patchNoteLinkedStats,
} from "./noteStats";
import {
    isPlayerStatsTokenTargetId,
    playerStatsTokenItemId,
    playerStatsTokenTargetId,
    normalizePlayerStats,
    normalizeStatKey,
    type PlayerStat,
    type GameStatsCharacter,
} from "./types";
import { getPlayerStatTemplate } from "./playerStatTemplates";

interface NotePermission {
    playerId: string;
    playerName: string;
    canEdit: boolean;
}

interface NoteData {
    noteId: string;
    ownerId: string;
    ownerName: string;
    title: string;
    content: string;
    templateId?: string;
    linkedStatsOwnerId?: string;
    permissions: NotePermission[];
}

interface NoteFolder {
    folderId: string;
    name: string;
    parentFolderId?: string;
    noteIds: string[];
    isOpen: boolean;
}

interface RoomPlayer {
    id: string;
    name: string;
    [key: string]: any;
}

interface NoteTokenSource {
    itemId: string;
    tokenId?: string;
    name: string;
    imageUrl?: string;
}

// Stable empty array so children relying on prop identity (NoteEditor's
// linked-stat sync effect) don't re-run on every render without stats.
const EMPTY_PLAYER_STATS: PlayerStat[] = [];

function mergeIncomingStatsWithRollMetadata(
    previous: PlayerStat[] = [],
    incoming: PlayerStat[],
): PlayerStat[] {
    const previousByKey = new Map(
        previous.map((stat) => [normalizeStatKey(stat.key), stat]),
    );
    return incoming.map((stat) => {
        const existing = previousByKey.get(normalizeStatKey(stat.key));
        if (
            !existing?.rollConfigId ||
            stat.rollConfigId ||
            stat.updatedAt ||
            stat.rollName ||
            stat.rollKey
        ) {
            return stat;
        }
        return {
            ...stat,
            rollName: existing.rollName,
            rollKey: existing.rollKey,
            rollConfigId: existing.rollConfigId,
            rollModifierStatKey: existing.rollModifierStatKey,
            rollDiceStatKey: existing.rollDiceStatKey,
            rollDiceOperation: existing.rollDiceOperation,
            rollMode: existing.rollMode,
            rollTargetStatKey: existing.rollTargetStatKey,
            rollOwnerId: existing.rollOwnerId,
            rollBaseDiceCount: existing.rollBaseDiceCount,
            rollResultMode: existing.rollResultMode,
            rollFormula: existing.rollFormula,
            rollVisibility: existing.rollVisibility,
            createdAt: stat.createdAt || existing.createdAt,
            updatedAt: stat.updatedAt || existing.updatedAt,
        };
    });
}

export interface NoteWorkspaceProps {
    playerId: string;
    playerName: string;
    roomPlayers: Record<string, RoomPlayer>;
    roomId: string;
    /** Locks the workspace to one note and removes note browsing controls. */
    noteId?: string;
    /** Opens this note initially while keeping the full note workspace. */
    initialNoteId?: string;
    canManagePlayerStats?: boolean;
    tokenSources?: NoteTokenSource[];
    embedded?: boolean;
    active?: boolean;
    onClose?: () => void;
    controlledOpen?: boolean;
}

interface PendingShareRequest {
    templateId: string;
    templateTitle: string;
    templateContent: string;
    fromPlayerId: string;
    fromPlayerName: string;
}

interface NotesTemplatesData {
    notes: NoteData[];
    noteFolders: NoteFolder[];
    templates: { templateId: string; title: string; content: string }[];
}

interface NoteSearchData {
    notes: NoteData[];
    noteFolders: NoteFolder[];
}

function createNoteFolderId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return `nf:${crypto.randomUUID()}`;
    }
    return `nf:${Date.now().toString(36)}-${Math.random()
        .toString(36)
        .slice(2)}`;
}

function normalizeNoteFolders(value: unknown): NoteFolder[] {
    if (!Array.isArray(value)) return [];
    const seenFolderIds = new Set<string>();
    const seenNoteIds = new Set<string>();

    return value
        .map((entry): NoteFolder | null => {
            if (!entry || typeof entry !== "object") return null;
            const raw = entry as Record<string, unknown>;
            const folderId = String(raw.folderId || "").trim();
            const name = String(raw.name || "").trim();
            if (!folderId || !name || seenFolderIds.has(folderId)) return null;
            seenFolderIds.add(folderId);

            const noteIds = Array.isArray(raw.noteIds)
                ? raw.noteIds
                      .map((noteId) => String(noteId || "").trim())
                      .filter((noteId) => {
                          if (!noteId || seenNoteIds.has(noteId)) return false;
                          seenNoteIds.add(noteId);
                          return true;
                      })
                : [];

            return {
                folderId,
                name,
                parentFolderId:
                    String(raw.parentFolderId || "").trim() || undefined,
                noteIds,
                isOpen: raw.isOpen !== false,
            };
        })
        .filter((folder): folder is NoteFolder => !!folder)
        .map((folder, _index, folders) => {
            const folderIds = new Set(folders.map((entry) => entry.folderId));
            const parentFolderId =
                folder.parentFolderId &&
                folder.parentFolderId !== folder.folderId &&
                folderIds.has(folder.parentFolderId)
                    ? folder.parentFolderId
                    : undefined;
            return { ...folder, parentFolderId };
        })
        .map((folder, _index, folders) => {
            const parentById = new Map(
                folders.map((entry) => [
                    entry.folderId,
                    entry.parentFolderId || "",
                ]),
            );
            let current = folder.parentFolderId || "";
            const seen = new Set<string>();
            while (current) {
                if (current === folder.folderId || seen.has(current)) {
                    return { ...folder, parentFolderId: undefined };
                }
                seen.add(current);
                current = parentById.get(current) || "";
            }
            return folder;
        });
}

function noteFoldersEqual(left: NoteFolder[], right: NoteFolder[]) {
    if (left.length !== right.length) return false;
    return left.every((folder, index) => {
        const other = right[index];
        if (!other) return false;
        if (
            folder.folderId !== other.folderId ||
            folder.name !== other.name ||
            (folder.parentFolderId || "") !== (other.parentFolderId || "") ||
            folder.isOpen !== other.isOpen ||
            folder.noteIds.length !== other.noteIds.length
        ) {
            return false;
        }
        return folder.noteIds.every((noteId, noteIndex) => {
            return noteId === other.noteIds[noteIndex];
        });
    });
}

function getViewportSize() {
    if (typeof window === "undefined") {
        return { width: 520, height: 540 };
    }

    const viewport = window.visualViewport;
    return {
        width: Math.max(1, Math.floor(viewport?.width ?? window.innerWidth)),
        height: Math.max(1, Math.floor(viewport?.height ?? window.innerHeight)),
    };
}

function useIsMobile() {
    return useMemo(() => {
        if (typeof window === "undefined") return false;
        const telegram = (window as Window & {
            Telegram?: { WebApp?: { platform?: string } };
        }).Telegram?.WebApp;
        return telegram
            ? ["android", "android_x", "ios"].includes(
                  String(telegram.platform || ""),
              )
            : false;
    }, []);
}

function SelectTrigger({ label }: { label: string }) {
    return (
        <span className="flex w-full items-center justify-between gap-2">
            <span className="min-w-0 flex-1 truncate text-left">{label}</span>
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </span>
    );
}

function noteTemplateLinkedStatsReady(
    template: NoteTemplate,
    stats: PlayerStat[],
): boolean {
    if (!template.linked_stats) return true;
    const statTemplate = getPlayerStatTemplate(template.linked_stats);
    if (!statTemplate) return false;

    const availableKeys = new Set(
        stats.map((stat) => normalizeStatKey(stat.key)).filter(Boolean),
    );
    const requiredKeys =
        statTemplate.requiredKeys && statTemplate.requiredKeys.length > 0
            ? statTemplate.requiredKeys
            : statTemplate.stats.map((stat) => stat.key);
    return requiredKeys.every((key) =>
        availableKeys.has(normalizeStatKey(key)),
    );
}

function noteLinkedStatsOwnerId(note: NoteData): string {
    const linkedStatsOwnerId = note.linkedStatsOwnerId?.trim() || "";
    if (isNoteStatsUnassignedOwnerId(linkedStatsOwnerId)) {
        return NOTE_STATS_UNASSIGNED_OWNER_ID;
    }
    return linkedStatsOwnerId || note.ownerId;
}

function noteUsesLinkedStats(note: NoteData): boolean {
    return (
        Boolean(note.linkedStatsOwnerId?.trim()) ||
        note.content.includes("@stat") ||
        note.content.includes("<stat")
    );
}

// Shared styles
const S = {
    panel: {
        backgroundColor: "rgba(30, 30, 30, 0.95)",
        border: "1px solid #444",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        fontFamily: "Arial, sans-serif",
        height: "100%",
    } as React.CSSProperties,
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: "1px solid #333",
    } as React.CSSProperties,
    input: {
        width: "100%",
        padding: "6px 10px",
        borderRadius: 6,
        border: "1px solid #444",
        backgroundColor: "#111",
        color: "#fff",
        fontSize: 13,
        outline: "none",
        boxSizing: "border-box",
    } as React.CSSProperties,
};

const DEFAULT_NOTE_LIST_HEIGHT = 190;
const MIN_NOTE_LIST_HEIGHT = 96;
const MIN_NOTE_EDITOR_HEIGHT = 180;

export default function NoteWorkspace({
    playerId,
    playerName,
    roomPlayers,
    roomId,
    noteId,
    initialNoteId,
    canManagePlayerStats = false,
    tokenSources = [],
    embedded = false,
    active = true,
    onClose,
    controlledOpen,
}: NoteWorkspaceProps) {
    const fixedNoteId = noteId?.trim() || "";
    const host = useNoteWorkspaceHost();
    const {
        Button: GameButton,
        Panel: DraggablePanel,
        FolderCollapsible,
        Confirm: GameConfirm,
        Select: GameSelect,
    } = host.components;
    const [isOpen, setIsOpen] = useState(
        controlledOpen !== undefined
            ? controlledOpen
            : embedded
              ? active
              : false,
    );
    const [animating, setAnimating] = useState(false);
    const [notes, setNotes] = useState<NoteData[]>([]);
    const [activeNoteId, setActiveNoteId] = useState<string | null>(
        fixedNoteId || initialNoteId?.trim() || null,
    );
    const [noteSearch, setNoteSearch] = useState("");
    const [debouncedNoteSearch, setDebouncedNoteSearch] = useState("");
    const [noteSearchData, setNoteSearchData] =
        useState<NoteSearchData | null>(null);
    const [noteSearchLoading, setNoteSearchLoading] = useState(false);
    const [noteSearchError, setNoteSearchError] = useState<string | null>(
        null,
    );
    const [folderSearchOpen, setFolderSearchOpen] = useState(false);
    const [folderSearch, setFolderSearch] = useState("");
    const [debouncedFolderSearch, setDebouncedFolderSearch] = useState("");
    const [folderSearchData, setFolderSearchData] =
        useState<NoteSearchData | null>(null);
    const [folderSearchLoading, setFolderSearchLoading] = useState(false);
    const [folderSearchError, setFolderSearchError] = useState<string | null>(
        null,
    );
    const [notesLoadState, setNotesLoadState] = useState<
        "loading" | "ready" | "error"
    >("loading");
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tab, setTab] = useState<"mine" | "shared">("mine");
    const [showNewMenu, setShowNewMenu] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    // Template state
    const [customTemplates, setCustomTemplates] = useState<NoteTemplate[]>([]);
    const [pendingShareRequest, setPendingShareRequest] =
        useState<PendingShareRequest | null>(null);
    const [showTemplateShareModal, setShowTemplateShareModal] = useState(false);
    const [confirmDeleteNote, setConfirmDeleteNote] = useState(false);
    const [editorKey, setEditorKey] = useState(0);
    const [confirmDeleteTemplateId, setConfirmDeleteTemplateId] = useState<
        string | null
    >(null);
    const [unreadSharedCount, setUnreadSharedCount] = useState(0);
    const [poppedOutNoteIds, setPoppedOutNoteIds] = useState<Set<string>>(
        new Set(),
    );
    const [popupFocusId, setPopupFocusId] = useState<string | null>(null);
    const defaultNewNoteStatsOwnerId = canManagePlayerStats
        ? NOTE_STATS_UNASSIGNED_OWNER_ID
        : playerId;
    const [newNoteStatsOwnerId, setNewNoteStatsOwnerId] = useState(
        defaultNewNoteStatsOwnerId,
    );
    const [statsOwnerSelectOpen, setStatsOwnerSelectOpen] = useState(false);
    const [activeStatsOwnerSelectOpen, setActiveStatsOwnerSelectOpen] =
        useState(false);
    const [pendingStatsReassign, setPendingStatsReassign] = useState<{
        noteId: string;
        targetId: string;
    } | null>(null);
    const [noteFolders, setNoteFolders] = useState<NoteFolder[]>([]);
    const [creatingNoteFolder, setCreatingNoteFolder] = useState(false);
    const [creatingNoteFolderParentId, setCreatingNoteFolderParentId] =
        useState<string | null>(null);
    const [newNoteFolderName, setNewNoteFolderName] = useState("");
    const [editingNoteFolderId, setEditingNoteFolderId] = useState<
        string | null
    >(null);
    const [editingNoteFolderName, setEditingNoteFolderName] = useState("");
    const [confirmDeleteNoteFolder, setConfirmDeleteNoteFolder] = useState<{
        folderId: string;
        name: string;
    } | null>(null);
    const [activeNoteDrag, setActiveNoteDrag] = useState<{
        fromFolderId: string | null;
    } | null>(null);
    const [noteDragTarget, setNoteDragTarget] = useState<string | null>(null);
    const [activeFolderDrag, setActiveFolderDrag] = useState<{
        folderId: string;
    } | null>(null);
    const [folderDragTarget, setFolderDragTarget] = useState<string | null>(
        null,
    );
    const [noteListHeight, setNoteListHeight] = useState(
        DEFAULT_NOTE_LIST_HEIGHT,
    );
    const [resizingNoteList, setResizingNoteList] = useState(false);

    const notesRef = useRef<NoteData[]>(notes);
    notesRef.current = notes;
    const panelBodyRef = useRef<HTMLDivElement>(null);
    const noteListRef = useRef<HTMLDivElement>(null);
    const noteListResizeStartRef = useRef<{
        clientY: number;
        height: number;
    } | null>(null);
    const isMobile = useIsMobile();
    const [viewportSize, setViewportSize] = useState(getViewportSize);
    const useMobilePanelLayout = isMobile || viewportSize.width <= 640;
    const notePanelWidth = useMobilePanelLayout
        ? Math.min(520, viewportSize.width)
        : 520;
    const notePanelHeight = useMobilePanelLayout
        ? Math.min(540, viewportSize.height)
        : 540;

    const unreadRef = useRef(0);

    const isOpenRef = useRef(isOpen);
    isOpenRef.current = isOpen;
    const tabRef = useRef(tab);
    tabRef.current = tab;
    const debouncedSends = useRef<Map<string, ReturnType<typeof setTimeout>>>(
        new Map(),
    );
    const localEditProtectionTimeouts = useRef<
        Map<string, ReturnType<typeof setTimeout>>
    >(new Map());
    const locallyEditedNoteIds = useRef<Set<string>>(new Set());
    const noteFolderSaveTimeout =
        useRef<ReturnType<typeof setTimeout>>(undefined);
    const pendingNoteFolderSaveRef = useRef<{
        roomId: string;
        playerId: string;
        folders: NoteFolder[];
    } | null>(null);
    const noteSearchRequestIdRef = useRef(0);
    const folderSearchRequestIdRef = useRef(0);
    const refreshingRef = useRef(false);
    const fetchedStatsKeysRef = useRef<Set<string>>(new Set());
    const [linkedStatsByOwnerId, setLinkedStatsByOwnerId] = useState<
        Record<string, PlayerStat[]>
    >({});
    const [characters, setCharacters] = useState<GameStatsCharacter[]>([]);
    const linkedStatsByOwnerIdRef = useRef<Record<string, PlayerStat[]>>({});
    linkedStatsByOwnerIdRef.current = linkedStatsByOwnerId;

    const trySend = useCallback((data: Uint8Array<ArrayBuffer>) => {
        const sent = host.socket.send(data);
        if (!sent) {
            setToast({ message: "Not connected to server", type: "error" });
            setTimeout(() => setToast(null), 3000);
        }
        return sent;
    }, [host.socket]);

    const clearLocalEditProtection = useCallback((noteId: string) => {
        locallyEditedNoteIds.current.delete(noteId);
        const timeout = localEditProtectionTimeouts.current.get(noteId);
        if (timeout) clearTimeout(timeout);
        localEditProtectionTimeouts.current.delete(noteId);
    }, []);

    const expireLocalEditProtectionSoon = useCallback((noteId: string) => {
        const existing = localEditProtectionTimeouts.current.get(noteId);
        if (existing) clearTimeout(existing);
        localEditProtectionTimeouts.current.set(
            noteId,
            setTimeout(() => {
                locallyEditedNoteIds.current.delete(noteId);
                localEditProtectionTimeouts.current.delete(noteId);
            }, 10_000),
        );
    }, []);

    const markNoteLocallyEdited = useCallback(
        (noteId: string) => {
            if (!noteId) return;
            locallyEditedNoteIds.current.add(noteId);
            expireLocalEditProtectionSoon(noteId);
        },
        [expireLocalEditProtectionSoon],
    );

    const mergeNotesPreservingLocalEdits = useCallback(
        (incoming: NoteData[]) => {
            if (locallyEditedNoteIds.current.size === 0) return incoming;
            const localById = new Map(
                notesRef.current.map((note) => [note.noteId, note]),
            );
            return incoming.map((note) => {
                if (!locallyEditedNoteIds.current.has(note.noteId)) {
                    return note;
                }
                const local = localById.get(note.noteId);
                if (!local) return note;
                if (
                    note.title === local.title &&
                    note.content === local.content
                ) {
                    clearLocalEditProtection(note.noteId);
                    return note;
                }
                return {
                    ...note,
                    title: local.title,
                    content: local.content,
                };
            });
        },
        [clearLocalEditProtection],
    );

    const setNotesSynced = useCallback((next: NoteData[]) => {
        notesRef.current = next;
        setNotes(next);
    }, []);

    const updateLocalNote = useCallback(
        (
            noteId: string,
            updater: (note: NoteData) => NoteData,
        ) => {
            setNotes((previous) => {
                let changed = false;
                const next = previous.map((note) => {
                    if (note.noteId !== noteId) return note;
                    const updated = updater(note);
                    if (updated !== note) changed = true;
                    return updated;
                });
                if (changed) {
                    notesRef.current = next;
                }
                return changed ? next : previous;
            });
        },
        [],
    );

    const sendNoteUpdate = useCallback(
        (noteId: string) => {
            const note = notesRef.current.find(
                (entry) => entry.noteId === noteId,
            );
            if (!note) return false;
            const msg = game.Wrapper.create({
                note: {
                    playerId,
                    playerName,
                    noteId,
                    type: "update",
                    title: note.title,
                    content: note.content,
                },
            });
            const sent = trySend(
                game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
            );
            if (sent) expireLocalEditProtectionSoon(noteId);
            return sent;
        },
        [expireLocalEditProtectionSoon, playerId, playerName, trySend],
    );

    const clearDebouncedNoteSave = useCallback((noteId: string) => {
        const timeout = debouncedSends.current.get(noteId);
        if (timeout) clearTimeout(timeout);
        debouncedSends.current.delete(noteId);
    }, []);

    const scheduleDebouncedNoteSave = useCallback(
        (noteId: string) => {
            clearDebouncedNoteSave(noteId);
            debouncedSends.current.set(
                noteId,
                setTimeout(() => {
                    debouncedSends.current.delete(noteId);
                    sendNoteUpdate(noteId);
                }, 300),
            );
        },
        [clearDebouncedNoteSave, sendNoteUpdate],
    );

    const flushPendingNoteSaves = useCallback(() => {
        const noteIds = [...debouncedSends.current.keys()];
        noteIds.forEach(clearDebouncedNoteSave);
        let sentAny = false;
        noteIds.forEach((noteId) => {
            sentAny = sendNoteUpdate(noteId) || sentAny;
        });
        return sentAny;
    }, [clearDebouncedNoteSave, sendNoteUpdate]);

    const saveNoteFolderPayload = useCallback(
        async (
            payload: { roomId: string; playerId: string; folders: NoteFolder[] },
            options: { keepalive?: boolean } = {},
        ) => {
            try {
                await host.requestJson<{ ok?: boolean }>(
                    `/room/${encodeURIComponent(payload.roomId)}/note-folders?playerId=${encodeURIComponent(payload.playerId)}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ folders: payload.folders }),
                        keepalive: options.keepalive,
                    },
                    "Failed to save note folders",
                );
            } catch (error) {
                console.error("[NotePanel] Failed to save note folders", error);
                setToast({
                    message: "Failed to save note folders",
                    type: "error",
                });
                setTimeout(() => setToast(null), 3000);
            }
        },
        [host],
    );

    const flushPendingNoteFolderSave = useCallback(
        (options: { keepalive?: boolean } = {}) => {
            const pending = pendingNoteFolderSaveRef.current;
            if (!pending) return null;

            clearTimeout(noteFolderSaveTimeout.current);
            noteFolderSaveTimeout.current = undefined;
            pendingNoteFolderSaveRef.current = null;
            return saveNoteFolderPayload(pending, options);
        },
        [saveNoteFolderPayload],
    );

    const scheduleNoteFolderSave = useCallback(
        (folders: NoteFolder[]) => {
            if (!roomId || !playerId) return;

            const payload = { roomId, playerId, folders };
            pendingNoteFolderSaveRef.current = payload;
            clearTimeout(noteFolderSaveTimeout.current);
            noteFolderSaveTimeout.current = setTimeout(() => {
                noteFolderSaveTimeout.current = undefined;
                if (pendingNoteFolderSaveRef.current === payload) {
                    pendingNoteFolderSaveRef.current = null;
                }
                void saveNoteFolderPayload(payload);
            }, 500);
        },
        [playerId, roomId, saveNoteFolderPayload],
    );

    const setAndSaveNoteFolders = useCallback(
        (updater: (previous: NoteFolder[]) => NoteFolder[]) => {
            setNoteFolders((previous) => {
                const next = updater(previous);
                if (!noteFoldersEqual(previous, next)) {
                    scheduleNoteFolderSave(next);
                }
                return next;
            });
        },
        [scheduleNoteFolderSave],
    );

    const selectedNoteId = fixedNoteId || activeNoteId;
    const activeNote = notes.find((n) => n.noteId === selectedNoteId) || null;
    const myNotes = useMemo(
        () => notes.filter((n) => n.ownerId === playerId),
        [notes, playerId],
    );
    const sharedNotes = useMemo(
        () => notes.filter((n) => n.ownerId !== playerId),
        [notes, playerId],
    );
    const normalizedNoteSearch = noteSearch.trim();
    const isNoteSearchActive = normalizedNoteSearch.length > 0;
    const noteSearchWaitingForDebounce =
        isNoteSearchActive &&
        normalizedNoteSearch !== debouncedNoteSearch.trim();
    const isNoteSearchBusy =
        isNoteSearchActive &&
        (noteSearchLoading || noteSearchWaitingForDebounce);
    const searchedNotes = noteSearchData?.notes || [];
    const searchedMyNotes = useMemo(
        () => searchedNotes.filter((note) => note.ownerId === playerId),
        [playerId, searchedNotes],
    );
    const searchedSharedNotes = useMemo(
        () => searchedNotes.filter((note) => note.ownerId !== playerId),
        [playerId, searchedNotes],
    );
    const normalizedFolderSearch = folderSearch.trim();
    const isFolderSearchActive =
        folderSearchOpen && normalizedFolderSearch.length > 0;
    const folderSearchWaitingForDebounce =
        isFolderSearchActive &&
        normalizedFolderSearch !== debouncedFolderSearch.trim();
    const isFolderSearchBusy =
        isFolderSearchActive &&
        (folderSearchLoading || folderSearchWaitingForDebounce);
    const searchedNoteFolders = folderSearchData?.noteFolders || [];
    const folderSearchResultIdSet = useMemo(
        () =>
            new Set(
                searchedNoteFolders.map((folder) => folder.folderId),
            ),
        [searchedNoteFolders],
    );
    const myNotesById = useMemo(
        () => new Map(myNotes.map((note) => [note.noteId, note])),
        [myNotes],
    );
    const folderNoteIdSet = useMemo(
        () => new Set(noteFolders.flatMap((folder) => folder.noteIds)),
        [noteFolders],
    );
    const noteFolderIdByNoteId = useMemo(() => {
        const folderIdByNoteId = new Map<string, string>();
        for (const folder of noteFolders) {
            for (const noteId of folder.noteIds) {
                folderIdByNoteId.set(noteId, folder.folderId);
            }
        }
        return folderIdByNoteId;
    }, [noteFolders]);
    const rootNotes = useMemo(
        () => myNotes.filter((note) => !folderNoteIdSet.has(note.noteId)),
        [folderNoteIdSet, myNotes],
    );
    const noteFoldersByParentId = useMemo(() => {
        const foldersByParentId = new Map<string, NoteFolder[]>();
        for (const folder of noteFolders) {
            const parentId = folder.parentFolderId || "";
            const siblings = foldersByParentId.get(parentId) || [];
            siblings.push(folder);
            foldersByParentId.set(parentId, siblings);
        }
        return foldersByParentId;
    }, [noteFolders]);
    const noteFolderParentById = useMemo(
        () =>
            new Map(
                noteFolders.map((folder) => [
                    folder.folderId,
                    folder.parentFolderId || "",
                ]),
            ),
        [noteFolders],
    );
    const rootNoteFolders = noteFoldersByParentId.get("") || [];
    const folderSearchRootFolders = rootNoteFolders.filter((folder) =>
        folderSearchResultIdSet.has(folder.folderId),
    );
    const myLinkedStats =
        linkedStatsByOwnerId[playerId] || EMPTY_PLAYER_STATS;
    const tokenStatsOptions = useMemo(() => {
        const options = new Map<string, string>();
        for (const token of tokenSources) {
            const targetId = playerStatsTokenTargetId(token.itemId);
            if (!targetId) continue;
            const label = token.name?.trim() || "Token";
            options.set(targetId, label);
        }
        return [...options.entries()]
            .sort((left, right) => left[1].localeCompare(right[1]))
            .map(([value, label]) => ({ value, label }));
    }, [tokenSources]);
    const characterTargetOptions = useMemo(() => {
        return characters
            .filter((character) => {
                if (!character.targetId) return false;
                // A player can only attach their own CharacterSheet. Room
                // masters retain their existing broader target controls.
                return canManagePlayerStats || character.ownerId === playerId;
            })
            .sort((left, right) => left.name.localeCompare(right.name))
            .map((character) => ({
                value: character.targetId,
                label: `Character: ${character.name || "Unnamed"}`,
                character,
            }));
    }, [canManagePlayerStats, characters, playerId]);
    const availableCharacterTargetOptions = useMemo(
        () =>
            characterTargetOptions.filter(
                ({ character }) => !character.characterSheetNoteId,
            ),
        [characterTargetOptions],
    );
    const statsOwnerOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            {
                value: NOTE_STATS_UNASSIGNED_OWNER_ID,
                label: "Unassigned",
            },
            { value: playerId, label: playerName || "My player" },
            ...(canManagePlayerStats ? tokenStatsOptions : []),
            ...availableCharacterTargetOptions.map(({ value, label }) => ({
                value,
                label,
            })),
        ],
        [
            availableCharacterTargetOptions,
            canManagePlayerStats,
            playerId,
            playerName,
            tokenStatsOptions,
        ],
    );
    const selectedStatsOwnerLabel =
        statsOwnerOptions.find((option) => option.value === newNoteStatsOwnerId)
            ?.label ||
        statsOwnerOptions[0]?.label ||
        "My player";
    const tokenStatsLabelByValue = useMemo(
        () =>
            new Map(
                tokenStatsOptions.map((option) => [
                    option.value,
                    option.label,
                ]),
            ),
        [tokenStatsOptions],
    );
    const characterLabelByTargetId = useMemo(
        () =>
            new Map(
                characterTargetOptions.map(({ value, label }) => [value, label]),
            ),
        [characterTargetOptions],
    );
    const statsOwnerLabelForNoteTarget = useCallback(
        (note: NoteData, targetId: string) => {
            const normalizedTargetId = targetId.trim() || note.ownerId;
            if (isNoteStatsUnassignedOwnerId(normalizedTargetId)) {
                return "Unassigned";
            }
            if (normalizedTargetId === note.ownerId) {
                return note.ownerId === playerId
                    ? playerName || "My player"
                    : note.ownerName || "Note owner";
            }
            if (normalizedTargetId === playerId) {
                return playerName || "My player";
            }
            const tokenLabel = tokenStatsLabelByValue.get(normalizedTargetId);
            if (tokenLabel) return tokenLabel;
            const characterLabel = characterLabelByTargetId.get(normalizedTargetId);
            if (characterLabel) return characterLabel;

            const roomPlayer = roomPlayers[normalizedTargetId];
            const roomPlayerName =
                roomPlayer?.name ||
                roomPlayer?.first_name ||
                roomPlayer?.firstName ||
                "";
            if (roomPlayerName) return String(roomPlayerName);

            if (isPlayerStatsTokenTargetId(normalizedTargetId)) {
                const itemId = playerStatsTokenItemId(normalizedTargetId);
                return itemId
                    ? `Missing token ${itemId.slice(0, 8)}`
                    : "Missing token";
            }
            return "Unknown target";
        },
        [
            characterLabelByTargetId,
            playerId,
            playerName,
            roomPlayers,
            tokenStatsLabelByValue,
        ],
    );
    const statsOwnerOptionsForNote = useCallback(
        (note: NoteData): NoteEditorSelectOption[] => {
            const options: NoteEditorSelectOption[] = [];
            const seen = new Set<string>();
            const addOption = (value: string, label: string) => {
                if (!value || seen.has(value)) return;
                seen.add(value);
                options.push({ value, label });
            };

            addOption(NOTE_STATS_UNASSIGNED_OWNER_ID, "Unassigned");
            addOption(
                note.ownerId,
                note.ownerId === playerId
                    ? playerName || "My player"
                    : note.ownerName || "Note owner",
            );
            if (playerId !== note.ownerId) {
                addOption(playerId, playerName || "My player");
            }
            if (canManagePlayerStats) {
                for (const option of tokenStatsOptions) {
                    addOption(option.value, option.label);
                }
            }
            for (const option of characterTargetOptions) {
                // A character may only be bound to one CharacterSheet. Keep
                // the current note selectable so an existing assignment can
                // still be inspected or moved away from.
                if (
                    option.character.characterSheetNoteId &&
                    option.character.characterSheetNoteId !== note.noteId
                ) {
                    continue;
                }
                addOption(option.value, option.label);
            }

            const currentTargetId = noteLinkedStatsOwnerId(note);
            if (!seen.has(currentTargetId)) {
                addOption(
                    currentTargetId,
                    statsOwnerLabelForNoteTarget(note, currentTargetId),
                );
            }
            return options;
        },
        [
            playerId,
            playerName,
            statsOwnerLabelForNoteTarget,
            characterTargetOptions,
            canManagePlayerStats,
            tokenStatsOptions,
        ],
    );
    const visibleBuiltinTemplates = useMemo(
        () =>
            BUILTIN_TEMPLATES.filter((template) =>
                newNoteStatsOwnerId !== playerId ||
                noteTemplateLinkedStatsReady(template, myLinkedStats),
            ),
        [myLinkedStats, newNoteStatsOwnerId, playerId],
    );

    const canEditActive =
        activeNote &&
        (activeNote.ownerId === playerId ||
            activeNote.permissions.some(
                (p) => p.playerId === playerId && p.canEdit,
            ));
    const linkedStatsTargetIdForNote = useCallback(
        (note: NoteData | null | undefined) => {
            if (!note) return playerId;
            const targetId = noteLinkedStatsOwnerId(note);
            if (canManagePlayerStats) return targetId;
            return characterTargetOptions.some(
                (option) => option.value === targetId,
            )
                ? targetId
                : playerId;
        },
        [canManagePlayerStats, characterTargetOptions, playerId],
    );
    const activeStatsOwnerTargetId = activeNote
        ? noteLinkedStatsOwnerId(activeNote)
        : playerId;
    const activeStatsOwnerOptions = activeNote
        ? statsOwnerOptionsForNote(activeNote)
        : statsOwnerOptions;
    const activeStatsOwnerLabel = activeNote
        ? statsOwnerLabelForNoteTarget(activeNote, activeStatsOwnerTargetId)
        : selectedStatsOwnerLabel;
    const canReassignActiveStats =
        !!activeNote &&
        (canManagePlayerStats ||
            (activeNote.ownerId === playerId &&
                characterTargetOptions.length > 0)) &&
        !!canEditActive &&
        noteUsesLinkedStats(activeNote);
    const pendingStatsReassignNote = pendingStatsReassign
        ? notes.find((note) => note.noteId === pendingStatsReassign.noteId) ||
          null
        : null;
    const pendingStatsReassignFromLabel = pendingStatsReassignNote
        ? statsOwnerLabelForNoteTarget(
              pendingStatsReassignNote,
              noteLinkedStatsOwnerId(pendingStatsReassignNote),
          )
        : "";
    const pendingStatsReassignToLabel =
        pendingStatsReassign && pendingStatsReassignNote
            ? statsOwnerLabelForNoteTarget(
                  pendingStatsReassignNote,
                  pendingStatsReassign.targetId,
              )
            : "";

    const patchNotesWithStats = useCallback(
        (targetUserId: string, stats: PlayerStat[]) => {
            if (!targetUserId || !stats.length) return;
            setNotes((prev) => {
                let changed = false;
                const next = prev.map((note) => {
                    if (
                        noteLinkedStatsOwnerId(note) !== targetUserId ||
                        (!note.content.includes("@stat") &&
                            !note.content.includes("<stat"))
                    ) {
                        return note;
                    }
                    const patched = patchNoteLinkedStats(note.content, stats);
                    if (!patched.changed) return note;
                    changed = true;
                    return { ...note, content: patched.content };
                });
                if (changed) {
                    notesRef.current = next;
                }
                return changed ? next : prev;
            });
        },
        [],
    );

    const fetchLinkedStatsForOwner = useCallback(
        async (ownerId: string, force = false): Promise<PlayerStat[]> => {
            if (!ownerId || isNoteStatsUnassignedOwnerId(ownerId)) return [];
            const fetchKey = `${roomId}:${ownerId}`;
            if (force) {
                fetchedStatsKeysRef.current.delete(fetchKey);
            }
            if (fetchedStatsKeysRef.current.has(fetchKey)) {
                return linkedStatsByOwnerIdRef.current[ownerId] || [];
            }
            fetchedStatsKeysRef.current.add(fetchKey);
            try {
                const snapshot = await host.fetchPlayerStats(roomId, ownerId, {
                    fresh: force,
                });
                if (snapshot.error) {
                    return linkedStatsByOwnerIdRef.current[ownerId] || [];
                }
                const stats = normalizePlayerStats(snapshot.stats || []);
                const mergedStats = mergeIncomingStatsWithRollMetadata(
                    linkedStatsByOwnerIdRef.current[ownerId],
                    stats,
                );
                linkedStatsByOwnerIdRef.current = {
                    ...linkedStatsByOwnerIdRef.current,
                    [ownerId]: mergedStats,
                };
                setLinkedStatsByOwnerId(linkedStatsByOwnerIdRef.current);
                patchNotesWithStats(ownerId, mergedStats);
                return mergedStats;
            } catch (err) {
                fetchedStatsKeysRef.current.delete(fetchKey);
                console.warn("[NotePanel] Failed to fetch linked stats", err);
                throw err;
            }
        },
        [host, patchNotesWithStats, roomId],
    );

    const onRefreshActiveNoteStats = useCallback(
        () =>
            fetchLinkedStatsForOwner(
                linkedStatsTargetIdForNote(activeNote),
                true,
            ),
        [fetchLinkedStatsForOwner, linkedStatsTargetIdForNote, activeNote],
    );

    useEffect(() => {
        const updateViewportSize = () => setViewportSize(getViewportSize());

        updateViewportSize();
        window.addEventListener("resize", updateViewportSize);
        window.visualViewport?.addEventListener("resize", updateViewportSize);

        return () => {
            window.removeEventListener("resize", updateViewportSize);
            window.visualViewport?.removeEventListener(
                "resize",
                updateViewportSize,
            );
        };
    }, []);

    useEffect(() => {
        fetchedStatsKeysRef.current.clear();
        setLinkedStatsByOwnerId({});
        setNotesLoadState("loading");
    }, [roomId]);

    useEffect(() => {
        if (!fixedNoteId) return;
        setActiveNoteId(fixedNoteId);
        setActiveTabIndex(0);
    }, [fixedNoteId]);

    useEffect(() => {
        void flushPendingNoteFolderSave({ keepalive: true });
        debouncedSends.current.forEach((timeout) => clearTimeout(timeout));
        debouncedSends.current.clear();
        localEditProtectionTimeouts.current.forEach((timeout) =>
            clearTimeout(timeout),
        );
        localEditProtectionTimeouts.current.clear();
        locallyEditedNoteIds.current.clear();
        clearTimeout(noteFolderSaveTimeout.current);
        setNoteFolders([]);
        setCreatingNoteFolder(false);
        setCreatingNoteFolderParentId(null);
        setNewNoteFolderName("");
        setEditingNoteFolderId(null);
        setConfirmDeleteNoteFolder(null);
        setActiveNoteDrag(null);
        setNoteDragTarget(null);
        setActiveFolderDrag(null);
        setFolderDragTarget(null);

        return () => {
            void flushPendingNoteFolderSave({ keepalive: true });
            debouncedSends.current.forEach((timeout) => clearTimeout(timeout));
            debouncedSends.current.clear();
            localEditProtectionTimeouts.current.forEach((timeout) =>
                clearTimeout(timeout),
            );
            localEditProtectionTimeouts.current.clear();
            locallyEditedNoteIds.current.clear();
            clearTimeout(noteFolderSaveTimeout.current);
        };
    }, [flushPendingNoteFolderSave, playerId, roomId]);

    useEffect(() => {
        const flushFolders = () => {
            void flushPendingNoteFolderSave({ keepalive: true });
        };
        const flushWhenHidden = () => {
            if (document.visibilityState === "hidden") {
                flushFolders();
            }
        };

        window.addEventListener("pagehide", flushFolders);
        document.addEventListener("visibilitychange", flushWhenHidden);
        return () => {
            window.removeEventListener("pagehide", flushFolders);
            document.removeEventListener("visibilitychange", flushWhenHidden);
        };
    }, [flushPendingNoteFolderSave]);

    useEffect(() => {
        setNewNoteStatsOwnerId(defaultNewNoteStatsOwnerId);
    }, [defaultNewNoteStatsOwnerId]);

    useEffect(() => {
        if (!isOpen || !roomId) return;
        let cancelled = false;
        const loadCharacters = async () => {
            try {
                const snapshot = await host.fetchGameStatsCharacters(roomId);
                if (!cancelled) setCharacters(snapshot.characters || []);
            } catch {
                // Characters are optional. The existing note flow remains
                // available when a campaign does not use them.
                if (!cancelled) setCharacters([]);
            }
        };
        void loadCharacters();
        const onCharactersChanged = () => void loadCharacters();
        const unsubscribe = host.events?.on(
            "game-stats-characters-change",
            onCharactersChanged,
        );
        return () => {
            cancelled = true;
            unsubscribe?.();
        };
    }, [host, isOpen, roomId]);

    useEffect(() => {
        setActiveStatsOwnerSelectOpen(false);
        setPendingStatsReassign(null);
    }, [activeNoteId]);

    useEffect(() => {
        if (
            newNoteStatsOwnerId === playerId ||
            statsOwnerOptions.some((option) => option.value === newNoteStatsOwnerId)
        ) {
            return;
        }
        setNewNoteStatsOwnerId(playerId);
    }, [newNoteStatsOwnerId, playerId, statsOwnerOptions]);

    useEffect(() => {
        const ownerIds = new Set<string>();
        if (isOpen) ownerIds.add(playerId);
        if (activeNote) ownerIds.add(linkedStatsTargetIdForNote(activeNote));
        for (const noteId of poppedOutNoteIds) {
            const note = notes.find((entry) => entry.noteId === noteId);
            if (note) ownerIds.add(linkedStatsTargetIdForNote(note));
        }
        ownerIds.forEach((ownerId) => fetchLinkedStatsForOwner(ownerId));
    }, [
        activeNote,
        fetchLinkedStatsForOwner,
        isOpen,
        linkedStatsTargetIdForNote,
        notes,
        poppedOutNoteIds,
        playerId,
    ]);

    useEffect(() => {
        if (!showNewMenu) return;
        fetchLinkedStatsForOwner(playerId, true);
    }, [fetchLinkedStatsForOwner, playerId, showNewMenu]);

    useEffect(() => {
        const validNoteIds = new Set(myNotes.map((note) => note.noteId));
        setAndSaveNoteFolders((previous) =>
            normalizeNoteFolders(
                previous.map((folder) => ({
                    ...folder,
                    noteIds: folder.noteIds.filter((noteId) =>
                        validNoteIds.has(noteId),
                    ),
                })),
            ),
        );
    }, [myNotes, setAndSaveNoteFolders]);

    useEffect(() => {
        for (const [ownerId, stats] of Object.entries(linkedStatsByOwnerId)) {
            patchNotesWithStats(ownerId, stats);
        }
    }, [linkedStatsByOwnerId, notes.length, patchNotesWithStats]);

    const loadNotesAndTemplates =
        useCallback(async (): Promise<NotesTemplatesData> => {
            const cacheBust = `${Date.now().toString(36)}-${Math.random()
                .toString(36)
                .slice(2)}`;
            const [notesData, tmplData] = await Promise.all([
                host.requestJson<any>(
                    `/room/${encodeURIComponent(roomId)}/notes?playerId=${encodeURIComponent(playerId)}&_=${cacheBust}`,
                    { cache: "no-store" },
                    "Failed to fetch notes",
                ),
                host.requestJson<any>(
                    `/room/${encodeURIComponent(roomId)}/templates?playerId=${encodeURIComponent(playerId)}&_=${cacheBust}`,
                    { cache: "no-store" },
                    "Failed to fetch note templates",
                ),
            ]);

            return {
                notes: (notesData.notes || []) as NoteData[],
                noteFolders: normalizeNoteFolders(notesData.noteFolders || []),
                templates: (tmplData.templates || []) as {
                    templateId: string;
                    title: string;
                    content: string;
                }[],
            };
        }, [host, playerId, roomId]);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setDebouncedNoteSearch(noteSearch.trim());
        }, 300);
        return () => window.clearTimeout(timer);
    }, [noteSearch]);

    useEffect(() => {
        const query = debouncedNoteSearch.trim();
        const requestId = ++noteSearchRequestIdRef.current;
        if (!isOpen || !roomId || !playerId || !query || fixedNoteId) {
            setNoteSearchData(null);
            setNoteSearchLoading(false);
            setNoteSearchError(null);
            return;
        }

        let cancelled = false;
        setNoteSearchLoading(true);
        setNoteSearchError(null);
        const params = new URLSearchParams({
            playerId,
            q: query,
            searchScope: "notes",
            _: `${Date.now().toString(36)}-${Math.random()
                .toString(36)
                .slice(2)}`,
        });

        void host
            .requestJson<any>(
                `/room/${encodeURIComponent(roomId)}/notes?${params.toString()}`,
                { cache: "no-store" },
                "Failed to search notes",
            )
            .then((data) => {
                if (
                    cancelled ||
                    requestId !== noteSearchRequestIdRef.current
                ) {
                    return;
                }
                setNoteSearchData({
                    notes: (data.notes || []) as NoteData[],
                    noteFolders: normalizeNoteFolders(data.noteFolders || []),
                });
            })
            .catch((error) => {
                if (
                    cancelled ||
                    requestId !== noteSearchRequestIdRef.current
                ) {
                    return;
                }
                setNoteSearchData(null);
                setNoteSearchError(
                    error instanceof Error
                        ? error.message
                        : "Failed to search notes",
                );
            })
            .finally(() => {
                if (
                    !cancelled &&
                    requestId === noteSearchRequestIdRef.current
                ) {
                    setNoteSearchLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [
        debouncedNoteSearch,
        fixedNoteId,
        host,
        isOpen,
        playerId,
        roomId,
    ]);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setDebouncedFolderSearch(folderSearch.trim());
        }, 300);
        return () => window.clearTimeout(timer);
    }, [folderSearch]);

    useEffect(() => {
        const query = debouncedFolderSearch.trim();
        const requestId = ++folderSearchRequestIdRef.current;
        if (
            !isOpen ||
            !roomId ||
            !playerId ||
            !folderSearchOpen ||
            !isNoteSearchActive ||
            tab !== "mine" ||
            !query ||
            fixedNoteId
        ) {
            setFolderSearchData(null);
            setFolderSearchLoading(false);
            setFolderSearchError(null);
            return;
        }

        let cancelled = false;
        setFolderSearchLoading(true);
        setFolderSearchError(null);
        const params = new URLSearchParams({
            playerId,
            q: query,
            searchScope: "folders",
            _: `${Date.now().toString(36)}-${Math.random()
                .toString(36)
                .slice(2)}`,
        });

        void host
            .requestJson<any>(
                `/room/${encodeURIComponent(roomId)}/notes?${params.toString()}`,
                { cache: "no-store" },
                "Failed to search folders",
            )
            .then((data) => {
                if (
                    cancelled ||
                    requestId !== folderSearchRequestIdRef.current
                ) {
                    return;
                }
                setFolderSearchData({
                    notes: [],
                    noteFolders: normalizeNoteFolders(data.noteFolders || []),
                });
            })
            .catch((error) => {
                if (
                    cancelled ||
                    requestId !== folderSearchRequestIdRef.current
                ) {
                    return;
                }
                setFolderSearchData(null);
                setFolderSearchError(
                    error instanceof Error
                        ? error.message
                        : "Failed to search folders",
                );
            })
            .finally(() => {
                if (
                    !cancelled &&
                    requestId === folderSearchRequestIdRef.current
                ) {
                    setFolderSearchLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [
        debouncedFolderSearch,
        fixedNoteId,
        folderSearchOpen,
        host,
        isOpen,
        isNoteSearchActive,
        playerId,
        roomId,
        tab,
    ]);

    useEffect(() => {
        if (isNoteSearchActive && tab === "mine") return;
        setFolderSearchOpen(false);
        setFolderSearch("");
        setDebouncedFolderSearch("");
        setFolderSearchData(null);
    }, [isNoteSearchActive, tab]);

    const applyNotesTemplatesData = useCallback(
        (
            data: NotesTemplatesData,
            options: { remountActiveEditor?: boolean } = {},
        ) => {
            setNotesSynced(mergeNotesPreservingLocalEdits(data.notes));
            setNoteFolders(data.noteFolders);
            setCustomTemplates(
                data.templates.map((t) => ({
                    id: t.templateId,
                    name: t.title,
                    content: t.content,
                    isCustom: true,
                })),
            );
            if (options.remountActiveEditor && activeNoteId) {
                setEditorKey((k) => k + 1);
            }
        },
        [activeNoteId, mergeNotesPreservingLocalEdits, setNotesSynced],
    );

    const fetchNotesAndTemplates = useCallback(async () => {
        return loadNotesAndTemplates();
    }, [loadNotesAndTemplates]);

    const syncNotesAfterMutation = useCallback(
        async (
            options: {
                delayMs?: number;
                activateNewOwnedNoteFrom?: Set<string>;
                clearActiveNoteId?: string;
            } = {},
        ) => {
            const delayMs = options.delayMs ?? 350;
            if (delayMs > 0) {
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
            try {
                const data = await fetchNotesAndTemplates();
                const createdNotes = options.activateNewOwnedNoteFrom
                    ? data.notes.filter(
                          (note) =>
                              note.ownerId === playerId &&
                              !options.activateNewOwnedNoteFrom?.has(
                                  note.noteId,
                              ),
                      )
                    : [];
                if (createdNotes.length > 0) {
                    setActiveNoteId(createdNotes[createdNotes.length - 1].noteId);
                }
                if (options.clearActiveNoteId) {
                    const clearId = options.clearActiveNoteId;
                    setActiveNoteId((current) =>
                        current === clearId &&
                        !data.notes.some((note) => note.noteId === clearId)
                            ? null
                            : current,
                    );
                }
                applyNotesTemplatesData(data);
            } catch (error) {
                console.warn("[NotePanel] Failed to sync notes after mutation", error);
            }
        },
        [applyNotesTemplatesData, fetchNotesAndTemplates, playerId],
    );

    useEffect(() => {
        if (!isOpen || !roomId || !playerId) return;
        let cancelled = false;
        void loadNotesAndTemplates()
            .then((data) => {
                if (!cancelled) {
                    applyNotesTemplatesData(data);
                    setNotesLoadState("ready");
                }
            })
            .catch((error) => {
                console.warn("[NoteWorkspace] Failed to load notes", error);
                if (!cancelled) setNotesLoadState("error");
            });
        return () => {
            cancelled = true;
        };
    }, [applyNotesTemplatesData, isOpen, loadNotesAndTemplates, playerId, roomId]);

    // Toggle from Phaser
    useEffect(() => {
        const onToggle = () => {
            if (embedded || controlledOpen !== undefined) return;
            if (isOpenRef.current) {
                setAnimating(false);
                host.events?.emit("input-focus", { focused: false });
                setTimeout(() => setIsOpen(false), 200);
            } else {
                setIsOpen(true);
            }
        };
        return host.events?.on("note-toggle", onToggle);
    }, [controlledOpen, embedded, host.events]);

    useEffect(() => {
        if (controlledOpen !== undefined) {
            setIsOpen(controlledOpen);
            setAnimating(controlledOpen);
            return;
        }
        if (!embedded) return;
        setIsOpen(active);
        setAnimating(active);
    }, [active, controlledOpen, embedded]);

    useEffect(() => {
        if (isOpen) requestAnimationFrame(() => setAnimating(true));
    }, [isOpen]);

    // Clear unread badge when viewing the shared tab
    useEffect(() => {
        if (isOpen && tab === "shared" && unreadSharedCount > 0) {
            unreadRef.current = 0;
            setUnreadSharedCount(0);
            host.events?.emit("note-unread", 0);
        }
    }, [host.events, isOpen, tab, unreadSharedCount]);

    const notePermissionsFromMessage = useCallback(
        (permissions: any[] = []): NotePermission[] =>
            permissions.map((p: any) => ({
                playerId: p.playerId || "",
                playerName: p.playerName || "",
                canEdit: p.canEdit || false,
            })),
        [],
    );

    const mergeIncomingNote = useCallback(
        (
            note: NoteData,
            msg: any,
            options: { replaceLinkedStatsOwner?: boolean } = {},
        ): NoteData => {
            const remoteTitle = msg.title || note.title;
            const remoteContent = msg.content ?? note.content;
            const protectedLocal = locallyEditedNoteIds.current.has(
                note.noteId,
            );

            if (
                msg.playerId === playerId &&
                protectedLocal &&
                remoteTitle === note.title &&
                remoteContent === note.content
            ) {
                clearLocalEditProtection(note.noteId);
            }

            const preserveTitle =
                protectedLocal && remoteTitle !== note.title;
            const preserveContent =
                protectedLocal && remoteContent !== note.content;

            return {
                ...note,
                title: preserveTitle ? note.title : remoteTitle,
                content: preserveContent ? note.content : remoteContent,
                templateId: msg.templateId || note.templateId,
                permissions: msg.permissions
                    ? notePermissionsFromMessage(msg.permissions)
                    : note.permissions,
                linkedStatsOwnerId: options.replaceLinkedStatsOwner
                    ? msg.linkedStatsOwnerId || undefined
                    : msg.linkedStatsOwnerId || note.linkedStatsOwnerId,
            };
        },
        [clearLocalEditProtection, notePermissionsFromMessage, playerId],
    );

    const remountActiveEditorForIncomingContent = useCallback(
        (
            noteId: string | null | undefined,
            content: string | null | undefined,
        ) => {
            const normalizedNoteId = noteId || "";
            if (
                !selectedNoteId ||
                normalizedNoteId !== selectedNoteId ||
                content == null ||
                locallyEditedNoteIds.current.has(normalizedNoteId)
            ) {
                return;
            }
            const currentContent =
                notesRef.current.find((note) => note.noteId === normalizedNoteId)
                    ?.content ?? "";
            if (currentContent !== content) {
                setEditorKey((k) => k + 1);
            }
        },
        [selectedNoteId],
    );

    // Listen for note + template messages from server
    useEffect(() => {
        function onMessage(data: Uint8Array) {
            try {
                const decoded = game.Wrapper.decode(data);

                // --- Note messages ---
                if (decoded.note) {
                    const msg = decoded.note;

                    if (msg.type === "sync_list" && msg.notes) {
                        const synced: NoteData[] = msg.notes.map((n: any) => ({
                            noteId: n.noteId || "",
                            ownerId: n.playerId || "",
                            ownerName: n.playerName || "",
                            title: n.title || "Untitled",
                            content: n.content || "",
                            templateId: n.templateId || undefined,
                            linkedStatsOwnerId:
                                n.linkedStatsOwnerId || undefined,
                            permissions: (n.permissions || []).map(
                                (p: any) => ({
                                    playerId: p.playerId || "",
                                    playerName: p.playerName || "",
                                    canEdit: p.canEdit || false,
                                }),
                            ),
                        }));
                        setNotesSynced(
                            mergeNotesPreservingLocalEdits(synced),
                        );
                        setNotesLoadState("ready");
                        if (refreshingRef.current) {
                            refreshingRef.current = false;
                            setEditorKey((k) => k + 1);
                        }
                    } else if (msg.type === "create") {
                        const newNote: NoteData = {
                            noteId: msg.noteId || "",
                            ownerId: msg.playerId || "",
                            ownerName: msg.playerName || "",
                            title: msg.title || "Untitled",
                            content: msg.content || "",
                            templateId: msg.templateId || undefined,
                            linkedStatsOwnerId:
                                msg.linkedStatsOwnerId || undefined,
                            permissions: [],
                        };
                        setNotes((prev) => {
                            if (prev.some((n) => n.noteId === newNote.noteId))
                                return prev;
                            const next = [...prev, newNote];
                            notesRef.current = next;
                            return next;
                        });
                        if (msg.playerId === playerId && !fixedNoteId) {
                            setActiveNoteId(msg.noteId || null);
                            setToast({
                                message: "Note created",
                                type: "success",
                            });
                            setTimeout(() => setToast(null), 3000);
                        }
                        if ((msg.linkedStatsOwnerId || "").startsWith("character:")) {
                            host.events?.emit("game-stats-characters-change");
                        }
                    } else if (msg.type === "reassign_stats") {
                        remountActiveEditorForIncomingContent(
                            msg.noteId,
                            msg.content,
                        );
                        setNotes((prev) => {
                            const next = prev.map((n) =>
                                n.noteId === msg.noteId
                                    ? mergeIncomingNote(n, msg, {
                                          replaceLinkedStatsOwner: true,
                                      })
                                    : n,
                            );
                            notesRef.current = next;
                            return next;
                        });
                        host.events?.emit("game-stats-characters-change");
                    } else if (msg.type === "update") {
                        // No editor remount here: NoteEditor applies remote
                        // content in place, which keeps collaborator cursor
                        // decorations (NotePresence) alive while others type.
                        setNotes((prev) => {
                            const next = prev.map((n) =>
                                n.noteId === msg.noteId
                                    ? mergeIncomingNote(n, msg)
                                    : n,
                            );
                            notesRef.current = next;
                            return next;
                        });
                    } else if (msg.type === "delete") {
                        const deletedNoteId = msg.noteId || "";
                        clearDebouncedNoteSave(deletedNoteId);
                        clearLocalEditProtection(deletedNoteId);
                        setNotes((prev) => {
                            const next = prev.filter(
                                (n) => n.noteId !== deletedNoteId,
                            );
                            notesRef.current = next;
                            return next;
                        });
                        host.events?.emit("game-stats-characters-change");
                        setActiveNoteId((prev) =>
                            prev === deletedNoteId ? null : prev,
                        );
                    } else if (msg.type === "share") {
                        const isFromOther = msg.playerId !== playerId;
                        // Bump unread badge for any share event from another player
                        if (
                            isFromOther &&
                            (!isOpenRef.current || tabRef.current !== "shared")
                        ) {
                            unreadRef.current += 1;
                            setUnreadSharedCount(unreadRef.current);
                            host.events?.emit("note-unread", unreadRef.current);
                        }
                        setNotes((prev) => {
                            const existing = prev.find(
                                (n) => n.noteId === msg.noteId,
                            );
                            if (existing) {
                                const next = prev.map((n) =>
                                    n.noteId === msg.noteId
                                        ? mergeIncomingNote(n, msg)
                                        : n,
                                );
                                notesRef.current = next;
                                return next;
                            }
                            const next = [
                                ...prev,
                                {
                                    noteId: msg.noteId || "",
                                    ownerId: msg.playerId || "",
                                    ownerName: msg.playerName || "",
                                    title: msg.title || "Untitled",
                                    content: msg.content || "",
                                    linkedStatsOwnerId:
                                        msg.linkedStatsOwnerId || undefined,
                                    permissions: (msg.permissions || []).map(
                                        (p: any) => ({
                                            playerId: p.playerId || "",
                                            playerName: p.playerName || "",
                                            canEdit: p.canEdit || false,
                                        }),
                                    ),
                                },
                            ];
                            notesRef.current = next;
                            return next;
                        });
                    }
                }

                // --- Template messages ---
                if (decoded.template) {
                    const msg = decoded.template;

                    if (msg.type === "sync_list" && msg.templates) {
                        const synced: NoteTemplate[] = msg.templates.map(
                            (t: any) => ({
                                id: t.templateId || "",
                                name: t.title || "Untitled",
                                content: t.content || "",
                                isCustom: true,
                                ownerId: t.playerId || "",
                            }),
                        );
                        setCustomTemplates(synced);
                    } else if (msg.type === "save") {
                        setCustomTemplates((prev) => [
                            ...prev,
                            {
                                id: msg.templateId || "",
                                name: msg.title || "",
                                content: msg.content || "",
                                isCustom: true,
                                ownerId: playerId,
                            },
                        ]);
                        setToast({
                            message: `Template "${msg.title}" saved`,
                            type: "success",
                        });
                        setTimeout(() => setToast(null), 3000);
                    } else if (msg.type === "share_request") {
                        setPendingShareRequest({
                            templateId: msg.templateId || "",
                            templateTitle: msg.title || "Untitled",
                            templateContent: msg.content || "",
                            fromPlayerId: msg.playerId || "",
                            fromPlayerName: msg.playerName || "",
                        });
                    } else if (msg.type === "share_notify") {
                        if (msg.approved && msg.templateId && msg.content) {
                            // A share was approved — add the new template
                            setCustomTemplates((prev) => [
                                ...prev,
                                {
                                    id: msg.templateId || "",
                                    name: msg.title || "",
                                    content: msg.content || "",
                                    isCustom: true,
                                    ownerId: playerId,
                                },
                            ]);
                        }
                        // Show notification
                        if (msg.title) {
                            setToast({
                                message: msg.title,
                                type: msg.approved ? "success" : "error",
                            });
                            setTimeout(() => setToast(null), 3000);
                        }
                    }
                }
            } catch {
                // not a relevant message
            }
        }
        return host.socket.subscribeMessage(onMessage);
    }, [
        activeNoteId,
        clearDebouncedNoteSave,
        clearLocalEditProtection,
        mergeIncomingNote,
        mergeNotesPreservingLocalEdits,
        playerId,
        remountActiveEditorForIncomingContent,
        setNotesSynced,
        host.socket,
        host.events,
        fixedNoteId,
    ]);

    useEffect(() => {
        const onPlayerStatsSync = ({
            targetUserId,
            stats,
        }: {
            targetUserId: string;
            stats: PlayerStat[];
        }) => {
            if (!targetUserId) return;
            const normalizedStats = normalizePlayerStats(stats || []);
            let mergedStats = normalizedStats;
            setLinkedStatsByOwnerId((prev) => {
                mergedStats = mergeIncomingStatsWithRollMetadata(
                    prev[targetUserId],
                    normalizedStats,
                );
                return {
                    ...prev,
                    [targetUserId]: mergedStats,
                };
            });
            patchNotesWithStats(targetUserId, mergedStats);
        };

        return host.events?.on("player-stats-sync", onPlayerStatsSync);
    }, [host.events, patchNotesWithStats]);

    const closePanel = useCallback(() => {
        void flushPendingNoteFolderSave({ keepalive: true });
        onClose?.();
        if (embedded || controlledOpen !== undefined) {
            host.events?.emit("input-focus", { focused: false });
            return;
        }
        setAnimating(false);
        host.events?.emit("input-focus", { focused: false });
        setTimeout(() => setIsOpen(false), 200);
    }, [controlledOpen, embedded, flushPendingNoteFolderSave, host.events, onClose]);

    const createNote = useCallback(
        (templateId: string) => {
            const builtIn = BUILTIN_TEMPLATES.find((t) => t.id === templateId);
            const custom = customTemplates.find((t) => t.id === templateId);
            const template = builtIn || custom;
            const linkedStatsOwnerId =
                newNoteStatsOwnerId !== playerId &&
                (canManagePlayerStats ||
                    availableCharacterTargetOptions.some(
                        (option) => option.value === newNoteStatsOwnerId,
                    ))
                    ? newNoteStatsOwnerId
                    : "";
            const existingNoteIds = new Set(
                notesRef.current.map((note) => note.noteId),
            );
            const msg = game.Wrapper.create({
                note: {
                    playerId,
                    playerName,
                    type: "create",
                    title: template?.name || "Untitled",
                    content: template?.content || "",
                    templateId,
                    linkedStatsOwnerId,
                },
            });
            const sent = trySend(
                game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
            );
            if (sent) {
                void syncNotesAfterMutation({
                    activateNewOwnedNoteFrom: existingNoteIds,
                });
            }
            setShowNewMenu(false);
        },
        [
            canManagePlayerStats,
            customTemplates,
            availableCharacterTargetOptions,
            newNoteStatsOwnerId,
            playerId,
            playerName,
            syncNotesAfterMutation,
            trySend,
        ],
    );

    const updateNote = useCallback(
        (field: "title" | "content", value: string) => {
            if (!activeNote) return;
            markNoteLocallyEdited(activeNote.noteId);
            updateLocalNote(activeNote.noteId, (note) => ({
                ...note,
                [field]: value,
            }));
            scheduleDebouncedNoteSave(activeNote.noteId);
        },
        [
            activeNote,
            markNoteLocallyEdited,
            scheduleDebouncedNoteSave,
            updateLocalNote,
        ],
    );

    const saveNoteNow = useCallback(() => {
        if (!activeNote) return;
        clearDebouncedNoteSave(activeNote.noteId);
        markNoteLocallyEdited(activeNote.noteId);
        const sent = sendNoteUpdate(activeNote.noteId);
        if (sent) {
            setToast({ message: "Note saved", type: "success" });
        }
        setTimeout(() => setToast(null), 3000);
    }, [
        activeNote,
        clearDebouncedNoteSave,
        markNoteLocallyEdited,
        sendNoteUpdate,
    ]);

    /** Refreshes notes and templates via HTTP. */
    const refreshNotes = useCallback(async () => {
        const flushedSaves = flushPendingNoteSaves();
        const folderSave = flushPendingNoteFolderSave();
        refreshingRef.current = true;
        try {
            if (folderSave) {
                await folderSave;
            }
            if (flushedSaves) {
                await new Promise((resolve) => setTimeout(resolve, 350));
            }
            const data = await fetchNotesAndTemplates();
            applyNotesTemplatesData(data, { remountActiveEditor: true });
            setToast({ message: "Notes refreshed", type: "success" });
        } catch (err) {
            console.error("[NotePanel] Failed to refresh notes/templates", err);
            setToast({ message: "Failed to refresh notes", type: "error" });
        } finally {
            refreshingRef.current = false;
            setTimeout(() => setToast(null), 3000);
        }
    }, [
        applyNotesTemplatesData,
        fetchNotesAndTemplates,
        flushPendingNoteFolderSave,
        flushPendingNoteSaves,
    ]);

    const deleteNote = useCallback(() => {
        if (!activeNote || activeNote.ownerId !== playerId) return;
        const deletedNoteId = activeNote.noteId;
        clearDebouncedNoteSave(deletedNoteId);
        clearLocalEditProtection(deletedNoteId);
        const msg = game.Wrapper.create({
            note: { playerId, noteId: deletedNoteId, type: "delete" },
        });
        const sent = trySend(
            game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
        );
        if (sent) {
            setNotes((prev) => {
                const next = prev.filter((note) => note.noteId !== deletedNoteId);
                notesRef.current = next;
                return next;
            });
            setActiveNoteId((current) =>
                current === deletedNoteId ? null : current,
            );
            setPoppedOutNoteIds((current) => {
                if (!current.has(deletedNoteId)) return current;
                const next = new Set(current);
                next.delete(deletedNoteId);
                return next;
            });
            void syncNotesAfterMutation({ clearActiveNoteId: deletedNoteId });
        }
        setConfirmDeleteNote(false);
    }, [
        activeNote,
        clearDebouncedNoteSave,
        clearLocalEditProtection,
        playerId,
        syncNotesAfterMutation,
        trySend,
    ]);

    const createNoteFolder = useCallback(() => {
        const name = newNoteFolderName.trim();
        if (!name) return;
        setAndSaveNoteFolders((previous) => [
            ...previous,
            {
                folderId: createNoteFolderId(),
                name,
                parentFolderId: creatingNoteFolderParentId || undefined,
                noteIds: [],
                isOpen: true,
            },
        ]);
        setCreatingNoteFolder(false);
        setCreatingNoteFolderParentId(null);
        setNewNoteFolderName("");
    }, [
        creatingNoteFolderParentId,
        newNoteFolderName,
        setAndSaveNoteFolders,
    ]);

    const renameNoteFolder = useCallback(
        (folderId: string, name: string) => {
            const trimmed = name.trim();
            if (!trimmed) return;
            setAndSaveNoteFolders((previous) =>
                previous.map((folder) =>
                    folder.folderId === folderId
                        ? { ...folder, name: trimmed }
                        : folder,
                ),
            );
        },
        [setAndSaveNoteFolders],
    );

    const deleteNoteFolder = useCallback(
        (folderId: string) => {
            setAndSaveNoteFolders((previous) => {
                const deletedFolder = previous.find(
                    (folder) => folder.folderId === folderId,
                );
                const promotedParentId = deletedFolder?.parentFolderId;
                return previous
                    .filter((folder) => folder.folderId !== folderId)
                    .map((folder) =>
                        folder.parentFolderId === folderId
                            ? {
                                  ...folder,
                                  parentFolderId: promotedParentId,
                              }
                            : folder,
                    );
            });
        },
        [setAndSaveNoteFolders],
    );

    const toggleNoteFolder = useCallback(
        (folderId: string) => {
            setAndSaveNoteFolders((previous) =>
                previous.map((folder) =>
                    folder.folderId === folderId
                        ? { ...folder, isOpen: !folder.isOpen }
                        : folder,
                ),
            );
        },
        [setAndSaveNoteFolders],
    );

    const moveNoteToFolder = useCallback(
        (noteId: string, toFolderId: string | null) => {
            if (!noteId) return;
            setAndSaveNoteFolders((previous) =>
                previous.map((folder) => {
                    const noteIds = folder.noteIds.filter((id) => id !== noteId);
                    if (folder.folderId === toFolderId) {
                        return { ...folder, noteIds: [...noteIds, noteId] };
                    }
                    return { ...folder, noteIds };
                }),
            );
        },
        [setAndSaveNoteFolders],
    );

    const canMoveNoteFolderToParent = useCallback(
        (folderId: string, targetParentId: string | null) => {
            const normalizedTarget = targetParentId || "";
            if (!folderId) return false;
            if (!normalizedTarget) return true;
            if (folderId === normalizedTarget) return false;

            let current = normalizedTarget;
            const seen = new Set<string>();
            while (current) {
                if (current === folderId || seen.has(current)) return false;
                seen.add(current);
                current = noteFolderParentById.get(current) || "";
            }
            return noteFolderParentById.has(normalizedTarget);
        },
        [noteFolderParentById],
    );

    const moveNoteFolderToParent = useCallback(
        (folderId: string, targetParentId: string | null) => {
            if (!canMoveNoteFolderToParent(folderId, targetParentId)) return;
            const normalizedTarget = targetParentId || undefined;
            setAndSaveNoteFolders((previous) =>
                previous.map((folder) => {
                    if (folder.folderId === folderId) {
                        return {
                            ...folder,
                            parentFolderId: normalizedTarget,
                        };
                    }
                    if (
                        normalizedTarget &&
                        folder.folderId === normalizedTarget
                    ) {
                        return { ...folder, isOpen: true };
                    }
                    return folder;
                }),
            );
        },
        [canMoveNoteFolderToParent, setAndSaveNoteFolders],
    );

    const confirmStatsReassign = useCallback(() => {
        if (!pendingStatsReassign) return;
        const note = notes.find(
            (entry) => entry.noteId === pendingStatsReassign.noteId,
        );
        if (!note) {
            setPendingStatsReassign(null);
            return;
        }
        const canEditNote =
            note.ownerId === playerId ||
            note.permissions.some(
                (permission) =>
                    permission.playerId === playerId && permission.canEdit,
            );
        if (!canEditNote) {
            setPendingStatsReassign(null);
            return;
        }

        const targetId = pendingStatsReassign.targetId.trim() || note.ownerId;
        const targetIsOwnedCharacter = characterTargetOptions.some(
            (option) => option.value === targetId,
        );
        if (
            !canManagePlayerStats &&
            (note.ownerId !== playerId ||
                (targetId !== playerId && !targetIsOwnedCharacter))
        ) {
            setPendingStatsReassign(null);
            return;
        }
        const linkedStatsOwnerId = targetId === note.ownerId ? "" : targetId;
        updateLocalNote(note.noteId, (entry) => ({
            ...entry,
            linkedStatsOwnerId: linkedStatsOwnerId || undefined,
        }));
        const msg = game.Wrapper.create({
            note: {
                playerId,
                playerName,
                noteId: note.noteId,
                type: "reassign_stats",
                linkedStatsOwnerId,
            },
        });
        trySend(game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>);
        setPendingStatsReassign(null);
        setToast({ message: "Stats binding updated", type: "success" });
        setTimeout(() => setToast(null), 3000);
    }, [
        canManagePlayerStats,
        characterTargetOptions,
        notes,
        pendingStatsReassign,
        playerId,
        playerName,
        trySend,
        updateLocalNote,
    ]);

    const saveAsTemplate = useCallback(() => {
        if (!activeNote) return;
        const msg = game.Wrapper.create({
            template: {
                playerId,
                playerName,
                type: "save",
                title: activeNote.title,
                content: activeNote.content,
            },
        });
        trySend(game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>);
    }, [activeNote, playerId, playerName]);

    const deleteTemplate = useCallback(
        (templateId: string) => {
            if (confirmDeleteTemplateId !== templateId) {
                setConfirmDeleteTemplateId(templateId);
                return;
            }
            const msg = game.Wrapper.create({
                template: { playerId, type: "delete", templateId },
            });
            trySend(
                game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
            );
            setCustomTemplates((prev) =>
                prev.filter((t) => t.id !== templateId),
            );
            setConfirmDeleteTemplateId(null);
        },
        [playerId, confirmDeleteTemplateId],
    );

    const shareTemplate = useCallback(
        (
            templateId: string,
            targetPlayerId: string,
            targetPlayerName: string,
        ) => {
            const msg = game.Wrapper.create({
                template: {
                    playerId,
                    playerName,
                    type: "share_request",
                    templateId,
                    targetPlayerId,
                    targetPlayerName,
                },
            });
            trySend(
                game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
            );
            setShowTemplateShareModal(false);
        },
        [playerId, playerName],
    );

    const respondToTemplateShare = useCallback(
        (approved: boolean) => {
            if (!pendingShareRequest) return;
            const msg = game.Wrapper.create({
                template: {
                    playerId,
                    playerName,
                    type: "share_response",
                    templateId: pendingShareRequest.templateId,
                    title: pendingShareRequest.templateTitle,
                    content: pendingShareRequest.templateContent,
                    targetPlayerId: pendingShareRequest.fromPlayerId,
                    approved,
                },
            });
            trySend(
                game.Wrapper.encode(msg).finish() as Uint8Array<ArrayBuffer>,
            );
            setPendingShareRequest(null);
        },
        [pendingShareRequest, playerId, playerName],
    );

    const onFocus = useCallback(
        () => host.events?.emit("input-focus", { focused: true }),
        [host.events],
    );
    const onBlur = useCallback(
        () => host.events?.emit("input-focus", { focused: false }),
        [host.events],
    );

    const clampNoteListHeight = useCallback((height: number) => {
        const panelBody = panelBodyRef.current;
        const noteList = noteListRef.current;
        if (!panelBody || !noteList) return height;

        const panelRect = panelBody.getBoundingClientRect();
        const listRect = noteList.getBoundingClientRect();
        const maxHeight = Math.max(
            MIN_NOTE_LIST_HEIGHT,
            panelRect.bottom - listRect.top - MIN_NOTE_EDITOR_HEIGHT,
        );
        return Math.round(
            Math.max(MIN_NOTE_LIST_HEIGHT, Math.min(maxHeight, height)),
        );
    }, []);

    const startNoteListResize = useCallback(
        (event: React.PointerEvent<HTMLDivElement>) => {
            if (!activeNote) return;
            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.setPointerCapture(event.pointerId);
            setResizingNoteList(true);
            noteListResizeStartRef.current = {
                clientY: event.clientY,
                height: noteListHeight,
            };
        },
        [activeNote, noteListHeight],
    );

    const moveNoteListResize = useCallback(
        (event: React.PointerEvent<HTMLDivElement>) => {
            if (!resizingNoteList) return;
            event.preventDefault();
            event.stopPropagation();
            const start = noteListResizeStartRef.current;
            if (!start) return;
            setNoteListHeight(
                clampNoteListHeight(
                    start.height + event.clientY - start.clientY,
                ),
            );
        },
        [clampNoteListHeight, resizingNoteList],
    );

    const stopNoteListResize = useCallback(
        (event: React.PointerEvent<HTMLDivElement>) => {
            if (!resizingNoteList) return;
            event.preventDefault();
            event.stopPropagation();
            setResizingNoteList(false);
            noteListResizeStartRef.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
            }
        },
        [resizingNoteList],
    );

    const selectNote = useCallback(
        (noteId: string) => {
            if (fixedNoteId) return;
            if (activeNoteId === noteId) {
                setActiveNoteId(null);
            } else {
                setActiveNoteId(noteId);
                setActiveTabIndex(0);
            }
            setShowShareModal(false);
            setShowTemplateShareModal(false);
            setConfirmDeleteNote(false);
        },
        [activeNoteId, fixedNoteId],
    );

    const renderNoteRow = (
        note: NoteData,
        folderId: string | null,
        allowDrag: boolean,
    ) => (
        <div
            key={note.noteId}
            onClick={() => selectNote(note.noteId)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                cursor: "pointer",
                backgroundColor:
                    activeNoteId === note.noteId ? "#334" : "transparent",
                borderLeft:
                    activeNoteId === note.noteId
                        ? "3px solid #4488ff"
                        : "3px solid transparent",
            }}
            onMouseEnter={(event) => {
                if (activeNoteId !== note.noteId) {
                    event.currentTarget.style.backgroundColor = "#2a2a2a";
                }
            }}
            onMouseLeave={(event) => {
                if (activeNoteId !== note.noteId) {
                    event.currentTarget.style.backgroundColor = "transparent";
                }
            }}
        >
            {allowDrag && (
                <span
                    draggable
                    title="Move to folder"
                    style={{
                        cursor: "grab",
                        color: "#777",
                        fontSize: 13,
                        lineHeight: 1,
                        padding: "2px 3px",
                        userSelect: "none",
                    }}
                    onClick={(event) => event.stopPropagation()}
                    onDragStart={(event) => {
                        event.stopPropagation();
                        event.dataTransfer.effectAllowed = "move";
                        event.dataTransfer.setData("noteId", note.noteId);
                        event.dataTransfer.setData("fromFolderId", folderId ?? "");
                        setActiveNoteDrag({ fromFolderId: folderId });
                    }}
                    onDragEnd={(event) => {
                        event.stopPropagation();
                        setActiveNoteDrag(null);
                        setNoteDragTarget(null);
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                >
                    ::
                </span>
            )}
            <div style={{ minWidth: 0, flex: 1 }}>
                <div
                    style={{
                        color: "#ddd",
                        fontSize: 13,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {note.title}
                </div>
                {note.ownerId !== playerId && (
                    <div style={{ color: "#888", fontSize: 10 }}>
                        by {note.ownerName}
                    </div>
                )}
            </div>
        </div>
    );

    const renderCreateNoteFolderForm = (parentFolderId: string | null) => (
        <div className="flex gap-1 px-2 py-1">
            <input
                autoFocus
                value={newNoteFolderName}
                onChange={(event) => setNewNoteFolderName(event.target.value)}
                onKeyDown={(event) => {
                    event.stopPropagation();
                    if (event.key === "Enter") {
                        createNoteFolder();
                    }
                    if (event.key === "Escape") {
                        setCreatingNoteFolder(false);
                        setCreatingNoteFolderParentId(null);
                    }
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={
                    parentFolderId ? "Subfolder name" : "Folder name"
                }
                style={{
                    ...S.input,
                    height: 28,
                    minWidth: 0,
                    flex: 1,
                    fontSize: 12,
                }}
            />
            <GameButton
                onClick={createNoteFolder}
                style={{
                    padding: "2px 8px",
                    fontSize: 11,
                }}
            >
                OK
            </GameButton>
            <GameButton
                onClick={() => {
                    setCreatingNoteFolder(false);
                    setCreatingNoteFolderParentId(null);
                }}
                style={{
                    padding: "2px 8px",
                    fontSize: 11,
                    backgroundColor: "#333",
                }}
            >
                X
            </GameButton>
        </div>
    );

    const renderNoteFolderTree = (
        folder: NoteFolder,
        folderTargetMode = false,
    ) => {
        const childFolders = (
            noteFoldersByParentId.get(folder.folderId) || []
        ).filter(
            (childFolder) =>
                !folderTargetMode ||
                folderSearchResultIdSet.has(childFolder.folderId),
        );
        const folderNotes = folderTargetMode
            ? []
            : folder.noteIds
                  .map((noteId) => myNotesById.get(noteId))
                  .filter((note): note is NoteData => !!note);
        const isFolderDropAllowed =
            !!activeFolderDrag &&
            canMoveNoteFolderToParent(activeFolderDrag.folderId, folder.folderId);
        const isOver =
            noteDragTarget === folder.folderId ||
            folderDragTarget === folder.folderId;

        return (
            <FolderCollapsible
                key={folder.folderId}
                open={folderTargetMode || folder.isOpen}
                isDropTarget={isOver}
                toggleDisabled={editingNoteFolderId === folder.folderId}
                onToggle={() => toggleNoteFolder(folder.folderId)}
                onDragOver={(event: DragEvent<HTMLDivElement>) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (activeNoteDrag && noteDragTarget !== folder.folderId) {
                        setNoteDragTarget(folder.folderId);
                    }
                    if (activeFolderDrag) {
                        setFolderDragTarget(
                            isFolderDropAllowed ? folder.folderId : null,
                        );
                    }
                }}
                onDragLeave={(event: DragEvent<HTMLDivElement>) => {
                    const related = event.relatedTarget as Node | null;
                    if (
                        !related ||
                        !event.currentTarget.contains(related)
                    ) {
                        setNoteDragTarget(null);
                        setFolderDragTarget(null);
                    }
                }}
                onDrop={(event: DragEvent<HTMLDivElement>) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const movedFolderId =
                        event.dataTransfer.getData("noteFolderId");
                    if (movedFolderId) {
                        moveNoteFolderToParent(movedFolderId, folder.folderId);
                        setActiveFolderDrag(null);
                        setFolderDragTarget(null);
                        return;
                    }
                    const noteId = event.dataTransfer.getData("noteId");
                    moveNoteToFolder(noteId, folder.folderId);
                    setActiveNoteDrag(null);
                    setNoteDragTarget(null);
                }}
                className="px-2"
                arrowClassName="text-white/45"
                leading={folderTargetMode ? undefined : (
                    <span
                        draggable
                        title="Move folder"
                        className="cursor-grab select-none px-1 text-sm leading-none text-white/35 hover:text-white/75"
                        onClick={(event) => event.stopPropagation()}
                        onDragStart={(event) => {
                            event.stopPropagation();
                            event.dataTransfer.effectAllowed = "move";
                            event.dataTransfer.setData(
                                "noteFolderId",
                                folder.folderId,
                            );
                            setActiveFolderDrag({
                                folderId: folder.folderId,
                            });
                            setFolderDragTarget(null);
                        }}
                        onDragEnd={(event) => {
                            event.stopPropagation();
                            setActiveFolderDrag(null);
                            setFolderDragTarget(null);
                        }}
                        onPointerDown={(event) => event.stopPropagation()}
                    >
                        ::
                    </span>
                )}
                title={
                    editingNoteFolderId === folder.folderId ? (
                        <input
                            autoFocus
                            value={editingNoteFolderName}
                            onChange={(event) =>
                                setEditingNoteFolderName(event.target.value)
                            }
                            onKeyDown={(event) => {
                                event.stopPropagation();
                                if (event.key === "Enter") {
                                    renameNoteFolder(
                                        folder.folderId,
                                        editingNoteFolderName,
                                    );
                                    setEditingNoteFolderId(null);
                                }
                                if (event.key === "Escape") {
                                    setEditingNoteFolderId(null);
                                }
                            }}
                            onFocus={onFocus}
                            onBlur={() => {
                                renameNoteFolder(
                                    folder.folderId,
                                    editingNoteFolderName,
                                );
                                setEditingNoteFolderId(null);
                                onBlur();
                            }}
                            onClick={(event) => event.stopPropagation()}
                            className="h-6 min-w-0 flex-1 rounded border border-sky-300/45 bg-black/45 px-2 text-xs text-white outline-none"
                        />
                    ) : (
                        <span
                            className={`min-w-0 flex-1 truncate text-xs font-semibold ${
                                folderTargetMode
                                    ? "text-sky-200"
                                    : "text-white"
                            }`}
                        >
                            {folder.name}
                        </span>
                    )
                }
                count={folderNotes.length}
                actions={folderTargetMode ? undefined : (
                    <>
                        <GameButton
                            onClick={() => {
                                setAndSaveNoteFolders((previous) =>
                                    previous.map((entry) =>
                                        entry.folderId === folder.folderId
                                            ? { ...entry, isOpen: true }
                                            : entry,
                                    ),
                                );
                                setCreatingNoteFolder(true);
                                setCreatingNoteFolderParentId(folder.folderId);
                                setNewNoteFolderName("");
                            }}
                            style={{
                                padding: "2px 6px",
                                fontSize: 10,
                                backgroundColor: "transparent",
                                border: "1px solid #3f6f88",
                                color: "#bcecff",
                            }}
                        >
                            New
                        </GameButton>
                        <GameButton
                            onClick={() => {
                                setEditingNoteFolderId(folder.folderId);
                                setEditingNoteFolderName(folder.name);
                            }}
                            style={{
                                padding: "2px 6px",
                                fontSize: 10,
                                backgroundColor: "transparent",
                                border: "1px solid #555",
                                color: "#ccc",
                            }}
                        >
                            Edit
                        </GameButton>
                        <GameButton
                            onClick={() =>
                                setConfirmDeleteNoteFolder({
                                    folderId: folder.folderId,
                                    name: folder.name,
                                })
                            }
                            style={{
                                padding: "2px 6px",
                                fontSize: 10,
                                backgroundColor: "transparent",
                                border: "1px solid #884444",
                                color: "#ff8888",
                            }}
                        >
                            X
                        </GameButton>
                    </>
                )}
                contentClassName="ml-3 space-y-1 border-l border-white/10 pl-2"
            >
                {creatingNoteFolder &&
                    !folderTargetMode &&
                    creatingNoteFolderParentId === folder.folderId &&
                    renderCreateNoteFolderForm(folder.folderId)}
                {childFolders.map((childFolder) =>
                    renderNoteFolderTree(childFolder, folderTargetMode),
                )}
                {folderNotes.length > 0 ? (
                    folderNotes.map((note) =>
                        renderNoteRow(note, folder.folderId, true),
                    )
                ) : !folderTargetMode &&
                  (childFolders.length === 0 ||
                  creatingNoteFolderParentId === folder.folderId ? (
                    <div className="px-2 py-1 text-xs text-white/35">
                        Empty
                    </div>
                ) : null)}
            </FolderCollapsible>
        );
    };

    return (
        <>
            <DraggablePanel
                key={useMobilePanelLayout ? "notes-mobile" : "notes-desktop"}
                visible={isOpen}
                animating={animating}
                defaultWidth={notePanelWidth}
                defaultHeight={notePanelHeight}
                embedded={embedded}
                anchorRight={useMobilePanelLayout ? false : true}
                offsetX={useMobilePanelLayout ? 0 : undefined}
                offsetY={useMobilePanelLayout ? 0 : 100}
                transformOrigin={
                    useMobilePanelLayout ? "top left" : "top right"
                }
                minWidth={
                    useMobilePanelLayout
                        ? Math.min(200, notePanelWidth)
                        : undefined
                }
                minHeight={
                    useMobilePanelLayout
                        ? Math.min(200, notePanelHeight)
                        : undefined
                }
                style={
                    useMobilePanelLayout
                        ? {
                              width: notePanelWidth,
                              height: notePanelHeight,
                              overflow: "hidden",
                          }
                        : undefined
                }
                // transformOrigin="bottom right"
            >
                <div
                    ref={panelBodyRef}
                    className="kmz-note-theme kmz-note-workspace"
                    style={{
                        ...S.panel,
                        width: "100%",
                        maxWidth: "100%",
                        boxSizing: "border-box",
                        overflow:
                            embedded || useMobilePanelLayout
                                ? "hidden"
                                : "visible",
                    }}
                >
                    {/* Header — drag handle */}
                    {!fixedNoteId && <div style={S.header} data-drag-handle>
                        <span
                            style={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: 14,
                            }}
                        >
                            Notes
                        </span>
                        <GameButton
                            onClick={closePanel}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#ff5555",
                                fontSize: 18,
                                fontWeight: "bold",
                                lineHeight: 1,
                                padding: 0,
                            }}
                        >
                            −
                        </GameButton>
                    </div>}

                    {/* Toast notification */}
                    {toast && (
                        <div
                            style={{
                                padding: "6px 12px",
                                backgroundColor:
                                    toast.type === "success"
                                        ? "#223322"
                                        : "#442222",
                                borderBottom: `1px solid ${toast.type === "success" ? "#336633" : "#663333"}`,
                                color:
                                    toast.type === "success"
                                        ? "#88dd88"
                                        : "#ff8888",
                                fontSize: 12,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>{toast.message}</span>
                            <span
                                onClick={() => setToast(null)}
                                style={{
                                    cursor: "pointer",
                                    color:
                                        toast.type === "success"
                                            ? "#44bb44"
                                            : "#ff5555",
                                }}
                            >
                                x
                            </span>
                        </div>
                    )}

                    {/* Incoming template share request */}
                    {!fixedNoteId && pendingShareRequest && (
                        <div
                            style={{
                                padding: "8px 12px",
                                backgroundColor: "#253025",
                                borderBottom: "1px solid #446644",
                                color: "#88dd88",
                                fontSize: 12,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>
                                <strong>
                                    {pendingShareRequest.fromPlayerName}
                                </strong>{" "}
                                wants to share template &quot;
                                {pendingShareRequest.templateTitle}&quot;
                            </span>
                            <div style={{ display: "flex", gap: 6 }}>
                                <GameButton
                                    onClick={() => respondToTemplateShare(true)}
                                    style={{
                                        padding: "2px 8px",
                                        fontSize: 10,
                                        backgroundColor: "#44bb44",
                                        color: "#fff",
                                    }}
                                >
                                    Accept
                                </GameButton>
                                <GameButton
                                    onClick={() =>
                                        respondToTemplateShare(false)
                                    }
                                    style={{
                                        padding: "2px 8px",
                                        fontSize: 10,
                                        backgroundColor: "#bb4444",
                                        color: "#fff",
                                    }}
                                >
                                    Decline
                                </GameButton>
                            </div>
                        </div>
                    )}

                    {/* Tabs, search, and create controls are workspace-only. */}
                    {!fixedNoteId && (<div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 12px",
                            borderBottom: "1px solid #333",
                            overflow: "visible",
                            position: "relative",
                            zIndex: 15,
                            flexWrap: useMobilePanelLayout
                                ? "wrap"
                                : "nowrap",
                        }}
                    >
                        <GameButton
                            style={{
                                backgroundColor:
                                    tab === "mine" ? "#4488ff" : "#333",
                            }}
                            onClick={() => setTab("mine")}
                        >
                            My Notes
                        </GameButton>
                        <GameButton
                            style={{
                                backgroundColor:
                                    tab === "shared" ? "#4488ff" : "#333",
                                position: "relative",
                            }}
                            onClick={() => setTab("shared")}
                        >
                            Shared
                            {unreadSharedCount > 0 && (
                                <span className="bg-red-500 text-white text-[9px] rounded-full px-1 min-w-[14px] text-center ml-1">
                                    {unreadSharedCount}
                                </span>
                            )}
                        </GameButton>
                        <input
                            type="search"
                            value={noteSearch}
                            onChange={(event) => setNoteSearch(event.target.value)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onKeyDown={(event) => event.stopPropagation()}
                            placeholder="Search notes…"
                            aria-label="Search notes"
                            style={{
                                ...S.input,
                                width: useMobilePanelLayout ? "100%" : 180,
                                minWidth: 120,
                                padding: "4px 8px",
                                fontSize: 12,
                            }}
                        />
                        {tab === "mine" && isNoteSearchActive && (
                            <GameButton
                                onClick={() => {
                                    setFolderSearchOpen((open) => !open);
                                    if (folderSearchOpen) {
                                        setFolderSearch("");
                                        setDebouncedFolderSearch("");
                                        setFolderSearchData(null);
                                    }
                                }}
                                style={{
                                    padding: "3px 8px",
                                    fontSize: 11,
                                    backgroundColor: folderSearchOpen
                                        ? "#28506a"
                                        : "transparent",
                                    border: "1px solid #4b7894",
                                    color: "#bcecff",
                                }}
                            >
                                {folderSearchOpen
                                    ? "Hide folder search"
                                    : "Find folder"}
                            </GameButton>
                        )}
                        <div style={{ flex: 1 }} />
                        {customTemplates.length > 0 && (
                            <GameButton
                                style={{
                                    padding: "3px 8px",
                                    fontSize: 11,
                                    backgroundColor: "transparent",
                                    border: "1px solid #aa44ff",
                                    color: "#ccc",
                                }}
                                onClick={() =>
                                    setShowTemplateShareModal((p) => !p)
                                }
                            >
                                Share Template
                            </GameButton>
                        )}
                        <div style={{ position: "relative" }}>
                            <GameButton
                                onClick={() => setShowNewMenu((p) => !p)}
                            >
                                + New
                            </GameButton>
                            {showNewMenu && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        right: 0,
                                        marginTop: 4,
                                        backgroundColor: "#2a2a2a",
                                        border: "1px solid #555",
                                        borderRadius: 6,
                                        padding: 4,
                                        zIndex: 20,
                                        minWidth:
                                            canManagePlayerStats
                                                ? 260
                                                : 180,
                                    }}
                                >
                                    {(canManagePlayerStats ||
                                        availableCharacterTargetOptions.length >
                                            0) && (
                                            <>
                                                <div
                                                    style={{
                                                        color: "#888",
                                                        fontSize: 10,
                                                        padding: "4px 10px",
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    Bind Stats To
                                                </div>
                                                <div
                                                    style={{
                                                        padding:
                                                            "0 6px 6px",
                                                    }}
                                                >
                                                    <GameSelect
                                                        options={
                                                            statsOwnerOptions
                                                        }
                                                        value={
                                                            newNoteStatsOwnerId
                                                        }
                                                        open={
                                                            statsOwnerSelectOpen
                                                        }
                                                        onOpenChange={
                                                            setStatsOwnerSelectOpen
                                                        }
                                                        onChange={
                                                            setNewNoteStatsOwnerId
                                                        }
                                                        searchable
                                                        searchPlaceholder="Search target..."
                                                        emptyLabel="No targets found"
                                                        ariaLabel="Stats binding target"
                                                        title={
                                                            selectedStatsOwnerLabel
                                                        }
                                                        className="w-full"
                                                        triggerClassName="h-8 w-full justify-between rounded border-[#555] bg-[#111] px-2 py-0 text-xs text-gray-200"
                                                        menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                                                        optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                                        trigger={
                                                            <SelectTrigger
                                                                label={
                                                                    selectedStatsOwnerLabel
                                                                }
                                                            />
                                                        }
                                                        onFocusChange={(
                                                            focused,
                                                        ) =>
                                                            host.events?.emit(
                                                                "input-focus",
                                                                { focused },
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        borderTop:
                                                            "1px solid #444",
                                                        margin: "2px 0 4px",
                                                    }}
                                                />
                                            </>
                                        )}
                                    <div
                                        style={{
                                            color: "#888",
                                            fontSize: 10,
                                            padding: "4px 10px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Built-in
                                    </div>
                                    {visibleBuiltinTemplates.map((t) => (
                                        <div
                                            key={t.id}
                                            onClick={() => createNote(t.id)}
                                            style={{
                                                padding: "6px 10px",
                                                color: "#ddd",
                                                fontSize: 12,
                                                cursor: "pointer",
                                                borderRadius: 4,
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.backgroundColor =
                                                    "#444")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.backgroundColor =
                                                    "transparent")
                                            }
                                        >
                                            {t.name}
                                        </div>
                                    ))}
                                    {customTemplates.length > 0 && (
                                        <>
                                            <div
                                                style={{
                                                    borderTop: "1px solid #444",
                                                    margin: "4px 0",
                                                }}
                                            />
                                            <div
                                                style={{
                                                    color: "#888",
                                                    fontSize: 10,
                                                    padding: "4px 10px",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                My Templates
                                            </div>
                                            {customTemplates.map((t) => (
                                                <div
                                                    key={t.id}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        padding: "4px 10px",
                                                        borderRadius: 4,
                                                    }}
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget.style.backgroundColor =
                                                            "#444")
                                                    }
                                                    onMouseLeave={(e) =>
                                                        (e.currentTarget.style.backgroundColor =
                                                            "transparent")
                                                    }
                                                >
                                                    {confirmDeleteTemplateId ===
                                                    t.id ? (
                                                        <>
                                                            <span
                                                                style={{
                                                                    flex: 1,
                                                                    color: "#ff8888",
                                                                    fontSize: 11,
                                                                }}
                                                            >
                                                                Delete?
                                                            </span>
                                                            <span
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.stopPropagation();
                                                                    deleteTemplate(
                                                                        t.id,
                                                                    );
                                                                }}
                                                                style={{
                                                                    color: "#ff5555",
                                                                    fontSize: 11,
                                                                    cursor: "pointer",
                                                                    padding:
                                                                        "0 4px",
                                                                    fontWeight:
                                                                        "bold",
                                                                }}
                                                            >
                                                                Yes
                                                            </span>
                                                            <span
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.stopPropagation();
                                                                    setConfirmDeleteTemplateId(
                                                                        null,
                                                                    );
                                                                }}
                                                                style={{
                                                                    color: "#888",
                                                                    fontSize: 11,
                                                                    cursor: "pointer",
                                                                    padding:
                                                                        "0 4px",
                                                                }}
                                                            >
                                                                No
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span
                                                                onClick={() =>
                                                                    createNote(
                                                                        t.id,
                                                                    )
                                                                }
                                                                style={{
                                                                    flex: 1,
                                                                    color: "#ddd",
                                                                    fontSize: 12,
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                {t.name}
                                                            </span>
                                                            <span
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.stopPropagation();
                                                                    deleteTemplate(
                                                                        t.id,
                                                                    );
                                                                }}
                                                                style={{
                                                                    color: "#ff5555",
                                                                    fontSize: 11,
                                                                    cursor: "pointer",
                                                                    padding:
                                                                        "0 4px",
                                                                }}
                                                                title="Delete template"
                                                            >
                                                                x
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>)}

                    {!fixedNoteId &&
                        tab === "mine" &&
                        isNoteSearchActive &&
                        folderSearchOpen && (
                            <div
                                className="flex items-center gap-2 border-b border-[#333] bg-sky-950/20 px-3 py-2"
                            >
                                <span className="shrink-0 text-[11px] text-sky-200/75">
                                    Destination folder
                                </span>
                                <input
                                    autoFocus
                                    type="search"
                                    value={folderSearch}
                                    onChange={(event) =>
                                        setFolderSearch(event.target.value)
                                    }
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onKeyDown={(event) =>
                                        event.stopPropagation()
                                    }
                                    placeholder="Search folders…"
                                    aria-label="Search destination folders"
                                    style={{
                                        ...S.input,
                                        minWidth: 0,
                                        flex: 1,
                                        padding: "4px 8px",
                                        fontSize: 12,
                                    }}
                                />
                            </div>
                        )}

                    {/* Note list */}
                    {!fixedNoteId && (<div
                        ref={noteListRef}
                        className="overflow-y-auto border-b border-[#333] py-1"
                        style={{
                            flex: activeNote
                                ? `0 0 ${noteListHeight}px`
                                : "1 1 auto",
                            minHeight: activeNote ? MIN_NOTE_LIST_HEIGHT : 0,
                        }}
                    >
                        {tab === "mine" ? (
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 px-2 py-1">
                                    <span className="text-[11px] text-white/40">
                                        {isNoteSearchActive
                                            ? isNoteSearchBusy
                                                ? "Searching…"
                                                : `${searchedMyNotes.length} matching notes`
                                            : `${myNotes.length} notes`}
                                    </span>
                                    <div className="flex-1" />
                                    {!normalizedNoteSearch && <GameButton
                                        onClick={() => {
                                            setCreatingNoteFolder(true);
                                            setCreatingNoteFolderParentId(null);
                                            setNewNoteFolderName("");
                                        }}
                                        style={{
                                            padding: "3px 8px",
                                            fontSize: 11,
                                            backgroundColor: "transparent",
                                            border: "1px solid #555",
                                            color: "#ccc",
                                        }}
                                    >
                                        New Folder
                                    </GameButton>}
                                </div>

                                {!normalizedNoteSearch && creatingNoteFolder &&
                                    creatingNoteFolderParentId === null &&
                                    renderCreateNoteFolderForm(null)}

                                {!normalizedNoteSearch && myNotes.length === 0 &&
                                    noteFolders.length === 0 && (
                                        <div
                                            style={{
                                                padding: "8px 12px",
                                                color: "#666",
                                                fontSize: 12,
                                            }}
                                        >
                                            No notes yet. Click '+ New' to create
                                            one.
                                        </div>
                                    )}

                                {isNoteSearchActive && isNoteSearchBusy && (
                                    <div
                                        style={{
                                            padding: "8px 12px",
                                            color: "#777",
                                            fontSize: 12,
                                        }}
                                    >
                                        Searching…
                                    </div>
                                )}

                                {isNoteSearchActive &&
                                    !isNoteSearchBusy &&
                                    noteSearchError && (
                                        <div
                                            style={{
                                                padding: "8px 12px",
                                                color: "#ff9999",
                                                fontSize: 12,
                                            }}
                                        >
                                            {noteSearchError}
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    !isNoteSearchBusy &&
                                    !noteSearchError &&
                                    searchedMyNotes.length === 0 && (
                                    <div
                                        style={{
                                            padding: "8px 12px",
                                            color: "#777",
                                            fontSize: 12,
                                        }}
                                    >
                                        No matching notes.
                                    </div>
                                )}

                                {isNoteSearchActive &&
                                    !isNoteSearchBusy &&
                                    !noteSearchError &&
                                    searchedMyNotes.length > 0 && (
                                        <div className="px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                                            Matching notes
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    !isNoteSearchBusy &&
                                    !noteSearchError &&
                                    searchedMyNotes.map((note) =>
                                        renderNoteRow(
                                            note,
                                            noteFolderIdByNoteId.get(
                                                note.noteId,
                                            ) || null,
                                            true,
                                        ),
                                    )}

                                {isNoteSearchActive && folderSearchOpen && (
                                    <div className="px-3 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-sky-200/60">
                                        Folder targets
                                    </div>
                                )}

                                {isNoteSearchActive &&
                                    folderSearchOpen &&
                                    !isFolderSearchActive && (
                                        <div className="px-3 py-2 text-xs text-white/35">
                                            Search for a destination folder.
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    folderSearchOpen &&
                                    isFolderSearchBusy && (
                                        <div className="px-3 py-2 text-xs text-white/45">
                                            Searching folders…
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    folderSearchOpen &&
                                    !isFolderSearchBusy &&
                                    folderSearchError && (
                                        <div className="px-3 py-2 text-xs text-red-300">
                                            {folderSearchError}
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    folderSearchOpen &&
                                    isFolderSearchActive &&
                                    !isFolderSearchBusy &&
                                    !folderSearchError &&
                                    folderSearchRootFolders.length === 0 && (
                                        <div className="px-3 py-2 text-xs text-white/35">
                                            No matching folders.
                                        </div>
                                    )}

                                {isNoteSearchActive &&
                                    folderSearchOpen &&
                                    isFolderSearchActive &&
                                    !isFolderSearchBusy &&
                                    !folderSearchError &&
                                    folderSearchRootFolders.map((folder) =>
                                        renderNoteFolderTree(folder, true),
                                    )}

                                {!normalizedNoteSearch && rootNoteFolders.map((folder) =>
                                    renderNoteFolderTree(folder),
                                )}

                                {!normalizedNoteSearch && noteFolders.length > 0 && (
                                    <div className="px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                                        Uncategorized
                                    </div>
                                )}
                                {!normalizedNoteSearch && rootNotes.map((note) =>
                                    renderNoteRow(note, null, true),
                                )}

                                {activeNoteDrag && (
                                    <div
                                        className={`mx-2 rounded border-2 border-dashed py-2 text-center text-xs transition-colors ${
                                            noteDragTarget === "root"
                                                ? "border-sky-300/60 bg-sky-400/10 text-sky-50"
                                                : "border-white/10 text-white/40"
                                        }`}
                                        onDragOver={(event) => {
                                            event.preventDefault();
                                            setNoteDragTarget("root");
                                        }}
                                        onDragLeave={() =>
                                            setNoteDragTarget(null)
                                        }
                                        onDrop={(event) => {
                                            event.preventDefault();
                                            const noteId =
                                                event.dataTransfer.getData(
                                                    "noteId",
                                                );
                                            moveNoteToFolder(noteId, null);
                                            setActiveNoteDrag(null);
                                            setNoteDragTarget(null);
                                        }}
                                    >
                                        Drop to Uncategorized
                                    </div>
                                )}

                                {!normalizedNoteSearch && activeFolderDrag && (
                                    <div
                                        className={`mx-2 rounded border-2 border-dashed py-2 text-center text-xs transition-colors ${
                                            folderDragTarget === "root"
                                                ? "border-sky-300/60 bg-sky-400/10 text-sky-50"
                                                : "border-white/10 text-white/40"
                                        }`}
                                        onDragOver={(event) => {
                                            event.preventDefault();
                                            setFolderDragTarget("root");
                                        }}
                                        onDragLeave={() =>
                                            setFolderDragTarget(null)
                                        }
                                        onDrop={(event) => {
                                            event.preventDefault();
                                            const folderId =
                                                event.dataTransfer.getData(
                                                    "noteFolderId",
                                                );
                                            moveNoteFolderToParent(
                                                folderId,
                                                null,
                                            );
                                            setActiveFolderDrag(null);
                                            setFolderDragTarget(null);
                                        }}
                                    >
                                        Drop folder to root
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                {isNoteSearchActive && isNoteSearchBusy && (
                                    <div
                                        style={{
                                            padding: "8px 12px",
                                            color: "#777",
                                            fontSize: 12,
                                        }}
                                    >
                                        Searching…
                                    </div>
                                )}
                                {isNoteSearchActive &&
                                    !isNoteSearchBusy &&
                                    noteSearchError && (
                                        <div
                                            style={{
                                                padding: "8px 12px",
                                                color: "#ff9999",
                                                fontSize: 12,
                                            }}
                                        >
                                            {noteSearchError}
                                        </div>
                                    )}
                                {!isNoteSearchBusy &&
                                    !noteSearchError &&
                                    (isNoteSearchActive
                                        ? searchedSharedNotes.length === 0
                                        : sharedNotes.length === 0) && (
                                    <div
                                        style={{
                                            padding: "8px 12px",
                                            color: "#666",
                                            fontSize: 12,
                                        }}
                                    >
                                        {isNoteSearchActive
                                            ? "No matching shared notes."
                                            : "No shared notes."}
                                    </div>
                                )}
                                {!isNoteSearchBusy &&
                                    !noteSearchError &&
                                    (isNoteSearchActive
                                        ? searchedSharedNotes
                                        : sharedNotes
                                    ).map((note) =>
                                    renderNoteRow(note, null, false),
                                )}
                            </>
                        )}
                    </div>)}

                    {/* Share template modal */}
                    {showTemplateShareModal && (
                        <TemplateShareModal
                            customTemplates={customTemplates}
                            playerId={playerId}
                            roomPlayers={roomPlayers}
                            onShare={shareTemplate}
                            onClose={() => setShowTemplateShareModal(false)}
                        />
                    )}

                    {!fixedNoteId && activeNote && (
                        <div
                            role="separator"
                            aria-orientation="horizontal"
                            title="Resize note list"
                            className={[
                                "group h-2 shrink-0 cursor-row-resize touch-none border-b border-[#333] bg-black/20 transition-colors",
                                resizingNoteList
                                    ? "bg-sky-400/15"
                                    : "hover:bg-white/10",
                            ].join(" ")}
                            onPointerDown={startNoteListResize}
                            onPointerMove={moveNoteListResize}
                            onPointerUp={stopNoteListResize}
                            onPointerCancel={stopNoteListResize}
                            onLostPointerCapture={() => {
                                setResizingNoteList(false);
                                noteListResizeStartRef.current = null;
                            }}
                        >
                            <div className="mx-auto mt-[3px] h-px w-16 bg-white/20 transition-colors group-hover:bg-sky-300/70" />
                        </div>
                    )}

                    {fixedNoteId && !activeNote && (
                        <div
                            style={{
                                flex: 1,
                                display: "grid",
                                placeItems: "center",
                                padding: 24,
                                color:
                                    notesLoadState === "error"
                                        ? "#ff9999"
                                        : "#999",
                                fontSize: 13,
                                textAlign: "center",
                            }}
                        >
                            {notesLoadState === "loading"
                                ? "Loading character sheet…"
                                : notesLoadState === "error"
                                  ? "The character sheet could not be loaded."
                                  : "This character sheet is not available to the current player."}
                        </div>
                    )}

                    {/* Editor area */}
                    {activeNote && (
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                minHeight: 0,
                            }}
                        >
                            {/* Title + toolbar */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "6px 12px",
                                    borderBottom: "1px solid #333",
                                    flexWrap: "wrap",
                                }}
                            >
                                <input
                                    value={activeNote.title}
                                    onChange={(e) =>
                                        updateNote("title", e.target.value)
                                    }
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onKeyDown={(e) => e.stopPropagation()}
                                    disabled={!canEditActive}
                                    style={{
                                        ...S.input,
                                        flex: 1,
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        opacity: canEditActive ? 1 : 0.6,
                                        minWidth: 120,
                                    }}
                                />
                                {canEditActive && (
                                    <>
                                        <GameButton
                                            style={{
                                                padding: "3px 8px",
                                                fontSize: 11,
                                                backgroundColor: "transparent",
                                                border: "1px solid #4488ff",
                                                color: "#ccc",
                                            }}
                                            onClick={saveNoteNow}
                                        >
                                            Save
                                        </GameButton>
                                        <GameButton
                                            style={{
                                                padding: "3px 8px",
                                                fontSize: 11,
                                                backgroundColor: "transparent",
                                                border: "1px solid #888",
                                                color: "#ccc",
                                            }}
                                            onClick={refreshNotes}
                                        >
                                            Refresh
                                        </GameButton>
                                        {canReassignActiveStats && (
                                            <GameSelect
                                                options={
                                                    activeStatsOwnerOptions
                                                }
                                                value={
                                                    activeStatsOwnerTargetId
                                                }
                                                open={
                                                    activeStatsOwnerSelectOpen
                                                }
                                                onOpenChange={
                                                    setActiveStatsOwnerSelectOpen
                                                }
                                                onChange={(targetId) => {
                                                    if (
                                                        targetId ===
                                                        activeStatsOwnerTargetId
                                                    ) {
                                                        return;
                                                    }
                                                    setPendingStatsReassign({
                                                        noteId:
                                                            activeNote.noteId,
                                                        targetId,
                                                    });
                                                }}
                                                searchable
                                                searchPlaceholder="Search target..."
                                                emptyLabel="No targets found"
                                                ariaLabel="Reassign stats target"
                                                title={activeStatsOwnerLabel}
                                                className="min-w-[130px]"
                                                triggerClassName="h-7 w-full justify-between rounded border-[#555] bg-[#111] px-2 py-0 text-[11px] text-gray-200"
                                                menuClassName="top-[calc(100%+4px)] w-[230px] border-[#444] bg-[#111]"
                                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                                trigger={
                                                    <SelectTrigger
                                                        label={`Stats: ${activeStatsOwnerLabel}`}
                                                    />
                                                }
                                                onFocusChange={(focused) =>
                                                    host.events?.emit(
                                                        "input-focus",
                                                        { focused },
                                                    )
                                                }
                                            />
                                        )}
                                    </>
                                )}
                                <GameButton
                                    style={{
                                        padding: "3px 8px",
                                        fontSize: 11,
                                        backgroundColor: "transparent",
                                        border: "1px solid #44aacc",
                                        color: "#ccc",
                                    }}
                                    onClick={() => {
                                        setPoppedOutNoteIds((prev) => {
                                            const next = new Set(prev);
                                            next.add(activeNote.noteId);
                                            return next;
                                        });
                                        setPopupFocusId(activeNote.noteId);
                                    }}
                                >
                                    Pop Out
                                </GameButton>
                                {activeNote.ownerId === playerId && (
                                    <>
                                        <GameButton
                                            style={{
                                                padding: "3px 8px",
                                                fontSize: 11,
                                                backgroundColor: "transparent",
                                                border: "1px solid #aa44ff",
                                                color: "#ccc",
                                            }}
                                            onClick={saveAsTemplate}
                                        >
                                            Save as Template
                                        </GameButton>
                                        <GameButton
                                            style={{
                                                padding: "3px 8px",
                                                fontSize: 11,
                                                backgroundColor: "transparent",
                                                border: "1px solid #44bb44",
                                                color: "#ccc",
                                            }}
                                            onClick={() =>
                                                setShowShareModal((p) => !p)
                                            }
                                        >
                                            Share
                                        </GameButton>
                                        <GameButton
                                            style={{
                                                padding: "3px 8px",
                                                fontSize: 11,
                                                backgroundColor: "transparent",
                                                border: "1px solid #ff4444",
                                                color: "#ccc",
                                            }}
                                            onClick={() =>
                                                setConfirmDeleteNote(true)
                                            }
                                        >
                                            Delete
                                        </GameButton>
                                    </>
                                )}
                            </div>

                            {/* Share note modal */}
                            {showShareModal &&
                                activeNote.ownerId === playerId && (
                                    <ShareModal
                                        note={activeNote}
                                        playerId={playerId}
                                        playerName={playerName}
                                        roomPlayers={roomPlayers}
                                        onUpdate={(perms) => {
                                            updateLocalNote(
                                                activeNote.noteId,
                                                (note) => ({
                                                    ...note,
                                                    permissions: perms,
                                                }),
                                            );
                                            const msg = game.Wrapper.create({
                                                note: {
                                                    playerId,
                                                    playerName,
                                                    noteId: activeNote.noteId,
                                                    type: "share",
                                                    permissions: perms.map(
                                                        (p) => ({
                                                            playerId:
                                                                p.playerId,
                                                            playerName:
                                                                p.playerName,
                                                            canEdit: p.canEdit,
                                                        }),
                                                    ),
                                                },
                                            });
                                            trySend(
                                                game.Wrapper.encode(
                                                    msg,
                                                ).finish() as Uint8Array<ArrayBuffer>,
                                            );
                                            setToast({
                                                message: "Permissions saved",
                                                type: "success",
                                            });
                                            setTimeout(
                                                () => setToast(null),
                                                3000,
                                            );
                                        }}
                                        onClose={() => setShowShareModal(false)}
                                    />
                                )}

                            {/* Tab Bar + WYSIWYG Editor */}
                            {(() => {
                                const tabs = parseNoteTabs(activeNote.content);
                                const tabIndex = Math.min(
                                    activeTabIndex,
                                    tabs.length - 1,
                                );
                                const activeTabContent =
                                    tabs[tabIndex]?.content ?? "";
                                const linkedStatsTargetId =
                                    linkedStatsTargetIdForNote(activeNote);

                                return (
                                    <>
                                        {(tabs.length > 1 ||
                                            (tabs.length === 1 &&
                                                tabs[0].name !== "Main") ||
                                            canEditActive) && (
                                            <NoteTabBar
                                                tabs={tabs}
                                                activeIndex={tabIndex}
                                                editable={!!canEditActive}
                                                onSelectTab={setActiveTabIndex}
                                                onAddTab={() => {
                                                    const newTabs = [
                                                        ...tabs,
                                                        {
                                                            name: "New Tab",
                                                            content: "",
                                                        },
                                                    ];
                                                    updateNote(
                                                        "content",
                                                        joinNoteTabs(newTabs),
                                                    );
                                                    setActiveTabIndex(
                                                        newTabs.length - 1,
                                                    );
                                                }}
                                                onRemoveTab={(i) => {
                                                    const newTabs = tabs.filter(
                                                        (_, idx) => idx !== i,
                                                    );
                                                    updateNote(
                                                        "content",
                                                        joinNoteTabs(newTabs),
                                                    );
                                                    if (
                                                        activeTabIndex >=
                                                        newTabs.length
                                                    )
                                                        setActiveTabIndex(
                                                            newTabs.length - 1,
                                                        );
                                                }}
                                                onRenameTab={(i, name) => {
                                                    const newTabs = tabs.map(
                                                        (t, idx) =>
                                                            idx === i
                                                                ? { ...t, name }
                                                                : t,
                                                    );
                                                    updateNote(
                                                        "content",
                                                        joinNoteTabs(newTabs),
                                                    );
                                                }}
                                            />
                                        )}
                                        <NoteEditor
                                            key={`${activeNote.noteId}-${editorKey}-tab${tabIndex}`}
                                            noteId={activeNote.noteId}
                                            tabIndex={tabIndex}
                                            content={activeTabContent}
                                            editable={!!canEditActive}
                                            linkedStats={
                                                linkedStatsByOwnerId[
                                                    linkedStatsTargetId
                                                ] || EMPTY_PLAYER_STATS
                                            }
                                            linkedStatsOwnerId={
                                                linkedStatsTargetId
                                            }
                                            roomId={roomId}
                                            playerId={playerId}
                                            playerName={playerName}
                                            canManagePlayerStats={
                                                canManagePlayerStats
                                            }
                                            onRefreshLinkedStats={onRefreshActiveNoteStats}
                                            onChange={(md) => {
                                                const newTabs = tabs.map(
                                                    (t, idx) =>
                                                        idx === tabIndex
                                                            ? {
                                                                  ...t,
                                                                  content: md,
                                                              }
                                                            : t,
                                                );
                                                updateNote(
                                                    "content",
                                                    joinNoteTabs(newTabs),
                                                );
                                            }}
                                            onFocus={onFocus}
                                            onBlur={onBlur}
                                        />
                                    </>
                                );
                            })()}
                        </div>
                    )}
                </div>
            </DraggablePanel>

            <GameConfirm
                open={confirmDeleteNote && !!activeNote}
                title="Delete Note"
                message={
                    <span className="kmz-note-theme">
                        Delete{" "}
                        <span className="font-semibold text-white">
                            {activeNote?.title || "this note"}
                        </span>
                        ?
                    </span>
                }
                description="This removes the note for you and anyone it is shared with."
                confirmLabel="Delete Note"
                onCancel={() => setConfirmDeleteNote(false)}
                onConfirm={deleteNote}
            />

            <GameConfirm
                open={confirmDeleteNoteFolder !== null}
                title="Delete Folder"
                message={
                    <span className="kmz-note-theme">
                        Delete{" "}
                        <span className="font-semibold text-white">
                            {confirmDeleteNoteFolder?.name || "this folder"}
                        </span>
                        ?
                    </span>
                }
                description="Notes inside will move back to Uncategorized. Subfolders will move up one level."
                confirmLabel="Delete Folder"
                confirmVariant="danger"
                onCancel={() => setConfirmDeleteNoteFolder(null)}
                onConfirm={() => {
                    if (confirmDeleteNoteFolder) {
                        deleteNoteFolder(confirmDeleteNoteFolder.folderId);
                    }
                    setConfirmDeleteNoteFolder(null);
                }}
            />

            <GameConfirm
                open={!!pendingStatsReassignNote}
                title="Reassign Stats"
                message={
                    <span className="kmz-note-theme">
                        Reassign stats for{" "}
                        <span className="font-semibold text-white">
                            {pendingStatsReassignNote?.title || "this note"}
                        </span>
                        ?
                    </span>
                }
                description="The sheet will read and write HP, rolls, and linked values against the new target."
                confirmLabel="Reassign"
                confirmVariant="warning"
                onCancel={() => setPendingStatsReassign(null)}
                onConfirm={confirmStatsReassign}
            >
                <div className="kmz-note-theme">
                    <div className="rounded border border-white/10 bg-black/20 p-3 text-xs text-neutral-300">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-neutral-500">From</span>
                        <span className="min-w-0 truncate text-right text-neutral-100">
                            {pendingStatsReassignFromLabel}
                        </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                        <span className="text-neutral-500">To</span>
                        <span className="min-w-0 truncate text-right text-yellow-200">
                            {pendingStatsReassignToLabel}
                        </span>
                    </div>
                </div>
                </div>
            </GameConfirm>

            {/* Popped-out note windows */}
            {Array.from(poppedOutNoteIds).map((nId, i) => {
                const note = notes.find((n) => n.noteId === nId);
                if (!note) return null;
                const canEdit =
                    note.ownerId === playerId ||
                    note.permissions.some(
                        (p) => p.playerId === playerId && p.canEdit,
                    );
                const linkedStatsTargetId = linkedStatsTargetIdForNote(
                    note,
                );
                return (
                    <NotePopup
                        key={nId}
                        noteId={nId}
                        title={note.title}
                        content={note.content}
                        editable={canEdit}
                        linkedStats={
                            linkedStatsByOwnerId[linkedStatsTargetId] ||
                            EMPTY_PLAYER_STATS
                        }
                        linkedStatsOwnerId={linkedStatsTargetId}
                        roomId={roomId}
                        playerId={playerId}
                        playerName={playerName}
                        canManagePlayerStats={canManagePlayerStats}
                        onRefreshLinkedStats={() =>
                            fetchLinkedStatsForOwner(linkedStatsTargetId, true)
                        }
                        zIndex={popupFocusId === nId ? 100 : 20 + i}
                        onContentChange={(id, content) => {
                            markNoteLocallyEdited(id);
                            updateLocalNote(id, (entry) => ({
                                ...entry,
                                content,
                            }));
                            scheduleDebouncedNoteSave(id);
                        }}
                        onClose={(id) => {
                            setPoppedOutNoteIds((prev) => {
                                const next = new Set(prev);
                                next.delete(id);
                                return next;
                            });
                        }}
                        onFocus={(id) => setPopupFocusId(id)}
                    />
                );
            })}
        </>
    );
}

// --- Share Modal (Notes) ---
function ShareModal({
    note,
    playerId,
    roomPlayers,
    onUpdate,
    onClose,
}: {
    note: NoteData;
    playerId: string;
    playerName: string;
    roomPlayers: Record<string, RoomPlayer>;
    onUpdate: (perms: NotePermission[]) => void;
    onClose: () => void;
}) {
    const { Button: GameButton } = useNoteWorkspaceHost().components;
    const [perms, setPerms] = useState<NotePermission[]>([...note.permissions]);
    const otherPlayers = Object.values(roomPlayers).filter(
        (p) => p.id !== playerId,
    );

    const togglePlayer = (p: RoomPlayer) => {
        setPerms((prev) => {
            const existing = prev.find((x) => x.playerId === p.id);
            if (existing) return prev.filter((x) => x.playerId !== p.id);
            return [
                ...prev,
                { playerId: p.id, playerName: p.name, canEdit: false },
            ];
        });
    };

    const toggleEdit = (pId: string) => {
        setPerms((prev) =>
            prev.map((x) =>
                x.playerId === pId ? { ...x, canEdit: !x.canEdit } : x,
            ),
        );
    };

    return (
        <div
            style={{
                padding: "8px 12px",
                borderBottom: "1px solid #333",
                backgroundColor: "#252525",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                }}
            >
                <span
                    style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}
                >
                    Share with
                </span>
                <span
                    onClick={onClose}
                    style={{ color: "#888", cursor: "pointer", fontSize: 14 }}
                >
                    x
                </span>
            </div>
            {otherPlayers.length === 0 && (
                <div style={{ color: "#666", fontSize: 11 }}>
                    No other players in the room.
                </div>
            )}
            {otherPlayers.map((p) => {
                const perm = perms.find((x) => x.playerId === p.id);
                return (
                    <div
                        key={p.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "4px 0",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={!!perm}
                            onChange={() => togglePlayer(p)}
                        />
                        <span style={{ color: "#ddd", fontSize: 12, flex: 1 }}>
                            {p.name}
                        </span>
                        {perm && (
                            <GameButton
                                style={{
                                    padding: "3px 8px",
                                    fontSize: 10,
                                    backgroundColor: "transparent",
                                    border: `1px solid ${perm.canEdit ? "#44bb44" : "#888"}`,
                                    color: "#ccc",
                                }}
                                onClick={() => toggleEdit(p.id)}
                            >
                                {perm.canEdit ? "Can Edit" : "View Only"}
                            </GameButton>
                        )}
                    </div>
                );
            })}
            <GameButton
                style={{ marginTop: 6, width: "100%" }}
                onClick={() => onUpdate(perms)}
            >
                Save Permissions
            </GameButton>
        </div>
    );
}

// --- Template Share Modal ---
function TemplateShareModal({
    customTemplates,
    playerId,
    roomPlayers,
    onShare,
    onClose,
}: {
    customTemplates: NoteTemplate[];
    playerId: string;
    roomPlayers: Record<string, RoomPlayer>;
    onShare: (
        templateId: string,
        targetPlayerId: string,
        targetPlayerName: string,
    ) => void;
    onClose: () => void;
}) {
    const {
        Button: GameButton,
        Select: GameSelect,
    } = useNoteWorkspaceHost().components;
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");
    const [selectedPlayer, setSelectedPlayer] = useState<string>("");
    const [openSelectId, setOpenSelectId] = useState<string | null>(null);
    const otherPlayers = Object.values(roomPlayers).filter(
        (p) => p.id !== playerId,
    );
    const templateOptions: NoteEditorSelectOption[] = [
        { value: "", label: "Select template..." },
        ...customTemplates.map((template) => ({
            value: template.id,
            label: template.name,
        })),
    ];
    const playerOptions: NoteEditorSelectOption[] = [
        { value: "", label: "Select player..." },
        ...otherPlayers.map((player) => ({
            value: player.id,
            label: player.name,
        })),
    ];
    const renderTemplateShareSelect = ({
        id,
        value,
        options,
        onChange,
        ariaLabel,
    }: {
        id: string;
        value: string;
        options: NoteEditorSelectOption[];
        onChange: (value: string) => void;
        ariaLabel: string;
    }) => {
        const selectedLabel =
            options.find((option) => option.value === value)?.label ||
            options[0]?.label ||
            "";

        return (
            <GameSelect
                options={options}
                value={value}
                open={openSelectId === id}
                onOpenChange={(open) => setOpenSelectId(open ? id : null)}
                onChange={onChange}
                ariaLabel={ariaLabel}
                title={selectedLabel}
                className="w-full"
                triggerClassName={[
                    "h-[29px] w-full justify-between rounded !border !border-[#444] !bg-[#111] !px-2 !py-0 text-[12px] text-[#ddd] shadow-none",
                    openSelectId === id ? "!border-white/35" : "",
                    "hover:!bg-[#1a1a1a] hover:text-white",
                ].join(" ")}
                menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111] p-1"
                optionClassName="h-auto min-h-8 px-2 py-2 text-[12px]"
                trigger={<SelectTrigger label={selectedLabel} />}
            />
        );
    };

    return (
        <div
            style={{
                padding: "8px 12px",
                borderBottom: "1px solid #333",
                backgroundColor: "#252530",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                }}
            >
                <span
                    style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}
                >
                    Share Template
                </span>
                <span
                    onClick={onClose}
                    style={{ color: "#888", cursor: "pointer", fontSize: 14 }}
                >
                    x
                </span>
            </div>
            <div style={{ marginBottom: 6 }}>
                {renderTemplateShareSelect({
                    id: "template",
                    value: selectedTemplate,
                    options: templateOptions,
                    onChange: setSelectedTemplate,
                    ariaLabel: "Template to share",
                })}
            </div>
            <div style={{ marginBottom: 6 }}>
                {renderTemplateShareSelect({
                    id: "player",
                    value: selectedPlayer,
                    options: playerOptions,
                    onChange: setSelectedPlayer,
                    ariaLabel: "Player to share with",
                })}
            </div>
            <GameButton
                style={{ width: "100%" }}
                disabled={!selectedTemplate || !selectedPlayer}
                onClick={() => {
                    const p = otherPlayers.find((x) => x.id === selectedPlayer);
                    if (p) onShare(selectedTemplate, p.id, p.name);
                }}
            >
                Send Share Request
            </GameButton>
        </div>
    );
}
