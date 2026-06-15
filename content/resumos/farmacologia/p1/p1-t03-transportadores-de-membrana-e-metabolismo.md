---
tipo: resumo
disciplina: farmacologia
tema: transportadores-membrana-metabolismo
tags:
  - farmacologia
  - transportadores-membrana
  - abc
  - slc
  - cyp450
  - metabolismo-farmacos
  - p1
  - resumo
fonte: >-
  Slide 15-Resumo TRANSPORTADORES.pdf | Slide Classe_2_Zavala (46 slides) |
  Goodman & Gilman Cap. 5 e 6 (12ª ed.)
prova: P1
data: 06-05-2026
data-revisao: 14-05-2026
status: revisando
ficha-registrada: false
_source: >-
  03-Disciplinas/Farmacologia/Revisao/Resumos/P1/P1-T03-Transportadores-de-Membrana-e-Metabolismo.md
---

# Tema 03 — Transportadores de Membrana e Metabolismo de Fármacos

> **Fontes deste resumo:**
> 🖥️ Resumo `15-TRANSPORTADORES DE MEMBRANA Y RESPUESTA A FÁRMACOS.pdf` (16 p.)
> 🖥️ Slide Dr. Cristian Zavala — `Classe_2_Farmaco_Transporte_de_membranas.pdf` (46 slides)
> 📚 Goodman & Gilman 12ª ed. — Caps. 5 e 6
> 📌 FMO3, epóxido hidrolase, NAT2/isoniazida, Síndrome de Gilbert, loperamida+quinidina, OATP1B1/miopatia — **não estavam nos slides**

---

## 1. Visão Geral

Este tema é a **ponte entre farmacocinética e farmacodinâmica:**
- **Farmacocinética:** transportadores determinam *quanto* chega e *quando* sai
- **Farmacodinâmica:** alguns transportadores são o próprio **alvo** do fármaco

> [!info] Frase-chave do material
> **"Transportadores = porteiros moleculares."** Sem eles, nenhum fármaco vai onde precisa ir — nem sai quando precisa sair.

O tema se divide em **duas grandes partes:**
1. **Transportadores de membrana** — tipos, superfamílias ABC e SLC, localização e relevância clínica
2. **Metabolismo de fármacos** — Fase I e Fase II, CYP450, fatores modificadores

---

## 2. Núcleo Obrigatório

> O que precisa estar na ponta da língua:

1. **ABC** = ATP Binding Cassette → ativo primário, gasta ATP, geralmente **expulsa** fármaco
2. **SLC** = Solute Carrier → facilitado ou ativo secundário, **entrada e saída** bidirecional
3. **MDR1 / Glicoproteína-P / ABCB1** = o transportador estrela. Localizado em intestino, fígado, rim e **BHE**. Substrato-exemplo: **digoxina**
4. **SERT** (SLC6A4) = transportador de serotonina; alvo dos **ISRS** (fluoxetina, sertralina...)
5. **Fase I** (não sintética) = oxidação/redução/hidrólise → pode ativar ou inativar
6. **Fase II** (sintética) = conjugação → geralmente **inativa** e aumenta hidrossolubilidade
7. Enzima central da Fase I = **CYP450** (sistema citocromo P450)
8. **Indutores** (fenobarbital, rifampicina) → aceleram metabolismo → ↓ efeito | **Inibidores** → retardam → ↑ toxicidade

---

## 3. Explicação Detalhada

### 3.1 Por que os transportadores importam.

Todo fármaco, seja oral ou IV, precisa de transportadores para:
- Entrar nos tecidos → **absorção e distribuição**
- Sair dos tecidos → **eliminação**
- Atravessar barreiras → hematoencefálica, placentária, hematotesticular
- Ou ser diretamente **inibido** como alvo (ex: ISRS bloqueiam SERT)

Localização dos transportadores mais importantes:

| Órgão | Função | Transportadores |
|---|---|---|
| Intestino | Absorção (ou expulsão de volta ao lúmen) | MDR1, MRP2, BCRP + CYP3A4 |
| Fígado | Captação e excreção biliar | OATP1B1 (entrada), MDR1/MRP2/BSEP (saída biliar) |
| Rim | Excreção urinária | OCT1/OCT2/OAT (entrada), MATE/MDR1/MRP (saída) |
| BHE | Proteção do SNC | MDR1 (expulsa fármacos do SNC) |

> [!note] 🖼️ Transportadores nas vias farmacocinéticas e no hepatócito
> ![[goodman-cap5-pagina-02-figuras-5-1-e-5-2.png]]
> *Goodman Fig. 5-1 (esq.): papel dos transportadores (T) nas vias PK — absorção, distribuição, metabolismo e excreção. Fig. 5-2 (dir.): transportadores no hepatócito atuando em conjunto com enzimas Fase I e II na captação e efluxo biliar.*

---

### 3.2 Mecanismos de transporte — revisão completa

| Mecanismo | Gradiente | ATP | Proteína | Subfamília |
|---|---|---|---|---|
| **Difusão simples** | A favor | Não | Não | — |
| **Difusão facilitada** | A favor | Não | Sim | SLC |
| **Transporte ativo primário** | Contra | **Sim (direto)** | Sim | **ABC** |
| **Transporte ativo secundário — simporte** | Contra (um soluto) | Não direto | Sim | SLC |
| **Transporte ativo secundário — antiporte** | Contra (um soluto) | Não direto | Sim | SLC |

> [!warning] Pegadinha clássica de prova
> **Difusão facilitada ≠ transporte ativo.** A facilitada usa proteína carreadora, mas NÃO gasta ATP — segue o gradiente. O ativo secundário também não usa ATP diretamente, mas usa energia armazenada em gradiente iônico (geralmente Na⁺ criado pela Na⁺/K⁺-ATPase).

**Difusão passiva simples — 3 etapas:**
1. Fármaco deixa o meio aquoso e entra na fase lipídica da bicamada
2. Atravessa a bicamada pelo gradiente de concentração
3. Reentra no meio aquoso do outro lado

> [!info] Diferença fundamental: transportador vs canal
> - **Canal:** abre e fecha de forma estocástica (aleatória), sem interação específica com substrato → **não saturável**, alta taxa de fluxo (10⁶–10⁸ moléculas/s)
> - **Transportador:** forma complexo intermediário com substrato → **saturável**, alvo de inibição por análogos, taxa menor (10¹–10³ moléculas/s)

> [!note] 🖼️ Mecanismos básicos de transporte de membrana
> ![[zavala-slide12-mecanismos-basicos-transporte.jpg]]
> *Slide Zavala: difusão simples, difusão facilitada e transportes ativos primário (ABC/ATP) e secundário (SLC/gradiente iônico). A direção do fluxo e o uso de energia diferenciam cada mecanismo.*

---

### 3.3 As duas superfamílias ABC e SLC

#### ABC — ATP Binding Cassette

| Característica | Valor |
|---|---|
| Número de genes | **49 genes** humanos |
| Mecanismo | Transporte ativo primário — hidrolisa ATP |
| Direção | Geralmente **efluxo** (expulsa) |
| Grupos | 7 subgrupos (ABCA a ABCG) por homologia de sequência |
| Mutações em genes ABC | Causam ≥ 13 doenças genéticas |

**Principais transportadores ABC e relevância clínica:**

| Transportador | Gene | Localização | Função | Relevância |
|---|---|---|---|---|
| **MDR1 / P-gp** | ABCB1 | Intestino, fígado, rim, **BHE** | Expulsa xenobióticos | Resistência a quimio; interação digoxina/ciclosporina; loperamida+quinidina na BHE |
| **MRP2** | ABCC2 | Fígado, rim, intestino | Excreção biliar de bilirrubina conjugada | Defeito → **Síndrome de Dubin-Johnson** |
| **MRP1** | ABCC1 | Universal | Secreção de leucotrienos | Resistência a vincristina, metotrexato |
| **BCRP** | ABCG2 | Fígado, rim, BHE | Transporte de hem, estatinas | Resistência a rosuvastatina, mitoxantrona |
| **BSEP** | ABCB11 | Fígado canalicular | Excreção de sais biliares | Defeito → **colestase intra-hepática familiar** |
| **CFTR** | ABCC7 | Pulmão, pâncreas, intestino | Canal de cloro regulado por ATP | Defeito → **fibrose cística** |

> [!danger] Os "3 Defeitos ABC" mais cobrados
> - **MRP2 (ABCC2)** → Síndrome de Dubin-Johnson (icterícia + bilirrubina conjugada alta)
> - **BSEP (ABCB11)** → Colestase intra-hepática familiar (prurido, colestase)
> - **CFTR (ABCC7)** → Fibrose cística (muco espesso, infecções pulmonares recorrentes)

> [!note] 🖼️ Principais transportadores ABC — localização e relevância
> ![[transportadores-principales-abc.jpg]]
> *Slide: resumo visual dos principais transportadores da superfamília ABC — gene, localização tecidual e relevância clínica de cada um.*

---

#### SLC — Solute Carriers

| Característica | Valor |
|---|---|
| Número de genes | **48 famílias, ~300 transportadores** |
| Mecanismo | Difusão facilitada ou ativo secundário |
| Direção | **Bidirecional** (influxo e efluxo) |
| Fonte de energia | Gradiente iônico (geralmente Na⁺) |

**Transportadores SLC mais importantes em farmacologia:**

| Transportador | Gene | Localização | Fármaco que age nele | Relevância clínica |
|---|---|---|---|---|
| **SERT** | SLC6A4 | Neurônios serotoninérgicos | **ISRS** (fluoxetina, sertralina, paroxetina, escitalopram) | Alvo dos antidepressivos mais prescritos |
| **DAT** | SLC6A3 | Neurônios dopaminérgicos | Estimulantes; cocaína; metilfenidato | |
| **NET** | SLC6A2 | Neurônios noradrenérgicos | ADT (tricíclicos); **atomoxetina** (TDAH); cocaína | |
| **GAT1** | SLC6A1 | Neurônios GABAérgicos (pré-sin.) | **Tiagabina** (antiepiléptico) | |
| **OATP1B1** | SLCO1B1 | Fígado (basolateral) | Estatinas (captação hepática) | ⚠️ Se inibido/polimórfico → estatinas escapam → **miopatia** |
| **OCT1** | SLC22A1 | Fígado (basolateral) | Metformina (captação hepática) | Polimorfismo → ↓ acúmulo hepático → paradoxalmente ↓ acidose láctica |
| **OCT2** | SLC22A2 | Rim (basolateral) | Metformina, cisplatina | Inibição → ↓ excreção renal de metformina |
| **SLC12** | — | Rim | Alvo dos **diuréticos tiazídicos** | |

> [!warning] OATP1B1 e miopatia por estatinas
> O OATP1B1 capta estatinas do sangue para o hepatócito (local de ação na HMG-CoA redutase). Enquanto estão no fígado, ficam fora do músculo.
> Se OATP1B1 é **inibido** (ex: ciclosporina, gemfibrozil) ou tem polimorfismo genético (SLCO1B1*5) → estatinas não entram no fígado → circulam sistemicamente → acumulam no músculo → **rabdomiólise/miopatia**.

> [!warning] OCT1 e metformina — captação hepática e acidose láctica
> OCT1 hepático concentra metformina no fígado → onde age (inibe gluconeogênese) E onde pode acumular → acidose láctica.
> Polimorfismo de OCT1 que reduz captação → paradoxalmente **↓ risco de acidose láctica** (e ↓ eficácia).

> [!tip] Mnemônico — SERT, DAT, NET
> **S**erotonina → **S**ERT → SLC6A**4**
> **D**opamina → **D**AT → SLC6A**3**
> **N**oradrenalina → **N**ET → SLC6A**2**

> [!note] 🖼️ Classificação ABC vs SLC — visão geral comparativa
> ![[transportadores-clasificacion-abc-slc.jpg]]
> *Slide: tabela comparativa das superfamílias ABC e SLC — mecanismo, energia, direção predominante e exemplos de cada família.*

---

### 3.4 Interação MDR1 + CYP3A4 no intestino — o "duplo bloqueio"

> [!warning] Sistema de dupla proteção intestinal
> No epitélio intestinal, MDR1 e CYP3A4 trabalham **juntos** como um sistema de defesa:
> 1. **CYP3A4** metaboliza o fármaco absorvido na célula intestinal
> 2. **MDR1** expulsa o fármaco de volta ao lúmen antes que ele seja absorvido
>
> Resultado: o fármaco fica exposto mais tempo ao CYP3A4, e o que não foi metabolizado é expulso. Biodisponibilidade oral cai dramaticamente.

**Consequência clínica:** fármacos como ciclosporina, que **inibem MDR1** e **CYP3A4**, aumentam a biodisponibilidade de vários outros fármacos → risco de toxicidade.

---

### 3.5 Transportadores e reações adversas — as 3 categorias

| Categoria | Mecanismo | Exemplo clínico |
|---|---|---|
| **1** | ↑ concentração plasmática do fármaco (↑ captação ou ↓ secreção) | Digoxina + inibidor de MDR1 (ciclosporina) → intoxicação digitálica |
| **2** | ↑ concentração no órgão-alvo (maior captação ou menor eliminação local) | Acúmulo de quimioterápico no rim → nefrotoxicidade |
| **3** | ↑ concentração plasmática de composto **endógeno** (fármaco inibe sua eliminação) | MRP2 defeituoso → acúmulo de bilirrubina → Síndrome de Dubin-Johnson |

> [!example] Mini-caso clínico — Digoxina + Ciclosporina
> Paciente de 68 anos, IC em uso de digoxina, inicia ciclosporina após transplante renal. Desenvolve náuseas, bradicardia e visão amarelada.
> **Mecanismo:** ciclosporina inibiu MDR1 → eliminação renal e intestinal de digoxina reduzida → toxicidade digitálica.

> [!example] Mini-caso clínico — Loperamida + Quinidina (MDR1 na BHE)
> Paciente usa loperamida (antidiarreico opioide "periférico") + quinidina (antiarrítmico). Desenvolve depressão respiratória — efeito central inesperado.
> **Mecanismo:** quinidina é inibidor potente da MDR1. Ao inibir MDR1 na BHE, permite que a loperamida entre no SNC → ação opioide central → depressão respiratória.
> ⚠️ A concentração plasmática de loperamida **não muda** — o que muda é o acesso ao SNC.

> [!note] 🖼️ 3 categorias de RAM mediadas por transportadores
> ![[goodman-cap5-pagina-04-figura-5-3.png]]
> *Goodman Fig. 5-3: três painéis ilustrando os mecanismos pelos quais transportadores causam reações adversas — (1) aumento plasmático por ↓ depuração hepática/renal, (2) acúmulo no órgão-alvo toxicológico, e (3) acúmulo de composto endógeno por inibição de seu transportador de eliminação.*

---

### 3.6 Populações especiais e transportadores

| Grupo | Risco | Mecanismo |
|---|---|---|
| **Crianças pequenas** | ↑ passagem de fármacos ao SNC | BHE imatura → MDR1 menos funcional |
| **Idosos** | ↑ acumulação sistêmica | ↓ função renal e hepática → ↓ eliminação via transportadores |
| **Gestantes** | Risco de passagem placentária | Barreira placentária tem MDR1 + MRP2 + BCRP; inibição → ↑ exposição fetal |
| **Insuficiência renal** | ↑ toxicidade | Redução da excreção tubular via OCT/OAT/MATE |

---

## 4. Metabolismo de Fármacos — Visão Completa

### 4.1 Por que existe o metabolismo.

- Fármacos **lipossolúveis** são filtrados no rim, mas **reabsorvidos** nos túbulos → nunca seriam eliminados
- O metabolismo os converte em compostos mais **polares/hidrofílicos** → excretáveis na urina ou bile
- Fármacos **hidrossolúveis** podem ser excretados diretamente, sem metabolismo

**Definição:** conjunto de modificações químicas que sofrem os fármacos no organismo pela ação de **enzimas**. Sinônimo: *biotransformação*.

**Resultados possíveis do metabolismo:**
1. **Inativação** — forma ativa → metabólito inativo (mais comum)
2. **Ativação** — pró-fármaco → metabólito ativo (ex: Enalapril → Enalaprilato; Clopidogrel → ativo via CYP2C19)
3. **Mudança de atividade** → metabólito tóxico (ex: acetaminofeno em excesso → NAPQI hepatotóxico via CYP2E1/CYP3A4)

> [!note] 🖼️ Metabolismo de fármacos — visão geral Fase I, Fase II e CYP450
> ![[zavala-slide38-metabolismo-farmacos-fase1-fase2-cyp450.jpg]]
> *Slide Zavala: mapa geral do metabolismo de xenobióticos — localização hepática, sequência Fase I → Fase II, e papel central do CYP450 na Fase I.*

---

### 4.2 Fase I e Fase II — tabela completa

| | **FASE I** | **FASE II** |
|---|---|---|
| **Tipo** | Não sintética | Sintética |
| **Reações** | Oxidação, redução, hidrólise | Conjugação |
| **Enzimas** | CYP450 (principal), FMO, epóxido hidrolase, hidrolases | UGT (glucuronidação), SULT (sulfatação), NAT (acetilação), GST (glutationa), MT (metilação) |
| **Efeito sobre a molécula** | Introduz grupos funcionais reativos (–OH, –NH₂, –SH) | Conjuga o grupo reativo com molécula endógena |
| **Resultado** | Pode ativar, inativar ou tornar tóxico | Geralmente **inativa** → ↑↑ hidrossolubilidade |
| **Objetivo final** | Preparar para Fase II ou excreção | Facilitar excreção renal ou biliar |
| **Localização celular** | Retículo endoplasmático liso (CYP, FMO, mEH, UGT) | Citosol (GST, SULT, NAT, MT) + RE liso (UGT) |

> [!note] Sequência das fases não é obrigatória
> - Fármaco pode ir direto à Fase II (sem Fase I)
> - Fármaco pode ser excretado sem metabolismo
> - Fase II não necessariamente vem depois da Fase I

> [!tip] Mnemônico Fase II — **GASM**
> **G**lucuronidação (UGT — a mais frequente) | **A**cetilação (NAT) | **S**ulfatação (SULT) | **M**etilação (MT)
> + conjugação de glutationa (GST)

---

### 4.3 O sistema CYP450 — o motor do metabolismo

**CYP450** (citocromo P450) = família de enzimas oxidativas localizadas no **retículo endoplasmático liso** dos hepatócitos e outros tecidos.

- Responsável por **~75% do metabolismo hepático de fase I**
- **CYP3A4 = mais de 50% dos fármacos usados clinicamente**
- Nome vem da absorção da luz a **450 nm** quando complexado com CO
- Reação: usa NADPH + O₂; a NADPH-CYP450 oxidorredutase doa elétrons para o CYP

**Isoformas mais importantes clinicamente:**

| Isoforma | Substratos importantes | Indutores | Inibidores |
|---|---|---|---|
| **CYP3A4** | Estatinas, ciclosporina, benzodiazepínicos, anticoncepcionais, opioides, terfenadina | Rifampicina, carbamazepina, fenitoína, **erva-de-são-joão** | Cetoconazol, eritromicina, suco de toranja |
| **CYP2D6** | Antidepressivos (ADT), beta-bloqueadores, opioides, antipsicóticos, codeína | Pouco induzível | Fluoxetina, paroxetina, haloperidol |
| **CYP2C9** | Varfarina, AINEs, fenitoína, tolbutamida | Rifampicina | Fluconazol, amiodarona |
| **CYP2C19** | Omeprazol, clopidogrel (pró-fármaco), diazepam | Rifampicina | Omeprazol, fluoxetina |
| **CYP1A2** | Teofilina, cafeína, clozapina | Cigarro, carvão vegetal | Ciprofloxacino, fluvoxamina |

> [!danger] Interação clínica — Rifampicina e anticoncepcionais
> Rifampicina é o **indutor de CYP3A4 mais potente**. Quando co-administrada com anticoncepcionais orais (metabolizados por CYP3A4), acelera tanto seu metabolismo que pode causar **falha contraceptiva**.
> ⚠️ Mulheres em tratamento de tuberculose devem usar método contraceptivo adicional.

> [!danger] Erva-de-São-João (Hypericum perforatum)
> Fitoterápico popular que **induz CYP3A4** (e outros CYPs). Pode causar falha de anticoncepcional oral, redução dos níveis de ciclosporina (imunossupressor) e antiretrovirais.
> ⚠️ Muitas pacientes não relatam uso de fitoterápicos — sempre perguntar ativamente na anamnese.

> [!danger] Interação clínica — Suco de toranja (grapefruit)
> Contém **furanocumarinas** que inibem **irreversivelmente** o CYP3A4 intestinal. Um único copo aumenta significativamente a biodisponibilidade de estatinas, benzodiazepínicos e bloqueadores de canal de Ca²⁺. Efeito dura até 72 horas.

> [!danger] Terfenadina + eritromicina → torsades de pointes
> Terfenadina (anti-histamínico antigo) era um pró-fármaco ativado pelo CYP3A4. Eritromicina inibe CYP3A4 → terfenadina não ativada → acúmulo do composto original → bloqueio de canal de K⁺ → **arritmia grave (torsades de pointes)** → **retirado do mercado**.
> 💡 Substituído pela **fexofenadina** (metabólito ativo já formado — dispensa metabolismo pelo CYP3A4).

> [!note] 🖼️ Fração de fármacos metabolizados pelas principais CYPs (Fase I e Fase II)
> ![[goodman-cap6-pagina-07-figura-6-3.png]]
> *Goodman Fig. 6-3: gráficos de pizza da contribuição de cada isoforma CYP (Fase I) e enzima conjugadora (Fase II) no metabolismo dos fármacos. CYP3A4 domina com mais de 50%; seguido por CYP2D6 e CYP2C9.*

---

### 4.3a FMO — Monoxigenases que Contêm Flavina

**FMOs** = segunda família de enzimas oxidativas da Fase I, localizadas no **retículo endoplasmático liso** do fígado.

- Existem **6 famílias** de FMO; a mais abundante no fígado é a **FMO3**
- Substratos: nicotina, cimetidina, ranitidina, clozapina (antipsicótico), itoprida (procinético)

> [!info] Diferencial chave: FMO vs CYP
> | Característica | FMO | CYP |
> |---|---|---|
> | Indução por fármacos | **NÃO** | Sim (rifampicina, carbamazepina) |
> | Inibição por fármacos | **NÃO** | Sim (cetoconazol, eritromicina) |
> | Interações medicamentosas | **Mínimas** | Frequentes e clinicamente relevantes |
> | Substratos | Compostos com N, S, P | Compostos hidrofóbicos, N, O |
>
> ⚠️ Fármacos metabolizados pela FMO têm **menor risco de interação** que os metabolizados pelo CYP.

> [!danger] Síndrome do odor de peixe — deficiência de FMO3
> A FMO3 metaboliza o N-óxido de trimetilamina (TMAO) em trimetilamina (TMA).
> Deficiência genética de FMO3 → TMAO acumula → exalado pela respiração, suor e urina → **odor intenso de peixe podre**.
> Condição autossômica recessiva, sem risco de vida, mas com grande impacto social.

---

### 4.3b Epóxido Hidrolase (mEH) — Detoxificação de Epóxidos Reativos

O CYP450 pode gerar **epóxidos** como intermediários oxidativos — compostos eletrofílicos altamente reativos que podem ligar-se a DNA, RNA e proteínas causando toxicidade.

A **epóxido hidrolase microssômica (mEH)** hidrolisa esses epóxidos em compostos menos reativos (diidrodiois), completando a detoxificação.

> [!example] Caso clínico — Carbamazepina + Ácido Valpróico
> - CYP converte carbamazepina → **10,11-epóxido-carbamazepina** (metabólito ativo e tóxico em excesso)
> - mEH converte o epóxido → diidrodiol inativo → excretado
> - **Ácido valpróico** e valnoctamida **inibem a mEH** → o epóxido ativo acumula → ↑ toxicidade da carbamazepina (diplopia, tontura, ataxia)
>
> ⚠️ Interação clinicamente relevante em epilepsia — carbamazepina + valproato requer monitoramento dos níveis séricos.

---

### 4.4 Fatores que modificam a biotransformação

| Fator | Efeito |
|---|---|
| **Indução enzimática** (fenobarbital, rifampicina, carbamazepina, erva-de-são-joão) | ↑ velocidade de metabolismo → ↓ concentração do fármaco → ↓ efeito |
| **Autoindução** | O próprio fármaco induz seu metabolismo (ex: carbamazepina) |
| **Inibição enzimática** | ↓ velocidade de metabolismo → ↑ concentração → ↑ toxicidade |
| **Recém-nascidos** | CYP450 **imaturo** → acúmulo → risco de toxicidade grave |
| **Idosos** | ↓ massa hepática e atividade CYP → metabolismo reduzido |
| **Hepatopatias** | ↓ metabolismo → acúmulo → toxicidade (ajustar dose) |
| **Sexo feminino** | Maior proporção de gordura corporal → maior reservatório para lipofílicos |
| **Gravidez** | Alterações enzimáticas; maior vulnerabilidade fetal |
| **Dieta hipoprotéica** | ↓ atividade enzimática (enzimas são proteínas) |
| **Polimorfismos genéticos** (CYP2D6, CYP2C19, NAT2, UGT1A1) | Variação enorme interindividual — metabolizadores lentos vs. ultrarrápidos |

> [!note] 🖼️ Fatores modificadores da biotransformação — genética, indução e inibição
> ![[zavala-slide45-inducao-inibicao-fatores-geneticos.jpg]]
> *Slide Zavala: fatores que modificam a atividade enzimática do metabolismo — indução (↑ CYP → ↓ fármaco), inibição (↓ CYP → ↑ fármaco), e fatores genéticos (polimorfismos que explicam variação interindividual).*

> [!danger] Síndrome cinzenta do recém-nascido — imaturidade de UGT
> O **cloranfenicol** é metabolizado pelo UGT hepático. Em neonatos, o UGT é imaturo → acúmulo → cianose, colapso cardiovascular e morte ("síndrome cinzenta"). Cloranfenicol é contraindicado em neonatos e lactantes.

> [!info] Farmacogenômica — CYP2D6 e metabolizadores
> **Metabolizadores lentos** (poor metabolizers) de CYP2D6 (~7% europeus):
> - Codeína não é convertida em morfina → sem analgesia
> - Antidepressivos tricíclicos se acumulam → toxicidade
>
> **Metabolizadores ultrarrápidos:** codeína convertida em morfina muito rapidamente → superdosagem
>
> 📌 A genotipagem de CYP antes do tratamento é a base da **medicina personalizada/farmacogenômica**.

---

### 4.4a NAT2 — Farmacogenômica da Acetilação (Isoniazida)

A **N-acetiltransferase 2 (NAT2)** é uma enzima da Fase II que acetila fármacos com grupos amina aromática ou hidrazina. É **altamente polimórfica** — o polimorfismo de NAT2 foi um dos **primeiros polimorfismos farmacogenéticos descritos na medicina**.

| Fenótipo | Genótipo | Prevalência | Consequência clínica |
|---|---|---|---|
| **Acetilador lento** | Homozigoto para alelos variantes de NAT2 | ~50% caucasianos | Acumula fármaco → toxicidade mais frequente |
| **Acetilador rápido** | Um ou dois alelos funcionais | ~50% | Elimina rapidamente → pode ter eficácia reduzida |

**Fármacos afetados pelo polimorfismo NAT2:**

| Fármaco | Consequência no acetilador lento |
|---|---|
| **Isoniazida** (tuberculose) | ↑ acúmulo → **neuropatia periférica** (dormência, formigamento — por interferência no metabolismo de piridoxina/B6) |
| **Hidralazina** (anti-hipertensivo vasodilatador) | Hipotensão profunda, taquicardia; **lúpus eritematoso sistêmico induzido** |
| **Procainamida** (antiarrítmico) | ↑ risco de lúpus induzido |
| **Dapsona** (hanseníase) | ↑ toxicidade hematológica |
| **Sulfonamidas** | ↑ hipersensibilidade idiossincrásica |

> [!danger] Acetiladores lentos + aminas aromáticas → câncer de bexiga
> Em tecidos como o epitélio vesical, a NAT1 (ubíqua) pode gerar metabólitos reativos de aminas aromáticas bicíclicas.
> Acetiladores lentos de NAT2 (deficientes de detoxificação hepática) têm **↑ risco de câncer de bexiga** quando expostos a essas aminas (ex: tabaco, corantes industriais — aminas arilaminas).

> [!note] 🖼️ Fármacos sujeitos à acetilação NAT e toxicidades associadas
> ![[goodman-cap6-pagina-16-quadro-6-4.png]]
> *Goodman Quadro 6-4: lista de fármacos metabolizados por acetilação (NAT) com os efeitos tóxicos conhecidos nos acetiladores lentos — isoniazida, hidralazina, dapsona, procainamida, sulfonamidas.*

---

### 4.4b Síndrome de Gilbert — Polimorfismo UGT1A1

**Síndrome de Gilbert:** polimorfismo do promotor do gene **UGT1A1** (alelo UGT1A1*28) que reduz a expressão da enzima. Afeta **até 10% da população**. Geralmente benigna.

- UGT1A1 glucuronida bilirrubina → excreção biliar
- Com UGT1A1 reduzida → bilirrubina **não conjugada (indireta)** levemente elevada
- Clínica: icterícia leve, especialmente em jejum prolongado ou estresse

> [!danger] Gilbert + Irinotecana → toxicidade grave
> A irinotecana é um quimioterápico pró-fármaco com sequência de ativação/inativação:
> - Irinotecana → carboxilesterase sérica → **SN-38** (inibidor de topoisomerase, ativo e tóxico)
> - SN-38 → **UGT1A1** → SN-38-glucuronídeo (inativo) → bile → excretado
>
> Em portadores de Síndrome de Gilbert (UGT1A1 reduzida):
> - SN-38 não glucuronidado eficientemente → acumula no sangue → **neutropenia, leucopenia e diarreia grave (potencialmente fatal)**
>
> ⚠️ A genotipagem de UGT1A1 antes de iniciar irinotecana é recomendada em vários países.

**Síndromes de hiperbilirrubinemia não conjugada hereditária:**

| Síndrome | Mecanismo | Gravidade |
|---|---|---|
| **Gilbert** | ↓ expressão UGT1A1 (polimorfismo promotor) | Benigna, até 10% da população |
| **Crigler-Najjar tipo II** | UGT1A1 residual muito baixa | Grave; tratável com fototerapia |
| **Crigler-Najjar tipo I** | Ausência completa de UGT1A1 | Fatal sem transplante hepático |

---

### 4.5 Deficiência de G6PD — exemplo de fator genético enzimático

> [!info] G6PD — a enzimopatia mais comum no mundo
> **Glicose-6-fosfato desidrogenase** protege eritrócitos do estresse oxidativo. Sua deficiência (ligada ao X) afeta ~400 milhões de pessoas mundialmente.
>
> **Fármacos que desencadeiam anemia hemolítica em portadores:**
> - Primaquina (antimalárico)
> - Dapsona (hanseníase)
> - Ácido nalidíxico
> - Nitrofurantoína
>
> ⚠️ Triagem de G6PD antes de prescrever primaquina é obrigatória em áreas endêmicas.

---

## 5. Comparação entre Conceitos Parecidos

### ABC vs SLC — tabela final

| Característica | **Superfamília ABC** | **Superfamília SLC** |
|---|---|---|
| Sigla | ATP Binding Cassette | Solute Carrier |
| Energia | ATP direto | Gradiente iônico (ou nenhuma) |
| Mecanismo | Ativo primário | Facilitado + ativo secundário |
| Direção predominante | **Efluxo** (expulsa) | **Influxo e efluxo** |
| Número de genes | 49 | 48 famílias / ~300 genes |
| Transportador estrela | MDR1 / P-gp / ABCB1 | SERT (SLC6A4) |
| Mutações → doença | Fibrose cística (CFTR), Dubin-Johnson (MRP2), colestase (BSEP) | Variantes SERT/DAT (depressão/TDAH) |
| Alvo farmacológico | Raramente | **Sim** (ISRS, tiazídicos, tiagabina, atomoxetina) |

> [!tip] Macete
> **ABC = Arma de Bloqueio Celular** (gasta ATP, bloqueia/expulsa)
> **SLC = Solutos Livres Circulam** (bidirecional, sem ATP direto)

### Indução vs Inibição enzimática

| | **Indução** | **Inibição** |
|---|---|---|
| Efeito no metabolismo | ↑ velocidade | ↓ velocidade |
| Concentração do fármaco | **Diminui** | **Aumenta** |
| Risco clínico | **Falha terapêutica** | **Toxicidade** |
| Exemplos de agentes | Rifampicina, fenobarbital, carbamazepina, tabaco, erva-de-são-joão | Cetoconazol, eritromicina, suco de toranja, fluoxetina |
| Tempo para efeito | Dias a semanas (síntese de novas enzimas) | Horas (competição ou ligação irreversível) |

### FMO vs CYP — diferença crítica

| | **FMO** | **CYP** |
|---|---|---|
| Indução | **NÃO** | Sim |
| Inibição | **NÃO** | Sim |
| Interações medicamentosas | Raras/mínimas | Frequentes e clinicamente relevantes |
| Polimorfismo clínico | FMO3 → odor de peixe | CYP2D6, CYP2C19, CYP2C9 → variação de resposta |
| Substrato-exemplo | Nicotina, clozapina, cimetidina | >50% de todos os fármacos (CYP3A4) |

---

## 6. O Que Mais Cai na Prova

> ❓ Questões favoritas neste tema:

1. **"A superfamília ABC se diferencia da SLC porque..."** → ABC usa ATP diretamente (ativo primário); SLC é facilitada ou ativo secundário

2. **"Qual transportador é conhecido como glicoproteína-P."** → MDR1 / ABCB1

3. **"Um paciente em uso de digoxina inicia ciclosporina e desenvolve sintomas de intoxicação. O mecanismo é..."** → Ciclosporina inibiu MDR1 → ↑ nível de digoxina

4. **"O SERT é o alvo de qual classe de antidepressivos."** → ISRS (fluoxetina, sertralina, paroxetina, escitalopram, citalopram)

5. **"Qual defeito genético causa a síndrome de Dubin-Johnson."** → Defeito em MRP2 (ABCC2) → excreção biliar de bilirrubina conjugada prejudicada

6. **"A Fase I do metabolismo difere da Fase II porque..."** → Fase I: não sintética, pode ativar ou inativar; Fase II: sintética (conjugação), geralmente inativa

7. **"A rifampicina causa falha de anticoncepcional oral porque..."** → É indutora potente de CYP3A4 → acelera metabolismo dos hormônios → ↓ concentração → falha

8. **"Por que cloranfenicol é contraindicado em neonatos."** → UGT imaturo → acúmulo → síndrome cinzenta (cianose, colapso CV, morte)

9. **"O que é um transportador de efluxo."** → Proteína que expulsa ativamente substâncias do interior celular (ex: MDR1 expulsa fármacos de células tumorais → resistência à quimioterapia)

10. **"A deficiência de G6PD é clinicamente relevante porque..."** → Portadores desenvolvem anemia hemolítica ao usar oxidantes como primaquina e dapsona

11. **"Um paciente recebe loperamida e quinidina juntos e desenvolve depressão respiratória. Por quê."** → Quinidina inibe MDR1 na BHE → loperamida entra no SNC → efeito opioide central → depressão respiratória

12. **"Paciente com Síndrome de Gilbert recebe irinotecana. Qual o risco."** → UGT1A1 reduzida → SN-38 (metabólito ativo) não glucuronidado → acumula → neutropenia e diarreia grave

13. **"Acetiladores lentos de NAT2 em uso de isoniazida têm risco de..."** → Neuropatia periférica (acúmulo de isoniazida não acetilada → interfere no metabolismo de piridoxina/B6)

14. **"Por que a suco de toranja difere da eritromicina como inibidor de CYP3A4."** → Toranja: inibição irreversível por furanocumarinas (efeito dura até 72 h). Eritromicina: inibição competitiva/reversível.

---

## 7. Mapa Mental em Texto

```
TRANSPORTADORES DE MEMBRANA
│
├── MECANISMOS
│   ├── Passivo (sem ATP)
│   │   ├── Difusão simples (bicamada lipídica, sem proteína)
│   │   └── Difusão facilitada (com proteína SLC, sem ATP)
│   └── Ativo (com ATP ou gradiente)
│       ├── Primário — ABC (ATP direto, efluxo)
│       └── Secundário — SLC (gradiente Na⁺, simporte/antiporte)
│
├── SUPERFAMÍLIA ABC (49 genes)
│   ├── MDR1/ABCB1 → intestino, fígado, rim, BHE → digoxina; loperamida+quinidina
│   ├── MRP2/ABCC2 → fígado → Dubin-Johnson se defeito
│   ├── BSEP/ABCB11 → fígado → colestase familiar se defeito
│   └── CFTR/ABCC7 → pulmão/pâncreas → fibrose cística se defeito
│
├── SUPERFAMÍLIA SLC (~300 genes)
│   ├── SERT/SLC6A4 → neurônios → alvo dos ISRS
│   ├── DAT/SLC6A3 → dopaminérgicos → cocaína, metilfenidato
│   ├── NET/SLC6A2 → noradrenérgicos → ADT, atomoxetina
│   ├── OATP1B1/SLCO1B1 → fígado → estatinas (polimorfismo → miopatia)
│   └── OCT1/SLC22A1 → fígado → metformina (polimorfismo → ↓ acidose)
│
└── RELEVÂNCIA CLÍNICA
    ├── MDR1 + CYP3A4 no intestino = "duplo bloqueio" oral
    ├── MDR1 na BHE = proteção do SNC (loperamida+quinidina)
    ├── 3 categorias de RAM por transportadores
    └── Resistência: câncer (MDR1), anticonvulsivantes

METABOLISMO DE FÁRMACOS
│
├── OBJETIVO
│   └── Lipofílico → Hidrofílico (para excreção)
│
├── FASE I (não sintética)
│   ├── Oxidação / Redução / Hidrólise
│   ├── CYP450 (75% do metabolismo; CYP3A4 = >50% dos fármacos)
│   ├── FMO (sem indução/inibição → sem interações medicamentosas)
│   ├── Epóxido hidrolase (mEH) → detoxifica epóxidos reativos
│   └── Resultado: pode ativar, inativar ou tornar tóxico
│
├── FASE II (sintética)
│   ├── Glucuronidação (UGT) — a mais frequente
│   │   └── UGT1A1 polimorfismo → Síndrome de Gilbert → risco irinotecana
│   ├── Sulfatação (SULT)
│   ├── Acetilação (NAT2 polimorfismo) → isoniazida: lento/rápido
│   └── Metilação (MT)
│
├── CYP450 — isoformas-chave
│   ├── CYP3A4 → >50%; induzido por rifampicina, erva-de-são-joão
│   ├── CYP2D6 → polimorfismo clínico (codeína, ADT)
│   └── CYP2C9 → varfarina (alto risco de interação)
│
└── FATORES MODIFICADORES
    ├── Indução (rifampicina, erva-de-são-joão) → ↓ efeito
    ├── Inibição (cetoconazol, toranja irreversível) → ↑ toxicidade
    ├── Recém-nascidos / idosos → metabolismo reduzido
    ├── Hepatopatias → ajustar dose
    └── Genética (CYP2D6, NAT2, UGT1A1, G6PD) → variação interindividual
```

---

## 8. Perguntas de Revisão Ativa

**1.** Qual é a diferença entre os transportadores ABC e SLC em termos de mecanismo e fonte de energia?
> *ABC: ativo primário, usa ATP diretamente, geralmente efluxo. SLC: facilitado ou ativo secundário, usa gradiente iônico, bidirecional.*

**2.** Por que o MDR1 intestinal é tão clinicamente relevante?
> *Trabalha com CYP3A4 como "duplo bloqueio": CYP3A4 metaboliza o fármaco na célula intestinal e MDR1 expulsa o restante de volta ao lúmen. Juntos reduzem drasticamente a biodisponibilidade oral.*

**3.** Qual é o mecanismo de ação dos ISRS relacionado a transportadores?
> *Inibem SERT (SLC6A4), o transportador responsável pela recaptação de serotonina no neurônio pré-sináptico. Com o SERT bloqueado, a serotonina fica mais tempo na fenda sináptica.*

**4.** Quais são as 3 categorias de RAM mediadas por transportadores? Dê um exemplo de cada.
> *1) ↑ plasma do fármaco: digoxina + ciclosporina (inibição de MDR1). 2) ↑ concentração no órgão: quimioterápico + rim. 3) ↑ endógeno: Dubin-Johnson (MRP2 defeituoso → acúmulo de bilirrubina).*

**5.** Um paciente usa rifampicina e anticoagulante (varfarina). O que se espera da anticoagulação?
> *Rifampicina induz CYP (incluindo CYP2C9), aumentando o metabolismo da varfarina → ↓ concentração → ↓ anticoagulação → risco de trombose. Ajuste de dose necessário.*

**6.** Por que a síndrome cinzenta do neonato ocorre com cloranfenicol?
> *O cloranfenicol é conjugado por UGT hepático. Em neonatos, UGT é imaturo → acúmulo de cloranfenicol → toxicidade mitocondrial → síndrome cinzenta (colapso CV, cianose).*

**7.** O que é autoindução enzimática? Dê um exemplo.
> *Quando o próprio fármaco induz o CYP que o metaboliza, acelerando sua própria eliminação. Exemplo: carbamazepina induz CYP3A4 e CYP2C8 → ao longo do tempo, metaboliza-se mais rapidamente → dose precisa ser aumentada.*

**8.** Por que portadores de deficiência de G6PD não devem usar primaquina?
> *G6PD protege os eritrócitos do estresse oxidativo. Primaquina gera metabólitos oxidantes. Sem G6PD para neutralizá-los, os eritrócitos sofrem hemólise → anemia hemolítica aguda.*

**9.** Por que um acetilador lento de NAT2 em uso de isoniazida pode desenvolver neuropatia?
> *NAT2 é a principal via de eliminação da isoniazida por acetilação. Acetiladores lentos não convertem isoniazida eficientemente → acúmulo → neuropatia periférica (interfere no metabolismo de piridoxina/B6).*

**10.** Uma paciente com Síndrome de Gilbert vai iniciar quimioterapia com irinotecana. Qual o risco específico e por quê?
> *UGT1A1 reduzida → SN-38 (metabólito ativo da irinotecana) não glucuronidado eficientemente → acumula no sangue → neutropenia, leucopenia e diarreia grave (potencialmente fatal).*

---

## 9. Estratégia de Memorização

> [!tip] 🧠 ABC vs SLC em uma frase
> **ABC = ATP, Bomba, Contra** (usa ATP, como bomba, vai Contra o gradiente, e geralmente expulsa)
> **SLC = Sem ATP Livre Circula** (sem ATP direto, transporta a favor ou por gradiente secundário)

---

> [!tip] 🧠 Os 3 defeitos ABC para decorar
> Pense em **3 doenças com "c"**: **C**istose Cística (CFTR), **C**olestase (BSEP), bilirrubina **C**onjugada alta em Dubin-Johnson (MRP2)

---

> [!tip] 🧠 Fase I vs Fase II — o trabalho em equipe
> - Fase I = **"Torna reativo"** → abre portas ou coloca um gancho na molécula
> - Fase II = **"Gruda e manda embora"** → conjuga um grupo grande (ácido glucurônico etc.) → muito polar → vai pro rim

---

> [!tip] 🧠 CYP450 — "qual CYP metaboliza o quê"
> **3A4** = **mais de 50%** de tudo. Rifampicina induz, toranja inibe (irreversível).
> **2D6** = **Depressão** (antidepressivos, antipsicóticos) — e é polimórfico!
> **2C9** = **Varfarina** (anticoagulante de janela terapêutica estreita — interação perigosa)

---

> [!tip] 🧠 Farmacogenômica — os 3 polimorfismos essenciais
> - **CYP2D6** → lento = codeína sem efeito; ultrarrápido = morfina em excesso
> - **NAT2** → lento = isoniazida acumula = neuropatia; rápido = menos eficaz
> - **UGT1A1** (Gilbert) → irinotecana em Gilbert = SN-38 acumula = neutropenia + diarreia

---

## 10. Dúvidas para Confirmar

> [!question] Pontos a esclarecer com fontes adicionais:

1. **O polimorfismo SLCO1B1*5 (OATP1B1) é testado rotineiramente antes de prescrever estatinas?** O Goodman menciona miopatia como consequência, mas não especifica se a triagem genética é prática corrente ou apenas em casos suspeitos.

2. **FMO3 é realmente "não induzível" em todos os contextos?** O Goodman diz que FMOs não são induzidas por receptores xenobióticos — mas há evidências emergentes de regulação por hormônios e estados metabólicos.

3. **A dose de isoniazida é ajustada na prática com base no fenótipo acetilador?** O protocolo atual da OMS usa dose fixa sem genotipagem obrigatória — confirmar se isso mudou.

4. **Síndrome de Crigler-Najjar tipo I — há perspectiva de terapia gênica?** Transplante hepático é o único tratamento curativo atual, mas pesquisas com terapia gênica estão em andamento.

5. **A interação loperamida + quinidina é clinicamente relevante hoje?** Quinidina é usada menos atualmente — verificar se outros inibidores de MDR1 (ex: verapamil, amiodarona) produzem efeito similar com loperamida.

---

## 📌 Lacunas Identificadas nos Slides

> Conteúdo que os slides omitem ou abordam superficialmente — atualizado após cruzamento com Goodman Cap. 5 e 6:

| Lacuna | Fonte | Status |
|---|---|---|
| **FMO3 e síndrome do odor de peixe** | Goodman Cap. 6 | ✅ Adicionado (§4.3a) |
| **Epóxido hidrolase (mEH)** — carbamazepina + valproato | Goodman Cap. 6 | ✅ Adicionado (§4.3b) |
| **NAT2 farmacogenômica** — isoniazida, acetiladores lentos/rápidos | Goodman Cap. 6 | ✅ Adicionado (§4.4a) |
| **Síndrome de Gilbert** — UGT1A1 + irinotecana | Goodman Cap. 6 | ✅ Adicionado (§4.4b) |
| **Loperamida + quinidina** — MDR1 na BHE | Goodman Cap. 5 | ✅ Adicionado (§3.5) |
| **OATP1B1 + estatinas → miopatia** | Goodman Cap. 5 | ✅ Adicionado (§3.3) |
| **OCT1 + metformina → acidose láctica** | Goodman Cap. 5 | ✅ Adicionado (§3.3) |
| **Erva-de-São-João como indutor CYP3A4** | Goodman Cap. 6 | ✅ Adicionado (§4.3) |
| **Terfenadina + eritromicina → torsades** | Goodman Cap. 6 | ✅ Adicionado (§6) |
| **Transportador vs canal** — saturabilidade e taxas | Goodman Cap. 5 | ✅ Adicionado (§3.2) |
| **Glicoproteína-P no pulmão** como reservatório temporário | Goodman Cap. 2 | Pendente |
| **NAPQI** — metabólito tóxico do paracetamol em detalhe | Goodman Cap. 2 | Pendente |
| **URAT1 (SLC22A12)** como alvo do probenecida em gota | Goodman Cap. 5 | Pendente |

---

*← [[P1-T02-Farmacocinetica-e-Farmacodinamica]] | [[_Prioridades-P1-Farmacologia]] | [[P1-T04]] →*


---

## Pipeline NotebookLM - Orientacao de Geracao

REGRA: Este arquivo eh um resumo ja processado.
NAO usar --fulltext --resumo --topicos.
Usar: --infografico --audio --slides --mapa --quiz

### Topicos para Infografico + Podcast individuais
(extraidos automaticamente - revisar antes de gerar)

- [ ] Núcleo Obrigatório
- [ ] Explicação Detalhada
- [ ] 1 Por que os transportadores importam.
- [ ] 2 Mecanismos de transporte — revisão completa
- [ ] 3 As duas superfamílias ABC e SLC

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
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T03-Transportadores-de-Membrana-e-Metabolismo.md" --disciplina farmacologia --tema "P1-T03-Transportadores-de-Membrana-e-Metabolismo-topico1" --infografico --audio

Resumo inteiro:
python notebooklm_pipeline.py --vault-files "03-Disciplinas\Farmacologia\Revisao\Resumos\P1\P1-T03-Transportadores-de-Membrana-e-Metabolismo.md" --disciplina farmacologia --tema "P1-T03-Transportadores-de-Membrana-e-Metabolismo" --slides --mapa --quiz

Guia: 00-Meta/Guias/guia-pipeline-notebooklm-resumos.md
