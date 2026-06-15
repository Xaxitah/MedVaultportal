// ============================================================
// MedVault — Página: Materiais. Lista resumos, mapas mentais,
// revisões de véspera, questões e flashcards do MED-Vault real,
// carregados a partir de /content-manifest.json.
// ============================================================
(function () {
  const { THEME, Icon, PageHead, Topbar, MVPill } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const MATERIAL_TIPOS = ["resumo", "mapa-mental", "revisao-para-prova", "questao", "flashcard"];

  function provaPillStyle(prova) {
    const p = (prova || "").toLowerCase();
    if (p === "p1") return { background: "linear-gradient(135deg,#4a90e2,#2563eb)", color: "#fff" };
    if (p === "p2") return { background: "linear-gradient(135deg,#a855f7,#7c3aed)", color: "#fff" };
    if (p === "p3") return { background: "linear-gradient(135deg,#ef4444,#b91c1c)", color: "#fff" };
    return { background: T.surface, color: T.mute, border: `1px solid ${T.line}` };
  }

  function MaterialCard({ m }) {
    const disc = window.MV_DISC_HEX[m.disciplina] || window.MV_DISC_HEX["outros"];
    const discLabel = window.MV_DISC_LABEL[m.disciplina] || m.disciplina;
    const [h, setH] = React.useState(false);
    return (
      <a href={m.url} target="_blank" rel="noopener"
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          background: T.surface, border: `1.5px solid ${h ? disc.line : T.line}`,
          borderTop: `4px solid ${disc.line}`,
          borderRadius: 16, padding: "16px 18px",
          display: "flex", flexDirection: "column", gap: 12,
          transition: "transform .14s ease, border-color .14s ease, box-shadow .14s ease",
          transform: h ? "translateY(-2px)" : "none",
          boxShadow: h ? "0 6px 20px rgba(0,0,0,.08)" : "0 1px 4px rgba(0,0,0,.04)",
          textDecoration: "none", color: "inherit", cursor: "pointer",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {m.prova ? (
            <span style={{ ...provaPillStyle(m.prova), fontSize: 11, fontWeight: 800, letterSpacing: ".05em",
              padding: "3px 9px", borderRadius: 999 }}>{m.prova}</span>
          ) : null}
          <span style={{ fontSize: 10.5, fontWeight: 800, color: disc.ink, background: disc.tint, padding: "2px 8px",
            borderRadius: 6, textTransform: "uppercase", letterSpacing: ".05em" }}>{discLabel}</span>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: T.mute, background: T.hoverBg, padding: "2px 8px",
            borderRadius: 6, textTransform: "uppercase", letterSpacing: ".04em" }}>{m.tipoLabel}</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: T.ink, lineHeight: 1.35, letterSpacing: -0.2 }}>{m.title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8,
          borderTop: `1px solid ${T.lineSoft}` }}>
          <span style={{ fontSize: 11.5, color: T.faint, fontWeight: 600 }}>
            {m.status && m.status !== "finalizado" ? m.status : "abrir"}
          </span>
          <Icon name="arrowRight" size={14} color={disc.line} />
        </div>
      </a>
    );
  }

  function Materiais() {
    const [manifest, setManifest] = React.useState(window.MV_MANIFEST);
    const [add, setAdd] = React.useState(false);
    const [fd, setFd] = React.useState("all");
    const [ft, setFt] = React.useState("all");
    const [fp, setFp] = React.useState("all");
    const [q, setQ] = React.useState("");
    const AddModal = window.MVAddModal;

    React.useEffect(() => {
      if (!manifest) window.MV_MANIFEST_LOAD().then(setManifest);
    }, []);

    if (!manifest) {
      return (
        <div style={{ padding: "60px 38px", textAlign: "center", color: T.mute, fontFamily: T.font }}>
          <div style={{ fontSize: 14 }}>Carregando materiais…</div>
        </div>
      );
    }

    const all = manifest.filter((x) => MATERIAL_TIPOS.includes(x.tipo));
    const discs = Array.from(new Set(all.map((x) => x.disciplina))).filter((x) => x !== "outros").sort();
    const tipos = Array.from(new Set(all.map((x) => x.tipo)));
    const provas = Array.from(new Set(all.map((x) => x.prova).filter(Boolean))).sort();

    const ql = q.trim().toLowerCase();
    const list = all.filter((m) => {
      if (fd !== "all" && m.disciplina !== fd) return false;
      if (ft !== "all" && m.tipo !== ft) return false;
      if (fp !== "all" && m.prova !== fp) return false;
      if (ql && !(m.title.toLowerCase().includes(ql) || (m.fonte || "").toLowerCase().includes(ql))) return false;
      return true;
    });

    return (
      <div style={{ padding: "30px 38px 48px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
          <Topbar onAdd={() => setAdd(true)} />
        </div>
        <PageHead title="Materiais" subtitle={`${all.length} materiais de estudo importados do MED-Vault.`} />

        {/* busca */}
        <div style={{ display: "flex", alignItems: "center", gap: 11, background: T.surface, border: `1.5px solid ${T.line}`,
          borderRadius: 14, padding: "11px 16px", color: T.mute, fontSize: 14, marginBottom: 18, maxWidth: 520 }}>
          <Icon name="search" size={18} color={T.faint} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar tema, resumo, fonte…"
            style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, fontFamily: T.font,
              color: T.ink, width: "100%" }} />
        </div>

        {/* filtros disciplina */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <MVPill active={fd === "all"} onClick={() => setFd("all")}>Todas</MVPill>
          {discs.map((d) => {
            const dHex = window.MV_DISC_HEX[d] || window.MV_DISC_HEX["outros"];
            return <MVPill key={d} active={fd === d} dot={dHex.line} onClick={() => setFd(d)}>
              {window.MV_DISC_LABEL[d] || d}
            </MVPill>;
          })}
        </div>

        {/* filtros prova */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 1, color: T.faint, textTransform: "uppercase",
            marginRight: 4 }}>Prova</span>
          <MVPill active={fp === "all"} onClick={() => setFp("all")}>Todas</MVPill>
          {provas.map((p) => <MVPill key={p} active={fp === p} onClick={() => setFp(p)}>{p}</MVPill>)}
        </div>

        {/* filtros tipo */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 26 }}>
          <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 1, color: T.faint, textTransform: "uppercase",
            marginRight: 4 }}>Tipo</span>
          <MVPill active={ft === "all"} onClick={() => setFt("all")}>Todos</MVPill>
          {tipos.map((tp) => <MVPill key={tp} active={ft === tp} onClick={() => setFt(tp)}>
            {window.MV_TIPO_LABEL[tp] || tp}
          </MVPill>)}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 15, fontWeight: 800 }}>{list.length} materiais</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {list.slice(0, 200).map((m) => <MaterialCard key={m.url} m={m} />)}
        </div>
        {list.length > 200 ? (
          <div style={{ marginTop: 20, fontSize: 13, color: T.mute, textAlign: "center" }}>
            Mostrando 200 de {list.length}. Use os filtros para afinar.
          </div>
        ) : null}

        {AddModal ? <AddModal open={add} onClose={() => setAdd(false)} presetDisc={fd === "all" ? null : fd} /> : null}
      </div>
    );
  }

  window.MVPages.Materiais = Materiais;
})();
