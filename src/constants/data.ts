import { BrandConfigType, PisoData, Article } from '../types';

export const BrandConfig: BrandConfigType = {
  colors: {
    primary: '#008446',
    secondary: '#1C9C69',
    product: '#788785',
    dark: '#000000',
    darkGray: '#4E524F',
    lightGray: '#F3F4F6'
  },
  whatsapp: {
    number: '552299990000',
    message: 'Olá, represento uma empresa/prefeitura e gostaria de cotar pré-moldados.',
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    }
  }
};

export const PISOS_DATA: Record<string, PisoData> = {
  'retangular': {
    nome: 'Retangular (Tijolinho)',
    dimensoes: '10 x 20 cm',
    pecasPorM2: 50,
    aplicacao: 'O formato mais versátil. Ideal para calçadas, praças e vias comerciais.',
    imagem: 'https://images.unsplash.com/photo-1603522967167-2d12e8c2810f?auto=format&fit=crop&q=80&w=400'
  },
  'onda': {
    nome: 'Onda (16 Faces)',
    dimensoes: '11 x 22 cm',
    pecasPorM2: 45, 
    aplicacao: 'Excelente intertravamento. Para locais com frenagem e aceleração (rampas, terminais).',
    imagem: 'https://images.unsplash.com/photo-1542456485-bd35dcc70624?auto=format&fit=crop&q=80&w=400'
  },
  'sextavado': {
    nome: 'Sextavado (Hexagonal)',
    dimensoes: '25 x 25 cm',
    pecasPorM2: 16,
    aplicacao: 'Distribui cargas uniformemente. Muito utilizado em pátios e postos de combustível.',
    imagem: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&q=80&w=400'
  },
  'pisograma': {
    nome: 'Pisograma (Ecológico)',
    dimensoes: '40 x 60 cm',
    pecasPorM2: 4.1,
    aplicacao: 'Permeável e sustentável. Perfeito para estacionamentos verdes e jardins.',
    imagem: 'https://images.unsplash.com/photo-1596404764440-272cb250dbdf?auto=format&fit=crop&q=80&w=400'
  },
  'raquete': {
    nome: 'Raquete (Tipo "I")',
    dimensoes: '11 x 22 cm',
    pecasPorM2: 42,
    aplicacao: 'Ótimo travamento. Comum em áreas de calçamento urbano e parques.',
    imagem: 'https://images.unsplash.com/photo-1587135948950-c8f35dd9a2a7?auto=format&fit=crop&q=80&w=400'
  },
  'tatil': {
    nome: 'Piso Tátil (Alerta/Direcional)',
    dimensoes: '20 x 20 cm',
    pecasPorM2: 25,
    aplicacao: 'Piso de acessibilidade (NBR 9050). Para orientação de pessoas com deficiência visual.',
    imagem: 'https://images.unsplash.com/photo-1616422285623-14df63738096?auto=format&fit=crop&q=80&w=400'
  }
};

export const ARTICLES: Article[] = [
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
    category: "Técnica",
    categoryBg: "bg-[#008446]",
    title: "Colchão de Areia para Piso Intertravado: Guia e Espessura Ideal",
    description: "Descubra por que a preparação da base e o nivelamento correto com areia são fatores críticos para evitar afundamentos em pavimentos intertravados.",
    content: [
      "A camada de assentamento, comumente chamada de **colchão de areia**, desempenha um papel fundamental no desempenho a longo prazo dos pavimentos intertravados de concreto (pavers). Sua principal função é criar uma superfície de apoio uniforme, permitindo o intertravamento perfeito e a distribuição de cargas.",
      "Muitas patologias de pavimentação, como **afundamentos localizados** e deformações nas trilhas de roda de caminhões, originam-se de erros na execução desta etapa. Segundo as diretrizes técnicas, a espessura ideal do colchão de areia após a compactação deve variar estritamente **entre 3 cm e 5 cm**. Espessuras maiores não garantem resistência; pelo contrário, geram acomodações desiguais sob tráfego.",
      "Além da espessura, a granulometria do material é vital. **O uso de pó de pedra não é recomendado** em substituição à areia em projetos de alta exigência, pois retém umidade. Recomenda-se o uso de **areia média ou grossa**, lavada, isenta de materiais finos (silte e argila). É crucial lembrar que a areia de assentamento não deve ser usada para corrigir depressões da base de bica corrida ou macadame.",
      "Investir controle tecnológico na regularização da sub-base e na execução correta do colchão de areia garante que os **pré-moldados de alta resistência (35 a 50 MPa)** cumpram sua vida útil de projeto, reduzindo a necessidade de manutenções corretivas em loteamentos e vias urbanas."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
    category: "Planejamento",
    categoryBg: "bg-[#788785]",
    title: "Contenção Lateral e Meio-Fio de Concreto no Travamento de Pisos",
    description: "Mais do que delimitar calçadas, entenda como as guias pré-moldadas de concreto travam o sistema de pavimentação e previnem o deslocamento de blocos.",
    content: [
      "A **contenção lateral** é, do ponto de vista da engenharia civil, um dos elementos mais críticos para a integridade de um pavimento de blocos de concreto. O intertravamento — princípio estrutural que permite que os blocos distribuam o peso dos veículos — só funciona se as peças não puderem se afastar umas das outras horizontalmente.",
      "Quando veículos pesados freiam, aceleram ou fazem curvas, transferem intensas forças de cisalhamento para o calçamento. Sem uma contenção lateral rígida, essas forças causam a abertura das juntas, destruindo o pavimento intertravado e exigindo manutenções caras.",
      "As **guias de concreto pré-moldado (meio-fio)** são a solução técnica mais segura. Para máxima eficiência, elas devem ser assentadas sobre um berço de concreto e travadas no tardoz (parte de trás) com concreto magro. Este método evita que a guia tombe sob a pressão do tráfego urbano ou industrial.",
      "Em projetos de infraestrutura de alto padrão, é imperativo prever contenções não apenas nas bordas das vias, mas em arremates, caixas de passagem e grelhas de drenagem. Especificar **meio-fios de alta durabilidade** garante o confinamento total do sistema viário."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
    category: "Especificações",
    categoryBg: "bg-black",
    title: "Espessura de Piso Intertravado (Paver): 6cm, 8cm ou 10cm?",
    description: "Aprenda a dimensionar a espessura correta dos blocos de concreto de acordo com a carga por eixo, tráfego pesado e normas técnicas (ABNT).",
    content: [
      "A especificação técnica da espessura do **piso intertravado de concreto (paver)** é uma decisão estrutural direta, ditada pelo tipo e volume de tráfego. Utilizar peças subdimensionadas fatalmente causará a quebra dos blocos sob carga pontual, comprometendo todo o investimento da obra.",
      "**Blocos de 6 cm de espessura (Resistência de 35 MPa):** São normatizados para solicitações leves. O uso ideal abrange calçadas, praças, ciclovias, áreas exclusivas para pedestres e pátios de condomínios residenciais onde circulam apenas veículos de passeio.",
      "**Blocos de 8 cm de espessura (Resistência de 35 a 50 MPa):** Representam o padrão para tráfego urbano e comercial pesado. Devem ser obrigatoriamente exigidos para vias públicas municipais, corredores de ônibus urbanos, acessos a galpões logísticos e postos de combustível com tráfego de caminhões e carretas.",
      "**Blocos de 10 cm a 12 cm de espessura (Resistência > 50 MPa):** Projetados para aplicações industriais e portuárias extremas. Suportam empilhadeiras de grande porte, reach stackers e contêineres, absorvendo altíssimas cargas dinâmicas e esforços de torção.",
      "O sucesso da pavimentação exige alinhar a espessura do bloco ao dimensionamento das camadas de base (brita graduada simples - BGS) e sub-base, conforme os cálculos de CBR do subleito natural da via."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&q=80&w=600",
    category: "Drenagem Urbana",
    categoryBg: "bg-[#008446]",
    title: "Piso Intertravado Permeável: Drenagem Urbana e Sustentabilidade",
    description: "Entenda como a taxa de permeabilidade do pavimento de concreto alivia as redes de macrodrenagem, atende a leis ambientais e previne enchentes.",
    content: [
      "A impermeabilização do solo pelo asfalto e concreto convencional aumentou drasticamente o escoamento superficial (*runoff*), sendo a principal causa de alagamentos urbanos. O **pavimento intertravado permeável** (ou piso drenante) é a solução de engenharia verde (SUDS) mais adotada hoje para mitigação.",
      "Diferente dos pisos estanques, o sistema intertravado permeável utiliza blocos com juntas alargadas preenchidas com pedrisco ou blocos de concreto poroso. Essa tecnologia permite que até 100% da água da chuva atravesse a superfície, atingindo as camadas inferiores da estrutura viária.",
      "A base deste sistema funciona como uma bacia de retenção subterrânea. Utiliza-se britas de diferentes granulometrias (sem finos) para armazenar temporariamente a água. Essa água infiltra no lençol freático natural ou é direcionada lentamente para a rede pluvial municipal, absorvendo os picos de vazão das tempestades.",
      "Adotar o **piso permeável em loteamentos e condomínios** facilita a aprovação de projetos nos órgãos ambientais ao atingir a Taxa de Permeabilidade mínima exigida, além de atuar como filtro mecânico para poluentes carreados pela chuva, protegendo os corpos hídricos."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    category: "Viabilidade Econômica",
    categoryBg: "bg-[#788785]",
    title: "Piso Intertravado ou Asfalto? Comparativo de Custo e Durabilidade",
    description: "Uma análise financeira para prefeituras e construtoras focada no Custo do Ciclo de Vida (CCV), manutenção viária e Retorno sobre Investimento (ROI).",
    content: [
      "Na tomada de decisão técnica para pavimentação de loteamentos e rodovias, analisar apenas o custo de implantação por metro quadrado é um erro de gestão. A viabilidade real deve ser calculada através da **Análise de Custo do Ciclo de Vida (CCV)**, que projeta despesas operacionais para as próximas décadas.",
      "O pavimento asfáltico flexível (**CBUQ**) pode apresentar custos iniciais atraentes em certas praças, porém sofre rápida degradação por fadiga, raios UV e vazamento de derivados de petróleo. Isso gera altos custos recorrentes com operações tapa-buracos, fresagem e recapeamento.",
      "Em contraste, o **piso intertravado de concreto** supera 20 a 30 anos de vida útil de projeto. Seu maior trunfo financeiro é a ausência de passivos de manutenção: para consertos subterrâneos (redes de água ou fibra óptica), os blocos de concreto podem ser removidos manualmente e reaproveitados em até 95%, sem necessitar de quebra-quebra ou gerar entulho.",
      "Somando-se a resistência estrutural superior, a alta refletância luminosa (que reduz em até 30% a conta de iluminação pública) e a liberação imediata para o trânsito após o assentamento, o **piso intertravado entrega um ROI consideravelmente mais alto** e sustentável comparado ao asfalto comum."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1517646287270-a569ca4542bb?auto=format&fit=crop&q=80&w=600",
    category: "Produtos",
    categoryBg: "bg-black",
    title: "Tipos de Guias de Concreto (Meio-Fio) no Brasil",
    description: "Conheça os principais modelos de guias pré-moldadas, suas dimensões padrão e como escolher a contenção lateral ideal para sua obra.",
    content: [
      "As **guias de concreto pré-moldadas**, popularmente conhecidas como **meio-fio**, são elementos fundamentais na construção civil e pavimentação. Elas têm duas funções cruciais: conduzir o escoamento de água pluvial (drenagem) e garantir o **confinamento lateral dos pisos** (especialmente essencial para os pisos intertravados não abrirem).",
      "No mercado brasileiro, as indústrias de pré-moldados dividem suas linhas de produção basicamente nos seguintes modelos principais:",
      "**1. Guia Padrão PMSP (Reta):** Também chamada de 'Guia Tipo 100' ou 'Padrão Prefeitura', é o modelo mais clássico e robusto, amplamente utilizado em ruas, avenidas e estacionamentos. O termo 'PMSP' refere-se ao padrão da Prefeitura do Município de São Paulo, adotado como referência nacional. Possui 1,00 m de comprimento, 30 cm de altura e 15 cm de base, pesando cerca de 90 kg.",
      "**2. Guia Curva:** Possui exatamente o mesmo perfil geométrico da guia reta PMSP, porém é fabricada em formato de arco. É a solução ideal para execução de curvas em esquinas, retornos, rotatórias e contornos de canteiros, evitando que o construtor precise cortar guias retas em pedaços pequenos.",
      "**3. Guia Chapéu (Boca de Lobo):** Modelo especial voltado para a drenagem urbana. Possui um recorte ou recuo acoplado que permite a entrada livre das enxurradas da sarjeta diretamente para a galeria pluvial subterrânea (bueiros). Mantém o alinhamento perfeito com as guias retas.",
      "**4. Mini Guia (Jardim ou Bisotada):** Modelos menores, mais leves e estéticos. São especificados para áreas exclusivas de pedestres, canteiros ou paisagismo, onde não há impacto de veículos. Algumas possuem acabamento chanfrado ('bisotado') para um visual mais refinado.",
      "**5. Guia de Transição (Rebaixada):** Essenciais para a acessibilidade urbana. São fabricadas com um desnível (rampa), começando com a altura padrão de 30 cm e terminando mais baixas. Usadas para conectar o meio-fio às rampas de cadeirantes ou rebaixamentos de garagens.",
      "**💡 Dica de Instalação:** Se você está projetando uma calçada, lembre-se que as guias devem ser instaladas **ANTES do travamento** dos blocos intertravados. O pavimento só ganha resistência estrutural quando está 'espremido' entre as contenções. O rendimento prático é de 1 peça reta para cada 1 metro linear de borda."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600",
    category: "Especificações",
    categoryBg: "bg-[#788785]",
    title: "Modelos de Piso Intertravado (Paver): Formatos e Aplicações",
    description: "Conheça os principais formatos de bloquetes de concreto (Retangular, Sextavado, Onda), normatização (ABNT NBR 9781) e as vantagens da engenharia de pavimentos.",
    content: [
      "No mercado brasileiro, os **pisos intertravados (também conhecidos como pavers ou bloquetes de concreto)** são amplamente classificados pelos seus formatos geométricos e pela funcionalidade técnica de cada modelo na engenharia viária.",
      "Estes pré-moldados são rigorosamente regulamentados por normas como a **ABNT NBR 9781**, variando principalmente na espessura de acordo com o tráfego: 6 cm para tráfego leve/pedestres, 8 cm para tráfego comercial/veículos e 10 a 12 cm para solicitações de tráfego pesado e industrial.",
      "**1. Retangular (Tipo Holandês ou Tijolinho):** É o modelo mais popular e versátil. Com formato de paralelepípedo reto (geralmente 10x20 cm), permite diversas paginações em obra (como escama de peixe ou fileiras). É a escolha clássica para calçadas, praças, ciclovias e vias urbanas de tráfego moderado.",
      "**2. Sextavado (Hexagonal):** Devido à sua geometria de seis lados, este bloco distribui excepcionalmente bem as cargas horizontais e verticais. Garante estabilidade superior e é o padrão histórico em **pátios industriais, postos de combustível** e áreas de manobra de caminhões.",
      "**3. Onda (16 Faces ou Unistein):** Possui laterais onduladas que se encaixam como um quebra-cabeça. Esse intertravamento complexo aumenta drasticamente o atrito e impede o deslocamento dos blocos sob forças severas de aceleração e frenagem. A solução definitiva para **rampas, corredores de ônibus urbanos (BRT)** e pátios logísticos.",
      "**4. Raquete (Tipo 'I'):** Com extremidades mais largas que o meio (lembrando um osso), o encaixe trava o bloco e previne o afastamento das peças horizontais. Muito aplicado em calçadões de parques, shoppings e supermercados.",
      "**5. Pisograma (Concregrama):** Modelo vazado projetado para o plantio de grama nos espaços internos do bloco. Une a resistência estrutural do concreto armado com a permeabilidade natural do solo, ajudando a mitigar as **ilhas de calor urbanas** em loteamentos e estacionamentos ecológicos.",
      "**6. Piso Intertravado Drenante:** Fabricado com concreto poroso (livre de materiais finos), permite que a água da chuva atravesse seu próprio corpo e atinja a base da pavimentação. Essencial para contornar problemas de drenagem, prevenir enchentes e atingir a **taxa de permeabilidade** mínima exigida por órgãos ambientais.",
      "**7. Piso Tátil (Alerta e Direcional):** Indispensável para projetos de urbanismo contemporâneos, estas placas seguem estritamente a **norma de acessibilidade NBR 9050**. Seus relevos padronizados orientam pessoas com deficiência visual e baixa visão em calçadas públicas, rampas e acessos.",
      "**💡 Vantagens Construtivas Nacionais:** Independentemente da geometria, o sistema intertravado se consagra por dispensar o uso de argamassa de assentamento, permitir a **liberação imediata do tráfego** pós-obra e viabilizar manutenções subterrâneas (redes de água, esgoto, fibra óptica) reaproveitando as mesmas peças, acabando com os remendos crônicos do asfalto (CBUQ)."
    ]
  }
];
