import {
    normalizeStatKey,
    type PlayerStat,
    type PlayerStatKind,
    type UserInfoBarVisibility,
} from "./types";

interface MarkerAttrs {
    key?: string;
    label?: string;
    role?: string;
    display?: string;
    kind?: string;
    color?: string;
    showTo?: string;
    max?: string;
    maxValue?: string;
    field?: string;
    reversed?: string;
    isReversed?: string;
}

interface StatAccumulator {
    key: string;
    label: string;
    kind: PlayerStatKind;
    value?: number;
    maxValue?: number;
    color: string;
    showTo: UserInfoBarVisibility;
    isReversed: boolean;
}

export interface NoteLinkedStat {
    key: string;
    label: string;
    kind: PlayerStatKind;
    value: number;
    maxValue: number;
    color: string;
    showTo: UserInfoBarVisibility;
    isReversed: boolean;
}

const MARKER_PATTERN = /<!--\s*@stat\s+([^>]*)-->/g;
const STAT_TAG_PATTERN = /<stat\b([^>]*)>([\s\S]*?)<\/stat>/gi;
const VALUE_PATTERN = /([+-]?\d+)\s*(?:\/\s*([+-]?\d+))?\s*$/;
export const NOTE_STATS_UNASSIGNED_OWNER_ID = "__unassigned__";

export function isNoteStatsUnassignedOwnerId(value: unknown): boolean {
    return String(value || "").trim() === NOTE_STATS_UNASSIGNED_OWNER_ID;
}

export function extractLinkedStatsFromNote(
    content: string,
    ownerId: string,
): PlayerStat[] {
    return parseNoteLinkedStats(content).map((stat) => ({
        statId: "",
        userId: ownerId,
        key: stat.key,
        label: stat.label,
        kind: stat.kind,
        value: stat.value,
        maxValue: stat.maxValue,
        color: stat.color,
        showTo: stat.showTo,
        sourceNoteIds: [],
        isReversed: stat.kind === "bar" && stat.isReversed,
        rollName: "",
        rollKey: "",
        rollConfigId: "",
        rollModifierStatKey: "",
        rollDiceStatKey: "",
        rollDiceOperation: "",
        rollMode: "",
        rollTargetStatKey: "",
        rollOwnerId: "",
        rollBaseDiceCount: 1,
        rollResultMode: "",
        rollFormula: "",
        rollVisibility: "global",
    }));
}

export function parseNoteLinkedStats(content: string): NoteLinkedStat[] {
    const stats = new Map<string, StatAccumulator>();

    for (const line of content.split(/\r?\n/)) {
        STAT_TAG_PATTERN.lastIndex = 0;
        for (const match of line.matchAll(STAT_TAG_PATTERN)) {
            const prefix = line.slice(0, match.index || 0).trimEnd();
            const attrs = parseMarkerAttrs(match[1] || "");
            if (isRollOnlyStat(attrs)) continue;
            accumulateParsedStat(
                stats,
                attrs,
                prefix,
                stripHtml(match[2] || ""),
            );
        }

        MARKER_PATTERN.lastIndex = 0;
        for (const match of line.matchAll(MARKER_PATTERN)) {
            const before = line.slice(0, match.index || 0).trimEnd();
            const valueMatch = before.match(VALUE_PATTERN);
            if (!valueMatch) continue;

            accumulateParsedStat(
                stats,
                parseMarkerAttrs(match[1] || ""),
                before,
                valueMatch[0],
            );
        }
    }

    return [...stats.values()].map((stat) => {
        const maxValue =
            stat.kind === "bar"
                ? Math.max(1, stat.maxValue ?? stat.value ?? 1)
                : 0;
        return {
            key: stat.key,
            label: stat.label,
            kind: stat.kind,
            value:
                stat.kind === "bar"
                    ? Math.max(0, Math.min(maxValue, stat.value ?? 0))
                    : stat.value ?? 0,
            maxValue,
            color: stat.color,
            showTo: stat.showTo,
            isReversed: stat.kind === "bar" && stat.isReversed,
        };
    });
}

export function patchNoteLinkedStats(
    content: string,
    stats: PlayerStat[],
): { content: string; changed: boolean } {
    if (
        !stats.length ||
        (!content.includes("@stat") && !content.includes("<stat"))
    ) {
        return { content, changed: false };
    }

    const statByKey = new Map(stats.map((stat) => [stat.key, stat]));
    let changed = false;
    const lines = content.split(/\r?\n/).map((line) => {
        const tagMatches = [...line.matchAll(STAT_TAG_PATTERN)];
        if (tagMatches.length > 0) {
            let nextLine = line;
            for (const match of tagMatches.reverse()) {
                const attrsText = match[1] || "";
                const attrs = parseMarkerAttrs(attrsText);
                if (isRollOnlyStat(attrs)) continue;
                const markerIndex = match.index || 0;
                const prefix = nextLine.slice(0, markerIndex);
                const key = normalizeStatKey(
                    attrs.key ||
                        attrs.role ||
                        attrs.label ||
                        extractStatLabel(prefix),
                );
                const stat = key ? statByKey.get(key) : undefined;
                if (!stat) continue;

                const replacement = escapeHtmlText(
                    replacementForStat(stat, attrs, prefix),
                );
                const patched = `${nextLine.slice(0, markerIndex)}<stat${attrsText}>${replacement}</stat>${nextLine.slice(markerIndex + match[0].length)}`;
                if (patched !== nextLine) {
                    changed = true;
                    nextLine = patched;
                }
            }
            line = nextLine;
        }

        const matches = [...line.matchAll(MARKER_PATTERN)];
        if (matches.length === 0) return line;

        let nextLine = line;
        for (const match of matches.reverse()) {
            const attrs = parseMarkerAttrs(match[1] || "");
            const key = normalizeStatKey(
                attrs.key ||
                    attrs.role ||
                    attrs.label ||
                    extractStatLabel(nextLine.slice(0, match.index || 0)),
            );
            const stat = key ? statByKey.get(key) : undefined;
            if (!stat) continue;

            const markerIndex = match.index || 0;
            const prefix = nextLine.slice(0, markerIndex);
            const suffix = nextLine.slice(markerIndex);
            const replacement = replacementForStat(stat, attrs, prefix);
            const patchedPrefix = prefix.match(VALUE_PATTERN)
                ? prefix.replace(VALUE_PATTERN, replacement)
                : `${prefix.trimEnd()} ${replacement} `;
            const patched = `${patchedPrefix}${suffix}`;
            if (patched !== nextLine) {
                changed = true;
                nextLine = patched;
            }
        }
        return nextLine;
    });

    return { content: lines.join("\n"), changed };
}

function replacementForStat(
    stat: PlayerStat,
    attrs: MarkerAttrs,
    prefix: string,
): string {
    const field = normalizeStatField(attrs.field, prefix);
    if (field === "checkbox") {
        return stat.value > 0 ? "☑" : "☐";
    }
    if (field === "checks") return String(Math.max(0, stat.value));

    if (stat.kind !== "bar") return String(stat.value);

    const maxValue = Math.max(1, stat.maxValue || 1);
    const value = Math.max(0, Math.min(maxValue, stat.value));
    if (field === "maxValue") return String(maxValue);
    if (field === "value") return String(value);
    if (field === "full") return `${value}/${maxValue}`;

    return prefix.match(/\/\s*[+-]?\d+\s*$/)
        ? `${value}/${maxValue}`
        : String(value);
}

function normalizeStatField(
    value?: string,
    prefix = "",
): "" | "value" | "maxValue" | "full" | "checkbox" | "checks" {
    if (value === "checks" || value === "checkboxes" || value === "rank") {
        return "checks";
    }
    if (value === "checkbox" || value === "checked" || value === "boolean") {
        return "checkbox";
    }
    if (value === "maxValue" || value === "max" || value === "maximum") {
        return "maxValue";
    }
    if (value === "value" || value === "current" || value === "currentValue") {
        return "value";
    }
    if (value === "full" || value === "value/maxValue") {
        return "full";
    }
    const label = normalizeStatKey(extractStatLabel(prefix));
    if (label.startsWith("max-") || label.includes("-max-")) {
        return "maxValue";
    }
    if (label.startsWith("current-") || label.includes("-current-")) {
        return "value";
    }
    return "";
}

function extractStatLabel(prefix: string): string {
    const withoutValue = prefix.replace(VALUE_PATTERN, "").trim();
    const colonIndex = Math.max(
        withoutValue.lastIndexOf(":"),
        withoutValue.lastIndexOf("："),
    );
    const raw = colonIndex >= 0 ? withoutValue.slice(0, colonIndex) : withoutValue;
    return raw
        .replace(/^\s*[-*]\s*/, "")
        .replace(/\*\*/g, "")
        .replace(/[_`]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 48);
}

function getStatDefaults(
    key: string,
    label: string,
): {
    label: string;
    kind: PlayerStatKind;
    color: string;
    showTo: UserInfoBarVisibility;
} {
    if (key === "hp" || key === "health" || key === "current-hp") {
        return {
            label: "HP",
            kind: "bar",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "armor-class" || key === "ac") {
        return {
            label: "AC",
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "initiative" || key === "inisiative") {
        return {
            label: "Initiative",
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "speed") {
        return {
            label: "Speed",
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "xp" || key === "experience") {
        return {
            label: "XP",
            kind: "value",
            color: "#44cc44",
            showTo: "all",
        };
    }
    if (key === "level") {
        return {
            label: "Level",
            kind: "value",
            color: "#44cc44",
            showTo: "all",
        };
    }
    return {
        label: label || key || "Stat",
        kind: "value",
        color: "#44cc44",
        showTo: "private",
    };
}

function parseMarkerAttrs(input: string): MarkerAttrs {
    const attrs: MarkerAttrs = {};
    const attrRegex =
        /([A-Za-z][A-Za-z0-9_-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
    for (const match of input.matchAll(attrRegex)) {
        const attrName = normalizeAttrName(match[1] || "");
        if (!attrName) continue;
        attrs[attrName] = (
            match[2] ??
            match[3] ??
            match[4] ??
            ""
        ).trim();
    }
    return attrs;
}

function isRollOnlyStat(attrs: MarkerAttrs): boolean {
    return String(attrs.display || "").trim().toLowerCase() === "roll";
}

function accumulateParsedStat(
    stats: Map<string, StatAccumulator>,
    attrs: MarkerAttrs,
    prefix: string,
    rawValue: string,
): void {
    const lineLabel = extractStatLabel(prefix);
    const key = normalizeStatKey(
        attrs.key || attrs.role || attrs.label || lineLabel,
    );
    const defaults = getStatDefaults(key, lineLabel);
    const label = (attrs.label || defaults.label).trim().slice(0, 48);
    if (!key || !label) return;

    const field = normalizeStatField(attrs.field, prefix);
    const isCheckbox = field === "checkbox";
    const isChecks = field === "checks";
    const valueMatch = rawValue.trim().match(VALUE_PATTERN);
    if (!isCheckbox && !isChecks && !valueMatch) return;

    const parsedValue =
        isCheckbox
            ? checkboxValue(rawValue)
            : isChecks
              ? checksValue(rawValue)
              : Number.parseInt(valueMatch?.[1] || "0", 10) || 0;
    const parsedMax = valueMatch?.[2]
        ? Number.parseInt(valueMatch[2], 10)
        : undefined;
    const attrKind = String(attrs.kind || "").trim().toLowerCase();
    const hasReversedKind = attrKind === "reverse" || attrKind === "reversed";
    const kind: PlayerStatKind =
        isCheckbox || isChecks
            ? "value"
            : attrKind === "bar" ||
              hasReversedKind ||
              defaults.kind === "bar" ||
              field === "maxValue" ||
              field === "full" ||
              parsedMax != null
              ? "bar"
              : "value";
    const parsedAttrMax =
        attrs.maxValue || attrs.max
            ? Number.parseInt(attrs.maxValue || attrs.max || "", 10)
            : undefined;
    const existing = stats.get(key);
    const next: StatAccumulator = {
        key,
        label,
        kind,
        value: existing?.value,
        maxValue: existing?.maxValue,
        color: /^#[0-9a-fA-F]{6}$/.test(attrs.color || "")
            ? attrs.color!
            : existing?.color || defaults.color,
        showTo: normalizeVisibility(
            attrs.showTo || existing?.showTo || defaults.showTo,
        ),
        isReversed:
            parseBoolAttr(attrs.reversed ?? attrs.isReversed) ??
            (hasReversedKind ? true : undefined) ??
            existing?.isReversed ??
            false,
    };

    if (isCheckbox || isChecks) {
        next.value = isCheckbox ? (parsedValue > 0 ? 1 : 0) : parsedValue;
        next.maxValue = 0;
    } else if (kind === "bar") {
        if (field === "maxValue") {
            next.maxValue = Math.max(1, parsedValue);
        } else if (field === "value") {
            next.value = parsedValue;
        } else {
            next.value = parsedValue;
            next.maxValue = Math.max(
                1,
                parsedMax ?? parsedAttrMax ?? parsedValue,
            );
        }
    } else {
        next.value = parsedValue;
        next.maxValue = 0;
    }

    stats.set(key, next);
}

function checkboxValue(value: string): number {
    const normalized = stripHtml(value).trim().toLowerCase();
    return normalized === "☑" ||
        normalized === "✓" ||
        normalized === "x" ||
        normalized === "true" ||
        normalized === "checked" ||
        normalized === "1"
        ? 1
        : 0;
}

function checksValue(value: string): number {
    const stripped = stripHtml(value);
    const checkedMatches = stripped.match(/[☑✓]/g);
    if (checkedMatches) return checkedMatches.length;
    return Number.parseInt(stripped.match(VALUE_PATTERN)?.[1] || "0", 10) || 0;
}

function parseBoolAttr(value?: string): boolean | undefined {
    switch (String(value || "").trim().toLowerCase()) {
        case "true":
        case "1":
        case "yes":
        case "y":
        case "on":
        case "reversed":
            return true;
        case "false":
        case "0":
        case "no":
        case "n":
        case "off":
            return false;
        default:
            return undefined;
    }
}

function normalizeAttrName(name: string): keyof MarkerAttrs | "" {
    if (name === "data-key") return "key";
    if (name === "data-label") return "label";
    if (name === "data-role") return "role";
    if (name === "data-display") return "display";
    if (name === "data-kind") return "kind";
    if (name === "data-color") return "color";
    if (name === "data-show-to" || name === "data-showTo") return "showTo";
    if (name === "data-max" || name === "data-max-value") return "maxValue";
    if (name === "data-field") return "field";
    if (
        name === "data-reversed" ||
        name === "data-is-reversed" ||
        name === "data-isReversed"
    ) {
        return "isReversed";
    }
    if (
        name === "key" ||
        name === "label" ||
        name === "role" ||
        name === "display" ||
        name === "kind" ||
        name === "color" ||
        name === "showTo" ||
        name === "max" ||
        name === "maxValue" ||
        name === "field" ||
        name === "reversed" ||
        name === "isReversed"
    ) {
        return name;
    }
    return "";
}

function stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, "").trim();
}

function escapeHtmlText(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function normalizeVisibility(value?: string): UserInfoBarVisibility {
    return value === "all" || value === "roomMaster" || value === "private"
        ? value
        : "private";
}
