---
title: >-
  Flórez Cap. 6 - Farmacocinética clínica, individualización del tratamiento y
  monitorización de fármacos
data: 03-05-2026
tipo: revisao-para-prova
disciplina: Farmacologia
livro: Farmacología Humana - Jesús Flórez - 6ª edición - Elsevier/Masson - 2014
capitulo: 6
paginas_livro: 83-105
paginas_pdf: 101-123
tags:
  - medicina
  - farmacologia
  - livro
  - florez-6ed
  - farmacocinetica-clinica
  - monitorizacion-farmacos
  - foco-prova
source_pdf: dokumen.pub_farmacologia-humana-jesus-florez-6-edicion.pdf
status: revisando
_source: >-
  07-Biblioteca-Geral/02-Capitulos-Extraidos/Farmacologia/Florez-6ed/Farmacologia-Florez-cap06-foco-prova-2026-05-03/Farmacologia-Florez-cap06-farmacocinetica-clinica-foco-prova.md
---

# Capítulo 6 - Farmacocinética clínica, individualización del tratamiento y monitorización de fármacos

> [!info] Fonte
> Livro-base: **Farmacología Humana - Jesús Flórez - 6ª edição - 2014**.  
> Capítulo 6: **Farmacocinética clínica, individualización del tratamiento y monitorización de fármacos**.  
> Uso: material de estudo acadêmico. Não usar como protocolo clínico isolado, porque intervalos terapêuticos e condutas de monitorização precisam ser conferidos com protocolos atuais da instituição.

---

## 0. Como estudar este capítulo sem fritar o córtex

Este capítulo é a ponte entre a farmacocinética “bonitinha no gráfico” e a decisão prática: **qual dose usar, quando repetir, quando coletar nível sérico e como ajustar o tratamento**.

A ordem inteligente de estudo é:

1. Entender **dose inicial** versus **dose de manutenção**.
2. Dominar **nivel estable / steady state**.
3. Saber o que muda quando altera **aclaramiento** ou **volumen de distribución**.
4. Diferenciar **cinética lineal** de **cinética no lineal**.
5. Entender quando a **monitorización de fármacos** vale a pena.
6. Decorar os exemplos clássicos: **digoxina, teofilina, aminoglucósidos, fenitoína, litio, vancomicina**.

> [!danger] Pegadinha central
> **Dose inicial depende principalmente do volumen de distribución.**  
> **Dose de manutenção depende principalmente do aclaramiento.**  
> Trocar isso é o tipo de erro que faz a farmacocinética sorrir de canto e roubar ponto na prova.

---

## 1. Mapa mental em texto

```text
Farmacocinética clínica
├── Objetivo
│   ├── Máxima eficácia
│   ├── Mínima toxicidade
│   └── Dose individualizada
│
├── Modelos farmacocinéticos
│   ├── Dosis única
│   │   ├── Intravascular
│   │   └── Extravascular
│   ├── Infusión intravenosa continua
│   ├── Dosis múltiples
│   └── Cinética no lineal
│
├── Parâmetros que mandam no jogo
│   ├── Dosis (D)
│   ├── Biodisponibilidad / fracción absorbida (F ou f)
│   ├── Volumen de distribución (Vd)
│   ├── Aclaramiento (Cl)
│   ├── Constante de eliminación (Ke)
│   ├── Semivida (t1/2)
│   └── Intervalo de administración (τ)
│
├── Nível estável
│   ├── Depende de dose/velocidade de administração e Cl
│   ├── Tempo para atingir depende da semivida
│   └── Em geral: 5 semividas ≈ estado estacionário
│
├── Cinética no lineal
│   ├── Saturação de absorção, ligação, metabolismo ou eliminação
│   ├── Michaelis-Menten
│   └── Fenitoína é a rainha da pegadinha
│
└── Monitorización terapéutica
    ├── Só faz sentido se muda conduta
    ├── Exige intervalo óptimo conhecido
    ├── Exige coleta correta
    └── Serve para ajustar dose individualmente
```

---

## 2. Núcleo obrigatório para prova

### 2.1. O que a farmacocinética clínica quer resolver

A farmacocinética clínica usa modelos para prever:

- que concentração plasmática será alcançada;
- em quanto tempo ela será alcançada;
- qual **dosis inicial** é necessária;
- qual **dosis de mantenimiento** mantém o fármaco no intervalo desejado;
- quando uma concentração plasmática deve ser medida;
- como ajustar dose em paciente real, que obviamente não leu o capítulo antes de adoecer.

> [!info] Conceito central
> **Individualización del tratamiento** significa ajustar a pauta ao paciente, levando em conta doença, gravidade, via, formulação, eficácia, toxicidade, adesão, custo e fatores que alteram farmacocinética.

---

## 3. Dosis única: intravascular e extravascular

### 3.1. Dosis única intravascular

Na injeção intravascular rápida, a biodisponibilidade é completa e imediata.

**Fórmula-base:**

```text
Cmax = C0 = D / Vd
```

Onde:

- **Cmax** = concentração plasmática máxima;
- **C0** = concentração teórica no tempo zero;
- **D** = dose administrada;
- **Vd** = volumen de distribución.

**Raciocínio de prova:**

- Aumentou a dose → aumenta Cmax.
- Aumentou Vd → diminui Cmax.
- Alterou só o aclaramiento → não muda Cmax inicial, mas muda a duração da concentração.

```markdown
![[florez-cap06-figura-6-1.jpg]]
```
*Figura 6-1 - Curso temporal após injeção intravenosa rápida: modelo monocompartimental e bicompartimental.*

```markdown
![[florez-cap06-figura-6-2.jpg]]
```
*Figura 6-2 - Influência da dose e da constante de eliminação na concentração máxima e duração do efeito.*

> [!danger] Pegadinha
> Se a pergunta diz que o paciente tem alteração de **aclaramiento**, a tendência principal é alterar **duração/AUC/nivel estable**, não a concentração máxima inicial de um bolus IV.

### 3.2. Dosis única extravascular

Na via extravascular, entra um novo personagem: **absorción**.

O fármaco precisa ser absorvido antes de chegar à circulação sistêmica. Portanto:

- a concentração começa em zero;
- sobe enquanto absorção > eliminação;
- atinge **Cmax** quando absorção = eliminação;
- depois cai porque eliminação predomina.

Parâmetros importantes:

- **Ka** = constante de absorción;
- **Ke** = constante de eliminación;
- **F/f** = fracción absorbida ou biodisponibilidad;
- **tmax** = tempo para atingir Cmax.

**Raciocínio de prova:**

| Alteração | Efeito esperado |
|---|---|
| Diminui Ka | Cmax menor e tmax maior |
| Diminui dose ou F | Cmax menor e AUC menor |
| Diminui Cl | AUC maior e eliminação mais lenta |
| Aumenta Vd | Cmax menor, queda mais lenta |

```markdown
![[florez-cap06-figura-6-3.jpg]]
```
*Figura 6-3 - Administração de dose única por via extravascular.*

```markdown
![[florez-cap06-figura-6-4.jpg]]
```
*Figura 6-4 - Impacto de Ka, dose/F, Cl e Vd na curva concentração-tempo.*

---

## 4. Infusión intravenosa continua

### 4.1. O que é o nivel estable?

Na infusão contínua, a concentração sobe até atingir um platô: o **nivel estable**, também chamado de **steady state**.

**Fórmula-base:**

```text
Css = Q / Cl
```

Onde:

- **Css** ou **CEE** = concentração em estado estacionário;
- **Q** = velocidade de infusão;
- **Cl** = aclaramiento.

Para calcular a velocidade de infusão necessária:

```text
Q = Css x Cl
```

> [!tip] Tradução mental
> **Cl manda no tamanho do platô.**  
> **t1/2 manda no tempo para chegar ao platô.**

```markdown
![[florez-cap06-figura-6-5.jpg]]
```
*Figura 6-5 - Princípio da meseta: em cada semivida ocorre metade da mudança restante.*

### 4.2. Tempo para atingir o nivel estable

Regra prática:

| Tempo decorrido | Percentual aproximado do nivel estable |
|---|---:|
| 1 semivida | 50% |
| 2 semividas | 75% |
| 3 semividas | 87,5% |
| 4 semividas | 93,8% |
| 5 semividas | 96,9% |

> [!info] Frase que tem que grudar
> Em geral, considera-se que o nivel estable foi alcançado em **5 semividas**.

### 4.3. Dosis inicial com infusión continua

Quando não dá para esperar cinco semividas para atingir concentração eficaz, usa-se **dosis inicial**.

**Fórmula geral:**

```text
DI = C alvo x Vd
```

Ajuste conceitual:

```text
DI = C alvo x Vd / F
```

quando a biodisponibilidade não for 1.

A infusão de manutenção fica ligada ao aclaramiento:

```text
Velocidade de manutenção = C alvo x Cl
```

> [!danger] Pegadinha clássica
> Em paciente com insuficiência renal, se o problema principal é redução de **aclaramiento**, ajusta-se principalmente a **manutenção**. A dose inicial pode ser mantida se o Vd não mudou. Farmacocinética: o pequeno inferno dos detalhes.

---

## 5. Dosis múltiples

Quando o intervalo entre doses é menor que cinco semividas, ocorre **acumulación**.

A concentração passa a oscilar entre:

- **Cmax** = pico;
- **Cmin / valle** = concentração mínima antes da próxima dose.

### 5.1. O que aumenta a acumulação?

- intervalo muito curto;
- semivida longa;
- redução do aclaramiento;
- dose de manutenção alta;
- cinética não linear.

### 5.2. Fluctuación

A flutuação é a diferença entre pico e vale dentro do intervalo de dose.

| Estratégia | Resultado |
|---|---|
| Doses menores mais frequentes | Menor flutuação |
| Doses maiores mais espaçadas | Maior flutuação |
| Formulação de liberação prolongada | Menor pico, curva mais suave |

```markdown
![[florez-cap06-figura-6-9.jpg]]
```
*Figura 6-9 - Doses repetidas com intervalo maior ou menor que cinco semividas.*

```markdown
![[florez-cap06-figura-6-11.jpg]]
```
*Figura 6-11 - Influência do intervalo, Vd e Cl em doses múltiplas.*

### 5.3. Dosis inicial em dosis múltiples

Se o tratamento precisa começar já dentro do intervalo terapêutico, pode-se usar dose inicial.

Exemplo de raciocínio:

- Se o intervalo = 1 semivida, uma dose inicial pode precisar ser maior que a manutenção.
- Para digoxina, como a semivida é longa, a dose inicial pode ser várias vezes a dose de manutenção.
- Mas em pacientes sensíveis, começar com dose inicial alta pode aumentar toxicidade.

```markdown
![[florez-cap06-tabla-6-1.jpg]]
```
*Tabela 6-1 - Relação entre dose inicial e dose de manutenção conforme intervalo de administração.*

---

## 6. Cinética no lineal

### 6.1. Cinética lineal versus no lineal

| Tipo | Característica | Consequência |
|---|---|---|
| Cinética lineal | Cl permanece constante | Dose sobe proporcionalmente à concentração |
| Cinética no lineal | Algum processo satura | Pequena mudança de dose pode causar grande mudança de nível |

> [!danger] Pegadinha-mãe
> Na cinética não linear, **dobrar a dose não significa dobrar concentração**. Pode aumentar muito mais. A fenitoína entra aqui com sapatinho de cristal e toxicidade de madrasta.

### 6.2. Michaelis-Menten

A cinética de Michaelis-Menten ocorre quando o processo de eliminação fica saturável.

**Fórmula-base:**

```text
Velocidade de eliminação = (Vmax x C) / (Km + C)
```

Onde:

- **Vmax** = velocidade máxima de eliminação;
- **Km** = concentração em que a eliminação alcança metade da Vmax;
- **C** = concentração do fármaco.

Quando C é baixa em relação a Km:

```text
comportamento aproximado de primeira ordem
```

Quando C é alta e satura o sistema:

```text
comportamento aproximado de ordem zero
```

Consequências:

- o aclaramiento diminui quando a concentração aumenta;
- o nivel estable sobe de forma desproporcional;
- o tempo até o nivel estable pode ficar maior;
- a queda após suspender ou reduzir dose pode ser lenta;
- risco de toxicidade aumenta muito.

```markdown
![[florez-cap06-figura-6-13.jpg]]
```
*Figura 6-13 - Cinética linear, não linear dependente da dose e autoindução.*

```markdown
![[florez-cap06-figura-6-15.jpg]]
```
*Figura 6-15 - Consequências da cinética linear e Michaelis-Menten no nivel estable.*

### 6.3. Exemplos importantes

| Mecanismo | Exemplos citados no capítulo | Consequência clínica/prova |
|---|---|---|
| Saturação do metabolismo | Alcohol, fenitoína, salicilatos, dicumarol, voriconazol | Toxicidade por aumento desproporcional de concentração |
| Autoindução | Carbamazepina, rifampicina, possivelmente fenitoína | Concentração cai com o tempo se dose não for ajustada |
| Saturação de proteínas plasmáticas | Fenitoína, salicilatos, anticoagulantes | A fração livre pode aumentar muito |

```markdown
![[florez-cap06-tabla-6-2.jpg]]
```
*Tabela 6-2 - Mecanismos, consequências e exemplos de cinética não linear.*

---

## 7. Curso temporal dos efeitos

A concentração plasmática nem sempre acompanha o efeito em tempo real.

### 7.1. Por que concentração e efeito podem se dissociar?

- demora para o fármaco chegar ao sítio de ação;
- distribuição bicompartimental;
- metabolito ativo;
- resposta mediada por mecanismo fisiológico lento;
- tolerância;
- efeito persistente mesmo depois que a concentração cai.

```markdown
![[florez-cap06-figura-6-17.jpg]]
```
*Figura 6-17 - Diferença entre concentração plasmática e efeito analgésico do naproxeno.*

### 7.2. Relação circular concentração-efeito

Quando o efeito atrasa em relação à concentração, aparece uma curva em laço/histerese.

| Situação | Interpretação |
|---|---|
| Concentração sobe antes do efeito | atraso de distribuição ou resposta |
| Efeito persiste após queda da concentração | permanência no sítio de ação ou mecanismo indireto |
| Metabolito ativo | efeito pode depender mais do metabolito que do fármaco original |

```markdown
![[florez-cap06-figura-6-20.jpg]]
```
*Figura 6-20 - Dissociação entre concentração plasmática de ibuprofeno e efeito sobre temperatura.*

---

## 8. Monitorización de concentraciones de fármacos

### 8.1. O que é monitorização terapêutica?

É a avaliação da resposta ao tratamento por eficácia, toxicidade e concentração plasmática, quando a medida da concentração ajuda a tomar decisão.

> [!warning] Não é para todo fármaco
> Se o fármaco é muito seguro, tem amplo índice terapêutico ou se a resposta clínica é fácil de medir, monitorar concentração pode ser inútil. A dosagem vira só um exame bonito, caro e com jaleco imaginário.

```markdown
![[florez-cap06-figura-6-21.jpg]]
```
*Figura 6-21 - Relação nível-efeito e conveniência da monitorização.*

### 8.2. Quando a monitorización é útil?

Precisa cumprir três blocos:

1. **Que sea necesaria**
   - índice terapêutico estreito;
   - toxicidade grave;
   - grande variabilidade interindividual;
   - relação concentração-efeito conhecida;
   - resposta clínica difícil de medir diretamente.

2. **Que sea posible**
   - método analítico disponível;
   - concentração plasmática relacionada ao efeito;
   - intervalo terapêutico conhecido.

3. **Que se realice correctamente**
   - coleta no tempo adequado;
   - interpretação com dados clínicos;
   - considerar dose, via, horário, função renal/hepática e adesão.

```markdown
![[florez-cap06-tabla-6-3.jpg]]
```
*Tabela 6-3 - Requisitos para que a determinação de níveis plasmáticos seja útil.*

---

## 9. Intervalo óptimo versus nivel diana

### 9.1. Intervalo óptimo

O **intervalo óptimo** é uma faixa populacional de concentrações em que, em geral, há maior chance de eficácia com toxicidade aceitável.

Mas ele não é uma lei divina.

Paciente sensível pode responder abaixo. Paciente resistente pode precisar de níveis mais altos, desde que a toxicidade permita.

### 9.2. Nivel diana

O **nivel diana** é individual.

É o alvo escolhido para aquele paciente específico, considerando:

- gravidade;
- risco de toxicidade;
- urgência terapêutica;
- função renal/hepática;
- idade;
- resposta clínica;
- fármacos associados.

```markdown
![[florez-cap06-figura-6-22.jpg]]
```
*Figura 6-22 - Construção do intervalo óptimo por eficácia e toxicidade.*

```markdown
![[florez-cap06-figura-6-23.jpg]]
```
*Figura 6-23 - Individualização pela estratégia do nivel diana.*

> [!tip] Frase de prova oral
> “O intervalo óptimo orienta a população; o nivel diana orienta o paciente.”

---

## 10. Fármacos classicamente monitorizados

O capítulo destaca grupos como:

- **cardiotónicos**: digoxina;
- **broncodilatadores**: teofilina;
- **antibióticos**: aminoglucósidos, vancomicina;
- **antiepilépticos**: fenitoína, carbamazepina, valproato, fenobarbital, etc.;
- **psicofármacos**: litio, antidepressivos tricíclicos, antipsicóticos selecionados;
- **antiarrítmicos**;
- **inmunosupresores**: ciclosporina, tacrolimus, sirolimus, everolimus;
- **salicilatos** em contexto específico.

```markdown
![[florez-cap06-tabla-6-5.jpg]]
```
*Tabela 6-5 - Intervalos óptimos dos fármacos habitualmente monitorizados segundo o Flórez 2014.*

> [!warning] Atualização clínica obrigatória
> A Tabela 6-5 é útil para estudo conceitual, mas os valores devem ser conferidos com protocolos atuais antes de qualquer uso clínico. É material de prova/livro, não prescrição.

### 10.1. Valores que costumam aparecer em prova

| Fármaco/grupo | Ideia de prova |
|---|---|
| Digoxina | índice terapêutico estreito; arritmia por toxicidade; cuidado renal/idoso |
| Teofilina | toxicidade importante; metabolismo variável; interações |
| Aminoglucósidos | monitorar pico e valle; nefro/ototoxicidade |
| Vancomicina | monitorização de valle/pico conforme protocolo; toxicidade e eficácia |
| Fenitoína | cinética não linear; saturação; fração livre relevante |
| Litio | índice terapêutico estreito; função renal e hidratação importam |

---

## 11. Momento correto da coleta

A interpretação depende brutalmente do momento da amostra.

Regras gerais:

- coletar em **nivel estable**, quando aplicável;
- para muitos fármacos, medir **valle**, antes da próxima dose;
- para aminoglucósidos, pode ser necessário medir **pico e valle**;
- registrar horário da dose, horário da coleta, via, dose e intervalo.

```markdown
![[florez-cap06-figura-6-24.jpg]]
```
*Figura 6-24 - Momento de obtenção de amostras para aminoglucósidos e outros fármacos.*

```markdown
![[florez-cap06-tabla-6-6.jpg]]
```
*Tabela 6-6 - Dados necessários para interpretar níveis séricos.*

```markdown
![[florez-cap06-tabla-6-7.jpg]]
```
*Tabela 6-7 - Componentes de um informe de nível plasmático.*

> [!danger] Pegadinha operacional
> Um nível “alto” ou “baixo” sem horário da última dose e da coleta pode não significar nada. É número vestido de informação, mas ainda pelado de contexto.

---

## 12. Tabelas comparativas de fixação

### 12.1. Dosis inicial versus dosis de mantenimiento

| Item | Dosis inicial | Dosis de mantenimiento |
|---|---|---|
| Objetivo | atingir concentração terapêutica rapidamente | manter concentração terapêutica |
| Depende mais de | Vd | Cl |
| Usada quando | há urgência ou semivida longa | tratamento continuado |
| Exemplo clássico | digoxina, fenitoína, aminoglucósidos em alguns contextos | quase todos os tratamentos contínuos |
| Erro comum | calcular como se dependesse do Cl | não ajustar quando Cl cai |

### 12.2. Aclaramiento versus volumen de distribución

| Parâmetro | O que representa | Impacta mais |
|---|---|---|
| Vd | quanto o fármaco “sai” do plasma para tecidos | dose inicial, Cmax inicial |
| Cl | capacidade do corpo de eliminar o fármaco | dose de manutenção, AUC, Css |
| t1/2 | tempo para cair 50% | tempo para atingir/eliminar estado estacionário |

### 12.3. Cinética lineal versus Michaelis-Menten

| Aspecto | Cinética lineal | Michaelis-Menten |
|---|---|---|
| Cl | constante | diminui com concentração alta |
| Dose-concentração | proporcional | desproporcional |
| Estado estacionário | previsível | pode demorar e subir demais |
| Exemplo | maioria dos fármacos | fenitoína, alcohol, salicilatos |

---

## 13. Mini-casos clínicos para raciocínio

### Caso 1 - Insuficiência renal e aminoglucósido

Paciente com queda de função renal recebe aminoglucósido.

**Raciocínio:**

- queda de Cl;
- aumenta exposição/AUC;
- aumenta risco de toxicidade;
- ajustar dose ou intervalo;
- monitorar valle e/ou pico conforme protocolo.

### Caso 2 - Fenitoína com aumento pequeno de dose

Paciente em fenitoína tem dose levemente aumentada e desenvolve sinais de toxicidade.

**Raciocínio:**

- fenitoína pode apresentar cinética de Michaelis-Menten;
- enzimas saturam;
- concentração sobe mais que proporcionalmente;
- monitorização é especialmente útil.

### Caso 3 - Digoxina em idoso

Idoso usando digoxina começa com náuseas, confusão e arritmia.

**Raciocínio:**

- índice terapêutico estreito;
- risco maior com alteração renal, idade e interações;
- concentração sérica ajuda, mas deve ser interpretada com clínica e horário da coleta.

---

## 14. Perguntas de revisão ativa

1. Qual a diferença entre **dosis inicial** e **dosis de mantenimiento**?
2. Qual parâmetro farmacocinético mais influencia a dose inicial?
3. Qual parâmetro mais influencia a dose de manutenção?
4. Por que o estado estacionário costuma ser considerado alcançado após 5 semividas?
5. O que acontece com Css quando o aclaramiento diminui?
6. O que acontece com Cmax inicial se o Vd aumenta?
7. Por que a fenitoína é exemplo clássico de cinética não linear?
8. Qual a diferença entre intervalo óptimo e nivel diana?
9. Por que medir nível sérico sem saber o horário da coleta é perigoso?
10. Cite três fármacos em que a monitorização costuma ser importante.
11. Por que aminoglucósidos podem exigir pico e valle?
12. O que significa saturação de metabolismo?
13. Como a autoindução enzimática pode alterar concentrações ao longo do tempo?
14. Por que concentração plasmática e efeito podem não coincidir no tempo?
15. Quando a monitorización de fármacos não vale a pena?

---

## 15. Flashcards prontos

| Frente | Verso |
|---|---|
| O que é dosis inicial? | Dose usada para atingir rapidamente uma concentração terapêutica. |
| Dosis inicial depende principalmente de quê? | Volumen de distribución. |
| Dosis de mantenimiento depende principalmente de quê? | Aclaramiento. |
| Fórmula simplificada de dose inicial IV | DI = C alvo x Vd. |
| Fórmula de infusão no estado estacionário | Css = Q / Cl. |
| Em quantas semividas se atinge aproximadamente o steady state? | Cerca de 5 semividas. |
| O que ocorre se Cl diminui? | AUC e Css aumentam; eliminação fica mais lenta. |
| O que ocorre se Vd aumenta? | Cmax inicial tende a cair; t1/2 pode aumentar. |
| Exemplo clássico de cinética Michaelis-Menten | Fenitoína. |
| O que é intervalo óptimo? | Faixa populacional de concentração com maior probabilidade de eficácia e menor toxicidade. |
| O que é nivel diana? | Concentração alvo individual para aquele paciente. |
| Por que monitorar aminoglucósidos? | Para equilibrar eficácia e nefro/ototoxicidade, frequentemente avaliando pico e valle. |

---

## 16. Checklist de véspera

Antes da prova, Simone precisa conseguir responder sem olhar:

- [ ] O que é **farmacocinética clínica**.
- [ ] Diferença entre **dosis inicial** e **dosis de mantenimiento**.
- [ ] Relação: **DI ↔ Vd**.
- [ ] Relação: **manutenção ↔ Cl**.
- [ ] Regra das **5 semividas**.
- [ ] O que muda quando Cl diminui.
- [ ] O que muda quando Vd aumenta.
- [ ] O que é **cinética no lineal**.
- [ ] Por que **fenitoína** é perigosa para ajuste de dose.
- [ ] Quando pedir **monitorización de fármacos**.
- [ ] Diferença entre **intervalo óptimo** e **nivel diana**.
- [ ] Importância do horário da coleta.

---

## 17. Imagens e tabelas ouro

| Item | Página do livro | Arquivo |
|---|---:|---|
| Figura 6-1 | 84 | `![[florez-cap06-figura-6-1.jpg]]` |
| Figura 6-2 | 84 | `![[florez-cap06-figura-6-2.jpg]]` |
| Figura 6-3 | 85 | `![[florez-cap06-figura-6-3.jpg]]` |
| Figura 6-4 | 85 | `![[florez-cap06-figura-6-4.jpg]]` |
| Figura 6-5 | 86 | `![[florez-cap06-figura-6-5.jpg]]` |
| Figura 6-6 | 87 | `![[florez-cap06-figura-6-6.jpg]]` |
| Figura 6-7 | 87 | `![[florez-cap06-figura-6-7.jpg]]` |
| Figura 6-8 | 88 | `![[florez-cap06-figura-6-8.jpg]]` |
| Figura 6-9 | 88 | `![[florez-cap06-figura-6-9.jpg]]` |
| Figura 6-10 | 89 | `![[florez-cap06-figura-6-10.jpg]]` |
| Figura 6-11 | 90 | `![[florez-cap06-figura-6-11.jpg]]` |
| Figura 6-12 | 90 | `![[florez-cap06-figura-6-12.jpg]]` |
| Tabla 6-1 | 91 | `![[florez-cap06-tabla-6-1.jpg]]` |
| Figura 6-13 | 91 | `![[florez-cap06-figura-6-13.jpg]]` |
| Tabla 6-2 | 92 | `![[florez-cap06-tabla-6-2.jpg]]` |
| Figura 6-14 | 92 | `![[florez-cap06-figura-6-14.jpg]]` |
| Figura 6-15 | 93 | `![[florez-cap06-figura-6-15.jpg]]` |
| Figura 6-16 | 93 | `![[florez-cap06-figura-6-16.jpg]]` |
| Figura 6-17 | 94 | `![[florez-cap06-figura-6-17.jpg]]` |
| Figura 6-18 | 96 | `![[florez-cap06-figura-6-18.jpg]]` |
| Figura 6-19 | 96 | `![[florez-cap06-figura-6-19.jpg]]` |
| Figura 6-20 | 97 | `![[florez-cap06-figura-6-20.jpg]]` |
| Figura 6-21 | 98 | `![[florez-cap06-figura-6-21.jpg]]` |
| Tabla 6-3 | 99 | `![[florez-cap06-tabla-6-3.jpg]]` |
| Tabla 6-4 | 100 | `![[florez-cap06-tabla-6-4.jpg]]` |
| Figura 6-22 | 100 | `![[florez-cap06-figura-6-22.jpg]]` |
| Figura 6-23 | 101 | `![[florez-cap06-figura-6-23.jpg]]` |
| Tabla 6-5 | 102 | `![[florez-cap06-tabla-6-5.jpg]]` |
| Tabla 6-6 | 103 | `![[florez-cap06-tabla-6-6.jpg]]` |
| Tabla 6-7 | 104 | `![[florez-cap06-tabla-6-7.jpg]]` |
| Figura 6-24 | 104 | `![[florez-cap06-figura-6-24.jpg]]` |

---

## 18. Dúvidas para confirmar

- A disciplina/professor exige decorar os intervalos numéricos da Tabela 6-5 ou apenas reconhecer os fármacos monitorizados?
- A prova cobra cálculo farmacocinético formal ou raciocínio conceitual?
- O professor usa os termos em espanhol **nivel estable**, **intervalo óptimo**, **nivel diana**, **valle** e **pico** exatamente como no Flórez?
- Para aminoglucósidos e vancomicina, será cobrado apenas conceito de monitorização ou também horário exato de coleta?

---

## 19. Status de revisão

> [!warning] Status
> Este arquivo está em **rascunho-revisao-humana**. A parte conceitual foi organizada para estudo, mas fórmulas, valores numéricos e intervalos terapêuticos devem ser conferidos visualmente no PDF/livro antes de virar prova, questão ou flashcard definitivo.
