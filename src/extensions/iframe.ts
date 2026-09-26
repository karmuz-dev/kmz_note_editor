import { Node } from "@tiptap/core";

export const Iframe = Node.create({
    name: "iframe",

    group: "block",
    atom: true,
    selectable: true,
    isolating: true,

    addAttributes() {
        return {
            src: {
                default: null,
                parseHTML: (el) => {
                    const raw = el.getAttribute("src") || "";
                    const match = raw.match(/\((.*?)\)/);
                    return match ? match[1] : raw;
                },
            },
            width: {
                default: "100%",
                parseHTML: (el) => el.getAttribute("width") || "100%",
            },
            height: {
                default: "400",
                parseHTML: (el) => el.getAttribute("height") || "400",
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: "iframe",
                getAttrs: (el) => {
                    const element = el as HTMLElement;

                    const rawSrc = element.getAttribute("src") || "";
                    const match = rawSrc.match(/\((.*?)\)/);
                    return {
                        src: match ? match[1] : rawSrc,
                        width: element.getAttribute("width"),
                        height: element.getAttribute("height"),
                    };
                },
            },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ["iframe", HTMLAttributes];
    },

    addNodeView() {
        return ({ node }) => {
            const iframe = document.createElement("iframe");

            iframe.src = node.attrs.src;
            iframe.width = node.attrs.width || "100%";
            iframe.height = node.attrs.height || "400";
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "true");
            return {
                dom: iframe,
            };
        };
    },
});
