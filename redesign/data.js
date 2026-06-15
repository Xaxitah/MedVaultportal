// Shared seed data for the MedVault redesign concepts.
window.MV_RD = {
  student: "Simone",
  disciplines: [
    { id: "farm",  name: "Farmacologia",        accent: "#0f3460", desc: "Mecanismos de ação, farmacodinâmica e farmacoterapia",
      progress: 62, temas: 28, feitos: 17, prova: "P1", dias: 5,  slot: "rd-cover-farm",  hint: "comprimidos / medicação" },
    { id: "semi",  name: "Semiologia Médica",    accent: "#1b5e20", desc: "Propedêutica, exame físico e semiologia dos sistemas",
      progress: 45, temas: 18, feitos: 8,  prova: "P1", dias: 5,  slot: "rd-cover-semi",  hint: "estetoscópio / exame físico" },
    { id: "urol",  name: "Urologia",             accent: "#4a148c", desc: "Patologias do trato urinário e sistema reprodutor",
      progress: 30, temas: 14, feitos: 4,  prova: "P1", dias: 5,  slot: "rd-cover-urol",  hint: "anatomia renal / rim" },
    { id: "etica", name: "Ética Médica",         accent: "#bf360c", desc: "Princípios, deontologia e bioética médica",
      progress: 80, temas: 10, feitos: 8,  prova: "P1", dias: 5,  slot: "rd-cover-etica", hint: "balança / justiça" },
    { id: "semiq", name: "Semiologia Cirúrgica", accent: "#006064", desc: "Exame físico cirúrgico e propedêutica",
      progress: 20, temas: 7,  feitos: 1,  prova: "P2", dias: 33, slot: "rd-cover-semiq", hint: "centro cirúrgico / bisturi",
      src: "assets/img/signo-psoas.jpg" },
  ],

  // Tipos de artefato disponíveis por tema (cor + ícone do set window.Icon)
  artifactTypes: [
    { id: "resumo",     label: "Resumo",      icon: "book",     color: "#1565c0" },
    { id: "infografico",label: "Infográfico", icon: "trending", color: "#558b2f" },
    { id: "podcast",    label: "Podcast",     icon: "play",     color: "#6a1b9a" },
    { id: "quiz",       label: "Quiz",        icon: "target",   color: "#e65100" },
    { id: "flashcards", label: "Flashcards",  icon: "stack",    color: "#00695c" },
    { id: "mapa",       label: "Mapa mental", icon: "layers",   color: "#283593" },
    { id: "vespera",    label: "Véspera",     icon: "clock",    color: "#c62828" },
  ],

  // Materiais (temas) com os artefatos que existem em cada um
  materials: [
    { tema: "T06", title: "AINEs", disc: "farm", arts: ["resumo", "infografico", "podcast", "quiz", "flashcards"], files: 9, when: "há 2 h" },
    { tema: "T12", title: "Opioides", disc: "farm", arts: ["resumo", "quiz", "flashcards", "mapa"], files: 6, when: "há 5 h" },
    { tema: "T03", title: "Diuréticos", disc: "farm", arts: ["resumo", "flashcards"], files: 3, when: "ontem" },
    { tema: "T04", title: "Exame do Abdome", disc: "semi", arts: ["resumo", "infografico", "podcast"], files: 5, when: "ontem" },
    { tema: "T02", title: "Sinais Vitais", disc: "semi", arts: ["resumo", "quiz", "vespera"], files: 4, when: "há 2 d" },
    { tema: "T07", title: "Litíase Urinária", disc: "urol", arts: ["resumo", "infografico", "mapa"], files: 4, when: "há 3 d" },
    { tema: "T01", title: "Código de Ética", disc: "etica", arts: ["resumo", "podcast", "quiz", "vespera"], files: 5, when: "há 3 d" },
    { tema: "T05", title: "Sinais de Apendicite", disc: "semiq", arts: ["resumo", "infografico"], files: 3, when: "há 4 d" },
  ],

  // Feed colaborativo do grupo de estudos
  members: [
    { name: "Simone",  initials: "S", color: "#0f3460" },
    { name: "Lucas",   initials: "L", color: "#1b5e20" },
    { name: "Marina",  initials: "M", color: "#4a148c" },
    { name: "André",   initials: "A", color: "#bf360c" },
    { name: "Júlia",   initials: "J", color: "#006064" },
  ],
  feed: [
    { who: "Marina", day: "Hoje", art: "resumo",      tema: "AINEs",            disc: "farm",  when: "há 2 h" },
    { who: "Lucas",  day: "Hoje", art: "flashcards",  tema: "Opioides",         disc: "farm",  when: "há 5 h" },
    { who: "Simone", day: "Hoje", art: "infografico", tema: "Exame do Abdome",  disc: "semi",  when: "há 6 h" },
    { who: "André",  day: "Ontem", art: "quiz",       tema: "Sinais Vitais",    disc: "semi",  when: "ontem 21h" },
    { who: "Júlia",  day: "Ontem", art: "podcast",    tema: "Código de Ética",  disc: "etica", when: "ontem 18h" },
  ],
};
