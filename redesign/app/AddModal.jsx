// ============================================================
// MedVault — Modal "Adicionar material"
// Fluxo: escolher disciplina (ou nova) → tipo (inclui "Outros") →
// abrir o Google Drive compartilhado do grupo para subir o arquivo.
// ============================================================
(function () {
  const { THEME, Icon } = window;
  const T = THEME;

  function Field({ label, children }) {
    return (
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.4, color: T.mute, textTransform: "uppercase", marginBottom: 9 }}>{label}</div>
        {children}
      </div>
    );
  }

  function Choice({ active, dot, children, onClick }) {
    return (
      <button onClick={onClick} style={{
        display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 700,
        padding: "9px 14px", borderRadius: 12, cursor: "pointer", fontFamily: T.font,
        color: active ? T.accentInk : T.ink, background: active ? T.accentBg : T.surface,
        border: `1.5px solid ${active ? T.accent : T.line}`,
      }}>
        {dot ? <span style={{ width: 9, height: 9, borderRadius: 5, border: `2px solid ${dot}`, background: active ? dot : "transparent" }} /> : null}
        {children}
      </button>
    );
  }

  function AddModal({ open, onClose, presetDisc }) {
    const [disc, setDisc] = React.useState(presetDisc || "farm");
    const [creatingDisc, setCreatingDisc] = React.useState(false);
    const [newDisc, setNewDisc] = React.useState("");
    const [type, setType] = React.useState("resumo");
    const [title, setTitle] = React.useState("");
    const [files, setFiles] = React.useState([]);
    const fileRef = React.useRef(null);
    React.useEffect(() => { if (open) { setDisc(presetDisc || "farm"); setCreatingDisc(false); setNewDisc(""); setType("resumo"); setTitle(""); setFiles([]); } }, [open, presetDisc]);
    if (!open) return null;

    const types = [...window.MV.artifactTypes, { id: "outros", single: "Outros", icon: "folder", line: T.mute }];

    function goDrive() {
      window.open(window.MV.driveUrl, "_blank", "noopener");
      onClose();
    }

    return (
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(40,42,54,.34)", backdropFilter: "blur(3px)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24,
      }}>
        <div onClick={(e) => e.stopPropagation()} style={{
          width: 560, maxWidth: "100%", maxHeight: "90vh", overflow: "auto", background: T.surface,
          borderRadius: 22, border: `1px solid ${T.line}`, boxShadow: "0 24px 60px rgba(40,42,54,.22)", padding: 28,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, border: `1.6px solid ${T.accent}`, background: T.accentBg,
                display: "flex", alignItems: "center", justifyContent: "center", color: T.accentInk, flexShrink: 0 }}>
                <Icon name="logo" size={30} color={T.accentInk} stroke={1.4} />
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: 24, fontWeight: 500, color: T.ink, letterSpacing: -0.4 }}>Adicionar material</div>
                <div style={{ fontSize: 13, color: T.mute, marginTop: 4 }}>Contribua com o repositório do grupo 💛</div>
              </div>
            </div>
            <button onClick={onClose} style={{ background: T.hoverBg, border: "none", borderRadius: 10, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="close" size={18} color={T.mute} />
            </button>
          </div>

          <Field label="Disciplina">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {window.MV.disciplines.map((d) => (
                <Choice key={d.id} active={!creatingDisc && disc === d.id} dot={d.line} onClick={() => { setCreatingDisc(false); setDisc(d.id); }}>{d.name}</Choice>
              ))}
              <Choice active={creatingDisc} onClick={() => setCreatingDisc(true)}>
                <Icon name="plus" size={15} color={creatingDisc ? T.accentInk : T.ink} /> Nova disciplina
              </Choice>
            </div>
            {creatingDisc ? (
              <input autoFocus value={newDisc} onChange={(e) => setNewDisc(e.target.value)} placeholder="Nome da nova disciplina…"
                style={{ marginTop: 10, width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 12, border: `1.5px solid ${T.line}`, fontSize: 14, fontFamily: T.font, color: T.ink, background: T.surface, outline: "none" }} />
            ) : null}
          </Field>

          <Field label="Tipo de artefato">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {types.map((tp) => (
                <Choice key={tp.id} active={type === tp.id} onClick={() => setType(tp.id)}>
                  <Icon name={tp.icon} size={15} color={tp.line || T.mute} /> {tp.single}
                </Choice>
              ))}
            </div>
          </Field>

          <Field label="Título / tema (opcional)">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: AINEs — resumo completo"
              style={{ width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 12, border: `1.5px solid ${T.line}`, fontSize: 14, fontFamily: T.font, color: T.ink, background: T.surface, outline: "none" }} />
          </Field>

          <Field label="Arquivo">
            <input ref={fileRef} type="file" multiple style={{ display: "none" }}
              onChange={(e) => setFiles(Array.from(e.target.files || []))} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => fileRef.current && fileRef.current.click()} style={{
                display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 700,
                padding: "10px 16px", borderRadius: 12, cursor: "pointer", fontFamily: T.font,
                color: T.accentInk, background: T.accentBg, border: `1.5px dashed ${T.accent}`,
              }}>
                <Icon name="folder" size={16} color={T.accentInk} /> Escolher arquivo…
              </button>
              {files.length > 0 ? (
                <span style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>
                  {files.map((f) => f.name).join(", ")}
                </span>
              ) : (
                <span style={{ fontSize: 12.5, color: T.faint, fontWeight: 600 }}>Nenhum arquivo selecionado</span>
              )}
            </div>
          </Field>

          <div style={{ display: "flex", alignItems: "center", gap: 11, background: T.fieldBg, border: `1px solid ${T.lineSoft}`, borderRadius: 14, padding: "13px 15px", marginBottom: 20 }}>
            <Icon name="folder" size={20} color="#6f9b56" />
            <div style={{ fontSize: 12.5, color: T.mute, lineHeight: 1.5 }}>
              Os arquivos ficam no <b style={{ color: T.ink }}>Google Drive compartilhado</b> do grupo.
              Selecione disciplina e tipo e suba seu material lá — todos terão acesso.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button onClick={onClose} style={{ background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 12, padding: "12px 18px", fontWeight: 700, fontSize: 13.5, color: T.ink, cursor: "pointer", fontFamily: T.font }}>Cancelar</button>
            <button onClick={goDrive} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.btnBg, border: "none", borderRadius: 12, padding: "12px 20px", fontWeight: 700, fontSize: 13.5, color: "#fff", cursor: "pointer", fontFamily: T.font }}>
              <Icon name="external" size={16} color="#fff" /> {files.length > 0 ? "Enviar ao Drive do grupo" : "Abrir Drive do grupo"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  window.MVAddModal = AddModal;
})();
