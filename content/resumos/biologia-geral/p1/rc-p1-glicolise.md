---
tags:
  - biologia-geral
  - p1
  - resumo
  - respiracao-celular
  - glicolise
data: 03-07-2026
disciplina: biologia-geral
tema: RC-P1-Glicolise
tipo: resumo
prova: P1
status: finalizado
fonte: Khan Academy PT | OpenStax Biology 2e | StatPearls - Aerobic Glycolysis
ficha-registrada: true
_source: 03-Disciplinas/Biologia-Geral/Revisao/Resumos/RC-P1-Glicolise.md
---

# Respiracao Celular — Parte 1: Glicolise

> [!info] Localizacao e Contexto
> A glicolise ocorre no **citosol** (parte liquida do citoplasma), **fora da mitocondria**.
> Nao precisa de oxigenio — e a unica etapa funcional em condicoes anaerobicas.
> Presente em quase todos os organismos vivos — via metabolica mais antiga conhecida.

---

## 1. Visao Geral

**Equacao simplificada:**

```
Glicose (6C)  →  2 Piruvatos (3C)  +  2 ATP liquidos  +  2 NADH
```

**Duas fases:**

| Fase | ATP | O que acontece |
|---|---|---|
| **Investimento** (etapas 1-5) | Gasta 2 ATP | Ativa e quebra a glicose em 2 trioses de 3C |
| **Rendimento** (etapas 6-10) | Produz 4 ATP + 2 NADH | Converte as trioses em piruvatos |

> [!warning] Saldo Real — Nao Esquecer
> 4 ATP produzidos - 2 ATP gastos = **2 ATP liquidos por glicose**
> A prova vai perguntar o saldo, nao o bruto!

![[bio-p1-t07-slide-026-glucolisis-rotura-de-azucar.jpg]]

---

## 2. O que e o Citosol?

| Termo | Definicao |
|---|---|
| **Citoplasma** | Tudo dentro da celula exceto o nucleo: citosol + organelas + citoesqueleto |
| **Citosol** | Parte liquida/gelatinosa; onde as enzimas da glicolise ficam dissolvidas |

> Analogia: Citoplasma = sala inteira. Citosol = o ar que preenche a sala. Organelas = moveis.

---

## 3. Como a Glicose Entra na Celula?

**Transportadores GLUT** — difusao facilitada, sem gasto de ATP.

| GLUT | Onde fica | Funcao |
|---|---|---|
| GLUT1 | Hemaceas, barreiras | Entrada basal constante |
| GLUT2 | Figado, pancreas | Sensor de glicemia |
| GLUT3 | Neuronios | Alta afinidade por glicose |
| **GLUT4** | Musculo, adipocito | **Responde a insulina** |

**Como a insulina ativa o GLUT4:**
1. Glicemia sobe apos refeicao → pancreas libera insulina
2. Insulina se liga ao receptor na membrana do musculo/adipocito
3. Ativa cascata IRS → PI3K → Akt
4. Vesiculas com GLUT4 migram para a membrana da celula
5. Mais GLUT4 na superficie → mais glicose entra por difusao

---

## 4. Fase de Investimento de Energia (Etapas 1-5)

### Etapa 1 — Fosforilacao da Glicose
**Enzima:** Hexoquinase (tecidos gerais) / Glicoquinase (figado)

```
Glicose + ATP  →  Glicose-6-fosfato + ADP
```

- Prende a glicose dentro da celula (fosforilada nao sai pelo GLUT)
- Gasta o **1o ATP**

---

### Etapa 2 — Isomerizacao
**Enzima:** Fosfoglicose isomerase

```
Glicose-6-fosfato  →  Frutose-6-fosfato
```

- Aldose → cetose
- Prepara para ser quebrada em duas metades simetricas

---

### Etapa 3 — Segunda Fosforilacao (Ponto de Controle Central)
**Enzima:** **PFK-1 / Fosfofrutoquinase-1** ← principal regulador da glicolise

```
Frutose-6-fosfato + ATP  →  Frutose-1,6-bisfosfato + ADP
```

- Gasta o **2o ATP**
- Depois daqui, a molecula esta "condenada" a virar piruvato
- PFK-1 e **ativada** por AMP/ADP (celula com pouca energia)
- PFK-1 e **inibida** por ATP/citrato (celula abastecida)

---

### Etapa 4 — Quebra da Molecula em Duas
**Enzima:** Aldolase

```
Frutose-1,6-bisfosfato  →  DHAP + Gliceraldeido-3-fosfato (GAP)
```

- Quebra retro-aldol: produz dois acucares de 3 carbonos (trioses)
- DHAP e GAP sao isomeros entre si

---

### Etapa 5 — Conversao do DHAP em GAP
**Enzima:** Triose-fosfato isomerase

```
DHAP  ⇌  GAP
```

- Apenas o GAP continua na via diretamente
- DHAP e convertido rapidamente em GAP conforme o GAP e consumido
- **Resultado: 2 moleculas de GAP por glicose**

> [!tip] Ponto de Divisao — Multiplicar por 2 daqui para frente
> A partir da etapa 5, tudo acontece **duas vezes** (uma para cada GAP).
> Cada produto das etapas 6-10 aparece **x2** por glicose.

---

## 5. Fase de Rendimento de Energia (Etapas 6-10)

*Cada reacao abaixo ocorre 2x por glicose (uma para cada GAP).*

---

### Etapa 6 — Formacao do NADH (Reacao Mais Importante da Glicolise)
**Enzima:** GAPDH (Gliceraldeido-3-fosfato desidrogenase)

```
GAP + Pi + NAD+  →  1,3-bisfosfoglicerato + NADH + H+
```

**O que acontece quimicamente:**
- O aldeido do GAP e **oxidado** (perde eletrons)
- NAD+ aceita um **hidreto** (H- = 1 proton + 2 eletrons) → vira **NADH**
- Fosfato inorganico (Pi) entra na molecula
- Forma-se 1,3-bisfosfoglicerato: composto de alta energia (pronto para gerar ATP)
- **Rende 2 NADH por glicose**

> [!example] Por que o NADH importa tanto?
> Ele nao e ATP. Mas carrega eletrons de alta energia que vao gerar muito ATP
> depois, na cadeia transportadora de eletrons (Parte 3).
> Cada NADH rende ~2,5 ATP na fosforilacao oxidativa.

---

### Etapa 7 — 1a Producao de ATP
**Enzima:** Fosfoglicerato quinase

```
1,3-bisfosfoglicerato + ADP  →  3-fosfoglicerato + ATP
```

- Fosforilacao em **nivel de substrato** (sem cadeia respiratoria, transferencia direta)
- **Rende 2 ATP por glicose**

---

### Etapa 8 — Mudanca de Posicao do Fosfato
**Enzima:** Fosfoglicerato mutase

```
3-fosfoglicerato  →  2-fosfoglicerato
```

- O grupo fosfato muda do carbono 3 para o carbono 2
- Prepara para a desidratacao na proxima etapa

---

### Etapa 9 — Formacao do PEP
**Enzima:** Enolase

```
2-fosfoglicerato  →  Fosfoenolpiruvato (PEP) + H2O
```

- Perde uma molecula de agua (desidratacao)
- PEP e extremamente instavel e energetico — ligacao fosfato enolica
- Estrutura: CH2=C(OPO32-)-COO-

---

### Etapa 10 — 2a Producao de ATP + Formacao do Piruvato
**Enzima:** Piruvato quinase

```
PEP + ADP  →  Piruvato + ATP
```

- PEP transfere seu fosfato para o ADP
- PEP instavel → enolpiruvato → **piruvato** (mais estavel, tautomerizacao)
- **Rende 2 ATP por glicose**

---

## 6. Tabela das 10 Etapas — Resumo Completo

| Etapa | Reacao | Enzima | Saldo |
|---|---|---|---|
| 1 | Glicose → G-6-P | Hexoquinase | -1 ATP |
| 2 | G-6-P → F-6-P | Fosfoglicose isomerase | — |
| **3** | **F-6-P → F-1,6-BP** | **PFK-1 (regulatoria)** | **-1 ATP** |
| 4 | F-1,6-BP → DHAP + GAP | Aldolase | — |
| 5 | DHAP → GAP | Triose-P isomerase | — |
| **6** | **GAP → 1,3-BPG** | **GAPDH** | **+2 NADH** |
| 7 | 1,3-BPG → 3-PG | Fosfoglicerato quinase | +2 ATP |
| 8 | 3-PG → 2-PG | Fosfoglicerato mutase | — |
| 9 | 2-PG → PEP | Enolase | — |
| 10 | PEP → Piruvato | Piruvato quinase | +2 ATP |

**Saldo final: 4 ATP - 2 ATP = +2 ATP liquidos | +2 NADH | +2 Piruvatos**

---

## 7. Estrutura do Piruvato

> [!info] O Que e o Piruvato?
> Forma ionizada do acido piruvico. Em pH fisiologico predomina como piruvato (perde H+).
>
> **Nome IUPAC:** acido 2-oxopropanoico
> **Formula molecular:** C3H4O3 (acido piruvico) / C3H3O3- (piruvato)
>
> Estrutura:
> ```
> CH3 - C(=O) - COO-
>        |
>      cetona  carboxilato
> ```
> 3 oxigenios por piruvato: 1 na cetona (C=O) + 2 no carboxilato (COO-)

---

## 8. O que Acontece com Piruvato e NADH?

### Se houver oxigenio (aerobico):
- **Piruvato** → entra na mitocondria → oxidacao do piruvato → ciclo de Krebs
- **NADH** → passa eletrons para a cadeia transportadora → regenera NAD+ + gera ~2,5 ATP

### Se nao houver oxigenio (anaerobico):
- **Piruvato** → fermentacao (alcool em leveduras / lactato em hemaceas e musculos)
- **NADH** → doa eletrons ao piruvato (ou acetilaldeido) → regenera NAD+ SEM gerar ATP
- **Por que fermentar?** Para regenerar NAD+. Sem NAD+ livre, a etapa 6 trava e a glicolise para.

> [!example] Por que hemaceas fazem fermentacao lactica?
> Hemaceas nao tem mitocondria. A glicolise e a unica fonte de ATP delas.
> Para a glicolise continuar, precisam regenerar NAD+ pela fermentacao.

---

## 9. Erros Classicos

> [!warning] Erro 1 — Glicolise dentro da mitocondria
> **ERRADO.** A glicolise ocorre no **citosol**, fora da mitocondria.
> A mitocondria so entra a partir do piruvato.

> [!warning] Erro 2 — Saldo de 4 ATP
> **ERRADO.** 4 ATP sao produzidos, mas 2 foram gastos. Saldo real = **2 ATP**.

> [!warning] Erro 3 — NADH ja e ATP
> **ERRADO.** NADH e carreador de eletrons, nao e ATP. Ele vai gerar ATP
> depois na cadeia transportadora (Parte 3).

> [!warning] Erro 4 — O2 e necessario na glicolise
> **ERRADO.** A glicolise e anaerobica. O O2 so e necessario muito depois,
> na cadeia transportadora de eletrons.

---

## 10. Diagrama Completo da Glicolise

![[bio-p1-t07-slide-027-glucolisis.jpg]]

---

## Navegacao

[[FO2-01-Respiracion-Celular]] | [[RC-P2-Ciclo-Acido-Citrico]] | [[RC-P3-Fosforilacao-Oxidativa]] | [[T07-Mitocondria]]
