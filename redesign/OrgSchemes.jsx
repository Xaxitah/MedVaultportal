// Organization schemes — three ways to structure a discipline's material.
// Small, side-by-side mockups so the user can react. Manrope, minimal.
(function () {
  const Icon = window.Icon;
  const INK = "#16203a";
  const MUTE = "#7b8090";
  const FAINT = "#aeb2bd";
  const LINE = "#ebecf0";
  const ACC = "#0f3460";

  function Frame({ tag, title, when, children }) {
    return (
      <div style={{ background: "#fff", fontFamily: "'Manrope', system-ui, sans-serif", color: INK, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 22px 16px", borderBottom: `1px solid ${LINE}` }}>
          <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: 1.4, color: ACC, textTransform: "uppercase" }}>{tag}</div>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3, marginTop: 5 }}>{title}</div>
          <div style={{ fontSize: 12, color: MUTE, marginTop: 5, lineHeight: 1.5 }}>{when}</div>
        </div>
        <div style={{ padding: "16px 22px 22px", flex: 1 }}>{children}</div>
      </div>
    );
  }

  const ArtChips = () => (
    <div style={{ display: "flex", gap: 6 }}>
      {["Resumo", "Cards", "Quiz"].map((t) => (
        <span key={t} style={{ fontSize: 10, fontWeight: 700, color: MUTE, background: "#f4f5f7", borderRadius: 6, padding: "3px 7px" }}>{t}</span>
      ))}
    </div>
  );

  function StatusDot({ c }) {
    return <span style={{ width: 9, height: 9, borderRadius: 5, border: `2px solid ${c}`, background: c === "#cfd3db" ? "transparent" : c, flexShrink: 0 }} />;
  }

  // 1 — Por Prova → Tema
  function OrgByProva() {
    const temas = [
      ["T06", "AINEs", "#1f8a4c"],
      ["T12", "Opioides", "#1f8a4c"],
      ["T02", "Farmacocinética", "#e2a200"],
      ["T13", "Antidepressivos", "#cfd3db"],
      ["T14", "Anestésicos Locais", "#cfd3db"],
    ];
    return (
      <Frame tag="Esquema 1" title="Por Prova → Tema" when="O atual, refinado. Foco no calendário de provas. Bom quando o que importa é o que cai na P1/P2.">
        <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", background: ACC, borderRadius: 999, padding: "6px 14px" }}>P1 · 16</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: MUTE, background: "#f4f5f7", borderRadius: 999, padding: "6px 14px" }}>P2 · 12</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {temas.map(([n, t, c], i) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderTop: i ? `1px solid ${LINE}` : "none" }}>
              <StatusDot c={c} />
              <span style={{ fontSize: 11, fontWeight: 800, color: FAINT, width: 28, fontVariantNumeric: "tabular-nums" }}>{n}</span>
              <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{t}</span>
              <ArtChips />
            </div>
          ))}
        </div>
      </Frame>
    );
  }

  // 2 — Por Sistema / Aparelho
  function OrgBySystem() {
    const groups = [
      ["Cardiovascular", ["IECA & ARA-II", "Beta-bloqueadores", "Diuréticos"]],
      ["Sistema Nervoso", ["Opioides", "Antidepressivos", "Anticonvulsivantes"]],
      ["Dor & Inflamação", ["AINEs", "Anestésicos Locais"]],
    ];
    return (
      <Frame tag="Esquema 2" title="Por Sistema / Aparelho" when="Cruza P1 e P2 e agrupa por sistema clínico. Bom para raciocínio clínico integrado e revisão por órgão.">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {groups.map(([g, items]) => (
            <div key={g}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: ACC }}>{g}</span>
                <span style={{ flex: 1, height: 1, background: LINE }} />
                <span style={{ fontSize: 10.5, color: FAINT, fontWeight: 700 }}>{items.length}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {items.map((t) => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 700, border: `1px solid ${LINE}`, borderRadius: 9, padding: "7px 11px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Frame>
    );
  }

  // 3 — Por Status (revisão espaçada)
  function OrgByStatus() {
    const cols = [
      ["A estudar", "#cfd3db", ["Antidepressivos", "Anest. Locais", "Anest. Gerais"]],
      ["Revisar", "#e2a200", ["Farmacocinética", "Transportadores"]],
      ["Dominado", "#1f8a4c", ["AINEs", "Opioides"]],
    ];
    return (
      <Frame tag="Esquema 3" title="Por Status · Revisão espaçada" when="Estilo kanban guiado pela memória. Bom para estudo ativo: move o tema conforme você domina.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {cols.map(([title, c, items]) => (
            <div key={title} style={{ background: "#f7f8f9", borderRadius: 12, padding: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <StatusDot c={c} />
                <span style={{ fontSize: 11, fontWeight: 800 }}>{title}</span>
                <span style={{ fontSize: 10, color: FAINT, fontWeight: 700, marginLeft: "auto" }}>{items.length}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {items.map((t) => (
                  <div key={t} style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 9, padding: "9px 10px", fontSize: 11.5, fontWeight: 700, lineHeight: 1.25 }}>{t}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Frame>
    );
  }

  Object.assign(window, { OrgByProva, OrgBySystem, OrgByStatus });
})();
