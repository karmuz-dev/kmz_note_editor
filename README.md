# KMZ Note Editor

Reusable Notes workspace shared by KMZ World and World Codex. It includes the
TipTap/Markdown editor, note list, folders, templates, sharing, pop-out notes,
and linked PlayerStats/GameStats behaviour.

The package is host-agnostic. The consuming app supplies UI, authenticated REST
requests, WebSocket lifecycle, game-stat fetchers, and an event-bus adapter.
It owns the shared generated protobuf schema used for its note and player-stat
messages, so KMZ World and World Codex use identical wire messages.

```tsx
<NoteWorkspaceProvider host={hostAdapter}>
  <NoteWorkspace
    playerId={playerId}
    playerName={playerName}
    roomId={roomId}
    roomPlayers={roomPlayers}
  />
</NoteWorkspaceProvider>
```

`NoteWorkspaceHost` documents the required application boundary. Its
`requestJson` receives a relative KMZ API path: the host attaches auth and its
own base URL. The browser never receives a KMZ integration API key.

Pass `noteId` to lock the workspace to one note. Locked mode removes the note
tabs, search, list, folders, and create controls, which is useful for embedding
a character sheet on a character page. Without `noteId`, the full workspace is
shown and its note list can be searched by note title/content. While note search
is active, `Find folder` opens an independent destination-folder search so a
matching note can be dragged into a separately searched folder. `initialNoteId`
selects a note on first render without locking the workspace.

Workspace searches are server-side. The host must pass the complete query string
through for `GET /room/:roomId/notes`, including `playerId`, `q`, and
`searchScope` (`notes`, `folders`, or `both`). Search responses use the normal
`{ notes, noteFolders }` shape, but only contain matching display results.
The workspace sends note and destination-folder searches as separate requests,
using `notes` and `folders` respectively.

`NoteEditor` and `NoteEditorProvider` remain exported for applications that
only need the editing surface. `NoteWorkspace` is the normal integration for
both KMZ World and World Codex.

The package entry point imports the editor stylesheet, including a small
compiled Tailwind utility bundle. It is scoped under `.kmz-note-theme`, so it
does not reset or otherwise alter the host application's page styling. Hosts
that load the editor through a dynamic island should also import
`./styles.css` and `./utilities.css` from that island entry point.
