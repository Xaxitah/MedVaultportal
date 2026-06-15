---
name: medvault-design
description: Use this skill to generate well-branded interfaces and assets for MedVault (MedVaultWeb) — a Brazilian-Portuguese medical-study portal — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- `styles.css` — link this for all design tokens (colors, type, spacing, elevation).
- `tokens/` — the CSS custom properties (`--mv-*`).
- `components/` — React primitives, exported on `window.MedVaultDesignSystem_bafe94` once `_ds_bundle.js` is loaded. Each has a `.prompt.md` with usage.
- `ui_kits/portal/` and `ui_kits/study/` — full interactive screen recreations to copy from.
- `guidelines/` — visual specimen cards.

## Brand essentials
- Brazilian Portuguese copy; academic but encouraging tone; emoji used as the icon system.
- Deep-navy spine; one saturated color per discipline; P1 = blue / P2 = purple exam system.
- White cards, 12px radius, soft shadow, colored top border, hover lift.
- System UI font stack (no webfont). Heavy (700–800) titles, uppercase tracked labels.
