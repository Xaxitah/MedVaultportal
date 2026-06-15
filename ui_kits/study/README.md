# MedVault Study Tools — UI Kit

Interactive recreation of the **quiz** and **flashcards** tools from `Xaxitah/MedVaultWeb` (`quiz.html`, `flashcards.html`).

## Flow
1. **Launcher** — pick Quiz or Flashcards.
2. **Quiz** — multiple-choice with a letter chip, optional hint, instant correct/wrong coloring and a commented rationale, then a score screen (🏆/👍/📚).
3. **Flashcards** — 3D flip cards with "Sabia / Revisar" self-grading and a mastery score screen.

## Files
- `index.html` — bootstrap (React, DS bundle, `data.js`, `StudyApp.jsx`).
- `data.js` — `window.MV_QUIZ` and `window.MV_DECK` sample content (Farmacologia · AINEs).
- `StudyApp.jsx` — launcher + `Quiz` + `Deck` + score screen; composes `ProgressBar`, `OptionButton`, `Flashcard`, `Button`.
