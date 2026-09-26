import { Node, mergeAttributes } from "@tiptap/core";
import {
    clampDiceCount,
    formatDiceEntries,
    normalizeDiceType,
    parseDiceEntriesAttribute,
} from "../dice";

type StatField = "value" | "maxValue" | "checkbox" | "checks";
type StatDisplay = "" | "roll";
type RollFormulaOperator = "" | "+" | "-" | "*" | "/";
type LinkedStatValueRegistry = Record<
    string,
    Partial<Record<StatField, number>>
>;

interface RollFormulaTerm {
    kind: "stat" | "dice" | "fixed";
    op: RollFormulaOperator;
    statKey: string;
    diceType: string;
    diceCount: number;
    fixedValue: number;
    open: boolean;
    close: boolean;
}

interface LinkedStatOptions {
    getExternalValue?: (key: string, field?: StatField) => number | undefined;
    getExternalStat?: (key: string) => ExternalLinkedStat | undefined;
    getExternalRoll?: (rollKey: string) => ExternalLinkedStat | undefined;
    canEditRoll?: (key: string) => boolean;
    events?: {
        emit: (name: string, payload?: unknown) => void;
        on: (name: string, listener: (payload: any) => void) => () => void;
    };
}

interface ExternalLinkedStat {
    key?: string;
    label?: string;
    value?: number;
    rollName?: string;
    rollKey?: string;
    rollConfigId?: string;
    rollModifierStatKey?: string;
    rollDiceStatKey?: string;
    rollDiceOperation?: string;
    rollMode?: string;
    rollResultMode?: string;
    rollFormula?: string;
    rollVisibility?: string;
    rollTargetStatKey?: string;
    rollBaseDiceCount?: number;
}

function normalizeField(value: unknown): StatField {
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

function normalizeDisplay(value: unknown): StatDisplay {
    return String(value || "").trim().toLowerCase() === "roll" ? "roll" : "";
}

function normalizeValue(value: unknown): number {
    return Math.trunc(Number(value) || 0);
}

function clampCheckCount(value: unknown): number {
    return Math.max(1, Math.min(10, Math.trunc(Number(value) || 3)));
}

function clampComputedDiceCount(value: unknown): number {
    return Math.max(0, Math.min(10, Math.trunc(Number(value) || 0)));
}

function normalizeRollResultMode(value: unknown): "" | "sum" | "max" | "min" {
    const mode = String(value || "").trim().toLowerCase();
    if (mode === "sum" || mode === "max" || mode === "min") return mode;
    return "";
}

function normalizeFormulaOperator(value: unknown): RollFormulaOperator {
    const op = String(value || "").trim();
    return op === "+" || op === "-" || op === "*" || op === "/" ? op : "";
}

function parseRollFormula(value: unknown): RollFormulaTerm[] {
    const text = String(value || "").trim();
    if (!text) return [];
    try {
        const raw = JSON.parse(text) as unknown;
        if (!Array.isArray(raw)) return [];
        return raw
            .map((entry, index) => {
                const item =
                    entry && typeof entry === "object"
                        ? (entry as Record<string, unknown>)
                        : {};
                const kind: RollFormulaTerm["kind"] =
                    item.kind === "stat"
                        ? "stat"
                        : item.kind === "fixed"
                          ? "fixed"
                          : "dice";
                return {
                    kind,
                    op: (index === 0
                        ? ""
                        : normalizeFormulaOperator(item.op) || "+") as RollFormulaOperator,
                    statKey: String(item.statKey || "").trim(),
                    diceType: normalizeDiceType(item.diceType),
                    diceCount: clampDiceCount(item.diceCount),
                    fixedValue: normalizeValue(item.fixedValue),
                    open: !!item.open,
                    close: !!item.close,
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

function applyFormulaOperator(
    total: number,
    value: number,
    operator: RollFormulaOperator,
): number {
    if (operator === "-") return total - value;
    if (operator === "*") return total * value;
    if (operator === "/") return value === 0 ? total : Math.trunc(total / value);
    return total + value;
}

function checkedFromText(value: string): number {
    const normalized = value.trim().toLowerCase();
    return normalized === "☑" ||
        normalized === "✓" ||
        normalized === "x" ||
        normalized === "true" ||
        normalized === "checked" ||
        normalized === "1"
        ? 1
        : 0;
}

function checksFromElement(element: HTMLElement): number {
    const explicitValue = element.getAttribute("data-value");
    if (explicitValue != null && explicitValue.trim() !== "") {
        return normalizeValue(explicitValue);
    }
    const text = element.textContent || "";
    const checkedMatches = text.match(/[☑✓]/g);
    if (checkedMatches) return checkedMatches.length;
    return normalizeValue(text);
}

function normalizeRollMode(value: unknown): "" | "set-value" {
    return String(value || "").trim() === "set-value" ? "set-value" : "";
}

function parseBooleanAttribute(value: unknown): boolean | undefined {
    const normalized = String(value || "").trim().toLowerCase();
    if (
        normalized === "true" ||
        normalized === "1" ||
        normalized === "yes" ||
        normalized === "y" ||
        normalized === "on" ||
        normalized === "reversed"
    ) {
        return true;
    }
    if (
        normalized === "false" ||
        normalized === "0" ||
        normalized === "no" ||
        normalized === "n" ||
        normalized === "off"
    ) {
        return false;
    }
    return undefined;
}

function isBaseModifierStatKey(key: string): boolean {
    return /^(str|dex|con|int|wis|cha)-mod$/.test(key);
}

function createRollRequestId(key: string): string {
    return `${key || "stat"}-${Date.now().toString(36)}-${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}

function createStatRollIcon(): SVGSVGElement {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.style.width = "1em";
    svg.style.height = "1em";
    svg.style.display = "block";

    const outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
    outline.setAttribute(
        "d",
        "M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z",
    );
    outline.setAttribute("fill", "rgba(255,255,255,0.08)");
    outline.setAttribute("stroke", "currentColor");
    outline.setAttribute("stroke-width", "1.6");
    outline.setAttribute("stroke-linejoin", "round");
    svg.appendChild(outline);

    const facets = document.createElementNS("http://www.w3.org/2000/svg", "path");
    facets.setAttribute("d", "M12 2.5v19M3.5 7l8.5 5 8.5-5M3.5 17l8.5-5 8.5 5");
    facets.setAttribute("fill", "none");
    facets.setAttribute("stroke", "currentColor");
    facets.setAttribute("stroke-width", "1.15");
    facets.setAttribute("stroke-linecap", "round");
    facets.setAttribute("stroke-linejoin", "round");
    facets.setAttribute("opacity", "0.82");
    svg.appendChild(facets);

    return svg;
}

function formatModifier(value: number): string {
    if (value > 0) return ` + ${value}`;
    if (value < 0) return ` - ${Math.abs(value)}`;
    return "";
}

function diceTypeFromConfigId(configId: string): string {
    const match = String(configId || "")
        .toLowerCase()
        .match(/d(?:100|20|12|10|8|6|4)/);
    return match?.[0] || "";
}

function humanizeKey(value: string): string {
    return String(value || "")
        .replace(/[-_.]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function rollModeForStat(key: string, value: unknown): "" | "set-value" {
    return normalizeRollMode(value) || (key === "initiative" ? "set-value" : "");
}

function getLinkedStatValue(root: HTMLElement, key: string): number {
    if (!key) return 0;
    const nodes = root.querySelectorAll<HTMLElement>("[data-linked-stat-key]");
    for (const node of nodes) {
        if (node.getAttribute("data-linked-stat-key") !== key) continue;
        return normalizeValue(node.getAttribute("data-linked-stat-value"));
    }
    return 0;
}

function getStoredLinkedStatValue(
    editor: { storage?: Record<string, unknown> },
    key: string,
    field?: StatField,
): number | undefined {
    const registry = editor.storage?.linkedStatValues as
        | LinkedStatValueRegistry
        | undefined;
    const values = registry?.[key];
    if (!values) return undefined;
    if (field && values[field] != null) return normalizeValue(values[field]);
    if (values.value != null) return normalizeValue(values.value);
    if (values.checkbox != null) return normalizeValue(values.checkbox);
    if (values.maxValue != null) return normalizeValue(values.maxValue);
    return undefined;
}

function setStoredLinkedStatValue(
    editor: { storage?: Record<string, unknown> },
    key: string,
    field: StatField,
    value: number,
): void {
    if (!key) return;
    const storage = (editor.storage ||= {});
    const registry = (storage.linkedStatValues ||=
        {}) as LinkedStatValueRegistry;
    registry[key] = {
        ...(registry[key] || {}),
        [field]: normalizeValue(value),
    };
}

export const LinkedStat = Node.create<LinkedStatOptions>({
    name: "linkedStat",

    inline: true,
    group: "inline",
    atom: true,
    selectable: false,
    draggable: false,

    addOptions() {
        return {
            getExternalValue: undefined,
            events: undefined,
        };
    },

    addStorage() {
        return {
            values: {},
        };
    },

    addAttributes() {
        return {
            key: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-key") ||
                    element.getAttribute("key") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) => ({
                    "data-key": String(attrs.key || ""),
                }),
            },
            field: {
                default: "value",
                parseHTML: (element: HTMLElement) =>
                    normalizeField(
                        element.getAttribute("data-field") ||
                            element.getAttribute("field"),
                    ),
                renderHTML: (attrs: Record<string, unknown>) => ({
                    "data-field": normalizeField(attrs.field),
                }),
            },
            display: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    normalizeDisplay(
                        element.getAttribute("data-display") ||
                            element.getAttribute("display"),
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    normalizeDisplay(attrs.display)
                        ? { "data-display": normalizeDisplay(attrs.display) }
                        : {},
            },
            value: {
                default: 0,
                parseHTML: (element: HTMLElement) => {
                    const field = normalizeField(
                        element.getAttribute("data-field") ||
                            element.getAttribute("field"),
                    );
                    if (field === "checkbox") {
                        return checkedFromText(
                            element.getAttribute("data-value") ||
                                element.textContent ||
                                "",
                        );
                    }
                    if (field === "checks") return checksFromElement(element);
                    return normalizeValue(
                        element.getAttribute("data-value") ||
                            element.textContent ||
                            "0",
                    );
                },
                renderHTML: (attrs: Record<string, unknown>) => ({
                    "data-value": String(normalizeValue(attrs.value)),
                }),
            },
            checkCount: {
                default: 3,
                parseHTML: (element: HTMLElement) =>
                    clampCheckCount(
                        element.getAttribute("data-check-count") ||
                            element.getAttribute("check-count") ||
                            "3",
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    normalizeField(attrs.field) === "checks"
                        ? {
                              "data-check-count": String(
                                  clampCheckCount(attrs.checkCount),
                              ),
                          }
                        : {},
            },
            label: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-label") ||
                    element.getAttribute("label") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.label
                        ? { "data-label": String(attrs.label || "") }
                        : {},
            },
            kind: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-kind") ||
                    element.getAttribute("kind") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.kind ? { "data-kind": String(attrs.kind || "") } : {},
            },
            color: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-color") ||
                    element.getAttribute("color") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.color
                        ? { "data-color": String(attrs.color || "") }
                        : {},
            },
            showTo: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-show-to") ||
                    element.getAttribute("data-showTo") ||
                    element.getAttribute("showTo") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.showTo
                        ? { "data-show-to": String(attrs.showTo || "") }
                        : {},
            },
            isReversed: {
                default: false,
                parseHTML: (element: HTMLElement) => {
                    const parsed = parseBooleanAttribute(
                        element.getAttribute("data-reversed") ||
                            element.getAttribute("data-is-reversed") ||
                            element.getAttribute("data-isReversed") ||
                            element.getAttribute("reversed") ||
                            element.getAttribute("isReversed"),
                    );
                    if (parsed != null) return parsed;
                    return String(
                        element.getAttribute("data-kind") ||
                            element.getAttribute("kind") ||
                            "",
                    )
                        .trim()
                        .toLowerCase() === "reverse";
                },
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.isReversed ? { "data-reversed": "true" } : {},
            },
            roll: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll") ||
                    element.getAttribute("roll") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.roll ? { "data-roll": String(attrs.roll || "") } : {},
            },
            rollCount: {
                default: 1,
                parseHTML: (element: HTMLElement) =>
                    clampDiceCount(
                        element.getAttribute("data-roll-count") ||
                            element.getAttribute("roll-count") ||
                            "1",
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    clampDiceCount(attrs.rollCount) !== 1
                        ? {
                              "data-roll-count": String(
                                  clampDiceCount(attrs.rollCount),
                              ),
                          }
                        : {},
            },
            rollLabel: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-label") ||
                    element.getAttribute("roll-label") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollLabel
                        ? { "data-roll-label": String(attrs.rollLabel || "") }
                        : {},
            },
            rollKey: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-key") ||
                    element.getAttribute("roll-key") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollKey
                        ? { "data-roll-key": String(attrs.rollKey || "") }
                        : {},
            },
            rollVisibility: {
                default: "global",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-visibility") ||
                    element.getAttribute("roll-visibility") ||
                    "global",
                renderHTML: (attrs: Record<string, unknown>) => ({
                    "data-roll-visibility":
                        attrs.rollVisibility === "private"
                            ? "private"
                            : "global",
                }),
            },
            rollMode: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    normalizeRollMode(
                        element.getAttribute("data-roll-mode") ||
                            element.getAttribute("roll-mode"),
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    normalizeRollMode(attrs.rollMode)
                        ? { "data-roll-mode": normalizeRollMode(attrs.rollMode) }
                        : {},
            },
            rollConfigId: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-config-id") ||
                    element.getAttribute("roll-config-id") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollConfigId
                        ? {
                              "data-roll-config-id": String(
                                  attrs.rollConfigId || "",
                              ),
                          }
                        : {},
            },
            rollConfigName: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-config-name") ||
                    element.getAttribute("roll-config-name") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollConfigName
                        ? {
                              "data-roll-config-name": String(
                                  attrs.rollConfigName || "",
                              ),
                          }
                        : {},
            },
            rollEntries: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-entries") ||
                    element.getAttribute("roll-entries") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    parseDiceEntriesAttribute(attrs.rollEntries).length > 0
                        ? {
                              "data-roll-entries": String(
                                  attrs.rollEntries || "",
                              ),
                          }
                        : {},
            },
            rollResultMode: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    normalizeRollResultMode(
                        element.getAttribute("data-roll-result-mode") ||
                            element.getAttribute("roll-result-mode"),
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    normalizeRollResultMode(attrs.rollResultMode)
                        ? {
                              "data-roll-result-mode": normalizeRollResultMode(
                                  attrs.rollResultMode,
                              ),
                          }
                        : {},
            },
            rollFormula: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-roll-formula") ||
                    element.getAttribute("roll-formula") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollFormula
                        ? {
                              "data-roll-formula": String(
                                  attrs.rollFormula || "",
                              ),
                          }
                        : {},
            },
            rollShowFormula: {
                default: true,
                parseHTML: (element: HTMLElement) =>
                    (element.getAttribute("data-roll-show-formula") ||
                        element.getAttribute("roll-show-formula")) !== "false",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.rollShowFormula === false
                        ? { "data-roll-show-formula": "false" }
                        : {},
            },
            modifierKey: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-modifier-key") ||
                    element.getAttribute("modifier-key") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.modifierKey
                        ? {
                              "data-modifier-key": String(
                                  attrs.modifierKey || "",
                              ),
                          }
                        : {},
            },
            modifierValue: {
                default: 0,
                parseHTML: (element: HTMLElement) =>
                    normalizeValue(
                        element.getAttribute("data-modifier-value") ||
                            element.getAttribute("modifier-value") ||
                            "0",
                    ),
                renderHTML: (attrs: Record<string, unknown>) =>
                    normalizeValue(attrs.modifierValue)
                        ? {
                              "data-modifier-value": String(
                                  normalizeValue(attrs.modifierValue),
                              ),
                          }
                        : {},
            },
            modifierStatKey: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-modifier-stat-key") ||
                    element.getAttribute("modifier-stat-key") ||
                    "",
                renderHTML: (attrs: Record<string, unknown>) =>
                    attrs.modifierStatKey
                        ? {
                              "data-modifier-stat-key": String(
                                  attrs.modifierStatKey || "",
                              ),
                          }
                        : {},
            },
        };
    },

    parseHTML() {
        return [{ tag: "stat[data-key]" }];
    },

    renderHTML({ node, HTMLAttributes }) {
        const value = normalizeValue(node.attrs.value);
        const field = normalizeField(node.attrs.field);
        const display = normalizeDisplay(node.attrs.display);
        return [
            "stat",
            mergeAttributes(HTMLAttributes, {
                "data-key": node.attrs.key,
                "data-field": field,
                "data-value": String(value),
            }),
            display === "roll"
                ? String(value)
                : field === "checkbox"
                  ? value > 0
                      ? "☑"
                      : "☐"
                  : String(value),
        ];
    },

    addNodeView() {
        return ({ node, editor, getPos, view }) => {
            const wrapper = document.createElement("span");
            wrapper.setAttribute("data-linked-stat", "true");
            wrapper.setAttribute("data-linked-stat-key", String(node.attrs.key || ""));
            wrapper.setAttribute(
                "data-linked-stat-field",
                normalizeField(node.attrs.field),
            );
            wrapper.setAttribute(
                "data-linked-stat-value",
                String(normalizeValue(node.attrs.value)),
            );
            wrapper.setAttribute("contenteditable", "false");
            wrapper.style.display = "inline-flex";
            wrapper.style.alignItems = "center";
            wrapper.style.verticalAlign = "middle";
            wrapper.style.margin = "0 2px";
            wrapper.style.gap = "2px";

            const field = () => normalizeField(node.attrs.field);
            const display = () => normalizeDisplay(node.attrs.display);
            const isRollOnly = () => display() === "roll";
            const showRollFormula = () => node.attrs.rollShowFormula !== false;
            const statKey = () => String(node.attrs.key || "");
            const isChecksField = () => field() === "checks";
            const checkCount = () => clampCheckCount(node.attrs.checkCount);
            let currentBaseValue = normalizeValue(node.attrs.value);
            let pendingRollRequestId = "";
            if (isRollOnly()) {
                wrapper.removeAttribute("data-linked-stat-key");
                wrapper.removeAttribute("data-linked-stat-field");
                wrapper.removeAttribute("data-linked-stat-value");
            }
            const readLinkedValue = (key: string, wantedField?: StatField) => {
                if (!key) return 0;
                const stored = getStoredLinkedStatValue(
                    editor as unknown as { storage?: Record<string, unknown> },
                    key,
                    wantedField,
                );
                if (stored != null) return stored;
                const external = this.options.getExternalValue?.(
                    key,
                    wantedField,
                );
                if (external != null) return normalizeValue(external);
                return getLinkedStatValue(view.dom, key);
            };
            const writeCurrentValue = (value = currentBaseValue) => {
                if (isRollOnly()) return;
                setStoredLinkedStatValue(
                    editor as unknown as { storage?: Record<string, unknown> },
                    statKey(),
                    field(),
                    value,
                );
                wrapper.setAttribute(
                    "data-linked-stat-key",
                    String(node.attrs.key || ""),
                );
                wrapper.setAttribute("data-linked-stat-field", field());
                wrapper.setAttribute("data-linked-stat-value", String(value));
            };
            const getBonus = () => {
                if (field() === "checkbox" || isChecksField()) return 0;
                const modifierKey = String(node.attrs.modifierKey || "");
                if (!modifierKey) return 0;
                const checked = readLinkedValue(modifierKey, "checkbox") > 0;
                if (!checked) return 0;
                const modifierStatKey = String(node.attrs.modifierStatKey || "");
                if (modifierStatKey) {
                    return readLinkedValue(modifierStatKey, "value");
                }
                return normalizeValue(node.attrs.modifierValue);
            };
            const effectiveValue = () => currentBaseValue + getBonus();
            const currentCheckValue = () =>
                Math.max(0, Math.min(checkCount(), currentBaseValue));
            const rollLookupKey = () =>
                String(node.attrs.rollKey || node.attrs.rollLabel || statKey());
            const externalRollStat = () =>
                this.options.getExternalRoll?.(rollLookupKey()) ||
                this.options.getExternalStat?.(statKey());
            const externalRollConfigId = () =>
                String(externalRollStat()?.rollConfigId || "").trim();
            const hasManagedRoll = () => !!externalRollConfigId();
            const rollResultModeForRoll = () =>
                normalizeRollResultMode(
                    externalRollStat()?.rollResultMode ||
                        node.attrs.rollResultMode,
                );
            const rollVisibilityForRoll = () => {
                const external = externalRollStat();
                if (external?.rollConfigId) {
                    return external.rollVisibility === "private"
                        ? "private"
                        : "global";
                }
                return node.attrs.rollVisibility === "private"
                    ? "private"
                    : "global";
            };
            const canEditManagedRoll = () =>
                hasManagedRoll() && !!this.options.canEditRoll?.(rollLookupKey());
            const rollType = () => normalizeDiceType(node.attrs.roll);
            const rollEntries = () =>
                isChecksField() || hasManagedRoll()
                    ? []
                    : parseDiceEntriesAttribute(node.attrs.rollEntries);
            const statValueForRoll = (key: string) =>
                key === statKey() && !isRollOnly()
                    ? effectiveValue()
                    : readLinkedValue(key, "value");
            const rollFormulaTerms = () =>
                parseRollFormula(
                    externalRollStat()?.rollFormula || node.attrs.rollFormula,
                );
            const formulaDiceIndex = (terms = rollFormulaTerms()) =>
                terms.findIndex((term) => term.kind === "dice");
            const formulaTermValue = (term: RollFormulaTerm) =>
                term.kind === "stat"
                    ? statValueForRoll(term.statKey)
                    : term.kind === "fixed"
                      ? normalizeValue(term.fixedValue)
                      : term.diceCount;
            const evaluateFormulaTerms = (terms: RollFormulaTerm[]) =>
                terms.reduce((total, term, index) => {
                    const value = formulaTermValue(term);
                    if (index === 0) return value;
                    return applyFormulaOperator(total, value, term.op || "+");
                }, 0);
            const formulaDiceCount = () => {
                const terms = rollFormulaTerms();
                const diceIndex = formulaDiceIndex(terms);
                if (diceIndex < 0) return null;
                const countTerms = terms.slice(0, diceIndex + 1);
                return clampComputedDiceCount(evaluateFormulaTerms(countTerms));
            };
            const formulaModifier = () => {
                const terms = rollFormulaTerms();
                const diceIndex = formulaDiceIndex(terms);
                if (diceIndex < 0) return null;
                const modifierTerms = terms.slice(diceIndex + 1);
                if (modifierTerms.length === 0) return 0;
                return modifierTerms.reduce((total, term) => {
                    const op = term.op || "+";
                    const value = formulaTermValue(term);
                    return applyFormulaOperator(total, value, op);
                }, 0);
            };
            const rollDiceCount = () => {
                const formulaCount = formulaDiceCount();
                if (formulaCount != null) return formulaCount;
                const managedStat = externalRollStat();
                if (managedStat?.rollConfigId) {
                    const baseCount = clampDiceCount(
                        managedStat.rollBaseDiceCount || 1,
                    );
                    const sourceKey = String(
                        managedStat.rollDiceStatKey || "",
                    ).trim();
                    const operation = String(
                        managedStat.rollDiceOperation || "",
                    ).trim();
                    if (!sourceKey || !operation) return baseCount;
                    const sourceValue = statValueForRoll(sourceKey);
                    if (operation === "add") {
                        if (
                            isChecksField() &&
                            sourceKey === statKey() &&
                            baseCount === 1
                        ) {
                            return clampComputedDiceCount(sourceValue);
                        }
                        return clampComputedDiceCount(baseCount + sourceValue);
                    }
                    if (operation === "multiply") {
                        return clampComputedDiceCount(baseCount * sourceValue);
                    }
                    return baseCount;
                }
                return isChecksField()
                    ? currentCheckValue()
                    : clampDiceCount(node.attrs.rollCount);
            };
            const rollModifier = () => {
                const computedModifier = formulaModifier();
                if (computedModifier != null) return computedModifier;
                const managedStat = externalRollStat();
                if (managedStat?.rollConfigId) {
                    const modifierKey = String(
                        managedStat.rollModifierStatKey || "",
                    ).trim();
                    return modifierKey ? statValueForRoll(modifierKey) : 0;
                }
                return isChecksField() ? 0 : effectiveValue();
            };
            const statLabelForFormula = (key: string) => {
                const external = this.options.getExternalStat?.(key);
                return external?.label || humanizeKey(key);
            };
            const formulaTextFromTerms = (terms: RollFormulaTerm[]) =>
                terms
                    .map((term, index) => {
                        const op = index === 0 ? "" : `${term.op || "+"} `;
                        const open = term.open ? "(" : "";
                        const close = term.close ? ")" : "";
                        const body =
                            term.kind === "stat"
                                ? statLabelForFormula(term.statKey)
                                : term.kind === "fixed"
                                  ? String(normalizeValue(term.fixedValue))
                                  : `${term.diceCount}${term.diceType || "dice"}`;
                        return `${op}${open}${body}${close}`;
                    })
                    .join(" ")
                    .trim();
            const rollFormulaText = () => {
                const formulaText = formulaTextFromTerms(rollFormulaTerms());
                if (formulaText) return formulaText;
                const managedStat = externalRollStat();
                if (managedStat?.rollConfigId) {
                    const diceType =
                        diceTypeFromConfigId(managedStat.rollConfigId) ||
                        String(node.attrs.rollConfigName || "").trim() ||
                        String(managedStat.rollConfigId || "").trim();
                    const baseCount = clampDiceCount(
                        managedStat.rollBaseDiceCount || 1,
                    );
                    const diceText = diceType
                        ? `${baseCount}${diceType}`
                        : `${baseCount} dice`;
                    const sourceKey = String(
                        managedStat.rollDiceStatKey || "",
                    ).trim();
                    const operation = String(
                        managedStat.rollDiceOperation || "",
                    ).trim();
                    const modifierKey = String(
                        managedStat.rollModifierStatKey || "",
                    ).trim();
                    const sourceText = sourceKey
                        ? statLabelForFormula(sourceKey)
                        : "";
                    const baseFormula =
                        sourceText && operation === "multiply"
                            ? `${sourceText} x ${diceText}`
                            : sourceText && operation === "add"
                              ? `${sourceText} + ${diceText}`
                              : diceText;
                    return modifierKey
                        ? `${baseFormula} + ${statLabelForFormula(modifierKey)}`
                        : baseFormula;
                }
                const configuredEntries = rollEntries();
                if (configuredEntries.length > 0) {
                    return formatDiceEntries(configuredEntries);
                }
                const dice = rollType();
                const count = rollDiceCount();
                return dice && count > 0 ? `${count}${dice}` : "";
            };

            const checksWrapper = document.createElement("span");
            checksWrapper.style.display = "inline-flex";
            checksWrapper.style.alignItems = "center";
            checksWrapper.style.gap = "2px";
            checksWrapper.style.verticalAlign = "middle";
            const checkInputs: HTMLInputElement[] = [];
            const rebuildChecks = () => {
                checksWrapper.textContent = "";
                checkInputs.length = 0;
                const statName = String(
                    node.attrs.label || node.attrs.key || "Stat",
                );
                Array.from(
                    { length: checkCount() },
                    (_, index) => index + 1,
                ).forEach((checkIndex) => {
                    const checkInput = document.createElement("input");
                    checkInput.type = "checkbox";
                    checkInput.title = `Set ${statName} to ${checkIndex}`;
                    checkInput.setAttribute(
                        "aria-label",
                        `Set ${statName} to ${checkIndex}`,
                    );
                    checkInput.style.width = "1.2em";
                    checkInput.style.height = "1.2em";
                    checkInput.style.margin = "0 1px";
                    checkInput.style.accentColor = "#76c778";
                    checkInput.style.pointerEvents = "auto";
                    checkInput.disabled = !editor.isEditable;
                    checkInput.addEventListener("mousedown", (event) => {
                        event.stopPropagation();
                    });
                    checkInput.addEventListener("keydown", (event) => {
                        event.stopPropagation();
                    });
                    checkInput.addEventListener("change", () => {
                        if (!editor.isEditable) return;
                        const nextValue = checkInput.checked
                            ? checkIndex
                            : checkIndex - 1;
                        commitValue(nextValue);
                        updateInputDisplay();
                    });
                    checkInputs.push(checkInput);
                    checksWrapper.appendChild(checkInput);
                });
            };
            const updateChecksDisplay = () => {
                if (checkInputs.length !== checkCount()) rebuildChecks();
                const value = currentCheckValue();
                checkInputs.forEach((checkInput, index) => {
                    checkInput.checked = value >= index + 1;
                    checkInput.disabled = !editor.isEditable;
                });
            };

            const input = document.createElement("input");
            input.type = field() === "checkbox" ? "checkbox" : "number";
            if (field() === "checkbox") {
                input.checked = currentBaseValue > 0;
                input.title = "Linked checkbox stat";
                input.style.width = "1.2em";
                input.style.height = "1.2em";
                input.style.accentColor = "#76c778";
            } else {
                input.value = String(effectiveValue());
                input.title =
                    field() === "maxValue"
                        ? "Linked max stat"
                        : getBonus()
                          ? `Linked stat (${currentBaseValue} + ${getBonus()})`
                          : "Linked stat";
                input.style.width = "4.5em";
            }
            input.style.width = "4.5em";
            input.style.maxWidth = "100%";
            input.style.padding = "1px 4px";
            input.style.border = "1px solid rgba(120, 160, 220, 0.65)";
            input.style.borderRadius = "4px";
            input.style.background = "rgba(32, 45, 65, 0.92)";
            input.style.color = "#fff";
            input.style.font = "inherit";
            input.style.lineHeight = "1.25";
            input.style.pointerEvents = "auto";
            input.disabled = !editor.isEditable;

            if (field() === "checkbox") {
                input.style.width = "1.2em";
                input.style.padding = "0";
            }

            const formulaLabel = document.createElement("span");
            formulaLabel.setAttribute("data-linked-stat-roll-formula", "true");
            formulaLabel.style.display = "inline-flex";
            formulaLabel.style.alignItems = "center";
            formulaLabel.style.minHeight = "1.85em";
            formulaLabel.style.maxWidth = "14em";
            formulaLabel.style.padding = "1px 6px";
            formulaLabel.style.border = "1px solid rgba(120, 160, 220, 0.42)";
            formulaLabel.style.borderRadius = "5px";
            formulaLabel.style.background = "rgba(32, 45, 65, 0.64)";
            formulaLabel.style.color = "#dbeafe";
            formulaLabel.style.fontSize = "0.92em";
            formulaLabel.style.lineHeight = "1.2";
            formulaLabel.style.whiteSpace = "nowrap";
            formulaLabel.style.overflow = "hidden";
            formulaLabel.style.textOverflow = "ellipsis";

            const dispatchChange = (value = currentBaseValue) => {
                writeCurrentValue(value);
                view.dom.dispatchEvent(
                    new CustomEvent("linked-stat-change", { bubbles: true }),
                );
            };

            const hasRollLink = () =>
                hasManagedRoll() ||
                !!String(node.attrs.rollKey || "").trim() ||
                !!String(node.attrs.rollConfigId || "").trim() ||
                !!rollType() ||
                rollEntries().length > 0;
            let rollButton: HTMLButtonElement | null = null;
            let paintRollButton = (_state: "idle" | "hover" | "active") => {};
            const rollLabel = () =>
                String(externalRollStat()?.rollName || "").trim() ||
                String(node.attrs.rollLabel || "").trim() ||
                String(node.attrs.rollConfigName || "").trim() ||
                String(node.attrs.label || "").trim() ||
                String(node.attrs.key || "Stat");
            const updateRollButtonTitle = () => {
                if (!rollButton) return;
                const diceCount = rollDiceCount();
                const resultMode = rollResultModeForRoll();
                const configuredEntries = rollEntries();
                const notation =
                    hasManagedRoll()
                        ? `${diceCount}x ${externalRollConfigId()}${formatModifier(rollModifier())}`
                        : configuredEntries.length > 0
                        ? `${formatDiceEntries(configuredEntries)}${formatModifier(rollModifier())}${resultMode ? ` ${resultMode}` : ""}`
                        : diceCount > 0
                          ? `${diceCount}${rollType()}${formatModifier(rollModifier())}${resultMode ? ` ${resultMode}` : ""}`
                          : `${rollType()} ${resultMode || ""}`.trim();
                rollButton.title = canEditManagedRoll()
                    ? `Roll ${rollLabel()} (${notation}). Hold to edit.`
                    : `Roll ${rollLabel()} (${notation})`;
                rollButton.setAttribute("aria-label", `Roll ${rollLabel()}`);
            };

            const syncExternalValue = () => {
                if (isRollOnly() || document.activeElement === input) {
                    return false;
                }
                // checks/checkbox values live in the document, not the server stat —
                // syncing would reset every user click immediately.
                if (field() === "checks" || field() === "checkbox") {
                    return false;
                }
                const external = this.options.getExternalValue?.(
                    statKey(),
                    field(),
                );
                if (external == null) return false;

                const nextValue = normalizeValue(external);
                writeCurrentValue(nextValue);
                if (nextValue === currentBaseValue) return false;

                currentBaseValue = nextValue;
                const pos = typeof getPos === "function" ? getPos() : null;
                if (typeof pos !== "number") return false;

                view.dispatch(
                    view.state.tr.setNodeMarkup(pos, undefined, {
                        ...node.attrs,
                        value: currentBaseValue,
                    }),
                );
                return true;
            };

            const updateInputDisplay = () => {
                if (isRollOnly()) {
                    const formula = rollFormulaText();
                    formulaLabel.textContent = formula;
                    formulaLabel.title = formula;
                    formulaLabel.style.display =
                        showRollFormula() && formula ? "inline-flex" : "none";
                    updateRollButtonTitle();
                    if (rollButton) {
                        rollButton.style.display = hasRollLink()
                            ? "inline-flex"
                            : "none";
                        rollButton.disabled =
                            !editor.isEditable ||
                            !hasRollLink() ||
                            rollDiceCount() <= 0;
                        paintRollButton("idle");
                    }
                    return;
                }
                const currentField = field();
                const value = currentBaseValue;
                if (currentField === "checks") {
                    updateChecksDisplay();
                    updateRollButtonTitle();
                    if (rollButton) {
                        rollButton.style.display = hasRollLink()
                            ? "inline-flex"
                            : "none";
                        rollButton.disabled =
                            !editor.isEditable ||
                            !hasRollLink() ||
                            rollDiceCount() <= 0;
                        paintRollButton("idle");
                    }
                    return;
                }
                if (currentField === "checkbox") {
                    input.type = "checkbox";
                    input.checked = value > 0;
                    input.title = "Linked checkbox stat";
                    updateRollButtonTitle();
                    return;
                }
                const bonus = getBonus();
                input.type = "number";
                const nextValue = String(value + bonus);
                if (document.activeElement !== input && input.value !== nextValue) {
                    input.value = nextValue;
                }
                input.title =
                    currentField === "maxValue"
                        ? "Linked max stat"
                        : bonus
                          ? `Linked stat (${value} + ${bonus})`
                          : "Linked stat";
                updateRollButtonTitle();
                if (rollButton) {
                    rollButton.style.display = hasRollLink()
                        ? "inline-flex"
                        : "none";
                    rollButton.disabled = !editor.isEditable || !hasRollLink();
                    paintRollButton("idle");
                }
            };

            const updateDraftFromInput = () => {
                const currentField = field();
                if (currentField === "checks") {
                    currentBaseValue = currentCheckValue();
                    return true;
                }
                if (currentField === "checkbox") {
                    currentBaseValue = input.checked ? 1 : 0;
                    return true;
                }
                const draftValue = input.value.trim();
                if (!draftValue || draftValue === "-") return false;
                currentBaseValue = normalizeValue(draftValue) - getBonus();
                return true;
            };

            const commitValue = (value = currentBaseValue) => {
                if (!editor.isEditable) return;
                currentBaseValue = normalizeValue(value);
                const pos = typeof getPos === "function" ? getPos() : null;
                if (typeof pos === "number") {
                    view.dispatch(
                        view.state.tr.setNodeMarkup(pos, undefined, {
                            ...node.attrs,
                            value: currentBaseValue,
                        }),
                    );
                }
                dispatchChange();
            };

            const commit = () => {
                if (!updateDraftFromInput()) return;
                commitValue();
            };

            input.addEventListener("input", () => {
                if (
                    !editor.isEditable ||
                    field() === "checkbox" ||
                    field() === "checks"
                )
                    return;
                if (!updateDraftFromInput()) return;
                commitValue();
            });
            input.addEventListener("change", commit);
            input.addEventListener("blur", () => {
                if (field() === "checkbox" || field() === "checks") return;
                const draftValue = input.value.trim();
                if (!draftValue || draftValue === "-") {
                    input.value = String(effectiveValue());
                    return;
                }
                commit();
            });
            input.addEventListener("keydown", (event) => {
                event.stopPropagation();
                if (event.key === "Enter") {
                    event.preventDefault();
                    commit();
                    input.blur();
                }
            });
            input.addEventListener("mousedown", (event) => {
                event.stopPropagation();
            });

            if (isRollOnly()) {
                wrapper.appendChild(formulaLabel);
            } else if (isChecksField()) {
                rebuildChecks();
                updateChecksDisplay();
                wrapper.appendChild(checksWrapper);
            } else {
                wrapper.appendChild(input);
            }
            writeCurrentValue();

            if (
                (isRollOnly() || field() !== "checkbox") &&
                !isBaseModifierStatKey(statKey())
            ) {
                rollButton = document.createElement("button");
                rollButton.type = "button";
                rollButton.appendChild(createStatRollIcon());
                updateRollButtonTitle();
                rollButton.style.display = hasRollLink() ? "inline-flex" : "none";
                rollButton.style.alignItems = "center";
                rollButton.style.justifyContent = "center";
                rollButton.style.width = "1.85em";
                rollButton.style.height = "1.85em";
                rollButton.style.marginLeft = "1px";
                rollButton.style.padding = "0";
                rollButton.style.border = "1px solid rgba(132, 186, 255, 0.72)";
                rollButton.style.borderRadius = "6px";
                rollButton.style.background =
                    "linear-gradient(180deg, rgba(40, 66, 102, 0.98), rgba(18, 28, 45, 0.98))";
                rollButton.style.color = "#eaf3ff";
                rollButton.style.boxShadow =
                    "inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(0,0,0,0.24)";
                rollButton.style.font = "inherit";
                rollButton.style.lineHeight = "1";
                rollButton.style.cursor = "pointer";
                rollButton.style.pointerEvents = "auto";
                rollButton.style.flex = "0 0 auto";
                rollButton.style.transition =
                    "background 120ms ease, border-color 120ms ease, box-shadow 120ms ease, color 120ms ease, transform 120ms ease, opacity 120ms ease";
                rollButton.disabled =
                    !editor.isEditable ||
                    !hasRollLink() ||
                    ((isChecksField() || isRollOnly()) &&
                        rollDiceCount() <= 0);
                paintRollButton = (state) => {
                    if (!rollButton) return;
                    if (rollButton.disabled) {
                        rollButton.style.opacity = "0.45";
                        rollButton.style.cursor = "not-allowed";
                        rollButton.style.transform = "none";
                        rollButton.style.background = "rgba(32, 45, 65, 0.55)";
                        rollButton.style.borderColor = "rgba(120, 160, 220, 0.35)";
                        return;
                    }
                    rollButton.style.opacity = "1";
                    rollButton.style.cursor = "pointer";
                    rollButton.style.borderColor =
                        state === "idle"
                            ? "rgba(132, 186, 255, 0.72)"
                            : "rgba(154, 214, 255, 0.95)";
                    rollButton.style.background =
                        state === "active"
                            ? "linear-gradient(180deg, rgba(22, 42, 68, 1), rgba(14, 22, 36, 1))"
                            : state === "hover"
                              ? "linear-gradient(180deg, rgba(54, 86, 130, 1), rgba(24, 42, 68, 1))"
                              : "linear-gradient(180deg, rgba(40, 66, 102, 0.98), rgba(18, 28, 45, 0.98))";
                    rollButton.style.boxShadow =
                        state === "hover"
                            ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 2px rgba(80, 160, 255, 0.14), 0 2px 4px rgba(0,0,0,0.28)"
                            : "inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(0,0,0,0.24)";
                    rollButton.style.transform =
                        state === "active" ? "translateY(1px)" : "none";
                };
                paintRollButton("idle");
                let longPressTimer: number | undefined;
                let longPressHandled = false;
                const clearLongPressTimer = () => {
                    if (longPressTimer == null) return;
                    window.clearTimeout(longPressTimer);
                    longPressTimer = undefined;
                };
                rollButton.addEventListener("mousedown", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    longPressHandled = false;
                    clearLongPressTimer();
                    if (canEditManagedRoll()) {
                        longPressTimer = window.setTimeout(() => {
                            longPressHandled = true;
                            this.options.events?.emit("note-editor-edit-roll", {
                                key: statKey(),
                                rollKey: rollLookupKey(),
                            });
                            paintRollButton("idle");
                        }, 520);
                    }
                    paintRollButton("active");
                });
                rollButton.addEventListener("mouseup", () => {
                    clearLongPressTimer();
                    paintRollButton("hover");
                });
                rollButton.addEventListener("mouseenter", () =>
                    paintRollButton("hover"),
                );
                rollButton.addEventListener("mouseleave", () => {
                    clearLongPressTimer();
                    paintRollButton("idle");
                });
                rollButton.addEventListener("focus", () =>
                    paintRollButton("hover"),
                );
                rollButton.addEventListener("blur", () =>
                    paintRollButton("idle"),
                );
                rollButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    clearLongPressTimer();
                    if (longPressHandled) {
                        longPressHandled = false;
                        return;
                    }
                    const diceCount = rollDiceCount();
                    const configuredEntries = rollEntries();
                    const managedStat = externalRollStat();
                    const managedConfigId = String(
                        managedStat?.rollConfigId || "",
                    ).trim();
                    const nodeConfigId = String(
                        node.attrs.rollConfigId || "",
                    ).trim();
                    const configDiceType = diceTypeFromConfigId(
                        managedConfigId || nodeConfigId,
                    );
                    if (
                        !managedConfigId &&
                        !nodeConfigId &&
                        !rollType() &&
                        configuredEntries.length === 0
                    )
                        return;
                    if (diceCount <= 0 && configuredEntries.length === 0) return;
                    const managedRollKey = String(
                        managedStat?.rollKey || "",
                    ).trim();
                    const managedTargetKey = String(
                        managedStat?.rollTargetStatKey || "",
                    ).trim();
                    const managedRollMode = normalizeRollMode(
                        managedStat?.rollMode,
                    );
                    const requestId = createRollRequestId(statKey());
                    pendingRollRequestId = requestId;
                    this.options.events?.emit("stat-dice-roll", {
                        key: managedRollKey || String(node.attrs.key || ""),
                        targetKey: managedTargetKey || String(node.attrs.key || ""),
                        requestId,
                        label: rollLabel(),
                        diceType: configDiceType || rollType(),
                        diceCount,
                        entries: configuredEntries,
                        configId:
                            managedConfigId || nodeConfigId,
                        configName: String(node.attrs.rollConfigName || ""),
                        modifier: rollModifier(),
                        rollMode:
                            managedRollMode ||
                            rollModeForStat(statKey(), node.attrs.rollMode),
                        rollResultMode: rollResultModeForRoll(),
                        visibility: rollVisibilityForRoll(),
                    });
                });
                wrapper.appendChild(rollButton);
            }

            const onStatDiceRollResult = (payload: {
                requestId?: string;
                key?: string;
                targetKey?: string;
                value?: number;
            }) => {
                if (!pendingRollRequestId) return;
                if (payload?.requestId !== pendingRollRequestId) return;
                const targetKey = String(payload.targetKey || payload.key || "");
                if (targetKey && targetKey !== statKey()) return;
                pendingRollRequestId = "";
                if (isRollOnly()) return;
                const displayValue = normalizeValue(payload.value);
                commitValue(displayValue - getBonus());
                input.value = String(displayValue);
            };
            const onLinkedStatChange = () => {
                if (!syncExternalValue()) updateInputDisplay();
            };
            view.dom.addEventListener("linked-stat-change", onLinkedStatChange);
            const unsubscribeRollResult = this.options.events?.on(
                "stat-dice-roll-result",
                onStatDiceRollResult,
            );
            requestAnimationFrame(() => {
                dispatchChange();
                updateInputDisplay();
            });

            return {
                dom: wrapper,
                update: (updatedNode) => {
                    if (updatedNode.type.name !== "linkedStat") return false;
                    const wasEditingNumber =
                        document.activeElement === input &&
                        !isRollOnly() &&
                        field() !== "checkbox" &&
                        field() !== "checks";
                    node = updatedNode;
                    if (!wasEditingNumber) {
                        currentBaseValue = normalizeValue(node.attrs.value);
                    }
                    writeCurrentValue();
                    updateInputDisplay();
                    input.disabled = !editor.isEditable;
                    if (!isRollOnly()) updateChecksDisplay();
                    if (rollButton) {
                        rollButton.style.display = hasRollLink()
                            ? "inline-flex"
                            : "none";
                        rollButton.disabled =
                            !editor.isEditable ||
                            !hasRollLink() ||
                            ((isChecksField() || isRollOnly()) &&
                                rollDiceCount() <= 0);
                        updateRollButtonTitle();
                        paintRollButton("idle");
                    }
                    return true;
                },
                destroy: () => {
                    view.dom.removeEventListener(
                        "linked-stat-change",
                        onLinkedStatChange,
                    );
                    unsubscribeRollResult?.();
                },
                ignoreMutation: () => true,
            };
        };
    },
});
