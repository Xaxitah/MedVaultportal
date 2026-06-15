// MedVault Study Tools — interactive Quiz + Flashcards recreation.
const { ProgressBar, OptionButton, Flashcard, Button } = window.MedVaultDesignSystem_bafe94;

function ToolHeader({ emoji, title, subtitle }) {
  return (
    <div style={{ background: "var(--mv-grad-header)", color: "#fff", padding: "32px 40px 26px" }}>
      <div style={{ fontSize: "var(--mv-text-sm)", opacity: 0.7, marginBottom: 6 }}>
        🏥 MED-Vault › {title}
      </div>
      <h1 style={{ fontSize: "var(--mv-text-2xl)", fontWeight: 800, margin: 0 }}>
        <span aria-hidden="true">{emoji} </span>{title}
      </h1>
      {subtitle ? <p style={{ opacity: 0.78, margin: "6px 0 0", fontSize: "0.95rem" }}>{subtitle}</p> : null}
    </div>
  );
}

function Launcher({ onPick }) {
  const tiles = [
    { id: "quiz", emoji: "🎯", label: "Quiz Interativo", desc: "Questões de múltipla escolha com gabarito comentado", color: "var(--mv-quiz)" },
    { id: "deck", emoji: "🃏", label: "Flashcards", desc: "Cartas de revisão ativa com auto-avaliação", color: "var(--mv-flashcard)" },
  ];
  return (
    <div style={{ padding: "32px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 760 }}>
      {tiles.map((t) => (
        <button key={t.id} onClick={() => onPick(t.id)}
          style={{
            textAlign: "left", cursor: "pointer", background: "var(--mv-surface)",
            border: "1px solid var(--mv-border)", borderTop: `4px solid ${t.color}`,
            borderRadius: "var(--mv-radius-xl)", padding: "24px", boxShadow: "var(--mv-shadow)",
            fontFamily: "var(--mv-font-sans)",
          }}>
          <div style={{ fontSize: "2.6rem", marginBottom: 10 }}>{t.emoji}</div>
          <div style={{ fontSize: "var(--mv-text-md)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.label}</div>
          <div style={{ fontSize: "var(--mv-text-sm)", color: "var(--mv-ink-muted)", marginTop: 6, lineHeight: 1.4 }}>{t.desc}</div>
        </button>
      ))}
    </div>
  );
}

function Quiz({ data, onExit }) {
  const [i, setI] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const q = data.questions[i];
  const answered = picked !== null;
  const correctIdx = q ? q.options.findIndex((o) => o.correct) : -1;

  function choose(idx) {
    if (answered) return;
    setPicked(idx);
    if (q.options[idx].correct) setScore((s) => s + 1);
  }
  function next() {
    if (i + 1 >= data.questions.length) { setDone(true); return; }
    setI(i + 1); setPicked(null); setShowHint(false);
  }
  function restart() { setI(0); setPicked(null); setScore(0); setDone(false); setShowHint(false); }

  if (done) {
    const pct = Math.round((score / data.questions.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    return (
      <ScoreScreen emoji={emoji} pct={pct} sub={`${score} de ${data.questions.length} questões corretas`}
        onRestart={restart} onExit={onExit} restartLabel="🔄 Refazer quiz" />
    );
  }

  return (
    <div style={{ maxWidth: 760, padding: "28px 40px 48px" }}>
      <div style={{ fontSize: "var(--mv-text-xl)", fontWeight: 700, color: "var(--mv-navy-700)", marginBottom: 12 }}>{data.title}</div>
      <ProgressBar value={i} max={data.questions.length} label={`Questão ${i + 1} de ${data.questions.length}`} />
      <div style={{
        background: "var(--mv-surface)", border: "1px solid var(--mv-border)", borderRadius: "var(--mv-radius-xl)",
        padding: "1.75rem 1.5rem", boxShadow: "var(--mv-shadow)", marginTop: 16,
      }}>
        <div style={{ fontSize: "var(--mv-text-md)", lineHeight: 1.65, fontWeight: 500, marginBottom: "1.25rem" }}>{q.question}</div>

        {q.hint ? (
          <div style={{ marginBottom: 12 }}>
            <button onClick={() => setShowHint((h) => !h)} style={{
              background: "none", border: "1px dashed var(--mv-border)", borderRadius: "var(--mv-radius-md)",
              padding: "0.35rem 0.8rem", fontSize: "var(--mv-text-base)", color: "var(--mv-ink-muted)", cursor: "pointer",
              fontFamily: "var(--mv-font-sans)",
            }}>💡 Ver dica</button>
            {showHint ? (
              <div style={{
                fontSize: "var(--mv-text-base)", color: "var(--mv-warning-ink)", background: "var(--mv-warning-bg)",
                border: "1px solid var(--mv-warning)", borderRadius: "var(--mv-radius-md)", padding: "0.6rem 0.9rem", marginTop: "0.4rem",
              }}>{q.hint}</div>
            ) : null}
          </div>
        ) : null}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1rem" }}>
          {q.options.map((opt, idx) => {
            let status = "idle";
            if (answered) {
              if (opt.correct) status = "correct";
              else if (idx === picked) status = "wrong";
              else status = "dimmed";
            }
            return (
              <OptionButton key={idx} letter={String.fromCharCode(65 + idx)} status={status} answered={answered} onClick={() => choose(idx)}>
                {opt.text}
              </OptionButton>
            );
          })}
        </div>

        {answered ? (
          <div style={{
            background: "var(--mv-info-bg)", borderLeft: "3px solid var(--mv-navy-700)", borderRadius: "0 8px 8px 0",
            padding: "0.9rem 1.1rem", fontSize: "var(--mv-text-base)", lineHeight: 1.6, marginBottom: "0.75rem",
          }}>
            <strong style={{ color: q.options[picked].correct ? "var(--mv-success-ink)" : "var(--mv-danger-ink)" }}>
              {q.options[picked].correct ? "✅ Correto" : "❌ Incorreto"}
            </strong>{" — "}
            {q.options[picked].correct ? q.options[picked].rationale : q.options[correctIdx].rationale}
          </div>
        ) : null}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <Button variant="secondary" onClick={onExit} icon="←">Sair</Button>
          <Button variant="primary" disabled={!answered} onClick={next}
            icon={i + 1 < data.questions.length ? "→" : "🏁"}>
            {i + 1 < data.questions.length ? "Próxima" : "Ver resultado"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Deck({ data, onExit }) {
  const [i, setI] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [knew, setKnew] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const card = data.cards[i];

  function mark(ok) {
    if (ok) setKnew((k) => k + 1);
    advance();
  }
  function advance() {
    if (i + 1 >= data.cards.length) { setDone(true); return; }
    setI(i + 1); setFlipped(false);
  }
  function restart() { setI(0); setFlipped(false); setKnew(0); setDone(false); }

  if (done) {
    const pct = Math.round((knew / data.cards.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    return (
      <ScoreScreen emoji={emoji} pct={pct} sub={`${knew} de ${data.cards.length} cartas dominadas`}
        onRestart={restart} onExit={onExit} restartLabel="🔀 Reiniciar" />
    );
  }

  return (
    <div style={{ maxWidth: 720, padding: "28px 40px 48px" }}>
      <div style={{ fontSize: "var(--mv-text-xl)", fontWeight: 700, color: "var(--mv-navy-700)", marginBottom: 12 }}>{data.title}</div>
      <ProgressBar value={i} max={data.cards.length} label={`Carta ${i + 1} de ${data.cards.length}`} />
      <div style={{ marginTop: 16 }}>
        <Flashcard front={card.front} back={card.back} flipped={flipped} onFlip={setFlipped} />
      </div>
      {flipped ? (
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
          <button onClick={() => mark(true)} style={markStyle("var(--mv-success-bg)", "var(--mv-success-ink)")}>✅ Sabia</button>
          <button onClick={() => mark(false)} style={markStyle("var(--mv-danger-bg)", "var(--mv-danger-ink)")}>🔄 Revisar</button>
        </div>
      ) : null}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <Button variant="secondary" onClick={onExit} icon="←">Sair</Button>
        <Button variant="primary" onClick={advance} icon="→">Próxima</Button>
      </div>
    </div>
  );
}

function markStyle(bg, color) {
  return {
    flex: 1, padding: "0.5rem", borderRadius: "var(--mv-radius-md)", border: "none",
    fontSize: "var(--mv-text-base)", fontWeight: 600, cursor: "pointer", background: bg, color,
    fontFamily: "var(--mv-font-sans)",
  };
}

function ScoreScreen({ emoji, pct, sub, onRestart, onExit, restartLabel }) {
  return (
    <div style={{ maxWidth: 600, padding: "28px 40px 48px" }}>
      <div style={{
        textAlign: "center", padding: "3rem 1.5rem", background: "var(--mv-surface)",
        border: "1px solid var(--mv-border)", borderRadius: "var(--mv-radius-xl)", boxShadow: "var(--mv-shadow)",
      }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{emoji}</div>
        <div style={{ fontSize: "var(--mv-text-3xl)", fontWeight: 800, color: "var(--mv-navy-700)" }}>{pct}%</div>
        <div style={{ fontSize: "var(--mv-text-md)", color: "var(--mv-ink-muted)", marginBottom: "2rem" }}>{sub}</div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={onRestart}>{restartLabel}</Button>
          <Button variant="secondary" onClick={onExit} icon="←">Voltar</Button>
        </div>
      </div>
    </div>
  );
}

function StudyApp() {
  const [tool, setTool] = React.useState(null);
  return (
    <div style={{ minHeight: "100vh", background: "var(--mv-bg)" }}>
      <ToolHeader
        emoji={tool === "quiz" ? "🎯" : tool === "deck" ? "🃏" : "📚"}
        title={tool === "quiz" ? "Quiz Interativo" : tool === "deck" ? "Flashcards" : "Ferramentas de Estudo"}
        subtitle={tool ? "Farmacologia · AINEs" : "Escolha uma ferramenta para começar"} />
      {tool === null ? <Launcher onPick={setTool} /> : null}
      {tool === "quiz" ? <Quiz data={window.MV_QUIZ} onExit={() => setTool(null)} /> : null}
      {tool === "deck" ? <Deck data={window.MV_DECK} onExit={() => setTool(null)} /> : null}
    </div>
  );
}

window.StudyApp = StudyApp;
