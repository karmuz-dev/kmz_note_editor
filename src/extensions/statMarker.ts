import { Node, mergeAttributes } from "@tiptap/core";

export const StatMarker = Node.create({
    name: "statMarker",

    inline: true,
    group: "inline",
    atom: true,
    selectable: false,
    draggable: false,

    addAttributes() {
        return {
            marker: {
                default: "",
                parseHTML: (element: HTMLElement) =>
                    element.getAttribute("data-stat-marker") || "",
                renderHTML: (attrs: Record<string, unknown>) => ({
                    "data-stat-marker": String(attrs.marker || ""),
                }),
            },
        };
    },

    parseHTML() {
        return [{ tag: "span[data-stat-marker]" }];
    },

    renderHTML({ HTMLAttributes }) {
        return [
            "span",
            mergeAttributes(HTMLAttributes, {
                contenteditable: "false",
                style: "display:none;",
            }),
        ];
    },
});
