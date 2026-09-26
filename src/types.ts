export type UserInfoBarVisibility = "all" | "roomMaster" | "private";

export type PlayerStatKind = "value" | "bar";
export type PlayerStatRollDiceOperation = "" | "add" | "multiply";
export type PlayerStatRollMode = "" | "set-value";
export type PlayerStatRollResultMode = "" | "sum" | "max" | "min";
export type PlayerStatRollVisibility = "global" | "private";
export type PlayerStatRollScope = "all" | "own";

export interface PlayerStat {
    statId: string;
    userId: string;
    key: string;
    label: string;
    kind: PlayerStatKind;
    value: number;
    maxValue: number;
    color: string;
    showTo: UserInfoBarVisibility;
    sourceNoteIds: string[];
    isReversed: boolean;
    rollName: string;
    rollKey: string;
    rollConfigId: string;
    rollModifierStatKey: string;
    rollDiceStatKey: string;
    rollDiceOperation: PlayerStatRollDiceOperation;
    rollMode: PlayerStatRollMode;
    rollTargetStatKey: string;
    rollOwnerId: string;
    rollBaseDiceCount: number;
    rollResultMode: PlayerStatRollResultMode;
    rollFormula: string;
    rollVisibility: PlayerStatRollVisibility;
    createdAt?: number;
    updatedAt?: number;
}

export interface PlayerStatsSnapshot {
    targetUserId: string;
    scopeType: "room" | "campaign";
    stats: PlayerStat[];
    permissions: {
        canEditStats: boolean;
    };
    error?: string;
}

export interface GameStatsCharacterPermissions {
    canEdit: boolean;
    canDelete: boolean;
}

export interface GameStatsCharacter {
    characterId: string;
    targetId: string;
    name: string;
    imageUrl: string;
    description: string;
    ownerId: string;
    characterSheetNoteId?: string;
    permissions: GameStatsCharacterPermissions;
}

export interface GameStatsCharactersSnapshot {
    characters: GameStatsCharacter[];
    activeCharacterId: string | null;
}

export type NoteRealtimeEvent =
    | {
          type: "presence";
          playerId: string;
          playerName: string;
          noteId: string;
          tabIndex: number;
          anchor: number;
          head: number;
          active: boolean;
      }
    | { type: "leave"; playerId: string };

export function normalizeStatKey(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_.]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 64);
}

export const PLAYER_STATS_TOKEN_USER_ID_PREFIX = "token:";

export function playerStatsTokenTargetId(itemId: string): string {
    const normalizedItemId = String(itemId || "").trim();
    return normalizedItemId
        ? `${PLAYER_STATS_TOKEN_USER_ID_PREFIX}${normalizedItemId}`
        : "";
}

export function playerStatsTokenItemId(targetUserId: string): string {
    const value = String(targetUserId || "").trim();
    return value.startsWith(PLAYER_STATS_TOKEN_USER_ID_PREFIX)
        ? value.slice(PLAYER_STATS_TOKEN_USER_ID_PREFIX.length).trim()
        : "";
}

export function isPlayerStatsTokenTargetId(targetUserId: string): boolean {
    return !!playerStatsTokenItemId(targetUserId);
}

export function normalizePlayerStat(value: unknown): PlayerStat | null {
    if (!value || typeof value !== "object") return null;
    const raw = value as Record<string, unknown>;
    const legacyRole = String(raw.role || "");
    const key = normalizeStatKey(String(raw.key || legacyRole || raw.label));
    const label = String(raw.label || raw.key || legacyRole)
        .trim()
        .slice(0, 48);
    if (!key || !label) return null;
    const kind: PlayerStatKind = raw.kind === "bar" ? "bar" : "value";
    const maxValue =
        kind === "bar" ? Math.max(1, Math.trunc(Number(raw.maxValue) || 1)) : 0;
    const rawValueNumber = Number(raw.value) || 0;
    const valueNumber =
        kind === "value" && key === "initiative"
            ? rawValueNumber
            : Math.trunc(rawValueNumber);
    const rollConfigId = String(raw.rollConfigId || "").trim().slice(0, 128);
    const hasRoll = !!rollConfigId;

    return {
        statId: String(raw.statId || ""),
        userId: String(raw.userId || ""),
        key,
        label,
        kind,
        value:
            kind === "bar"
                ? Math.max(0, Math.min(maxValue, valueNumber))
                : valueNumber,
        maxValue,
        color: /^#[0-9a-fA-F]{6}$/.test(String(raw.color || ""))
            ? String(raw.color)
            : "#44cc44",
        showTo:
            raw.showTo === "all" ||
            raw.showTo === "roomMaster" ||
            raw.showTo === "private"
                ? raw.showTo
                : "private",
        sourceNoteIds: Array.isArray(raw.sourceNoteIds)
            ? raw.sourceNoteIds
                  .map((entry) => String(entry || "").trim())
                  .filter(Boolean)
            : [],
        isReversed: kind === "bar" && !!raw.isReversed,
        rollName: hasRoll ? String(raw.rollName || "").trim().slice(0, 80) : "",
        rollKey: hasRoll ? normalizeStatKey(String(raw.rollKey || "")) : "",
        rollConfigId,
        rollModifierStatKey: hasRoll
            ? normalizeStatKey(String(raw.rollModifierStatKey || ""))
            : "",
        rollDiceStatKey: hasRoll
            ? normalizeStatKey(String(raw.rollDiceStatKey || ""))
            : "",
        rollDiceOperation:
            hasRoll &&
            (raw.rollDiceOperation === "add" ||
                raw.rollDiceOperation === "multiply")
                ? raw.rollDiceOperation
                : "",
        rollMode: hasRoll && raw.rollMode === "set-value" ? "set-value" : "",
        rollTargetStatKey: hasRoll
            ? normalizeStatKey(String(raw.rollTargetStatKey || ""))
            : "",
        rollOwnerId: hasRoll
            ? String(raw.rollOwnerId || "").trim().slice(0, 128)
            : "",
        rollBaseDiceCount: hasRoll
            ? Math.max(1, Math.min(10, Math.trunc(Number(raw.rollBaseDiceCount) || 1)))
            : 1,
        rollResultMode: hasRoll
            ? raw.rollResultMode === "max"
                ? "max"
                : raw.rollResultMode === "min"
                  ? "min"
                  : raw.rollResultMode === "sum"
                    ? "sum"
                    : ""
            : "",
        rollFormula: hasRoll ? String(raw.rollFormula || "").trim().slice(0, 4096) : "",
        rollVisibility:
            hasRoll && raw.rollVisibility === "private" ? "private" : "global",
        createdAt: normalizeTimestamp(raw.createdAt),
        updatedAt: normalizeTimestamp(raw.updatedAt),
    };
}

export function normalizePlayerStats(values: unknown): PlayerStat[] {
    if (!Array.isArray(values)) return [];
    return values
        .map(normalizePlayerStat)
        .filter((stat): stat is PlayerStat => !!stat);
}

function normalizeTimestamp(value: unknown): number | undefined {
    if (value && typeof value === "object") {
        const maybeLong = value as { toNumber?: () => number };
        if (typeof maybeLong.toNumber === "function") {
            const numeric = Math.trunc(maybeLong.toNumber() || 0);
            return numeric > 0 ? numeric : undefined;
        }
    }
    const numeric = Math.trunc(Number(value) || 0);
    return numeric > 0 ? numeric : undefined;
}

export function isUnassignedStatsOwnerId(value: unknown): boolean {
    return String(value || "").trim() === "__unassigned__";
}
