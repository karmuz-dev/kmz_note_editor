/**
 * Tab utilities for per-note tabs.
 *
 * Tabs are embedded in the note's markdown content using HTML comment
 * delimiters: `<!-- @TAB: TabName -->`. The content between delimiters
 * belongs to that tab. Splitting and joining happens at the NotePanel
 * level — NoteEditor never sees the delimiters.
 *
 * If a note has no tab markers, it's treated as a single "Main" tab.
 * A single "Main" tab is serialized without delimiters for backward compat.
 */

const TAB_REGEX = /^<!-- @TAB:\s*(.+?)\s*-->$/gm;

export interface NoteTab {
    name: string;
    content: string;
}

/**
 * Parse a markdown string into tabs.
 * Returns an array of {name, content} objects.
 * If no tab markers found, returns a single tab named "Main".
 */
export function parseNoteTabs(markdown: string): NoteTab[] {
    const tabs: NoteTab[] = [];
    const matches: { name: string; index: number }[] = [];

    let match: RegExpExecArray | null;
    const re = new RegExp(TAB_REGEX.source, "gm");
    while ((match = re.exec(markdown)) !== null) {
        matches.push({ name: match[1], index: match.index });
    }

    if (matches.length === 0) {
        return [{ name: "Main", content: markdown }];
    }

    // Content before first marker is discarded (or belongs to preamble)
    // — in practice templates should start with a marker
    const preamble = markdown.slice(0, matches[0].index).trim();
    if (preamble) {
        tabs.push({ name: "Main", content: preamble });
    }

    for (let i = 0; i < matches.length; i++) {
        const markerEnd =
            matches[i].index +
            markdown.slice(matches[i].index).indexOf("\n") +
            1;
        const contentEnd =
            i + 1 < matches.length ? matches[i + 1].index : markdown.length;
        const content = markdown.slice(markerEnd, contentEnd).trim();
        tabs.push({ name: matches[i].name, content });
    }

    return tabs;
}

/**
 * Join tabs back into a single markdown string with delimiters.
 * A single "Main" tab is serialized without delimiters for backward compat.
 */
export function joinNoteTabs(tabs: NoteTab[]): string {
    if (tabs.length === 0) return "";
    if (tabs.length === 1 && tabs[0].name === "Main") {
        return tabs[0].content;
    }

    return tabs
        .map((tab) => `<!-- @TAB: ${tab.name} -->\n${tab.content}`)
        .join("\n\n");
}
