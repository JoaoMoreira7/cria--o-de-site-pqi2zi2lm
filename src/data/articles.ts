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
    slug: 'quesitos-tecnicos-assistente-pericial',
    title: 'Boas práticas na formulação de quesitos técnicos para assistentes de acusação e defesa',
    subtitle:
      'Como formular perguntas precisas, evitar indeferimentos ou respostas lacônicas do perito judicial e blindar a estratégia probatória do cliente no processo.',
    summary:
      'A formulação de quesitos é o momento determinante em que advogados e assistentes técnicos direcionam o foco da perícia judicial. Quesitos genéricos recebem respostas evasivas, enquanto quesitos técnicos bem articulados constrangem o perito a examinar as premissas contábeis, matemáticas e fáticas indispensáveis ao julgamento da causa.',
    category: 'Perícia & Processo',
    publishedAt: '2026-04-06',
    publishedDisplay: '06 de abril de 2026',
    readTimeMinutes: 7,
    coverTag: 'Estratégia Processual',
    metaDescription:
      'Aprenda como formular quesitos técnicos periciais eficazes no CPC: técnicas para evitar perguntas genéricas, quesitos suplementares, de esclarecimento e atuação do assistente técnico.',
    metaKeywords:
      'formulação de quesitos, quesitos periciais, assistente técnico, perícia judicial, CPC artigo 465, quesitos suplementares, impugnação de laudo, quesitos impertinentes',
    keyTakeaways: [
      'Quesitos genéricos geram respostas vazias e enfraquecem a manifestação do assistente técnico.',
      'O art. 465, § 1º, do CPC fixa prazo preclusivo de 15 dias para apresentação de quesitos e indicação do assistente da parte.',
      'Perguntas devem conter referências exatas a folhas dos autos, premissas contratuais e metodologias objetivas.',
      'Quesitos suplementares e de esclarecimento são instrumentos decisivos para sanar omissões antes da sentença.',
    ],
    sections: [
      {
        heading: '1. O papel estratégico dos quesitos no Código de Processo Civil',
        content: [
          'No rito processual civil brasileiro, a determinação de prova pericial abre uma das fases mais sensíveis do litígio. Regulamentado pelo artigo 465, § 1º, do CPC, o prazo de 15 dias concedido às partes para arguir impedimento ou suspeição do perito, indicar assistente técnico e apresentar quesitos é frequentemente tratado com urgência burocrática por patronos sobrecarregados.',
          'Contudo, os quesitos não constituem mero formulário formal. Eles representam o roteiro oficial sobre o qual o perito do juízo será compelido a se manifestar. Sob o princípio do contraditório substancial, o perito judicial não pode simplesmente ignorar quesitos pertinentes tempestivamente formulados, devendo responder fundamentadamente a cada um deles no corpo de seu laudo.',
          'Quando bem formulados, os quesitos delimitam o escopo da investigação pericial, impedem extrapolações desnecessárias e preparam o terreno para uma eventual impugnação consistente caso o laudo pericial adote critérios arbitrários ou descolados do título judicial.',
        ],
        quote:
          'Um quesito mal elaborado não é neutro: ele fornece ao perito a oportunidade de consolidar uma premissa contrária ao seu cliente sem que você possa refutá-la facilmente.',
        highlights: [
          'Prazo de 15 dias (art. 465, § 1º, CPC): momento para indicar assistente e quesitos.',
          'Dever de fundamentação do perito (art. 473, § 1º, CPC): resposta obrigatória a cada quesito.',
          'Delimitação da controvérsia fática e técnica sem invasão da competência do juiz.',
        ],
      },
      {
        heading: '2. Os erros mais comuns que levam a respostas evasivas ou indeferimento',
        content: [
          'A experiência em centenas de nomeações periciais e assistências técnicas revela um padrão recorrente de falhas nas perguntas apresentadas pelas partes:',
          '• Quesitos de puro Direito: perguntar se "o contrato é abusivo" ou se "houve culpa da parte requerida". O perito técnico responde sobre fatos, métricas e metodologia; juízos de valor jurídico cabem exclusivamente ao magistrado. O juiz indeferirá esses quesitos por impertinência com base no art. 470, I, do CPC.',
          '• Perguntas abertas e genéricas: formular indagações do tipo "diga o ilustre perito tudo o que achar relevante sobre o caso". Isso transfere a narrativa probatória inteira para o perito, abrindo margem para conclusões desfavoráveis sem contraponto.',
          '• Ausência de indicação documental: questionar se determinado pagamento ocorreu sem apontar a numeração dos autos onde repousa o respectivo comprovante bancário ou nota fiscal.',
          '• Perguntas condutivas mal construídas: tentar forçar o perito a concordar com uma tese sem fornecer a base metodológica auditável que torne essa resposta matematicamente inquestionável.',
        ],
        quote:
          'Quesitos que perguntam sobre Direito sofrem indeferimento sumário; quesitos que perguntam sobre números sem demonstrar o método recebem respostas que nada acrescentam.',
        highlights: [
          'Evitar invasão de matéria de direito (art. 470, I, CPC).',
          'Vincular cada quesito a páginas/folhas específicas do processo eletrônico.',
          'Manter neutralidade no tom, mas precisão cirúrgica na hipótese examinada.',
        ],
      },
      {
        heading: '3. A anatomia do quesito perfeito: clareza, referência e metodologia',
        content: [
          'Um quesito eficaz deve obedecer a uma estrutura lógica tripartite: contexto documental, premissa metodológica e pergunta pontual.',
          'Em primeiro lugar, situa-se o perito no caderno processual: "Considerando os extratos de fls. 150 a 180 dos autos...".',
          'Em segundo lugar, estabelece-se o critério técnico objetivo que rege a matéria: "...e adotando a sistemática de juros simples conforme fixado expressamente na r. sentença transitada em julgado...".',
          'Em terceiro lugar, apresenta-se o questionamento concreto: "...queira o Sr. Perito demonstrar, mês a mês, a apuração do saldo devedor e apontar eventual divergência em relação à planilha de fls. 45/48".',
          'Ao estruturar os quesitos dessa maneira, o assistente técnico ou o advogado não deixa espaço para abstrações. O perito do juízo é compelido a realizar o cálculo exatamente nos termos em que a metodologia jurídica e técnica impõe.',
        ],
      },
      {
        heading: '4. Quesitos suplementares e de esclarecimento: quando e como utilizar',
        content: [
          'O processo não se esgota com os quesitos iniciais. O Código de Processo Civil prevê duas outras oportunidades indispensáveis de questionamento técnico:',
          '1. Quesitos Suplementares (art. 469 do CPC): podem ser formulados durante a realização da perícia e até a apresentação do laudo. São vitais quando, durante a vistoria, diligência ou exame de livros contábeis, surgem documentos novos ou variáveis não cogitadas na petição inicial.',
          '2. Quesitos de Esclarecimento (art. 477, § 3º, do CPC): apresentados após a entrega do laudo pericial, no prazo de 15 dias da intimação. Se o laudo foi omisso, contraditório ou adotou índices em desacordo com o título judicial, as partes formulam perguntas pontuais exigindo a retificação ou a fundamentação que faltou.',
          'A atuação integrada entre advogado e assistente técnico na elaboração desses esclarecimentos é o divisor de águas entre ter um laudo homologado contra os seus interesses ou conseguir a correção dos valores antes do julgamento final.',
        ],
        highlights: [
          'Quesitos suplementares: cabíveis durante a diligência pericial (art. 469, CPC).',
          'Quesitos de esclarecimento: formulados após a entrega do laudo no prazo de 15 dias (art. 477, § 3º, CPC).',
          'Intimação do perito para prestar esclarecimentos por escrito ou em audiência de instrução.',
        ],
      },
      {
        heading: '5. Sinergia prática: advogado peticiona o Direito, assistente blinda a técnica',
        content: [
          'A redação de quesitos não deve ser delegada exclusivamente ao advogado sem conhecimento das rotinas contábeis, tampouco deixada unicamente a cargo de peritos sem domínio dos termos jurídicos e da jurisprudência dominante.',
          'A excelência do resultado decorre da cooperação mútua. O advogado define a tese de direito e os limites da lide; o assistente técnico traduz essa pretensão em perguntas matemáticas, contábeis e tecnológicas que resistem ao escrutínio mais rigoroso.',
          'Com essa preparação preventiva, a parte entra na perícia segura de que seu direito patrimonial está resguardado por números auditáveis e métodos reconhecidos pelos tribunais superiores.',
        ],
      },
    ],
    conclusion: [
      'A formulação técnica de quesitos não é uma etapa protocolar, mas a principal linha de defesa probatória em qualquer demanda de alta complexidade quantitativa.',
      'Contar com pareceres prévios e quesitos formulados por quem vivencia a rotina pericial perante o Judiciário traz autoridade e segurança inabaláveis aos memoriais e petições do seu escritório.',
      'Quer revisar os quesitos de uma ação em andamento ou indicar assistente técnico de confiança? Converse diretamente com João Moreira por WhatsApp ou preencha o formulário para orçamento detalhado.',
    ],
  },
  {
    slug: 'uniformizacao-indices-correcao-monetaria-stf-stj',
    title:
      'Impactos práticos da uniformização dos índices de correção monetária pós-decisões do STF/STJ',
    subtitle:
      'Uma análise comparativa entre a Taxa Selic, o IPCA-E com juros moratórios e a nova sistemática da Emenda Constitucional 113 e Código Civil na liquidação de sentenças.',
    summary:
      'A liquidação de sentenças cíveis, fazendárias e trabalhistas passou por transformações profundas com os recentes julgados vinculantes do Supremo Tribunal Federal e do Superior Tribunal de Justiça. Descubra como a escolha entre índices tradicionais e a Taxa Selic altera drasticamente os valores a executar e aprenda a identificar erros de cálculo que distorcem o valor real da condenação.',
    category: 'Cálculos & Finanças',
    publishedAt: '2026-04-05',
    publishedDisplay: '05 de abril de 2026',
    readTimeMinutes: 8,
    coverTag: 'Liquidação de Sentença',
    metaDescription:
      'Entenda os impactos práticos da Taxa Selic e IPCA-E na liquidação de sentenças após decisões do STF (ADC 58, ADIs) e STJ (Tema 1.127, Corte Especial). Análise pericial de cálculos judiciais.',
    metaKeywords:
      'uniformização de índices de correção monetária, taxa Selic em liquidação de sentença, STF ADC 58, STJ Tema 1127, IPCA-E e juros de mora, cálculos judiciais, correção monetária e juros',
    keyTakeaways: [
      'A aplicação da Taxa Selic como taxa composta já embute correção monetária e juros de mora, sendo vedada a cumulação com qualquer outro índice.',
      'Na Justiça do Trabalho, a ADC 58 do STF consolidou IPCA-E na fase pré-judicial e Selic a partir do ajuizamento da reclamatória.',
      'Nas dívidas civis em geral, a recente reforma e precedentes da Corte Especial do STJ orientam a incidência da taxa Selic, com debates operacionais sobre capitalização.',
      'Erros no termo inicial de juros e cumulações indevidas geram distorções de centenas de milhares de reais em execuções de médio e grande porte.',
    ],
    sections: [
      {
        heading: '1. O labirinto jurisprudencial da atualização monetária no Brasil',
        content: [
          'Durante décadas, a sistemática de atualização de dívidas judiciais no Brasil operou sob uma fórmula aparentemente simples: aplicava-se um indexador de inflação oficial (como INPC, IGP-M ou tabela prática dos tribunais estaduais) somado a juros moratórios de 1% ao mês simples, nos termos do artigo 406 do Código Civil de 2002 c/c o artigo 161, § 1º, do Código Tributário Nacional.',
          'No entanto, a volatilidade inflacionária e a sucessão de leis setoriais provocaram uma explosão de divergências jurisprudenciais. Credores e devedores travaram batalhas homéricas em torno de indexadores como TR (Taxa Referencial), IPCA-E e Taxa Selic.',
          'Com os recentes julgamentos do Supremo Tribunal Federal — destacando-se as ADCs 58 e 59 para créditos trabalhistas e as ADIs sobre débitos da Fazenda Pública —, somados aos posicionamentos da Corte Especial do Superior Tribunal de Justiça, desenhou-se um novo e rigoroso mapa de liquidação que nenhum advogado ou contador perito pode desconhecer.',
        ],
        quote:
          'Na liquidação de sentença, a escolha do índice não é uma questão semântica: uma variação de indexador em um processo de dez anos altera o saldo final em mais de 50%.',
        highlights: [
          'Histórico: transição da TR para IPCA-E e posterior consagração da Selic em diversos ramos.',
          'Decisões vinculantes do STF: efeito erga omnes que atinge cumprimentos de sentença em curso.',
          'Papel do perito: aplicar estritamente o título ou as balizas jurisprudenciais vinculantes.',
        ],
      },
      {
        heading: '2. A natureza jurídica e contábil da Taxa Selic: o perigo do bis in idem',
        content: [
          'A Taxa Selic (Sistema Especial de Liquidação e de Custódia) possui uma característica híbrida: ela reflete o custo primário do dinheiro no mercado interbancário e, por definição, remunera tanto a perda do poder de compra da moeda (inflação) quanto o custo de oportunidade e os juros.',
          'Por essa razão expressa, o STF e o STJ reiteraram categoricamente: onde incidir a Taxa Selic, é terminantemente proibida a soma de qualquer outro índice de correção monetária ou de juros moratórios mensais.',
          'Na prática das contadorias e nas planilhas apresentadas por executados e exequentes, o erro mais frequente é justamente o bis in idem: calcula-se a correção monetária por uma tabela do tribunal e, no mesmo período, aplica-se a Selic, gerando enriquecimento sem causa que anula a memória de cálculo quando devidamente apontado em impugnação.',
        ],
        highlights: [
          'Selic = Inflação implícita + juros reais.',
          'Vedação expressa de cumulação com INPC, IPCA-E, IGP-M ou juros de 1% ao mês no mesmo intervalo.',
          'Atenção ao critério de capitalização e à base diária da taxa apurada pelo Banco Central.',
        ],
      },
      {
        heading: '3. A regra trabalhista pós-ADC 58 e as modulações temporais',
        content: [
          'No âmbito trabalhista, a decisão do STF na ADC 58 pacificou uma celeuma de quase uma década:',
          '1. Fase Pré-Processual (do vencimento da obrigação trabalhista até a data anterior ao ajuizamento da ação): incide o IPCA-E para fins de correção monetária, acrescido dos juros legais previstos no caput do art. 39 da Lei nº 8.177/91 (1% ao mês simples).',
          '2. Fase Processual (a partir da data da notificação/citação ou do ajuizamento, conforme a modulação): incide exclusivamente a Taxa Selic, englobando simultaneamente juros e correção.',
          'Entretanto, a modulação de efeitos gerou centenas de exceções práticas: pagamentos já realizados e decisões transitadas em julgado com expressa fixação de índices diferentes não são rediscutidos. O perito em liquidação de sentença precisa, portanto, examinar com lupa o teor da coisa julgada antes de rodar os algoritmos de cálculo.',
        ],
      },
      {
        heading: '4. Dívidas civis, direito bancário e a Corte Especial do STJ',
        content: [
          'No campo do Direito Civil e Empresarial, a interpretação do artigo 406 do Código Civil esteve no centro do julgamento do Recurso Especial repetitivo perante a Corte Especial do STJ.',
          'A tese vencedora consolidou a incidência da taxa Selic como a taxa de juros moratórios legalmente aplicável quando os juros não forem convencionados pelas partes. Essa diretriz alinha a jurisprudência cível à sistemática tributária da União.',
          'Todavia, surgem desafios de engenharia financeira: como tratar períodos anteriores à citação quando a mora contratual começou em data pretérita? Ou como calcular a correção monetária pura no período em que ainda não há incidência de juros de mora? Nestes cenários, a elaboração de uma memória discriminada em colunas separadas é a única forma de garantir a homologação judicial sem recursos protelatórios.',
        ],
      },
      {
        heading: '5. Como auditar uma planilha de cálculo e identificar distorções milionárias',
        content: [
          'Ao receber um cálculo de liquidação da parte contrária ou até mesmo da assessoria de cálculos do tribunal, o advogado deve submeter o documento a quatro testes periciais imediatos:',
          'Primeiro: conferir se a data-base do ajuizamento foi adotada rigorosamente no marco divisor entre o IPCA-E e a Selic.',
          'Segundo: verificar se os juros moratórios foram mantidos paralelamente à Selic após a data de corte — erro clássico que infla condenações.',
          'Terceiro: auditar se as deduções de pagamentos parciais foram amortizadas de acordo com o artigo 354 do Código Civil (primeiro os juros vencidos, depois o principal corrigido).',
          'Quarto: assegurar que o perito utilizou a série histórica oficial do Sistema Gerenciador de Séries Temporais do Banco Central (SGS/BACEN) e não indexadores aproximados de sites não certificados.',
        ],
        highlights: [
          'Conferência do marco temporal de transição entre fase pré e pós-processual.',
          'Eliminação de duplicidade de encargos e sobreposição de índices compostos.',
          'Auditoria de amortizações nos moldes do art. 354 do Código Civil.',
        ],
      },
    ],
    conclusion: [
      'A era dos cálculos judiciais simplificados e tabelas genéricas chegou definitivamente ao fim. Hoje, a liquidação de sentença exige rigor científico, domínio da jurisprudência vinculante e tecnologia de conferência de dados em nível de precisão absoluta.',
      'Uma impugnação bem articulada, respaldada por parecer técnico pericial que desmonta o equívoco de índices da parte contrária, poupa recursos financeiros substanciais e acelera o desfecho satisfatório do processo.',
      'Está com uma execução em andamento ou precisa impugnar cálculos fundamentados em índices incorretos? Consulte João Moreira para uma auditoria pericial imediata.',
    ],
  },
  {
    slug: 'agentes-inteligentes-auditoria-documental-pericial',
    title: 'O uso de agentes inteligentes na auditoria preliminar de documentos processuais',
    subtitle:
      'Como a inteligência artificial aplicada e pipelines de dados estruturados transformam a análise de milhares de páginas de extratos bancários, contratos e registros digitais.',
    summary:
      'A perícia em processos volumosos não comporta mais a digitação manual de extratos e a checagem visual página por página. Entenda como o uso ético de agentes de Inteligência Artificial, visão computacional e rotinas de validação matemática aceleram o trabalho do perito judicial e do assistente técnico, eliminando fraudes, divergências e gargalos processuais com precisão cirúrgica.',
    category: 'Tecnologia & IA',
    publishedAt: '2026-04-04',
    publishedDisplay: '04 de abril de 2026',
    readTimeMinutes: 7,
    coverTag: 'Inovação Pericial',
    metaDescription:
      'Descubra como peritos judiciais utilizam agentes inteligentes e IA para auditar milhares de extratos bancários, contratos e documentos processuais com validação matemática e sem perda de dados.',
    metaKeywords:
      'agentes inteligentes perícia judicial, IA em processos judiciais, auditoria de extratos bancários, perícia em tecnologia da informação, automação pericial, OCR forense, prova pericial e IA',
    keyTakeaways: [
      'Agentes de IA não tomam decisões de mérito nem assinam laudos: eles operam como motores avançados de extração, triagem e conciliação de dados brutos.',
      'A conversão de PDFs digitalizados e extratos ilegíveis em bases de dados relacionais estruturadas reduz o tempo de auditoria de semanas para horas.',
      'A integridade dos cálculos é garantida por rotinas determinísticas de conferência matemática (hash e reconciliação contábil), e não pela alucinação de modelos generativos.',
      'A tecnologia viabiliza a auditoria de 100% dos lançamentos contábeis, superando a antiga limitação das análises por simples amostragem.',
    ],
    sections: [
      {
        heading: '1. O desafio dos processos com acervos documentais hipertrofiados',
        content: [
          'Em ações revisionais bancárias de longos anos, execuções de grandes grupos econômicos, inventários com dezenas de contas ou disputas societárias, o acervo de documentos anexados aos autos eletrônicos frequentemente ultrapassa dez mil páginas de extratos, notas fiscais, contratos e trocas de e-mails.',
          'No modelo tradicional de trabalho, o perito judicial ou assistente técnico precisava recorrer a equipes de digitadores ou despender semanas copiando manualmente colunas de débitos e créditos para planilhas eletrônicas. Esse método arcaico continha dois graves problemas estruturais: custo operacional proibitivo e altíssima suscetibilidade a erros humanos de transcrição.',
          'Com a consolidação de pipelines modernos que integram visão computacional, reconhecimento óptico forense (OCR) e agentes inteligentes de processamento de linguagem natural, esse paradigma foi inteiramente superado.',
        ],
        quote:
          'A inteligência artificial na perícia não serve para opinar sobre quem tem razão, mas para garantir que nem uma única linha de um milhão de registros passe sem auditoria.',
        highlights: [
          'Fim do gargalo de digitação manual de extratos escaneados e microfilmagens.',
          'Auditoria sobre a totalidade dos lançamentos, extinguindo a margem de erro por amostragem.',
          'Redução drástica do prazo de entrega de laudos periciais e pareceres técnicos.',
        ],
      },
      {
        heading: '2. Como funciona a arquitetura de um agente de auditoria pericial',
        content: [
          'É fundamental desmistificar o que significa "usar IA na perícia". Não se trata de inserir petições no ChatGPT e esperar respostas prontas, o que violaria o sigilo e incorreria em riscos inaceitáveis de alucinação de dados.',
          'Um pipeline pericial profissional opera em três camadas estritamente controladas:',
          '1. Camada de Ingestão e OCR Especializado: os arquivos em PDF (inclusive cópias com baixa resolução ou marcas de carimbo) são processados por modelos de visão treinados na morfologia de extratos de instituições financeiras brasileiras.',
          '2. Camada de Normalização e Validação Algorítmica: os dados extraídos são convertidos em esquemas estruturados (data, histórico, documento de origem, valor débito/crédito e saldo). Um motor matemático determinístico confere se o saldo inicial somado às movimentações fecha exatamente no saldo final de cada mês. Se houver divergência de 1 centavo, o registro é sinalizado para conferência humana imediata.',
          '3. Agente de Conciliação e Triagem: modelos de IA analisam as descrições dos lançamentos, categorizando tarifas debitadas (como TAC, TEC, tarifas de serviços avulsos, encargos de limite de crédito) e relacionando-as aos termos do contrato objeto da lide.',
        ],
        highlights: [
          'Extração estruturada de tabelas e metadados com validação de reconciliação de saldo.',
          'Categorização automatizada de tarifas, encargos e taxas com base em taxonomia pericial.',
          'Supervisão humana em todas as etapas de verificação e síntese metodológica.',
        ],
      },
      {
        heading: '3. Aplicações práticas: onde a tecnologia faz a diferença real',
        content: [
          'A utilização dessa tecnologia gera resultados impressionantes em diversas frentes da atuação pericial:',
          '• Ações Revisionais de Contratos Bancários: identificação instantânea de taxas de juros cobradas mês a mês contra a taxa média divulgada pelo Banco Central na data de cada pactuação, sem depender de estimativas genéricas.',
          '• Dissolução Societária e Apuração de Desvios: rastreamento de transferências atípicas entre contas corporativas e pessoas físicas vinculadas, cruzando lançamentos em dezenas de contas bancárias em segundos.',
          '• Perícias em TI e Auditoria de Logs: checagem de consistência em bases de dados transacionais com milhões de linhas, validando carimbos de data/hora (timestamps) e assinaturas criptográficas de logs de auditoria.',
        ],
      },
      {
        heading: '4. Segurança da informação, sigilo profissional e compliance LGPD',
        content: [
          'A integridade dos dados processuais é um dever legal inegociável. Qualquer ferramenta tecnológica utilizada por peritos credenciados nos tribunais de justiça deve respeitar rigorosos protocolos de governança:',
          'Ambientes fechados e isolados de processamento, sem compartilhamento de dados com modelos públicos de treinamento; armazenamento seguro e criptografado em repouso e em trânsito; e estrita observância das regras da Lei Geral de Proteção de Dados (LGPD) e das diretrizes do Conselho Nacional de Justiça (CNJ).',
          'A tecnologia opera sempre sob a égide do sigilo profissional, garantindo que as informações contábeis e fiscais das partes permaneçam protegidas em todas as fases da instrução técnica.',
        ],
        quote:
          'O perito é pessoalmente responsável por cada afirmação de seu laudo. A ferramenta serve ao especialista, jamais o inverso.',
      },
      {
        heading: '5. O futuro da prova técnica: mais velocidade, rigor e transparência',
        content: [
          'A automação inteligente não substitui o juízo de valor, a ética e a experiência do perito judicial e do assistente técnico. Ao contrário: ao livrar o especialista do trabalho mecânico e repetitivo de preenchimento de tabelas, permite que sua atenção intelectual se concentre onde ela é verdadeiramente insubstituível — na fundamentação metodológica, no raciocínio crítico e na resposta minuciosa aos quesitos formulados.',
          'Para advogados e magistrados, isso se traduz em laudos mais claros, amparados em demonstrativos impecáveis e que tornam o processo mais célere e a decisão jurisdicional mais justa.',
        ],
      },
    ],
    conclusion: [
      'A convergência entre perícia judicial tradicional e inteligência artificial aplicada é a nova fronteira da eficiência no Poder Judiciário.',
      'Ao contratar João Moreira para atuação pericial ou assistência técnica, seu processo conta com tecnologia de ponta desenvolvida sob medida para extrair clareza técnica dos cenários mais complexos.',
      'Tem um caso com volume massivo de documentos ou precisa de suporte em perícia tecnológica? Entre em contato pelo WhatsApp ou solicite um orçamento detalhado.',
    ],
  },
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
