export interface DiceEntry {
    diceType: string;
    diceCount: number;
}

export type DiceMode = "sum" | "max" | "min";

const DICE_TYPES = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];

export function clampDiceCount(value: unknown): number {
    return Math.max(1, Math.min(10, Math.trunc(Number(value) || 1)));
}

export function normalizeDiceType(value: unknown): string {
    const diceType = String(value || "").trim().toLowerCase();
    return DICE_TYPES.includes(diceType) ? diceType : "";
}

export function normalizeDiceMode(value: unknown): DiceMode {
    const mode = String(value || "").trim().toLowerCase();
    return mode === "max" || mode === "min" ? mode : "sum";
}

export function normalizeDiceEntries(value: unknown): DiceEntry[] {
    if (!Array.isArray(value)) return [];
    return value
        .map((entry) => {
            const diceType = normalizeDiceType(entry?.diceType);
            if (!diceType) return null;
            return { diceType, diceCount: clampDiceCount(entry?.diceCount) };
        })
        .filter((entry): entry is DiceEntry => entry != null);
}

export function parseDiceEntriesAttribute(value: unknown): DiceEntry[] {
    if (Array.isArray(value)) return normalizeDiceEntries(value);
    const text = String(value || "").trim();
    if (!text) return [];
    try {
        return normalizeDiceEntries(JSON.parse(text));
    } catch {
        return [];
    }
}

export function diceEntriesAttribute(entries: DiceEntry[]): string {
    const normalized = normalizeDiceEntries(entries);
    return normalized.length > 0 ? JSON.stringify(normalized) : "";
}

export function formatDiceEntries(entries: DiceEntry[]): string {
    return normalizeDiceEntries(entries)
        .map((entry) => `${entry.diceCount}${entry.diceType}`)
        .join(" + ");
}
