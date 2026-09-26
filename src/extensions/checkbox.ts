import { Node, mergeAttributes } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";

/**
 * Checkbox extension for TipTap editor.
 *
 * No NodeView — relies purely on ProseMirror's toDOM rendering
 * to output a <span data-checkbox> element. A ProseMirror plugin
 * watches for DOM mutations to sync checkbox state, and intercepts
 * clicks to toggle the checked attribute via transactions.
 *
 * This approach avoids inline NodeView issues in table cells.
 */
export const Checkbox = Node.create({
    name: "checkbox",

    inline: true,
    group: "inline",
    atom: true,
    selectable: false,
    draggable: false,

    addAttributes() {
        return {
            checked: {
                default: false,
                parseHTML: (el: HTMLElement) => {
                    return el.getAttribute("data-checked") === "true";
                },
                renderHTML: (attrs: Record<string, unknown>) => {
                    return {
                        "data-checked": attrs.checked ? "true" : "false",
                    };
                },
            },
        };
    },

    parseHTML() {
        return [{ tag: "span[data-checkbox]" }];
    },

    renderHTML({ node, HTMLAttributes }) {
        /**
         * Renders a <span data-checkbox> containing a real <input type="checkbox">.
         * ProseMirror's toDOM directly creates this in the DOM without a NodeView,
         * ensuring it appears inside table cells where NodeViews fail to mount.
         */
        const attrs = mergeAttributes(HTMLAttributes, {
            "data-checkbox": "",
            contenteditable: "false",
            style: "display:inline-flex;align-items:center;vertical-align:middle;",
        });
        return [
            "span",
            attrs,
            [
                "input",
                {
                    type: "checkbox",
                    ...(node.attrs.checked ? { checked: "checked" } : {}),
                    style: "cursor:pointer;margin:0 2px;pointer-events:auto;",
                },
            ],
        ];
    },

    addProseMirrorPlugins() {
        /**
         * Plugin that intercepts click on checkbox inputs and dispatches
         * a ProseMirror transaction to toggle the checked attribute.
         * Uses posAtDOM to locate the checkbox node in the document.
         */
        return [
            new Plugin({
                key: new PluginKey("checkboxClick"),
                props: {
                    handleDOMEvents: {
                        mousedown: (view, event) => {
                            const target = event.target as HTMLElement;
                            if (
                                target.tagName !== "INPUT" ||
                                (target as HTMLInputElement).type !== "checkbox"
                            )
                                return false;

                            // Only handle checkboxes inside our data-checkbox span
                            const wrapper = target.closest("[data-checkbox]");
                            if (!wrapper) return false;

                            event.preventDefault();

                            try {
                                const pos = view.posAtDOM(wrapper, 0);
                                // posAtDOM may point to inside the node; check the node at pos
                                let nodePos = pos;
                                let node = view.state.doc.nodeAt(pos);

                                // If not found, try pos - 1 (posAtDOM can be off by one)
                                if (!node || node.type.name !== "checkbox") {
                                    node = view.state.doc.nodeAt(pos - 1);
                                    if (node?.type.name === "checkbox") {
                                        nodePos = pos - 1;
                                    } else {
                                        return false;
                                    }
                                }

                                const checked = !node.attrs.checked;
                                view.dispatch(
                                    view.state.tr.setNodeMarkup(
                                        nodePos,
                                        undefined,
                                        { ...node.attrs, checked },
                                    ),
                                );
                                return true;
                            } catch {
                                return false;
                            }
                        },
                    },
                },
            }),
        ];
    },
});
