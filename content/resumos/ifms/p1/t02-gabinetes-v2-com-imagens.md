---
tags:
  - ifms
  - gabinetes
  - resumo
  - hardware
  - v2
  - imagens
data: 16-06-2026
disciplina: ifms
tema: T02-Gabinetes-v2-com-imagens
tipo: resumo
prova: P1
status: finalizado
fonte: >-
  13 videos YouTube — Escola de Hardware Ep.8, KaBum TV, PipocaTech, Adrenaline,
  Tecmundo, CASEVIEW, PCGamer
ficha-registrada: false
versao: 2-com-imagens
_source: 03-Disciplinas/IFMS/Revisao/Resumos/T02-Gabinetes-v2-com-imagens.md
---

# T02 — Gabinetes

> 🎧 Transcrições brutas: `02-Transcricoes/T02-Gabinetes/` (13 arquivos)
> 📹 Fontes: Escola de Hardware, KaBum TV, PipocaTech, Adrenaline, Tecmundo, CASEVIEW, PCGamer

---

## 1. O Que É o Gabinete

O gabinete é a **caixa que organiza, protege e suporta todos os componentes** do computador. Sem ele, os componentes ficariam expostos sobre uma mesa — funcionaria, mas seria uma bagunça perigosa para peças sensíveis e caras.

Por ser "apenas uma caixa", o gabinete é o componente mais variado do mercado: existem centenas de formatos, tamanhos, materiais e designs. Em termos técnicos, o gabinete define:

1. Quais **tamanhos de placa-mãe** cabem dentro (compatibilidade de form factor)
2. Quanta **ventilação** é possível (slots para ventoinhas e radiadores)
3. Quantos **dispositivos de armazenamento** podem ser instalados (baias HDD/SSD)
4. Como os **cabos são organizados** (cable management)
5. A **estética** do setup (vidro temperado, RGB, cor)

> [!note] Bancada aberta (open bench)
> Existe uma alternativa ao gabinete convencional: a **bancada aberta** (test bench), onde os componentes ficam expostos em uma estrutura de metal. Boa para quem troca peças constantemente, mas sem proteção contra acidentes e mais dependente do ambiente.

---

## 2. Tamanhos e Form Factors

> [!info] Comparação visual
> ![[ifms-t02-tamanhos-gabinete.svg]]
>
> Use a imagem para fixar a lógica: **Mini Tower < Micro-ATX < Mid Tower < Full Tower**.

Os gabinetes são classificados principalmente pela **altura** — quanto maior, mais componentes cabem.

| Categoria | Outros nomes | Slots de expansão | Placa-mãe suportada |
|---|---|---|---|
| **Mini Tower / HTPC** | Mini-ITX case | 2–3 | Mini-ITX |
| **Micro-ATX** | mATX Tower | 4 | Mini-ITX, Micro-ATX |
| **Mid Tower** | Mid-Tower | 7 | Mini-ITX, Micro-ATX, ATX |
| **Mid Tower XL** | "Full-até" | 7+ | Mini-ITX, Micro-ATX, ATX, E-ATX |
| **Full Tower** | Full Tower | 7–8+ | Tudo, incluindo servidores |

**Regra geral:** um gabinete maior comporta placas menores. Um gabinete Micro-ATX NÃO suporta placa ATX.

> ⚠️ **ATENÇÃO:** Micro-ATX tem apenas 4 slots — uma GPU de 3 slots pode obstruir o PSU cover e comprometer o airflow da placa de vídeo. Verifique sempre antes de comprar.

### Subtipos especiais

- **HTPC (Home Theater PC):** gabinete ultra-compacto para ficar na sala de TV. Cabe apenas Mini-ITX.
- **Dual Chamber:** design onde fonte e cabos ficam separados da área principal (ex: Lian Li O11). Mais organizado visualmente, mais complexo de montar.
- **Open Bench / Bancada:** estrutura aberta sem paredes. Boa para testes, má para uso diário.

---

## 3. Compatibilidade com Placa-Mãe

O ponto de partida para escolher um gabinete é a **placa-mãe que você vai usar**.

| Formato de Placa-Mãe | Dimensões aproximadas | Gabinete mínimo |
|---|---|---|
| Mini-ITX | 170 × 170 mm | Mini-ITX case / HTPC |
| Micro-ATX | ~244 × 244 mm | Micro-ATX ou maior |
| ATX | ~305 × 244 mm | Mid Tower ou maior |
| E-ATX (Extended ATX) | ~305 × 330 mm | Mid Tower XL ou Full Tower |

**Como identificar o suporte de placa-mãe de um gabinete:** olhe a parte traseira do gabinete — conte os **slots de expansão** (slots PCIe). 4 slots = Micro-ATX máximo. 7 slots = ATX ou maior.

Os **furos de fixação da placa-mãe** no chassi são padronizados. Um gabinete que aceita ATX terá furos para os modelos menores também — sobram parafusos, mas a placa encaixa.

---

## 4. Estrutura Interna — Onde Vai Cada Coisa

```
[Frente/Front]                    [Atrás/Rear]
  ┌────────────────────────────────────────────┐
  │  [FANS FRONTAIS — INTAKE]  ──► ar frio    │
  │                                            │
  │  [BAIAS HDD/SSD]           placa de vídeo►│ ← slots PCIe
  │                                            │
  │  [PLACA-MÃE no centro]    conectores PM ► │ ← backplate/espelho
  │                                            │
  │  [FONTE embaixo] ← moderno   [FAN TRASEIRO │ ← EXHAUST
  │  (ou em cima ← antigo)        EXHAUST]     │
  │                                            │
  │  [FANS SUPERIORES — EXHAUST ou RADIADOR]  │
  └────────────────────────────────────────────┘
```

**Posicionamento da fonte:**
- Gabinetes modernos: **fonte embaixo** (melhor equilíbrio de peso, fonte suga ar próprio pelo filtro na base)
- Gabinetes antigos: fonte em cima (junto com os fans traseiros)

---

## 5. Airflow — Ventoinhas e Fluxo de Ar

O **airflow** (fluxo de ar) é um dos fatores mais críticos para manter o PC frio. Ventoinhas têm duas funções: **injetar ar frio** (intake) ou **expulsar ar quente** (exhaust).

### Direção correta das ventoinhas

| Posição no gabinete | Direção | Motivo |
|---|---|---|
| **Frontal** | Intake (empurra para dentro) | Ar frio do ambiente entra |
| **Traseira** | Exhaust (puxa para fora) | Ar quente sai pelo processador |
| **Superior** | Exhaust (puxa para fora) | Ar quente sobe naturalmente |
| **Inferior** | Intake (empurra para cima) | Ar frio entra pela base |
| **Lateral** | Intake ou Exhaust | Variável por modelo |

> [!info] Caminho do ar
> ![[ifms-t02-airflow.svg]]
>
> A frente funciona como **entrada** e a traseira/topo como **saída**. Se inverter, o gabinete pode recircular ar quente.

### Pressão positiva vs negativa

| Situação | Descrição | Resultado |
|---|---|---|
| **Pressão positiva** | Só intake, sem exhaust | Ar quente fica preso dentro — ❌ |
| **Pressão negativa** | Só exhaust, sem intake | Ar frio não entra com eficiência — ❌ |
| **Equilíbrio** | Igual intake e exhaust | Fluxo contínuo de ar frio/quente — ✅ |

> [!tip] Regra prática
> Mesma quantidade de ventoinhas na entrada e na saída. Se tiver 3 frontais (intake), coloque 3 em cima + 1 atrás (exhaust).

### Tipos de ventoinhas

**Por tamanho:**
- **25 mm:** servidores/rack, raramente em PCs comuns
- **120 mm:** padrão universal — presente em quase todos os gabinetes
- **140 mm:** mais silenciosa que 120mm na mesma vazão de ar
- **200 mm+:** gabinetes grandes (Full Tower), muito silenciosa

**Espessura:**
- Padrão: **25 mm**
- Slim: **15 mm** — para gabinetes Mini-ITX compactos onde há pouco espaço

**Por tipo de conector:**

| Conector | Pinos | Controle de rotação | Monitoramento | Uso |
|---|---|---|---|---|
| **PWM** | 4 pinos | Sim (curva de temperatura programável) | Sim | Melhor opção — silenciosa e eficiente |
| **DC / 3 pinos** | 3 pinos | Parcial (via voltagem, nem toda funciona) | Sim | Funciona em slot de 4 pinos, mas sem controle fino |
| **Molex** | 4 pinos (fonte) | Não — sempre 100% | Não | Evitar — barulhenta, sem gestão |

> [!note] PWM (Pulse Width Modulation)
> O controle PWM permite definir **curvas de rotação por temperatura**: abaixo de 40°C a ventoinha fica quase parada; acima de 80°C, acelera. Resultado: silêncio em idle e refrigeração máxima sob carga.

### Pressão estática

Quando há um **obstáculo na frente da ventoinha** (filtro de poeira, radiador de watercooler), a ventoinha precisa de **pressão estática** para superar a resistência.

| Valor de pressão estática | Classificação |
|---|---|
| > 4.0 mmH₂O | Alta — ideal para radiadores |
| 1.5–2.0 mmH₂O | Média — uso geral |
| < 1.0 mmH₂O | Baixa — só para fluxo livre sem obstáculos |

### Frente aberta (mesh) vs frente fechada

| Tipo | Vantagem | Desvantagem |
|---|---|---|
| **Mesh/vazada** | Melhor airflow, menos ruído | Acumula poeira mais rápido |
| **Fechada** | Visual mais limpo | Dificulta entrada de ar |
| **Com filtro grosso** | Mantém limpo por mais tempo | Reduz ainda mais o airflow |

---

## 6. Painel Frontal — Conectores e Cabos

O **painel frontal** (front panel) é o conjunto de fios que conecta os botões e LEDs do gabinete à placa-mãe. É a parte mais confusa para quem monta o primeiro PC.

### Conectores do painel frontal

| Conector | Função | Pinos | Polaridade? |
|---|---|---|---|
| **Power SW** | Botão liga/desliga | 2 | Não crítica — funciona dos dois lados |
| **Reset SW** | Botão de reset | 2 | Não crítica |
| **HDD LED** | LED de atividade do HD | 2 | Sim: + à esquerda |
| **Power LED** | LED de energia (ligado) | 2 | Sim: + à esquerda |
| **HD Audio** | Áudio frontal (fone + microfone) | 9+1 | Único conector com chave — só encaixa em um sentido |
| **USB 2.0** | Porta USB frontal 2.0 | 9+1 | Pino ausente na extremidade |
| **USB 3.0** | Porta USB frontal 3.0 | Grande conector | Separação central indica o lado correto |
| **USB Type-C** | Porta Type-C frontal | Conector único | Sem polaridade |

### Como identificar a polaridade

- **Procure a seta (▶)** no conector — indica o lado positivo
- **Positivo (+) = sempre à esquerda** no cabeçalho da placa-mãe (olhando de frente)
- Se o cabo tiver cores: o fio colorido geralmente é + e o preto é −
- **Power SW e Reset SW:** não importa a orientação — se não acender o LED, inverta, mas o botão funciona dos dois lados

### Localização no cabeçalho da placa-mãe (padrão)

```
[POWER SW +] [POWER SW −]    ← Superior direito
[RESET SW +] [RESET SW −]    ← Inferior direito
[PWR LED +]  [PWR LED −]     ← Superior esquerdo
[HDD LED +]  [HDD LED −]     ← Inferior esquerdo
```

> [!tip] Visual para não errar
> ![[ifms-t02-painel-frontal.svg]]
>
> **Power SW** e **Reset SW** funcionam dos dois lados. **PWR LED** e **HDD LED** têm polaridade.

> [!tip] Dica prática
> O conector de **HD Audio** tem um "pino fechado" (chave) — só encaixa em uma posição, não tem erro. O USB 3.0 tem uma separação no conector que indica qual lado encaixa na "língua" do slot da placa-mãe.

### Diferença entre HD Audio e AC'97

- **HD Audio** (High Definition Audio): padrão moderno, recomendado
- **AC'97**: padrão antigo — funciona, mas com qualidade inferior
- Sempre prefira o conector marcado **HD Audio** ou **JAUD1** na placa-mãe

---

## 7. Instalação da Placa-Mãe no Gabinete

### Passo a passo completo

**1. Identificar o formato da placa-mãe**
- Observe as marcações no gabinete: ATX, mATX, mITX indicam onde ficam os furos

**2. Instalar as buchias de fixação (standoffs)**
- Buchias são parafusos com rosca fêmea que criam espaçamento entre a placa-mãe e o chassi
- Use a chave de boca (geralmente incluída no gabinete) para apertar no lugar certo
- Verificação: **todo furo com marcação do seu formato deve ter uma buchia**

**3. Instalar o espelho/backplate**
- O **espelho** (I/O shield, backplate) é a peça metálica que preenche a abertura traseira para as conexões da placa-mãe
- Entra **de dentro para fora** do gabinete — encaixe com pressão até travar
- ⚠️ Não esqueça: instalar **antes** da placa-mãe — impossível depois

**4. Encaixar a placa-mãe**
- Posicione a placa fazendo um **movimento diagonal** para encaixar no espelho primeiro
- Alinhe os furos da placa com as buchias
- Em gabinetes apertados, entre com cautela para não arranhar capacitores

**5. Parafusar a placa-mãe**
- Use **parafusos de rosca fina** (os mais finos do kit do gabinete)
- **Não aperte completamente um por vez** — coloque todos frouxos primeiro para casar os furos, depois aperte em ordem cruzada
- A placa-mãe deve ficar firme, sem movimento

> [!danger] Regra crítica de aterramento
> A placa-mãe **não pode encostar no fundo do chassi** — ela fica suspensa sobre as buchias. O aterramento elétrico da placa é feito pelos parafusos metálicos → buchias → chassi → fonte → terra da instalação elétrica da casa. Colocar material isolante (borracha, papel) entre a buchia e a placa **quebra o aterramento** — nunca faça isso.

> [!warning] Buchias vistas em corte
> ![[ifms-t02-standoffs.svg]]
>
> A função da buchia é dupla: **separar** a placa-mãe do chassi e **conduzir o aterramento** pelos parafusos.

---

## 8. Organização de Cabos (Cable Management)

Cabos desorganizados não são só feios — **atrapalham o airflow** e podem ser puxados por ventoinhas.

### Ferramentas necessárias

| Item | Uso | Observação |
|---|---|---|
| **Abraçadeiras (zip ties)** | Prender feixes de cabos | 2,5 mm × 200 mm, cor preta recomendada |
| **Velcro para cabos** | Alternativa às abraçadeiras | Mais fácil de remover para manutenção |
| **Alicate de corte** | Cortar o excesso da abraçadeira | Deixar o acabamento limpo |

### Técnica de organização

1. **Passe os cabos pela parte de trás da bandeja** da placa-mãe — não pela frente
2. Use os **grommets** (borrachinhas de passagem) para guiar os cabos entre os dois lados
3. Crie **caminhos definidos**: cabo de 24 pinos sobe por baixo, cabo de CPU (8 pinos) pelo canto superior, cabos de fans pelos trilhos laterais
4. Use as **alças** e furos do chassi para prender as abraçadeiras
5. Sobras de cabo ficam no **compartimento da fonte** (PSU cover) onde não aparecem

> [!tip] Extensor Sleeve
> Extensores de cabos com malha (sleeve) decorativos têm cores mais chamativas e ajudam a disfarçar os cabos na área visível pelo vidro lateral.

---

## 9. Materiais, Estética e Filtros

### Tampa lateral

| Material | Vantagem | Desvantagem |
|---|---|---|
| **Vidro temperado** | Visual premium, não risca fácil | Pesado, difícil de limpar (marcas de dedos) |
| **Acrílico** | Leve, barato | Risca com facilidade |
| **Metal fechado** | Durável, sem preocupação | Não mostra o interior |

### Filtros de poeira

- Presentes na **frente, superior e base** (onde ficam as ventoinhas)
- Função: impedir que poeira se acumule nas pás das ventoinhas (reduz rotação, barulho e vida útil)
- **Manutenção:** retirar e limpar regularmente (aspirador ou soprador)
- Alguns filtros saem pelo exterior sem abrir o gabinete (ex: filtro da fonte na base)

### PSU Cover

Capa decorativa que esconde a fonte e os cabos soltos na parte inferior do gabinete. Comum em gabinetes a partir do nível intermediário.

---

## 10. Erros Comuns

> ⚠️ **Serrar o gabinete para caber a GPU:** acontece quando alguém compra uma GPU de 3 slots para um gabinete Micro-ATX que só tem 4 slots. Sempre verifique o comprimento da GPU (em mm) e o espaço disponível no gabinete.

> ⚠️ **Inverter a direção das ventoinhas:** a frente SEMPRE é intake. Colocar ventoinha frontal expulsando ar para fora é um erro clássico.

> ⚠️ **Esquecer o espelho antes da placa-mãe:** impossível instalar depois. A placa-mãe tapa o acesso.

> ⚠️ **Não instalar as buchias (standoffs):** a placa-mãe encostaria no metal do chassi causando curto-circuito.

> ⚠️ **Colocar isolante entre buchia e placa-mãe:** quebra o aterramento elétrico da placa.

> ⚠️ **Escolher gabinete só pelo visual:** frente totalmente fechada com filtro grosso pode reduzir tanto o airflow que a temperatura do sistema aumenta significativamente.

> ⚠️ **Apertar todos os parafusos da placa-mãe completamente um por vez:** dificulta casar os furos restantes. Sempre coloque todos frouxos antes do aperto final.

---

## 11. Mapa de Conceitos

```
GABINETE
│
├── TAMANHO
│   ├── Mini-ITX / HTPC (apenas Mini-ITX)
│   ├── Micro-ATX (Mini-ITX + Micro-ATX, 4 slots PCIe)
│   ├── Mid Tower (Mini-ITX + mATX + ATX, 7 slots PCIe)
│   └── Full Tower (tudo, inclusive E-ATX)
│
├── AIRFLOW
│   ├── Frente = INTAKE (ar frio entra)
│   ├── Trás + Topo = EXHAUST (ar quente sai)
│   ├── Equilíbrio intake = exhaust
│   └── Ventoinhas
│       ├── 120mm (padrão), 140mm (silenciosa), 200mm (grandes)
│       ├── PWM (4 pinos) = melhor controle
│       ├── 3 pinos = controle limitado
│       └── Molex = sem controle (100% sempre)
│
├── PAINEL FRONTAL
│   ├── Power SW (liga/desliga, sem polaridade)
│   ├── Reset SW (reset, sem polaridade)
│   ├── HDD LED + Power LED (polaridade: + esquerda)
│   ├── HD Audio (conector com chave, único encaixe)
│   ├── USB 2.0 (pino ausente na extremidade)
│   └── USB 3.0 (separação central indica orientação)
│
├── INSTALAÇÃO DA PLACA-MÃE
│   ├── Buchias/standoffs nos furos corretos
│   ├── Espelho (backplate) ANTES da placa
│   ├── Placa-mãe NÃO encosta no fundo
│   └── Aterramento via parafusos → chassi → fonte → terra
│
└── CABLE MANAGEMENT
    ├── Abraçadeiras (zip ties) ou velcro
    ├── Cabos passam por trás da bandeja
    ├── Grommets guiam a passagem
    └── Sobras ficam no PSU cover
```

---

## 12. Perguntas de Fixação

**1.** Um gabinete Mid Tower tem 7 slots de expansão. Quantos slots tem um gabinete Micro-ATX e por que isso importa para escolha da GPU?

**2.** Qual é a diferença entre pressão positiva, pressão negativa e equilíbrio no airflow? Qual é o correto?

**3.** Um estudante comprou uma ventoinha com conector Molex. Quais são as desvantagens em relação a uma ventoinha PWM de 4 pinos?

**4.** Por que o espelho (backplate/I/O shield) precisa ser instalado ANTES da placa-mãe? O que acontece se esquecer?

**5.** Por que é perigoso colocar borracha ou papel entre a buchia de fixação e a placa-mãe?

**6.** Identifique os 5 conectores do painel frontal e explique qual deles tem polaridade crítica e qual não tem.

**7.** Qual é a diferença entre HD Audio e AC'97? Qual deve ser usado?

**8.** Um gabinete com frente totalmente fechada e filtro de poeira grosso pode prejudicar o desempenho do PC. Explique por quê e como resolver.

---

*Resumo elaborado a partir de 13 transcrições de vídeo | 16-06-2026*
*Fontes: Escola de Hardware (Adrenaline), KaBum TV, PipocaTech, Tecmundo, CASEVIEW, PCGamer*
