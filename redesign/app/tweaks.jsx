// ============================================================
// MedVault — Tweaks bridge
// Três controles expressivos que reformulam a sensação do app:
//   1. Atmosfera  — temperatura + claro/escuro (paleta inteira)
//   2. Sotaque    — cor de marca (acento)
//   3. Tipografia — voz tipográfica (títulos serifados x diretos)
// Estratégia: muta window.THEME no lugar e dispara "mv-rerender",
// já que todos os componentes leem T.* no render.
// ============================================================
(function () {
  const { TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect, useTweaks } = window;

  // ---- helpers de cor ----
  const hx = (h) => { h = h.replace("#", ""); if (h.length === 3) h = h.split("").map((c) => c + c).join(""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
  const toHex = (a) => "#" + a.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, t) => { const A = hx(a), B = hx(b); return toHex([0, 1, 2].map((i) => A[i] + (B[i] - A[i]) * t)); };
  const darken = (h, t) => mix(h, "#000000", t);

  // ---- atmosferas (tokens neutros, independem do acento) ----
  const ATMOS = {
    cozy:   { bg: "#fbfaf7", surface: "#ffffff", ink: "#33384a", mute: "#8b8f9e", faint: "#b9bcc7", line: "#e7e4dd", lineSoft: "#f0ede6", dark: false },
    clinic: { bg: "#eef2f6", surface: "#ffffff", ink: "#222b37", mute: "#67707c", faint: "#a6aeba", line: "#e1e6ec", lineSoft: "#eaeff4", dark: false },
    night:  { bg: "#14161d", surface: "#1e212b", ink: "#e8eaf1", mute: "#99a0ae", faint: "#646b79", line: "#2c313c", lineSoft: "#262b35", dark: true },
  };

  // ---- acentos de marca ----
  const ACCENTS = ["#7d8bb5", "#6f9b80", "#6a8fc0", "#c39a52"]; // lavanda · verde · azul · âmbar

  const SERIF = "'Newsreader', Georgia, serif";

  // favicon d: SVG da variante escolhida, na cor do acento
  function setFavicon(variant, color) {
    if (!window.MVLogoFavicon) return;
    let l = document.querySelector('link[rel="icon"]');
    if (!l) { l = document.createElement("link"); l.rel = "icon"; document.head.appendChild(l); }
    l.type = "image/svg+xml";
    l.href = window.MVLogoFavicon(variant, color);
  }

  function applyTheme(t) {
    const base = ATMOS[t.atmosfera] || ATMOS.cozy;
    const accent = ACCENTS.includes(t.sotaque) ? t.sotaque : ACCENTS[0];
    const T = window.THEME;
    if (!T) return;

    T.bg = base.bg; T.surface = base.surface; T.ink = base.ink;
    T.mute = base.mute; T.faint = base.faint; T.line = base.line; T.lineSoft = base.lineSoft;
    T.accent = accent;

    if (base.dark) {
      T.accentInk = mix(accent, "#ffffff", 0.42);          // texto de acento claro
      T.btnBg = accent;                                    // botão sólido (texto branco)
      T.accentBg = mix(base.surface, accent, 0.24);        // superfície tingida escura
      T.accentBorder = mix(base.surface, accent, 0.44);
      T.hoverBg = mix(base.bg, accent, 0.14);
      T.fieldBg = mix(base.surface, "#ffffff", 0.05);
    } else {
      T.accentInk = darken(accent, 0.34);                  // texto de acento escuro
      T.btnBg = darken(accent, 0.26);
      T.accentBg = mix(base.surface, accent, 0.13);        // tinta clara
      T.accentBorder = mix(base.surface, accent, 0.28);
      T.hoverBg = mix(base.surface, accent, 0.06);
      T.fieldBg = mix(base.bg, accent, 0.05);
    }

    T.serif = (t.tipografia === "Direto") ? T.font : SERIF;

    T.logo = t.logotipo || "coracao";
    setFavicon(T.logo, T.accentInk);

    document.body.style.background = base.bg;
    window.dispatchEvent(new Event("mv-rerender"));
  }

  // aplica imediatamente (antes do app montar) com os valores persistidos
  applyTheme(window.MV_TWEAKS || {});
  window.MVApplyTheme = applyTheme;

  function TweaksMount() {
    const [t, setTweak] = useTweaks(window.MV_TWEAKS);
    const set = (key, val) => { const next = { ...t, [key]: val }; setTweak(key, val); applyTheme(next); };
    return (
      <TweaksPanel title="Tweaks">
        <TweakSection label="Atmosfera" />
        <TweakRadio label="Clima" value={t.atmosfera}
          options={[{ value: "cozy", label: "Quente" }, { value: "clinic", label: "Clínico" }, { value: "night", label: "Noturno" }]}
          onChange={(v) => set("atmosfera", v)} />
        <TweakSection label="Sotaque de marca" />
        <TweakColor label="Acento" value={t.sotaque} options={ACCENTS}
          onChange={(v) => set("sotaque", v)} />
        <TweakSection label="Logomarca" />
        <TweakSelect label="Símbolo" value={t.logotipo || "coracao"}
          options={(window.MV_LOGOS_META || []).map((m) => ({ value: m.id, label: m.label }))}
          onChange={(v) => set("logotipo", v)} />
        <TweakSection label="Tipografia" />
        <TweakRadio label="Voz" value={t.tipografia}
          options={[{ value: "Editorial", label: "Editorial" }, { value: "Direto", label: "Direto" }]}
          onChange={(v) => set("tipografia", v)} />
      </TweaksPanel>
    );
  }

  window.MVTweaksMount = TweaksMount;
})();
