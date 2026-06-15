// Sample quiz + flashcard data for the MedVault study tools.
window.MV_QUIZ = {
  title: "Farmacologia — AINEs",
  questions: [
    {
      question: "Qual é o principal mecanismo de ação dos anti-inflamatórios não esteroidais (AINEs)?",
      hint: "Pense na enzima responsável pela síntese de prostaglandinas.",
      options: [
        { text: "Inibição da fosfolipase A2", correct: false, rationale: "A fosfolipase A2 é inibida pelos corticosteroides, não pelos AINEs." },
        { text: "Inibição da enzima ciclo-oxigenase (COX-1 e COX-2)", correct: true, rationale: "Os AINEs inibem a COX, reduzindo a síntese de prostaglandinas e tromboxanos." },
        { text: "Bloqueio dos canais de sódio", correct: false, rationale: "Esse é o mecanismo dos anestésicos locais." },
        { text: "Antagonismo dos receptores opioides", correct: false, rationale: "Antagonismo opioide é o mecanismo da naloxona." },
      ],
    },
    {
      question: "Qual AINE é classicamente associado à inibição irreversível da COX-1 plaquetária?",
      hint: "Usado em baixas doses como antiagregante.",
      options: [
        { text: "Ibuprofeno", correct: false, rationale: "O ibuprofeno é um inibidor reversível da COX." },
        { text: "Ácido acetilsalicílico (AAS)", correct: true, rationale: "O AAS acetila irreversivelmente a COX-1, com efeito antiagregante por toda a vida da plaqueta." },
        { text: "Celecoxibe", correct: false, rationale: "O celecoxibe é um inibidor seletivo da COX-2." },
        { text: "Paracetamol", correct: false, rationale: "O paracetamol tem ação central e fraca atividade anti-inflamatória periférica." },
      ],
    },
    {
      question: "Qual o principal efeito adverso gastrointestinal dos AINEs não seletivos?",
      hint: "Relacionado à perda do efeito protetor da COX-1 na mucosa.",
      options: [
        { text: "Úlcera péptica e sangramento gastrointestinal", correct: true, rationale: "A inibição da COX-1 reduz prostaglandinas protetoras da mucosa gástrica." },
        { text: "Constipação grave", correct: false, rationale: "Não é o efeito típico dos AINEs." },
        { text: "Hepatite fulminante", correct: false, rationale: "Mais associada à superdosagem de paracetamol." },
        { text: "Pancreatite aguda", correct: false, rationale: "Não é efeito característico dos AINEs." },
      ],
    },
  ],
};

window.MV_DECK = {
  title: "Farmacologia — AINEs · Flashcards",
  cards: [
    { front: "Qual o mecanismo de ação dos AINEs?", back: "Inibição da ciclo-oxigenase (COX-1 e COX-2), reduzindo a síntese de prostaglandinas." },
    { front: "Diferença entre COX-1 e COX-2?", back: "COX-1 é constitutiva (proteção gástrica, função plaquetária); COX-2 é induzida na inflamação." },
    { front: "Por que o AAS tem efeito antiagregante prolongado?", back: "Acetila irreversivelmente a COX-1 plaquetária — efeito dura toda a vida da plaqueta (~7-10 dias)." },
    { front: "Principal vantagem dos coxibes (COX-2 seletivos)?", back: "Menor toxicidade gastrointestinal, por poupar a COX-1 protetora da mucosa." },
  ],
};
