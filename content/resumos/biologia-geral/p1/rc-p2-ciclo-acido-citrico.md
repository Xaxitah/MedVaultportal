---
tags:
  - biologia-geral
  - p1
  - resumo
  - respiracao-celular
  - ciclo-krebs
  - oxidacao-piruvato
data: 03-07-2026
disciplina: biologia-geral
tema: RC-P2-Ciclo-Acido-Citrico
tipo: resumo
prova: P1
status: finalizado
fonte: Khan Academy PT | OpenStax Biology 2e | StatPearls | PubMed
ficha-registrada: true
_source: 03-Disciplinas/Biologia-Geral/Revisao/Resumos/RC-P2-Ciclo-Acido-Citrico.md
---

# Respiracao Celular — Parte 2: Oxidacao do Piruvato + Ciclo do Acido Citrico

> [!info] Localizacao
> Tudo nesta parte ocorre na **matriz mitocondrial** (em eucariontes).
> Excecao: succinato desidrogenase (etapa 6 do Krebs) fica associada a **membrana interna**.
> Em procariontes: ocorre no citoplasma.

---

## 1. A Mitocondria: Estrutura Basica

| Compartimento | O que contem |
|---|---|
| **Membrana externa** | Relativamente permeavel (porinas); separa citosol do espaco intermembrana |
| **Espaco intermembrana** | Acumula H+ durante a cadeia respiratoria (Parte 3) |
| **Membrana interna (cristas)** | Cadeia transportadora + ATP sintase; muito seletiva |
| **Matriz mitocondrial** | Enzimas do Krebs + oxidacao do piruvato; onde esta Parte 2 ocorre |

> [!tip] Por que as cristas importam?
> Cristas sao dobras da membrana interna. Mais dobras = mais area = mais ATP sintase.
> Celulas com alto gasto energetico (cardiomiocito, hepatocito) tem muitas cristas.

---

## 2. Oxidacao do Piruvato — A Ponte entre Glicolise e Krebs

**O piruvato vem da glicolise no citosol.** Ele precisa entrar na mitocondria e ser "preparado" antes de entrar no ciclo de Krebs.

### O que acontece:

```
Piruvato (3C) + NAD+ + CoA
        ↓  Piruvato desidrogenase
Acetil-CoA (2C) + CO2 + NADH
```

### Etapas mecanicas (Complexo Piruvato Desidrogenase):

1. **Remocao de um grupo carboxila:** piruvato perde 1 CO2 (descarboxilacao oxidativa)
2. **Oxidacao:** a molecula de 2C perde eletrons → NAD+ aceita e vira NADH
3. **Ligacao ao CoA:** o grupo acetil (2C) se liga a Coenzima A → forma **Acetil-CoA**

> A coenzima A e derivada da vitamina B5. Ela "ativa" o grupo acetil,
> preparando-o para as reacoes do ciclo de Krebs.

### Por que nenhum ATP e produzido aqui?

A energia nao e "desperdicada" — ela e conservada no NADH e no Acetil-CoA.
O Acetil-CoA e o combustivel do ciclo de Krebs.

### Resultado da Oxidacao do Piruvato (por glicose = 2 piruvatos):

| Produto | Por glicose | Destino |
|---|---|---|
| Acetil-CoA | 2 | Entra no ciclo de Krebs |
| CO2 | 2 | Liberado como gas (expirado) |
| NADH | 2 | → cadeia transportadora (Parte 3) |
| ATP direto | 0 | — |

---

## 3. Ciclo do Acido Citrico (Krebs) — Visao Geral

**Tres nomes para o mesmo processo:**
- **Ciclo do acido citrico** — pela 1a molecula formada (citrato)
- **Ciclo TCA (tricarboxilico)** — pelos 3 grupos carboxila dos primeiros intermediarios
- **Ciclo de Krebs** — pelo descobridor Hans Krebs (Premio Nobel 1953)

### Logica central:

```
Acetil-CoA (2C) + Oxaloacetato (4C)
        ↓ citrato sintase
Citrato (6C)
        ↓ 8 etapas
Oxaloacetato (4C) regenerado  +  NADH + FADH2 + GTP + CO2
```

> [!tip] Por que e um "ciclo"?
> O oxaloacetato e consumido no inicio e **regenerado no final**.
> A ultima etapa refaz a molecula usada na primeira.
> O ciclo pode girar indefinidamente enquanto houver acetil-CoA.

> [!warning] O Krebs nao serve para fazer muito ATP direto!
> Sua funcao principal e **carregar NADH e FADH2 de eletrons**.
> Esses carreadores vao gerar a grande maioria do ATP na Parte 3.

![[bio-p1-t07-slide-025-respiracion-celular.jpg]]

---

## 4. Oxaloacetato — De Onde Vem?

O oxaloacetato ja existe na matriz mitocondrial como intermediario do proprio ciclo.
No final de cada volta, o malato e oxidado e regenera o oxaloacetato.

**Se o estoque baixar (reacoes anapleróticas):**

```
Piruvato + HCO3- + ATP
        ↓ Piruvato carboxilase (usa biotina / vitamina B7)
Oxaloacetato + ADP + Pi
```

Resumo didatico: **parte do piruvato "vira combustivel" (acetil-CoA); outra parte "vira peca do motor" (oxaloacetato).**

---

## 5. As 8 Etapas do Ciclo de Krebs

*Cada volta corresponde a 1 acetil-CoA. O ciclo roda 2x por glicose.*

---

### Etapa 1 — Formacao do Citrato
**Enzima:** Citrato sintase

```
Acetil-CoA (2C) + Oxaloacetato (4C) + H2O
        ↓
Citrato (6C) + CoA-SH
```

- A CoA sai, liberando o grupo acetil para se combinar com o oxaloacetato
- Forma citrato, uma molecula de 6 carbonos

---

### Etapa 2 — Formacao do Isocitrato
**Enzima:** Aconitase

```
Citrato  →  Isocitrato
```

- Isomerizacao: envolve remocao e re-adicao de H2O
- O citrato e rearranjado para facilitar a oxidacao na proxima etapa

---

### Etapa 3 — 1a Saida de CO2 + 1o NADH
**Enzima:** Isocitrato desidrogenase (ponto de regulacao)

```
Isocitrato (6C) + NAD+
        ↓
Alfa-cetoglutarato (5C) + CO2 + NADH
```

- Isocitrato e **oxidado e descarboxilado**
- Perde 1 CO2 → fica uma molecula de 5C
- NAD+ aceita eletrons → vira **NADH** (1o do ciclo)
- Isocitrato desidrogenase e regulada: ativada por Ca2+ e ADP; inibida por NADH

---

### Etapa 4 — 2a Saida de CO2 + 2o NADH
**Enzima:** Alfa-cetoglutarato desidrogenase (ponto de regulacao)

```
Alfa-cetoglutarato (5C) + NAD+ + CoA
        ↓
Succinil-CoA (4C) + CO2 + NADH
```

- Reacao similar a oxidacao do piruvato
- Perde mais 1 CO2 → fica uma molecula de 4C ligada ao CoA
- NAD+ → **NADH** (2o do ciclo)
- A enzima tambem e regulada por NADH e succinil-CoA

> [!info] Contagem de CO2 ate aqui
> Por volta: 2 CO2 liberados (etapas 3 e 4)
> Por glicose (2 voltas): 4 CO2 do ciclo + 2 CO2 da oxidacao do piruvato = **6 CO2 total**
> Isso corresponde aos 6 carbonos da glicose original!

---

### Etapa 5 — Formacao de GTP (ATP equivalente)
**Enzima:** Succinil-CoA sintetase

```
Succinil-CoA (4C) + GDP + Pi
        ↓
Succinato (4C) + GTP + CoA-SH
```

- A energia da ligacao tioester da succinil-CoA e usada diretamente
- Fosforilacao em **nivel de substrato** (sem cadeia respiratoria)
- GTP e energeticamente equivalente ao ATP (pode ser convertido por nucleosideo difosfato quinase)
- **Rende 1 GTP / volta**

> Em alguns tecidos (coracao, musculo), a enzima usa ADP diretamente e forma ATP.

---

### Etapa 6 — Formacao de FADH2
**Enzima:** Succinato desidrogenase (= Complexo II da cadeia respiratoria)

```
Succinato (4C) + FAD
        ↓
Fumarato (4C) + FADH2
```

- Succinato perde 2H dos carbonos centrais → forma dupla ligacao no fumarato
- FAD aceita esses 2 hidrogenios → vira **FADH2**
- Esta enzima fica **na membrana interna** (nao na matriz) — unica excecao do ciclo
- Por isso o FADH2 formado aqui entra direto no Complexo II da cadeia

> [!example] Por que FAD e nao NAD+ aqui?
> A reacao succinato → fumarato libera menos energia do que as reacoes que formam NADH.
> O FAD tem menor potencial de reducao e aceita eletrons de menor energia.
> Por isso cada FADH2 rende **menos ATP** do que cada NADH na cadeia (1,5 vs 2,5 ATP).

---

### Etapa 7 — Adicao de Agua
**Enzima:** Fumarase

```
Fumarato (4C) + H2O
        ↓
Malato (4C)
```

- Adicao de agua (hidratacao)
- Forma malato, que tem um grupo alcool (OH)

---

### Etapa 8 — Regeneracao do Oxaloacetato + 3o NADH
**Enzima:** Malato desidrogenase

```
Malato (4C) + NAD+
        ↓
Oxaloacetato (4C) + NADH + H+
```

- O grupo alcool do malato e oxidado a carbonila no oxaloacetato
- NAD+ → **NADH** (3o do ciclo)
- **Oxaloacetato e regenerado** — o ciclo pode comecar de novo!

---

## 6. Tabela das 8 Etapas — Resumo

| Etapa | Reacao | Enzima | Produto energetico |
|---|---|---|---|
| 1 | Acetil-CoA + OAA → Citrato | Citrato sintase | — |
| 2 | Citrato → Isocitrato | Aconitase | — |
| **3** | Isocitrato → alfa-KG + CO2 | Isocitrato desidrogenase | **NADH** |
| **4** | alfa-KG → Succinil-CoA + CO2 | alfa-KG desidrogenase | **NADH** |
| **5** | Succinil-CoA → Succinato | Succinil-CoA sintetase | **GTP** |
| **6** | Succinato → Fumarato | Succinato desidrogenase | **FADH2** |
| 7 | Fumarato → Malato | Fumarase | — |
| **8** | Malato → Oxaloacetato | Malato desidrogenase | **NADH** |

*OAA = oxaloacetato | alfa-KG = alfa-cetoglutarato*

---

## 7. Produtos do Ciclo de Krebs

### Por 1 acetil-CoA (1 volta):

| Produto | Quantidade |
|---|---|
| NADH | 3 |
| FADH2 | 1 |
| GTP (ou ATP) | 1 |
| CO2 | 2 |
| Oxaloacetato regenerado | 1 |

### Por 1 glicose (2 voltas = 2 acetil-CoA):

| Produto | Do Krebs | Da Oxidacao do Piruvato | Total desta Parte 2 |
|---|---|---|---|
| NADH | 6 | 2 | 8 |
| FADH2 | 2 | 0 | 2 |
| GTP/ATP | 2 | 0 | 2 |
| CO2 | 4 | 2 | 6 |

---

## 8. O que sao NADH e FADH2 — Mecanismo de Formacao

> [!info] NADH — Nicotinamida Adenina Dinucleotideo (forma reduzida)
> **NAD+** = "caminhao vazio de eletrons"
> **NADH** = "caminhao carregado de eletrons"
>
> Formacao: a enzima desidrogenase oxida o substrato organico.
> O substrato perde um **hidreto (H-)** = 1 proton + 2 eletrons.
> O NAD+ aceita esse hidreto → vira NADH.
>
> Equacao geral:
> ```
> Substrato-H2 + NAD+  →  Substrato oxidado + NADH + H+
> ```

> [!info] FADH2 — Flavina Adenina Dinucleotideo (forma reduzida)
> **FAD** = "caminhao vazio" de menor capacidade energetica
> **FADH2** = "caminhao carregado" com menos energia que NADH
>
> Formacao: na reacao succinato → fumarato.
> O FAD aceita **2 hidrogenios** retirados dos carbonos centrais do succinato.
>
> ```
> Succinato + FAD  →  Fumarato + FADH2
>
> CH2-CH2  →  CH=CH  (dupla ligacao formada)
> ```

---

## 9. O que e o GTP?

**GTP** = Guanosina Trifosfato. Base nitrogenada: guanina (em vez de adenina do ATP).

- Energeticamente equivalente ao ATP
- Pode ser convertido: GTP + ADP ⇌ GDP + ATP
- Para fins didaticos: **1 GTP ≈ 1 ATP**

---

## 10. Saldo Acumulado da Respiracao (Ate Aqui)

| Etapa | ATP direto | NADH | FADH2 |
|---|---|---|---|
| Glicolise (Parte 1) | 2 | 2 | — |
| Oxidacao do Piruvato | 0 | 2 | — |
| Ciclo de Krebs (Parte 2) | 2 (GTP) | 6 | 2 |
| **Total ate aqui** | **4** | **10** | **2** |

> [!warning] Apenas 4 ATP diretos ate aqui — parece pouco!
> Mas os 10 NADH e 2 FADH2 ainda nao "pagaram" sua conta energetica.
> Eles vao gerar a grande maioria do ATP na Parte 3 (fosforilacao oxidativa).

---

## 11. Erros Classicos

> [!warning] Erro 1 — "Krebs produz muito ATP"
> Nao. Krebs produz apenas 2 GTP/ATP por glicose diretamente.
> O valor real do Krebs esta em formar **NADH e FADH2** para a cadeia respiratoria.

> [!warning] Erro 2 — "CO2 sai so do Krebs"
> Nao. CO2 tambem sai na **oxidacao do piruvato** (2 moleculas por glicose).
> Total: 6 CO2 por glicose (2 da oxidacao do piruvato + 4 do Krebs).

> [!warning] Erro 3 — "Todo o ciclo de Krebs ocorre na matriz"
> Quase tudo, exceto a succinato desidrogenase (etapa 6), que fica na **membrana interna**.

> [!warning] Erro 4 — "FAD e NAD+ sao a mesma coisa"
> Sao diferentes. FADH2 rende **menos ATP** (~1,5) do que NADH (~2,5) porque
> seus eletrons tem menor energia e entram mais tarde na cadeia respiratoria.

---

## Navegacao

[[RC-P1-Glicolise]] | [[RC-P3-Fosforilacao-Oxidativa]] | [[FO2-01-Respiracion-Celular]] | [[T07-Mitocondria]]
