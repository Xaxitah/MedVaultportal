---
tipo: resumo
disciplina: farmacologia
tema: bases-farmacologicas-da-terapeutica
tags:
  - farmacologia
  - p1
  - bases
  - farmacodinamica
  - farmacocinetica
  - receptores
  - agonista
  - antagonista
fonte: 'Slide Classe 1 + Goodman & Gilman 12 ed. Caps 1, 2 e 3'
prova: P1
data: 06-05-2026
status: revisando
ficha-registrada: false
_source: >-
  03-Disciplinas/Farmacologia/Revisao/Resumos/P1/P1-T01-Bases-Farmacologicas-da-Terapeutica.md
---

# P1-T01 — Bases Farmacológicas da Terapêutica

> **Fontes deste resumo:**
> 🖥️ Slide: `Farmacologia-classe-1-bases-farmacologicas-terapeutica.md` (40 slides, Dr. Cristian Zavala Ruiz)
> 📚 Goodman & Gilman 12 ed. — Cap. 1 (Invenção de Fármacos), Cap. 2 (Farmacocinética), Cap. 3 (Farmacodinâmica)
> ⚠️ O slide é introdutório e incompleto — as lacunas foram preenchidas com Goodman.

---

## 1. Visão Geral

**Farmacologia** é a ciência que estuda as substâncias que interagem com sistemas vivos — seus mecanismos de ação, efeitos no organismo, uso terapêutico, toxicidade e relação dose-efeito.

> O que o fármaco faz no corpo = **farmacodinâmica**.
> O que o corpo faz com o fármaco = **farmacocinética**.

Esses dois conceitos são o núcleo de toda farmacologia clínica. Tudo o mais (grupos farmacológicos, doses, interações) deriva deles.

![[classe1-trayectoria-farmaco.jpg]]
*Trajetória do fármaco no organismo: desde a administração até o efeito e a excreção. (Slide Classe 1)*

---

## 2. Núcleo Obrigatório

> [!abstract] O que você PRECISA dominar deste tema
> - Diferença entre fármaco, medicamento e droga
> - As 4 origens dos fármacos
> - ADME: os 4 processos da farmacocinética
> - pKa e ionização: como o pH afeta a absorção e excreção
> - Vd e Clearance: parâmetros quantitativos essenciais
> - Farmacodinâmica: o que é receptor, agonista, antagonista, agonista parcial
> - As 4 famílias de receptores e suas diferenças fundamentais
> - Janela terapêutica e índice terapêutico
> - Vias de administração e suas implicações clínicas
> - Dessensibilização e tolerância aos fármacos

---

## 3. Explicação Detalhada

### 3.1 Conceitos Fundamentais

| Termo | Definição | Ponto-chave |
|---|---|---|
| **Farmacologia** | Ciência que estuda substâncias que atuam sobre organismos vivos | Inclui mecanismo, uso, toxicidade |
| **Fármaco** | Substância com capacidade de produzir efeito biológico/fisiológico | Não precisa ser de uso médico |
| **Medicamento** | Fármaco com formulação definida, indicação e dose para uso terapêutico | Fármaco + forma farmacêutica + indicação |
| **Droga** | Termo amplo — qualquer substância psicoativa ou de abuso; em contexto técnico = sinônimo de fármaco | Evitar confusão conceitual na prova |
| **Receptor** | Macromolécula (geralmente proteína) com a qual o fármaco interage para produzir resposta celular | Pode ser na membrana, citoplasma ou núcleo |
| **Aceptor** | Macromolécula que se liga ao fármaco SEM produzir resposta direta (ex: albumina sérica) | Forma reservatório inativo — afeta farmacocinética, não farmacodinâmica |

> [!warning] Cuidado com "receptor"
> O slide chama tudo de receptor. O Goodman distingue: **receptor** (gera resposta) vs. **aceptor** (albumina, etc. — só armazena o fármaco). Na prova de bases, saber essa diferença pode fazer diferença.

---

### 3.2 Origens dos Fármacos

| Origem | Exemplos | Observação |
|---|---|---|
| **Vegetal** | Morfina (papoula), digoxina (dedaleira), atropina (beladona), penicilina (fungo), alcaloides | Princípio ativo isolado de caules, raízes, flores, sementes |
| **Animal** | Insulina (suína/bovina), hormônio do crescimento, heparina, vitaminas A/D, ômega-3 | Hoje maioria é produzida por engenharia genética |
| **Mineral** | Ferro, cálcio, magnésio, enxofre, sais de alumínio (antiácidos), lítio | Elementos ou sais purificados |
| **Sintético/Semissintético** | Aspirina (semissintética do ácido salicílico), benzodiazepínicos, maioria dos antibióticos modernos | Produção artificial — permite modificar molécula para melhorar eficácia/segurança |

> [!tip] Memorização
> **"VAMS"** — Vegetal, Animal, Mineral, Sintético.
> O maior volume de fármacos modernos é sintético ou semissintético.

---

### 3.3 Farmacocinética — ADME

> [!info] Definição Goodman (Cap. 2)
> Farmacocinética estuda a absorção, distribuição, metabolismo e excreção dos fármacos — coletivamente **ADME**. Define quanto do fármaco chega ao local de ação e quando.

#### A — Absorção (*Absorción*)
- Entrada do fármaco no organismo desde o sítio de administração até a circulação sistêmica
- Inclui: **liberação** da forma farmacêutica → **dissolução** → **absorção** pela membrana
- Depende de: via de administração, propriedades físico-químicas, pH, fluxo sanguíneo local
- **Biodisponibilidade (F):** fração da dose administrada que atinge a circulação sistêmica inalterada
  - Via IV: F = 100% (definição)
  - Via oral: F < 100% por efeito de primeira passagem hepática

#### D — Distribuição (*Distribución*)
- Transporte do fármaco da circulação sistêmica para os tecidos e local de ação
- Fatores que afetam: ligação a proteínas plasmáticas (albumina), lipossolubilidade, perfusão tecidual, barreiras (BHE, placenta)
- Apenas a **fração livre** (não ligada à proteína) é farmacologicamente ativa

#### M — Metabolismo (*Metabolismo*)
- Biotransformação do fármaco, principalmente no **fígado** (CYP450)
- Converte fármacos em metabólitos mais polares → facilita excreção
- Pode: **inativar** o fármaco | **ativar** pró-fármacos | produzir **metabólitos tóxicos**
- Efeito de primeira passagem: metabolismo hepático antes de atingir a circulação sistêmica (limita biodisponibilidade oral)

#### E — Excreção (*Excreción*)
- Principal via: **renal** (filtração glomerular + secreção tubular)
- Outras vias: biliar (fezes), pulmões (anestésicos voláteis), leite materno, suor
- **Meia-vida (t½):** tempo para reduzir a concentração plasmática à metade
  - Em 4–5 meia-vidas: ~97% do fármaco foi eliminado
  - Em 4–5 meia-vidas de administração repetida: estado de equilíbrio (*steady-state*)

---

### 3.3a pKa e Ionização — Partição pelo pH

> [!info] Goodman Cap. 2 — Conceito de pKa
> Muitos fármacos são **ácidos ou bases fracas** — presentes em solução nas formas ionizada e não ionizada. A forma **não ionizada** é mais lipossolúvel e atravessa membranas por difusão passiva com facilidade. A forma **ionizada** fica retida.

- **pKa:** pH no qual 50% do fármaco está ionizado e 50% não ionizado
- Fórmula: equação de Henderson-Hasselbalch
- **Regra de partição pH:**
  - Ácido fraco → acumula no **lado básico** da membrana
  - Base fraca → acumula no **lado ácido** da membrana

| Tipo de fármaco | Absorção melhor em | Excreção urinária facilitada por |
|---|---|---|
| **Ácido fraco** (ex: aspirina, pKa ≈ 3,5) | Estômago (pH baixo → forma não ionizada) | Urina **alcalina** (bicarbonato → ioniza → não reabsorve) |
| **Base fraca** (ex: clordiazepóxido, pKa ≈ 4,4) | Intestino delgado (pH mais alto) | Urina **ácida** |

> [!warning] Implicação toxicológica — prova!
> **Intoxicação por ácido acetilsalicílico (aspirina):** alcalinizar a urina com bicarbonato de sódio acelera a eliminação renal — o fármaco ácido fica ionizado na urina alcalina e não é reabsorvido pelos túbulos. Mesma lógica se aplica ao urato (pKa ≈ 5,8).

> [!example] Exemplo clínico
> Anti-histamínicos de 2ª geração (ex: loratadina) são mais ionizados no pH fisiológico → menos lipossolúveis → **não atravessam facilmente a BHE** → menos sedação que os de 1ª geração.

---

### 3.3b Parâmetros Farmacocinéticos Quantitativos

> [!info] Goodman Cap. 2 — Os 4 parâmetros essenciais
> Biodisponibilidade (F), Volume de Distribuição (Vd), Depuração (CL) e Meia-vida (t½) governam a disposição de todos os fármacos.

#### Volume de Distribuição (Vd)

- **Definição:** volume hipotético de líquido que seria necessário para conter todo o fármaco no corpo na mesma concentração plasmática medida
- **Fórmula:** Vd = quantidade do fármaco no corpo / concentração plasmática (C)
- Não corresponde a nenhum volume fisiológico real — é um volume **aparente**

| Vd baixo | Vd alto |
|---|---|
| Fármaco concentrado no plasma | Fármaco distribuído amplamente nos tecidos |
| Alta ligação a proteínas plasmáticas | Altamente lipofílico; acumula em tecido adiposo ou muscular |
| Ex: heparina (Vd ≈ volume plasmático) | Ex: cloroquina (Vd ≈ 15.000 L!), digoxina (Vd ≈ 667 L) |

> [!danger] Pegadinha — Vd alto não significa "mais fármaco disponível"
> Vd alto significa que o fármaco SAIU do plasma e está nos tecidos — a concentração plasmática é baixa mesmo que a quantidade total no corpo seja grande. Isso dificulta a diálise em intoxicações (ex: digoxina).

#### Depuração (Clearance, CL)

- **Definição:** o conceito **mais importante** para planejar esquema posológico de longo prazo
- Representa o volume de plasma completamente "limpo" do fármaco por unidade de tempo (mL/min)
- **Fórmula:** CL = taxa de eliminação / C
- A depuração total = soma das depurações parciais: CL = CL_renal + CL_hepático + CL_outros
- **Cinética de 1ª ordem:** a maioria dos fármacos — fração constante eliminada por unidade de tempo; CL é constante
- **Cinética de zero ordem:** quando os sistemas de eliminação estão saturados — quantidade constante eliminada por tempo; CL varia com a concentração (ex: etanol, fenitoína em dose tóxica)

> [!tip] Relação entre Vd, CL e t½
> **t½ = 0,693 × Vd / CL**
> Interpretação: fármaco com Vd alto e CL baixo → t½ longa → leva muito tempo para ser eliminado.

![[goodman-cap2-figura-2-4-concentracao-plasmatica-tempo.png]]
*Concentração plasmática ao longo do tempo após dose única IV. A inclinação reflete a meia-vida de eliminação (t½); quanto mais inclinada, mais rápida a eliminação. (Goodman Cap. 2, Fig. 2-4)*

---

### 3.4 Transporte Através das Membranas

| Tipo | ATP | Características | Exemplos |
|---|---|---|---|
| **Difusão simples** | Não | A favor do gradiente; moléculas pequenas e lipossolúveis | Álcool, gases anestésicos |
| **Difusão facilitada** | Não | A favor do gradiente; precisa de carreador proteico | Glicose, alguns fármacos |
| **Transporte ativo** | Sim | Contra o gradiente; saturável; seletivo; inibição competitiva | Transportadores ABC, OCT |
| **Transporte paracelular** | Não | Passa entre células; importante no capilar | Pequenas moléculas polares |

![[classe1-transporte-membrana.jpg]]
*Mecanismos de transporte de fármacos através das membranas celulares. (Slide Classe 1)*

> [!tip] Regra prática
> Fármaco **lipossolúvel + pequeno + não ionizado** → atravessa membranas com facilidade.
> Fármaco **polar + ionizado + grande** → precisa de transportador ou via parenteral.

---

### 3.5 Vias de Administração

#### Entéricas (passam pelo TGI)

| Via | Forma farmacêutica | Vantagens | Limitações |
|---|---|---|---|
| **Oral** | Comprimido, cápsula, xarope, solução | Mais segura, conveniente, econômica | Efeito de primeira passagem; depende do paciente; início mais lento |
| **Sublingual** | Comprimido sublingual | Absorção rápida, evita primeira passagem | Poucos fármacos disponíveis; sabor desagradável possível |
| **Retal** | Supositório, enema | Útil em vômito, crianças, inconsciência; parcialmente evita primeira passagem | Absorção irregular; desconforto |

#### Parenterais (injetáveis)

| Via | Vantagens | Limitações clínicas |
|---|---|---|
| **Intravenosa (IV)** | Efeito imediato; F = 100%; ajuste de dose preciso; útil em emergência | Risco de reações agudas; não reversível; infecção; solução deve ser aquosa e compatível |
| **Intramuscular (IM)** | Absorção moderada; aceita soluções oleosas e depot; volumes moderados | Evitar em anticoagulados; pode elevar CK (interfere em exames) |
| **Subcutânea (SC)** | Absorção lenta e sustentada; depot; paciente pode aplicar (ex: insulina) | Não para volumes grandes; pode causar dor ou necrose com substâncias irritantes |
| **Intradérmica (ID)** | Teste de sensibilidade (tuberculina, alergia) | Volume muito pequeno; não para tratamento |

#### Tópicas / Locais

| Via | Uso clínico | Destaque |
|---|---|---|
| **Transdérmica** | Adesivos (nitroglicerina, estrogênio, nicotina) | Absorção lenta e contínua; evita primeira passagem |
| **Inalatória** | Broncodilatadores, anestésicos gerais voláteis | Absorção rápida; grande área de superfície pulmonar |
| **Ocular, nasal, vaginal** | Ação local ou sistêmica limitada | — |

![[classe1-vias-administracao-arvore.jpg]]
*Classificação das vias de administração em árvore. (Slide Classe 1)*

![[classe1-fases-vias-administracao.jpg]]
*Fases e características de cada via de administração. (Slide Classe 1)*

> [!danger] Pegadinha clássica
> Via IV não passa por absorção (F = 100% por definição), mas tem maior risco de reações adversas graves e **não é reversível**. Via oral é a mais segura, mas tem menor biodisponibilidade.

---

### 3.6 Farmacodinâmica — Interação Fármaco-Receptor

> [!info] Goodman Cap. 3
> Os fármacos **alteram a velocidade ou magnitude** de respostas celulares intrínsecas — não criam respostas totalmente novas. A interação é com **macromoléculas** (proteínas, canais iônicos, enzimas, DNA).

#### Afinidade e Atividade Intrínseca

- **Afinidade:** tendência do fármaco de se ligar ao receptor (força da ligação). Medida pela constante de dissociação (Kd) — quanto menor o Kd, maior a afinidade.
- **Atividade intrínseca (eficácia):** capacidade de, após a ligação, ativar o receptor e produzir resposta. Varia de 0 (antagonista puro) a 1 (agonista pleno).

![[classe1-interaccion-farmaco-receptor.jpg]]
*Interação fármaco-receptor: afinidade e atividade intrínseca determinam o tipo de resposta. (Slide Classe 1)*

#### Agonistas e Antagonistas

| Tipo | Afinidade | Atividade intrínseca | Efeito |
|---|---|---|---|
| **Agonista pleno** | Alta | Máxima (= 1) | Ativa receptor completamente |
| **Agonista parcial** | Alta | Parcial (0 < e < 1) | Ativa receptor parcialmente; em presença de agonista pleno, **comporta-se como antagonista competitivo** |
| **Agonista inverso** | Alta | Negativa | Estabiliza receptor em conformação inativa; efeito oposto ao agonista |
| **Antagonista competitivo reversível** | Alta | Zero | Liga-se ao mesmo sítio que o agonista; bloqueia mas é deslocado com aumento da dose do agonista |
| **Antagonista competitivo irreversível** | Alta | Zero | Liga-se covalentemente; não é deslocado — desloca a curva dose-resposta para direita com depressão do efeito máximo |
| **Antagonista não competitivo** | Alta | Zero | Liga-se a sítio diferente (alostérico); não é deslocado pelo agonista |

![[goodman-cap3-pagina-02-figura-3-1.png]]
*Modelo conformacional de receptor (Ra = ativo, Ri = inativo). Agonista pleno estabiliza Ra; agonista parcial tem menor resposta; agonista inverso estabiliza Ri (resposta negativa); composto inativo se liga igualmente a Ra e Ri sem efeito líquido. (Goodman Cap. 3, Fig. 3-1)*

![[classe1-agonista-antagonista.jpg]]
*Comparação entre agonista, antagonista e agonista parcial na curva dose-resposta. (Slide Classe 1)*

![[classe1-agonista-parcial-curva.jpg]]
*Curva dose-resposta do agonista parcial: na presença de agonista pleno, comporta-se como antagonista funcional. (Slide Classe 1)*

> [!danger] Agonista parcial x antagonista
> O agonista parcial tem atividade intrínseca POSITIVA (não é zero). Na presença de agonista pleno, ocupa receptores e produz resposta menor → funciona como antagonista competitivo **funcional**. Isso é clínico: buprenorfina (agonista parcial opioide) em altas doses pode reverter efeito da morfina.

---

### 3.6a Janela Terapêutica

> [!info] Goodman Cap. 2
> A **janela terapêutica** (ou faixa terapêutica) é o intervalo de concentrações plasmáticas onde o fármaco produz efeito terapêutico sem toxicidade significativa.

```
Concentração                                        Toxicidade
tóxica mínima   ─────────────────────────────────── 
                                                    JANELA TERAPÊUTICA
Concentração    ─────────────────────────────────── 
mínima eficaz                                       
                                                    Sem efeito
```

- Fármacos com **janela estreita** (ex: digoxina, lítio, varfarina): pequenas variações de dose → toxicidade. Exigem monitoramento plasmático.
- **Steady-state** (estado de equilíbrio): atingido após **4–5 t½** de administração regular — é quando a concentração plasmática se estabiliza dentro da janela terapêutica.

![[goodman-cap2-figura-2-6-janela-terapeutica-tempo-efeito.png]]
*Janela terapêutica e steady-state com doses repetidas. A concentração plasmática sobe progressivamente até se estabilizar na faixa entre a concentração mínima eficaz e a tóxica. (Goodman Cap. 2, Fig. 2-6)*

> [!tip] Relação janela terapêutica × índice terapêutico
> IT = DL50/DE50 → quanto maior o IT, mais seguro. Fármacos com IT baixo têm janela estreita — variam entre ineficaz e tóxico com pequena variação de dose.

---

### 3.7 Relação Dose-Efeito

- **DE50 (dose efetiva 50%):** dose que produz 50% do efeito máximo na população
- **DL50 (dose letal 50%):** dose que mata 50% dos animais no experimento
- **Índice terapêutico (IT):** IT = DL50 / DE50 → quanto maior, mais seguro o fármaco
- **Potência:** quantidade de fármaco necessária para produzir determinado efeito (relacionada com DE50)
- **Eficácia (Emax):** efeito máximo que o fármaco consegue produzir independentemente da dose

> [!tip] Potência ≠ Eficácia
> Um fármaco pode ser **mais potente** (precisa de dose menor para mesmo efeito) mas **menos eficaz** (não consegue atingir o mesmo efeito máximo que outro).
> Exemplo: morfina é mais eficaz que a codeína para dor severa, mesmo que em doses equivalentes a codeína seja mais "potente" por mg na analgesia leve.

---

### 3.8 As 4 Famílias de Receptores

| Família | Mecanismo | Velocidade | Exemplos clínicos |
|---|---|---|---|
| **Canais iônicos controlados por ligantes** (ionotrópicos) | Abertura do canal → fluxo iônico direto | Milissegundos (rápido) | Receptor nicotínico (ACh), GABA-A (BDZ), NMDA (glutamato) |
| **Receptores acoplados a proteína G** (GPCRs / metabotrópicos) | Ativa proteína G → mensageiro 2° (AMPc, IP3, DAG) | Segundos a minutos | Adrenorreceptores α e β, muscarínicos, opioides, dopaminérgicos |
| **Receptores com atividade enzimática intrínseca** (tirosina quinase) | Ligação ativa domínio enzimático intracelular | Minutos a horas | Receptor de insulina, fatores de crescimento (EGF, PDGF) |
| **Receptores intracelulares** (nucleares) | Ligante lipossolúvel entra na célula → complexo receptor-ligante regula transcrição | Horas a dias (lentos) | Receptores de corticoides, hormônios tireoidianos, vitamina D, receptores esteroides |

![[classe1-familias-receptores.jpg]]
*As 4 famílias de receptores farmacológicos com seus mecanismos e exemplos. (Slide Classe 1)*

![[classe1-receptores-rapidos-lentos.jpg]]
*Comparação da velocidade de resposta entre as famílias de receptores: ionotrópicos (ms) → GPCRs (s) → tirosina-quinase (min/h) → nucleares (h/dias). (Slide Classe 1)*

![[classe1-receptores-nucleares-diagrama.jpg]]
*Mecanismo dos receptores intracelulares/nucleares: ligante lipofílico penetra na célula, liga-se ao receptor e regula transcrição gênica. (Slide Classe 1)*

> [!abstract] Memorização das 4 famílias
> **"Íons — G — Enzimas — Núcleo"**
> Velocidade de resposta: Íons > G > Enzimas > Núcleo
> Alvos farmacológicos importantes: BDZ no GABA-A (ionotrópico), β-bloqueadores no β-adrenérgico (GPCR), metformina indireto no receptor de insulina (tirosina-quinase), corticoides no receptor nuclear.

---

### 3.8a Regulação de Receptores — Dessensibilização e Tolerância

> [!info] Goodman Cap. 3 — Conceito crítico para clínica
> Com uso prolongado de fármacos, os receptores podem sofrer **regulação para baixo** (down-regulation), reduzindo a resposta ao longo do tempo.

| Mecanismo | Definição | Exemplo clínico |
|---|---|---|
| **Dessensibilização** | Redução na resposta do receptor após exposição continuada ao agonista — mesmo receptor, menos responsivo | Receptores β-adrenérgicos com uso crônico de β-agonistas (asma) |
| **Tolerância** | Redução progressiva do efeito farmacológico exigindo doses maiores para o mesmo efeito | Tolerância analgésica aos opioides |
| **Taquifilaxia** | Tolerância que se desenvolve rapidamente (em horas) após doses repetidas | Nitratos (nitroglicerina): tolerância completa em horas; exige "drug holiday" de pelo menos 8–12h por dia |
| **Hiporregulação** (*down-regulation*) | Redução no número total de receptores funcionais | β-bloqueadores cronicamente → hiperregulação de β-receptores → suspensão abrupta pode causar angina/IAM de rebote |

> [!danger] Suspensão de fármacos que causam hiporregulação
> Suspender abruptamente fármacos que causam **hiporregulação** pode desencadear efeito de rebote grave:
> - β-bloqueadores → crises hipertensivas, angina, IAM
> - Corticoides → insuficiência adrenal aguda
> Sempre reduzir doses progressivamente.

---

### 3.9 Outros Sítios de Ação dos Fármacos

Além de receptores clássicos, fármacos atuam em:

| Alvo | Mecanismo | Exemplo |
|---|---|---|
| **Enzimas** | Inibição competitiva (substrato falso) | AINEs → inibem COX; IECAs → inibem ECA; neostigmina → inibe AChE |
| **Canais iônicos** | Bloqueio do canal (voltagem ou ligante dependente) | Anestésicos locais (canal de Na+); bloqueadores de Ca2+ |
| **Transportadores** | Inibição do transporte (recaptação, bomba) | Antidepressivos ISRS (inibem recaptação de serotonina); digoxina (inibe Na+/K+-ATPase) |
| **DNA/RNA** | Intercalação, alquilação, inibição de síntese | Agentes quimioterápicos (doxorrubicina, ciclofosfamida) |

![[classe1-sitio-accion-canales-ionicos.jpg]]
*Fármacos com ação em canais iônicos: bloqueio do canal impede fluxo iônico. (Slide Classe 1)*

![[classe1-sitio-accion-enzimas.jpg]]
*Fármacos com ação enzimática: inibição competitiva ou irreversível de enzimas-alvo. (Slide Classe 1)*

![[classe1-sitio-accion-transportadores.jpg]]
*Fármacos com ação em transportadores: bloqueio da recaptação ou bombas iônicas. (Slide Classe 1)*

---

## 4. Classificação / Componentes / Sequência

```
FARMACOLOGIA
│
├── FARMACOCINÉTICA (o que o corpo faz com o fármaco)
│   ├── Absorção → Distribuição → Metabolismo → Excreção
│   ├── Parâmetros: Vd | CL | t½ | F (biodisponibilidade)
│   ├── pKa e ionização → influência do pH na absorção e excreção
│   └── Determina: concentração no local de ação e duração do efeito
│
└── FARMACODINÂMICA (o que o fármaco faz no corpo)
    ├── Receptor → Sinal → Resposta celular
    ├── Agonista (ativa) / Antagonista (bloqueia) / Agonista parcial
    ├── Famílias: Ionotrópico / GPCR / Tirosina-quinase / Nuclear
    └── Regulação: dessensibilização | tolerância | taquifilaxia
```

---

## 5. Comparação entre Conceitos Parecidos

| Conceito A | vs. | Conceito B | Diferença-chave |
|---|---|---|---|
| Potência | vs. | Eficácia | Potência = quanto precisa da dose; Eficácia = quanto de efeito consegue |
| Agonista parcial | vs. | Antagonista | Parcial tem atividade intrínseca > 0; antagonista = 0 |
| Farmacocinética | vs. | Farmacodinâmica | FC = percurso do fármaco; FD = efeito do fármaco |
| Receptor | vs. | Aceptor | Receptor gera resposta; aceptor só liga sem resposta (ex: albumina) |
| Antagonista competitivo | vs. | Antagonista irreversível | Competitivo é deslocável pelo agonista; irreversível não é |
| DE50 | vs. | DL50 | DE50 = dose eficaz; DL50 = dose letal; IT = DL50/DE50 |
| Vd alto | vs. | Vd baixo | Alto = distribuído nos tecidos (lipofílico); Baixo = retido no plasma |
| Tolerância | vs. | Taquifilaxia | Tolerância = progressiva/crônica; Taquifilaxia = rápida (horas) |
| Dessensibilização | vs. | Down-regulation | Dessensibilização = receptor menos responsivo; Down-regulation = menos receptores |
| Janela terapêutica estreita | vs. | Larga | Estreita = necessita monitoramento (digoxina, lítio); Larga = maior margem de segurança |

---

## 6. O Que Mais Cai na Prova

> [!question] Questões frequentes
> 1. Qual a diferença entre farmacocinética e farmacodinâmica.
> 2. O que é biodisponibilidade. Qual via tem F = 100%.
> 3. Agonista parcial comporta-se como o quê na presença de agonista pleno.
> 4. Qual família de receptor tem resposta mais rápida.
> 5. Como o efeito de primeira passagem afeta a via oral.
> 6. O que é índice terapêutico. Como interpretar IT alto vs. baixo.
> 7. Diferença entre antagonismo competitivo reversível e irreversível na curva dose-resposta.
> 8. O que é Vd? Fármaco com Vd alto está predominantemente onde?
> 9. O que é taquifilaxia? Dar exemplo.
> 10. Por que ácidos fracos se acumulam no lado básico da membrana?

> [!tip] Dica de prova
> O professor que usa slides incompletos geralmente cobra **conceitos puros e definições precisas**. Saiba diferenciar: potência x eficácia, agonista x antagonista x parcial, FC x FD, Vd x CL, tolerância x taquifilaxia. São as perguntas mais recorrentes em bases de farmacologia.

---

## 7. Mapa Mental em Texto

```
BASES FARMACOLÓGICAS
│
├── ORIGENS: Vegetal | Animal | Mineral | Sintético/Semissintético
│
├── FARMACOCINÉTICA (ADME)
│   ├── A — Absorção → biodisponibilidade (F), efeito de 1ª passagem
│   ├── D — Distribuição → proteínas plasmáticas, BHE, fração livre
│   │   └── Vd = quantidade/C → alto (tecidos) | baixo (plasma)
│   ├── M — Metabolismo → fígado, CYP450, pró-fármacos
│   └── E — Excreção → renal, biliar, pulmonar; meia-vida t½
│       └── t½ = 0,693 × Vd / CL
│
├── pKa e IONIZAÇÃO
│   ├── Forma não ionizada → atravessa membranas
│   ├── Ácido fraco: acumula lado básico | Base fraca: acumula lado ácido
│   └── Uso clínico: alcalinizar urina acelera excreção de ácidos fracos
│
├── PARÂMETROS PK ESSENCIAIS
│   ├── Vd (Volume de Distribuição) → distribuição nos tecidos
│   ├── CL (Clearance/Depuração) → eficiência de eliminação
│   ├── t½ = 0,693 × Vd/CL → tempo de eliminação
│   └── Steady-state: após 4–5 t½ → janela terapêutica
│
└── FARMACODINÂMICA
    ├── Receptor (proteína-alvo) → Agonista / Antagonista / Parcial
    ├── Afinidade (força de ligação) + Atividade intrínseca (produz resposta)
    ├── Relação dose-efeito → DE50, DL50, Índice Terapêutico
    ├── Famílias de receptores
    │   ├── Ionotrópicos (canal iônico) → rápidos (ms)
    │   ├── GPCRs (proteína G) → moderados (s)
    │   ├── Tirosina-quinase (enzimáticos) → lentos (min/h)
    │   └── Nucleares (intracelulares) → muito lentos (h/dias)
    └── Regulação de receptores
        ├── Dessensibilização → receptor menos responsivo
        ├── Tolerância → doses maiores p/ mesmo efeito
        └── Taquifilaxia → tolerância rápida (nitratos)
```

---

## 8. Perguntas de Revisão Ativa

1. Um fármaco tem alta afinidade pelo receptor mas produz apenas 40% do efeito máximo. Como ele se classifica.
2. O que acontece com a curva dose-resposta quando adicionamos um antagonista **competitivo reversível**.
3. Por que a via IV não passa por absorção e tem F = 100%.
4. Um paciente com insuficiência hepática grave usará um fármaco com grande efeito de primeira passagem. O que esperar.
5. Qual a diferença entre potência e eficácia. Dê um exemplo prático.
6. Receptores nucleares como os de corticoides são lentos — por quê.
7. O que é agonista inverso. Em que difere do antagonista.
8. Fármaco X tem Vd = 1.500 L. Isso significa que ele está predominantemente onde? O que isso implica em caso de intoxicação aguda?
9. Por que nitratos precisam de "drug holiday" diário? Que fenômeno explica isso?
10. Um ácido fraco (pKa = 5,0) é ingerido por via oral. Em que segmento do TGI ele é melhor absorvido? Por quê?

> **Respostas:**
> 1. Agonista parcial (afinidade alta, eficácia < máxima)
> 2. Desloca a curva para a direita (maior dose de agonista necessária), mas o Emax se mantém
> 3. O fármaco entra diretamente na corrente sanguínea — não há barreira de absorção
> 4. Efeito de primeira passagem diminuído → biodisponibilidade aumentada → risco de superdosagem
> 5. Potência = DE50 (dose necessária); eficácia = Emax (efeito máximo possível). Morfina > codeína em eficácia para dor severa
> 6. Precisam entrar na célula, ligar-se ao receptor, translocar ao núcleo e regular transcrição → produção de novas proteínas leva horas
> 7. Agonista inverso produz efeito oposto ao agonista (estabiliza receptor inativo); antagonista bloqueia sem efeito próprio
> 8. Predominantemente nos tecidos (lipofílico). Em intoxicação: diálise ineficaz — o fármaco não está no plasma
> 9. Taquifilaxia — tolerância rápida por dessensibilização dos receptores de nitratos. O "drug holiday" permite recuperação dos receptores
> 10. No estômago (pH 1–2): ácido fraco fica predominantemente não ionizado em pH baixo → mais lipossolúvel → atravessa mucosa gástrica

---

## 9. Estratégia de Memorização

> [!tip] Para TDAH — ancoragem em imagens mentais
> **ADME** = imagine um fármaco fazendo um percurso de corrida:
> - **A**bsorção = saída da largada (entra no corpo)
> - **D**istribuição = corrida pelo corpo (chega aos tecidos)
> - **M**etabolismo = checkpoint hepático (fígado processa)
> - **E**xcreção = linha de chegada (sai pelo rim)

> [!tip] 4 famílias de receptores
> **"Í G E N"** (lembra "Ignem" = fogo)
> - **Í**ons → rápidos como faísca (milissegundos)
> - **G**PCR → médios (segundos)
> - **E**nzimáticos → lentos (minutos-horas)
> - **N**ucleares → muito lentos (horas-dias)

> [!tip] Agonista vs. antagonista vs. parcial
> - Agonista = liga e **ATIVA** (chave que abre a porta)
> - Antagonista = liga mas **BLOQUEIA** (chave que fica presa, não abre nem fecha)
> - Parcial = liga e **ABRE PELA METADE** (chave torta — abre um pouco, mas impede chave normal de abrir totalmente)

> [!tip] pKa e ionização
> - Ácido no **ácido** = não ionizado = passa membrana → absorve melhor em pH ácido (estômago)
> - Base no **básico** = não ionizada = passa membrana → absorve melhor em pH básico (intestino)
> - **"A com A, B com B, passa membrana"** (Ácido-Ácido, Base-Básico)

> [!tip] Vd e Clearance
> - **Vd alto** = fármaco "fugiu" para os tecidos = difícil dialisar
> - **CL = velocidade do carro** (quanto plasma é "limpo" por minuto)
> - **t½ = 0,693 × Vd / CL** = "quanto maior o tanque (Vd) e mais devagar o carro (CL), mais tempo para esvaziar"

---

## 📌 Lacunas Identificadas no Slide

> [!note] O que o slide NÃO explicou e o Goodman completa
> - **Aceptores vs. receptores**: o slide não distingue albumina como aceptor (importante para FC)
> - **Agonista inverso**: o slide não menciona — conceito importante em farmacodinâmica moderna
> - **pKa e ionização**: ausente no slide — Henderson-Hasselbalch é fundamental para absorção/excreção
> - **Volume de Distribuição (Vd)**: não abordado no slide — parâmetro essencial para posologia
> - **Depuração (Clearance, CL)**: ausente no slide — base para esquemas posológicos crônicos
> - **Relação t½ = 0,693 × Vd/CL**: não citado no slide — fundamental para entender esquemas posológicos
> - **Janela terapêutica e steady-state**: ausentes no slide — base para entender posologia e fármacos de índice estreito
> - **Dessensibilização/tolerância/taquifilaxia**: não abordados no slide — essenciais para clínica
> - **"Agonista alostérico" dentro de antagonistas**: o slide provavelmente quis dizer **antagonismo alostérico** — revisar com a professora

---

## 10. Dúvidas para Confirmar

- [ ] A professora abordou pKa e ionização em aula? Confirmar se este conteúdo cai na P1 ou é mais cobrado em farmacocinética (T02).
- [ ] A professora distinguiu Vd e Clearance ou trata como conteúdo de T02?
- [ ] A taquifilaxia com nitratos foi mencionada ou é conteúdo do módulo cardiovascular?
- [ ] O slide usa o termo "agonista alostérico" em algum momento — verificar se é termo da professora ou erro de tradução.
- [ ] Confirmar se "agonista inverso" cai na P1 ou é considerado conteúdo avançado pela professora.

---

## Navegação

← [[_Prioridades-P1|Prioridades P1]]
→ [[P1-T02-Farmacocinetica-e-Farmacodinamica|T02 — Farmacocinética e Farmacodinâmica]]

---

*Resumo elaborado em 06-05-2026 | Revisado e enriquecido em 14-05-2026*
*Fonte primária: Goodman & Gilman 12 ed. Caps 1–3 | Slide-fonte: `03-Biblioteca-md/P1/Farmacologia-classe-1-bases-farmacologicas-terapeutica.md`*
*Imagens: Slides Classe 1 (vault) + Goodman Caps 2–3 (copiadas em 14-05-2026)*


---

## Pipeline NotebookLM - Orientacao de Geracao

REGRA: Este arquivo eh um resumo ja processado.
NAO usar --fulltext --resumo --topicos.
Usar: --infografico --audio --slides --mapa --quiz

### Topicos para Infografico + Podcast individuais
(extraidos automaticamente - revisar antes de gerar)

- [ ] Núcleo Obrigatório
- [ ] Explicação Detalhada
- [ ] 1 Conceitos Fundamentais
- [ ] 2 Origens dos Fármacos
- [ ] 3 Farmacocinética — ADME

### Artefatos do Resumo Inteiro

| Artefato | Status |
|---|---|
| Slides | pendente |
| Mapa Mental | pendente |
| Quiz | pendente |
| Flashcards | pendente |
| Video | pendente |

### Comandos sugeridos

Por topico:
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T01-Bases-Farmacologicas-da-Terapeutica.md" --disciplina farmacologia --tema "P1-T01-Bases-Farmacologicas-da-Terapeutica-topico1" --infografico --audio

Resumo inteiro:
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T01-Bases-Farmacologicas-da-Terapeutica.md" --disciplina farmacologia --tema "P1-T01-Bases-Farmacologicas-da-Terapeutica" --slides --mapa --quiz

Guia: 00-Meta/Guias/guia-pipeline-notebooklm-resumos.md
