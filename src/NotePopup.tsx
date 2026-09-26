import { useState, useCallback } from "react";
import NoteEditor from "./NoteEditor";
import NoteTabBar from "./NoteTabBar";
import { useNoteWorkspaceHost } from "./host";
import { parseNoteTabs, joinNoteTabs } from "./noteTabs";
import type { PlayerStat } from "./types";

interface NotePopupProps {
    noteId: string;
    title: string;
    content: string;
    editable: boolean;
    linkedStats?: PlayerStat[];
    linkedStatsOwnerId?: string;
    roomId?: string;
    playerId?: string;
    playerName?: string;
    canManagePlayerStats?: boolean;
    onRefreshLinkedStats?: () => Promise<PlayerStat[]>;
    zIndex: number;
    onContentChange: (noteId: string, content: string) => void;
    onClose: (noteId: string) => void;
    onFocus: (noteId: string) => void;
}

/**
 * A floating popup window for viewing/editing a note.
 *
 * Wraps NoteEditor + NoteTabBar inside a DraggablePanel.
 * Each popup is independently draggable, resizable, and manages
 * its own active tab index. Multiple popups can be open simultaneously.
 */
export default function NotePopup({
    noteId,
    title,
    content,
    editable,
    linkedStats = [],
    linkedStatsOwnerId = "",
    roomId = "",
    playerId = "",
    playerName = "",
    canManagePlayerStats = false,
    onRefreshLinkedStats,
    zIndex,
    onContentChange,
    onClose,
    onFocus,
}: NotePopupProps) {
    const host = useNoteWorkspaceHost();
    const { Panel: DraggablePanel, Button: GameButton } = host.components;
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabs = parseNoteTabs(content);
    const tabIndex = Math.min(activeTabIndex, tabs.length - 1);
    const activeTabContent = tabs[tabIndex]?.content ?? "";

    const handleEditorFocus = useCallback(() => {
        host.events?.emit("input-focus", { focused: true });
    }, [host.events]);

    const handleEditorBlur = useCallback(() => {
        host.events?.emit("input-focus", { focused: false });
    }, [host.events]);

    return (
        <DraggablePanel
            defaultWidth={420}
            defaultHeight={380}
            minWidth={300}
            minHeight={250}
            zIndex={zIndex}
            onMouseDown={() => onFocus(noteId)}
            style={{
                backgroundColor: "rgba(30, 30, 30, 0.97)",
                border: "1px solid #444",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            <div className="kmz-note-theme" style={{ display: "contents" }}>
                {/* Header */}
                <div
                    data-drag-handle
                    className="flex items-center gap-2 px-3 py-1.5 border-b border-[#333] shrink-0 cursor-move select-none"
                    style={{ backgroundColor: "rgba(40, 40, 40, 0.95)" }}
                >
                    <span className="flex-1 text-white text-xs font-bold truncate">
                        {title}
                    </span>
                    <GameButton
                        className="px-1.5 py-0.5 text-[10px] bg-transparent border-[#666] text-gray-400 hover:text-white"
                        onClick={() => onClose(noteId)}
                    >
                        ✕
                    </GameButton>
                </div>

                {/* Tab Bar */}
                {(tabs.length > 1 ||
                    (tabs.length === 1 && tabs[0].name !== "Main") ||
                    editable) && (
                    <NoteTabBar
                        tabs={tabs}
                        activeIndex={tabIndex}
                        editable={editable}
                        onSelectTab={setActiveTabIndex}
                        onAddTab={() => {
                            const newTabs = [
                                ...tabs,
                                { name: "New Tab", content: "" },
                            ];
                            onContentChange(noteId, joinNoteTabs(newTabs));
                            setActiveTabIndex(newTabs.length - 1);
                        }}
                        onRemoveTab={(i) => {
                            const newTabs = tabs.filter((_, idx) => idx !== i);
                            onContentChange(noteId, joinNoteTabs(newTabs));
                            if (activeTabIndex >= newTabs.length)
                                setActiveTabIndex(newTabs.length - 1);
                        }}
                        onRenameTab={(i, name) => {
                            const newTabs = tabs.map((t, idx) =>
                                idx === i ? { ...t, name } : t,
                            );
                            onContentChange(noteId, joinNoteTabs(newTabs));
                        }}
                    />
                )}

                {/* Editor */}
                <NoteEditor
                    key={`popup-${noteId}-tab${tabIndex}`}
                    noteId={noteId}
                    tabIndex={tabIndex}
                    content={activeTabContent}
                    editable={editable}
                    linkedStats={linkedStats}
                    linkedStatsOwnerId={linkedStatsOwnerId}
                    roomId={roomId}
                    playerId={playerId}
                    playerName={playerName}
                    canManagePlayerStats={canManagePlayerStats}
                    onRefreshLinkedStats={onRefreshLinkedStats}
                    onChange={(md) => {
                        const newTabs = tabs.map((t, idx) =>
                            idx === tabIndex ? { ...t, content: md } : t,
                        );
                        onContentChange(noteId, joinNoteTabs(newTabs));
                    }}
                    onFocus={handleEditorFocus}
                    onBlur={handleEditorBlur}
                />
            </div>
        </DraggablePanel>
    );
}
