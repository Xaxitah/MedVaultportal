# MedVault Portal — UI Kit

Interactive recreation of the **MedVaultWeb** discipline portal (`Xaxitah/MedVaultWeb`).

## Screens
- **Home** — discipline grid with intro box, exam pills.
- **Discipline detail** — page header (discipline-tinted gradient), source chips, P1/P2 tab switch, topic-card grid.

## Interactions
- Click a discipline card or sidebar link → opens that discipline.
- P1/P2 tabs switch the visible topic set.
- Click "Início" → back home.

## Files
- `index.html` — bootstrap (loads React, the DS bundle, `data.js`, `PortalApp.jsx`).
- `data.js` — discipline + sample-topic seed data (`window.MV_DISCIPLINES`, `window.MV_TOPICS`).
- `PortalApp.jsx` — the app; composes `Sidebar`, `DisciplineCard`, `TopicCard`, `IntroBox`, `Tabs`, `Breadcrumb`, `Pill`, `ExamBadge`.

Only Farmacologia has a full topic set in the demo; other disciplines show a "not available" notice — matching the partial state of the source repo.
