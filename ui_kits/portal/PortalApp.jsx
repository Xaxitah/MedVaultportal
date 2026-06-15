// MedVault Portal — interactive recreation of the discipline portal.
// Uses MedVault design-system components from window namespace.
const { Sidebar, DisciplineCard, TopicCard, IntroBox, Tabs, Breadcrumb, Pill, ExamBadge } =
  window.MedVaultDesignSystem_bafe94;

const DISC_GRAD = {
  farm: "linear-gradient(135deg, #0f3460 0%, #1a237e 100%)",
  semi: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
  urol: "linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)",
  etica: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
  semiq: "linear-gradient(135deg, #006064 0%, #00838f 100%)",
};

function PageHeader({ emoji, title, subtitle, gradient }) {
  return (
    <div style={{ background: gradient || "var(--mv-grad-header)", color: "#fff", padding: "40px 44px 32px" }}>
      <h1 style={{ fontSize: "var(--mv-text-2xl)", fontWeight: 800, margin: 0, marginBottom: 6 }}>
        <span aria-hidden="true">{emoji} </span>{title}
      </h1>
      {subtitle ? (
        <p style={{ fontSize: "0.95rem", opacity: 0.78, maxWidth: 640, lineHeight: 1.5, margin: 0 }}>{subtitle}</p>
      ) : null}
    </div>
  );
}

function PortalSidebar({ route, onNavigate }) {
  return (
    <Sidebar brand="MedVault" tagline="Segundo Cérebro · Medicina">
      <Sidebar.Section>Navegação</Sidebar.Section>
      <Sidebar.Link icon="🏠" active={route.view === "home"} onClick={(e) => { e.preventDefault(); onNavigate({ view: "home" }); }}>
        Início
      </Sidebar.Link>
      <Sidebar.Section>Disciplinas</Sidebar.Section>
      {window.MV_DISCIPLINES.map((d) => {
        const badge = d.p1 && d.p2 ? "P1+P2" : d.p1 ? "P1" : "P2";
        return (
          <Sidebar.Link key={d.id} icon={d.emoji} badge={badge}
            active={route.view === "disc" && route.id === d.id}
            onClick={(e) => { e.preventDefault(); onNavigate({ view: "disc", id: d.id }); }}>
            {d.name}
          </Sidebar.Link>
        );
      })}
      <Sidebar.Section>Ferramentas</Sidebar.Section>
      <Sidebar.Link icon="🎯">Quiz</Sidebar.Link>
      <Sidebar.Link icon="🃏">Flashcards</Sidebar.Link>
    </Sidebar>
  );
}

function HomeView({ onNavigate }) {
  return (
    <div>
      <PageHeader emoji="🏥" title="MedVaultWeb"
        subtitle="Portal de acesso aos materiais de estudo de medicina · UNINTER · Pedro Juan Caballero" />
      <div style={{ padding: "10px 44px", background: "#fff", borderBottom: "1px solid var(--mv-border)" }}>
        <Breadcrumb items={["Início"]} />
      </div>
      <div style={{ padding: "32px 44px", maxWidth: "var(--mv-content-max)" }}>
        <IntroBox icon="📖" title="Sobre este portal">
          Acesso aos resumos, infográficos, podcasts, quizzes, mapas mentais e flashcards
          organizados por disciplina e por prova — elaborados a partir de aulas, transcrições,
          slides e livros-texto de referência médica.
        </IntroBox>
        <div style={{
          fontSize: "var(--mv-text-md)", fontWeight: 700, color: "var(--mv-navy-700)",
          borderLeft: "4px solid var(--mv-navy-700)", paddingLeft: 12, margin: "28px 0 16px",
        }}>
          📚 Disciplinas Disponíveis
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {window.MV_DISCIPLINES.map((d) => (
            <DisciplineCard key={d.id} discipline={d.key} emoji={d.emoji} title={d.name} description={d.desc}
              onClick={(e) => { e.preventDefault(); onNavigate({ view: "disc", id: d.id }); }}
              footer={<>
                {d.p1 ? <Pill tone="p1">P1 · {d.p1} temas</Pill> : null}
                {d.p2 ? <Pill tone="p2">P2 · {d.p2} temas</Pill> : null}
              </>} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DisciplineView({ id, onNavigate }) {
  const d = window.MV_DISCIPLINES.find((x) => x.id === id);
  const topics = window.MV_TOPICS[id];
  const hasBoth = d.p1 && d.p2;
  const [tab, setTab] = React.useState(d.p1 ? "p1" : "p2");

  const list = topics ? (topics[tab] || []) : null;

  return (
    <div>
      <PageHeader emoji={d.emoji} title={d.name} subtitle={d.desc} gradient={DISC_GRAD[d.key]} />
      <div style={{ padding: "10px 44px", background: "#fff", borderBottom: "1px solid var(--mv-border)" }}>
        <Breadcrumb items={[
          { label: "Início", href: "#" },
          d.name,
        ]} />
      </div>
      <div style={{ padding: "32px 44px", maxWidth: "var(--mv-content-max)" }}>
        <IntroBox icon={d.emoji} title="Sobre esta disciplina" accent={`var(--mv-${d.key})`}
          sources={d.sources.map((s, i) => <FonteTagInline key={i}>{s}</FonteTagInline>)}>
          {d.desc}. Os artefatos foram elaborados a partir de transcrições de aulas, slides e livros-texto de referência.
        </IntroBox>

        {hasBoth ? (
          <div style={{ margin: "24px 0 18px" }}>
            <Tabs value={tab} onChange={setTab}
              tabs={[{ id: "p1", label: `P1 · ${d.p1} temas` }, { id: "p2", label: `P2 · ${d.p2} temas` }]} />
          </div>
        ) : null}

        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0 14px" }}>
          <ExamBadge exam={tab}>{tab.toUpperCase()}</ExamBadge>
          <h3 style={{ fontSize: "var(--mv-text-lg)", fontWeight: 700, margin: 0, color: "var(--mv-ink)" }}>
            {tab === "p1" ? "Primeira" : "Segunda"} Prova — {tab === "p1" ? d.p1 : d.p2} Temas
          </h3>
        </div>

        {list ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {list.map(([num, title, sub]) => (
              <TopicCard key={num + title} number={num} exam={tab} discipline={d.key} title={title} subtitle={sub}
                tags={<>
                  <Pill tone={tab}>📄 Resumo</Pill>
                  {tab === "p2" ? <Pill tone={tab}>🃏 Flashcards</Pill> : null}
                </>} />
            ))}
          </div>
        ) : (
          <div style={{
            background: "var(--mv-warning-bg)", border: "1px solid var(--mv-warning)",
            borderRadius: "var(--mv-radius-xl)", padding: "20px 24px", color: "var(--mv-warning-ink)",
            fontSize: "var(--mv-text-base)",
          }}>
            🚧 Conteúdo desta disciplina ainda não disponível na demonstração.
          </div>
        )}
      </div>
    </div>
  );
}

function FonteTagInline({ children }) {
  const { FonteTag } = window.MedVaultDesignSystem_bafe94;
  return <FonteTag>{children}</FonteTag>;
}

function PortalApp() {
  const [route, setRoute] = React.useState({ view: "home" });
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--mv-bg)" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", flexShrink: 0 }}>
        <PortalSidebar route={route} onNavigate={setRoute} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {route.view === "home"
          ? <HomeView onNavigate={setRoute} />
          : <DisciplineView id={route.id} onNavigate={setRoute} />}
        <footer style={{
          textAlign: "center", padding: 24, color: "var(--mv-ink-muted)",
          fontSize: "var(--mv-text-sm)", background: "#fff", borderTop: "1px solid var(--mv-border)", marginTop: 40,
        }}>
          MedVaultWeb 2.0 · MED-Vault Pipeline · UNINTER Paraguay
        </footer>
      </div>
    </div>
  );
}

window.PortalApp = PortalApp;
