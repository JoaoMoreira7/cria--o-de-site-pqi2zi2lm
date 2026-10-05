export interface ArticleSection {
  heading: string
  content: string[]
  quote?: string
  highlights?: string[]
}

export interface Article {
  slug: string
  title: string
  subtitle: string
  summary: string
  category: string
  publishedAt: string // ISO date
  publishedDisplay: string
  readTimeMinutes: number
  coverTag: string
  sections: ArticleSection[]
  conclusion: string[]
  keyTakeaways: string[]
  metaDescription: string
  metaKeywords: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'o-que-e-pericia-judicial',
    title: 'O que é perícia judicial e quando ela pode decidir um processo?',
    subtitle:
      'Entenda o papel do perito nomeado pelo juiz, a diferença prática para o assistente técnico e como a prova técnica define o resultado de causas financeiras, cíveis e trabalhistas.',
    summary:
      'Quando o debate em uma ação judicial envolve números complexos, cálculos de liquidação, contratos bancários ou apuração de haveres, o juiz precisa de apoio especializado. Descubra como funciona a perícia, quem faz o quê e como advogados e empresas devem se preparar.',
    category: 'Perícia & Processo',
    publishedAt: '2026-04-03',
    publishedDisplay: '03 de abril de 2026',
    readTimeMinutes: 7,
    coverTag: 'Guia Prático',
    metaDescription:
      'Entenda o que é perícia judicial, quando o juiz determina a prova pericial, a diferença entre perito e assistente técnico e como cálculos sólidos decidem causas na Justiça.',
    metaKeywords:
      'O que é perícia judicial, perito judicial, assistente técnico, laudo pericial, quesitos periciais, liquidação de sentença, TJMG, cálculos judiciais',
    keyTakeaways: [
      'A perícia judicial é determinada pelo juiz quando a matéria exige conhecimento técnico que foge ao campo estritamente jurídico.',
      'O perito judicial é auxiliar da Justiça e atua com estrita imparcialidade; o assistente técnico assessora uma das partes com rigor técnico e independência.',
      'A formulação precisa de quesitos e a indicação tempestiva de assistente técnico evitam preclusões e laudos equivocados.',
      'Cálculos mal fundamentados ou aceitos sem conferência são a principal fonte de prejuízos evitáveis em fases de execução e liquidação.',
    ],
    sections: [
      {
        heading: '1. O que é perícia judicial e por que ela existe?',
        content: [
          'No processo judicial, juízes e magistrados dominam com excelência as leis, a doutrina e a jurisprudência. Contudo, controvérsias do mundo real frequentemente exigem outros saberes: matemática financeira, apuração contábil, engenharia de sistemas, análise de contratos complexos ou tecnologia da informação.',
          'É exatamente aí que nasce a perícia judicial. Regulamentada pelo Código de Processo Civil (artigos 464 a 480 do CPC), a prova pericial é o meio pelo qual um especialista de confiança do tribunal traduz fatos complexos em elementos compreensíveis e juridicamente úteis.',
          'O laudo pericial não é uma simples opinião informal: trata-se de documento oficial, instruído com memória de cálculo, fundamentação metodológica e respostas pontuais aos questionamentos formulados pelo magistrado e pelos litigantes.',
        ],
        quote:
          'O perito é os olhos e a régua técnica do juiz onde o Direito sozinho não consegue mensurar.',
        highlights: [
          'Previsão legal expressa nos artigos 464 a 480 do Código de Processo Civil (CPC).',
          'Objetivo central: conferir segurança, precisão e imparcialidade ao julgamento.',
          'Natureza instrutória: o laudo subsidia a decisão do magistrado com fatos e métricas auditáveis.',
        ],
      },
      {
        heading: '2. Perito do Juízo vs. Assistente Técnico vs. Consultor: quem é quem?',
        content: [
          'Uma das confusões mais frequentes entre partes e até jovens operadores do Direito é misturar as atribuições do perito nomeado, do assistente técnico e do consultor extrajudicial. Embora todos atuem com conhecimento técnico, as funções processuais e os deveres são distintos:',
          '• Perito Judicial (do Juízo): nomeado diretamente pelo magistrado através de cadastro oficial de peritos (como o banco de peritos do TJMG). Tem o dever legal de imparcialidade e responde civil e penalmente por suas afirmações. Não defende nenhuma das partes.',
          '• Assistente Técnico: indicado por uma das partes (autor ou réu) para acompanhar os trabalhos periciais, formular quesitos prévios e suplementares e emitir parecer técnico crítico sobre o laudo do perito judicial. Não está sujeito a impedimento ou suspeição, mas deve manter absoluto rigor metodológico.',
          '• Consultor Técnico / Pré-Processual: atua antes mesmo da distribuição da ação ou fora dos autos, realizando auditorias preventivas, simulações de risco financeiro e confecção de memórias de cálculo para instruir a petição inicial ou a contestação.',
        ],
        quote:
          'Entrar em uma perícia sem assistente técnico é delegar 100% da narrativa técnica da sua causa a um terceiro, sem contraprova qualificada.',
        highlights: [
          'Perito do Juízo: imparcial, compromissado e auxiliar da Justiça.',
          'Assistente Técnico: confiança da parte, fiscaliza o método e contrapõe premissas frágeis.',
          'Consultor: planeja a estratégia antes do litígio nascer ou auxilia em acordos estratégicos.',
        ],
      },
      {
        heading: '3. Exemplos práticos: situações em que a perícia decide o rumo da causa',
        content: [
          'A perícia não é um mero detalhe burocrático: em centenas de processos, ela define integralmente se uma empresa terá de pagar R$ 50 mil ou R$ 2 milhões, ou se um credor conseguirá receber o valor real ao qual faz jus. Alguns cenários cotidianos:',
          '1. Liquidação e Cumprimento de Sentença: após a vitória no mérito, é preciso calcular diferenças salariais, reflexos, expurgos inflacionários, juros compostos ou simples, e correções conforme os temas repetitivos do STF e STJ. Um índice aplicado errado distorce montantes substanciais ao longo de anos.',
          '2. Revisões Contratuais e Operações Financeiras: análise de contratos bancários, apuração de taxa de juros praticada versus média de mercado do BACEN, cobrança de encargos indevidos e capitalização diária.',
          '3. Dissolução de Sociedade e Apuração de Haveres: determinação do real valor patrimonial de quotas societárias, fluxo de caixa descontado e avaliação de passivos ocultos.',
          '4. Incidentes Tecnológicos e Sistemas: validação de integridade de logs, consistência de bases de dados relacionais e auditoria de sistemas transacionais.',
        ],
      },
      {
        heading: '4. Como se preparar quando o juiz determina a realização da perícia?',
        content: [
          'Uma vez deferida a prova pericial, o relógio processual passa a correr contra quem não tem estratégia definida. O CPC concede prazo de 15 dias para as partes indicarem assistente técnico e apresentarem quesitos.',
          'Os passos indispensáveis para proteger o direito do cliente nesta fase são:',
          'Primeiro, nunca formule quesitos genéricos ("diga o perito se o autor tem razão"). Quesitos eficazes são pontuais, dirigidos a premissas matemáticas claras, apontando documentos específicos das folhas dos autos e conduzindo o perito a expor a metodologia utilizada.',
          'Segundo, organize os documentos de suporte antes da vistoria ou início dos cálculos. Extratos incompletos, contratos ilegíveis ou ausência de demonstrativos geram presunções desfavoráveis ou intimações sucessivas que atrasam o processo em anos.',
          'Terceiro, mantenha diálogo técnico entre o advogado e o assistente pericial. A sinergia entre a fundamentação de direito do advogado e a fundamentação matemática/tecnológica do assistente é o que torna uma impugnação verdadeiramente acolhida pelos tribunais.',
        ],
        highlights: [
          'Prazo do art. 465, § 1º, do CPC: 15 dias para indicar assistente e apresentar quesitos.',
          'Quesitos suplementares: ferramenta legítima durante a diligência para esclarecer dubiedades.',
          'Impugnação técnica: apontar erro aritmético, critério incorreto ou desrespeito ao título executivo.',
        ],
      },
      {
        heading: '5. O papel da tecnologia e inteligência artificial na perícia moderna',
        content: [
          'A atuação pericial tradicional consumia semanas folheando arquivos em papel e alimentando planilhas manuais sujeitas a falhas de digitação. Hoje, a tecnologia e ferramentas avançadas transformaram o setor.',
          'Com rotinas automatizadas de validação de dados, conferência de índices monetários oficiais em tempo real e apoio de agentes de IA para triagem de centenas de páginas de extratos, o perito contemporâneo entrega um laudo com precisão cirúrgica e em prazo muito menor.',
          'A inteligência artificial não substitui a responsabilidade do perito, mas eleva o padrão de exigência: decisões técnicas passam a ser sustentadas por auditorias completas, e não mais por amostragens superficiais.',
        ],
      },
    ],
    conclusion: [
      'A perícia judicial não deve ser encarada com apreensão, mas sim como a oportunidade decisiva de colocar a verdade dos fatos na mesa do magistrado com clareza matemática e respaldo técnico inquestionável.',
      'Seja na atuação direta como perito nomeado, seja como assistente técnico ao lado de escritórios de advocacia, o compromisso de João Moreira é fornecer respostas sólidas, transparentes e imunes a contestações vazias.',
      'Precisa de suporte técnico em um processo em andamento ou quer calcular a viabilidade de uma demanda antes de distribuir a ação? Entre em contato diretamente pelo WhatsApp ou solicite um orçamento detalhado.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return ARTICLES
}
