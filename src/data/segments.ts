import type { Segment } from "@/types/content";

export const segments: Segment[] = [
  {
    slug: "agronegocio",
    name: "Agronegócio",
    headline: "Inteligência de dados para empresas que movimentam o agronegócio.",
    description:
      "Dashboards para distribuidoras de insumos agrícolas, revendas, operações comerciais e empresas que precisam acompanhar safra, cultura, crédito, estoque, barter e logística rural.",
    icon: "tractor",
    dashboardKey: "agronegocio",
    priorities: [
      "Gestão de vendas por safra.",
      "Desempenho por cultura, região e município.",
      "Carteira de produtores, crédito e inadimplência.",
      "Operações de barter contratado e entregue.",
      "Estoque por lote, validade, filial e categoria.",
      "Assistência técnica, visitas a campo e oportunidades.",
    ],
    opportunities: [
      "Identificar produtos próximos do vencimento.",
      "Priorizar consultores, regiões e clientes com maior potencial.",
      "Acompanhar sementes, fertilizantes, defensivos e especialidades.",
      "Conectar margem, vendas, estoque e logística em uma única visão.",
    ],
  },
  {
    slug: "distribuidoras",
    name: "Distribuidoras",
    headline: "Controle gerencial para operações com volume, margem e estoque.",
    description:
      "Visões para acompanhar faturamento, carteira, estoque, compras, entregas, inadimplência e rentabilidade por produto, cliente e região.",
    icon: "truck",
    dashboardKey: "logistica",
    priorities: [
      "Metas comerciais por vendedor e região.",
      "Produtos com ruptura, excesso ou baixo giro.",
      "Nível de serviço e entregas pendentes.",
      "Margem por produto, cliente e canal.",
    ],
    opportunities: [
      "Reduzir retrabalho na consolidação de relatórios.",
      "Antecipar compras e reposição com base em dados.",
      "Acompanhar rentabilidade sem depender de planilhas paralelas.",
      "Dar visibilidade diária a pedidos, atrasos e ocorrências.",
    ],
  },
  {
    slug: "industrias",
    name: "Indústrias",
    headline: "Indicadores para produtividade, capacidade e resultado industrial.",
    description:
      "Dashboards para conectar vendas, produção, estoque, custos, qualidade e cumprimento de metas em uma rotina de gestão mais previsível.",
    icon: "factory",
    dashboardKey: "executivo",
    priorities: [
      "Produtividade e eficiência por processo.",
      "Custo, perdas, retrabalho e qualidade.",
      "Estoque de insumos e produtos acabados.",
      "Metas comerciais e capacidade operacional.",
    ],
    opportunities: [
      "Identificar gargalos de capacidade.",
      "Comparar produção planejada e realizada.",
      "Relacionar custos operacionais com rentabilidade.",
      "Criar visões gerenciais para diretoria e operação.",
    ],
  },
  {
    slug: "varejo-atacado",
    name: "Atacado e varejo",
    headline: "Dados claros para vender melhor, comprar melhor e controlar margem.",
    description:
      "Análises para lojas, atacadistas e operações comerciais que precisam acompanhar vendas, mix, ticket médio, estoque, clientes e metas.",
    icon: "shoppingCart",
    dashboardKey: "comercial",
    priorities: [
      "Vendas por loja, canal, vendedor e categoria.",
      "Ticket médio, recorrência e curva ABC.",
      "Estoque, ruptura e produtos parados.",
      "Promoções, descontos e margem.",
    ],
    opportunities: [
      "Direcionar ações comerciais por categoria e público.",
      "Evitar decisões baseadas em relatórios atrasados.",
      "Acompanhar metas diariamente.",
      "Melhorar o mix com base em dados de saída e margem.",
    ],
  },
  {
    slug: "servicos",
    name: "Prestadores de serviços",
    headline: "Indicadores para acompanhar operação, clientes e rentabilidade.",
    description:
      "Painéis para empresas de serviços que querem acompanhar carteira, contratos, produtividade, receitas, despesas e qualidade de atendimento.",
    icon: "briefcase",
    dashboardKey: "financeiro",
    priorities: [
      "Receitas, despesas e previsibilidade de caixa.",
      "Carteira de clientes e contratos ativos.",
      "Produtividade por equipe ou projeto.",
      "Indicadores de atendimento e qualidade.",
    ],
    opportunities: [
      "Identificar clientes e serviços mais rentáveis.",
      "Reduzir tempo de preparação de relatórios gerenciais.",
      "Acompanhar metas por área ou contrato.",
      "Consolidar informações financeiras e operacionais.",
    ],
  },
  {
    slug: "operacao-comercial",
    name: "Operações comerciais",
    headline: "Visibilidade para empresas que dependem de metas, carteira e recorrência.",
    description:
      "Dashboards comerciais para acompanhar equipes, funil, regiões, clientes, metas, mix e oportunidades de venda.",
    icon: "map",
    dashboardKey: "comercial",
    priorities: [
      "Meta versus realizado.",
      "Funil e conversão.",
      "Carteira ativa e clientes em risco.",
      "Produtos, canais e regiões.",
    ],
    opportunities: [
      "Priorizar clientes com maior potencial.",
      "Acompanhar produtividade comercial.",
      "Comparar desempenho por vendedor e região.",
      "Reduzir dependência de planilhas de acompanhamento.",
    ],
  },
  {
    slug: "multiplas-unidades",
    name: "Empresas com múltiplas unidades",
    headline: "Comparação consistente entre filiais, unidades e regiões.",
    description:
      "Visões consolidadas para comparar resultados, estoque, financeiro, operação e metas em empresas com unidades distribuídas.",
    icon: "landmark",
    dashboardKey: "executivo",
    priorities: [
      "Comparativo por unidade e região.",
      "Indicadores padronizados entre filiais.",
      "Estoque, vendas, custos e metas.",
      "Ranking e alertas gerenciais.",
    ],
    opportunities: [
      "Enxergar diferenças de desempenho com critérios únicos.",
      "Padronizar indicadores e regras de cálculo.",
      "Acompanhar filiais com alertas objetivos.",
      "Apoiar expansão com dados confiáveis.",
    ],
  },
];

export function getSegmentBySlug(slug: string) {
  return segments.find((segment) => segment.slug === slug);
}
