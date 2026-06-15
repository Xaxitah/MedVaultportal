// ============================================================
// MedVault — dados do protótipo (repositório do grupo de estudos)
// ============================================================
window.MV = {
  student: "Simone",
  group: "Grupo de Estudos · UNINTER · PJC",

  // Link do Google Drive compartilhado (TROCAR pelo real do grupo)
  driveUrl: "https://drive.google.com/drive/folders/SEU-LINK-COMPARTILHADO",

  // Disciplinas — tom pastel + traço (line art) por disciplina
  disciplines: [
    { id: "farm",  name: "Farmacologia",        emblem: "pill",     tint: "#e9effb", line: "#5b7bb0", ink: "#324a73", prova: "P1", dias: 5,  temas: 28 },
    { id: "semi",  name: "Semiologia Médica",    emblem: "stetho",   tint: "#e8f4ea", line: "#5f9670", ink: "#36634a", prova: "P1", dias: 5,  temas: 18 },
    { id: "urol",  name: "Urologia",             emblem: "kidney",   tint: "#f1eaf8", line: "#9070ad", ink: "#5d4276", prova: "P1", dias: 5,  temas: 14 },
    { id: "etica", name: "Ética Médica",         emblem: "scale",    tint: "#fceee7", line: "#c5825f", ink: "#8a4f31", prova: "P1", dias: 5,  temas: 10 },
    { id: "semiq", name: "Semiologia Cirúrgica", emblem: "scalpel",  tint: "#e3f2f1", line: "#569a99", ink: "#326463", prova: "P2", dias: 33, temas: 7  },
  ],

  // Tipos de artefato
  artifactTypes: [
    { id: "resumo",     label: "Resumos",      single: "Resumo",      icon: "book",     tint: "#e9effb", line: "#5b7bb0" },
    { id: "infografico",label: "Infográficos", single: "Infográfico", icon: "trending", tint: "#eaf3e6", line: "#6f9b56" },
    { id: "podcast",    label: "Podcasts",     single: "Podcast",     icon: "headphone",tint: "#f1eaf8", line: "#9070ad" },
    { id: "quiz",       label: "Quizzes",      single: "Quiz",        icon: "target",   tint: "#fcecdf", line: "#c5824f" },
    { id: "flashcards", label: "Flashcards",   single: "Flashcards",  icon: "stack",    tint: "#e3f2f1", line: "#4f9494" },
    { id: "mapa",       label: "Mapas mentais",single: "Mapa mental", icon: "layers",   tint: "#eaecf8", line: "#6a72b8" },
    { id: "pdf",        label: "PDFs",         single: "PDF",         icon: "file",     tint: "#fbe9e6", line: "#c1665f" },
    { id: "slide",      label: "Slides",       single: "Slide",       icon: "presentation", tint: "#f8eccd", line: "#b5893c" },
    { id: "transcricao",label: "Transcrições", single: "Transcrição", icon: "fileText", tint: "#edeef2", line: "#7c8597" },
  ],

  // Temas por disciplina, com os artefatos que existem em cada um
  temas: {
    farm: [
      { n: "T01", t: "Bases Farmacológicas",     arts: ["pdf", "slide", "resumo", "infografico", "mapa"] },
      { n: "T02", t: "Farmacocinética (ADME)",   arts: ["slide", "transcricao", "resumo", "quiz", "flashcards"] },
      { n: "T06", t: "AINEs",                    arts: ["pdf", "slide", "transcricao", "resumo", "infografico", "podcast", "quiz", "flashcards"] },
      { n: "T12", t: "Opioides",                 arts: ["slide", "resumo", "quiz", "flashcards", "mapa"] },
      { n: "T13", t: "Antidepressivos",          arts: ["pdf", "resumo", "podcast"] },
    ],
    semi: [
      { n: "T02", t: "Sinais Vitais",            arts: ["slide", "transcricao", "resumo", "quiz", "infografico"] },
      { n: "T04", t: "Exame do Abdome",          arts: ["pdf", "slide", "resumo", "infografico", "podcast"] },
      { n: "T07", t: "Ausculta Cardíaca",        arts: ["transcricao", "resumo", "flashcards", "podcast"] },
    ],
    urol: [
      { n: "T03", t: "Litíase Urinária",         arts: ["pdf", "slide", "resumo", "infografico", "mapa"] },
      { n: "T05", t: "Infecção Urinária",        arts: ["slide", "resumo", "quiz"] },
      { n: "T08", t: "Hiperplasia Prostática",   arts: ["pdf", "resumo", "flashcards"] },
    ],
    etica: [
      { n: "T01", t: "Código de Ética Médica",   arts: ["pdf", "transcricao", "resumo", "podcast", "quiz"] },
      { n: "T03", t: "Bioética & Autonomia",     arts: ["slide", "resumo", "infografico"] },
    ],
    semiq: [
      { n: "T05", t: "Sinais de Apendicite",     arts: ["pdf", "slide", "resumo", "infografico"] },
      { n: "T06", t: "Abdome Agudo",             arts: ["transcricao", "resumo", "quiz", "mapa"] },
    ],
  },

  // Agenda editável (semeada). Editável localmente no protótipo.
  agenda: [
    { id: 1, date: "2026-06-10", time: "19:00", title: "Revisão AINEs + Opioides", disc: "farm" },
    { id: 2, date: "2026-06-11", time: "20:00", title: "Quiz coletivo — Sinais Vitais", disc: "semi" },
    { id: 3, date: "2026-06-12", time: "18:30", title: "Mapa: Litíase Urinária", disc: "urol" },
    { id: 4, date: "2026-06-13", time: "19:30", title: "Simulado geral P1", disc: "etica" },
    { id: 5, date: "2026-06-17", time: "19:00", title: "Ausculta Cardíaca — prática", disc: "semi" },
    { id: 6, date: "2026-06-19", time: "20:00", title: "Farmacocinética (ADME)", disc: "farm" },
    { id: 7, date: "2026-06-19", time: "21:30", title: "Revisão flashcards Urologia", disc: "urol" },
    { id: 8, date: "2026-06-24", time: "18:30", title: "Abdome Agudo — casos", disc: "semiq" },
    { id: 9, date: "2026-06-26", time: "19:00", title: "Bioética & Autonomia", disc: "etica" },
    { id: 10, date: "2026-07-01", time: "19:30", title: "Simulado final P2", disc: "semiq" },
  ],

  // Biblioteca — resumos comentados, capítulo a capítulo (editável em produção)
  biblioteca: [
    {
      id: "guyton", area: "Fisiologia", titulo: "Tratado de Fisiologia Médica",
      autor: "Guyton & Hall", edicao: "14ª ed.", tint: "#e6f1f3", line: "#4f8f99", ink: "#2f5d65",
      capitulos: [
        { n: "Cap. 5", t: "Potenciais de Membrana e de Ação", pag: "63–78", prova: true,
          resumo: "Gradientes iônicos e a bomba Na⁺/K⁺-ATPase estabelecem o potencial de repouso (≈ −90 mV no músculo). A abertura sequencial de canais de Na⁺ e K⁺ voltagem-dependentes gera o potencial de ação tudo-ou-nada e sua propagação ao longo da membrana.",
          pontos: [
            "O repouso depende sobretudo do vazamento de K⁺ (equação de Nernst/Goldman).",
            "Despolarização: canais rápidos de Na⁺ → overshoot positivo.",
            "Repolarização: inativação do Na⁺ + abertura tardia de K⁺.",
            "Período refratário garante condução unidirecional.",
          ],
          comentario: "Liguei o período refratário com a arritmia que vimos em Semio — explica por que o coração não tetaniza.",
          por: "Lucas", tags: ["Nernst", "canais iônicos"] },
        { n: "Cap. 9–10", t: "Músculo Cardíaco · O Coração como Bomba", pag: "115–132", prova: true,
          resumo: "Acoplamento excitação-contração no miócito, o platô do potencial de ação (Ca²⁺ tipo-L), o ciclo cardíaco e a relação de Frank-Starling entre pré-carga e débito sistólico.",
          pontos: [
            "Platô prolongado evita contração tetânica do miocárdio.",
            "Frank-Starling: mais enchimento diastólico → mais força de ejeção.",
            "Cálcio extracelular dispara liberação de Ca²⁺ do retículo sarcoplasmático.",
          ],
          comentario: "Frank-Starling caiu na P1 do ano passado — vale decorar o gráfico pré-carga × volume sistólico.",
          por: "Simone", tags: ["ciclo cardíaco", "Frank-Starling"] },
        { n: "Cap. 26", t: "Formação da Urina: Filtração Glomerular", pag: "349–364", prova: false,
          resumo: "TFG, forças de Starling no glomérulo e autorregulação do fluxo renal — base para depuração de fármacos e ajuste de dose. Conecta diretamente com Farmacologia e Urologia.",
          pontos: ["TFG ≈ 125 mL/min em adulto saudável.", "Autorregulação miogênica + feedback tubuloglomerular.", "Clearance de creatinina estima a TFG na prática."],
          comentario: "Útil pra Farmaco: o ajuste de dose em nefropata sai daqui.",
          por: "Marina", tags: ["TFG", "clearance"] },
      ],
    },
    {
      id: "rang", area: "Farmacologia", titulo: "Rang & Dale — Farmacologia",
      autor: "Rang, Dale, Ritter", edicao: "9ª ed.", tint: "#e9effb", line: "#5b7bb0", ink: "#324a73",
      capitulos: [
        { n: "Cap. 2", t: "Como os Fármacos Atuam — Princípios Gerais", pag: "6–20", prova: true,
          resumo: "Interação fármaco-receptor: afinidade vs. eficácia, agonistas plenos/parciais, antagonistas competitivos e não competitivos, e as curvas dose-resposta que descrevem potência (EC₅₀) e eficácia máxima.",
          pontos: [
            "Afinidade = ligar-se; eficácia = ativar o receptor.",
            "Antagonista competitivo desloca a curva para a direita (reversível).",
            "Agonista parcial pode agir como antagonista na presença de agonista pleno.",
          ],
          comentario: "Desenhei as 4 curvas dose-resposta no caderno — antagonismo competitivo × não competitivo sempre confunde.",
          por: "André", tags: ["receptores", "dose-resposta"] },
        { n: "Cap. 7", t: "Absorção, Distribuição e Farmacocinética", pag: "104–124", prova: true,
          resumo: "Os quatro processos do ADME, biodisponibilidade, volume de distribuição (Vd), meia-vida e depuração — e como cinética de primeira ordem vs. ordem zero muda o regime de doses.",
          pontos: [
            "Biodisponibilidade oral cai pelo efeito de primeira passagem hepática.",
            "Vd alto → fármaco lipofílico, distribui-se nos tecidos.",
            "Meia-vida orienta o intervalo entre doses e o tempo até o estado de equilíbrio.",
          ],
          comentario: "Cinética de ordem zero (álcool, fenitoína) é pegadinha clássica de prova.",
          por: "Simone", tags: ["ADME", "meia-vida"] },
        { n: "Cap. 26", t: "Anti-inflamatórios — AINEs", pag: "318–334", prova: false,
          resumo: "Inibição da ciclo-oxigenase (COX-1 constitutiva × COX-2 induzível), efeitos analgésico/antipirético/anti-inflamatório e os adversos clássicos: lesão GI, nefrotoxicidade e risco cardiovascular dos coxibes.",
          pontos: ["COX-1 protege a mucosa gástrica — sua inibição causa úlcera.", "Coxibes poupam o estômago, mas elevam risco CV.", "Cuidado em nefropatas e idosos desidratados."],
          comentario: "Casou perfeito com o tema AINEs de Farmaco — usei pra montar os flashcards.",
          por: "Lucas", tags: ["COX", "AINEs"] },
      ],
    },
    {
      id: "porto", area: "Semiologia", titulo: "Porto — Semiologia Médica",
      autor: "Celmo Celeno Porto", edicao: "8ª ed.", tint: "#e8f4ea", line: "#5f9670", ink: "#36634a",
      capitulos: [
        { n: "Cap. 3", t: "Exame Físico Geral e Sinais Vitais", pag: "88–110", prova: true,
          resumo: "Sequência do exame geral (ectoscopia), aferição correta de PA, FC, FR e temperatura, e a interpretação dos achados de fácies, atitude, estado de hidratação e nutrição.",
          pontos: [
            "PA: manguito adequado, repouso de 5 min, evitar erro de tamanho do braçal.",
            "Pulsos: frequência, ritmo, amplitude e simetria.",
            "Fácies típicas orientam hipóteses (ex.: hipertireoidismo, Cushing).",
          ],
          comentario: "A parte de erros de aferição de PA é ouro — caiu na OSCE do semestre passado.",
          por: "Marina", tags: ["sinais vitais", "ectoscopia"] },
        { n: "Cap. 12", t: "Exame Cardiovascular — Ausculta", pag: "234–260", prova: true,
          resumo: "Focos de ausculta, gênese de B1/B2, desdobramentos fisiológicos, B3/B4 e a caracterização de sopros por tempo, foco, irradiação e intensidade (escala de Levine).",
          pontos: [
            "Focos: aórtico, pulmonar, tricúspide e mitral.",
            "B1 = fechamento mitral/tricúspide; B2 = aórtica/pulmonar.",
            "Sopro sistólico em foco mitral irradiando p/ axila → insuficiência mitral.",
          ],
          comentario: "Ouvimos os áudios de sopro junto na sessão — recomendo escutar antes de ler.",
          por: "Simone", tags: ["ausculta", "sopros"] },
        { n: "Cap. 18", t: "Exame do Abdome", pag: "356–382", prova: false,
          resumo: "Sequência semiológica do abdome (inspeção → ausculta → percussão → palpação) e os sinais de irritação peritoneal e visceromegalias.",
          pontos: ["No abdome, ausculta vem ANTES da palpação.", "Sinal de Blumberg sugere irritação peritoneal.", "Piparote e macicez móvel investigam ascite."],
          comentario: "A ordem invertida (ausculta antes) é a pegadinha que todo mundo erra.",
          por: "André", tags: ["abdome", "Blumberg"] },
      ],
    },
    {
      id: "campbell", area: "Urologia", titulo: "Campbell-Walsh — Urologia",
      autor: "Wein, Kavoussi et al.", edicao: "12ª ed.", tint: "#f1eaf8", line: "#9070ad", ink: "#5d4276",
      capitulos: [
        { n: "Cap. 92", t: "Litíase Urinária", pag: "1184–1210", prova: true,
          resumo: "Fisiopatologia da formação de cálculos (supersaturação), tipos (oxalato de cálcio, ácido úrico, estruvita), apresentação clínica da cólica renal e conduta conforme tamanho e localização.",
          pontos: [
            "Oxalato de cálcio é o cálculo mais comum.",
            "Cólica renal: dor lombar em cólica com irradiação para fossa ilíaca/genitália.",
            "Cálculos < 5 mm tendem a eliminação espontânea.",
          ],
          comentario: "Liguei a supersaturação com a aula de fluidos do Guyton — fez sentido na hora.",
          por: "Marina", tags: ["cálculo", "cólica renal"] },
        { n: "Cap. 55", t: "Infecções do Trato Urinário", pag: "720–748", prova: true,
          resumo: "Classificação (ITU baixa × alta, complicada × não complicada), agente mais comum (E. coli), diagnóstico por urocultura e princípios de antibioticoterapia empírica.",
          pontos: [
            "E. coli responde pela maioria das ITUs não complicadas.",
            "Pielonefrite = febre + dor lombar + Giordano positivo.",
            "Urocultura ≥ 10⁵ UFC/mL confirma (com clínica compatível).",
          ],
          comentario: "Conecta com Farmaco: escolha do ATB empírico depende do perfil de resistência local.",
          por: "Lucas", tags: ["ITU", "E. coli"] },
        { n: "Cap. 144", t: "Hiperplasia Prostática Benigna", pag: "2425–2450", prova: false,
          resumo: "HPB e sintomas do trato urinário inferior (LUTS), avaliação por IPSS e toque retal, e o tratamento escalonado: alfa-bloqueadores, inibidores da 5-alfa-redutase e cirurgia (RTU).",
          pontos: ["LUTS: jato fraco, hesitação, noctúria, esvaziamento incompleto.", "Alfa-bloqueador alivia sintoma; finasterida reduz a próstata.", "RTU de próstata é o padrão cirúrgico clássico."],
          comentario: "Bom diferenciar HPB de câncer de próstata — a dupla toque retal + PSA aparece sempre.",
          por: "André", tags: ["HPB", "LUTS"] },
      ],
    },
  ],


  members: [
    { name: "Simone", initials: "S", color: "#5b7bb0" },
    { name: "Lucas",  initials: "L", color: "#5f9670" },
    { name: "Marina", initials: "M", color: "#9070ad" },
    { name: "André",  initials: "A", color: "#c5825f" },
    { name: "Júlia",  initials: "J", color: "#569a99" },
  ],
};
