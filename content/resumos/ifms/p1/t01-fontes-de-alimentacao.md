---
tags:
  - ifms
  - Fontes-de-Alimentacao
  - resumo
  - hardware
data: 16-06-2026
disciplina: ifms
tema: T01-Fontes-de-Alimentacao
tipo: resumo
prova: P1
status: construindo
fonte: >-
  8 vídeos YouTube — RBTech, Adrenaline, TecMundo, DMeloTV (elaborado por
  Claude)
ficha-registrada: false
_source: 03-Disciplinas/IFMS/Revisao/Resumos/T01-Fontes-de-Alimentacao.md
---

# T01 — Fontes de Alimentação

> 🎧 **Fontes:** 8 vídeos — RBTech (×2), Adrenaline Escola de Hardware (×2), TecMundo (×3), DMeloTV (×1)
> 📅 Elaborado em: 16-06-2026

---

## 1. O Que É e Para Que Serve

A **fonte de alimentação** (PSU — *Power Supply Unit*) converte a **corrente alternada (CA)** da tomada em **corrente contínua (CC)** estável para os componentes do PC.

- Tomada fornece CA: oscilante (como picos de batimento cardíaco)
- Componentes precisam de CC: constante, sem variação
- **Sem a fonte → nenhum componente funciona**

A fonte distribui a tensão certa para cada componente: 12 V para CPU e GPU, 5 V para drives e USB, 3,3 V para RAM e SSDs.

---

## 2. Tipos de Fonte

### 2.1 Genérica vs Real

| Característica | Fonte Genérica | Fonte Real |
|---|---|---|
| Potência nominal | Só suportada em **picos** | Suportada de forma **contínua** |
| Componentes internos | Baixa qualidade | Alta qualidade (capacitores japoneses) |
| Risco | Pode **explodir** se forçada | Segura e estável |
| Eficiência | Baixa, sem certificação | 80 Plus certificada |
| Recomendação | ❌ Evitar sempre | ✅ Usar sempre |

> ⚠️ **ATENÇÃO:** fonte genérica de 500 W **não entrega 500 W contínuos**. Forçada ao máximo, queima — e pode danificar todos os componentes junto.

---

### 2.2 Formatos

| Formato | Onde usa |
|---|---|
| **ATX** | Gabinetes padrão (mid/full tower) — mais comum |
| **SFX** | Gabinetes mini-ITX (pequenos) |
| PS2 / PS3 | Formatos menos comuns |

O tamanho da fonte é definido pelas dimensões da **face traseira** (onde encaixa o cabo de energia). O comprimento pode variar.

---

### 2.3 Modulares vs Não-Modulares

| Tipo | Cabos | Ideal para |
|---|---|---|
| **Não-modular** | Todos fixos — nenhum removível | Iniciantes — mais seguro |
| **Semi-modular** | Cabo da placa-mãe fixo; demais removíveis | Uso geral |
| **Full-modular** | Todos removíveis | Entusiastas com experiência |

> 💡 Fonte modular = melhor organização de cabos dentro do gabinete = melhor fluxo de ar.

---

## 3. Especificações Técnicas — Como Ler e Escolher

### 3.1 Potência (Watts) ⭐

Quantidade total de energia que a fonte pode entregar de forma contínua.

**Regra de ouro:** compre uma fonte com **o dobro** do consumo calculado.
- Razão 1: melhor eficiência ocorre com **50% da carga**
- Razão 2: sobra margem para **upgrades futuros**

**Exemplo:**
> PC consome ~300 W calculados → compre fonte de **600 W**

Use calculadoras online para somar o TDP de todos os componentes:
- Cooler Master Power Calculator
- OuterVision PSU Calculator
- PCPartPicker

---

### 3.2 Eficiência — Selo 80 Plus ⭐

O selo 80 Plus certifica que pelo menos 80% da energia puxada da tomada é entregue útil ao PC.

| Selo | Eficiência mínima | Quando escolher |
|---|---|---|
| 80 Plus | 80% | Mínimo aceitável |
| 80 Plus Bronze | 82% | Custo-benefício básico |
| 80 Plus Silver | 85% | — |
| **80 Plus Gold** | **87%** | **Melhor custo-benefício ← recomendado** |
| 80 Plus Platinum | 90–92% | Alto desempenho |
| 80 Plus Titanium | > 94% | Máximo — muito caro |

> ⚠️ **Exemplo:** fonte 500 W com 80% de eficiência consome 625 W da tomada. Com 90%, consome ~555 W. A diferença aparece na conta de luz ao longo do tempo.

---

### 3.3 TDP e Cálculo de Capacidade ⭐

**TDP** (*Thermal Design Power*) = calor que o componente precisa dissipar ≈ energia que ele consome. Dado em Watts.

**Como calcular a fonte necessária:**

| Componente (exemplo) | TDP |
|---|---|
| Intel Core i5 | 65 W |
| GTX 970 (GPU) | 220 W |
| Placa-mãe + 2× RAM + 1 HD + 2 fans | ~82 W |
| **Total** | **~367 W** |
| **Fonte recomendada** | **600–700 W** |

---

### 3.4 PFC Ativo

Circuito interno que:
- Aumenta a eficiência da fonte
- Reduz ruído elétrico e interferências da rede
- Presente em todas as fontes de qualidade

> ✅ Sempre prefira fontes com **PFC Ativo** declarado na especificação.

---

### 3.5 Proteções

| Sigla | Nome | Protege contra |
|---|---|---|
| OCP | Proteção contra sobrecorrente | Excesso de corrente |
| OVP | Proteção contra sobretensão | Tensão acima do normal |
| OPP | Proteção contra sobrepotência | Sobrecarga total |
| SCP | Proteção contra curto-circuito | Curtos internos/externos |
| OTP | Proteção contra superaquecimento | Temperatura excessiva |

> ⚠️ No Brasil, a rede elétrica é instável. Mais proteções = mais segurança para o PC.

---

## 4. Cores dos Fios e Tensões ⭐

| Cor | Tensão | Função |
|---|---|---|
| **Amarelo** | **+12 V** | CPU, GPU, motores de HDs, fans |
| **Vermelho** | **+5 V** | Drives, USB, circuitos lógicos |
| **Laranja** | **+3,3 V** | RAM, SSDs, circuitos modernos |
| **Preto** | 0 V (GND) | Terra — retorno de todas as linhas |
| **Roxo** | +5 V standby | Sempre ligado quando plugado na tomada |
| **Verde** | Power On | Aciona a fonte (ligar sem PC: curto verde+preto) |
| **Cinza** | Power Good | Sinal de que a fonte está operando corretamente |
| **Azul** | −12 V | Legado (PCI antigo) — raramente usado |
| **Branco** | −5 V | Legado — pouquíssimas fontes ainda têm |

### Tolerâncias Permitidas (±5%) ⭐

| Linha | Ideal | Mínimo | Máximo |
|---|---|---|---|
| +12 V | 12,0 V | 11,4 V | 12,6 V |
| +5 V | 5,0 V | 4,75 V | 5,25 V |
| +3,3 V | 3,3 V | 3,13 V | 3,46 V |

> ⚠️ Tensão fora dessa faixa = possível defeito na fonte → risco de danos nos componentes.

---

## 5. Conectores da Fonte ⭐

### ATX 20/24 pinos — Placa-mãe
- Maior conector da fonte
- Modelos antigos: 20 pinos | Modernos: 24 pinos
- Muitas fontes têm bloco 20+4 pinos (separável)

### EPS 4/8 pinos — Processador (CPU)
- Alimentação dedicada para o CPU
- 4 pinos: CPUs básicos | 8 pinos: alto desempenho
- Fica no canto superior esquerdo da placa-mãe

### PCI-e 6/8 pinos — Placa de Vídeo (GPU)
- 6 pinos: GPUs intermediárias
- 8 pinos: GPUs de alto desempenho
- GPUs de topo: podem exigir 2× 8 pinos (total de 16 pinos)

### SATA — HD / SSD / Drive Óptico
- Conector achatado e fino
- Não tem como confundir com os outros por formato

### Molex — Coolers / Periféricos Antigos
- Conector "vovozinho" — legado do padrão IDE
- Ainda usado para coolers extras e painéis de ventilação

### Conector de Fan (3 pinos)
- Ligado direto na fonte: fan gira sempre na velocidade máxima
- Preferir ligar na placa-mãe para controle de velocidade

---

## 6. Como Instalar / Conectar

1. **Verifique a chave 110/220 V** na traseira da fonte antes de qualquer coisa ⚠️
2. Encaixe o **conector ATX 24 pinos** na placa-mãe
3. Encaixe o **conector EPS 4/8 pinos** no socket de CPU (canto superior esquerdo da placa-mãe)
4. Conecte o(s) **cabo(s) PCI-e** na GPU (se aplicável)
5. Conecte os **cabos SATA** em cada HD, SSD ou drive
6. Conecte **Molex** em coolers extras (se necessário)
7. **Organize os cabos** — melhora ventilação e aparência
8. Aparafuse a fonte no gabinete (4 parafusos)
9. Conecte o cabo de força externo

> ⚠️ Antes de ligar: verifique todos os conectores. Nenhum cabo deve estar solto ou cruzando ventiladores.

---

## 7. Como Testar a Fonte ⭐

### Método 1 — Testador de Fontes (recomendado para iniciantes)

Aparelho barato e dedicado. A fonte **não precisa estar no PC**.

**3 passos:**
1. Encaixe o conector de 24 pinos (e demais conectores) no testador
2. Ligue a fonte na tomada
3. Aguarde o sinal:
   - **DU-DU** (dois bipes curtos) = fonte OK
   - **Bipe longo** = falha detectada

**Indicadores do display:**

| Indicador | Tensão | O que verifica |
|---|---|---|
| −12 V | −12 V | Legado — ignorar em PCs modernos |
| 12 V | +12 V | CPU e GPU — **crítico** |
| 5VSB | +5 V standby | Ativo quando plugado |
| PG | Power Good | Tempo resposta normal: 260–280 ms |
| 5 V | +5 V | HD, SSD, USB |
| 12 V2 | +12 V | Segunda trilha — segurança |
| 3,3 V | +3,3 V | RAM e SSDs |

> **LL no display** = voltagem fraca demais → fonte com defeito.

---

### Método 2 — Multímetro Digital

**Necessário:** multímetro + clipe ou fio desencapado.

**Passo a passo:**
1. Configure o seletor para **CC — 200 V**
2. Ligue a fonte na tomada (fonte fora do PC)
3. Teste o fio **roxo** (standby) — deve mostrar ~5 V mesmo desligada
4. Faça curto entre **fio verde** e **fio preto** → fonte liga (ventilador gira)
5. Ponta preta do multímetro em qualquer **fio preto**
6. Ponta vermelha em cada fio colorido → confira os valores

> ⚠️ Não force a ponta do multímetro nos conectores — pode amassar os pinos.

---

## 8. Erros Comuns e Como Evitá-los

| Erro | Causa Provável | Solução |
|---|---|---|
| PC trava ou congela sem motivo | Fonte subdimensionada | Calcular TDP e comprar fonte maior |
| Monitor apaga e volta durante uso | GPU sem energia suficiente | Verificar conector PCI-e; aumentar capacidade |
| PC não liga de jeito nenhum | Chave 110/220 errada ou cabo Power On solto | Verificar chave + todos os conectores |
| Componentes queimam frequentemente | Fonte genérica sem proteção | Trocar por fonte 80 Plus certificada |
| Fonte muito barulhenta | Cooler de baixa qualidade interno | Preferir fontes com rolamento FDB |
| Display "LL" no testador | Voltagem abaixo do mínimo | Fonte com defeito — substituir |
| Tensão fora da tolerância no multímetro | Fonte com defeito ou envelhecida | Substituir a fonte |

---

## 9. Segurança e Boas Práticas ⭐

### Eletricidade Estática (ESD)

> ⚠️ Uma descarga eletrostática pode queimar componentes sem que você perceba.

**Como se proteger:**
- Use **pulseira de aterramento antiestática** — pulso + gabinete no chão
- Sem pulseira: **tome banho** antes de mexer (descarrega o corpo) + use chinelo de borracha
- **Nunca apoie componentes em toalhas** — acumulam carga estática
- Segure componentes sempre **pelas bordas** — nunca pelos contatos dourados
- **Aterrar o gabinete** antes de abrir (colocar no chão)

**Ambientes de risco elevado:**
- Ar seco (cidades como Brasília)
- Tapetes no chão
- Roupas de lã ou sintético

---

### Regras Gerais

> ⚠️ **NUNCA abra a fonte.** Os capacitores internos retêm carga elétrica mesmo desligada e desplugada — risco de choque grave.

**Checklist antes de ligar:**
- [ ] Chave 110/220 V no valor correto para sua cidade
- [ ] Todos os conectores encaixados firmemente
- [ ] Nenhum cabo preso em ventiladores
- [ ] Fonte aparafusada no gabinete

---

## 10. Mapa dos Conceitos

```
FONTE DE ALIMENTAÇÃO (PSU)
│
├── FUNÇÃO
│   └── Converte CA (tomada) → CC estável → distribui para componentes
│
├── TIPOS
│   ├── Genérica (❌) vs Real certificada (✅)
│   ├── Formato: ATX | SFX | PS2/PS3
│   └── Cabos: Não-modular | Semi-modular | Full-modular
│
├── ESPECIFICAÇÕES PARA ESCOLHER
│   ├── ⭐ Potência (W): calcular TDP total + comprar 2×
│   ├── ⭐ Eficiência: Selo 80 Plus (Bronze → Gold → Platinum → Titanium)
│   ├── PFC Ativo: obrigatório em boas fontes
│   └── Proteções: OCP | OVP | OPP | SCP | OTP
│
├── FIOS E TENSÕES
│   ├── Amarelo: +12 V | Vermelho: +5 V | Laranja: +3,3 V
│   ├── Preto: GND | Roxo: Standby | Verde: Power On | Cinza: Power OK
│   └── Tolerância: ±5% em cada linha
│
├── CONECTORES
│   ├── ATX 20/24 pinos → Placa-mãe
│   ├── EPS 4/8 pinos → CPU
│   ├── PCI-e 6/8 pinos → GPU
│   ├── SATA → HD / SSD / Drive
│   └── Molex → Coolers / periféricos antigos
│
├── TESTAR
│   ├── Testador de fontes: plug → liga → bipe DU-DU = OK
│   └── Multímetro: verde+preto → liga; medir cada fio; ±5% OK
│
└── SEGURANÇA
    ├── ESD: pulseira antiestática ou banho + chinelo de borracha
    ├── 110/220 V: verificar ANTES de ligar
    └── Nunca abrir a fonte (capacitores retêm carga)
```

---

## 11. Perguntas de Fixação ⭐

**1.** Qual a função principal da fonte de alimentação?
- a) Armazenar energia para uso offline
- **b) Converter corrente alternada em corrente contínua para os componentes**
- c) Regular a velocidade dos ventiladores
- d) Controlar a temperatura do processador

**2.** Fonte de 600 W com 80% de eficiência — quanto ela consome da tomada?
- a) 480 W
- b) 600 W
- **c) 750 W**
- d) 800 W

**3.** Qual fio precisa fazer curto com o GND (preto) para ligar a fonte fora do PC?
- a) Fio amarelo (+12 V)
- b) Fio vermelho (+5 V)
- c) Fio roxo (standby)
- **d) Fio verde (Power On)**

**4.** O que indica o display "LL" em um testador de fontes?
- a) Voltagem acima do limite
- **b) Voltagem fraca demais — abaixo do mínimo**
- c) Fonte funcionando normalmente
- d) Cabo desconectado

**5.** Qual conector alimenta o processador (CPU)?
- a) ATX 24 pinos
- b) Molex
- **c) EPS 4/8 pinos**
- d) PCI-e 6/8 pinos

**6.** Qual a eficiência mínima garantida pelo selo 80 Plus Gold?
- a) 80%
- b) 82%
- **c) 87%**
- d) 94%

**7.** Qual a tolerância máxima de variação nas tensões de saída da fonte?
- a) ±1%
- **b) ±5%**
- c) ±10%
- d) ±15%

**8.** Por que comprar fonte com o dobro da potência necessária?
- a) Para usar dois PCs ao mesmo tempo
- b) Fontes maiores são mais baratas por watt
- **c) Melhor eficiência na metade da carga + margem para upgrades**
- d) Fontes subdimensionadas não ligam

---

> 🔗 **Navegação:** [[03-Disciplinas/IFMS/00-Controle/_Indice|Índice IFMS]] · [[T02-Gabinetes|Próximo: Gabinetes]] · [[_HOME|Home]]

---
*Elaborado por Claude | 16-06-2026 | 8 vídeos YouTube via NotebookLM*
