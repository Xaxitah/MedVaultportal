# MedVault Design System

A design system for **MedVault / MedVaultWeb 2.0** — a Brazilian-Portuguese
medical-study portal ("Segundo Cérebro · Medicina"). It organizes study
artifacts (resumos, infográficos, podcasts, quizzes, flashcards, mapas mentais,
revisões de véspera) by **disciplina** and by **prova** (exam: P1 / P2), for
medical students at UNINTER · Pedro Juan Caballero, Paraguay.

This system captures MedVault's visual language — the dark-navy navigation,
discipline color-coding, emoji-as-iconography, P1/P2 exam badges, and the
quiz/flashcard study widgets — as reusable tokens, React components, and
full-screen UI kits.

## Sources
Built from the attached repository. Explore it for deeper fidelity:
- **GitHub:** https://github.com/Xaxitah/MedVaultWeb (the public web portal — `index.html`, `assets/css/medvault.css`, `quiz.html`, `flashcards.html`, discipline pages)
- Related (private) vault: https://github.com/Xaxitah/MED-Vault — the Obsidian study vault that feeds the portal pipeline (Whisper + Claude Code + Dataview).

> The reader is not assumed to have access to these repos, but URLs are stored
> here so anyone who does can study the originals for higher-fidelity work.

---

## Content Fundamentals
**Language & voice.** All product copy is **Brazilian Portuguese**. Tone is
academic but warm and encouraging — a study companion, not a textbook. It
addresses the student implicitly (imperative/neutral), e.g. *"Toque para ver a
resposta"*, *"Escolha uma ferramenta para começar"*. First person is avoided;
the product speaks to *você* through actions, not pronouns.

**Casing.** Sentence case for body and descriptions. **Discipline and artifact
labels are UPPERCASE** with light letter-spacing (`Farmacologia` card title →
`FARMACOLOGIA`). Section eyebrows are uppercase, tracked, and muted.

**Encouragement & feedback.** Results are framed positively with a tiered emoji
reward: 🏆 (≥80%), 👍 (≥60%), 📚 (otherwise). Quiz feedback is explicit and
instructional — *"✅ Correto — …"* / *"❌ Incorreto — …"* always followed by a
**rationale** (the *why*), never a bare score.

**Emoji are part of the voice, not decoration.** They prefix nearly every label
and stand in for icons (see Iconography). Use them deliberately and
consistently — one emoji per concept.

**Specific examples**
- Discipline blurb: *"Mecanismos de ação, farmacodinâmica e farmacoterapia"*
- Intro box: *"Este portal dá acesso aos materiais de estudo produzidos no MED-Vault."*
- Source credit chips: *"Flórez — Farmacología Humana 6ª ed."*, *"Goodman & Gilman"*
- Empty/pending state: *"🚧 Conteúdo ainda não disponível"*
- Footer: *"MedVaultWeb 2.0 · MED-Vault Pipeline · UNINTER Paraguay"*

---

## Visual Foundations
**Color.** A deep-navy spine (`#1a1a2e → #16213e → #0f3460`) anchors the
sidebar and page headers. Each **discipline owns one saturated color**
(Farmacologia navy `#0f3460`, Semiologia green `#1b5e20`, Urologia purple
`#4a148c`, Ética rust `#bf360c`, Sem. Cirúrgica teal `#006064`) used as the
card's top border and header gradient. Each **artifact type** owns a color too
(Resumo blue, Infográfico olive, Podcast purple, Quiz orange, Flashcard teal,
Mapa indigo, Véspera red). Exams are a two-tone system: **P1 = blue**, **P2 =
purple**, rendered as gradient circular badges and tinted pills. Canvas is a
cool off-white `#f0f2f5`; surfaces are pure white.

**Type.** No webfont ships — MedVault uses the **native UI stack** (`'Segoe UI',
system-ui, …`). This is preserved as brand intent (see token note below).
Weights run 400→**800**; titles are heavy (700–800). Scale spans `0.68rem`
labels to `1.8rem` headers and a `3rem` score number.

**Backgrounds.** Flat color, no textures or photographic backgrounds. The one
recurring flourish is the **135° navy→blue gradient** on the sidebar logo block
and every page header; discipline pages tint that gradient toward the
discipline color. No noise, grain, or blur.

**Cards.** White, `border-radius: 12px`, soft shadow
(`0 2px 8px rgba(0,0,0,.07)`), and a **colored top border** (4px topics, 6px
disciplines) carrying the discipline accent. On hover they **lift** (`translateY(-4px)`)
into a slightly stronger, navy-tinted shadow. Corners are consistently rounded
(6–12px; pills/tabs 20px; badges fully round).

**Borders & dividers.** Hairline `#e0e0e0`. Intro boxes use a **5px left accent
border**; section titles a **4px navy left bar**. Quiz options use a **2px**
border that recolors green/red on answer.

**Elevation.** Two-step: resting `--mv-shadow`, hover `--mv-shadow-hover`, plus a
navy-tinted card-hover shadow. No heavy/dramatic shadows.

**Motion.** Restrained and functional. Card hover/transform transitions ~0.15s;
button/border color changes ~0.12s; progress bars ease width over 0.3s. The
signature animation is the **0.45s `cubic-bezier(.4,0,.2,1)` 3D Y-flip** on
flashcards. No bounces, no infinite/decorative loops.

**Hover / press states.** Links & cards lighten background + lift; sidebar links
gain an indigo left border and brighten text; buttons darken/brighten on hover;
quiz options shift to a light-blue wash with indigo border before answering.

**Transparency.** Used only inside the navy sidebar — `rgba(255,255,255, .06–.45)`
for section labels, dividers, hover fills. Discipline card covers use an 8%
tint of the discipline color. No glassmorphism/backdrop-blur elsewhere.

**Layout.** Fixed 260px sidebar + fluid content (max 1100px). Header → breadcrumb
→ content-area rhythm. Generous 32–44px horizontal padding on desktop. Card
grids are `auto-fill minmax(220–280px, 1fr)`.

---

## Iconography
**Emoji ARE the icon system.** MedVault has no icon font, no SVG sprite, and no
PNG icon set in the repo. Meaning is carried by Unicode emoji used consistently:
- Disciplines: 💊 Farmacologia · 🩺 Semiologia · 🫘 Urologia · ⚖️ Ética · 🔪 Sem. Cirúrgica
- Artifacts/tools: 📄 Resumo · 📊 Infográfico · 🎧 Podcast · 🎯 Quiz · 🃏 Flashcards · 🗺️ Mapa · 🌙 Véspera
- Navigation/system: 🏠 Início · 🧠/🏥 brand · 🐙 Repositório · 💡 Dica · ☰ menu · 🚧 pending · 🏆/👍/📚 scores · ✅/❌ feedback

When designing for MedVault, **keep using emoji as icons** — match the existing
vocabulary rather than introducing a line-icon set. If a true vector icon is ever
required, no brand set exists; flag the gap to the user before substituting one.

**Imagery.** The only raster assets in the repo are clinical reference photos
(surgical-semiology signs). They live in `assets/img/` and read as documentary
photography (warm, textbook-scanned). There are no logos, illustrations, or
marketing imagery — the brand mark is the text **"🧠 MedVault"**.

---

## Index / Manifest
**Root**
- `styles.css` — global entry point; `@import`s all tokens. Consumers link this.
- `README.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for downloadable use.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`

**`guidelines/`** — foundation specimen cards (render in the Design System tab):
Colors (Navy, Disciplines, Artifacts, Neutrals & Status), Type (Scale, Labels),
Spacing (Radii, Elevation).

**`components/`** (React primitives — `window.MedVaultDesignSystem_bafe94`)
- `core/` — **Button**, **Pill**, **ExamBadge**, **FonteTag**
- `cards/` — **DisciplineCard**, **TopicCard**, **IntroBox**
- `navigation/` — **Sidebar** (+ `.Section`, `.Link`), **Tabs**, **Breadcrumb**
- `study/` — **ProgressBar**, **OptionButton**, **Flashcard**

**`assets/img/`** — clinical reference photos (surgical-semiology signs).

**`ui_kits/`** — full-screen interactive recreations
- `portal/` — discipline portal (home grid + discipline detail with P1/P2 topics)
- `study/` — quiz + flashcards study tools

**Starting points:** Button, DisciplineCard, Sidebar, Flashcard, the Portal
screen, and the Study-tools screen.

---

### Note on fonts
MedVaultWeb intentionally ships **no webfont** — it relies on the operating
system's UI font (`Segoe UI` on Windows, San Francisco/system elsewhere). The
type tokens preserve that stack as the brand intent. If you need pixel-identical
rendering across machines and want a hosted webfont substitute, the closest
Google Fonts match for *Segoe UI* is **"Open Sans"** or **"Source Sans 3"** —
flag this substitution and ask before swapping it in.
