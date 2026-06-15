---
title: T05 — Toxicidade e Intoxicação por Fármacos
data: 06-05-2026
data-revisao: 14-05-2026
tags:
  - medicina
  - farmacologia
  - toxicologia
  - intoxicacao
  - interacoes-farmacologicas
  - p1
disciplina: farmacologia
tema: toxicidade-intoxicacao-farmacos
tipo: resumo
status: revisando
prova: P1
fonte: Slide Dr. Zavala Classe 4 + Goodman & Gilman Cap. 4 + Florez 6ª ed. Cap. 7
ficha-registrada: false
_source: >-
  03-Disciplinas/Farmacologia/Revisao/Resumos/P1/P1-T05-Toxicidade-e-Intoxicacao.md
---

# T05 — Toxicidade e Intoxicação por Fármacos

> **Fontes deste resumo:**
> 🖥️ Slide: `10-Classe 4 Farmaco.pdf` — Dr. Cristian Zavala Ruiz (29 slides)
> 📚 Livro: Goodman & Gilman 12ª ed., Cap. 4 — *Toxicidade por Fármacos e Envenenamento* (16 págs.)
> 📌 Adicionados em 14-05-2026 (Goodman Cap. 4): fármacos de início tardio, ABCDE do tratamento, carvão ativado, fases dos ensaios clínicos, terfenadina + macrolídeo
> 📚 Florez 6ª ed. Cap. 7: terminologia (colateral/secundário/adverso), farmacogenética (NAT/G-6-PD/porfiria), interação fármaco-infecção viral, teratogênese (talidomida), reações uso prolongado, farmacovigilância (señal/RA/RR/OR/Karch y Lasagna)

---

## 1. Visão Geral

**Toxicologia** é o estudo dos efeitos adversos de substâncias químicas sobre organismos vivos, com foco em caracterizar esses efeitos e suas relações dose-resposta para proteger a saúde pública.

> [!info] Frase de Paracelso (séc. XVI)
> *"O que é que não é um veneno. Todas as coisas são veneno e nada é sem veneno. Somente a **dose** determina que algo não seja um veneno."*
> — citado diretamente pelo Goodman. Alta probabilidade de cair em prova.

**Resumo do tema em 4 blocos:**

| Bloco | Conteúdo |
|---|---|
| 1. Dose-resposta | Gradual vs. quântica; LD50; IT; margem de segurança |
| 2. Mecanismos de toxicidade | 4 etapas do processo; molécula diana |
| 3. Tipos de toxicidade | Farmacológico, patológico, genotóxico, alérgico, idiossincrásico |
| 4. Interações farmacológicas | Aditiva, sinérgica, potenciação, antagonismo (4 tipos) |

---

## 2. Núcleo Obrigatório

### Definições essenciais

| Termo | Definição |
|---|---|
| **Substância tóxica** | Toda substância capaz de causar dano a um organismo vivo |
| **Dose-resposta gradual** | Indivíduo: efeito aumenta continuamente com a dose |
| **Dose-resposta quântica** | População: porcentagem afetada aumenta com a dose (presente/ausente) |
| **LD50** | Dose letal para **50%** da população experimental |
| **ED50** | Dose efetiva para **50%** da população experimental |
| **IT (Índice Terapêutico)** | `IT = LD50 / ED50` — quanto maior, mais seguro |
| **Margem de segurança** | `MS = LD1 / ED99` — ainda mais conservadora que o IT |
| **Probito** | Unidade estatística de probabilidade: probito 5 = 50% resposta |

---

> [!note] 🖼️ Índice Terapêutico — diagrama das curvas

![[farmaco-classe4-indice-terapeutico.jpg]]

*Legenda: o IT é a distância entre a curva de eficácia (ED50) e a curva de letalidade (LD50). Quanto mais separadas as curvas, maior o IT e mais seguro o fármaco. Digoxina tem IT baixo — as curvas quase se sobrepõem.*

---

> [!danger] Pegadinha clássica: IT vs. Margem de Segurança
> - **IT** usa os **pontos médios** (LD50/ED50) — ignora inclinação das curvas
> - **Margem de segurança** usa **extremos** (LD1/ED99) — mais conservadora
> - O Goodman é explícito: "as doses médias não consideram as inclinações das curvas"

### Fórmulas de prova

```
IT  =  LD50 / ED50

Margem de Segurança  =  LD1 / ED99
```

> Quanto **maior** o IT → **mais seguro** o fármaco
> - IT baixo: **digoxina, quimioterápicos** (usar com cautela)
> - IT muito alto: **benzilpenicilina** (extremamente seguro, salvo alergia)

---

### As 4 etapas do processo de toxicidade

1. **Administração** → o tóxico entra pelo lugar de exposição
2. **Interação com a molécula diana** → proteína, lipídio ou ácido nucleico
3. **Disfunção celular** → perturbação da regulação ou conservação celular
4. **Reparação anômala** → toxicidade manifesta-se quando os mecanismos protetores são superados

> [!warning] Etapa-chave: Reparação
> A toxicidade só aparece se os mecanismos de defesa forem esgotados ou se o tóxico superar a **capacidade de adaptação** do sistema biológico.

---

## 3. Explicação Detalhada

### Curvas dose-resposta

**Dose-resposta gradual** (indivíduo):
- Efeito contínuo ao longo do intervalo de doses
- Magnitude da resposta aumenta com a dose

**Dose-resposta quântica** (população):
- Resposta binária: presente ou ausente no indivíduo
- Porcentagem afetada cresce com a dose → determina LD50
- Linearizada em escala **logarítmica × probitos** → reta

---

> [!note] 🖼️ Curvas dose-resposta — gradual vs. quântica

![[farmaco-classe4-dose-resposta-gradual-cuantica.jpg]]

*Legenda: à esquerda, curva gradual de um indivíduo — o efeito aumenta continuamente com a dose. À direita, curva quântica de população — mostra a porcentagem que responde para cada dose. O ponto de 50% na curva quântica é o LD50 (letal) ou ED50 (efetivo).*

---

> [!tip] Curva em "U" — metais essenciais e vitaminas
> Ferro, zinco, vitaminas: falta → efeito adverso; excesso → toxicidade.
> A curva dose-resposta tem formato de **"U"** — efeitos adversos nos dois extremos.
> Isso rompe o modelo sigmoide clássico. Goodman cita como exceção importante.

---

### Toxicocinética versus Farmacocinética

**Toxicocinética** = farmacocinética em doses tóxicas. Pode diferir significativamente:

| Parâmetro | Dose terapêutica | Dose excessiva |
|---|---|---|
| Absorção | Pico em ~1h (AAS) | Pico pode ocorrer em **4–35h** (espasmo pilórico, bezoar) |
| Metabolismo | Cinética de 1ª ordem | Pode **saturar** → cinética zero ordem |
| Meia-vida | Fixa (ex.: ácido valproico ~14h) | Pode exceder 30–45h em overdose |
| Ligação proteica | Normal | Saturada em hiperdose |

> [!example] Caso clínico: ácido valproico
> Em dose terapêutica: t½ = 14h. Em overdose: t½ pode exceder 30–45h.
> O médico precisa saber que o coma pode durar **mais do que o esperado** pela dose usual.

---

### As 4 etapas de toxicidade — detalhado

**Etapa 1: Do lugar de exposição ao local de ação**

Lugares de exposição: pele, tubo digestivo, vias respiratórias, lugar de injeção, mordedura, **placenta**.

O tóxico pode sofrer:
- Absorção → distribuição → bioativação (→ tóxico final)
- Ou: eliminação pré-sistêmica, bioinativação, excreção (→ sem dano)

A intensidade do efeito tóxico depende da **concentração** e da **persistência** do tóxico final no local de ação.

---

**Etapa 2: Interação com a molécula diana**

| Molécula diana | Consequência |
|---|---|
| Ácido nucleico | Disfunção, destruição, formação de Ag |
| Proteína | União covalente, inibição enzimática |
| Lipídio | Alteração de membranas |

A alteração do ambiente biológico inclui: alteração de pH, destruição de gradientes eletroquímicos, ocupação espacial indevida.

---

**Etapa 3: Disfunção celular e efeitos tóxicos**

| Via | Trastorno |
|---|---|
| Regulação celular | Expressão gênica alterada, função celular perturbada |
| Conservação celular | Manutenção interna (ex.: ATP, integridade mitocondrial) e externa (ex.: sinalização paracrina) |

---

**Etapa 4: Reparação ou reparação anômala**

- Se os mecanismos de defesa conseguem reparar → sem toxicidade
- Se a capacidade protetora é **esgotada ou superada** → toxicidade manifesta

---

> [!note] 🖼️ As 4 etapas do processo de toxicidade — fluxograma

![[farmaco-classe4-etapas-proceso-toxicidad.jpg]]

*Legenda: o fluxograma mostra a sequência desde a exposição até a toxicidade manifesta. O ponto crítico é a etapa 4: a toxicidade só ocorre quando os mecanismos protetores (reparação, bioinativação, excreção) são superados. Isso explica por que a mesma dose pode ser tóxica em um paciente e não em outro.*

---

## 4. Classificação / Componentes / Sequência

### Tipos de toxicidade

```
Toxicidade
├── Farmacológica      ← dose-dependente, previsível
├── Patológica         ← intermediário tóxico (ex.: NAPQI do paracetamol)
├── Genotóxica         ← dano ao DNA, mutagênica/carcinogênica
├── Alérgica           ← imunomediada (4 tipos)
└── Idiossincrásica    ← genética, imprevisível por dose
```

---

> [!note] 🖼️ Tipos de toxicidade — classificação visual

![[farmaco-classe4-tipos-toxicidad.jpg]]

*Legenda: o slide organiza os 5 tipos de toxicidade com características e exemplos. Atenção à distinção entre alérgica (imunomediada, requer sensibilização) e idiossincrásica (genética, sem sensibilização prévia) — são os dois tipos mais confundidos em prova.*

---

### Toxicidade farmacológica — exemplos

| Fármaco | Mecanismo tóxico |
|---|---|
| Barbitúricos | Depressão SNC: ansióise → sedação → sonolência → coma |
| Nifedipina | Hipotensão dose-dependente |
| Antipsicóticos | Discinesia tardia (duração-dependente, não dose) |
| Tetraciclinas, sulfonamidas | Fototoxicidade (com exposição solar) |

---

### Toxicidade patológica — paracetamol

> [!danger] Caso paradigma: paracetamol + NAPQI
>
> **Via normal (dose terapêutica):**
> Paracetamol → glucuronídeo + sulfato (inofensivos) via conjugação
> Pequena fração → **NAPQI** via CYP → se liga à **glutationa** → ácido mercaptúrico (inofensivo)
>
> **Overdose:**
> CYP gera excesso de NAPQI → **glutationa se esgota** → NAPQI ataca macromoléculas celulares → **necrose hepática**
>
> CYP principal: **CYP2E1** (induzida pelo etanol → risco maior em etilistas crônicos)

---

### Toxicidade genotóxica

- Radiações ionizantes, substâncias químicas ambientais
- **Quimioterápicos antineoplásicos** (mutagênicos e carcinogênicos)
- Mecanismo: dano ao DNA → mutações → carcinogênese

---

### Reações alérgicas — 4 tipos (Classificação de Gell e Coombs)

> [!info] O slide menciona somente anafilaxia, citolítica e hipersensibilidade tardia. O Goodman acrescenta o Tipo III e detalha todos os mecanismos.

| Tipo | Nome | Mediador | Exemplos clínicos |
|---|---|---|---|
| **I** | Anafilática / imediata | IgE → mastócitos → histamina | Choque anafilático, urticária, asma |
| **II** | Citolítica | IgG/IgM → complemento → células circulantes | Anemia hemolítica (penicilina), trombocitopenia (quinidina), granulocitopenia (sulfonamidas) |
| **III** | Arthus / doença do soro | IgG → complexos Ag-Ac → complemento → endotélio | Erupções, artralgia, linfadenopatia, febre (6–12 dias) |
| **IV** | Hipersensibilidade tardia | Linfócitos T + macrófagos | Dermatite de contato (hera venenosa) |

> [!warning] Característica da alergia
> - Requer **sensibilização prévia** (período de latência mínimo: 1–2 semanas)
> - **Fármaco de baixo PM atua como hapteno** → se liga a proteína endógena → complexo antigênico
> - Relações dose-resposta **não são evidentes** nas reações alérgicas

---

> [!note] 🖼️ Reações alérgicas e idiossincrásicas — slide

![[farmaco-classe4-alergicas-idiosincrasicas.jpg]]

*Legenda: o slide compara as características das reações alérgicas (imunomediadas, requerem sensibilização, independentes de dose) com as idiossincrásicas (farmacogenéticas, sem sensibilização, determinadas por polimorfismo genético). Essa distinção é frequentemente cobrada em prova.*

---

### Reações idiossincrásicas

**Idiossincrasia** = reatividade anormal individual a um fármaco, independente da dose típica.

Causas: polimorfismos genéticos na farmacocinética ou em receptores.

| Exemplo clínico | Gene/Enzima | Manifestação |
|---|---|---|
| Isoniazida (tuberculose) | N-acetiltransferase | Acetiladores lentos → neuropatia periférica |
| Primaquina (malária) | G6PD eritrocitária | ~10% homens negros → anemia hemolítica grave |
| Varfarina (anticoagulante) | VKORC1 (vitamina K epóxido redutase) | Resistência geneticamente determinada |

> [!tip] Farmacogenética
> Uso de informação genética para individualizar doses = **farmacogenética** (Goodman Cap. 7).
> Base para entender por que um fármaco "não funciona" ou "é tóxico" em doses normais em certos pacientes.

---

#### 📌 Terminologia Diferenciada de Efeitos Adversos — Florez Cap. 7

| Termo | Definição | Exemplo clínico |
|---|---|---|
| **Efeito colateral** (*efecto colateral*) | Efeito inerente à ação farmacológica, mas indesejado naquele contexto | Boca seca por anticolinérgico prescrito para tosse |
| **Efeito secundário** (*efecto secundario*) | Consequência indireta da ação principal | Hipocalemia por diurético (a ação principal é natriurese) |
| **Reação alérgica** | Mediada por mecanismo imunológico; requer sensibilização prévia | Urticária, anafilaxia por penicilina |
| **Reação idiossincrásica** | Resposta anômala geneticamente determinada, sem relação com dose habitual | Paralisia prolongada por succinilcolina |
| **Reação adversa** (*reacción adversa*) | Efeito nocivo e indesejável com doses normais usadas em humanos | Hemorragia por anticoagulante em dose terapêutica |

> [!danger] Colateral ≠ Adverso — pegadinha de prova
> **Efeito colateral** é esperado e faz parte da farmacologia — só é indesejado *naquele contexto clínico*.
> **Reação adversa** é nociva e ocorre com dose habitual, mesmo que não seja a ação principal do fármaco.

---

#### 📌 Farmacogenética Expandida — Florez Cap. 7

**N-acetiltransferase (NAT) — acetiladores lentos vs. rápidos:**

| Grupo | Metabolismo | Consequência clínica | Fármacos afetados |
|---|---|---|---|
| **Acetiladores lentos** | Lento → acúmulo | **Neuropatia periférica** (isoniazida); lupus-like (hidralazina, procainamida) | Isoniazida, hidralazina, procainamida, sulfonamidas |
| **Acetiladores rápidos** | Rápido → metabolismo eficiente | Menor eficácia com doses padrão; mais hepatotóxicos (metabólito acetoilhidrazina) | Idem |

> ~50% da população branca/negra = acetiladores lentos; maioria dos asiáticos = acetiladores rápidos

---

**Deficiência de G-6-PD (glicose-6-fosfato desidrogenase):**

| Aspecto | Detalhe |
|---|---|
| Mecanismo | G-6-PD protege hemácia do estresse oxidativo via glutationa → deficiência → hemácias vulneráveis |
| Epidemiologia | ~10% homens negros; frequente em mediterrâneos, africanos, asiáticos; ligada ao X |
| Consequência | Fármacos oxidantes → **hemólise aguda** (anemia hemolítica aguda) |
| Fármacos de risco | Primaquina, nitrofurantoína, dapsona, sulfonamidas, AAS em altas doses, azul de metileno |

**Deficiência de Metahemoglobina Redutase:**
- ↓ conversão MetHb → Hb → acúmulo de **metahemoglobina** (não transporta O₂)
- Fármacos desencadeantes: benzocaína tópica, dapsona, nitrito de amila → cianose + hipoxemia

**Porfiria aguda intermitente:**
- **Barbitúricos**, fenitoína, carbamazepina, sulfonamidas, álcool → induzem ALA-sintetase → acúmulo de precursores do hemo
- **Crise de porfiria:** dor abdominal intensa + neuropatia periférica + manifestações psiquiátricas
- Diagnóstico: ↑ ALA e porfobilinogênio na urina durante crise

---

#### 📌 Interação Fármaco — Infecção Viral — Florez Cap. 7

| Associação | Reação clínica | Mecanismo |
|---|---|---|
| **EBV (mononucleose)** + ampicilina | **Exantema maculopapular** pruriginoso (~80% dos casos) | Infecção viral altera resposta imunológica |
| **Varicela ou influenza B** + AAS em crianças | **Síndrome de Reye** (encefalopatia + hepatite) | — |
| **HIV** + cotrimoxazol | Febre, erupção, neutropenia, trombocitopenia — muito mais frequente que em imunocompetentes | Alteração imunológica pelo HIV |
| **Influenza B** + teofilina | ↑ semivida da teofilina → toxicidade (taquicardia, convulsões) | Vírus → ↑ interferón → **inibe CYP450** hepático → ↓ metabolismo da teofilina |

> [!warning] Não confundir com alergia
> Nessas interações, o fármaco não é o culpado isolado — é a combinação vírus + fármaco. Após resolução da infecção, o fármaco pode ser mantido (exceto AAS em crianças com vírus = contraindicado).

---

#### 📌 Teratogênese — Florez Cap. 7

> [!danger] Fármacos durante a gestação
> **Teratógeno** = agente que ao atingir o embrião/feto através da mãe causa anomalias estruturais ou funcionais.
>
> **Janela crítica:** 2ª a 8ª semana do 1º trimestre (organogênese ativa)
> Após 8ª semana: menor risco de malformações maiores, mas ainda há risco funcional.
>
> **Exemplo histórico:** **Talidomida** → **focomelia** (ausência/encurtamento de membros) → retirada em 1961; hoje usada em mieloma múltiplo com controle rigoroso
>
> **Mecanismos de teratogênese:**
> - Interferência com ácido fólico (metotrexato, carbamazepina, fenitoína)
> - Estresse oxidativo
> - Alterações vasculares útero-placentárias
> - Mecanismos receptor-mediados (ex: retinoides → teratogênese severa)
>
> **Regra clínica:** toda mulher em idade fértil pode estar no 1º trimestre sem saber → prescrição cautelosa em toda consulta.

---

#### 📌 Reações por Uso Prolongado — Florez Cap. 7

> [!info] RAM que surgem só após contato mantido com o fármaco

| Fármaco | Reação por uso prolongado | Destaque |
|---|---|---|
| **Neurolépticos / antipsicóticos** | **Discinesia tardia** (movimentos involuntários orofaciais) | Pode ser irreversível; duração-dependente |
| **Corticoides** | Insuficiência adrenal ao suspender abruptamente | Retirada sempre gradual |
| **Clonidina** | **Hipertensão rebote** após retirada brusca | Anti-hipertensivo de ação central |
| **Nitratos** | **Espasmo coronário** após suspensão brusca | Nitrato tolerância + rebote |
| **Opioides / benzodiazepínicos** | Dependência física → síndrome de abstinência | Retirada gradual obrigatória |
| **Analgésicos-antitérmicos** | **Nefrotoxicidade crônica** (nefropatia por analgésicos) | Fenacetina foi retirada por isso; paracetamol em uso crônico excessivo |
| **Cloroquina / amiodarona** | Depósitos corneais, retinopatia | Monitoramento oftalmológico |

---

### 📌 Farmacovigilância — Florez Cap. 7

> [!info] Definição
> **Farmacovigilância** = atividade de saúde pública voltada a **identificar, quantificar, avaliar e prevenir riscos** associados ao uso de medicamentos após sua comercialização.
> Razão de existir: ensaios clínicos pré-aprovação são limitados em população, tempo e perfil de pacientes.

**Fluxo:**
```
Identificar risco → Quantificar risco → Avaliar risco → Gerir risco → Comunicar risco
```

#### Señal

> **Señal** = informação que sugere associação causal nova entre medicamento e evento adverso, com relevância para exigir verificação.
> Fontes: notificação espontânea, estudos pós-autorização, bases de dados sanitárias, publicações de casos.

#### Categorias de Frequência de RAM

| Categoria | Frequência |
|---|---|
| Muy frecuente | > 10% |
| Frecuente | 1–10% |
| Poco frecuente | 1/100 a 1/1.000 |
| Rara | 1/1.000 a 1/10.000 |
| Muy rara | < 1/10.000 |

#### Fórmulas de Risco em Farmacovigilância

|  | RAM presente | RAM ausente |
|---|---|---|
| **Expostos (com fármaco)** | a | b |
| **Não expostos** | c | d |

| Medida | Fórmula | Quando usar |
|---|---|---|
| **RA** (Risco Atribuível) | `[a/(a+b)] − [c/(c+d)]` | Excesso de risco atribuído ao fármaco |
| **RR** (Risco Relativo) | `[a/(a+b)] / [c/(c+d)]` | Estudos de coorte |
| **OR** (Odds Ratio) | `(a × d) / (b × c)` | Estudos caso-controle; aprox. RR quando RAM é rara |

#### Coorte vs. Caso-Controle

| Aspecto | Coorte | Caso-Controle |
|---|---|---|
| Ponto de partida | **Exposição** ao fármaco | **Presença/ausência da RAM** |
| Pergunta | Quem usou desenvolveu RAM? | Quem teve RAM foi exposto? |
| Medidas | Incidência, RA, RR | OR |
| Melhor para | Eventos frequentes | RAM grave e rara |
| Limitação | Custo e seguimento | Viés de memória/seleção |

#### Notificação e Causalidade

> [!tip] Tarjeta amarilla = notificação espontânea de suspeita de RAM
> Dados: paciente, fármaco suspeito, dose, via, data de início e fim, desfecho, outros fármacos.

**Algoritmo de Karch y Lasagna** — avalia causalidade:
1. Sequência temporal razoável após o fármaco?
2. Reação é conhecida para o medicamento?
3. Melhorou ao retirar (*dechallenge*)?
4. Voltou ao reintroduzir (*rechallenge*)?
5. Existe alternativa explicativa (doença, outro fármaco)?

> [!danger] Regra: data importa
> Sem sequência temporal adequada, não há causalidade — é apenas coincidência temporal.

---

## 5. Comparação entre Conceitos Parecidos

### Efeito aditivo × Sinérgico × Potenciação × Antagonismo

| Tipo | Definição | Exemplo/Fórmula |
|---|---|---|
| **Aditivo** | Efeito combinado = soma dos efeitos isolados | 2 + 3 = 5 |
| **Sinérgico** | Efeito combinado > soma dos efeitos isolados | 2 + 3 = 8 |
| **Potenciação** | Substância sem efeito tóxico sozinha, torna a outra muito mais tóxica | 0 + 2 = 10 |
| **Antagonismo** | Um fármaco reduz/interfere o efeito de outro | Ver tabela abaixo |

---

### 4 Tipos de Antagonismo

| Tipo | Mecanismo | Exemplo clínico |
|---|---|---|
| **Funcional** | Duas substâncias produzem efeitos opostos na mesma função fisiológica | Base de todo suporte clínico em intoxicações |
| **Químico** | Reação química entre substâncias → produto menos tóxico | Quelação de metais pesados |
| **Farmacocinético / Disposicional** | Alteração da absorção, biotransformação, distribuição ou excreção do tóxico | Colestiramina reduz absorção de propranolol |
| **De receptor** | Competição no receptor → efeito combinado < soma dos efeitos separados | Naloxona bloqueia receptores opioides |

> [!note] Goodman usa "disposicional" onde o slide usa "farmacocinético". São sinônimos — o mecanismo é o mesmo.

---

> [!note] 🖼️ Tipos de antagonismo — esquema visual

![[farmaco-classe4-tipos-antagonismo.jpg]]

*Legenda: o slide apresenta os 4 tipos de antagonismo com exemplos. O antagonismo de receptor (naloxona × opioide) é o mais cobrado em prova. O antagonismo químico (quelação) é o mecanismo dos antídotos para metais pesados (ex: dimercaprol para arsênico, chumbo).*

---

### IT vs. Margem de segurança

| | IT | Margem de segurança |
|---|---|---|
| Fórmula | LD50 / ED50 | LD1 / ED99 |
| Ponto da curva | Ponto médio (50%) | Extremos (1% e 99%) |
| Mais conservadora | Não | ✅ Sim |
| Desvantagem | Ignora inclinação das curvas | Mais difícil de determinar |

---

## 6. O Que Mais Cai na Prova

> [!danger] Lista dos conceitos mais cobrados

1. **Fórmulas**: IT = LD50/ED50 / MS = LD1/ED99
2. **IT alto = mais seguro; IT baixo = perigo** (digoxina = baixo; penicilina = alto)
3. **Gradual vs. quântica**: gradual = indivíduo (contínua); quântica = população (binária)
4. **4 etapas da toxicidade**: exposição → molécula diana → disfunção celular → reparação anômala
5. **Paracelso**: somente a dose determina se algo é veneno
6. **Paracetamol + NAPQI** = toxicidade patológica → esgota glutationa → necrose hepática
7. **Tipo I** (IgE, imediata) vs. **Tipo IV** (linfócito T, tardia) — sempre caem juntos
8. **Idiossincrasia** ≠ alergia: idiossincrasia é genética/farmacogenética, não imunomediada
9. **Efeito aditivo (2+3=5)** vs. **sinérgico (2+3>5)** vs. **potenciação (0+2=10)**
10. **4 tipos de antagonismo**: funcional / químico / farmacocinético / de receptor

---

### Toxíndromes — quadro de prova (Goodman Tabela 4-9)

> 📌 Conteúdo do Goodman — não coberto no slide, mas altamente cobrado

| Classe | Exemplo | Estado mental | FC | PA | FR | T | Pupila | Outros |
|---|---|---|---|---|---|---|---|---|
| Simpaticomiméticos | Cocaína, anfetamina | Agitação | ↑ | ↑ | ↑ | ↑ | Midríase | Tremores, diaforese |
| Anticolinérgicos | Difenidramina, beladona | Delírio | ↑ | ↑ | ↑ | ↑ | Midríase | Íleo, rubor |
| Colinérgicos | Organofosforados | Sonolência/coma | ↑ | ↓ | — | — | Miose | SLMDCE¹, fasciculação |
| Opioides | Heroína, oxicodona | Sonolência/coma | ↓ | ↓ | ↓ | — | Miose | Tríade: miose+coma+bradipneia |
| Sedativo-hipnóticos | Benzodiazepinas, barbitúricos | Sonolência/coma | ↓ | ↓ | ↓ | — | — | — |
| Salicilatos | AAS | Confusão | ↑ | ↑ | ↑ | — | — | Diaforese, vômitos |
| Bloqueador Ca²⁺ | Verapamil | — | ↓ | ↓ | — | — | — | — |

¹ SLMDCE = sialorreia, lacrimejamento, micção, diarreia, cólica gástrica, êmese

---

> [!note] 🖼️ Toxíndromes — Tabelas 4-9 e 4-10 do Goodman

![[goodman-cap4-pagina-11-tabelas-4-9-e-4-10.png]]

*Legenda: as tabelas oficiais do Goodman com os sinais clínicos de cada toxíndrome. Comparar com a tabela acima — o Goodman adiciona informações de temperatura corporal e outros sinais físicos. A tríade opioide (miose + coma + bradipneia) e os sinais anticolinérgicos (midríase + íleo + rubor + delírio) são os mais frequentes em prova.*

---

### 📌 Fármacos de início tardio — atenção clínica (Goodman Cap. 4)

> [!warning] Fármacos com pico tóxico > 4–6h após a ingestão
> Em overdose, esses fármacos têm absorção atrasada ou efeito tóxico diferido — o paciente pode parecer bem nas primeiras horas e deteriorar depois.

| Fármaco | Motivo do atraso | Consequência clínica |
|---|---|---|
| **AAS (salicilatos)** | Espasmo pilórico → bezoar → pico em 4–35h | Alcalose respiratória → acidose metabólica tardia |
| **Ácido valproico** | t½ triplica em overdose (14h → 30–45h) | Coma pode durar muito mais que o esperado |
| **Paracetamol** | Necrose hepática manifesta em 24–72h | Paciente assintomático nas primeiras horas → falsa segurança |
| **Varfarina** | Anticoagulação máxima em 36–72h | Hemorragia tardia grave |
| **Sulfonilureias** | Hipoglicemia recorrente em 12–24h | Alta prematura → morte em casa |
| **IMAOs** | Crise adrenérgica pode ocorrer até 24h depois | Interação com tiramina e simpaticomiméticos |
| **Fármacos de liberação prolongada** | Absorção contínua → pico atrasado | Calcular dose total ingerida, não concentração do momento |

> [!danger] Regra de observação
> Todo paciente com ingestão desses fármacos deve ser observado por **mínimo 6–12 horas**, independentemente de estar assintomático.

---

### 📌 ABCDE do Tratamento de Intoxicações (Goodman Cap. 4)

> [!info] Prioridade no atendimento ao intoxicado

| Letra | Ação | Detalhe |
|---|---|---|
| **A** — Airway | Via aérea | Garantir permeabilidade; intubar se necessário |
| **B** — Breathing | Ventilação | Oxigênio suplementar; suporte ventilatório |
| **C** — Circulation | Circulação | Acesso venoso; fluidos; vasopressores se choque |
| **D** — Deficiencies | Antídotos empíricos | Glicose 50% + naloxona + tiamina + O₂ → "coma de causa desconhecida" |
| **E** — Exposure | Toxíndrome | Identificar síndrome clínica para guiar o antídoto específico |

> [!tip] O "D" em prática
> Antes de confirmar o tóxico, administrar **glicose + naloxona + tiamina** em coma de causa desconhecida:
> - Glicose → reverte hipoglicemia
> - Naloxona → reverte opioide
> - Tiamina → previne encefalopatia de Wernicke (antes da glicose em etilistas)

---

### 📌 Carvão Ativado — descontaminação GI (Goodman Cap. 4)

> [!info] Como funciona
> O carvão ativado adsorve o tóxico no lúmen intestinal, impedindo sua absorção. É o método de descontaminação GI mais utilizado.

**Dose:** 0,5–2 g/kg (máximo 75–100 g em adultos)

**Janela de eficácia:** apenas se administrado **em até 1 hora** após a ingestão

**Não funciona para:**
- Álcoois (etanol, metanol, etilenoglicol)
- Corrosivos ácidos e bases fortes
- Metais pesados (ferro, chumbo, lítio)
- Hidrocarbonetos

> [!danger] ⚠️ Contraindicação absoluta
> Carvão ativado é **contraindicado** em pacientes com via aérea não protegida (risco de aspiração) e em ingestão de corrosivos (pode mascarar lesão endoscópica).

---

### 📌 Fases dos Ensaios Clínicos (Goodman Cap. 4)

> 📌 Conteúdo do Goodman — base para questões de contexto sobre aprovação de fármacos

| Fase | Participantes | Objetivo | Dado importante |
|---|---|---|---|
| **Fase I** | 20–100 voluntários sadios | Segurança, farmacocinética, dose máxima tolerada | Primeira vez em humanos |
| **Fase II** | 100–200 pacientes | Eficácia inicial, dose terapêutica, efeitos adversos | Maioria dos fármacos falha aqui |
| **Fase III** | Centenas a milhares | Eficácia × placebo (duplo-cego), perfil completo de EAs | Base para aprovação regulatória |
| **Fase IV** | População geral (pós-mercado) | Vigilância de EAs raros, novas indicações | Pode levar à retirada do fármaco |

> [!note] Estatística do Goodman
> Apenas **~25% dos candidatos** que entram na Fase II chegam à aprovação final. A maioria falha por eficácia insuficiente ou segurança inaceitável.

---

### 📌 Interação clínica histórica — terfenadina + macrolídeo (Goodman)

> [!danger] Caso real: terfenadina + eritromicina → retirada do mercado
> **Terfenadina** (anti-histamínico H1 de 1ª geração) era metabolizada pelo CYP3A4.
> **Eritromicina** (macrolídeo) inibe o CYP3A4 → terfenadina acumula → **prolonga o intervalo QT → arritmia ventricular (Torsades de Pointes) → morte súbita**.
>
> Resultado: terfenadina foi **retirada do mercado** e substituída pela fexofenadina (metabólito ativo, sem risco cardíaco).
>
> ⚠️ **Princípio geral:** inibidores do CYP3A4 (macrolídeos, azólicos, suco de grapefruit) podem transformar fármacos seguros em perigosos.

---

## 7. Mapa Mental em Texto

```
TOXICIDADE E INTOXICAÇÃO
│
├── DOSE-RESPOSTA
│   ├── Gradual (indivíduo, contínua)
│   └── Quântica (população, binária)
│       ├── LD50 → IT = LD50/ED50
│       └── LD1 + ED99 → Margem de segurança = LD1/ED99
│
├── MECANISMOS (4 etapas)
│   ├── 1. Exposição → absorção → distribuição → bioativação
│   ├── 2. Interação com molécula diana (proteína/lípido/DNA)
│   ├── 3. Disfunção celular (regulação + conservação)
│   └── 4. Reparação anômala → TOXICIDADE
│
├── TIPOS DE TOXICIDADE
│   ├── Farmacológica (dose-dependente, previsível)
│   ├── Patológica → intermediário reativo (NAPQI → necrose hepática)
│   ├── Genotóxica (dano DNA → quimioterápicos)
│   ├── Alérgica (imunomediada, requer sensibilização)
│   │   I=IgE / II=IgG citolítica / III=complexos / IV=LT tardio
│   └── Idiossincrásica (farmacogenética)
│
├── INTERAÇÕES FARMACOLÓGICAS
│   ├── Aditivo (2+3=5)
│   ├── Sinérgico (2+3=8)
│   ├── Potenciação (0+2=10)
│   └── Antagonismo
│       ├── Funcional / Químico / Farmacocinético / De receptor
│
├── TOXÍNDROMES
│   ├── Simpatomimético: ↑FC ↑PA midríase agitação
│   ├── Anticolinérgico: ↑FC midríase delírio íleo rubor
│   ├── Colinérgico (SLMDCE): miose fasciculação
│   └── Opioide: ↓FC ↓PA ↓FR miose coma
│
└── MANEJO CLÍNICO
    ├── ABCDE: Airway / Breathing / Circ / Deficiências / Exposure
    ├── "D" empírico: glicose + naloxona + tiamina
    ├── Carvão ativado: < 1h, 0,5–2 g/kg; NÃO para álcoois/metais/corrosivos
    └── Início tardio: AAS / valproato / paracetamol / sulfonilureias / IMAOs
```

---

## 8. Perguntas de Revisão Ativa

**1.** Qual é a diferença entre IT e margem de segurança. Por que a margem de segurança é mais conservadora.

**2.** Um fármaco tem LD50 = 200 mg/kg e ED50 = 10 mg/kg. Qual é o IT. O fármaco é seguro.

> *IT = 200/10 = 20. Relativamente seguro, mas precisa de mais informação sobre a inclinação das curvas.*

**3.** Paracetamol em overdose causa que tipo de toxicidade. Explique o mecanismo.

> *Patológica. NAPQI (via CYP2E1) esgota glutationa → ataca macromoléculas celulares → necrose hepática.*

**4.** Um paciente chega com miose, bradipneia e coma. Qual toxíndrome. Qual antídoto.

> *Toxíndrome opioide (tríade clássica). Antídoto: naloxona (antagonismo de receptor).*

**5.** Qual é a diferença entre reação alérgica Tipo I e Tipo IV. Dê um exemplo de cada.

> *Tipo I: IgE, imediata, mastócitos (ex.: choque anafilático com penicilina). Tipo IV: linfócito T, tardia (ex.: dermatite de contato).*

**6.** Por que alguns pacientes tratados com isoniazida desenvolvem neuropatia periférica e outros não.

> *Polimorfismo na N-acetiltransferase: acetiladores lentos acumulam isoniazida → toxicidade. Fenômeno idiossincrásico/farmacogenético.*

**7.** Qual a diferença entre efeito sinérgico e potenciação.

> *Sinérgico: ambas as substâncias têm efeito e o combinado é maior que a soma. Potenciação: uma substância não tem efeito tóxico isolado, mas torna a outra muito mais tóxica (0+2=10).*

**8.** Citar os 4 tipos de antagonismo e um exemplo clínico de antagonismo de receptor.

> *Funcional, químico, farmacocinético/disposicional, de receptor. Exemplo de receptor: naloxona para intoxicação por opioides.*

**9.** Por que um paciente que ingeriu paracetamol em overdose pode parecer bem nas primeiras horas.

> *Porque a necrose hepática demora 24–72h para se manifestar. O paracetamol é um fármaco de início tardio — a ausência de sintomas precoces não descarta intoxicação grave.*

**10.** Quais são as letras do ABCDE no tratamento de intoxicações e o que significa o "D".

> *Airway, Breathing, Circulation, Deficiencies, Exposure. O "D" representa antídotos empíricos: glicose + naloxona + tiamina + O₂ para coma de causa desconhecida.*

**11.** Qual a diferença entre efeito colateral e reação adversa.

> *Efeito colateral = inerente à farmacologia do fármaco, apenas indesejado naquele contexto (ex: boca seca por anticolinérgico). Reação adversa = efeito nocivo com dose habitual, não necessariamente ligado à ação principal.*

**12.** Um paciente africano inicia primaquina para malária e desenvolve anemia hemolítica aguda. Qual é a causa e o mecanismo.

> *Deficiência de G-6-PD: sem esta enzima, hemácias não conseguem se proteger do estresse oxidativo provocado pela primaquina → hemólise. Reação idiossincrásica (farmacogenética).*

**13.** Uma criança com mononucleose recebe ampicilina. O que pode ocorrer e por quê.

> *Exantema maculopapular pruriginoso em ~80% dos casos. Não é alergia à penicilina — é uma interação específica com o vírus EBV que altera a resposta imunológica. Após resolução da infecção, amoxicilina/ampicilina podem ser usadas.*

**14.** Quais são as fórmulas de RA, RR e OR em farmacovigilância. Em que tipo de estudo cada uma é usada.

> *RA = [a/(a+b)] - [c/(c+d)]: excesso de risco. RR = [a/(a+b)] / [c/(c+d)]: risco relativo, usada em estudos de coorte. OR = (a×d)/(b×c): odds ratio, usada em casos-controle; se RAM rara, OR ≈ RR.*

---

## 9. Estratégia de Memorização

### IT e margem — mnemônico visual

```
IT  =  LD50 / ED50   →  "pontos MÉDIOS"  →  50/50
MS  =  LD1  / ED99   →  "extremos CONSERVADORES"  →  1/99
```

> Quanto mais alto o número → mais separadas as curvas → mais **seguro**.

---

### SLMDCE — toxíndrome colinérgica (organofosforados)

> 🧠 **S**ialorreia · **L**acrimejamento · **M**icção · **D**iarreia · **C**ólica gástrica · **Ê**mese
> "**Sai Líquido Muito De Cima ao Embaixo**" (da boca até o ânus, literalmente)

---

### 4 tipos de reação alérgica — mnemônico "ACAD"

| Letra | Tipo | Mediador |
|---|---|---|
| **A**nafilática | I | IgE |
| **C**itolítica | II | IgG/IgM + complemento |
| **A**rthus (doença do soro) | III | IgG + complexos imunes |
| **D**ermatite (tardia) | IV | Linfócito T |

> "**ACAD** — Ana Cita Arthur depois" (Ana = tipo I imediata, cita Arthur = tipo III, depois = tipo IV tardia)

---

### Fármacos com IT baixo — "Dig Quimio"

> **Dig**oxina + **Quimio**terápicos antineoplásicos = os dois grandes exemplos de IT **baixo** = maior risco de intoxicação.

---

### Carvão ativado — regra dos "não"

> ❌ **NÃO** funciona para: **Á**lcoois · **C**orrosivos · **M**etais (ACM)
> ❌ **NÃO** dar se > 1h após ingestão
> ❌ **NÃO** dar sem via aérea protegida

---

## 📌 Lacunas Identificadas

| Lacuna | Fonte | Status |
|---|---|---|
| Curva em "U" para metais essenciais e vitaminas | Goodman Cap. 4 | ✅ Integrado (seção 3) |
| Toxicocinética vs. farmacocinética em overdose | Goodman Cap. 4 | ✅ Integrado (seção 3) |
| Classificação de Gell-Coombs completa (4 tipos) | Goodman Cap. 4 | ✅ Integrado (seção 4) |
| Farmacogenética aplicada (isoniazida, primaquina, varfarina) | Goodman Cap. 4 | ✅ Integrado (seção 4) |
| Toxíndromes (Goodman Tabela 4-9) | Goodman Cap. 4 | ✅ Integrado (seção 6) |
| **Fármacos de início tardio** | Goodman Cap. 4 | ✅ Adicionado em 14-05-2026 |
| **ABCDE do tratamento** | Goodman Cap. 4 | ✅ Adicionado em 14-05-2026 |
| **Carvão ativado** (dose, janela, contraindicações) | Goodman Cap. 4 | ✅ Adicionado em 14-05-2026 |
| **Fases dos ensaios clínicos** (I, II, III, IV) | Goodman Cap. 4 | ✅ Adicionado em 14-05-2026 |
| **Terfenadina + macrolídeo** (QT longo, retirada) | Goodman Cap. 4 | ✅ Adicionado em 14-05-2026 |
| **Terminologia diferenciada** — colateral vs. secundário vs. adverso | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |
| **Farmacogenética expandida** — NAT (acetiladores), G-6-PD, MetHb, porfiria | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |
| **Interação fármaco-infecção viral** — EBV+ampicilina, Reye, HIV+cotrimoxazol | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |
| **Teratogênese** — talidomida, janela 2ª-8ª semana, mecanismos | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |
| **Reações por uso prolongado** — discinesia tardia, rebote, abstinência | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |
| **Farmacovigilância** — señal, frequência RAM, RA/RR/OR, Karch y Lasagna | Florez Cap. 7 | ✅ Adicionado em 14-05-2026 |

---

## Navegação

← [[P1-T04-Formas-Farmaceuticas-e-Vias-de-Administracao|T04 — Formas Farmacêuticas e Vias de Administração]]
→ [[P1-T06-AINES|T06 — Anti-inflamatórios Não Esteroidais (AINES)]]
↑ [[MED-Vault/03-Disciplinas/Farmacologia/00-Controle/_Prioridades-P1|Prioridades P1 — Farmacologia]]


---

## Pipeline NotebookLM - Orientacao de Geracao

REGRA: Este arquivo eh um resumo ja processado.
NAO usar --fulltext --resumo --topicos.
Usar: --infografico --audio --slides --mapa --quiz

### Topicos para Infografico + Podcast individuais
(extraidos automaticamente - revisar antes de gerar)

- [ ] Núcleo Obrigatório
- [ ] Definições essenciais
- [ ] Fórmulas de prova
- [ ] As 4 etapas do processo de toxicidade
- [ ] Explicação Detalhada

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
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T05-Toxicidade-e-Intoxicacao.md" --disciplina farmacologia --tema "P1-T05-Toxicidade-e-Intoxicacao-topico1" --infografico --audio

Resumo inteiro:
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T05-Toxicidade-e-Intoxicacao.md" --disciplina farmacologia --tema "P1-T05-Toxicidade-e-Intoxicacao" --slides --mapa --quiz

Guia: 00-Meta/Guias/guia-pipeline-notebooklm-resumos.md
