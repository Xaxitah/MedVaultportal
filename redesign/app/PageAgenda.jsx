// ============================================================
// MedVault — Página: Agenda (editável por qualquer membro)
// Add / editar / remover, persistido localmente (protótipo).
// ============================================================
(function () {
  const { THEME, Icon, PageHead, useAgenda } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const disc = (id) => window.MV.disciplines.find((x) => x.id === id) || { id: "geral", line: T.accent, tint: T.accentBg, name: "Geral", ink: T.accentInk };
  const fmtLong = (d) => { const [y, m, day] = d.split("-"); const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]; return { day, mon: meses[+m - 1] }; };

  const WD = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const ds2 = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const navBtn = { width: 34, height: 34, borderRadius: 9, border: `1.5px solid ${T.line}`, background: T.surface, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" };
  const navGhost = { padding: "0 13px", height: 34, borderRadius: 9, border: `1.5px solid ${T.line}`, background: T.surface, cursor: "pointer", fontWeight: 700, fontSize: 12.5, color: T.mute, fontFamily: T.font };

  function MonthCalendar({ items, selected, onSelect }) {
    const todayStr = ds2(new Date());
    const base = selected || (items[0] && items[0].date) || todayStr;
    const [cur, setCur] = React.useState(() => { const [y, m] = base.split("-").map(Number); return { y, m: m - 1 }; });

    const byDate = {};
    items.forEach((it) => { (byDate[it.date] = byDate[it.date] || []).push(it); });

    const startDow = new Date(cur.y, cur.m, 1).getDay();
    const dim = new Date(cur.y, cur.m + 1, 0).getDate();
    const rows = Math.ceil((startDow + dim) / 7);
    const start = new Date(cur.y, cur.m, 1 - startDow);
    const cells = [];
    for (let i = 0; i < rows * 7; i++) { const d = new Date(start); d.setDate(start.getDate() + i); cells.push(d); }
    const move = (delta) => setCur((c) => { const d = new Date(c.y, c.m + delta, 1); return { y: d.getFullYear(), m: d.getMonth() }; });

    return (
      <div style={{ background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 18, padding: "18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 600, color: T.ink, letterSpacing: -0.3, whiteSpace: "nowrap" }}>
            {MES[cur.m]} <span style={{ color: T.mute, fontWeight: 500 }}>{cur.y}</span>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <button onClick={() => { const d = new Date(); setCur({ y: d.getFullYear(), m: d.getMonth() }); }} style={navGhost}>Hoje</button>
            <button onClick={() => move(-1)} style={navBtn} aria-label="Mês anterior"><Icon name="chevronLeft" size={18} color={T.mute} /></button>
            <button onClick={() => move(1)} style={navBtn} aria-label="Próximo mês"><Icon name="chevronRight" size={18} color={T.mute} /></button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
          {WD.map((w) => <div key={w} style={{ textAlign: "center", fontSize: 11, fontWeight: 800, letterSpacing: 0.5, color: T.faint, textTransform: "uppercase", paddingBottom: 4 }}>{w}</div>)}
          {cells.map((d, i) => {
            const str = ds2(d);
            const inMonth = d.getMonth() === cur.m;
            const evs = byDate[str] || [];
            const isToday = str === todayStr;
            const isSel = str === selected;
            return (
              <button key={i} onClick={() => onSelect(str)} style={{
                position: "relative", aspectRatio: "1 / 1", borderRadius: 11, cursor: "pointer", fontFamily: T.font,
                border: isSel ? `1.5px solid ${T.accentInk}` : (isToday ? `1.5px solid ${T.accentBorder}` : "1.5px solid transparent"),
                background: isSel ? T.accentBg : (evs.length ? T.fieldBg : "transparent"),
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
                opacity: inMonth ? 1 : 0.32, transition: "background .12s ease",
              }}>
                <span style={{ fontSize: 13.5, fontWeight: (isToday || isSel) ? 800 : 600, color: isSel ? T.accentInk : T.ink }}>{d.getDate()}</span>
                <span style={{ display: "flex", gap: 3, height: 6, alignItems: "center" }}>
                  {evs.slice(0, 3).map((e, j) => <span key={j} style={{ width: 6, height: 6, borderRadius: 3, background: disc(e.disc).line }} />)}
                  {evs.length > 3 ? <span style={{ fontSize: 9, fontWeight: 800, color: T.mute }}>+{evs.length - 3}</span> : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function Row({ it, store }) {
    const [edit, setEdit] = React.useState(false);
    const [f, setF] = React.useState(it);
    const d = disc(it.disc);
    const dd = fmtLong(it.date);
    React.useEffect(() => setF(it), [it]);

    if (edit) {
      return (
        <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "14px 16px", background: T.fieldBg, border: `1.5px solid ${T.line}`, borderRadius: 14, flexWrap: "wrap" }}>
          <input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} style={inp(120)} />
          <input type="time" value={f.time} onChange={(e) => setF({ ...f, time: e.target.value })} style={inp(90)} />
          <input value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="Título" style={{ ...inp(0), flex: 1, minWidth: 160 }} />
          <select value={f.disc} onChange={(e) => setF({ ...f, disc: e.target.value })} style={inp(150)}>
            {window.MV.disciplines.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
            <option value="geral">Geral</option>
          </select>
          <button onClick={() => { store.update(it.id, f); setEdit(false); }} style={btn(T.btnBg, "#fff")}><Icon name="check" size={16} color="#fff" /></button>
          <button onClick={() => { setF(it); setEdit(false); }} style={btn(T.surface, T.mute, T.line)}><Icon name="close" size={16} color={T.mute} /></button>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 16px", background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 14 }}>
        <div style={{ width: 50, textAlign: "center", flexShrink: 0 }}>
          <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 600, color: T.ink, lineHeight: 1 }}>{dd.day}</div>
          <div style={{ fontSize: 11, color: T.mute, fontWeight: 700, textTransform: "uppercase" }}>{dd.mon}</div>
        </div>
        <div style={{ borderLeft: `3px solid ${d.line}`, paddingLeft: 14, flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: T.ink, letterSpacing: -0.2 }}>{it.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 3 }}>
            <span style={{ fontSize: 12, color: T.mute, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 5 }}><Icon name="clock" size={13} color={T.mute} /> {it.time}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: d.ink, background: d.tint, borderRadius: 999, padding: "2px 10px" }}>{d.name}</span>
          </div>
        </div>
        <button onClick={() => setEdit(true)} style={ghost()}><Icon name="edit" size={16} color={T.mute} /></button>
        <button onClick={() => store.remove(it.id)} style={ghost()}><Icon name="trash" size={16} color={T.mute} /></button>
      </div>
    );
  }

  function AddForm({ store }) {
    const [open, setOpen] = React.useState(false);
    const today = new Date().toISOString().slice(0, 10);
    const [f, setF] = React.useState({ date: today, time: "19:00", title: "", disc: "farm" });
    if (!open) {
      return (
        <button onClick={() => setOpen(true)} style={{
          width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: T.accentBg, border: `1.5px dashed ${T.accentBorder}`, borderRadius: 14, padding: "15px", cursor: "pointer",
          fontWeight: 700, fontSize: 14, color: T.accentInk, fontFamily: T.font, marginBottom: 18,
        }}><Icon name="plus" size={18} color={T.accentInk} /> Adicionar compromisso</button>
      );
    }
    return (
      <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "16px", background: T.fieldBg, border: `1.5px solid ${T.line}`, borderRadius: 14, flexWrap: "wrap", marginBottom: 18 }}>
        <input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} style={inp(120)} />
        <input type="time" value={f.time} onChange={(e) => setF({ ...f, time: e.target.value })} style={inp(90)} />
        <input autoFocus value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="O que vão estudar?" style={{ ...inp(0), flex: 1, minWidth: 180 }} />
        <select value={f.disc} onChange={(e) => setF({ ...f, disc: e.target.value })} style={inp(150)}>
          {window.MV.disciplines.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
          <option value="geral">Geral</option>
        </select>
        <button disabled={!f.title.trim()} onClick={() => { store.add(f); setF({ date: today, time: "19:00", title: "", disc: "farm" }); setOpen(false); }}
          style={{ ...btn(f.title.trim() ? T.btnBg : T.line, "#fff"), padding: "10px 16px", width: "auto", gap: 7, fontSize: 13.5, fontWeight: 700 }}>
          <Icon name="check" size={16} color="#fff" /> Salvar
        </button>
        <button onClick={() => setOpen(false)} style={btn(T.surface, T.mute, T.line)}><Icon name="close" size={16} color={T.mute} /></button>
      </div>
    );
  }

  function Agenda() {
    const store = useAgenda();
    const items = store.get();
    const [sel, setSel] = React.useState(null);
    const shown = sel ? items.filter((i) => i.date === sel) : items;
    const selLabel = sel ? (() => { const [y, m, d] = sel.split("-"); return `${+d} de ${MES[+m - 1]}`; })() : null;
    return (
      <div style={{ padding: "30px 38px 48px", maxWidth: 880 }}>
        <PageHead title="Agenda do grupo" subtitle="Combine sessões de estudo. Qualquer membro pode adicionar, editar ou remover." />
        <AddForm store={store} />
        <MonthCalendar items={items} selected={sel} onSelect={(d) => setSel(sel === d ? null : d)} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, margin: "26px 0 12px" }}>
          <div style={{ fontFamily: T.serif, fontSize: 21, fontWeight: 600, color: T.ink, letterSpacing: -0.3 }}>{sel ? selLabel : "Próximos compromissos"}</div>
          {sel ? <button onClick={() => setSel(null)} style={{ ...navGhost, color: T.accentInk, borderColor: T.accentBorder }}>Ver todos</button> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {shown.map((it) => <Row key={it.id} it={it} store={store} />)}
          {shown.length === 0 ? <div style={{ fontSize: 14, color: T.mute, textAlign: "center", padding: "30px 0" }}>{sel ? "Nenhum compromisso neste dia." : "Nenhum compromisso. Que tal marcar uma revisão? 📚"}</div> : null}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, fontSize: 12, color: T.faint }}>
          <Icon name="user" size={14} color={T.faint} /> Edição compartilhada — no protótipo as mudanças ficam neste navegador.
        </div>
      </div>
    );
  }

  function inp(w) { return { padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${T.line}`, fontSize: 13.5, fontFamily: T.font, color: T.ink, outline: "none", width: w || undefined, boxSizing: "border-box", background: T.surface, colorScheme: "light dark" }; }
  function btn(bg, color, border) { return { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: bg, color, border: border ? `1.5px solid ${border}` : "none", cursor: "pointer" }; }
  function ghost() { return { width: 36, height: 36, borderRadius: 9, background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }; }

  window.MVPages.Agenda = Agenda;
})();
