import type { IconName } from "@/types/content";

export type SolutionFaq = {
  question: string;
  answer: string;
};

export type PortfolioSolution = {
  slug: string;
  name: string;
  shortName: string;
  pillar: string;
  icon: IconName;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  summary: string;
  problem: string;
  impacts: string[];
  deliverables: string[];
  applications: string[];
  technologies: string[];
  governance: string;
  outcomes: string[];
  faqs: SolutionFaq[];
  related: string[];
};

export type PortfolioPillar = {
  id: string;
  name: string;
  description: string;
  problem: string;
  result: string;
  icon: IconName;
  solutionSlugs: string[];
};

export const implementationSteps = [
  ["Descobrir", "Entendimento do objetivo, processos, ambiente atual, riscos e critérios de sucesso."],
  ["Desenhar", "Arquitetura, escopo, acessos, integrações e plano de implantação."],
  ["Implantar", "Configuração, desenvolvimento, testes e validação com usuários-chave."],
  ["Adotar", "Treinamento, entrada em operação e acompanhamento do uso."],
  ["Evoluir", "Suporte, otimizações e novas entregas conforme a operação amadurece."],
] as const;

export const portfolioSolutions: PortfolioSolution[] = [
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    shortName: "Business Intelligence",
    pillar: "Dados e Inteligência",
    icon: "barChart",
    seoTitle: "Consultoria Power BI e Business Intelligence",
    seoDescription: "Desenvolvimento de dashboards e Business Intelligence para empresas que precisam decidir com dados confiáveis.",
    headline: "Indicadores que mostram onde agir, não apenas o que aconteceu.",
    summary: "Estruturamos dados, regras e dashboards para diretoria e áreas operacionais acompanharem resultado, margem, caixa e produtividade.",
    problem: "Relatórios manuais, números divergentes e análises atrasadas fazem a gestão reagir quando o problema já cresceu.",
    impacts: ["Decisões baseadas em versões diferentes do mesmo número", "Tempo perdido consolidando planilhas", "Baixa visibilidade de margem, metas e riscos"],
    deliverables: ["Mapeamento de indicadores", "Modelagem e tratamento dos dados", "Dashboards responsivos", "Alertas e rotinas de atualização"],
    applications: ["Visão executiva", "Comercial e margem", "Financeiro e caixa", "Estoque, compras e logística"],
    technologies: ["Microsoft Power BI", "Microsoft Fabric", "SQL", "Power Query"],
    governance: "Definimos origem, regra de cálculo, atualização e acesso de cada indicador para que o painel seja confiável e auditável.",
    outcomes: ["Menos tempo preparando relatórios", "Reuniões apoiadas no mesmo número", "Prioridades operacionais mais visíveis"],
    faqs: [
      { question: "É preciso trocar o ERP?", answer: "Não. O projeto normalmente conecta as fontes atuais e organiza os dados necessários para análise." },
      { question: "O dashboard funciona no celular?", answer: "As experiências são planejadas para desktop e acesso móvel, respeitando o perfil de uso." },
      { question: "Quem pode ver cada informação?", answer: "Os acessos podem ser definidos por usuário, grupo, área, filial ou regra de negócio." },
    ],
    related: ["engenharia-de-dados", "power-bi-microsoft-fabric", "portais-analytics-power-bi-embedded"],
  },
  {
    slug: "engenharia-de-dados",
    name: "Engenharia de Dados",
    shortName: "Engenharia de Dados",
    pillar: "Dados e Inteligência",
    icon: "database",
    seoTitle: "Engenharia de Dados para Empresas",
    seoDescription: "Integração, tratamento e governança de dados empresariais para BI, automação e inteligência artificial.",
    headline: "Uma base confiável para BI, automação e inteligência artificial.",
    summary: "Conectamos sistemas, padronizamos informações e construímos fluxos de dados que reduzem retrabalho e aumentam a confiança nas análises.",
    problem: "Dados espalhados entre ERP, planilhas e aplicações impedem uma visão única e tornam cada nova análise lenta e frágil.",
    impacts: ["Integrações manuais recorrentes", "Indicadores difíceis de auditar", "Projetos de IA sem dados preparados"],
    deliverables: ["Inventário de fontes", "Pipelines de integração", "Modelos de dados", "Monitoramento de qualidade"],
    applications: ["Data warehouse e lakehouse", "Integração de ERP e CRM", "Camada semântica", "Preparação para IA"],
    technologies: ["Microsoft Fabric", "Azure Data Factory", "SQL", "APIs"],
    governance: "Qualidade, linhagem, acesso e monitoramento são definidos como parte da arquitetura, não como correção posterior.",
    outcomes: ["Dados disponíveis com mais consistência", "Menos processos manuais", "Base reutilizável para novas análises"],
    faqs: [
      { question: "É necessário migrar todos os dados?", answer: "Não. A arquitetura é dimensionada pelo objetivo e pode evoluir por etapas." },
      { question: "Vocês integram planilhas?", answer: "Sim, quando fazem parte do processo atual, com regras para reduzir riscos e dependência manual." },
      { question: "Como a qualidade é monitorada?", answer: "Podem ser criadas validações, registros de atualização e alertas para falhas ou dados fora do padrão." },
    ],
    related: ["business-intelligence", "power-bi-microsoft-fabric", "automacao-integracoes"],
  },
  {
    slug: "inteligencia-artificial",
    name: "Inteligência Artificial para Empresas",
    shortName: "Inteligência Artificial",
    pillar: "Dados e Inteligência",
    icon: "sparkles",
    seoTitle: "Inteligência Artificial para Empresas",
    seoDescription: "IA aplicada a dados, documentos e processos empresariais com segurança, contexto e objetivos definidos.",
    headline: "IA aplicada ao trabalho real da empresa.",
    summary: "Criamos assistentes, análises e agentes que usam contexto empresarial para acelerar tarefas, consultas e decisões.",
    problem: "Iniciativas de IA desconectadas dos dados e processos geram respostas genéricas, riscos de segurança e pouca adoção.",
    impacts: ["Tempo gasto procurando informação", "Automação sem governança", "Licenças de IA pouco utilizadas"],
    deliverables: ["Mapeamento de casos de uso", "Prova de conceito", "Integração com dados autorizados", "Plano de adoção e governança"],
    applications: ["Assistentes internos", "Consulta a documentos", "Análise de indicadores", "Agentes para tarefas controladas"],
    technologies: ["Microsoft Copilot", "Azure AI", "Power Platform", "APIs de IA"],
    governance: "Definimos fontes permitidas, perfis de acesso, revisão humana e limites de uso antes da entrada em produção.",
    outcomes: ["Consultas mais rápidas", "Menos tarefas repetitivas", "Uso de IA com controle e rastreabilidade"],
    faqs: [
      { question: "A IA usa dados confidenciais?", answer: "Somente fontes autorizadas e dentro da arquitetura de acesso definida para o projeto." },
      { question: "É possível começar pequeno?", answer: "Sim. Recomendamos um caso de uso mensurável antes de ampliar a solução." },
      { question: "A IA substitui a decisão humana?", answer: "Não. A proposta é apoiar análise e execução, mantendo responsabilidade e revisão adequadas." },
    ],
    related: ["ciencia-de-dados", "automacao-integracoes", "microsoft-365"],
  },
  {
    slug: "ciencia-de-dados",
    name: "Ciência de Dados",
    shortName: "Ciência de Dados",
    pillar: "Dados e Inteligência",
    icon: "chartSpline",
    seoTitle: "Ciência de Dados e Modelos Preditivos",
    seoDescription: "Análises estatísticas e modelos preditivos para demanda, risco, comportamento e planejamento empresarial.",
    headline: "Use o histórico para enxergar cenários antes de agir.",
    summary: "Avaliamos dados e hipóteses para construir análises preditivas úteis a planejamento, demanda, risco e comportamento.",
    problem: "Decisões de previsão feitas apenas por médias ou percepção ignoram padrões relevantes e aumentam a incerteza.",
    impacts: ["Planejamento com pouca previsibilidade", "Estoque ou capacidade mal dimensionados", "Riscos identificados tarde"],
    deliverables: ["Análise exploratória", "Seleção e validação de modelos", "Métricas de desempenho", "Rotina de monitoramento"],
    applications: ["Previsão de demanda", "Propensão e segmentação", "Risco e inadimplência", "Detecção de anomalias"],
    technologies: ["Python", "Microsoft Fabric", "Azure Machine Learning", "Power BI"],
    governance: "Modelos são documentados, medidos e revisados para evitar decisões automáticas sem contexto ou controle.",
    outcomes: ["Cenários comparáveis", "Planejamento apoiado em evidências", "Riscos e oportunidades priorizados"],
    faqs: [
      { question: "Quanto histórico é necessário?", answer: "Depende do problema, da frequência dos dados e da estabilidade do processo. A viabilidade é avaliada no diagnóstico." },
      { question: "Todo problema precisa de machine learning?", answer: "Não. Muitas decisões melhoram com análise estatística e regras bem definidas." },
      { question: "Como saber se o modelo continua bom?", answer: "Definimos métricas e uma rotina de acompanhamento para detectar perda de desempenho." },
    ],
    related: ["engenharia-de-dados", "inteligencia-artificial", "business-intelligence"],
  },
  {
    slug: "power-bi-microsoft-fabric",
    name: "Power BI e Microsoft Fabric",
    shortName: "Power BI e Fabric",
    pillar: "Dados e Inteligência",
    icon: "layers",
    seoTitle: "Consultoria Power BI e Microsoft Fabric",
    seoDescription: "Arquitetura analítica com Power BI e Microsoft Fabric para integrar dados, governar indicadores e escalar análises.",
    headline: "Analytics integrado ao ecossistema Microsoft.",
    summary: "Planejamos ambientes de Power BI e Fabric para unir ingestão, modelagem, governança e consumo de dados.",
    problem: "Relatórios crescem sem padrão, custos ficam difíceis de controlar e a operação perde confiança no ambiente analítico.",
    impacts: ["Datasets duplicados", "Atualizações instáveis", "Governança e custos pouco visíveis"],
    deliverables: ["Arquitetura do ambiente", "Modelos semânticos", "Padrões de desenvolvimento", "Governança e monitoramento"],
    applications: ["Self-service governado", "Lakehouse", "Data Factory", "Dashboards corporativos"],
    technologies: ["Microsoft Fabric", "Power BI", "OneLake", "Data Factory"],
    governance: "Organizamos workspaces, acessos, linhagem, padrões de publicação e ciclo de vida do conteúdo.",
    outcomes: ["Ambiente analítico mais organizado", "Reuso de modelos e métricas", "Evolução com melhor controle"],
    faqs: [
      { question: "Fabric substitui o Power BI?", answer: "Não. O Power BI faz parte do ecossistema Fabric e continua sendo a camada de análise e visualização." },
      { question: "É preciso migrar tudo de uma vez?", answer: "Não. A adoção pode ser planejada por domínio, carga de trabalho ou prioridade." },
      { question: "Como dimensionar capacidade?", answer: "A avaliação considera volume, atualização, usuários, cargas e padrões de uso." },
    ],
    related: ["business-intelligence", "engenharia-de-dados", "portais-analytics-power-bi-embedded"],
  },
  {
    slug: "portais-analytics-power-bi-embedded",
    name: "Portais de Analytics e Power BI Embedded",
    shortName: "Portais de Analytics",
    pillar: "Dados e Inteligência",
    icon: "laptop",
    seoTitle: "Power BI Embedded e Portais de Analytics",
    seoDescription: "Portais personalizados com Power BI Embedded, controle de acesso, RLS e experiência simplificada para usuários internos e externos.",
    headline: "Distribua analytics com controle, escala e identidade própria.",
    summary: "Criamos portais para organizar relatórios, perfis e navegação, atendendo usuários internos, clientes, fornecedores ou parceiros.",
    problem: "Distribuir muitos relatórios por links e licenças individuais pode gerar experiência fragmentada e governança difícil.",
    impacts: ["Navegação confusa", "Acesso difícil de administrar", "Baixa visibilidade de utilização"],
    deliverables: ["Portal personalizado", "Autenticação e perfis", "Incorporação de relatórios", "Monitoramento de utilização"],
    applications: ["Portal para clientes", "Analytics para parceiros", "Central interna de indicadores", "Produto de dados"],
    technologies: ["Power BI Embedded", "Microsoft Entra ID", "Row Level Security", "APIs"],
    governance: "Acesso por usuário, grupo e perfil, com RLS, registro de utilização e separação entre ambientes.",
    outcomes: ["Experiência de acesso mais simples", "Distribuição centralizada", "Possibilidade de otimizar o modelo de licenciamento"],
    faqs: [
      { question: "O portal elimina licenças individuais?", answer: "A arquitetura pode mudar o modelo de distribuição, mas o desenho final depende do público, capacidade e regras de licenciamento vigentes." },
      { question: "É possível usar a identidade da empresa?", answer: "Sim. Navegação, cores, domínio e estrutura podem ser personalizados conforme o projeto." },
      { question: "Usuários externos podem acessar?", answer: "Sim, desde que a autenticação e as permissões sejam planejadas para esse cenário." },
    ],
    related: ["business-intelligence", "power-bi-microsoft-fabric", "desenvolvimento-sistemas"],
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    shortName: "Microsoft 365",
    pillar: "Cloud e Produtividade",
    icon: "cloud",
    seoTitle: "Consultoria Microsoft 365 e Gestão de Licenças",
    seoDescription: "Consultoria Microsoft 365, Teams, SharePoint, OneDrive, Copilot, migração, adoção e otimização de licenças.",
    headline: "Produtividade, colaboração e licenças dimensionadas para uso real.",
    summary: "Apoiamos escolha, migração, configuração e adoção do Microsoft 365 de acordo com os perfis e processos da empresa.",
    problem: "Licenças compradas sem revisão e ferramentas pouco adotadas elevam custos sem melhorar a rotina.",
    impacts: ["Recursos contratados e pouco usados", "Documentos dispersos", "Colaboração sem padrão ou governança"],
    deliverables: ["Inventário de licenças", "Plano de migração", "Configuração de colaboração", "Treinamento e adoção"],
    applications: ["Teams", "SharePoint e OneDrive", "Microsoft Copilot", "Gestão de licenças"],
    technologies: ["Microsoft 365", "Teams", "SharePoint", "OneDrive"],
    governance: "Perfis, compartilhamento, retenção, identidade e ciclo de vida de usuários são tratados conforme o cenário.",
    outcomes: ["Licenças mais aderentes ao uso", "Colaboração organizada", "Adoção acompanhada"],
    faqs: [
      { question: "Vocês vendem somente a licença?", answer: "O atendimento pode incluir licenciamento, mas prioriza dimensionamento, configuração e adoção." },
      { question: "É possível migrar e-mails e arquivos?", answer: "Sim, após avaliação de origem, volume, identidade e requisitos de continuidade." },
      { question: "Copilot serve para todos os usuários?", answer: "Não necessariamente. Recomendamos avaliar função, rotina, dados e casos de uso antes de dimensionar." },
    ],
    related: ["microsoft-azure", "seguranca-backup", "inteligencia-artificial"],
  },
  {
    slug: "microsoft-azure",
    name: "Microsoft Azure",
    shortName: "Microsoft Azure",
    pillar: "Cloud e Produtividade",
    icon: "cloud",
    seoTitle: "Consultoria Microsoft Azure e Cloud",
    seoDescription: "Consultoria Azure para migração, arquitetura cloud, segurança, continuidade, monitoramento e otimização de custos.",
    headline: "Cloud dimensionada para desempenho, continuidade e controle de custos.",
    summary: "Planejamos e evoluímos ambientes Azure considerando carga de trabalho, segurança, disponibilidade e governança financeira.",
    problem: "Recursos cloud sem arquitetura e acompanhamento aumentam custo, risco e dificuldade operacional.",
    impacts: ["Custos imprevisíveis", "Recursos subutilizados", "Continuidade e segurança pouco testadas"],
    deliverables: ["Assessment do ambiente", "Arquitetura e migração", "Monitoramento", "Otimização e FinOps"],
    applications: ["Máquinas virtuais", "Aplicações e bancos", "Backup e recuperação", "Dados e analytics"],
    technologies: ["Microsoft Azure", "Azure Monitor", "Azure Backup", "Microsoft Defender for Cloud"],
    governance: "Políticas, identidade, orçamento, alertas e responsabilidades são definidos para reduzir risco e desperdício.",
    outcomes: ["Custos mais visíveis", "Ambiente preparado para continuidade", "Capacidade alinhada à demanda"],
    faqs: [
      { question: "Toda empresa precisa migrar para cloud?", answer: "Não. A decisão depende de carga, custo, risco, conectividade e objetivo." },
      { question: "Vocês ajudam a reduzir custos?", answer: "Analisamos consumo, dimensionamento e recursos ociosos. Qualquer economia depende do ambiente e das mudanças aprovadas." },
      { question: "A migração interrompe a operação?", answer: "O plano busca reduzir impacto, com testes, janelas e estratégia de retorno adequadas ao sistema." },
    ],
    related: ["microsoft-365", "seguranca-backup", "consultoria-suporte"],
  },
  {
    slug: "seguranca-backup",
    name: "Segurança e Backup",
    shortName: "Segurança e Backup",
    pillar: "Segurança e Continuidade",
    icon: "shield",
    seoTitle: "Segurança e Backup Microsoft 365 e Cloud",
    seoDescription: "Backup Microsoft 365, segurança de identidade, MFA, Microsoft Defender, continuidade e recuperação de desastres.",
    headline: "Proteção e continuidade para manter a empresa operando.",
    summary: "Estruturamos identidade, acesso, backup e recuperação com responsabilidades e testes claros.",
    problem: "Acesso sem governança e backup não testado criam riscos que só aparecem quando a operação já foi afetada.",
    impacts: ["Exposição de contas e dados", "Recuperação incerta", "Paradas com impacto financeiro"],
    deliverables: ["Diagnóstico de riscos", "MFA e controle de acesso", "Política de backup", "Plano e testes de recuperação"],
    applications: ["Backup Microsoft 365", "Backup cloud", "Defender e identidade", "Continuidade de negócio"],
    technologies: ["Microsoft Defender", "Microsoft Entra ID", "Azure Backup", "Soluções de backup avaliadas por cenário"],
    governance: "A solução considera menor privilégio, revisão de acessos, retenção, testes e registro das responsabilidades.",
    outcomes: ["Riscos prioritários mais claros", "Recuperação planejada", "Acessos mais controlados"],
    faqs: [
      { question: "Microsoft 365 já possui backup?", answer: "Existem recursos de retenção e recuperação, mas a necessidade de backup adicional depende da política e dos riscos da empresa." },
      { question: "MFA é suficiente para segurança?", answer: "É uma camada importante, mas precisa estar combinada com identidade, dispositivos, permissões e monitoramento." },
      { question: "Com que frequência testar a recuperação?", answer: "A frequência depende da criticidade e dos objetivos de continuidade definidos pela empresa." },
    ],
    related: ["microsoft-365", "microsoft-azure", "consultoria-suporte"],
  },
  {
    slug: "infraestrutura-corporativa",
    name: "Infraestrutura Corporativa",
    shortName: "Infraestrutura",
    pillar: "Infraestrutura",
    icon: "server",
    seoTitle: "Infraestrutura de TI em Londrina",
    seoDescription: "Projetos e fornecimento de notebooks, desktops, servidores, armazenamento, redes e modernização de infraestrutura corporativa.",
    headline: "Infraestrutura dimensionada para a operação que a empresa precisa sustentar.",
    summary: "Apoiamos diagnóstico, especificação, fornecimento e modernização do parque, servidores, armazenamento e redes.",
    problem: "Equipamentos comprados sem dimensionamento e ambientes sem planejamento geram lentidão, indisponibilidade e gastos recorrentes.",
    impacts: ["Paradas e baixa produtividade", "Capacidade inadequada", "Compras desconectadas do plano de tecnologia"],
    deliverables: ["Inventário e diagnóstico", "Dimensionamento técnico", "Projeto e especificação", "Plano de modernização"],
    applications: ["Notebooks e workstations", "Servidores e armazenamento", "Redes corporativas", "Modernização do parque"],
    technologies: ["Equipamentos corporativos sob demanda", "Servidores", "Armazenamento", "Redes"],
    governance: "Padronização, ciclo de vida, garantia, criticidade e continuidade são considerados no dimensionamento.",
    outcomes: ["Compras mais aderentes à necessidade", "Capacidade planejada", "Menos risco de obsolescência inesperada"],
    faqs: [
      { question: "Vocês fornecem equipamentos?", answer: "Sim, sob demanda e com dimensionamento técnico conforme necessidade e disponibilidade comercial." },
      { question: "É possível modernizar por etapas?", answer: "Sim. O plano pode priorizar ativos críticos, riscos e impacto na operação." },
      { question: "A marca do equipamento é definida antes?", answer: "A recomendação considera requisitos, padrão do cliente, suporte e disponibilidade, sem prometer um modelo antes da cotação." },
    ],
    related: ["microsoft-azure", "seguranca-backup", "consultoria-suporte"],
  },
  {
    slug: "desenvolvimento-sistemas",
    name: "Desenvolvimento de Sistemas",
    shortName: "Desenvolvimento de Sistemas",
    pillar: "Software e Automação",
    icon: "laptop",
    seoTitle: "Desenvolvimento de Sistemas Empresariais",
    seoDescription: "Desenvolvimento de sistemas, portais empresariais e aplicações SaaS integradas aos processos e dados da empresa.",
    headline: "Software desenhado para o processo que não cabe em uma solução pronta.",
    summary: "Criamos sistemas e portais empresariais quando o processo exige uma experiência, regra ou integração específica.",
    problem: "Processos importantes operados em planilhas e ferramentas improvisadas limitam controle, escala e rastreabilidade.",
    impacts: ["Retrabalho e erros manuais", "Baixa rastreabilidade", "Dificuldade para integrar áreas e clientes"],
    deliverables: ["Descoberta e protótipo", "Arquitetura e desenvolvimento", "Integrações", "Publicação e evolução"],
    applications: ["Portais empresariais", "Sistemas internos", "Aplicações SaaS", "Experiências para clientes"],
    technologies: ["Aplicações web", "APIs", "Bancos de dados", "Cloud"],
    governance: "Perfis, registro de ações, segurança, testes e manutenção são tratados desde a arquitetura.",
    outcomes: ["Processos mais padronizados", "Informação centralizada", "Base preparada para integração e evolução"],
    faqs: [
      { question: "Quando desenvolver em vez de comprar?", answer: "Quando requisitos críticos, integrações ou experiência não são atendidos de forma sustentável por uma solução pronta." },
      { question: "A Creativity mantém o sistema depois?", answer: "O modelo de sustentação e evolução é definido no escopo e pode acompanhar a aplicação após a entrega." },
      { question: "É possível integrar ao ERP?", answer: "Sim, quando o sistema oferece meios de integração e o acesso é autorizado." },
    ],
    related: ["automacao-integracoes", "portais-analytics-power-bi-embedded", "microsoft-azure"],
  },
  {
    slug: "automacao-integracoes",
    name: "Automação e Integrações",
    shortName: "Automação e Integrações",
    pillar: "Software e Automação",
    icon: "fileCog",
    seoTitle: "Automação de Processos e Integrações",
    seoDescription: "Automação de processos, integrações por API, Power Platform, alertas e agentes de IA para reduzir tarefas manuais.",
    headline: "Menos tarefas repetitivas entre pessoas, planilhas e sistemas.",
    summary: "Automatizamos fluxos, integrações, alertas e tarefas controladas para reduzir esforço manual e aumentar rastreabilidade.",
    problem: "Equipes repetem as mesmas etapas para mover dados, enviar alertas, conferir prazos e atualizar sistemas.",
    impacts: ["Horas consumidas em tarefas repetitivas", "Falhas de comunicação", "Processos sem registro consistente"],
    deliverables: ["Mapeamento do fluxo", "Integração por API ou conectores", "Automação e alertas", "Monitoramento e documentação"],
    applications: ["Power Platform", "Integrações por API", "Alertas por e-mail e WhatsApp", "Agentes de IA"],
    technologies: ["Power Automate", "Power Apps", "APIs", "Serviços de mensageria"],
    governance: "Credenciais, logs, tratamento de falhas e revisão humana são definidos conforme o risco do processo.",
    outcomes: ["Menos trabalho repetitivo", "Prazos e exceções mais visíveis", "Processos com maior rastreabilidade"],
    faqs: [
      { question: "Qual processo deve ser automatizado primeiro?", answer: "Priorizamos volume, repetição, risco, tempo gasto e estabilidade da regra." },
      { question: "A automação pode enviar WhatsApp?", answer: "Pode, quando houver API, autorização e provedor compatível com as políticas aplicáveis." },
      { question: "O que acontece quando uma integração falha?", answer: "O projeto deve prever registro, alertas, reprocessamento e responsabilidade de suporte." },
    ],
    related: ["desenvolvimento-sistemas", "inteligencia-artificial", "engenharia-de-dados"],
  },
  {
    slug: "consultoria-suporte",
    name: "Consultoria e Suporte",
    shortName: "Consultoria e Suporte",
    pillar: "Consultoria e Suporte",
    icon: "headphones",
    seoTitle: "Consultoria, Suporte e Governança de TI",
    seoDescription: "Diagnóstico de ambiente, modernização, suporte especializado, gestão contínua, treinamento, FinOps e planejamento tecnológico.",
    headline: "Acompanhamento para operar hoje e evoluir sem improviso.",
    summary: "Apoiamos diagnóstico, planejamento, suporte e evolução contínua para conectar decisões técnicas às prioridades da empresa.",
    problem: "Ambientes crescem por urgência, sem responsáveis, padrões ou uma visão clara de custo, risco e prioridade.",
    impacts: ["Demandas sempre reativas", "Custos difíceis de explicar", "Projetos desconectados entre si"],
    deliverables: ["Diagnóstico do ambiente", "Roadmap de modernização", "Suporte especializado", "Governança e acompanhamento"],
    applications: ["Gestão contínua", "Treinamento e adoção", "FinOps", "Planejamento tecnológico"],
    technologies: ["Microsoft 365", "Azure", "Power BI", "Ambiente atual do cliente"],
    governance: "Prioridades, responsáveis, níveis de serviço, riscos e evolução são acompanhados em uma rotina consultiva.",
    outcomes: ["Prioridades mais claras", "Menos decisões isoladas", "Evolução alinhada ao negócio"],
    faqs: [
      { question: "O suporte substitui a equipe interna?", answer: "O modelo pode complementar a equipe, assumir frentes definidas ou apoiar projetos específicos." },
      { question: "É possível começar com diagnóstico?", answer: "Sim. O diagnóstico organiza riscos, oportunidades e prioridades antes de qualquer projeto." },
      { question: "Como funciona a gestão contínua?", answer: "Escopo, rotina, indicadores e responsabilidades são definidos conforme o ambiente e a necessidade." },
    ],
    related: ["infraestrutura-corporativa", "microsoft-365", "microsoft-azure"],
  },
];

export const portfolioPillars: PortfolioPillar[] = [
  {
    id: "dados-inteligencia",
    name: "Dados e Business Intelligence",
    description: "Integração, qualidade, dashboards, analytics e modelos para transformar dados em gestão.",
    problem: "Números divergentes e relatórios atrasados.",
    result: "Visão confiável para priorizar decisões.",
    icon: "barChart",
    solutionSlugs: ["business-intelligence", "engenharia-de-dados", "ciencia-de-dados", "power-bi-microsoft-fabric", "portais-analytics-power-bi-embedded"],
  },
  {
    id: "cloud-produtividade",
    name: "Cloud e Produtividade",
    description: "Microsoft 365 e Azure dimensionados para colaboração, desempenho e custo controlado.",
    problem: "Licenças e cloud sem adoção ou controle.",
    result: "Uso mais aderente e ambiente preparado para crescer.",
    icon: "cloud",
    solutionSlugs: ["microsoft-365", "microsoft-azure"],
  },
  {
    id: "seguranca-continuidade",
    name: "Segurança e Continuidade",
    description: "Identidade, acesso, backup e recuperação planejados para reduzir risco operacional.",
    problem: "Acessos frágeis e recuperação não testada.",
    result: "Mais controle e continuidade para a operação.",
    icon: "shield",
    solutionSlugs: ["seguranca-backup"],
  },
  {
    id: "ia-automacao",
    name: "Inteligência Artificial e Automação",
    description: "Assistentes, agentes, alertas e fluxos aplicados aos processos e dados da empresa.",
    problem: "Tarefas repetitivas e informação difícil de encontrar.",
    result: "Menos retrabalho e respostas mais rápidas.",
    icon: "sparkles",
    solutionSlugs: ["inteligencia-artificial", "automacao-integracoes"],
  },
  {
    id: "software-integracoes",
    name: "Software e Integrações",
    description: "Sistemas, portais e APIs para processos que exigem controle e experiência próprios.",
    problem: "Processos críticos operados em ferramentas improvisadas.",
    result: "Fluxos padronizados, integrados e rastreáveis.",
    icon: "laptop",
    solutionSlugs: ["desenvolvimento-sistemas", "automacao-integracoes"],
  },
  {
    id: "infraestrutura-suporte",
    name: "Infraestrutura e Suporte",
    description: "Parque, servidores, redes, diagnóstico e acompanhamento para sustentar a operação.",
    problem: "Capacidade, riscos e compras sem planejamento.",
    result: "Infraestrutura dimensionada e evolução organizada.",
    icon: "server",
    solutionSlugs: ["infraestrutura-corporativa", "consultoria-suporte"],
  },
];

export function getPortfolioSolution(slug: string) {
  return portfolioSolutions.find((solution) => solution.slug === slug);
}

export function getSolutionsByPillar(pillar: PortfolioPillar) {
  return pillar.solutionSlugs
    .map((slug) => getPortfolioSolution(slug))
    .filter((solution): solution is PortfolioSolution => Boolean(solution));
}
