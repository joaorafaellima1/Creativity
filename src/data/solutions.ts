import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "bi-executivo",
    name: "BI Executivo",
    shortDescription:
      "Visão consolidada dos principais indicadores da empresa para diretoria e gestores.",
    fullDescription:
      "Painéis executivos para acompanhar resultados, metas, tendências, alertas e indicadores críticos em uma única visão gerencial.",
    indicators: ["Faturamento", "Margem", "Resultado", "Metas", "Clientes ativos", "Alertas"],
    benefit: "Apoia decisões estratégicas com números confiáveis e fáceis de interpretar.",
    icon: "briefcase",
    dashboardKey: "executivo",
    businessQuestions: [
      "Quais áreas estão acima ou abaixo da meta?",
      "Onde a empresa ganha ou perde margem?",
      "Quais indicadores exigem ação imediata?",
    ],
    implementationNotes: [
      "Definição de indicadores junto à diretoria.",
      "Padronização das regras de cálculo.",
      "Criação de visão resumida com capacidade de aprofundamento.",
    ],
  },
  {
    slug: "bi-comercial",
    name: "BI Comercial e de Vendas",
    shortDescription:
      "Faturamento, metas, vendedores, produtos, clientes, regiões, conversão e ticket médio.",
    fullDescription:
      "Dashboards comerciais para acompanhar desempenho de vendas, carteira de clientes, oportunidades e metas por vendedor, produto, canal ou região.",
    indicators: ["Faturamento", "Meta versus realizado", "Ticket médio", "Conversão", "Mix", "Carteira"],
    benefit: "Ajuda a direcionar esforços comerciais para clientes, produtos e regiões com maior potencial.",
    icon: "lineChart",
    dashboardKey: "comercial",
    businessQuestions: [
      "Quais vendedores estão mais próximos da meta?",
      "Quais produtos perderam participação?",
      "Quais clientes reduziram recorrência de compra?",
    ],
    implementationNotes: [
      "Mapeamento de metas e hierarquias comerciais.",
      "Análise por produto, cliente, vendedor e região.",
      "Comparativos mensais para acompanhamento de tendência.",
    ],
  },
  {
    slug: "bi-financeiro",
    name: "BI Financeiro",
    shortDescription:
      "Fluxo de caixa, contas a pagar, contas a receber, inadimplência, despesas, receitas e projeções.",
    fullDescription:
      "Visões financeiras para acompanhar entradas, saídas, vencimentos, inadimplência, centros de custo e previsibilidade de caixa.",
    indicators: ["Fluxo de caixa", "Contas a receber", "Inadimplência", "Despesas", "Receitas", "Projeções"],
    benefit: "Aumenta o controle financeiro e reduz a dependência de relatórios manuais.",
    icon: "calculator",
    dashboardKey: "financeiro",
    businessQuestions: [
      "Quais vencimentos pressionam o caixa?",
      "Onde a inadimplência está concentrada?",
      "Quais despesas mais impactam o resultado?",
    ],
    implementationNotes: [
      "Classificação financeira e centros de custo.",
      "Conciliação de regras de vencimento e pagamento.",
      "Painéis de contas a pagar, receber e projeções.",
    ],
  },
  {
    slug: "bi-estoque",
    name: "BI de Estoque",
    shortDescription:
      "Giro, cobertura, ruptura, excesso, produtos parados, validade, lotes e curva ABC.",
    fullDescription:
      "Análises de estoque para acompanhar níveis, riscos de ruptura, excesso, produtos parados e itens que exigem reposição ou ação comercial.",
    indicators: ["Giro", "Cobertura", "Ruptura", "Excesso", "Curva ABC", "Validade"],
    benefit: "Melhora o equilíbrio entre disponibilidade, capital parado e risco operacional.",
    icon: "warehouse",
    dashboardKey: "estoque",
    businessQuestions: [
      "Quais itens estão próximos de ruptura?",
      "Onde há capital parado em excesso?",
      "Quais produtos exigem atenção por validade ou baixa saída?",
    ],
    implementationNotes: [
      "Tratamento de saldos, lotes e unidades de medida.",
      "Cálculo de giro, cobertura e criticidade.",
      "Análise por filial, categoria e produto.",
    ],
  },
  {
    slug: "bi-compras",
    name: "BI de Compras",
    shortDescription:
      "Fornecedores, pedidos, lead time, preços, variações, atendimento e necessidade de reposição.",
    fullDescription:
      "Painéis para avaliar fornecedores, evolução de preços, pedidos pendentes, lead time e prioridades de abastecimento.",
    indicators: ["Lead time", "Pedidos", "Preço médio", "Atendimento", "Reposição", "Fornecedores"],
    benefit: "Apoia negociações e decisões de compra com histórico e necessidade real de estoque.",
    icon: "shoppingCart",
    dashboardKey: "estoque",
    businessQuestions: [
      "Quais fornecedores atrasam com mais frequência?",
      "Quais itens precisam de reposição prioritária?",
      "Como os preços variaram ao longo do tempo?",
    ],
    implementationNotes: [
      "Integração entre compras, estoque e financeiro.",
      "Padronização de fornecedores e produtos.",
      "Comparativos de preço, prazo e atendimento.",
    ],
  },
  {
    slug: "bi-logistica",
    name: "BI de Logística",
    shortDescription:
      "Entregas, atrasos, custos, fretes, rotas, ocorrências, produtividade e nível de serviço.",
    fullDescription:
      "Dashboards de logística para acompanhar entregas pendentes, atrasos, custos, ocorrências, rotas e produtividade operacional.",
    indicators: ["Entregas", "Atrasos", "Frete", "Rotas", "Ocorrências", "Nível de serviço"],
    benefit: "Torna atrasos e custos visíveis antes que afetem clientes e margens.",
    icon: "route",
    dashboardKey: "logistica",
    businessQuestions: [
      "Quais rotas concentram atrasos?",
      "Onde o custo de frete compromete a rentabilidade?",
      "Quais entregas exigem intervenção hoje?",
    ],
    implementationNotes: [
      "Integração de pedidos, expedição e ocorrências.",
      "Indicadores por rota, região e transportadora.",
      "Alertas operacionais por prazo e criticidade.",
    ],
  },
  {
    slug: "bi-margem-rentabilidade",
    name: "BI de Margem e Rentabilidade",
    shortDescription:
      "Margem por produto, cliente, vendedor, canal, região, unidade e categoria.",
    fullDescription:
      "Análises para identificar onde a empresa realmente gera resultado, considerando mix, descontos, custos e rentabilidade por dimensão.",
    indicators: ["Margem bruta", "Rentabilidade", "Descontos", "Mix", "Canais", "Categorias"],
    benefit: "Evidencia oportunidades de proteger margem e priorizar negócios mais saudáveis.",
    icon: "chartSpline",
    dashboardKey: "margem",
    businessQuestions: [
      "Quais clientes compram muito, mas deixam pouca margem?",
      "Quais produtos sustentam o resultado?",
      "Onde descontos estão reduzindo a rentabilidade?",
    ],
    implementationNotes: [
      "Definição das regras de custo e margem.",
      "Cruzamento entre vendas, produtos e clientes.",
      "Análises por vendedor, canal, região e unidade.",
    ],
  },
  {
    slug: "bi-clientes-crm",
    name: "BI de Clientes e CRM",
    shortDescription:
      "Carteira de clientes, recorrência, churn, potencial de compra, segmentação e oportunidades.",
    fullDescription:
      "Visões de relacionamento para acompanhar comportamento de compra, oportunidades, clientes em risco e potencial por segmento.",
    indicators: ["Recorrência", "Churn", "Potencial", "Segmentação", "Oportunidades", "Carteira"],
    benefit: "Ajuda a priorizar relacionamento, retenção e ações comerciais com base em dados.",
    icon: "users",
    dashboardKey: "comercial",
    businessQuestions: [
      "Quais clientes pararam de comprar?",
      "Onde existe potencial não explorado?",
      "Quais segmentos respondem melhor às campanhas?",
    ],
    implementationNotes: [
      "Organização de carteira e histórico de compras.",
      "Regras de recorrência, inatividade e potencial.",
      "Visões para vendas, gestão e relacionamento.",
    ],
  },
  {
    slug: "bi-operacoes",
    name: "BI de Operações",
    shortDescription:
      "Produtividade, capacidade, eficiência, custos, gargalos, qualidade e cumprimento de metas.",
    fullDescription:
      "Dashboards para acompanhar desempenho operacional, gargalos, produtividade, eficiência e cumprimento de metas por processo.",
    indicators: ["Produtividade", "Capacidade", "Eficiência", "Custos", "Qualidade", "Metas"],
    benefit: "Transforma dados operacionais em prioridades claras de melhoria.",
    icon: "layers",
    dashboardKey: "executivo",
    businessQuestions: [
      "Quais processos estão limitando a capacidade?",
      "Onde há maior custo ou retrabalho?",
      "Quais metas operacionais estão em risco?",
    ],
    implementationNotes: [
      "Mapeamento dos processos e unidades de medida.",
      "Construção de indicadores operacionais por etapa.",
      "Acompanhamento de eficiência, qualidade e custo.",
    ],
  },
  {
    slug: "bi-recursos-humanos",
    name: "BI de Recursos Humanos",
    shortDescription:
      "Headcount, turnover, absenteísmo, horas extras, custos, produtividade e indicadores de pessoas.",
    fullDescription:
      "Painéis de pessoas para acompanhar quadro, rotatividade, ausências, horas extras, custos e indicadores de produtividade.",
    indicators: ["Headcount", "Turnover", "Absenteísmo", "Horas extras", "Custos", "Produtividade"],
    benefit: "Dá mais visibilidade a indicadores de pessoas que afetam operação e resultado.",
    icon: "users",
    dashboardKey: "executivo",
    businessQuestions: [
      "Onde a rotatividade está mais alta?",
      "Quais áreas concentram horas extras?",
      "Como os custos de pessoal evoluem por período?",
    ],
    implementationNotes: [
      "Tratamento de dados sensíveis com controle de acesso.",
      "Indicadores por área, cargo e unidade.",
      "Visões gerenciais sem exposição indevida de informações pessoais.",
    ],
  },
  {
    slug: "bi-agronegocio",
    name: "BI para Agronegócio",
    shortDescription:
      "Vendas por safra, culturas, regiões, produtores, estoque de insumos, crédito, barter e logística.",
    fullDescription:
      "Dashboards para empresas que atuam no agronegócio, com foco em safra, cultura, carteira de produtores, insumos, crédito, estoque, barter, logística e assistência técnica.",
    indicators: ["Safra", "Culturas", "Produtores", "Crédito", "Barter", "Lotes"],
    benefit: "Conecta visão comercial, financeira e operacional em uma rotina aderente ao agronegócio.",
    icon: "tractor",
    dashboardKey: "agronegocio",
    businessQuestions: [
      "Qual cultura concentra maior faturamento e margem?",
      "Quais produtores exigem ação por crédito ou inadimplência?",
      "Como estão estoque, lotes, vencimentos e entregas por filial?",
    ],
    implementationNotes: [
      "Modelagem por safra, cultura, filial e carteira.",
      "Integração de vendas, estoque, crédito, barter e logística.",
      "Visões para consultores, gestores e diretoria.",
    ],
  },
  {
    slug: "automacao-relatorios",
    name: "Automação de Relatórios",
    shortDescription:
      "Substituição de processos manuais por relatórios automáticos, padronizados e atualizados.",
    fullDescription:
      "Automação de rotinas de consolidação, tratamento e distribuição de relatórios para reduzir retrabalho e aumentar a confiabilidade dos números.",
    indicators: ["Tempo de preparação", "Atualização", "Padronização", "Erros manuais", "Distribuição", "Auditoria"],
    benefit: "Libera equipes de tarefas repetitivas e melhora a confiança nas informações.",
    icon: "fileCog",
    dashboardKey: "executivo",
    businessQuestions: [
      "Quais relatórios consomem mais tempo da equipe?",
      "Quais números mudam conforme a pessoa que prepara?",
      "Que informações precisam chegar automaticamente aos gestores?",
    ],
    implementationNotes: [
      "Mapeamento das rotinas manuais atuais.",
      "Padronização das regras e fontes de dados.",
      "Criação de fluxos automatizados e documentados.",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
