import { useEffect } from 'react';
import type { Editor } from '@tiptap/react';
import { useNoteEditorHost } from './host';

/** Links remain ordinary UUID URLs through Markdown save/load and realtime sync. */
export function CodexMentions({ editor }: { editor: Editor | null }) {
    const { codex } = useNoteEditorHost();
    useEffect(() => {
        if (!editor || !codex) return;
        let menu: HTMLElement | undefined;
        let tooltip: HTMLElement | undefined;
        let searchRequest: AbortController | undefined;
        let previewRequest: AbortController | undefined;
        let timer: ReturnType<typeof setTimeout> | undefined;
        let serial = 0;
        const close = () => { serial++; clearTimeout(timer); searchRequest?.abort(); menu?.remove(); menu = undefined; };
        const hide = () => { previewRequest?.abort(); tooltip?.remove(); tooltip = undefined; };
        const position = (element: HTMLElement, rect: { left: number; bottom: number }) => {
            element.style.left = `${Math.max(8, Math.min(rect.left, innerWidth - 308))}px`;
            element.style.top = `${Math.max(8, Math.min(rect.bottom + 8, innerHeight - element.offsetHeight - 8))}px`;
        };
        const update = () => {
            close();
            if (!editor.isEditable || !editor.isFocused || !editor.state.selection.empty) return;
            const { $from, from } = editor.state.selection;
            const text = $from.parent.textBetween(0, $from.parentOffset, '\n', '\ufffc');
            const match = /(?:^|\s)@([^@\n]{0,100})$/.exec(text);
            if (!match || editor.isActive('codeBlock') || editor.isActive('link')) return;
            const start = from - match[1].length - 1;
            const version = serial;
            timer = setTimeout(async () => {
                searchRequest = new AbortController();
                try {
                    const entries = await codex.search(match[1], searchRequest.signal);
                    if (version !== serial || editor.isDestroyed) return;
                    menu = document.createElement('div'); menu.className = 'kmz-codex-popup'; menu.setAttribute('role', 'listbox'); menu.setAttribute('aria-label', 'World Codex entries');
                    if (!entries.length) menu.textContent = 'No matching entries.';
                    for (const entry of entries.slice(0, 12)) {
                        const button = document.createElement('button'); button.type = 'button'; button.setAttribute('role', 'option');
                        button.textContent = `${entry.name} · ${entry.type}`;
                        button.addEventListener('mousedown', event => event.preventDefault());
                        button.addEventListener('click', () => {
                            close();
                            editor.chain().focus().insertContentAt({ from: start, to: from }, [{ type: 'text', text: `@${entry.name}`, marks: [{ type: 'link', attrs: { href: entry.href } }] }, { type: 'text', text: ' ' }]).run();
                        });
                        menu.append(button);
                    }
                    document.body.append(menu); position(menu, editor.view.coordsAtPos(from));
                } catch { if (version === serial) close(); }
            }, 180);
        };
        const hover = async (event: Event) => {
            const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
            if (!anchor || !editor.view.dom.contains(anchor)) return;
            hide(); previewRequest = new AbortController(); const request = previewRequest;
            try {
                const entry = await codex.preview(anchor.href, request.signal);
                if (!entry || request.signal.aborted) return;
                tooltip = document.createElement('aside'); tooltip.className = 'kmz-codex-popup'; tooltip.setAttribute('role', 'tooltip');
                const title = document.createElement('strong'); title.textContent = entry.name;
                const body = document.createElement('p'); body.textContent = entry.summary || 'No summary available.';
                tooltip.append(title, body); document.body.append(tooltip); position(tooltip, anchor.getBoundingClientRect());
            } catch { /* Missing or inaccessible entries have no preview. */ }
        };
        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { close(); hide(); return; }
            if (!menu) return;
            const buttons = [...menu.querySelectorAll('button')];
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault(); event.stopPropagation();
                const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
                buttons[(index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length]?.focus();
            } else if (event.key === 'Enter' && editor.view.dom.contains(event.target as Node)) { event.preventDefault(); event.stopPropagation(); buttons[0]?.click(); }
        };
        const outside = (event: PointerEvent) => { if (!menu?.contains(event.target as Node) && !editor.view.dom.contains(event.target as Node)) close(); };
        editor.on('update', update); editor.on('selectionUpdate', update);
        const dom = editor.view.dom;
        dom.addEventListener('pointerover', hover); dom.addEventListener('focusin', hover);
        dom.addEventListener('pointerout', hide); dom.addEventListener('focusout', hide);
        document.addEventListener('keydown', keydown, true); document.addEventListener('pointerdown', outside);
        window.addEventListener('scroll', hide, true);
        return () => { close(); hide(); editor.off('update', update); editor.off('selectionUpdate', update); dom.removeEventListener('pointerover', hover); dom.removeEventListener('focusin', hover); dom.removeEventListener('pointerout', hide); dom.removeEventListener('focusout', hide); document.removeEventListener('keydown', keydown, true); document.removeEventListener('pointerdown', outside); window.removeEventListener('scroll', hide, true); };
    }, [editor, codex]);
    return null;
}
