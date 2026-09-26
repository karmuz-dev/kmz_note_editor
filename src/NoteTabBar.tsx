import { useState, useRef, useEffect } from "react";
import { useNoteWorkspaceHost } from "./host";
import type { NoteTab } from "./noteTabs";

interface NoteTabBarProps {
    tabs: NoteTab[];
    activeIndex: number;
    editable: boolean;
    onSelectTab: (index: number) => void;
    onAddTab: () => void;
    onRemoveTab: (index: number) => void;
    onRenameTab: (index: number, newName: string) => void;
}

/**
 * Horizontal tab bar for per-note tabs.
 *
 * Displays tab buttons with active highlighting. Editable notes
 * can add tabs (+), double-click to rename, and click X to delete.
 */
export default function NoteTabBar({
    tabs,
    activeIndex,
    editable,
    onSelectTab,
    onAddTab,
    onRemoveTab,
    onRenameTab,
}: NoteTabBarProps) {
    const host = useNoteWorkspaceHost();
    const {
        Button: GameButton,
        Confirm: GameConfirm,
    } = host.components;
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editValue, setEditValue] = useState("");
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const deleteTab = deleteIndex == null ? null : tabs[deleteIndex];

    useEffect(() => {
        if (editingIndex !== null && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editingIndex]);

    /**
     * Commit the rename on blur or Enter.
     * Trims whitespace and falls back to "Untitled" if empty.
     */
    const commitRename = () => {
        if (editingIndex === null) return;
        const trimmed = editValue.trim() || "Untitled";
        onRenameTab(editingIndex, trimmed);
        setEditingIndex(null);
    };

    const confirmDelete = () => {
        if (deleteIndex == null || !deleteTab) return;
        onRemoveTab(deleteIndex);
        setDeleteIndex(null);
    };

    return (
        <>
            <div className="flex items-center gap-1 px-2 py-1 border-b border-[#333] overflow-x-auto shrink-0">
                {tabs.map((tab, i) => (
                    <div
                        key={i}
                        className="flex items-center shrink-0"
                        onDoubleClick={() => {
                            if (!editable) return;
                            setEditingIndex(i);
                            setEditValue(tab.name);
                        }}
                    >
                        {editingIndex === i ? (
                            <input
                                ref={inputRef}
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={commitRename}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") commitRename();
                                    if (e.key === "Escape")
                                        setEditingIndex(null);
                                    e.stopPropagation();
                                }}
                                className="bg-[#222] text-white text-xs px-2 py-0.5 rounded border border-[#555] outline-none w-24"
                            />
                        ) : (
                            <GameButton
                                className={
                                    i === activeIndex
                                        ? "bg-[#444] border-b-2 border-b-blue-500 text-white rounded-b-none"
                                        : "bg-transparent border-transparent text-gray-400 hover:text-white"
                                }
                                onClick={() => {
                                    setDeleteIndex(null);
                                    onSelectTab(i);
                                }}
                                sound={false}
                            >
                                <span className="flex items-center gap-1">
                                    {tab.name}
                                    {editable && tabs.length > 1 && (
                                        <span
                                            className="ml-1 text-[10px] cursor-pointer text-gray-500 hover:text-red-400"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDeleteIndex(i);
                                            }}
                                            title="Delete tab"
                                        >
                                            ✕
                                        </span>
                                    )}
                                </span>
                            </GameButton>
                        )}
                    </div>
                ))}
                {editable && (
                    <GameButton
                        className="bg-transparent border-transparent text-gray-500 hover:text-white text-sm px-1.5"
                        onClick={onAddTab}
                        sound={false}
                    >
                        +
                    </GameButton>
                )}
            </div>

            <GameConfirm
                open={deleteTab != null}
                title="Delete Tab"
                message={
                    <span className="kmz-note-theme">
                        Delete{" "}
                        <span className="font-semibold text-white">
                            {deleteTab?.name || "this tab"}
                        </span>
                        ?
                    </span>
                }
                description="This removes the tab and its note content."
                confirmLabel="Delete Tab"
                onCancel={() => setDeleteIndex(null)}
                onConfirm={confirmDelete}
            />
        </>
    );
}
