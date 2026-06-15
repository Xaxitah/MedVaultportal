// MedVault portal seed data — disciplines and a sample topic set.
window.MV_DISCIPLINES = [
  { id: "farmacologia", key: "farm", emoji: "💊", name: "Farmacologia",
    desc: "Mecanismos de ação, farmacodinâmica e farmacoterapia",
    p1: 16, p2: 12,
    sources: ["Flórez — Farmacología Humana 6ª ed.", "Goodman & Gilman", "Slides UNINTER"] },
  { id: "semiologia-medica", key: "semi", emoji: "🩺", name: "Semiologia Médica",
    desc: "Propedêutica, exame físico, semiologia dos sistemas",
    p1: 10, p2: 8,
    sources: ["Porto — Semiologia Médica", "Bates — Propedêutica"] },
  { id: "urologia", key: "urol", emoji: "🫘", name: "Urologia",
    desc: "Patologias do trato urinário e sistema reprodutor",
    p1: 14, p2: 0,
    sources: ["Campbell-Walsh Urology", "Slides UNINTER"] },
  { id: "etica-medica", key: "etica", emoji: "⚖️", name: "Ética Médica",
    desc: "Princípios, deontologia e bioética médica",
    p1: 10, p2: 0,
    sources: ["Código de Ética Médica", "Bioética — Beauchamp & Childress"] },
  { id: "semiologia-cirurgica", key: "semiq", emoji: "🔪", name: "Semiologia Cirúrgica",
    desc: "Exame físico cirúrgico, propedêutica",
    p1: 0, p2: 7,
    sources: ["Vanuno — Semiología Quirúrgica"] },
];

window.MV_TOPICS = {
  farmacologia: {
    p1: [
      ["T01", "Bases Farmacológicas da Terapêutica", "Introdução, receptores, alvos moleculares"],
      ["T02", "Farmacocinética e Farmacodinâmica", "ADME, curvas dose-resposta"],
      ["T03", "Transportadores e Metabolismo", "CYP450, transportadores de membrana"],
      ["T05", "Toxicidade e Intoxicação", "Reações adversas, antídotos, margens"],
      ["T06", "AINEs", "COX-1/COX-2, mecanismos, indicações"],
      ["T12", "Opioides", "Receptores µ/κ/δ, morfina, naloxona"],
      ["T13", "Antidepressivos", "ISRS, tricíclicos, IMAO, venlafaxina"],
      ["T14", "Anestésicos Locais", "Lidocaína, bupivacaína, bloqueio"],
    ],
    p2: [
      ["T01", "IECA e ARA-II", "SRAA, captopril, losartana"],
      ["T02", "Beta-bloqueadores", "Seletividade β1/β2, propranolol"],
      ["T03", "Diuréticos", "Alça, tiazídicos, poupadores de K⁺"],
      ["T06", "Hemostasia e Anticoagulantes", "Heparina, warfarina, fibrinolíticos"],
      ["T07", "Normolipemiantes", "Estatinas, fibratos, PCSK9"],
      ["T09", "Analgésicos Opioides", "Tolerância, antagonistas"],
    ],
  },
};
