import {
    createContext,
    useContext,
    type ComponentPropsWithoutRef,
    type ComponentType,
    type ReactNode,
} from "react";
import type {
    GameStatsCharactersSnapshot,
    NoteRealtimeEvent,
    PlayerStat,
    PlayerStatsSnapshot,
    PlayerStatRollScope,
} from "./types";

export interface NoteEditorSelectOption {
    value: string;
    label: string;
}

export interface NoteEditorButtonProps
    extends ComponentPropsWithoutRef<"button"> {
    sound?: boolean;
    variant?: "default" | "plain";
}

export interface NoteEditorSelectProps {
    options: NoteEditorSelectOption[];
    value: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onChange: (value: string) => void;
    showDot?: boolean;
    disabled?: boolean;
    ariaLabel: string;
    title?: string;
    className?: string;
    triggerClassName?: string;
    menuClassName?: string;
    optionClassName?: string;
    selectedOptionClassName?: string;
    onFocusChange?: (focused: boolean) => void;
    trigger?: ReactNode;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyLabel?: string;
}

export interface NoteEditorModalProps {
    open: boolean;
    title?: ReactNode;
    children: ReactNode;
    onClose: () => void;
    className?: string;
}

/**
 * Small UI and transport boundary supplied by the consuming application.
 * The editor core deliberately has no dependency on a game's socket, API,
 * event bus, or design system.
 */
export interface NoteEditorHost {
    codex?: {
        search: (query: string, signal: AbortSignal) => Promise<Array<{ id: string; name: string; type: string; href: string }>>;
        preview: (href: string, signal: AbortSignal) => Promise<{ name: string; summary: string } | null>;
    };
    components: {
        Button: ComponentType<NoteEditorButtonProps>;
        Input: ComponentType<ComponentPropsWithoutRef<"input">>;
        Textarea: ComponentType<ComponentPropsWithoutRef<"textarea">>;
        Modal: ComponentType<NoteEditorModalProps>;
        Select: ComponentType<NoteEditorSelectProps>;
    };
    fetchPlayerStatRolls?: (
        roomId: string,
        scope: PlayerStatRollScope,
    ) => Promise<PlayerStat[]>;
    savePlayerStatRolls?: (
        roomId: string,
        userId: string,
        stats: PlayerStat[],
    ) => Promise<PlayerStat[]>;
    broadcastPlayerStats?: (payload: {
        playerId: string;
        targetUserId: string;
        type: "save" | "save_rolls";
        stats: PlayerStat[];
    }) => boolean;
    publishPresence?: (payload: {
        playerId: string;
        playerName: string;
        noteId: string;
        roomId: string;
        tabIndex: number;
        anchor: number;
        head: number;
        active: boolean;
    }) => boolean;
    subscribeNoteRealtime?: (
        listener: (event: NoteRealtimeEvent) => void,
    ) => () => void;
    subscribeConnection?: (listener: () => void) => () => void;
    events?: {
        emit: (name: string, payload?: unknown) => void;
        on: (name: string, listener: (payload: any) => void) => () => void;
    };
    linkedStatEvents?: {
        emit: (name: string, payload?: unknown) => void;
        on: (name: string, listener: (payload: any) => void) => () => void;
    };
    releaseInputFocus?: () => void;
}

/**
 * Additional boundary used by the complete Notes workspace. Transport and
 * application chrome stay in the host app; all notes behaviour remains here.
 */
export interface NoteWorkspaceHost extends NoteEditorHost {
    components: NoteEditorHost["components"] & {
        Panel: ComponentType<any>;
        FolderCollapsible: ComponentType<any>;
        Confirm: ComponentType<any>;
    };
    requestJson: <T>(
        path: string,
        init?: RequestInit,
        fallbackMessage?: string,
    ) => Promise<T>;
    fetchPlayerStats: (
        roomId: string,
        targetUserId: string,
        options?: { fresh?: boolean },
    ) => Promise<PlayerStatsSnapshot>;
    fetchGameStatsCharacters: (
        roomId: string,
    ) => Promise<GameStatsCharactersSnapshot>;
    socket: {
        send: (data: Uint8Array) => boolean;
        subscribeMessage: (listener: (data: Uint8Array) => void) => () => void;
    };
}

const NoteEditorHostContext = createContext<NoteEditorHost | null>(null);
const NoteWorkspaceHostContext = createContext<NoteWorkspaceHost | null>(null);

export function NoteEditorProvider({
    host,
    children,
}: {
    host: NoteEditorHost;
    children: ReactNode;
}) {
    return (
        <NoteEditorHostContext.Provider value={host}>
            {children}
        </NoteEditorHostContext.Provider>
    );
}

export function useNoteEditorHost(): NoteEditorHost {
    const host = useContext(NoteEditorHostContext);
    if (!host) {
        throw new Error(
            "NoteEditor must be rendered inside a NoteEditorProvider.",
        );
    }
    return host;
}

export function NoteWorkspaceProvider({
    host,
    children,
}: {
    host: NoteWorkspaceHost;
    children: ReactNode;
}) {
    return (
        <NoteEditorProvider host={host}>
            <NoteWorkspaceHostContext.Provider value={host}>
                {children}
            </NoteWorkspaceHostContext.Provider>
        </NoteEditorProvider>
    );
}

export function useNoteWorkspaceHost(): NoteWorkspaceHost {
    const host = useContext(NoteWorkspaceHostContext);
    if (!host) {
        throw new Error(
            "NoteWorkspace must be rendered inside a NoteWorkspaceProvider.",
        );
    }
    return host;
}
