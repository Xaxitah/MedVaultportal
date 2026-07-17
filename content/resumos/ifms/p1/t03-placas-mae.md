---
tags:
  - ifms
  - Placas-Mae
  - resumo
  - hardware
data: 16-06-2026
disciplina: ifms
tema: T03-Placas-Mae
tipo: resumo
prova: P1
status: finalizado
fonte: >-
  10 videos YouTube — Escola de Hardware Ep.1, Adrenaline, Tecmundo, KaBum TV,
  BIOS Update
ficha-registrada: false
_source: 03-Disciplinas/IFMS/Revisao/Resumos/T03-Placas-Mae.md
---

# T03 — Placas-Mãe

> 🎧 Transcrições brutas: `02-Transcricoes/T03-Placas-Mae/` (10 arquivos)
> 📹 Fontes: Escola de Hardware (Adrenaline), KaBum TV, Tecmundo, Foxconn/Gigabyte Manaus, BIOSTAR

---

## 1. O Que É a Placa-Mãe

A **placa-mãe** (motherboard) é o componente central do computador — é o PCB (Printed Circuit Board, placa de circuito impresso) onde todos os outros componentes se conectam e se comunicam.

Sem ela não existe computador: o processador, a memória RAM, a placa de vídeo, os HDs e SSDs, a fonte de alimentação — tudo passa pela placa-mãe.

**O que ela faz:**
1. Fornece o **socket** para o processador
2. Fornece os **slots** para memória RAM
3. Fornece os **slots PCIe** para placa de vídeo e outras expansões
4. Fornece as **portas SATA e M.2** para armazenamento
5. Fornece os **conectores externos** (USB, audio, rede, vídeo) no painel traseiro
6. Gerencia tudo isso através do **Chipset** e da **BIOS/UEFI**

> [!note] O que define a escolha da placa-mãe?
> Na prática, o usuário **escolhe o processador primeiro** — e a placa-mãe é escolhida em função do processador, porque socket, chipset e DDR (tipo de RAM) são definidos pelo processador.

---

## 2. Form Factors — Tamanhos de Placa-Mãe

| Formato | Sigla | Dimensões aprox. | Slots PCIe | Uso típico |
|---|---|---|---|---|
| **Extended ATX** | E-ATX | 305 × 330 mm | 7+ | Servidores, workstations, extreme gaming |
| **ATX** | ATX | 305 × 244 mm | 7 | Desktops padrão — mais opções de expansão |
| **Micro ATX** | mATX | 244 × 244 mm | 4 | Desktops compactos — boa relação custo/benefício |
| **Mini ITX** | mITX | 170 × 170 mm | 1 | PCs compactos, HTPC — forma quadrada |

**Dica visual:** Mini-ITX sempre tem formato **quadrado** e apenas **1 slot PCIe**. ATX e Micro-ATX são retangulares.

> [!warning] Compatibilidade gabinete × placa-mãe
> O gabinete define o tamanho máximo de placa-mãe que cabe. Um gabinete Micro-ATX não aceita placa ATX. Um gabinete ATX aceita qualquer placa menor. Defina gabinete e placa juntos.

---

## 3. Soquetes e Compatibilidade com Processador

O **socket** (soquete) é o encaixe físico que conecta o processador à placa-mãe. Cada geração/plataforma usa um socket diferente e **não há compatibilidade cruzada**.

### Intel vs AMD — Onde ficam os pinos

| Fabricante | Padrão de pinos | Onde ficam os pinos | Cuidado especial |
|---|---|---|---|
| **Intel** | LGA (Land Grid Array) | No **socket da placa-mãe** | Cuidado para não tocar os pinos do socket |
| **AMD** | PGA (Pin Grid Array) | No **processador** | Cuidado para não dobrar os pinos do processador |

A numeração do socket indica o número de pinos: **LGA1151** = 1151 pinos. **LGA1700** = 1700 pinos.

### Soquetes mais comuns (referência)

| Plataforma | Socket | Processadores compatíveis |
|---|---|---|
| Intel 12ª/13ª/14ª gen | LGA1700 | Core i3/i5/i7/i9 |
| Intel 10ª/11ª gen | LGA1200 | Core i3/i5/i7/i9 |
| AMD Ryzen 5000/7000 | AM4/AM5 | Ryzen 3/5/7/9 |

> [!danger] Regra absoluta
> Intel e AMD **nunca são intercambiáveis**. Uma placa Intel não aceita processador AMD e vice-versa. O socket não encaixa — e se forçar, destrói a placa ou o processador.

### Seta guia — como encaixar o processador

Tanto Intel quanto AMD têm uma **seta (triângulo) no processador e no socket** indicando a orientação correta:
- AMD PGA: alinhar a seta do processador com a seta do socket, soltar gentilmente — o processador "cai" no lugar sem força
- Intel LGA: levantar a alavanca, alinhar o processador, abaixar a tampa — a capa protetora sai automaticamente quando a alavanca é travada

---

## 4. Chipset — O Gerenciador da Placa

O **chipset** é um conjunto de chips na placa que gerencia a comunicação entre o processador, a RAM, o armazenamento e os periféricos.

O chipset define:
- Quais processadores são compatíveis
- Se a placa suporta **overclock**
- Quantas portas M.2 e USB estão disponíveis
- A geração do PCIe suportada

### Hierarquia de chipsets (referência geral)

| Nível | Intel | AMD | Recursos |
|---|---|---|---|
| **Topo / OC** | Z-series (Z690, Z790) | X-series (X570, X670) | Overclock, máximo PCIe e M.2 |
| **Intermediário** | B-series (B660, B760) | B-series (B550, B650) | Bom custo-benefício, sem OC completo |
| **Básico** | H-series (H610, H710) | A-series | Menor custo, mais limitado |

> [!tip] Regra de equilíbrio
> **Processador topo + placa básica:** pode perder desempenho por VRM fraco.
> **Processador básico + placa topo:** desperdício de dinheiro.
> Sempre equilibre o nível do processador com o chipset da placa.

---

## 5. VRM — Fases de Alimentação

O VRM (Voltage Regulator Module) é o circuito da placa-mãe que **filtra e estabiliza a energia** antes de entregar ao processador.

**Mais fases de VRM = energia mais limpa e estável**, essencial para overclock e processadores de alto consumo.

Placas para processadores simples podem ter 4–6 fases. Placas para overclock extremo chegam a 14–18 fases. O número de fases aparece nas especificações do produto.

---

## 6. Memória RAM na Placa-Mãe

### Slots de memória

- Placas ATX e mATX geralmente têm **4 slots** (às vezes 2 no mITX)
- Os slots têm cores diferentes para indicar os **canais** (dual channel = melhor performance)
- Para ativar **dual channel**: preencher slots do mesmo canal (geralmente 1+3 ou 2+4 — consultar manual)

### Gerações de DDR e compatibilidade

| Geração | Características | Compatibilidade |
|---|---|---|
| **DDR4** | Padrão dominante (2015–2023) | Intel 6ª–13ª gen, AMD AM4 |
| **DDR5** | Mais rápida, maior capacidade | Intel 12ª gen+, AMD AM5 |

> ⚠️ **DDR4 e DDR5 são incompatíveis fisicamente** — o entalhe (key) é em posição diferente. Não adianta tentar forçar.

### Como instalar a RAM

1. Abra as travas dos dois lados do slot
2. Verifique o **divisor** (entalhe) do slot e da memória — devem estar alinhados no mesmo lado
3. Encaixe uma extremidade, depois pressione a outra até ouvir o **clique**
4. As travas se fecham automaticamente quando a memória está bem instalada

---

## 7. Slots PCIe — Placa de Vídeo e Expansões

**PCIe** (Peripheral Component Interconnect Express) é a interface de alta velocidade para placa de vídeo, SSDs e outras placas de expansão.

### Tipos de slots por tamanho

| Tamanho | Velocidade | Uso principal |
|---|---|---|
| **PCIe x16** | Máxima | Placa de vídeo (GPU) |
| **PCIe x4** | Intermediária | SSD PCIe, placa de captura |
| **PCIe x1** | Menor | Placas de rede, som, captura simples |

> [!note] x16 elétrico vs físico
> Um slot pode ter tamanho físico x16, mas funcionar eletricamente como x4. Verifique as especificações — o primeiro slot PCIe x16 geralmente é o mais rápido (e costuma ter reforço metálico para suportar o peso da GPU).

### Gerações PCIe

As gerações (1.0 → 2.0 → 3.0 → 4.0 → 5.0) **duplicam a largura de banda** a cada geração e são todas **retrocompatíveis entre si** — uma GPU PCIe 4.0 funciona em um slot PCIe 3.0 (com menos largura de banda), mas funciona.

> ⚠️ PCIe NÃO é compatível com o antigo **PCI** (sem "Express"). São conectores diferentes.

### Instalação da GPU

1. Localizar o primeiro slot PCIe x16 (geralmente o mais próximo do processador)
2. Abrir a **trava** no final do slot (puxar para baixo ou para o lado)
3. Encaixar a GPU — verificar o **divisor** de pinos para orientação correta
4. Pressionar até ouvir o **clique** da trava subindo
5. Conectar o cabo de alimentação PCIe da fonte (6, 8 ou 16 pinos dependendo da GPU)

---

## 8. Armazenamento — SATA e M.2

### Porta SATA

- Formato de conector em **"L"**
- **Três gerações:**

| Geração | Velocidade máxima | Cor típica |
|---|---|---|
| SATA 1 | 1,5 Gbps (150 MB/s) | Padrão |
| SATA 2 | 3 Gbps (300 MB/s) | Padrão |
| **SATA 3** | **6 Gbps (600 MB/s)** | Costuma ser marcada em destaque |

- São compatíveis entre si — SATA 3 aceita HDs mais antigos
- Para máxima performance de um SSD SATA: usar porta **SATA 3**

> [!warning] M.2 pode desabilitar portas SATA
> Ao instalar um segundo SSD M.2, algumas placas **desabilitam automaticamente 1–2 portas SATA**. Consultar o manual antes para saber quais portas serão desativadas.

### Slot M.2

O M.2 é uma interface para SSDs modernos e muito mais rápida que SATA:

| Interface M.2 | Protocolo | Velocidade típica |
|---|---|---|
| M.2 SATA | AHCI | até 600 MB/s (igual ao SATA 3) |
| **M.2 NVMe (PCIe)** | NVMe | **2.000–7.000+ MB/s** |

**Como instalar um SSD M.2:**
1. Inserir em ângulo leve no slot (não muito inclinado para não dobrar o conector)
2. Deitar o SSD — um **parafuso único** o fixa na extremidade oposta
3. Instalar no **slot M.2 mais rápido** da placa (geralmente indicado no manual)
4. Se a placa tem dissipador de calor M.2, instalar o SSD primeiro e colocar o dissipador por cima

---

## 9. Painel Traseiro (I/O Panel) — Conectores Externos

O painel traseiro é onde ficam todas as saídas e entradas de comunicação com o mundo externo.

### Cores padrão das portas de áudio analógico

| Cor | Função |
|---|---|
| **Verde** | Saída de linha (fones de ouvido, caixas de som) |
| **Rosa / Vermelho** | Entrada de microfone |
| **Azul** | Entrada de linha (Line-In — outros equipamentos de áudio) |

### USB — cores indicam a velocidade

| Cor | Padrão | Velocidade |
|---|---|---|
| **Preto** | USB 2.0 | até 480 Mbps |
| **Azul escuro** | USB 3.0 (Gen 1) | até 5 Gbps |
| **Vermelho / Azul claro** | USB 3.1 / 3.2 (Gen 2) | até 10 Gbps |
| **Type-C** | USB 3.1/3.2 ou Thunderbolt | 10–40 Gbps |

> [!tip] Dica prática
> Use as portas pretas (USB 2.0) para mouse e teclado — eles não precisam de velocidade alta. Reserve as portas azuis e vermelhas para HDs externos, pendrives e dispositivos que se beneficiam da velocidade.

### Saídas de vídeo no painel traseiro

Presentes apenas quando o **processador tem GPU integrada** (Intel Core com sufixo sem "F"; AMD Ryzen sem "X" no final em alguns modelos):

| Conector | Padrão | Uso |
|---|---|---|
| **HDMI** | Digital | Monitores e TVs modernos |
| **DisplayPort** | Digital | Monitores de alta performance |
| **DVI** | Digital | Monitores mais antigos |
| **VGA** | Analógico | Monitores muito antigos — legado |

> ⚠️ Se o processador **não tem GPU integrada** e você conectar o monitor no painel traseiro da placa-mãe, a tela ficará preta. Sempre conecte no monitor na **placa de vídeo dedicada**.

### RJ-45 (rede)

- LEDs indicam status: **verde + laranja = funcionando normalmente**
- Somente laranja = problema de conexão

### PS/2 (teclado/mouse antigos)

- Conector redondo violeta = teclado, verde = mouse (em placas mais antigas, uma única porta divide as funções)
- Presente em algumas placas por compatibilidade com hardware antigo

---

## 10. BIOS / UEFI

A **BIOS** (Basic Input Output System) — modernamente chamada de **UEFI** (Unified Extensible Firmware Interface) — é o **firmware** da placa-mãe: um programa básico gravado em um chip que:

1. Liga o hardware ao iniciar o computador
2. Verifica se todos os componentes estão funcionando (POST)
3. Carrega o sistema operacional
4. Permite configurações de hardware (overclock, boot order, XMP, etc.)

**Como acessar a BIOS:**
- Pressionar a tecla correta durante o boot: geralmente **Delete**, **F2**, **F10** ou **ESC**
- A tecla aparece na tela preta durante a inicialização

**Bateria CR2032:**
- A placa-mãe tem uma pequena bateria redonda (CR2032) que mantém a BIOS funcionando mesmo com o PC desligado
- Ela preserva data/hora e as configurações salvas
- Se morrer: data/hora reseta para padrão e o sistema pode não iniciar corretamente

### Configurações importantes na BIOS

| Configuração | O que faz |
|---|---|
| **XMP / EXPO** | Ativa o perfil de overclock da memória RAM (ex: 3000MHz em vez de 2400MHz) |
| **Boot Order** | Define a ordem em que o PC tenta iniciar (HD, pendrive, DVD) |
| **Overclock CPU** | Aumenta a frequência do processador além do padrão |
| **Fan Curves** | Controla a velocidade das ventoinhas por temperatura |
| **Secure Boot** | Impede que sistemas não assinados carreguem |
| **Virtualization** | Habilita suporte a VMs (VMware, VirtualBox) |

---

## 11. Atualização de BIOS — Riscos e Benefícios

### Quando atualizar

✅ Atualizar quando:
- Novo processador **não é reconhecido** pela placa (versão de BIOS muito antiga)
- Correção de **bugs ou falhas de segurança** críticas
- **Instabilidade** no sistema resolvida pela atualização
- Melhora de performance real (ex: RAM não atingia a velocidade XMP)

❌ NÃO atualizar quando:
- O sistema está **funcionando bem** e a atualização não traz nada relevante
- Mudança apenas estética (tradução, interface)
- Versão **beta** — pode causar instabilidade

### Riscos

> [!danger] Perigo real
> Se a BIOS corrompida durante a atualização → a placa-mãe pode ficar **inutilizável**. Algumas placas têm BIOS dual (backup) ou sistema de recuperação, mas nem todas.

### Métodos de atualização

**Via utilitário da própria BIOS (mais seguro):**
1. Acessar a BIOS (Delete na inicialização)
2. Localizar o utilitário de flash: ASUS EZ Flash, Gigabyte Q-Flash, BIOSTAR BIO Flasher
3. Opção 1 — Via internet: a placa baixa automaticamente a versão correta
4. Opção 2 — Via pendrive: baixar o arquivo `.rom`/`.cap` do **site oficial do fabricante**, copiar para pendrive **formatado em FAT32**, inserir e selecionar

### Passo a passo via pendrive (exemplo BIOSTAR)

1. Acessar site do fabricante → Suporte → Procurar o modelo exato da placa
2. Baixar o arquivo da BIOS mais recente (não beta)
3. Formatar pendrive em FAT32 e copiar **apenas** o arquivo de BIOS
4. Reiniciar → entrar na BIOS → utilitário de flash → selecionar o arquivo no pendrive
5. Confirmar atualização e aguardar (não desligar o PC!)
6. Após reiniciar: verificar a nova versão na BIOS

> [!tip] Nobreak recomendado
> Conectar o PC a um nobreak antes de atualizar a BIOS. Uma queda de energia durante o processo pode corromper o firmware de forma irreversível.

---

## 12. Fabricação e Cuidados Antiestáticos

### Como as placas-mãe são fabricadas

As placas são fabricadas em linhas automatizadas (Manaus tem fábricas da ASUS/Foxconn e Gigabyte). O processo envolve:

1. **Preparação:** PCB vem sem componentes, embalado a vácuo
2. **Aplicação de solda (pasta):** máquina aplica pasta de solda via molde específico da placa
3. **SMT (Surface Mount Technology):** braços robóticos colocam ~1200 componentes em 36 segundos
4. **Forno reflow:** placa aquece até ~250°C para fundir a solda
5. **Inspeção:** visual + ótica automatizada + raio-X (conexões BGA)
6. **Montagem manual:** componentes maiores/delicados (85 peças) e conectores through-hole
7. **Wave soldering:** banho de solda para componentes through-hole
8. **Testes:** processador, memória, áudio, vídeo, rede — taxa de falha ~0,5%
9. **Embalagem:** espelho, manual, cabos SATA, parafusos

### Por que os trabalhadores usam roupa antiestática?

A **eletricidade estática** (ESD — Electrostatic Discharge) pode destruir componentes eletrônicos sem deixar marca visível. Uma descarga estática do corpo humano que você nem sente pode queimar um capacitor ou transístor da placa.

**Na fábrica:**
- Jaleco antiestático
- Calçado antiestático (aterrado)
- Piso aterrado
- Pulseira aterrada para operadores

**Em casa, ao manipular placas:**
- Tocar o chassi metálico aterrado antes de pegar a placa
- Usar pulseira antiestática
- Nunca trabalhar sobre carpete
- Manter a placa na embalagem antiestática enquanto não está instalada

---

## 13. Evolução Histórica — O Que Mudou em 7 Anos

Comparativo entre uma placa de 2008 (Intel P45, DDR2) e 2015 (Intel Z170, DDR4):

| Componente | 2008 | 2015 | Observação |
|---|---|---|---|
| Socket | LGA775 (775 pinos) | LGA1151 (1151 pinos) | Mais pinos = mais vias de comunicação |
| RAM | DDR2 | DDR4 | Velocidade muito maior |
| Armazenamento | IDE + SATA 2 | SATA 3 + M.2 NVMe | IDE: 133 MB/s → M.2: 4000 MB/s |
| USB | 1.1 + 2.0 | 3.0 + 3.1 + Type-C | USB 3.0 = 10× mais rápido que 2.0 |
| Vídeo | Sem saída (sem iGPU) | HDMI (iGPU no processador) | Processadores ganharam GPU integrada |
| Wireless | Nenhum | Wi-Fi + Bluetooth | Conectividade sem fio integrada |
| Alimentação CPU | 8 pinos | 8 pinos | **Não mudou** — mesma eficiência energética |
| Alimentação placa | 24 pinos | 24 pinos | **Não mudou** — padrão durável |

---

## 14. Mapa de Conceitos

```
PLACA-MÃE
│
├── FORM FACTORS
│   ├── ATX (padrão, 7 slots PCIe)
│   ├── Micro-ATX (compacto, 4 slots PCIe)
│   └── Mini-ITX (menor, 1 slot PCIe, quadrado)
│
├── SOCKET / CPU
│   ├── Intel: LGA (pinos na placa) — nunca force
│   ├── AMD: PGA (pinos no processador) — nunca torça
│   └── Seta guia: processador + socket devem alinhar
│
├── CHIPSET
│   ├── Z-series (Intel) / X-series (AMD) = overclock
│   ├── B-series = intermediário
│   └── H-series (Intel) / A-series (AMD) = básico
│
├── MEMÓRIA RAM
│   ├── DDR4 vs DDR5 — incompatíveis fisicamente
│   ├── Dual Channel: preencher slots do mesmo canal
│   └── XMP/EXPO na BIOS para ativar perfil de overclock
│
├── SLOTS PCIe
│   ├── x16 = GPU (slot mais rápido, com reforço)
│   ├── x4 e x1 = expansões
│   └── Retrocompatível entre gerações 1.0–5.0
│
├── ARMAZENAMENTO
│   ├── SATA 3 (6 Gbps / 600 MB/s) — conector "L"
│   ├── M.2 SATA (600 MB/s)
│   └── M.2 NVMe PCIe (2.000–7.000+ MB/s)
│
├── PAINEL TRASEIRO
│   ├── Audio: verde=saída, rosa=mic, azul=line-in
│   ├── USB: preto=2.0, azul=3.0, vermelho=3.1, Type-C
│   ├── Vídeo (HDMI/DP): só funciona com iGPU no processador
│   └── RJ45: verde+laranja = conexão ok
│
└── BIOS / UEFI
    ├── Firmware no chip da placa (bateria CR2032)
    ├── Acesso: Delete / F2 / F10 na inicialização
    ├── XMP, overclock, boot order, fan curves
    └── Atualização via pendrive (FAT32) ou internet
        → Risco: corrupção = placa inutilizável
        → Fazer só quando necessário
```

---

## 15. Perguntas de Fixação

**1.** Qual é a diferença entre os padrões LGA (Intel) e PGA (AMD) quanto à localização dos pinos? Qual o cuidado específico de cada um?

**2.** Um aluno comprou um processador Intel Core i7 e uma placa-mãe com chipset B760. Ele queria fazer overclock. Por que isso não vai funcionar, e como ele deveria ter escolhido?

**3.** Explique por que DDR4 e DDR5 são incompatíveis, e como identificar visualmente qual é qual?

**4.** Um SSD M.2 NVMe PCIe 4.0 instalado em um slot M.2 PCIe 3.0 vai funcionar? A que velocidade?

**5.** Qual é a velocidade máxima teórica de um SATA 3 e de um M.2 NVMe moderno? Quando vale a diferença de preço?

**6.** Um aluno ligou o monitor no conector HDMI do painel traseiro da placa-mãe, mas a tela ficou preta. Quais são as duas causas possíveis?

**7.** Quais são as condições em que vale a pena atualizar a BIOS? Quais os riscos?

**8.** Explique o papel da bateria CR2032 na placa-mãe. O que acontece quando ela morre?

---

*Resumo elaborado a partir de 10 transcrições de vídeo | 16-06-2026*
*Fontes: Escola de Hardware Ep.1 (Adrenaline), KaBum TV, Tecmundo (Foxconn/Gigabyte Manaus), BIOSTAR Tutorial*
