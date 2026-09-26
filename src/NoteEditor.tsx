import { CodexMentions } from "./CodexMentions";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell as BaseTableCell } from "@tiptap/extension-table-cell";
import { Link } from "@tiptap/extension-link";
import { Image } from "@tiptap/extension-image";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { marked } from "marked";
import TurndownService from "turndown";
import { Iframe } from "./extensions/iframe";
import { Checkbox } from "./extensions/checkbox";
import { StatMarker } from "./extensions/statMarker";
import { LinkedStat } from "./extensions/linkedStat";
import {
    NotePresence,
    notePresencePluginKey,
    type NoteRemotePresence,
} from "./extensions/notePresence";
import {
    normalizeStatKey,
    type PlayerStat,
    type PlayerStatKind,
    type PlayerStatRollDiceOperation,
    type PlayerStatRollResultMode,
    type PlayerStatRollScope,
    type PlayerStatRollVisibility,
    type NoteRealtimeEvent,
    type UserInfoBarVisibility,
    isUnassignedStatsOwnerId,
} from "./types";
import {
    diceEntriesAttribute,
    normalizeDiceEntries,
    normalizeDiceMode,
    normalizeDiceType,
    type DiceEntry,
} from "./dice";
import { useNoteEditorHost, type NoteEditorSelectOption } from "./host";

marked.setOptions({
    gfm: true,
    breaks: true,
});

const EMPTY_PLAYER_STATS: PlayerStat[] = [];

const NOTE_PRESENCE_COLORS = [
    "#e11d48",
    "#db2777",
    "#9333ea",
    "#4f46e5",
    "#0284c7",
    "#0891b2",
    "#059669",
    "#65a30d",
    "#d97706",
    "#ea580c",
];
const NOTE_PRESENCE_THROTTLE_MS = 60;
const NOTE_PRESENCE_HEARTBEAT_MS = 2_000;
const NOTE_PRESENCE_STALE_MS = 15_000;
const NOTE_CHANGE_DEBOUNCE_MS = 250;

/** Assigns each player a stable, readable cursor color on every client. */
function notePresenceColor(playerId: string): string {
    let hash = 0;
    for (let index = 0; index < playerId.length; index += 1) {
        hash = (hash * 31 + playerId.charCodeAt(index)) | 0;
    }
    return NOTE_PRESENCE_COLORS[Math.abs(hash) % NOTE_PRESENCE_COLORS.length];
}

const TableCell = BaseTableCell.extend({
    content: "block+",
});

const NoteTable = Table.extend({
    addAttributes() {
        return {
            ...(this.parent?.() ?? {}),
            display: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-display") ||
                    element.getAttribute("data-table-display") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.display
                        ? { "data-display": String(attrs.display || "") }
                        : {},
            },
        };
    },
});

// Configure turndown for markdown output
const turndown = new TurndownService({
    headingStyle: "atx",
    hr: "---",
    codeBlockStyle: "fenced",
});

// Add table support to turndown
turndown.addRule("tableCell", {
    filter: ["th", "td"],
    replacement: (content) => {
        return ` ${content.trim()} |`;
    },
});
turndown.addRule("tableRow", {
    filter: "tr",
    replacement: (content, node) => {
        const el = node as HTMLElement;
        const cells = el.querySelectorAll("th, td");
        const isHeaderRow = cells.length > 0 && cells[0].tagName === "TH";
        let row = "|" + content + "\n";
        if (isHeaderRow) {
            row +=
                "|" +
                Array.from(cells)
                    .map(() => " --- ")
                    .join("|") +
                "|\n";
        }
        return row;
    },
});
turndown.addRule("table", {
    filter: "table",
    replacement: (_content, node) => {
        const el = node as HTMLElement;
        const display = el.getAttribute("data-display") || "";
        if (display === "plain") {
            const clone = el.cloneNode(true) as HTMLElement;
            clone.querySelectorAll("thead").forEach((head) => head.remove());
            const firstBodyRow = clone.querySelector("tbody > tr:first-child");
            const firstCells = firstBodyRow
                ? Array.from(firstBodyRow.children)
                : [];
            if (
                firstCells.length > 0 &&
                firstCells.every((cell) => cell.tagName === "TH")
            ) {
                firstBodyRow?.remove();
            }
            return `\n${clone.outerHTML}\n`;
        }
        const rows = el.querySelectorAll("tr");
        let md = "\n";
        rows.forEach((row, i) => {
            const cells = row.querySelectorAll("th, td");
            const isHeaderRow = cells.length > 0 && cells[0].tagName === "TH";
            md += "|";
            cells.forEach((cell) => {
                const cellContent = turndown.turndown(cell.innerHTML).trim();
                md += ` ${cellContent} |`;
            });
            md += "\n";
            if (isHeaderRow || (i === 0 && !el.querySelector("th"))) {
                md += "|";
                cells.forEach(() => {
                    md += " --- |";
                });
                md += "\n";
            }
        });
        return md + "\n";
    },
});
turndown.addRule("taskListItem", {
    filter: (node) => {
        return (
            node.nodeName === "LI" &&
            (node as HTMLElement).getAttribute("data-type") === "taskItem"
        );
    },
    replacement: (content, node) => {
        const el = node as HTMLElement;
        const checked = el.getAttribute("data-checked") === "true";
        return `- [${checked ? "x" : " "}] ${content.trim()}\n`;
    },
});
turndown.addRule("checkbox", {
    filter: (node) =>
        node.nodeName === "SPAN" &&
        (node as HTMLElement).hasAttribute("data-checkbox"),
    replacement: (_, node) => {
        const el = node as HTMLElement;
        return el.getAttribute("data-checked") === "true" ? "☑" : "☐";
    },
});

turndown.addRule("statMarker", {
    filter: (node) =>
        node.nodeName === "SPAN" &&
        (node as HTMLElement).hasAttribute("data-stat-marker"),
    replacement: (_content, node) => {
        const marker =
            (node as HTMLElement).getAttribute("data-stat-marker") || "";
        return marker.trim() ? `<!-- @stat ${marker.trim()} -->` : "";
    },
});

turndown.addRule("linkedStat", {
    filter: (node) => node.nodeName === "STAT",
    replacement: (_content, node) => {
        const el = node as HTMLElement;
        const key = normalizeStatKey(
            el.getAttribute("data-key") || el.getAttribute("key") || "",
        );
        if (!key) return normalizeIntegerText(el.textContent || "0");
        const field = normalizeLinkedStatField(
            el.getAttribute("data-field") || el.getAttribute("field") || "",
        );
        const value =
            field === "checkbox"
                ? checkboxText(el.getAttribute("data-value") || el.textContent || "")
                : normalizeIntegerText(
                      el.getAttribute("data-value") || el.textContent || "0",
                  );
        return `<stat data-key="${escapeHtmlAttribute(key)}" data-field="${field}"${linkedStatAttributeText(el)}>${value}</stat>`;
    },
});

// add image suppport
turndown.addRule("image", {
    filter: "img",
    replacement: (_content, node) => {
        const el = node as HTMLImageElement;
        const alt = el.alt || "";
        const src = el.getAttribute("src") || "";
        const title = el.title ? ` "${el.title}"` : "";

        return src ? `![${alt}](${src}${title})` : "";
    },
});

// add iframe support
turndown.addRule("iframe", {
    filter: "iframe",
    replacement: (_content, node) => {
        const el = node as HTMLIFrameElement;
        return `\n${el.outerHTML}\n`; // 🔥 langsung raw HTML
    },
});

export interface NoteEditorProps {
    content: string; // markdown
    editable: boolean;
    noteId: string;
    tabIndex?: number;
    linkedStats?: PlayerStat[];
    roomId?: string;
    playerId?: string;
    playerName?: string;
    linkedStatsOwnerId?: string;
    canManagePlayerStats?: boolean;
    onRefreshLinkedStats?: () => Promise<PlayerStat[]>;
    onChange: (markdown: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

function markdownToHtml(md: string): string {
    const encodeStatMarkers = (value: string) =>
        value.replace(/<!--\s*@stat\s+([^>]*)-->/g, (_match, marker) => {
            return `<span data-stat-marker="${escapeHtmlAttribute(marker || "")}"></span>`;
        });

    md = convertLegacyStatMarkersToTags(md);

    if (md.includes("<iframe")) return encodeStatMarkers(md);
    md = encodeStatMarkers(md);

    // Pre-process: convert all [ ] and [x] in table rows to placeholders before
    // marked parses them (marked v17 may consume [ ] as checkbox tokens in inline parsing).
    // Uses a callback to replace ALL occurrences per line, not just the last one.
    md = md.replace(/^(\|.+\|)$/gm, (line) =>
        line
            .replace(/\[ \]/g, "%%CB_UNCHECKED%%")
            .replace(/\[x\]/gi, "%%CB_CHECKED%%"),
    );

    let html = marked.parse(md, { async: false }) as string;

    html = html.replace(
        /(?:<p>\s*)?<!--\s*@TABLE:\s*plain\s*-->\s*(?:<\/p>\s*)?<table>/gi,
        `<table data-display="plain">`,
    );
    html = html.replace(
        /(<table\b(?=[^>]*data-display=["']plain["'])[^>]*>)\s*<thead>[\s\S]*?<\/thead>/gi,
        "$1",
    );
    html = html.replace(
        /(<table\b(?=[^>]*data-display=["']plain["'])[^>]*>\s*<tbody>)\s*<tr>\s*(?:<th\b[^>]*>[\s\S]*?<\/th>\s*)+<\/tr>/gi,
        "$1",
    );

    // Convert placeholders to checkbox spans
    html = html.replace(
        /%%CB_UNCHECKED%%/g,
        `<span data-checkbox data-checked="false"></span>`,
    );
    html = html.replace(
        /%%CB_CHECKED%%/g,
        `<span data-checkbox data-checked="true"></span>`,
    );

    // ✅ task list support — match <li> with <input type="checkbox"> (any attribute order)
    html = html.replace(
        /<li[^>]*>\s*<input[^>]*type="checkbox"[^>]*>/gi,
        (match) => {
            const checked = /checked/i.test(match);
            return `<li data-type="taskItem" data-checked="${checked}">`;
        },
    );
    // Wrap parent <ul> for task lists (detect by child taskItem)
    html = html.replace(
        /<ul>\s*(?=<li data-type="taskItem")/gi,
        `<ul data-type="taskList">`,
    );

    // ✅ checkbox support — ONLY inside table cells, not in task lists
    // Process each <td>/<th> individually to avoid touching task list checkboxes
    html = html.replace(
        /(<(?:td|th)[^>]*>)([\s\S]*?)(<\/(?:td|th)>)/gi,
        (_, open, inner, close) => {
            let c = inner;
            // Placeholders (already handled above but just in case)
            c = c.replace(
                /%%CB_UNCHECKED%%/g,
                `<span data-checkbox data-checked="false"></span>`,
            );
            c = c.replace(
                /%%CB_CHECKED%%/g,
                `<span data-checkbox data-checked="true"></span>`,
            );
            // Unicode symbols
            c = c.replace(
                /☐/g,
                `<span data-checkbox data-checked="false"></span>`,
            );
            c = c.replace(
                /☑/g,
                `<span data-checkbox data-checked="true"></span>`,
            );
            // <input type="checkbox"> variants
            c = c.replace(
                /<input[^>]*checked[^>]*type="checkbox"[^>]*>/gi,
                `<span data-checkbox data-checked="true"></span>`,
            );
            c = c.replace(
                /<input[^>]*type="checkbox"[^>]*checked[^>]*>/gi,
                `<span data-checkbox data-checked="true"></span>`,
            );
            c = c.replace(
                /<input[^>]*type="checkbox"[^>]*>/gi,
                `<span data-checkbox data-checked="false"></span>`,
            );
            return open + c + close;
        },
    );

    // ✅ Global unicode checkbox support (for inline checkboxes outside tables)
    html = html.replace(
        /☐/g,
        `<span data-checkbox data-checked="false"></span>`,
    );
    html = html.replace(
        /☑/g,
        `<span data-checkbox data-checked="true"></span>`,
    );

    // ✅ Wrap bare <td>/<th> content in <p> so ProseMirror's block+ schema accepts inline nodes
    html = html.replace(
        /<(td|th)(\s[^>]*)?>(.+?)<\/\1>/gi,
        (_, tag, attrs, inner) => {
            if (inner.startsWith("<p>"))
                return `<${tag}${attrs || ""}>${inner}</${tag}>`;
            return `<${tag}${attrs || ""}><p>${inner}</p></${tag}>`;
        },
    );

    return html;
}

function escapeHtmlAttribute(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function escapeHtmlText(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function normalizeIntegerText(value: string): string {
    return String(Math.trunc(Number(value.trim()) || 0));
}

type LinkedStatField = "value" | "maxValue" | "checkbox" | "checks";

function normalizeLinkedStatField(value: string): LinkedStatField {
    if (value === "checks" || value === "checkboxes" || value === "rank") {
        return "checks";
    }
    if (value === "checkbox" || value === "checked" || value === "boolean") {
        return "checkbox";
    }
    return value === "maxValue" || value === "max" || value === "maximum"
        ? "maxValue"
        : "value";
}

function checkboxText(value: string): "☑" | "☐" {
    const normalized = value.trim().toLowerCase();
    return normalized === "☑" ||
        normalized === "✓" ||
        normalized === "x" ||
        normalized === "true" ||
        normalized === "checked" ||
        normalized === "1"
        ? "☑"
        : "☐";
}

function linkedStatAttributeText(el: HTMLElement): string {
    const attrMap: Array<[string, string]> = [
        ["data-label", "data-label"],
        ["data-display", "data-display"],
        ["data-kind", "data-kind"],
        ["data-color", "data-color"],
        ["data-show-to", "data-show-to"],
        ["data-reversed", "data-reversed"],
        ["data-is-reversed", "data-is-reversed"],
        ["data-isReversed", "data-isReversed"],
        ["data-check-count", "data-check-count"],
        ["data-roll", "data-roll"],
        ["data-roll-count", "data-roll-count"],
        ["data-roll-label", "data-roll-label"],
        ["data-roll-key", "data-roll-key"],
        ["data-roll-visibility", "data-roll-visibility"],
        ["data-roll-mode", "data-roll-mode"],
        ["data-roll-config-id", "data-roll-config-id"],
        ["data-roll-config-name", "data-roll-config-name"],
        ["data-roll-entries", "data-roll-entries"],
        ["data-roll-result-mode", "data-roll-result-mode"],
        ["data-roll-formula", "data-roll-formula"],
        ["data-roll-show-formula", "data-roll-show-formula"],
        ["data-modifier-key", "data-modifier-key"],
        ["data-modifier-value", "data-modifier-value"],
        ["data-modifier-stat-key", "data-modifier-stat-key"],
    ];
    return attrMap
        .map(([source, target]) => {
            const value = el.getAttribute(source);
            return value
                ? ` ${target}="${escapeHtmlAttribute(value)}"`
                : "";
        })
        .join("");
}

function convertLegacyStatMarkersToTags(md: string): string {
    const markerPattern = /<!--\s*@stat\s+([^>]*)-->/g;
    const valuePattern = /([+-]?\d+)\s*(?:\/\s*([+-]?\d+))?\s*$/;

    return md
        .split(/\r?\n/)
        .map((line) => {
            const matches = [...line.matchAll(markerPattern)];
            if (!matches.length) return line;

            let nextLine = line;
            for (const match of matches.reverse()) {
                const markerIndex = match.index || 0;
                const prefix = nextLine.slice(0, markerIndex);
                const valueMatch = prefix.match(valuePattern);
                if (!valueMatch?.index && valueMatch?.index !== 0) continue;

                const attrs = parseLegacyStatAttrs(match[1] || "");
                const key = normalizeStatKey(
                    attrs.key || attrs.label || inferStatLabel(prefix),
                );
                if (!key) continue;

                const escapedKey = escapeHtmlAttribute(key);
                const kind = String(attrs.kind || "").trim();
                const isReverseKind =
                    kind.toLowerCase() === "reverse" ||
                    kind.toLowerCase() === "reversed";
                const statAttrs = [
                    attrs.label
                        ? `data-label="${escapeHtmlAttribute(attrs.label)}"`
                        : "",
                    kind ? `data-kind="${escapeHtmlAttribute(kind)}"` : "",
                    attrs.color
                        ? `data-color="${escapeHtmlAttribute(attrs.color)}"`
                        : "",
                    attrs.showTo
                        ? `data-show-to="${escapeHtmlAttribute(attrs.showTo)}"`
                        : "",
                    attrs.reversed || attrs.isReversed || isReverseKind
                        ? `data-reversed="${escapeHtmlAttribute(attrs.reversed || attrs.isReversed || "true")}"`
                        : "",
                ]
                    .filter(Boolean)
                    .join(" ");
                const extraAttrs = statAttrs ? ` ${statAttrs}` : "";
                let statTag: string;
                if (!attrs.field && valueMatch[2]) {
                    const value = escapeHtmlText(
                        normalizeIntegerText(valueMatch[1] || "0"),
                    );
                    const maxValue = escapeHtmlText(
                        normalizeIntegerText(valueMatch[2] || "0"),
                    );
                    statTag = `<stat data-key="${escapedKey}" data-field="value"${extraAttrs}>${value}</stat>/<stat data-key="${escapedKey}" data-field="maxValue"${extraAttrs}>${maxValue}</stat>`;
                } else {
                    const field = normalizeLinkedStatField(
                        attrs.field ||
                            inferLegacyStatField(prefix, !!valueMatch[2]),
                    );
                    const value = normalizeIntegerText(
                        field === "maxValue" && valueMatch[2]
                            ? valueMatch[2]
                            : valueMatch[1] || "0",
                    );
                    statTag = `<stat data-key="${escapedKey}" data-field="${field}"${extraAttrs}>${escapeHtmlText(value)}</stat>`;
                }
                nextLine = `${prefix.slice(0, valueMatch.index)}${statTag}${nextLine.slice(markerIndex + match[0].length)}`;
            }
            return nextLine;
        })
        .join("\n");
}

function parseLegacyStatAttrs(input: string): Record<string, string> {
    const attrs: Record<string, string> = {};
    const attrRegex =
        /([A-Za-z][A-Za-z0-9_-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
    for (const match of input.matchAll(attrRegex)) {
        const name = match[1] || "";
        let normalizedName = name;
        if (name === "data-key") normalizedName = "key";
        else if (name === "data-field") normalizedName = "field";
        else if (name === "data-label") normalizedName = "label";
        else if (name === "data-kind") normalizedName = "kind";
        else if (name === "data-color") normalizedName = "color";
        else if (name === "data-show-to" || name === "data-showTo") {
            normalizedName = "showTo";
        } else if (
            name === "data-reversed" ||
            name === "data-is-reversed" ||
            name === "data-isReversed"
        ) {
            normalizedName = "isReversed";
        }
        attrs[normalizedName] = (
            match[2] ??
            match[3] ??
            match[4] ??
            ""
        ).trim();
    }
    return attrs;
}

function inferLegacyStatField(prefix: string, hasInlineMax: boolean): string {
    const labelKey = normalizeStatKey(inferStatLabel(prefix));
    if (labelKey.startsWith("max-") || labelKey.includes("-max-")) {
        return "maxValue";
    }
    if (labelKey.startsWith("current-") || labelKey.includes("-current-")) {
        return "value";
    }
    return hasInlineMax ? "value" : "value";
}

function inferStatLabel(prefix: string): string {
    const withoutValue = prefix
        .replace(/([+-]?\d+)\s*(?:\/\s*([+-]?\d+))?\s*$/, "")
        .trim();
    const colonIndex = Math.max(
        withoutValue.lastIndexOf(":"),
        withoutValue.lastIndexOf("："),
    );
    const raw =
        colonIndex >= 0 ? withoutValue.slice(0, colonIndex) : withoutValue;
    return raw
        .replace(/^\s*[-*]\s*/, "")
        .replace(/\*\*/g, "")
        .replace(/[_`]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function htmlToMarkdown(html: string): string {
    return turndown.turndown(html);
}

// ─── Toolbar items definition ───────────────────────────────────────────────

interface ToolbarGroup {
    label: string;
    items: ToolbarItem[];
}

interface ToolbarItem {
    /** Tooltip text */
    title: string;
    /** Unicode/emoji icon label */
    icon: string;
    /** Action to run when clicked */
    action: (editor: Editor) => void;
    /** Return true if this item is currently active */
    isActive?: (editor: Editor) => boolean;
    /** Return true if this item should be disabled */
    isDisabled?: (editor: Editor) => boolean;
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

function emitOptionalFocus(
    onFocus?: () => void,
    onBlur?: () => void,
): (focused: boolean) => void {
    return (focused) => {
        if (focused) onFocus?.();
        else onBlur?.();
    };
}

interface LinkedStatDraft {
    key: string;
    label: string;
    kind: PlayerStatKind;
    field: "value" | "maxValue" | "full";
    display?: "" | "roll";
    value: number;
    maxValue: number;
    color: string;
    showTo: UserInfoBarVisibility;
    isReversed: boolean;
    roll?: string;
    rollCount?: number;
    rollLabel?: string;
    rollVisibility?: "global" | "private";
    rollMode?: "" | "set-value";
    rollResultMode?: PlayerStatRollResultMode;
    rollFormula?: string;
    rollKey?: string;
    rollConfigId?: string;
    rollConfigName?: string;
    rollEntries?: DiceEntry[];
    rollShowFormula?: boolean;
}

const STAT_VALUE_AT_END = /([+-]?\d+)\s*(?:\/\s*([+-]?\d+))?\s*$/;

interface LinkedStatTarget {
    blockText: string;
    blockEnd: number;
    valueFrom: number | null;
    valueTo: number | null;
    inferred: LinkedStatDraft;
}

type RollFormulaOperator = "" | "+" | "-" | "*" | "/";
type RollFormulaTermKind = "stat" | "dice" | "fixed";

interface RollFormulaTerm {
    id: string;
    kind: RollFormulaTermKind;
    op: RollFormulaOperator;
    statKey: string;
    diceType: "" | "d10" | "d20";
    diceCount: number;
    fixedValue: number;
    open: boolean;
    close: boolean;
}

const FORMULA_OPERATORS: RollFormulaOperator[] = ["+", "-", "*", "/"];

function createRollFormulaTerm(
    patch: Partial<RollFormulaTerm> = {},
): RollFormulaTerm {
    return {
        id:
            patch.id ||
            `term-${Date.now().toString(36)}-${Math.random()
                .toString(36)
                .slice(2, 8)}`,
        kind:
            patch.kind === "stat"
                ? "stat"
                : patch.kind === "fixed"
                  ? "fixed"
                  : "dice",
        op: patch.op && FORMULA_OPERATORS.includes(patch.op) ? patch.op : "",
        statKey: normalizeStatKey(String(patch.statKey || "")),
        diceType:
            patch.diceType === "d20" ? "d20" : patch.diceType === "d10" ? "d10" : "",
        diceCount: Math.max(1, Math.min(10, Math.trunc(Number(patch.diceCount) || 1))),
        fixedValue: Math.max(
            -999,
            Math.min(999, Math.trunc(Number(patch.fixedValue) || 0)),
        ),
        open: !!patch.open,
        close: !!patch.close,
    };
}

function parseRollFormula(value: string): RollFormulaTerm[] {
    if (!value.trim()) return [];
    try {
        const raw = JSON.parse(value) as unknown;
        if (!Array.isArray(raw)) return [];
        return raw
            .map((entry, index) => {
                const term = createRollFormulaTerm({
                    ...(entry && typeof entry === "object"
                        ? (entry as Partial<RollFormulaTerm>)
                        : {}),
                });
                return {
                    ...term,
                    op: (index === 0 ? "" : term.op || "+") as RollFormulaOperator,
                };
            })
            .filter(
                (term) =>
                    term.kind === "dice" ||
                    term.kind === "fixed" ||
                    term.statKey,
            );
    } catch {
        return [];
    }
}

function serializeRollFormula(terms: RollFormulaTerm[]): string {
    const normalized = terms.map((term, index) => ({
        kind: term.kind,
        op: index === 0 ? "" : term.op || "+",
        statKey: normalizeStatKey(term.statKey),
        diceType: term.diceType,
        diceCount: Math.max(1, Math.min(10, Math.trunc(Number(term.diceCount) || 1))),
        fixedValue: Math.max(
            -999,
            Math.min(999, Math.trunc(Number(term.fixedValue) || 0)),
        ),
        open: !!term.open,
        close: !!term.close,
    }));
    return normalized.length > 0 ? JSON.stringify(normalized) : "";
}

function defaultRollFormulaTerms(): RollFormulaTerm[] {
    return [createRollFormulaTerm({ kind: "dice", diceCount: 1 })];
}

function formulaTermsFromStat(stat: PlayerStat): RollFormulaTerm[] {
    const parsed = parseRollFormula(stat.rollFormula || "");
    if (parsed.length > 0) return parsed;
    const terms: RollFormulaTerm[] = [];
    if (stat.rollDiceStatKey) {
        terms.push(
            createRollFormulaTerm({
                kind: "stat",
                statKey: stat.rollDiceStatKey,
            }),
        );
    }
    terms.push(
        createRollFormulaTerm({
            kind: "dice",
            op: terms.length > 0 ? operatorFromDiceOperation(stat.rollDiceOperation) : "",
            diceType:
                stat.rollConfigId === "template:dnd:base-d20"
                    ? "d20"
                    : stat.rollConfigId
                      ? "d10"
                      : "",
            diceCount: stat.rollBaseDiceCount || 1,
        }),
    );
    if (stat.rollModifierStatKey) {
        terms.push(
            createRollFormulaTerm({
                kind: "stat",
                op: "+",
                statKey: stat.rollModifierStatKey,
            }),
        );
    }
    return terms;
}

function operatorFromDiceOperation(
    operation: PlayerStatRollDiceOperation,
): RollFormulaOperator {
    if (operation === "multiply") return "*";
    if (operation === "add") return "+";
    return "+";
}

function diceOperationFromOperator(
    operator: RollFormulaOperator,
): PlayerStatRollDiceOperation {
    if (operator === "*") return "multiply";
    if (operator === "+") return "add";
    return "";
}

function formulaPreview(
    terms: RollFormulaTerm[],
    statOptions: NoteEditorSelectOption[],
): string {
    if (terms.length === 0) return "";
    const statLabels = new Map(statOptions.map((option) => [option.value, option.label]));
    return terms
        .map((term, index) => {
            const op = index === 0 ? "" : `${term.op || "+"} `;
            const open = term.open ? "(" : "";
            const close = term.close ? ")" : "";
            const body =
                term.kind === "stat"
                    ? statLabels.get(term.statKey) || term.statKey || "Stat"
                    : term.kind === "fixed"
                      ? String(Math.trunc(Number(term.fixedValue) || 0))
                      : `${term.diceCount || 1}${term.diceType || "d?"}`;
            return `${op}${open}${body}${close}`;
        })
        .join(" ")
        .trim();
}

function compileRollFormula(
    terms: RollFormulaTerm[],
): {
    sourceStatKey: string;
    diceType: "" | "d10" | "d20";
    diceCount: number;
    diceOperation: PlayerStatRollDiceOperation;
    diceStatKey: string;
    modifierStatKey: string;
    formula: string;
    error: string;
} {
    const normalized = terms.map((term, index) =>
        createRollFormulaTerm({ ...term, op: index === 0 ? "" : term.op || "+" }),
    );
    const statTerms = normalized.filter((term) => term.kind === "stat");
    const diceTerms = normalized.filter((term) => term.kind === "dice");
    if (statTerms.some((term) => !term.statKey)) {
        return emptyCompiledFormula("Choose a stat for each Stat row.");
    }
    if (diceTerms.some((term) => !term.diceType)) {
        return emptyCompiledFormula("Choose a dice type for each Dice row.");
    }
    if (diceTerms.length === 0) {
        return emptyCompiledFormula("Add one Dice row.");
    }
    if (diceTerms.length > 1) {
        return emptyCompiledFormula("Use one Dice row for this roll.");
    }
    if (statTerms.length === 0) {
        return emptyCompiledFormula("Add at least one Stat row.");
    }

    const diceIndex = normalized.findIndex((term) => term.kind === "dice");
    const diceTerm = normalized[diceIndex];
    const beforeDice = normalized.slice(0, diceIndex).filter((term) => term.kind === "stat");
    const afterDice = normalized.slice(diceIndex + 1).filter((term) => term.kind === "stat");
    const diceStatKey = beforeDice[0]?.statKey || "";
    return {
        sourceStatKey: statTerms[0]?.statKey || "",
        diceType: diceTerm.diceType,
        diceCount: diceTerm.diceCount,
        diceOperation: diceStatKey ? diceOperationFromOperator(diceTerm.op) : "",
        diceStatKey,
        modifierStatKey: afterDice[0]?.statKey || (!diceStatKey ? statTerms[0]?.statKey || "" : ""),
        formula: serializeRollFormula(normalized),
        error: "",
    };
}

function emptyCompiledFormula(error: string): ReturnType<typeof compileRollFormula> {
    return {
        sourceStatKey: "",
        diceType: "",
        diceCount: 1,
        diceOperation: "",
        diceStatKey: "",
        modifierStatKey: "",
        formula: "",
        error,
    };
}

function getLinkedStatTarget(editor: Editor): LinkedStatTarget {
    const { $from } = editor.state.selection;
    const blockText = $from.parent.textBetween(
        0,
        $from.parent.content.size,
        " ",
        " ",
    );
    const valueMatch = blockText.match(STAT_VALUE_AT_END);
    const blockStart = $from.start();
    return {
        blockText,
        blockEnd: $from.end(),
        valueFrom:
            valueMatch?.index == null ? null : blockStart + valueMatch.index,
        valueTo: valueMatch ? blockStart + blockText.length : null,
        inferred: inferLinkedStatDraft(blockText),
    };
}

function inferLinkedStatDraft(text: string): LinkedStatDraft {
    const labelMatch = text.match(
        /^\s*(.+?)\s*[:：]\s*[+-]?\d+(?:\s*\/\s*[+-]?\d+)?\s*$/,
    );
    const label = sanitizeStatLabel(labelMatch?.[1] || "HP");
    const key = canonicalStatKey(normalizeStatKey(label));
    const valueMatch = text.match(STAT_VALUE_AT_END);
    const parsedValue = Number.parseInt(valueMatch?.[1] || "0", 10) || 0;
    const parsedMax = valueMatch?.[2]
        ? Number.parseInt(valueMatch[2], 10)
        : undefined;
    const isBar = /\/\s*[+-]?\d+\s*$/.test(text);
    const defaults = getStatDefaults(key);
    const kind = isBar ? "bar" : defaults.kind;

    return {
        key: key || "hp",
        label: label || "HP",
        kind,
        field: kind === "bar" ? inferStatField(label, isBar) : "value",
        value: parsedValue,
        maxValue: Math.max(1, parsedMax ?? (parsedValue || 1)),
        color: defaults.color,
        showTo: defaults.showTo,
        isReversed: false,
    };
}

function getStatDefaults(
    key: string,
): Pick<LinkedStatDraft, "kind" | "color" | "showTo"> {
    if (key === "hp") {
        return {
            kind: "bar",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "temporary-hp" || key === "temp-hp") {
        return {
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "initiative" || key === "inisiative") {
        return {
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "armor-class") {
        return {
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "speed") {
        return {
            kind: "value",
            color: "#44cc44",
            showTo: "roomMaster",
        };
    }
    if (key === "xp" || key === "experience" || key === "level") {
        return { kind: "value", color: "#44cc44", showTo: "all" };
    }
    return { kind: "value", color: "#44cc44", showTo: "private" };
}

function applyLinkedStatDraft(
    editor: Editor,
    target: LinkedStatTarget,
    draft: LinkedStatDraft,
): void {
    if (draft.display === "roll") {
        editor.chain().focus().insertContent(buildLinkedStatNode(draft)).run();
        return;
    }

    if (target.valueFrom != null && target.valueTo != null) {
        editor
            .chain()
            .focus()
            .insertContentAt(
                { from: target.valueFrom, to: target.valueTo },
                buildLinkedStatValueContent(draft),
            )
            .run();
        return;
    }

    editor.chain().focus().insertContent(buildStatLineContent(draft)).run();
}

function buildStatLineContent(draft: LinkedStatDraft): any {
    if (draft.kind === "bar") {
        const valueDraft: LinkedStatDraft = { ...draft, field: "value" };
        const maxDraft: LinkedStatDraft = { ...draft, field: "maxValue" };
        return [
            buildStatParagraph(`Current ${draft.label}`, valueDraft),
            buildStatParagraph(`Max ${draft.label}`, maxDraft),
        ];
    }

    return buildStatParagraph(draft.label, draft);
}

function buildStatParagraph(label: string, draft: LinkedStatDraft): any {
    return {
        type: "paragraph",
        content: [
            { type: "text", marks: [{ type: "bold" }], text: `${label}:` },
            { type: "text", text: " " },
            ...buildLinkedStatValueContent(draft),
        ],
    };
}

function buildLinkedStatValueContent(draft: LinkedStatDraft): any[] {
    if (draft.kind === "bar" && draft.field === "full") {
        return [
            buildLinkedStatNode({ ...draft, field: "value" }),
            { type: "text", text: "/" },
            buildLinkedStatNode({ ...draft, field: "maxValue" }),
        ];
    }
    return [buildLinkedStatNode(draft)];
}

function buildLinkedStatNode(draft: LinkedStatDraft): any {
    const field = draft.field === "maxValue" ? "maxValue" : "value";
    const rollEntries = normalizeDiceEntries(draft.rollEntries);
    const roll = normalizeDiceType(draft.roll);
    const attrs: Record<string, unknown> = {
        key: draft.key,
        label: draft.label,
        kind: draft.kind === "bar" && draft.isReversed ? "reverse" : draft.kind,
        field,
        value:
            field === "maxValue"
                ? Math.max(1, Math.trunc(draft.maxValue || 1))
                : Math.trunc(draft.value || 0),
        color: draft.color,
        showTo: draft.showTo,
    };
    if (draft.kind === "bar" && draft.isReversed) {
        attrs.isReversed = true;
    }
    if (draft.display === "roll") {
        attrs.display = "roll";
        attrs.rollShowFormula = draft.rollShowFormula !== false;
    }
    if (roll || rollEntries.length > 0) {
        attrs.roll = roll || rollEntries[0]?.diceType || "";
        attrs.rollCount = rollEntries[0]?.diceCount || draft.rollCount || 1;
        attrs.rollLabel = draft.rollLabel || draft.label;
        attrs.rollVisibility =
            draft.rollVisibility === "private" ? "private" : "global";
        attrs.rollMode = draft.rollMode || "";
        attrs.rollConfigId = draft.rollConfigId || "";
        attrs.rollConfigName = draft.rollConfigName || "";
        attrs.rollEntries = diceEntriesAttribute(rollEntries);
        attrs.rollResultMode = draft.rollResultMode || "";
        attrs.rollFormula = draft.rollFormula || "";
    }
    if (draft.rollKey) {
        attrs.rollKey = normalizeStatKey(draft.rollKey);
        attrs.rollLabel = draft.rollLabel || draft.label;
        attrs.roll = roll || draft.roll || "";
        attrs.rollCount = draft.rollCount || 1;
        attrs.rollVisibility =
            draft.rollVisibility === "private" ? "private" : "global";
        attrs.rollConfigId = draft.rollConfigId || "";
        attrs.rollResultMode = draft.rollResultMode || "";
        attrs.rollFormula = draft.rollFormula || "";
    }
    return {
        type: "linkedStat",
        attrs,
    };
}

function rollPatchFromDraft(
    draft: LinkedStatDraft,
): Pick<
    LinkedStatDraft,
    | "roll"
    | "rollCount"
    | "rollLabel"
    | "rollVisibility"
    | "rollMode"
    | "rollResultMode"
    | "rollKey"
    | "rollConfigId"
    | "rollConfigName"
    | "rollEntries"
    | "rollFormula"
> {
    return {
        roll: draft.roll,
        rollCount: draft.rollCount,
        rollLabel: draft.rollLabel,
        rollVisibility: draft.rollVisibility,
        rollMode: draft.rollMode,
        rollResultMode: draft.rollResultMode,
        rollKey: draft.rollKey,
        rollConfigId: draft.rollConfigId,
        rollConfigName: draft.rollConfigName,
        rollEntries: draft.rollEntries,
        rollFormula: draft.rollFormula,
    };
}

function mergeRollDraft(
    draft: LinkedStatDraft,
    rollSource: LinkedStatDraft,
): LinkedStatDraft {
    return normalizeLinkedStatDraft({
        ...draft,
        ...rollPatchFromDraft(rollSource),
    });
}

function draftWithRollStat(
    draft: LinkedStatDraft,
    stat: PlayerStat,
    options: { display?: "" | "roll"; rollShowFormula?: boolean } = {},
): LinkedStatDraft {
    return normalizeLinkedStatDraft({
        ...draftFromPlayerStat(stat, draft),
        display: options.display || draft.display || "",
        roll: diceTypeForConfigId(stat.rollConfigId) || draft.roll || "",
        rollCount: stat.rollBaseDiceCount || draft.rollCount || 1,
        rollKey: stat.rollKey || stat.key,
        rollLabel: stat.rollName || stat.label,
        rollVisibility: stat.rollVisibility || draft.rollVisibility || "global",
        rollConfigId: stat.rollConfigId || draft.rollConfigId || "",
        rollResultMode: stat.rollResultMode || draft.rollResultMode || "",
        rollFormula: stat.rollFormula || draft.rollFormula || "",
        rollShowFormula:
            options.rollShowFormula ?? draft.rollShowFormula ?? true,
    });
}

function diceConfigIdForDiceType(diceType: string): string {
    if (diceType === "d10") return "template:rbrb:base-d10";
    if (diceType === "d20") return "template:dnd:base-d20";
    return "";
}

function diceTypeForConfigId(configId: string): "" | "d10" | "d20" {
    if (configId === "template:rbrb:base-d10") return "d10";
    if (configId === "template:dnd:base-d20") return "d20";
    return "";
}

function normalizeRollKey(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_.-]+/g, "_")
        .replace(/^[_-]+|[_-]+$/g, "")
        .slice(0, 64);
}

function defaultRollKey(playerName: string, rollName: string): string {
    const rollNameKey = normalizeRollKey(rollName);
    if (!rollNameKey) return "";
    const ownerKey = normalizeRollKey(playerName);
    return [ownerKey, rollNameKey].filter(Boolean).join("_").slice(0, 64);
}

function clearDraftRoll(draft: LinkedStatDraft): LinkedStatDraft {
    return normalizeLinkedStatDraft({
        ...draft,
        display: "",
        roll: "",
        rollCount: 1,
        rollLabel: "",
        rollVisibility: "global",
        rollMode: "",
        rollResultMode: "",
        rollKey: "",
        rollConfigId: "",
        rollConfigName: "",
        rollEntries: [],
        rollFormula: "",
        rollShowFormula: true,
    });
}

function draftFromPlayerStat(
    stat: PlayerStat,
    inferred: LinkedStatDraft,
): LinkedStatDraft {
    const key = canonicalStatKey(normalizeStatKey(stat.key || stat.label));
    const defaults = getStatDefaults(key);
    const kind: PlayerStatKind = stat.kind === "bar" ? "bar" : "value";
    const maxValue =
        kind === "bar" ? Math.max(1, Math.trunc(stat.maxValue || 1)) : 0;
    return {
        key,
        label: stat.label || inferred.label,
        kind,
        field: kind === "bar" ? inferred.field : "value",
        value:
            kind === "bar"
                ? Math.max(0, Math.min(maxValue, Math.trunc(stat.value || 0)))
                : Math.trunc(stat.value || 0),
        maxValue,
        color: normalizeStatColor(stat.color || defaults.color),
        showTo: stat.showTo || defaults.showTo,
        isReversed: kind === "bar" && !!stat.isReversed,
    };
}

function inferStatField(
    label: string,
    hasInlineMax: boolean,
): LinkedStatDraft["field"] {
    const key = normalizeStatKey(label);
    if (key.includes("max")) return "maxValue";
    if (hasInlineMax) return "full";
    return "value";
}

function normalizeLinkedStatDraft(draft: LinkedStatDraft): LinkedStatDraft {
    const key = canonicalStatKey(normalizeStatKey(draft.key || draft.label));
    const defaults = getStatDefaults(key);
    const kind: PlayerStatKind = draft.kind === "bar" ? "bar" : "value";
    const maxValue =
        kind === "bar"
            ? Math.max(1, Math.trunc(Number(draft.maxValue) || 1))
            : 0;
    return {
        key,
        label: sanitizeStatLabel(draft.label),
        kind,
        field: kind === "bar" ? draft.field : "value",
        display: draft.display === "roll" ? "roll" : "",
        value:
            kind === "bar"
                ? Math.max(
                      0,
                      Math.min(maxValue, Math.trunc(Number(draft.value) || 0)),
                  )
                : Math.trunc(Number(draft.value) || 0),
        maxValue,
        color: normalizeStatColor(draft.color || defaults.color),
        showTo: normalizeVisibility(draft.showTo || defaults.showTo),
        isReversed: kind === "bar" && !!draft.isReversed,
        roll: normalizeDiceType(draft.roll),
        rollCount: Math.max(1, Math.trunc(Number(draft.rollCount) || 1)),
        rollLabel: sanitizeStatLabel(draft.rollLabel || ""),
        rollVisibility:
            draft.rollVisibility === "private" ? "private" : "global",
        rollMode: draft.rollMode === "set-value" ? "set-value" : "",
        rollResultMode: (() => {
            const mode = normalizeDiceMode(draft.rollResultMode);
            return draft.rollResultMode ? mode : "";
        })(),
        rollKey: normalizeStatKey(String(draft.rollKey || "")),
        rollConfigId: String(draft.rollConfigId || ""),
        rollConfigName: String(draft.rollConfigName || ""),
        rollEntries: normalizeDiceEntries(draft.rollEntries),
        rollFormula: String(draft.rollFormula || "").trim().slice(0, 4096),
        rollShowFormula: draft.rollShowFormula !== false,
    };
}

function sanitizeStatLabel(value: string): string {
    return value
        .replace(/^\s*[-*]\s*/, "")
        .replace(/\s+/g, " ")
        .replace(/["<>]/g, "")
        .trim()
        .slice(0, 48);
}

function normalizeStatColor(value: string): string {
    return /^#[0-9a-fA-F]{6}$/.test(value.trim()) ? value.trim() : "#44cc44";
}

function normalizeVisibility(value: string): UserInfoBarVisibility {
    return value === "all" || value === "roomMaster" || value === "private"
        ? value
        : "private";
}

function canonicalStatKey(key: string): string {
    if (key === "health" || key === "current-hp" || key === "hit-points")
        return "hp";
    if (key === "temp-hp" || key === "temporary-hit-points")
        return "temporary-hp";
    if (key === "inisiative") return "initiative";
    if (key === "ac" || key === "armor-class-ac") return "armor-class";
    if (key === "experience") return "xp";
    return key;
}

/**
 * Toolbar group definitions for the note editor.
 * Organised into collapsible sections: Text, Lists, Table, Insert.
 */
function getToolbarGroups(
    onOpenStatLink: (editor: Editor) => void,
    onOpenStatsImport: () => void,
    canImportStats: boolean,
): ToolbarGroup[] {
    return [
        {
            label: "Text",
            items: [
                {
                    title: "Bold",
                    icon: "B",
                    action: (e) => e.chain().focus().toggleBold().run(),
                    isActive: (e) => e.isActive("bold"),
                },
                {
                    title: "Italic",
                    icon: "I",
                    action: (e) => e.chain().focus().toggleItalic().run(),
                    isActive: (e) => e.isActive("italic"),
                },
                {
                    title: "Strikethrough",
                    icon: "S̶",
                    action: (e) => e.chain().focus().toggleStrike().run(),
                    isActive: (e) => e.isActive("strike"),
                },
                {
                    title: "Heading 1",
                    icon: "H1",
                    action: (e) =>
                        e.chain().focus().toggleHeading({ level: 1 }).run(),
                    isActive: (e) => e.isActive("heading", { level: 1 }),
                },
                {
                    title: "Heading 2",
                    icon: "H2",
                    action: (e) =>
                        e.chain().focus().toggleHeading({ level: 2 }).run(),
                    isActive: (e) => e.isActive("heading", { level: 2 }),
                },
                {
                    title: "Heading 3",
                    icon: "H3",
                    action: (e) =>
                        e.chain().focus().toggleHeading({ level: 3 }).run(),
                    isActive: (e) => e.isActive("heading", { level: 3 }),
                },
            ],
        },
        {
            label: "Lists",
            items: [
                {
                    title: "Bullet list",
                    icon: "•",
                    action: (e) => e.chain().focus().toggleBulletList().run(),
                    isActive: (e) => e.isActive("bulletList"),
                },
                {
                    title: "Ordered list",
                    icon: "1.",
                    action: (e) => e.chain().focus().toggleOrderedList().run(),
                    isActive: (e) => e.isActive("orderedList"),
                },
                {
                    title: "Task list",
                    icon: "☑",
                    action: (e) => e.chain().focus().toggleTaskList().run(),
                    isActive: (e) => e.isActive("taskList"),
                },
            ],
        },
        {
            label: "Table",
            items: [
                {
                    title: "Insert table (3×3)",
                    icon: "⊞",
                    action: (e) =>
                        e
                            .chain()
                            .focus()
                            .insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true,
                            })
                            .run(),
                },
                {
                    title: "Add row above",
                    icon: "↑+",
                    action: (e) => e.chain().focus().addRowBefore().run(),
                    isDisabled: (e) => !e.can().addRowBefore(),
                },
                {
                    title: "Add row below",
                    icon: "↓+",
                    action: (e) => e.chain().focus().addRowAfter().run(),
                    isDisabled: (e) => !e.can().addRowAfter(),
                },
                {
                    title: "Add column left",
                    icon: "←+",
                    action: (e) => e.chain().focus().addColumnBefore().run(),
                    isDisabled: (e) => !e.can().addColumnBefore(),
                },
                {
                    title: "Add column right",
                    icon: "→+",
                    action: (e) => e.chain().focus().addColumnAfter().run(),
                    isDisabled: (e) => !e.can().addColumnAfter(),
                },
                {
                    title: "Delete row",
                    icon: "⊟R",
                    action: (e) => e.chain().focus().deleteRow().run(),
                    isDisabled: (e) => !e.can().deleteRow(),
                },
                {
                    title: "Delete column",
                    icon: "⊟C",
                    action: (e) => e.chain().focus().deleteColumn().run(),
                    isDisabled: (e) => !e.can().deleteColumn(),
                },
                {
                    title: "Delete table",
                    icon: "🗑",
                    action: (e) => e.chain().focus().deleteTable().run(),
                    isDisabled: (e) => !e.can().deleteTable(),
                },
            ],
        },
        {
            label: "Insert",
            items: [
                {
                    title: "Checkbox (in table cell)",
                    icon: "☐",
                    action: (e) => {
                        e.chain()
                            .focus()
                            .insertContent({
                                type: "checkbox",
                                attrs: { checked: false },
                            })
                            .run();
                    },
                },
                {
                    title: "Image",
                    icon: "🖼",
                    action: (e) => {
                        const url = prompt("Image URL:");
                        if (url) e.chain().focus().setImage({ src: url }).run();
                    },
                },
                {
                    title: "Iframe / Embed",
                    icon: "▶",
                    action: (e) => {
                        const url = prompt("Embed URL (YouTube, etc.):");
                        if (url) {
                            e.chain()
                                .focus()
                                .insertContent({
                                    type: "iframe",
                                    attrs: {
                                        src: url,
                                        width: "100%",
                                        height: "400",
                                    },
                                })
                                .run();
                        }
                    },
                },
                {
                    title: "Horizontal rule",
                    icon: "—",
                    action: (e) => e.chain().focus().setHorizontalRule().run(),
                },
                {
                    title: "Code block",
                    icon: "</>",
                    action: (e) => e.chain().focus().toggleCodeBlock().run(),
                    isActive: (e) => e.isActive("codeBlock"),
                },
                {
                    title: "Blockquote",
                    icon: "❝",
                    action: (e) => e.chain().focus().toggleBlockquote().run(),
                    isActive: (e) => e.isActive("blockquote"),
                },
            ],
        },
        {
            label: "Stats",
            items: [
                {
                    title: "Link current numeric line to player stats",
                    icon: "@",
                    action: onOpenStatLink,
                },
                {
                    title: "Import stats from JSON",
                    icon: "{}",
                    action: () => onOpenStatsImport(),
                    isDisabled: () => !canImportStats,
                },
            ],
        },
    ];
}

/**
 * Toolbar button component.
 * Renders a small dark-themed button with tooltip, active state highlight,
 * and disabled styling.
 */
function ToolbarBtn({ item, editor }: { item: ToolbarItem; editor: Editor }) {
    const active = item.isActive?.(editor) ?? false;
    const disabled = item.isDisabled?.(editor) ?? false;

    return (
        <button
            type="button"
            title={item.title}
            disabled={disabled}
            onMouseDown={(e) => {
                // Prevent editor blur
                e.preventDefault();
                if (!disabled) item.action(editor);
            }}
            className={`
                shrink-0 px-1.5 py-0.5 rounded text-[11px] leading-tight
                border border-transparent select-none cursor-pointer
                transition-colors duration-100
                ${
                    active
                        ? "bg-blue-600/60 text-white border-blue-500/50"
                        : "bg-white/5 text-gray-300 hover:bg-white/15 hover:text-white"
                }
                ${disabled ? "opacity-30 cursor-not-allowed" : ""}
            `}
        >
            {item.icon}
        </button>
    );
}

/**
 * Collapsible toolbar section.
 * Shows a group label that toggles visibility of the group's buttons.
 * Starts expanded by default.
 */
function ToolbarSection({
    group,
    editor,
    expanded,
    onToggle,
}: {
    group: ToolbarGroup;
    editor: Editor;
    expanded: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="flex items-center gap-0.5">
            <button
                type="button"
                onMouseDown={(e) => {
                    e.preventDefault();
                    onToggle();
                }}
                className="text-[10px] text-gray-500 hover:text-gray-300 px-1 py-0.5 select-none cursor-pointer shrink-0"
                title={`${expanded ? "Collapse" : "Expand"} ${group.label}`}
            >
                {expanded ? "▾" : "▸"} {group.label}
            </button>
            {expanded && (
                <div className="flex items-center gap-0.5">
                    {group.items.map((item) => (
                        <ToolbarBtn
                            key={item.title}
                            item={item}
                            editor={editor}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * Full editor toolbar.
 * Renders collapsible groups separated by thin dividers.
 * Only visible when the editor is editable.
 */
function EditorToolbar({
    editor,
    onOpenStatLink,
    onOpenStatsImport,
    canImportStats,
}: {
    editor: Editor;
    onOpenStatLink: (editor: Editor) => void;
    onOpenStatsImport: () => void;
    canImportStats: boolean;
}) {
    const groups = getToolbarGroups(
        onOpenStatLink,
        onOpenStatsImport,
        canImportStats,
    );
    const [expandedGroups, setExpandedGroups] = useState<
        Record<string, boolean>
    >(() => {
        const initial: Record<string, boolean> = {};
        groups.forEach((g) => (initial[g.label] = true));
        return initial;
    });

    const toggle = useCallback(
        (label: string) =>
            setExpandedGroups((prev) => ({ ...prev, [label]: !prev[label] })),
        [],
    );

    return (
        <div className="flex items-center gap-1 px-2 py-1 border-b border-[#333] bg-[#1a1a1a] overflow-x-auto flex-wrap">
            {groups.map((group, i) => (
                <div key={group.label} className="flex items-center gap-1">
                    {i > 0 && <div className="w-px h-4 bg-gray-700 mx-0.5" />}
                    <ToolbarSection
                        group={group}
                        editor={editor}
                        expanded={expandedGroups[group.label] ?? true}
                        onToggle={() => toggle(group.label)}
                    />
                </div>
            ))}
        </div>
    );
}

function StatLinkModal({
    target,
    linkedStats,
    roomId,
    playerId,
    linkedStatsOwnerId,
    playerName = "",
    canCreateStats = false,
    initialTab = "stats",
    initialEditRollKey = "",
    onInitialEditRollHandled,
    onRefreshLinkedStats,
    onApply,
    onClose,
    onFocus,
    onBlur,
}: {
    target: LinkedStatTarget | null;
    linkedStats: PlayerStat[];
    roomId: string;
    playerId: string;
    linkedStatsOwnerId?: string;
    playerName?: string;
    canCreateStats?: boolean;
    initialTab?: "stats" | "rolls";
    initialEditRollKey?: string;
    onInitialEditRollHandled?: () => void;
    onRefreshLinkedStats?: () => Promise<PlayerStat[]>;
    onApply: (draft: LinkedStatDraft) => void;
    onClose: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}) {
    const host = useNoteEditorHost();
    const {
        Button: GameButton,
        Input: GameInput,
        Modal: GameModal,
        Select: GameSelect,
    } = host.components;
    const [pickerTab, setPickerTab] = useState<"stats" | "rolls">("stats");
    const [mode, setMode] = useState<"existing" | "create">(
        canCreateStats ? "create" : "existing",
    );
    const [rollFilter, setRollFilter] = useState<PlayerStatRollScope>("all");
    const [rollSearch, setRollSearch] = useState("");
    const [rollEditorMode, setRollEditorMode] = useState<"create" | "edit">(
        "create",
    );
    const [editingRollKey, setEditingRollKey] = useState("");
    const [openRollSelect, setOpenRollSelect] = useState("");
    const [createRollOpen, setCreateRollOpen] = useState(false);
    const [rollName, setRollName] = useState("");
    const [rollKeyInput, setRollKeyInput] = useState("");
    const [rollKeyTouched, setRollKeyTouched] = useState(false);
    const [rollMode, setRollMode] = useState<"" | "set-value">("");
    const [rollResultMode, setRollResultMode] =
        useState<PlayerStatRollResultMode>("sum");
    const [rollVisibility, setRollVisibility] =
        useState<PlayerStatRollVisibility>("global");
    const [rollFormulaTerms, setRollFormulaTerms] = useState<RollFormulaTerm[]>(
        () => defaultRollFormulaTerms(),
    );
    const [rollTargetStatKey, setRollTargetStatKey] = useState("");
    const [rollCreateError, setRollCreateError] = useState("");
    const [statSearch, setStatSearch] = useState("");
    const [selectedKey, setSelectedKey] = useState("");
    const [requestStats, setRequestStats] = useState<PlayerStat[] | null>(null);
    // Fetched data for the currently-active roll scope tab (null = not yet loaded).
    const [requestRolls, setRequestRolls] = useState<PlayerStat[] | null>(null);
    // Accumulates every roll stat seen across all HTTP fetches for selected-roll lookups.
    const [knownRollList, setKnownRollList] = useState<PlayerStat[]>([]);
    const [statsLoading, setStatsLoading] = useState(false);
    const [draggedRollFormulaTermId, setDraggedRollFormulaTermId] =
        useState("");
    const wasOpenRef = useRef(false);
    // Held so the stats-tab effect can always call the latest version without
    // being re-triggered every time the callback reference changes.
    const refreshLinkedStatsRef = useRef<() => Promise<PlayerStat[]>>(async () => []);
    const [draft, setDraft] = useState<LinkedStatDraft>(
        () => target?.inferred || inferLinkedStatDraft("HP: 0"),
    );
    const statsOwnerId = isUnassignedStatsOwnerId(linkedStatsOwnerId)
        ? ""
        : String(linkedStatsOwnerId || playerId || "").trim();
    const sourceLinkedStats = requestStats || linkedStats;
    const sourceRollStats = requestRolls ?? EMPTY_PLAYER_STATS;
    const stats = useMemo(
        () =>
            dedupeLinkedStats(
                sourceLinkedStats.filter((stat) => !isRollLogicStat(stat)),
            ),
        [sourceLinkedStats],
    );
    const searchedStats = useMemo(() => {
        const query = statSearch.trim().toLowerCase();
        if (!query) return stats;
        return stats.filter(
            (stat) =>
                stat.label.toLowerCase().includes(query) ||
                stat.key.toLowerCase().includes(query),
        );
    }, [statSearch, stats]);
    const allRollStats = useMemo(
        () =>
            sourceRollStats
                .filter(
                    (stat) =>
                        !!stat.rollConfigId && !!(stat.rollKey || stat.key),
                )
                .sort((left, right) => rollTimestamp(right) - rollTimestamp(left)),
        [sourceRollStats],
    );
    const knownRollStats = useMemo(() => {
        let merged: PlayerStat[] = [];
        [...knownRollList, ...sourceLinkedStats].forEach((stat) => {
            if (!stat.rollConfigId || !(stat.rollKey || stat.key)) return;
            merged = mergeStatIntoList(merged, stat);
        });
        return merged.sort(
            (left, right) => rollTimestamp(right) - rollTimestamp(left),
        );
    }, [knownRollList, sourceLinkedStats]);
    const rollStats = allRollStats;
    const searchedRollStats = useMemo(() => {
        const query = rollSearch.trim().toLowerCase();
        if (!query) return rollStats;
        return rollStats.filter((stat) => {
            const rollKey = normalizeStatKey(stat.rollKey || stat.key);
            return (
                (stat.rollName || stat.label).toLowerCase().includes(query) ||
                stat.label.toLowerCase().includes(query) ||
                stat.key.toLowerCase().includes(query) ||
                rollKey.toLowerCase().includes(query)
            );
        });
    }, [rollSearch, rollStats]);
    const selectedRollKey = normalizeStatKey(draft.rollKey || "");
    const selectedRollStat = knownRollStats.find(
        (stat) =>
            normalizeStatKey(stat.rollKey || stat.key) === selectedRollKey,
    );
    const canEditSelectedRoll =
        !!selectedRollStat &&
        (canCreateStats || selectedRollStat.rollOwnerId === playerId);
    const ownStats = useMemo(
        () =>
            stats.filter(
                (stat) => !stat.userId || stat.userId === statsOwnerId,
            ),
        [stats, statsOwnerId],
    );
    const ownStatOptions = useMemo<NoteEditorSelectOption[]>(
        () =>
            ownStats.map((stat) => ({
                value: stat.key,
                label: stat.label || stat.key,
            })),
        [ownStats],
    );
    const diceTypeOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "", label: "Choose dice..." },
            { value: "d10", label: "d10" },
            { value: "d20", label: "d20" },
        ],
        [],
    );
    const statKindOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "value", label: "Value" },
            { value: "bar", label: "Bar" },
            { value: "reverse", label: "Reverse Bar" },
        ],
        [],
    );
    const draftKindSelectValue =
        draft.kind === "bar" && draft.isReversed ? "reverse" : draft.kind;
    const statFieldOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "value", label: "Current" },
            { value: "maxValue", label: "Max" },
            { value: "full", label: "Current / Max" },
        ],
        [],
    );
    const formulaKindOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "stat", label: "Stat" },
            { value: "dice", label: "Dice" },
            { value: "fixed", label: "Fixed" },
        ],
        [],
    );
    const formulaOperatorOptions = useMemo<NoteEditorSelectOption[]>(
        () =>
            FORMULA_OPERATORS.map((operator) => ({
                value: operator,
                label: operator,
            })),
        [],
    );
    const rollResultModeOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "", label: "Use dice config" },
            { value: "sum", label: "Sum" },
            { value: "max", label: "Highest" },
            { value: "min", label: "Lowest" },
        ],
        [],
    );
    const rollVisibilityOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "global", label: "Public" },
            { value: "private", label: "Private" },
        ],
        [],
    );
    const resultModeOptions = useMemo<NoteEditorSelectOption[]>(
        () => [
            { value: "", label: "Show result" },
            { value: "set-value", label: "Set stat value" },
        ],
        [],
    );
    const rollFormulaPreview = useMemo(
        () => formulaPreview(rollFormulaTerms, ownStatOptions),
        [ownStatOptions, rollFormulaTerms],
    );
    const firstFormulaStatKey = useMemo(
        () =>
            rollFormulaTerms.find(
                (term) => term.kind === "stat" && term.statKey,
            )?.statKey || "",
        [rollFormulaTerms],
    );

    const refreshLinkedStats = useCallback(async () => {
        if (!onRefreshLinkedStats) return [];
        setStatsLoading(true);
        try {
            const nextStats = await onRefreshLinkedStats();
            setRequestStats(nextStats);
            return nextStats;
        } finally {
            setStatsLoading(false);
        }
    }, [onRefreshLinkedStats]);
    // Keep ref in sync so the stats-tab effect always calls the latest version.
    refreshLinkedStatsRef.current = refreshLinkedStats;

    const refreshRoomRolls = useCallback(async (scope: PlayerStatRollScope) => {
        if (!roomId) return;
        setStatsLoading(true);
        try {
            const nextRolls = await host.fetchPlayerStatRolls?.(roomId, scope);
            if (!nextRolls) return;
            setRequestRolls(nextRolls);
            setKnownRollList((prev) => {
                let merged = [...prev];
                for (const stat of nextRolls) {
                    merged = mergeStatIntoList(merged, stat);
                }
                return merged;
            });
            return nextRolls;
        } finally {
            setStatsLoading(false);
        }
    }, [host.fetchPlayerStatRolls, roomId]);

    useEffect(() => {
        const isOpen = !!target;
        const justOpened = isOpen && !wasOpenRef.current;
        wasOpenRef.current = isOpen;
        if (!target) return;
        if (!justOpened) return;
        setPickerTab(initialTab);
        setRollFilter("all");
        setRequestStats(null);
        setRequestRolls(null);
        setKnownRollList([]);
        const inferred = target.inferred;
        const selected =
            stats.find((stat) => stat.key === inferred.key) || stats[0] || null;
        if (selected) {
            setMode("existing");
            setSelectedKey(selected.key);
            setDraft(draftFromPlayerStat(selected, inferred));
        } else if (canCreateStats) {
            setMode("create");
            setSelectedKey("");
            setDraft(inferred);
        } else {
            setMode("existing");
            setSelectedKey("");
            setDraft(inferred);
        }
        setRollCreateError("");
        setCreateRollOpen(false);
        setEditingRollKey("");
        setOpenRollSelect("");
        setStatSearch("");
        setRollSearch("");
    }, [canCreateStats, initialTab, target, stats]);

    // Re-fetch rolls with the correct scope whenever the tab or scope filter changes.
    // Clear the current data first so stale results from the previous scope are never shown.
    useEffect(() => {
        if (!target || pickerTab !== "rolls" || !roomId) return;
        setRequestRolls(null);
        void refreshRoomRolls(rollFilter).catch(() => undefined);
    }, [
        pickerTab,
        refreshRoomRolls,
        rollFilter,
        roomId,
        target,
    ]);

    // Re-fetch stats via HTTP whenever the user switches to the Stats tab.
    // Uses a ref so the effect only re-runs on real tab/target changes, not on
    // every render where onRefreshLinkedStats gets a new inline-function reference.
    useEffect(() => {
        if (!target || pickerTab !== "stats") return;
        void refreshLinkedStatsRef.current().catch(() => undefined);
    }, [target, pickerTab]);

    const updateDraft = (patch: Partial<LinkedStatDraft>) => {
        setDraft((prev) => normalizeLinkedStatDraft({ ...prev, ...patch }));
    };

    const selectFocusChange = useMemo(
        () => emitOptionalFocus(onFocus, onBlur),
        [onBlur, onFocus],
    );

    const selectedOptionLabel = (
        options: NoteEditorSelectOption[],
        value: string,
        fallback: string,
    ) => options.find((option) => option.value === value)?.label || fallback;

    const setRollSelectOpen = (key: string, open: boolean) => {
        setOpenRollSelect(open ? key : "");
    };

    const updateRollFormulaTerm = (
        termId: string,
        patch: Partial<RollFormulaTerm>,
    ) => {
        setRollFormulaTerms((current) =>
            current.map((term, index) =>
                term.id === termId
                    ? createRollFormulaTerm({
                          ...term,
                          ...patch,
                          op: index === 0 ? "" : patch.op ?? term.op,
                      })
                    : term,
            ),
        );
    };

    const normalizeRollFormulaTermOrder = (terms: RollFormulaTerm[]): RollFormulaTerm[] =>
        terms.map((term, index) => ({
            ...term,
            op: (index === 0 ? "" : term.op || "+") as RollFormulaOperator,
        }));

    const moveRollFormulaTerm = (termId: string, beforeTermId: string) => {
        if (!termId || termId === beforeTermId) return;
        setRollFormulaTerms((current) => {
            const fromIndex = current.findIndex((term) => term.id === termId);
            const toIndex = current.findIndex((term) => term.id === beforeTermId);
            if (fromIndex < 0 || toIndex < 0) return current;
            const next = [...current];
            const [moved] = next.splice(fromIndex, 1);
            if (!moved) return current;
            const insertIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
            next.splice(insertIndex, 0, moved);
            return normalizeRollFormulaTermOrder(next);
        });
    };

    const addRollFormulaTerm = () => {
        setRollFormulaTerms((current) => [
            ...current,
            createRollFormulaTerm({
                kind: "stat",
                op: current.length === 0 ? "" : "+",
            }),
        ]);
    };

    const removeRollFormulaTerm = (termId: string) => {
        setRollFormulaTerms((current) => {
            const next = current.filter((term) => term.id !== termId);
            return normalizeRollFormulaTermOrder(
                next.length > 0 ? next : defaultRollFormulaTerms(),
            );
        });
    };

    const resetRollEditor = () => {
        setRollEditorMode("create");
        setEditingRollKey("");
        setRollName("");
        setRollKeyInput("");
        setRollKeyTouched(false);
        setRollMode("");
        setRollResultMode("sum");
        setRollVisibility("global");
        setRollFormulaTerms(defaultRollFormulaTerms());
        setRollTargetStatKey("");
        setRollCreateError("");
        setOpenRollSelect("");
    };

    const openCreateRollEditor = () => {
        resetRollEditor();
        setCreateRollOpen(true);
    };

    const openEditRollEditor = (stat: PlayerStat) => {
        const rollKey = normalizeStatKey(stat.rollKey || stat.key);
        setRollEditorMode("edit");
        setEditingRollKey(rollKey);
        setRollName(stat.rollName || stat.label || "");
        setRollKeyInput(normalizeRollKey(stat.rollKey || stat.key));
        setRollKeyTouched(true);
        setRollMode(stat.rollMode === "set-value" ? "set-value" : "");
        setRollResultMode(stat.rollResultMode || "");
        setRollVisibility(stat.rollVisibility === "private" ? "private" : "global");
        setRollFormulaTerms(formulaTermsFromStat(stat));
        setRollTargetStatKey(stat.rollTargetStatKey || stat.key);
        setRollCreateError("");
        setOpenRollSelect("");
        setCreateRollOpen(true);
    };

    useEffect(() => {
        if (!createRollOpen || rollEditorMode !== "create" || rollKeyTouched) {
            return;
        }
        setRollKeyInput(defaultRollKey(playerName, rollName));
    }, [createRollOpen, playerName, rollEditorMode, rollKeyTouched, rollName]);

    const saveRollEditor = async () => {
        setRollCreateError("");
        const compiled = compileRollFormula(rollFormulaTerms);
        if (compiled.error) {
            setRollCreateError(compiled.error);
            return;
        }
        const sourceKey = normalizeStatKey(compiled.sourceStatKey);
        const configId = diceConfigIdForDiceType(compiled.diceType);
        if (!configId) {
            setRollCreateError("Choose a dice type.");
            return;
        }
        const sourceStat = ownStats.find(
            (stat) => normalizeStatKey(stat.key) === sourceKey,
        );
        if (!sourceStat) {
            setRollCreateError("Choose one of your stats for this roll.");
            return;
        }
        if (!roomId || !playerId || !statsOwnerId) {
            setRollCreateError("Room/player context is missing.");
            return;
        }

        const existingRoll =
            rollEditorMode === "edit"
                ? knownRollStats.find(
                      (stat) =>
                          normalizeStatKey(stat.rollKey || stat.key) ===
                          normalizeStatKey(editingRollKey),
                  )
                : null;
        if (
            existingRoll &&
            !canCreateStats &&
            existingRoll.rollOwnerId !== playerId
        ) {
            setRollCreateError("You can only edit rolls you own.");
            return;
        }
        const rowStat = existingRoll || sourceStat;
        const label =
            sanitizeStatLabel(rollName || rowStat.label) ||
            rowStat.label;
        const nextRollKey = normalizeRollKey(
            rollKeyInput || defaultRollKey(playerName, label),
        );
        if (!nextRollKey) {
            setRollCreateError("Roll key is required.");
            return;
        }
        const nextRowKey =
            existingRoll && !isRollLogicStat(existingRoll)
                ? existingRoll.key
                : nextRollKey;
        const targetKey =
            rollMode === "set-value"
                ? normalizeStatKey(rollTargetStatKey || rowStat.key)
                : "";
        const now = Date.now();
        const nextStat: PlayerStat = {
            ...rowStat,
            statId:
                rollEditorMode === "edit" && existingRoll
                    ? existingRoll.statId
                    : "",
            key: nextRowKey,
            label,
            kind: "value",
            value: rowStat.value || 0,
            maxValue: 0,
            rollName: label,
            rollKey: nextRollKey,
            rollConfigId: configId,
            rollModifierStatKey: compiled.modifierStatKey,
            rollDiceStatKey: compiled.diceStatKey,
            rollDiceOperation: compiled.diceOperation,
            rollMode,
            rollTargetStatKey: targetKey,
            rollOwnerId: playerId,
            rollBaseDiceCount: compiled.diceCount,
            rollResultMode,
            rollFormula: compiled.formula,
            rollVisibility,
            createdAt: rowStat.createdAt || now,
            updatedAt: now,
        };
        let savedStat = nextStat;
        try {
            if (!host.savePlayerStatRolls) {
                setRollCreateError("Roll saving is unavailable in this editor host.");
                return;
            }
            const savedStats = await host.savePlayerStatRolls(roomId, statsOwnerId, [
                nextStat,
            ]);
            if (savedStats.length === 0) {
                setRollCreateError(
                    "Roll was not saved. Choose an existing stat in the formula.",
                );
                return;
            }
            savedStat = savedStats[0] || nextStat;
        } catch (error) {
            setRollCreateError(
                error instanceof Error ? error.message : "Roll was not saved.",
            );
            return;
        }
        setRequestStats((current) =>
            mergeStatIntoList(current || sourceLinkedStats, savedStat),
        );
        setRequestRolls((current) =>
            current ? mergeStatIntoList(current, savedStat) : current,
        );
        setKnownRollList((prev) => mergeStatIntoList(prev, savedStat));
        host.broadcastPlayerStats?.({
            playerId,
            type: "save_rolls",
            targetUserId: statsOwnerId,
            stats: [savedStat],
        });
        try {
            await onRefreshLinkedStats?.();
        } catch (error) {
            console.warn("[NoteEditor] Failed to refresh linked stats", error);
        }
        setDraft((prev) =>
            draftWithRollStat(prev, savedStat, {
                display: "roll",
                rollShowFormula: prev.rollShowFormula !== false,
            }),
        );
        if (rollEditorMode === "create") {
            onApply(
                draftWithRollStat(draft, savedStat, {
                    display: "roll",
                    rollShowFormula: draft.rollShowFormula !== false,
                }),
            );
        }
        setCreateRollOpen(false);
        if (rollEditorMode === "create") onClose();
    };

    useEffect(() => {
        if (!target || initialTab !== "rolls") return;
        setPickerTab("rolls");
        const initialKey = normalizeStatKey(initialEditRollKey);
        if (!initialKey) return;
        const stat = knownRollStats.find(
            (entry) =>
                normalizeStatKey(entry.rollKey || entry.key) === initialKey,
        );
        if (!stat) return;
        setDraft((prev) =>
            draftWithRollStat(prev, stat, {
                display: "roll",
                rollShowFormula: prev.rollShowFormula !== false,
            }),
        );
        openEditRollEditor(stat);
        onInitialEditRollHandled?.();
    }, [knownRollStats, initialEditRollKey, initialTab, target]);

    return (
        <>
        <GameModal
            open={!!target}
            title="Link Stat"
            onClose={onClose}
            className="max-w-[460px]"
        >
            <div className="kmz-note-theme">
                <div className="space-y-3 text-xs text-gray-200">
                <div className="grid grid-cols-2 gap-1 rounded border border-[#333] bg-[#151515] p-1">
                    {(["stats", "rolls"] as const).map((tab) => (
                        <GameButton
                            key={tab}
                            variant="plain"
                            className={`rounded px-3 py-1.5 text-xs font-semibold ${
                                pickerTab === tab
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-300 hover:bg-white/10"
                            }`}
                            onClick={() => setPickerTab(tab)}
                        >
                            {tab === "stats" ? "Stats" : "Rolls"}
                        </GameButton>
                    ))}
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-gray-500">
                        {statsLoading ? "Refreshing..." : "Loaded on open"}
                    </span>
                    <GameButton
                        variant="plain"
                        className="rounded border border-[#555] bg-transparent px-2 py-1 text-[11px] text-gray-300 hover:bg-[#333] disabled:opacity-50"
                        disabled={
                            statsLoading ||
                            (pickerTab === "stats" && !onRefreshLinkedStats)
                        }
                        onClick={() =>
                            void (pickerTab === "rolls"
                                ? refreshRoomRolls(rollFilter)
                                : refreshLinkedStats()
                            ).catch(() => undefined)
                        }
                    >
                        Refresh
                    </GameButton>
                </div>

                {pickerTab === "stats" && stats.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-gray-300">
                                Existing Stats
                            </span>
                            {canCreateStats && (
                                <GameButton
                                    variant="plain"
                                    className="rounded border border-[#555] bg-[#2b2b2b] px-2 py-1 text-[11px] text-gray-200 hover:bg-[#333]"
                                    onClick={() => {
                                        setMode("create");
                                        setSelectedKey("");
                                        setDraft((prev) =>
                                            mergeRollDraft(
                                                target?.inferred || draft,
                                                prev,
                                            ),
                                        );
                                    }}
                                >
                                    Create New
                                </GameButton>
                            )}
                        </div>
                        <GameInput
                            type="search"
                            value={statSearch}
                            onChange={(event) => setStatSearch(event.target.value)}
                            placeholder="Search stats..."
                            className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none placeholder:text-gray-500"
                        />
                        <div className="max-h-36 overflow-y-auto rounded border border-[#3b3b3b]">
                            {searchedStats.length === 0 ? (
                                <div className="px-3 py-4 text-center text-gray-400">
                                    No stats match your search.
                                </div>
                            ) : searchedStats.map((stat) => {
                                const selected =
                                    mode === "existing" &&
                                    selectedKey === stat.key;
                                return (
                                    <GameButton
                                        key={stat.key}
                                        variant="plain"
                                        className={`flex w-full items-center justify-between gap-3 border-b border-[#333] px-3 py-2 text-left last:border-b-0 ${
                                            selected
                                                ? "bg-blue-600/30 text-white"
                                                : "bg-[#1b1b1b] text-gray-200 hover:bg-[#292929]"
                                        }`}
                                        onClick={() => {
                                            if (!target) return;
                                            setMode("existing");
                                            setSelectedKey(stat.key);
                                            setDraft((prev) =>
                                                mergeRollDraft(
                                                    draftFromPlayerStat(
                                                        stat,
                                                        target.inferred,
                                                    ),
                                                    prev,
                                                ),
                                            );
                                        }}
                                    >
                                        <span className="min-w-0">
                                            <span className="block truncate font-semibold">
                                                {stat.label}
                                            </span>
                                            <span className="block truncate text-[10px] text-gray-400">
                                                {stat.key}
                                            </span>
                                        </span>
                                        <span className="shrink-0 text-[11px] text-gray-300">
                                            {stat.kind === "bar"
                                                ? `${stat.value}/${Math.max(1, stat.maxValue || 1)}`
                                                : stat.value}
                                        </span>
                                    </GameButton>
                                );
                            })}
                        </div>
                    </div>
                )}

                {pickerTab === "stats" &&
                    !canCreateStats &&
                    stats.length === 0 && (
                    <div className="rounded border border-[#3b3b3b] bg-[#171717] px-3 py-4 text-center text-gray-400">
                        No stats are available to link. Ask the room master to
                        add a stats template first.
                    </div>
                )}

                {pickerTab === "stats" &&
                    canCreateStats &&
                    (mode === "create" || stats.length === 0) && (
                    <div className="grid grid-cols-2 gap-2">
                        <label className="space-y-1">
                            <span className="text-[11px] text-gray-400">
                                Label
                            </span>
                            <GameInput
                                value={draft.label}
                                onChange={(event) =>
                                    updateDraft({
                                        label: sanitizeStatLabel(
                                            event.target.value,
                                        ),
                                        key: canonicalStatKey(
                                            normalizeStatKey(
                                                event.target.value,
                                            ),
                                        ),
                                    })
                                }
                                className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none"
                            />
                        </label>
                        <label className="space-y-1">
                            <span className="text-[11px] text-gray-400">
                                Key
                            </span>
                            <GameInput
                                value={draft.key}
                                onChange={(event) =>
                                    updateDraft({
                                        key: canonicalStatKey(
                                            normalizeStatKey(
                                                event.target.value,
                                            ),
                                        ),
                                    })
                                }
                                className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none"
                            />
                        </label>
                        <div className="space-y-1">
                            <span className="text-[11px] text-gray-400">
                                Type
                            </span>
                            <GameSelect
                                options={statKindOptions}
                                value={draftKindSelectValue}
                                open={openRollSelect === "draft-kind"}
                                onOpenChange={(open) =>
                                    setRollSelectOpen("draft-kind", open)
                                }
                                onChange={(value) =>
                                    updateDraft({
                                        kind:
                                            value === "bar" || value === "reverse"
                                                ? "bar"
                                                : "value",
                                        field:
                                            value === "bar" || value === "reverse"
                                                ? "value"
                                                : "value",
                                        isReversed: value === "reverse",
                                    })
                                }
                                ariaLabel="Stat type"
                                title={selectedOptionLabel(
                                    statKindOptions,
                                    draftKindSelectValue,
                                    "Value",
                                )}
                                className="w-full"
                                triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                                menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                trigger={
                                    <SelectTrigger
                                        label={selectedOptionLabel(
                                            statKindOptions,
                                            draftKindSelectValue,
                                            "Value",
                                        )}
                                    />
                                }
                                onFocusChange={selectFocusChange}
                            />
                        </div>
                        <label className="space-y-1">
                            <span className="text-[11px] text-gray-400">
                                Value
                            </span>
                            <GameInput
                                type="number"
                                value={draft.value}
                                onChange={(event) =>
                                    updateDraft({
                                        value: Number(event.target.value) || 0,
                                    })
                                }
                                className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none"
                            />
                        </label>
                        {draft.kind === "bar" && (
                            <label className="space-y-1">
                                <span className="text-[11px] text-gray-400">
                                    Max
                                </span>
                                <GameInput
                                    type="number"
                                    min={1}
                                    value={draft.maxValue}
                                    onChange={(event) =>
                                        updateDraft({
                                            maxValue:
                                                Number(event.target.value) || 1,
                                        })
                                    }
                                    className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none"
                                />
                            </label>
                        )}
                    </div>
                )}

                {pickerTab === "stats" &&
                    draft.kind === "bar" &&
                    (canCreateStats || !!selectedKey) &&
                    target?.valueFrom != null && (
                    <div className="block space-y-1">
                        <span className="text-[11px] text-gray-400">Field</span>
                        <GameSelect
                            options={statFieldOptions}
                            value={draft.field}
                            open={openRollSelect === "draft-field"}
                            onOpenChange={(open) =>
                                setRollSelectOpen("draft-field", open)
                            }
                            onChange={(value) =>
                                updateDraft({
                                    field: value as LinkedStatDraft["field"],
                                })
                            }
                            ariaLabel="Stat field"
                            title={selectedOptionLabel(
                                statFieldOptions,
                                draft.field,
                                "Current",
                            )}
                            className="w-full"
                            triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                            menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                            optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                            trigger={
                                <SelectTrigger
                                    label={selectedOptionLabel(
                                        statFieldOptions,
                                        draft.field,
                                        "Current",
                                    )}
                                />
                            }
                            onFocusChange={selectFocusChange}
                        />
                    </div>
                )}

                {pickerTab === "rolls" && (
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-1 rounded border border-[#333] bg-[#151515] p-1">
                            {(["all", "own"] as const).map((filter) => (
                                <GameButton
                                    key={filter}
                                    variant="plain"
                                    className={`rounded px-3 py-1.5 text-xs font-semibold ${
                                        rollFilter === filter
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-300 hover:bg-white/10"
                                    }`}
                                    onClick={() => setRollFilter(filter)}
                                >
                                    {filter === "all" ? "All" : "Own"}
                                </GameButton>
                            ))}
                        </div>
                        <GameInput
                            type="search"
                            value={rollSearch}
                            onChange={(event) => setRollSearch(event.target.value)}
                            placeholder="Search rolls..."
                            className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none placeholder:text-gray-500"
                        />
                        {selectedRollStat && (
                            <div className="rounded border border-blue-500/40 bg-blue-500/10 px-3 py-2">
                                <div className="font-semibold text-blue-100">
                                    {selectedRollStat.rollName ||
                                        selectedRollStat.label}
                                </div>
                                <div className="mt-0.5 text-[11px] text-blue-100/80">
                                    {selectedRollStat.rollKey ||
                                        selectedRollStat.key}
                                </div>
                            </div>
                        )}
                        <label className="flex items-center gap-2 rounded border border-[#333] bg-[#151515] px-3 py-2">
                            <GameInput
                                type="checkbox"
                                checked={draft.rollShowFormula !== false}
                                onChange={(event) =>
                                    updateDraft({
                                        rollShowFormula: event.target.checked,
                                    })
                                }
                                className="h-4 w-4 accent-blue-500"
                            />
                            <span className="text-[11px] text-gray-300">
                                Show formula in note
                            </span>
                        </label>

                        {searchedRollStats.length === 0 ? (
                            <div className="rounded border border-[#3b3b3b] bg-[#171717] px-3 py-4 text-center text-gray-400">
                                {rollSearch.trim()
                                    ? "No rolls match your search."
                                    : "No roll logic available."}
                            </div>
                        ) : (
                            <div className="max-h-44 overflow-y-auto rounded border border-[#3b3b3b]">
                                {searchedRollStats.map((stat) => {
                                    const rollKey = normalizeStatKey(
                                        stat.rollKey || stat.key,
                                    );
                                    const selected =
                                        selectedRollKey === rollKey;
                                    return (
                                        <GameButton
                                            key={`${stat.key}-${rollKey}`}
                                            variant="plain"
                                            className={`flex w-full items-center justify-between gap-3 border-b border-[#333] px-3 py-2 text-left last:border-b-0 ${
                                                selected
                                                    ? "bg-blue-600/30 text-white"
                                                    : "bg-[#1b1b1b] text-gray-200 hover:bg-[#292929]"
                                            }`}
                                            onClick={() =>
                                                setDraft((prev) =>
                                                    draftWithRollStat(prev, stat, {
                                                        display: "roll",
                                                        rollShowFormula:
                                                            prev.rollShowFormula !==
                                                            false,
                                                    }),
                                                )
                                            }
                                        >
                                            <span className="min-w-0">
                                                <span className="block truncate font-semibold">
                                                    {stat.rollName || stat.label}
                                                </span>
                                                <span className="block truncate text-[10px] text-gray-400">
                                                    {rollKey}
                                                </span>
                                            </span>
                                            {selected && (
                                                <span className="shrink-0 text-[11px] text-blue-100">
                                                    Linked
                                                </span>
                                            )}
                                        </GameButton>
                                    );
                                })}
                            </div>
                        )}

                        <div className="flex justify-between gap-2">
                            <GameButton
                                variant="plain"
                                className="rounded border border-[#555] bg-transparent px-3 py-1.5 text-xs text-gray-300 hover:bg-[#333] disabled:opacity-50"
                                onClick={() =>
                                    setDraft((prev) => clearDraftRoll(prev))
                                }
                                disabled={!draft.rollKey}
                            >
                                Clear Roll
                            </GameButton>
                            <div className="flex gap-2">
                                <GameButton
                                    variant="plain"
                                    className="rounded border border-[#777] bg-transparent px-3 py-1.5 text-xs text-gray-200 hover:bg-[#333] disabled:opacity-50"
                                    onClick={() =>
                                        selectedRollStat &&
                                        openEditRollEditor(selectedRollStat)
                                    }
                                    disabled={!canEditSelectedRoll}
                                >
                                    Edit
                                </GameButton>
                                <GameButton
                                    variant="plain"
                                    className="rounded border border-blue-500/60 bg-transparent px-3 py-1.5 text-xs text-blue-100 hover:bg-blue-500/20"
                                    onClick={openCreateRollEditor}
                                >
                                    Create Roll
                                </GameButton>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-end gap-2 pt-1">
                    <GameButton
                        variant="plain"
                        className="rounded border border-[#555] bg-transparent px-3 py-1.5 text-xs text-gray-300 hover:bg-[#333]"
                        onClick={onClose}
                    >
                        Cancel
                    </GameButton>
                    <GameButton
                        variant="plain"
                        className="rounded border border-blue-500 bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
                        onClick={() =>
                            onApply(
                                normalizeLinkedStatDraft({
                                    ...draft,
                                    display:
                                        pickerTab === "rolls" ? "roll" : "",
                                }),
                            )
                        }
                        disabled={
                            pickerTab === "rolls"
                                ? !draft.rollKey
                                : !draft.key ||
                                  !draft.label ||
                                  (!canCreateStats &&
                                      (mode !== "existing" || !selectedKey))
                        }
                    >
                        Link
                    </GameButton>
                </div>
                </div>
            </div>
        </GameModal>
        <GameModal
            open={createRollOpen}
            title={rollEditorMode === "edit" ? "Edit Roll" : "Create Roll"}
            onClose={() => setCreateRollOpen(false)}
            className="max-w-[420px]"
        >
            <div className="kmz-note-theme">
                <div className="space-y-3 text-xs text-gray-200">
                <label className="block space-y-1">
                    <span className="text-[11px] text-gray-400">Name</span>
                    <GameInput
                        value={rollName}
                        onChange={(event) => setRollName(event.target.value)}
                        className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 text-white outline-none"
                    />
                </label>
                <label className="block space-y-1">
                    <span className="text-[11px] text-gray-400">Key</span>
                    <GameInput
                        value={rollKeyInput}
                        onChange={(event) => {
                            setRollKeyTouched(true);
                            setRollKeyInput(normalizeRollKey(event.target.value));
                        }}
                        placeholder={defaultRollKey(playerName, rollName)}
                        className="w-full rounded border border-[#444] bg-[#111] px-2 py-1 font-mono text-white outline-none"
                    />
                </label>
                <div className="space-y-2 rounded border border-[#333] bg-[#151515] p-2">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-gray-300">
                            Formula
                        </span>
                        <GameButton
                            variant="plain"
                            className="rounded border border-[#555] bg-[#252525] px-2 py-1 text-[11px] text-gray-200 hover:bg-[#303030]"
                            onClick={addRollFormulaTerm}
                        >
                            Add
                        </GameButton>
                    </div>
                    <div className="space-y-2">
                        {rollFormulaTerms.map((term, index) => (
                            <div
                                key={term.id}
                                className={[
                                    "space-y-1 rounded",
                                    draggedRollFormulaTermId === term.id
                                        ? "bg-blue-500/10"
                                        : "",
                                ].join(" ")}
                                onDragOver={(event) => {
                                    if (!draggedRollFormulaTermId) return;
                                    event.preventDefault();
                                }}
                                onDrop={(event) => {
                                    event.preventDefault();
                                    moveRollFormulaTerm(
                                        draggedRollFormulaTermId,
                                        term.id,
                                    );
                                    setDraggedRollFormulaTermId("");
                                }}
                            >
                                <div className="flex items-end gap-1">
                                    <button
                                        type="button"
                                        draggable
                                        onDragStart={(event) => {
                                            setDraggedRollFormulaTermId(term.id);
                                            event.dataTransfer.effectAllowed =
                                                "move";
                                            event.dataTransfer.setData(
                                                "text/plain",
                                                term.id,
                                            );
                                        }}
                                        onDragEnd={() =>
                                            setDraggedRollFormulaTermId("")
                                        }
                                        className="mb-0 flex h-8 w-7 shrink-0 cursor-grab items-center justify-center rounded border border-[#444] bg-[#1b1b1b] text-gray-300 active:cursor-grabbing"
                                        aria-label="Reorder formula row"
                                        title="Drag to reorder"
                                    >
                                        <span
                                            className="grid grid-cols-2 gap-x-[3px] gap-y-[3px]"
                                            aria-hidden="true"
                                        >
                                            {Array.from({ length: 6 }).map(
                                                (_, gripIndex) => (
                                                    <span
                                                        key={gripIndex}
                                                        className="h-1 w-1 rounded-full bg-current"
                                                    />
                                                ),
                                            )}
                                        </span>
                                    </button>
                                    {index > 0 && (
                                        <div className="w-[42px] shrink-0 space-y-1">
                                            <span className="block text-[10px] uppercase text-gray-500">
                                                Op
                                            </span>
                                            <GameSelect
                                                options={formulaOperatorOptions}
                                                value={term.op || "+"}
                                                open={
                                                    openRollSelect ===
                                                    `formula-op-${term.id}`
                                                }
                                                onOpenChange={(open) =>
                                                    setRollSelectOpen(
                                                        `formula-op-${term.id}`,
                                                        open,
                                                    )
                                                }
                                                onChange={(value) =>
                                                    updateRollFormulaTerm(term.id, {
                                                        op: value as RollFormulaOperator,
                                                    })
                                                }
                                                ariaLabel="Formula operator"
                                                title={term.op || "+"}
                                                className="w-full"
                                                triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-1 py-0 text-xs text-gray-200"
                                                menuClassName="top-[calc(100%+4px)] w-[56px] border-[#444] bg-[#111]"
                                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                                trigger={
                                                    <SelectTrigger
                                                        label={term.op || "+"}
                                                    />
                                                }
                                                onFocusChange={selectFocusChange}
                                            />
                                        </div>
                                    )}
                                    <div className="w-[62px] shrink-0 space-y-1">
                                        <span className="block text-[10px] uppercase text-gray-500">
                                            Type
                                        </span>
                                        <GameSelect
                                            options={formulaKindOptions}
                                            value={term.kind}
                                            open={
                                                openRollSelect ===
                                                `formula-kind-${term.id}`
                                            }
                                            onOpenChange={(open) =>
                                                setRollSelectOpen(
                                                    `formula-kind-${term.id}`,
                                                    open,
                                                )
                                            }
                                            onChange={(value) =>
                                                updateRollFormulaTerm(term.id, {
                                                    kind:
                                                        value === "stat"
                                                            ? "stat"
                                                            : value === "fixed"
                                                              ? "fixed"
                                                              : "dice",
                                                })
                                            }
                                            ariaLabel="Formula term type"
                                            title={selectedOptionLabel(
                                                formulaKindOptions,
                                                term.kind,
                                                "Stat",
                                            )}
                                            className="w-full"
                                            triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-1 py-0 text-xs text-gray-200"
                                            menuClassName="top-[calc(100%+4px)] w-[90px] border-[#444] bg-[#111]"
                                            optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                            trigger={
                                                <SelectTrigger
                                                    label={selectedOptionLabel(
                                                        formulaKindOptions,
                                                        term.kind,
                                                        "Stat",
                                                    )}
                                                />
                                            }
                                            onFocusChange={selectFocusChange}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        {term.kind === "stat" ? (
                                            <GameSelect
                                                options={[
                                                    {
                                                        value: "",
                                                        label: "Choose stat...",
                                                    },
                                                    ...ownStatOptions,
                                                ]}
                                                value={term.statKey}
                                                open={
                                                    openRollSelect ===
                                                    `formula-${term.id}`
                                                }
                                                onOpenChange={(open) =>
                                                    setRollSelectOpen(
                                                        `formula-${term.id}`,
                                                        open,
                                                    )
                                                }
                                                onChange={(key) => {
                                                    updateRollFormulaTerm(term.id, {
                                                        statKey: key,
                                                    });
                                                    if (
                                                        rollMode === "set-value" &&
                                                        !rollTargetStatKey
                                                    ) {
                                                        setRollTargetStatKey(key);
                                                    }
                                                }}
                                                searchable
                                                searchPlaceholder="Search stats..."
                                                emptyLabel="No stats found"
                                                ariaLabel="Formula stat"
                                                title="Formula stat"
                                                className="w-full"
                                                triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                                                menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                                trigger={
                                                    <SelectTrigger
                                                        label={selectedOptionLabel(
                                                            ownStatOptions,
                                                            term.statKey,
                                                            "Choose stat...",
                                                        )}
                                                    />
                                                }
                                                onFocusChange={selectFocusChange}
                                            />
                                        ) : term.kind === "fixed" ? (
                                            <GameInput
                                                type="number"
                                                min={-999}
                                                max={999}
                                                value={term.fixedValue}
                                                onChange={(event) =>
                                                    updateRollFormulaTerm(term.id, {
                                                        fixedValue:
                                                            Number(
                                                                event.target.value,
                                                            ) || 0,
                                                    })
                                                }
                                                className="h-8 w-full rounded border border-[#444] bg-[#111] px-2 text-white outline-none"
                                                aria-label="Fixed modifier value"
                                            />
                                        ) : (
                                            <GameSelect
                                                options={diceTypeOptions}
                                                value={term.diceType}
                                                open={
                                                    openRollSelect ===
                                                    `formula-${term.id}`
                                                }
                                                onOpenChange={(open) =>
                                                    setRollSelectOpen(
                                                        `formula-${term.id}`,
                                                        open,
                                                    )
                                                }
                                                onChange={(value) =>
                                                    updateRollFormulaTerm(term.id, {
                                                        diceType:
                                                            value === "d20"
                                                                ? "d20"
                                                                : value === "d10"
                                                                  ? "d10"
                                                                  : "",
                                                    })
                                                }
                                                ariaLabel="Formula dice"
                                                title="Formula dice"
                                                className="w-full"
                                                triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                                                menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                                trigger={
                                                    <SelectTrigger
                                                        label={selectedOptionLabel(
                                                            diceTypeOptions,
                                                            term.diceType,
                                                            "Choose dice...",
                                                        )}
                                                    />
                                                }
                                                onFocusChange={selectFocusChange}
                                            />
                                        )}
                                    </div>
                                    {term.kind === "dice" && (
                                        <label className="w-[58px] shrink-0 space-y-1">
                                            <span className="block text-[10px] uppercase text-gray-500">
                                                Count
                                            </span>
                                            <GameInput
                                                type="number"
                                                min={1}
                                                max={10}
                                                value={term.diceCount}
                                                onChange={(event) =>
                                                    updateRollFormulaTerm(term.id, {
                                                        diceCount:
                                                            Number(
                                                                event.target.value,
                                                            ) || 1,
                                                    })
                                                }
                                                className="h-8 w-full rounded border border-[#444] bg-[#111] px-2 text-white outline-none"
                                            />
                                        </label>
                                    )}
                                    <GameButton
                                        variant="plain"
                                        className="h-8 w-8 shrink-0 rounded border border-[#664444] bg-transparent text-red-100 hover:bg-red-500/15 disabled:opacity-40"
                                        onClick={() =>
                                            removeRollFormulaTerm(term.id)
                                        }
                                        disabled={rollFormulaTerms.length <= 1}
                                        aria-label="Remove formula row"
                                    >
                                        -
                                    </GameButton>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                    <label className="flex items-center gap-1">
                                        <GameInput
                                            type="checkbox"
                                            checked={term.open}
                                            onChange={(event) =>
                                                updateRollFormulaTerm(term.id, {
                                                    open: event.target.checked,
                                                })
                                            }
                                            className="h-3 w-3 accent-blue-500"
                                        />
                                        (
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <GameInput
                                            type="checkbox"
                                            checked={term.close}
                                            onChange={(event) =>
                                                updateRollFormulaTerm(term.id, {
                                                    close: event.target.checked,
                                                })
                                            }
                                            className="h-3 w-3 accent-blue-500"
                                        />
                                        )
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                    {rollFormulaPreview && (
                        <div className="truncate rounded border border-[#333] bg-[#101010] px-2 py-1 text-[11px] text-gray-300">
                            {rollFormulaPreview}
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="block space-y-1">
                        <span className="text-[11px] text-gray-400">Result</span>
                        <GameSelect
                            options={resultModeOptions}
                            value={rollMode}
                            open={openRollSelect === "result"}
                            onOpenChange={(open) =>
                                setRollSelectOpen("result", open)
                            }
                            onChange={(value) => {
                                const nextMode = value === "set-value" ? "set-value" : "";
                                setRollMode(nextMode);
                                if (nextMode && !rollTargetStatKey) {
                                    setRollTargetStatKey(
                                        firstFormulaStatKey || ownStats[0]?.key || "",
                                    );
                                }
                            }}
                            ariaLabel="Roll result"
                            title="Roll result"
                            className="w-full"
                            triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                            menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                            optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                            trigger={
                                <SelectTrigger
                                    label={selectedOptionLabel(
                                        resultModeOptions,
                                        rollMode,
                                        "Show result",
                                    )}
                                />
                            }
                            onFocusChange={selectFocusChange}
                        />
                    </div>
                    <div className="block space-y-1">
                        <span className="text-[11px] text-gray-400">
                            Visibility
                        </span>
                        <GameSelect
                            options={rollVisibilityOptions}
                            value={rollVisibility}
                            open={openRollSelect === "visibility"}
                            onOpenChange={(open) =>
                                setRollSelectOpen("visibility", open)
                            }
                            onChange={(value) =>
                                setRollVisibility(
                                    value === "private" ? "private" : "global",
                                )
                            }
                            ariaLabel="Roll visibility"
                            title="Roll visibility"
                            className="w-full"
                            triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                            menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                            optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                            trigger={
                                <SelectTrigger
                                    label={selectedOptionLabel(
                                        rollVisibilityOptions,
                                        rollVisibility,
                                        "Public",
                                    )}
                                />
                            }
                            onFocusChange={selectFocusChange}
                        />
                    </div>
                    <div className="block space-y-1">
                        <span className="text-[11px] text-gray-400">Mode</span>
                        <GameSelect
                            options={rollResultModeOptions}
                            value={rollResultMode}
                            open={openRollSelect === "resultMode"}
                            onOpenChange={(open) =>
                                setRollSelectOpen("resultMode", open)
                            }
                            onChange={(value) =>
                                setRollResultMode(
                                    value === "sum" ||
                                        value === "max" ||
                                        value === "min"
                                        ? value
                                        : "",
                                )
                            }
                            ariaLabel="Roll result mode"
                            title="Roll result mode"
                            className="w-full"
                            triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                            menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                            optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                            trigger={
                                <SelectTrigger
                                    label={selectedOptionLabel(
                                        rollResultModeOptions,
                                        rollResultMode,
                                        "Sum",
                                    )}
                                />
                            }
                            onFocusChange={selectFocusChange}
                        />
                    </div>
                    {rollMode === "set-value" && (
                        <label className="block space-y-1 sm:col-span-3">
                            <span className="text-[11px] text-gray-400">Target</span>
                            <GameSelect
                                options={ownStatOptions}
                                value={rollTargetStatKey}
                                open={openRollSelect === "target"}
                                onOpenChange={(open) =>
                                    setRollSelectOpen("target", open)
                                }
                                onChange={setRollTargetStatKey}
                                searchable
                                searchPlaceholder="Search target..."
                                emptyLabel="No stats found"
                                ariaLabel="Roll target"
                                title="Roll target"
                                className="w-full"
                                triggerClassName="h-8 w-full justify-between rounded border-[#444] bg-[#111] px-2 py-0 text-xs text-gray-200"
                                menuClassName="top-[calc(100%+4px)] w-full border-[#444] bg-[#111]"
                                optionClassName="h-auto min-h-8 px-2 py-2 text-xs"
                                trigger={
                                    <SelectTrigger
                                        label={selectedOptionLabel(
                                            ownStatOptions,
                                            rollTargetStatKey,
                                            "Choose target...",
                                        )}
                                    />
                                }
                                onFocusChange={selectFocusChange}
                            />
                        </label>
                    )}
                </div>
                <label className="flex items-center gap-2 rounded border border-[#333] bg-[#151515] px-3 py-2">
                    <GameInput
                        type="checkbox"
                        checked={draft.rollShowFormula !== false}
                        onChange={(event) =>
                            updateDraft({ rollShowFormula: event.target.checked })
                        }
                        className="h-4 w-4 accent-blue-500"
                    />
                    <span className="text-[11px] text-gray-300">
                        Show formula in note
                    </span>
                </label>
                {rollCreateError && (
                    <div className="rounded border border-red-500/50 bg-red-500/10 px-3 py-2 text-red-100">
                        {rollCreateError}
                    </div>
                )}
                <div className="flex justify-end gap-2 pt-1">
                    <GameButton
                        variant="plain"
                        className="rounded border border-[#555] bg-transparent px-3 py-1.5 text-xs text-gray-300 hover:bg-[#333]"
                        onClick={() => setCreateRollOpen(false)}
                    >
                        Cancel
                    </GameButton>
                    <GameButton
                        variant="plain"
                        className="rounded border border-blue-500 bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500"
                        onClick={saveRollEditor}
                    >
                        {rollEditorMode === "edit" ? "Save" : "Save & Link"}
                    </GameButton>
                </div>
                </div>
            </div>
        </GameModal>
        </>
    );
}

function dedupeLinkedStats(stats: PlayerStat[]): PlayerStat[] {
    const seen = new Set<string>();
    return stats.filter((stat) => {
        if (!stat.key || seen.has(stat.key)) return false;
        seen.add(stat.key);
        return true;
    });
}

function isRollLogicStat(stat: PlayerStat): boolean {
    if (!stat.rollConfigId) return false;
    const statKey = normalizeStatKey(stat.key);
    const rollKey = normalizeStatKey(stat.rollKey || stat.key);
    return !!statKey && statKey === rollKey;
}

function mergeStatIntoList(stats: PlayerStat[], nextStat: PlayerStat): PlayerStat[] {
    let found = false;
    const next = stats.map((stat) => {
        if (normalizeStatKey(stat.key) !== normalizeStatKey(nextStat.key)) {
            return stat;
        }
        found = true;
        return { ...stat, ...nextStat };
    });
    return found ? next : [...next, nextStat];
}

function quoteBareImportKeys(input: string): string {
    return input.replace(
        /([{,]\s*)([A-Za-z_$][\w$.-]*)(\s*:)/g,
        '$1"$2"$3',
    );
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === "object" && !Array.isArray(value);
}

function parseStatsImportInput(input: string): Record<string, unknown> {
    const trimmed = input.trim();
    if (!trimmed) {
        throw new Error("Paste stats JSON first.");
    }

    let parsed: unknown;
    try {
        parsed = JSON.parse(trimmed);
    } catch {
        try {
            parsed = JSON.parse(quoteBareImportKeys(trimmed));
        } catch {
            throw new Error("Use a JSON object like {hp:11}.");
        }
    }

    if (!isPlainRecord(parsed)) {
        throw new Error("Use a JSON object like {hp:11}.");
    }
    return parsed;
}

function importedInteger(value: unknown): number | null {
    if (typeof value === "boolean") return value ? 1 : 0;
    if (typeof value === "number" && Number.isFinite(value)) {
        return Math.trunc(value);
    }
    if (typeof value === "string" && value.trim()) {
        const numeric = Number(value);
        if (Number.isFinite(numeric)) return Math.trunc(numeric);
    }
    return null;
}

type StatsImportField = "value" | "maxValue";
type StatsImportPatch = Partial<Record<StatsImportField, number>>;

function parseStatsImportKey(
    sourceKey: string,
): { key: string; field: StatsImportField } | null {
    const normalized = normalizeStatKey(sourceKey);
    if (!normalized) return null;

    const maxSuffixes = [".max", ".max-value", ".maxvalue", ".maximum"];
    for (const suffix of maxSuffixes) {
        if (!normalized.endsWith(suffix)) continue;
        const key = canonicalStatKey(normalized.slice(0, -suffix.length));
        return key ? { key, field: "maxValue" } : null;
    }

    const key = canonicalStatKey(normalized);
    return key ? { key, field: "value" } : null;
}

function applyImportedStatPatch(
    stat: PlayerStat,
    patch: StatsImportPatch,
    now: number,
): PlayerStat {
    const nextMaxValue =
        stat.kind === "bar"
            ? Math.max(
                  1,
                  Math.trunc(Number(patch.maxValue ?? stat.maxValue) || 1),
              )
            : 0;
    const rawValue =
        typeof patch.value === "number"
            ? patch.value
            : Math.trunc(stat.value || 0);
    const nextValue =
        stat.kind === "bar"
            ? Math.max(0, Math.min(nextMaxValue, Math.trunc(rawValue)))
            : Math.trunc(rawValue);

    return {
        ...stat,
        value: nextValue,
        maxValue: nextMaxValue,
        updatedAt: now,
    };
}

function rollTimestamp(stat: PlayerStat): number {
    return Math.trunc(Number(stat.updatedAt || stat.createdAt) || 0);
}

function linkedStatSnapshotValue(
    stats: PlayerStat[],
    key: string,
    field: LinkedStatField = "value",
): number | undefined {
    const normalizedKey = normalizeStatKey(key);
    if (!normalizedKey) return undefined;
    const stat = stats.find(
        (entry) => normalizeStatKey(entry.key) === normalizedKey,
    );
    if (!stat) return undefined;
    if (field === "maxValue") return Math.trunc(Number(stat.maxValue) || 0);
    return Math.trunc(Number(stat.value) || 0);
}

function linkedStatSnapshotStat(
    stats: PlayerStat[],
    key: string,
): PlayerStat | undefined {
    const normalizedKey = normalizeStatKey(key);
    if (!normalizedKey) return undefined;
    return stats.find(
        (entry) => normalizeStatKey(entry.key) === normalizedKey,
    );
}

function linkedStatSnapshotRoll(
    stats: PlayerStat[],
    rollKey: string,
): PlayerStat | undefined {
    const normalizedKey = normalizeStatKey(rollKey);
    if (!normalizedKey) return undefined;
    return stats.find(
        (entry) =>
            normalizeStatKey(entry.rollKey) === normalizedKey ||
            normalizeStatKey(entry.key) === normalizedKey,
    );
}

export default function NoteEditor({
    content,
    editable,
    noteId,
    tabIndex = 0,
    linkedStats = [],
    roomId = "",
    playerId = "",
    playerName = "",
    linkedStatsOwnerId,
    canManagePlayerStats = false,
    onRefreshLinkedStats,
    onChange,
    onFocus,
    onBlur,
}: NoteEditorProps) {
    const host = useNoteEditorHost();
    const {
        Button: GameButton,
        Textarea: GameTextarea,
        Modal: GameModal,
    } = host.components;
    const rootRef = useRef<HTMLDivElement>(null);
    const editorFocusedRef = useRef(false);
    const isLocalChange = useRef(false);
    const lastExternalContent = useRef(content);
    const pendingExternalContent = useRef<string | null>(null);
    const mountedRef = useRef(true);
    const linkedStatsRef = useRef<PlayerStat[]>(linkedStats);
    const presenceSendTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );
    const publishedPresenceRef = useRef(false);
    const lastSentPresenceRef = useRef<{
        anchor: number;
        head: number;
    } | null>(null);
    const [statLinkTarget, setStatLinkTarget] =
        useState<LinkedStatTarget | null>(null);
    const [statLinkInitialTab, setStatLinkInitialTab] =
        useState<"stats" | "rolls">("stats");
    const [statLinkInitialEditRollKey, setStatLinkInitialEditRollKey] =
        useState("");
    const [statsImportOpen, setStatsImportOpen] = useState(false);
    const [statsImportText, setStatsImportText] = useState("");
    const [statsImportError, setStatsImportError] = useState("");
    const [statsImportNotice, setStatsImportNotice] = useState("");
    const [statsImportSaving, setStatsImportSaving] = useState(false);
    const statsOwnerId = isUnassignedStatsOwnerId(linkedStatsOwnerId)
        ? ""
        : String(linkedStatsOwnerId || playerId || "").trim();
    const canImportStats = canManagePlayerStats && !!statsOwnerId;

    linkedStatsRef.current = linkedStats;

    const linkedStatExtension = useMemo(
        () =>
            LinkedStat.configure({
                getExternalValue: (key, field) =>
                    linkedStatSnapshotValue(
                        linkedStatsRef.current,
                        key,
                        field,
                    ),
                getExternalStat: (key) =>
                    linkedStatSnapshotStat(linkedStatsRef.current, key),
                getExternalRoll: (rollKey) =>
                    linkedStatSnapshotRoll(linkedStatsRef.current, rollKey),
                canEditRoll: (key) => {
                    const stat = linkedStatSnapshotRoll(
                        linkedStatsRef.current,
                        key,
                    );
                    if (!stat?.rollConfigId) return false;
                    return canManagePlayerStats || stat.rollOwnerId === playerId;
                },
                events: host.linkedStatEvents || host.events,
            }),
        [canManagePlayerStats, host.events, host.linkedStatEvents, playerId],
    );

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    // Browsers do not reliably dispatch blur when a focused contenteditable
    // node is removed (for example, when a popped-out note is closed).
    useEffect(
        () => () => {
            if (editorFocusedRef.current) host.releaseInputFocus?.();
        },
        [host.releaseInputFocus],
    );

    const onChangeRef = useRef(onChange);
    onChangeRef.current = onChange;
    const serializeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );
    const pendingSerializeEditorRef = useRef<Editor | null>(null);

    /**
     * Runs the deferred HTML→Markdown serialization for the last local edit
     * and hands the markdown to the parent. Serializing the whole document
     * with turndown is too expensive to run per keystroke, so onUpdate only
     * schedules this and we flush on idle, blur, and unmount.
     */
    const flushPendingSerialization = useCallback(() => {
        if (serializeTimerRef.current) {
            clearTimeout(serializeTimerRef.current);
            serializeTimerRef.current = null;
        }
        const pendingEditor = pendingSerializeEditorRef.current;
        pendingSerializeEditorRef.current = null;
        if (!pendingEditor) return;
        try {
            const md = htmlToMarkdown(pendingEditor.getHTML());
            onChangeRef.current(md);
        } catch {
            // Editor was torn down mid-flush; the last flushed content stands.
        }
    }, []);

    useEffect(() => flushPendingSerialization, [flushPendingSerialization]);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            NoteTable.configure({ resizable: false }),
            Image.configure({
                inline: false,
                allowBase64: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Iframe,
            Checkbox,
            StatMarker,
            NotePresence,
            linkedStatExtension,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            Link.configure({ openOnClick: false }),
        ],
        content: markdownToHtml(content),
        editable,
        parseOptions: { preserveWhitespace: "full" },
        editorProps: {
            attributes: {
                // Browser autocomplete/autocorrect fights the collaboration
                // layer: OS text substitution rewrites words mid-composition
                // around remote-cursor widgets and misplaces edits.
                autocomplete: "off",
                autocorrect: "off",
                autocapitalize: "none",
                spellcheck: "false",
            },
        },
        onFocus: () => {
            editorFocusedRef.current = true;
            onFocus?.();
        },
        onBlur: () => {
            editorFocusedRef.current = false;
            flushPendingSerialization();
            onBlur?.();
        },
        onUpdate: ({ editor }) => {
            if (!mountedRef.current) return;
            isLocalChange.current = true;
            pendingSerializeEditorRef.current = editor;
            if (serializeTimerRef.current) {
                clearTimeout(serializeTimerRef.current);
            }
            serializeTimerRef.current = setTimeout(
                flushPendingSerialization,
                NOTE_CHANGE_DEBOUNCE_MS,
            );
        },
    });

    const syncEditorLinkedStatStorage = useCallback(
        (stats: PlayerStat[]) => {
            if (!editor) return;
            const storage = editor.storage as unknown as Record<string, unknown>;
            const registry = (storage.linkedStatValues || {}) as Record<
                string,
                Partial<Record<LinkedStatField, number>>
            >;
            for (const stat of stats) {
                if (isRollLogicStat(stat)) continue;
                const key = normalizeStatKey(stat.key);
                if (!key) continue;
                registry[key] = {
                    ...(registry[key] || {}),
                    value: Math.trunc(Number(stat.value) || 0),
                    maxValue: Math.trunc(Number(stat.maxValue) || 0),
                };
            }
            storage.linkedStatValues = registry;
        },
        [editor],
    );

    const emitLinkedStatChange = useCallback(() => {
        editor?.view.dom.dispatchEvent(
            new CustomEvent("linked-stat-change", { bubbles: true }),
        );
        rootRef.current?.dispatchEvent(
            new CustomEvent("linked-stat-change", { bubbles: true }),
        );
    }, [editor]);

    const lastLinkedStatSyncRef = useRef<{
        editor: Editor | null;
        signature: string;
    }>({ editor: null, signature: "" });

    useEffect(() => {
        // Parents recompute the stats array every render; only the linked values
        // matter to node views, so skip the storage sync + DOM CustomEvents
        // when nothing relevant changed for this editor instance.
        const signature = linkedStats
            .map(
                (stat) =>
                    `${normalizeStatKey(stat.key)}:${stat.value}:${stat.maxValue}`,
            )
            .join("|");
        const last = lastLinkedStatSyncRef.current;
        if (last.editor === editor && last.signature === signature) return;
        lastLinkedStatSyncRef.current = { editor, signature };
        syncEditorLinkedStatStorage(linkedStats);
        emitLinkedStatChange();
    }, [editor, emitLinkedStatChange, linkedStats, syncEditorLinkedStatStorage]);

    const openStatLinkModal = useCallback((activeEditor: Editor) => {
        setStatLinkInitialTab("stats");
        setStatLinkInitialEditRollKey("");
        setStatLinkTarget(getLinkedStatTarget(activeEditor));
        activeEditor.commands.blur();
    }, []);

    const openStatsImportModal = useCallback(() => {
        setStatsImportError("");
        setStatsImportNotice("");
        setStatsImportOpen(true);
        editor?.commands.blur();
    }, [editor]);

    const closeStatsImportModal = useCallback(() => {
        if (statsImportSaving) return;
        setStatsImportOpen(false);
        setStatsImportError("");
        setStatsImportNotice("");
    }, [statsImportSaving]);

    const applyStatsImport = useCallback(async () => {
        if (!canImportStats) {
            setStatsImportError("Stats are not editable.");
            return;
        }

        let imported: Record<string, unknown>;
        try {
            imported = parseStatsImportInput(statsImportText);
        } catch (error) {
            setStatsImportNotice("");
            setStatsImportError(
                error instanceof Error ? error.message : "Stats were not imported.",
            );
            return;
        }

        setStatsImportSaving(true);
        setStatsImportError("");
        setStatsImportNotice("");
        try {
            let sourceStats = linkedStatsRef.current;
            try {
                const freshStats = await onRefreshLinkedStats?.();
                if (freshStats?.length) sourceStats = freshStats;
            } catch (error) {
                console.warn("[NoteEditor] Failed to refresh stats before import", error);
            }

            const invalidKeys: string[] = [];
            const patchesByKey = new Map<string, StatsImportPatch>();
            const requestedFields = new Set<string>();
            for (const [sourceKey, rawValue] of Object.entries(imported)) {
                const parsedKey = parseStatsImportKey(sourceKey);
                const value = parsedKey ? importedInteger(rawValue) : null;
                if (!parsedKey || value == null) {
                    invalidKeys.push(sourceKey);
                    continue;
                }
                patchesByKey.set(parsedKey.key, {
                    ...(patchesByKey.get(parsedKey.key) || {}),
                    [parsedKey.field]: value,
                });
                requestedFields.add(`${parsedKey.key}:${parsedKey.field}`);
            }

            if (patchesByKey.size === 0) {
                setStatsImportError("No numeric stat values found.");
                return;
            }

            const matchedFields = new Set<string>();
            const updatedStats: PlayerStat[] = [];
            const now = Date.now();
            const nextStats = sourceStats.map((stat) => {
                if (isRollLogicStat(stat)) return stat;
                const normalizedKey = canonicalStatKey(normalizeStatKey(stat.key));
                const importPatch = patchesByKey.get(normalizedKey);
                if (!importPatch) return stat;
                if (importPatch.value != null) {
                    matchedFields.add(`${normalizedKey}:value`);
                }
                if (stat.kind === "bar" && importPatch.maxValue != null) {
                    matchedFields.add(`${normalizedKey}:maxValue`);
                }

                const nextStat = applyImportedStatPatch(
                    stat,
                    importPatch,
                    now,
                );
                if (
                    nextStat.value !== stat.value ||
                    nextStat.maxValue !== stat.maxValue
                ) {
                    updatedStats.push(nextStat);
                    return nextStat;
                }
                return stat;
            });

            if (matchedFields.size === 0) {
                setStatsImportError("No matching stats found.");
                return;
            }
            if (updatedStats.length === 0) {
                setStatsImportNotice("Stats already match import.");
                return;
            }
            const sent = host.broadcastPlayerStats?.({
                playerId,
                type: "save",
                targetUserId: statsOwnerId,
                stats: updatedStats,
            });
            if (!sent) {
                setStatsImportError("Stats sync is unavailable. Stats were not imported.");
                return;
            }

            linkedStatsRef.current = nextStats;
            syncEditorLinkedStatStorage(nextStats);
            emitLinkedStatChange();
            host.events?.emit("player-stats-sync", {
                targetUserId: statsOwnerId,
                stats: nextStats,
            });

            const missingCount = [...requestedFields].filter(
                (key) => !matchedFields.has(key),
            ).length;
            const skippedCount = invalidKeys.length + missingCount;
            const suffix = skippedCount > 0 ? ` (${skippedCount} skipped)` : "";
            setStatsImportNotice(
                `Updated ${updatedStats.length} stat${
                    updatedStats.length === 1 ? "" : "s"
                }${suffix}.`,
            );
        } finally {
            setStatsImportSaving(false);
        }
    }, [
        canImportStats,
        emitLinkedStatChange,
        host.broadcastPlayerStats,
        host.events,
        onRefreshLinkedStats,
        playerId,
        statsImportText,
        statsOwnerId,
        syncEditorLinkedStatStorage,
    ]);

    const applyStatLink = useCallback(
        (draft: LinkedStatDraft) => {
            if (!editor || !statLinkTarget) return;
            applyLinkedStatDraft(editor, statLinkTarget, draft);
            setStatLinkTarget(null);
        },
        [editor, statLinkTarget],
    );

    // Sync editable prop
    useEffect(() => {
        if (editor) editor.setEditable(editable);
    }, [editor, editable]);

    /** Publishes this editor's current caret or selected range to note viewers. */
    const sendLocalPresence = useCallback(
        (active: boolean, force = false) => {
            if (!editor || !noteId || !playerId) return false;
            // A destroyed editor has no selection but must still be able to
            // publish the final active:false so peers drop this cursor.
            if (active && editor.isDestroyed) return false;

            const selection = editor.isDestroyed
                ? null
                : editor.state.selection;
            const anchor = selection?.anchor ?? 0;
            const head = selection?.head ?? 0;
            const previous = lastSentPresenceRef.current;
            if (
                active &&
                !force &&
                previous?.anchor === anchor &&
                previous.head === head
            ) {
                return true;
            }

            const sent = host.publishPresence?.({
                playerId,
                playerName,
                noteId,
                roomId,
                anchor,
                head,
                tabIndex,
                active,
            }) === true;
            if (sent) {
                publishedPresenceRef.current = active;
                lastSentPresenceRef.current = active
                    ? { anchor, head }
                    : null;
            } else if (!active) {
                publishedPresenceRef.current = false;
                lastSentPresenceRef.current = null;
            }
            return sent;
        },
        [
            editor,
            host.publishPresence,
            noteId,
            playerId,
            playerName,
            roomId,
            tabIndex,
        ],
    );

    // Latest sender in a ref so the presence effect below doesn't tear down
    // its listeners/intervals when only the payload inputs (playerName,
    // roomId, editable) change identity.
    const sendLocalPresenceRef = useRef(sendLocalPresence);
    sendLocalPresenceRef.current = sendLocalPresence;

    useEffect(() => {
        if (!editor) return;

        const sendPresence = (active: boolean, force = false) =>
            sendLocalPresenceRef.current(active, force);

        // Read-only editors never receive DOM focus (contenteditable=false),
        // so track pointer engagement to know when a viewer is actively
        // placing a selection worth broadcasting.
        let pointerEngaged = false;

        /** Coalesces rapid drag-selection changes into a small realtime payload. */
        const schedulePresence = () => {
            if (
                !editor.isFocused &&
                !pointerEngaged &&
                !publishedPresenceRef.current
            ) {
                return;
            }
            if (presenceSendTimerRef.current) {
                clearTimeout(presenceSendTimerRef.current);
            }
            presenceSendTimerRef.current = setTimeout(() => {
                presenceSendTimerRef.current = null;
                sendPresence(true);
            }, NOTE_PRESENCE_THROTTLE_MS);
        };

        /** Starts presence as soon as the local user places a caret. */
        const handleFocus = () => {
            sendPresence(true, true);
        };

        /** Removes the local cursor when this editor no longer owns focus. */
        const handleBlur = () => {
            if (presenceSendTimerRef.current) {
                clearTimeout(presenceSendTimerRef.current);
                presenceSendTimerRef.current = null;
            }
            if (publishedPresenceRef.current) {
                sendPresence(false, true);
            }
        };

        /** Marks viewer engagement when the pointer goes down in the doc. */
        const handleViewPointerDown = () => {
            pointerEngaged = true;
        };

        /** Ends read-only presence when the user clicks outside this editor. */
        const handleDocumentPointerDown = (event: PointerEvent) => {
            const root = rootRef.current;
            if (root && root.contains(event.target as Node)) return;
            pointerEngaged = false;
            if (presenceSendTimerRef.current) {
                clearTimeout(presenceSendTimerRef.current);
                presenceSendTimerRef.current = null;
            }
            // Editable editors clean up via blur; this covers read-only
            // viewers whose editor never held focus.
            if (publishedPresenceRef.current && !editor.isFocused) {
                sendPresence(false, true);
            }
        };

        /** Restores an active cursor after the room socket reconnects. */
        const handleConnect = () => {
            if (editor.isFocused || publishedPresenceRef.current) {
                sendPresence(true, true);
            }
        };

        /** Applies remote cursor events without changing editor content. */
        const handleRealtimeEvent = (event: NoteRealtimeEvent) => {
            if (editor.isDestroyed) return;
            if (event.type === "leave") {
                if (event.playerId === playerId) return;
                editor.view.dispatch(
                    editor.state.tr.setMeta(notePresencePluginKey, {
                        type: "remove",
                        playerId: event.playerId,
                    }),
                );
                return;
            }

            if (
                event.noteId !== noteId ||
                event.tabIndex !== tabIndex ||
                event.playerId === playerId
            ) {
                return;
            }
            let meta:
                | { type: "upsert"; presence: NoteRemotePresence }
                | { type: "remove"; playerId: string };
            if (event.active) {
                const presence = {
                    playerId: event.playerId,
                    playerName: event.playerName || "Collaborator",
                    anchor: event.anchor,
                    head: event.head,
                    color: notePresenceColor(event.playerId),
                    updatedAt: Date.now(),
                } satisfies NoteRemotePresence;
                meta = { type: "upsert", presence };
            } else {
                meta = { type: "remove", playerId: event.playerId };
            }
            editor.view.dispatch(
                editor.state.tr.setMeta(notePresencePluginKey, meta),
            );
        };

        editor.on("focus", handleFocus);
        editor.on("blur", handleBlur);
        editor.on("selectionUpdate", schedulePresence);
        editor.view.dom.addEventListener(
            "pointerdown",
            handleViewPointerDown,
        );
        document.addEventListener(
            "pointerdown",
            handleDocumentPointerDown,
            true,
        );
        const unsubscribeRealtime = host.subscribeNoteRealtime?.(handleRealtimeEvent);
        const unsubscribeConnection = host.subscribeConnection?.(handleConnect);

        // Re-announce immediately so this cursor reappears on peers right
        // after a remount/tab switch instead of waiting for the heartbeat.
        if (editor.isFocused || publishedPresenceRef.current) {
            sendPresence(true, true);
        }

        const heartbeat = setInterval(() => {
            if (publishedPresenceRef.current) {
                sendPresence(true, true);
            }
        }, NOTE_PRESENCE_HEARTBEAT_MS);

        const staleCleanup = setInterval(() => {
            const presenceState = notePresencePluginKey.getState(editor.state);
            if (!presenceState) return;
            const staleBefore = Date.now() - NOTE_PRESENCE_STALE_MS;
            const stalePlayerIds: string[] = [];
            for (const presence of presenceState.values()) {
                if (presence.updatedAt < staleBefore) {
                    stalePlayerIds.push(presence.playerId);
                }
            }
            if (stalePlayerIds.length > 0) {
                editor.view.dispatch(
                    editor.state.tr.setMeta(notePresencePluginKey, {
                        type: "removeMany",
                        playerIds: stalePlayerIds,
                    }),
                );
            }
        }, NOTE_PRESENCE_HEARTBEAT_MS);

        return () => {
            editor.off("focus", handleFocus);
            editor.off("blur", handleBlur);
            editor.off("selectionUpdate", schedulePresence);
            editor.view.dom.removeEventListener(
                "pointerdown",
                handleViewPointerDown,
            );
            document.removeEventListener(
                "pointerdown",
                handleDocumentPointerDown,
                true,
            );
            unsubscribeRealtime?.();
            unsubscribeConnection?.();
            clearInterval(heartbeat);
            clearInterval(staleCleanup);
            if (presenceSendTimerRef.current) {
                clearTimeout(presenceSendTimerRef.current);
                presenceSendTimerRef.current = null;
            }
            if (publishedPresenceRef.current) {
                sendPresence(false, true);
            }
        };
    }, [
        editor,
        host.subscribeConnection,
        host.subscribeNoteRealtime,
        noteId,
        playerId,
        tabIndex,
    ]);

    useEffect(() => {
        if (!editor) return;
        const onEditRoll = (payload: { key?: string; rollKey?: string }) => {
            const rollKey = normalizeStatKey(payload.rollKey || payload.key || "");
            if (!rollKey) return;
            const stat = linkedStatSnapshotRoll(linkedStatsRef.current, rollKey);
            const inferred = stat
                ? draftWithRollStat(
                      inferLinkedStatDraft(`${stat.label || stat.key}: ${stat.value || 0}`),
                      stat,
                      { display: "roll" },
                  )
                : normalizeLinkedStatDraft({
                      ...inferLinkedStatDraft("Roll: 0"),
                      key: normalizeStatKey(payload.key || rollKey),
                      rollKey,
                      display: "roll",
                  });
            setStatLinkInitialTab("rolls");
            setStatLinkInitialEditRollKey(rollKey);
            setStatLinkTarget({
                blockText: "",
                blockEnd: editor.state.selection.from,
                valueFrom: null,
                valueTo: null,
                inferred,
            });
        };
        const unsubscribe = host.events?.on("note-editor-edit-roll", onEditRoll);
        return () => {
            unsubscribe?.();
        };
    }, [editor, host.events]);

    useEffect(() => {
        if (!editor) return;
        const dismissEditorFocus = (event: PointerEvent) => {
            const root = rootRef.current;
            if (!root || root.contains(event.target as Node)) return;
            if (editor.isFocused) {
                editor.commands.blur();
            }
        };

        document.addEventListener("pointerdown", dismissEditorFocus, true);
        return () => {
            document.removeEventListener(
                "pointerdown",
                dismissEditorFocus,
                true,
            );
        };
    }, [editor]);

    /**
     * Applies remote note content to the live editor without disturbing
     * collaboration state. Three things matter here:
     * - parseOptions must match the mount-time parse (preserveWhitespace
     *   "full") or the two clients end up with differently-parsed docs and
     *   remote cursor positions stop lining up;
     * - emitUpdate must be false or the sync fires onUpdate and is
     *   re-saved as a local edit (echo loop);
     * - the presence plugin keeps cursor positions as-is instead of
     *   remapping them through the full-document replace (they were
     *   measured against the incoming content, so raw values are correct).
     */
    const applyExternalContent = useCallback(
        (editorInstance: Editor, markdown: string) => {
            editorInstance
                .chain()
                .command(({ tr }) => {
                    tr.setMeta(notePresencePluginKey, {
                        type: "keepPositions",
                    });
                    return true;
                })
                .setContent(markdownToHtml(markdown), {
                    emitUpdate: false,
                    parseOptions: { preserveWhitespace: "full" },
                })
                .run();
        },
        [],
    );

    // Sync external content changes (from other players)
    useEffect(() => {
        if (!editor) return;
        if (isLocalChange.current) {
            isLocalChange.current = false;
            lastExternalContent.current = content;
            // Local edits are newer than any deferred remote snapshot.
            pendingExternalContent.current = null;
            return;
        }
        // Only update if content actually changed from external source.
        // While focused, linked stat node views own their local draft; applying
        // an external note snapshot here can restore stale stat values on blur.
        const hasEditorFocus =
            editor.isFocused ||
            (!!rootRef.current &&
                !!document.activeElement &&
                rootRef.current.contains(document.activeElement));
        if (content !== lastExternalContent.current) {
            if (hasEditorFocus) {
                // Defer while focused; applied by the blur handler below.
                pendingExternalContent.current = content;
            } else {
                lastExternalContent.current = content;
                pendingExternalContent.current = null;
                applyExternalContent(editor, content);
            }
        }
    }, [applyExternalContent, content, editor]);

    // Apply remote content that arrived while this editor owned focus.
    useEffect(() => {
        if (!editor) return;
        const applyPendingExternalContent = () => {
            const pending = pendingExternalContent.current;
            if (pending == null) return;
            pendingExternalContent.current = null;
            if (pending !== lastExternalContent.current) {
                lastExternalContent.current = pending;
                applyExternalContent(editor, pending);
            }
        };
        editor.on("blur", applyPendingExternalContent);
        return () => {
            editor.off("blur", applyPendingExternalContent);
        };
    }, [applyExternalContent, editor]);

    return (
        <div
            ref={rootRef}
            className="kmz-note-theme kmz-note-editor"
            onKeyDown={(e) => {
                // Handle Tab/Shift+Tab for list indentation
                if (e.key === "Tab" && editor) {
                    const handled = e.shiftKey
                        ? editor
                              .chain()
                              .focus()
                              .liftListItem("listItem")
                              .run() ||
                          editor.chain().focus().liftListItem("taskItem").run()
                        : editor
                              .chain()
                              .focus()
                              .sinkListItem("listItem")
                              .run() ||
                          editor.chain().focus().sinkListItem("taskItem").run();
                    if (handled) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                }
                e.stopPropagation();
            }}
            style={{
                flex: 1,
                overflow: "hidden",
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {editor && editable && (
                <EditorToolbar
                    editor={editor}
                    onOpenStatLink={openStatLinkModal}
                    onOpenStatsImport={openStatsImportModal}
                    canImportStats={canImportStats}
                />
            )}
            <div style={{ flex: 1, overflow: "auto", minHeight: 0 }}>
                <CodexMentions editor={editor} />
                <EditorContent editor={editor} className="h-full w-full" />
            </div>
            <StatLinkModal
                target={statLinkTarget}
                linkedStats={linkedStats}
                roomId={roomId}
                playerId={playerId}
                linkedStatsOwnerId={linkedStatsOwnerId}
                playerName={playerName}
                canCreateStats={canManagePlayerStats}
                onRefreshLinkedStats={onRefreshLinkedStats}
                initialTab={statLinkInitialTab}
                initialEditRollKey={statLinkInitialEditRollKey}
                onInitialEditRollHandled={() => setStatLinkInitialEditRollKey("")}
                onApply={applyStatLink}
                onClose={() => {
                    setStatLinkTarget(null);
                    setStatLinkInitialTab("stats");
                    setStatLinkInitialEditRollKey("");
                }}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <GameModal
                open={statsImportOpen}
                title="Import Stats"
                onClose={closeStatsImportModal}
                className="max-w-[420px]"
            >
                <div className="kmz-note-theme">
                    <div className="space-y-3">
                    <GameTextarea
                        value={statsImportText}
                        onChange={(event) => {
                            setStatsImportText(event.target.value);
                            setStatsImportError("");
                            setStatsImportNotice("");
                        }}
                        onKeyDown={(event) => event.stopPropagation()}
                        aria-label="Import stats JSON"
                        placeholder="{hp:11, hp.max:20}"
                        disabled={statsImportSaving}
                        className="min-h-[150px] w-full resize-y rounded border border-white/15 bg-black/40 px-3 py-2 font-mono text-xs text-white outline-none focus:border-blue-400 disabled:opacity-60"
                    />
                    {statsImportError && (
                        <div className="rounded border border-red-500/40 bg-red-950/40 px-3 py-2 text-xs text-red-100">
                            {statsImportError}
                        </div>
                    )}
                    {statsImportNotice && (
                        <div className="rounded border border-emerald-500/40 bg-emerald-950/30 px-3 py-2 text-xs text-emerald-100">
                            {statsImportNotice}
                        </div>
                    )}
                    <div className="flex justify-end gap-2">
                        <GameButton
                            type="button"
                            onClick={closeStatsImportModal}
                            disabled={statsImportSaving}
                        >
                            Close
                        </GameButton>
                        <GameButton
                            type="button"
                            onClick={applyStatsImport}
                            disabled={statsImportSaving}
                        >
                            {statsImportSaving ? "Importing..." : "Import"}
                        </GameButton>
                    </div>
                    </div>
                </div>
            </GameModal>
        </div>
    );
}
