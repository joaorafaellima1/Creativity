import type { DashboardDemo } from "@/types/content";

export const dashboards: DashboardDemo[] = [
  {
    key: "executivo",
    title: "Visão Executiva",
    eyebrow: "Diretoria",
    description: "Indicadores consolidados para acompanhamento mensal da empresa.",
    kpis: [
      { label: "Faturamento", value: "R$ 4,82 mi", helper: "94,5% da meta", status: "atenção" },
      { label: "Margem bruta", value: "27,8%", helper: "+1,4 p.p. no mês", status: "positivo" },
      { label: "Clientes ativos", value: "386", helper: "+22 clientes", status: "positivo" },
      { label: "Pedidos em atraso", value: "17", helper: "5 críticos", status: "atenção" },
    ],
    trend: [
      { label: "Jan", value: 3.7, helper: "R$ 3,70 mi" },
      { label: "Fev", value: 3.95, helper: "R$ 3,95 mi" },
      { label: "Mar", value: 4.1, helper: "R$ 4,10 mi" },
      { label: "Abr", value: 4.38, helper: "R$ 4,38 mi" },
      { label: "Mai", value: 4.62, helper: "R$ 4,62 mi" },
      { label: "Jun", value: 4.82, helper: "R$ 4,82 mi" },
    ],
    bars: [
      { label: "Vendas", value: 94.5, helper: "Meta R$ 5,10 mi" },
      { label: "Margem", value: 101.4, helper: "Acima da referência" },
      { label: "Recebíveis", value: 96.8, helper: "3,2% inadimplência" },
      { label: "Estoque", value: 88.2, helper: "Cobertura média 54 dias" },
    ],
    table: [
      { item: "Comercial", value: "R$ 4,82 mi", detail: "94,5% da meta", status: "Atenção" },
      { item: "Financeiro", value: "3,2%", detail: "Inadimplência controlada", status: "Em dia" },
      { item: "Estoque", value: "54 dias", detail: "Cobertura média", status: "Oportunidade" },
    ],
    alerts: [
      "Meta comercial próxima do planejado, mas com necessidade de recuperação em duas regiões.",
      "Pedidos em atraso concentrados em entregas de maior volume.",
    ],
  },
  {
    key: "comercial",
    title: "Comercial",
    eyebrow: "Vendas",
    description: "Acompanhamento de metas, carteira, produtos e desempenho por vendedor.",
    kpis: [
      { label: "Vendas no mês", value: "R$ 2,74 mi", helper: "91,3% da meta", status: "atenção" },
      { label: "Ticket médio", value: "R$ 8.460", helper: "+6,2% no mês", status: "positivo" },
      { label: "Conversão", value: "38,4%", helper: "+3,1 p.p.", status: "positivo" },
      { label: "Clientes inativos", value: "41", helper: "12 com alto potencial", status: "atenção" },
    ],
    trend: [
      { label: "Sem 1", value: 520, helper: "R$ 520 mil" },
      { label: "Sem 2", value: 610, helper: "R$ 610 mil" },
      { label: "Sem 3", value: 720, helper: "R$ 720 mil" },
      { label: "Sem 4", value: 890, helper: "R$ 890 mil" },
    ],
    bars: [
      { label: "Região Norte", value: 104, helper: "Meta superada" },
      { label: "Região Sul", value: 92, helper: "Abaixo da meta" },
      { label: "Região Oeste", value: 88, helper: "Carteira em recuperação" },
      { label: "Região Leste", value: 97, helper: "Próxima da meta" },
    ],
    table: [
      { item: "Linha A", value: "R$ 860 mil", detail: "Margem 29,4%", status: "Em dia" },
      { item: "Linha B", value: "R$ 510 mil", detail: "Queda de 8%", status: "Atenção" },
      { item: "Linha C", value: "R$ 390 mil", detail: "Ticket crescente", status: "Oportunidade" },
    ],
    alerts: [
      "Doze clientes com histórico recorrente não compraram nos últimos 45 dias.",
      "Região Oeste concentra 46% da diferença para a meta.",
    ],
  },
  {
    key: "financeiro",
    title: "Financeiro",
    eyebrow: "Controle",
    description: "Fluxo de caixa, vencimentos, inadimplência, receitas e despesas.",
    kpis: [
      { label: "Receitas previstas", value: "R$ 1,92 mi", helper: "próximos 30 dias", status: "neutro" },
      { label: "A pagar", value: "R$ 1,18 mi", helper: "36% em 7 dias", status: "atenção" },
      { label: "Inadimplência", value: "3,2%", helper: "-0,4 p.p.", status: "positivo" },
      { label: "Saldo projetado", value: "R$ 740 mil", helper: "cenário base", status: "positivo" },
    ],
    trend: [
      { label: "01/06", value: 520, helper: "R$ 520 mil" },
      { label: "08/06", value: 680, helper: "R$ 680 mil" },
      { label: "15/06", value: 590, helper: "R$ 590 mil" },
      { label: "22/06", value: 740, helper: "R$ 740 mil" },
    ],
    bars: [
      { label: "0-7 dias", value: 36, helper: "R$ 425 mil" },
      { label: "8-15 dias", value: 28, helper: "R$ 330 mil" },
      { label: "16-30 dias", value: 22, helper: "R$ 260 mil" },
      { label: "+30 dias", value: 14, helper: "R$ 165 mil" },
    ],
    table: [
      { item: "Recebíveis", value: "R$ 1,92 mi", detail: "Carteira futura", status: "Em dia" },
      { item: "Atrasados", value: "R$ 94 mil", detail: "3,2% da carteira", status: "Atenção" },
      { item: "Despesas fixas", value: "R$ 420 mil", detail: "Previsto no mês", status: "Em dia" },
    ],
    alerts: [
      "Concentração de contas a pagar nos próximos sete dias exige acompanhamento de caixa.",
      "Inadimplência segue controlada, mas três clientes concentram o maior valor vencido.",
    ],
  },
  {
    key: "estoque",
    title: "Estoque",
    eyebrow: "Operação",
    description: "Giro, cobertura, ruptura, excesso, lotes e curva ABC.",
    kpis: [
      { label: "Cobertura média", value: "54 dias", helper: "-6 dias no mês", status: "positivo" },
      { label: "Produtos parados", value: "128", helper: "18 de alto valor", status: "atenção" },
      { label: "Risco de ruptura", value: "23 itens", helper: "7 críticos", status: "atenção" },
      { label: "Curva A", value: "71%", helper: "do faturamento", status: "neutro" },
    ],
    trend: [
      { label: "Jan", value: 68, helper: "68 dias" },
      { label: "Fev", value: 63, helper: "63 dias" },
      { label: "Mar", value: 61, helper: "61 dias" },
      { label: "Abr", value: 59, helper: "59 dias" },
      { label: "Mai", value: 56, helper: "56 dias" },
      { label: "Jun", value: 54, helper: "54 dias" },
    ],
    bars: [
      { label: "Sementes", value: 82, helper: "cobertura adequada" },
      { label: "Fertilizantes", value: 63, helper: "atenção em duas filiais" },
      { label: "Defensivos", value: 78, helper: "nível estável" },
      { label: "Especialidades", value: 46, helper: "risco de ruptura" },
    ],
    table: [
      { item: "Lote 24A", value: "R$ 182 mil", detail: "Validade em 75 dias", status: "Atenção" },
      { item: "Produto B12", value: "12 dias", detail: "Cobertura baixa", status: "Crítico" },
      { item: "Linha Premium", value: "31%", detail: "Giro acima da média", status: "Oportunidade" },
    ],
    alerts: [
      "Sete itens críticos podem romper antes da próxima reposição prevista.",
      "Produtos de baixo giro concentram capital em duas categorias.",
    ],
  },
  {
    key: "logistica",
    title: "Logística",
    eyebrow: "Entregas",
    description: "Entregas, atrasos, fretes, rotas, ocorrências e nível de serviço.",
    kpis: [
      { label: "Entregas no mês", value: "1.248", helper: "96,1% concluídas", status: "positivo" },
      { label: "Atrasos", value: "17", helper: "5 críticos", status: "atenção" },
      { label: "Custo de frete", value: "6,8%", helper: "sobre receita", status: "neutro" },
      { label: "Ocorrências", value: "29", helper: "-11% no mês", status: "positivo" },
    ],
    trend: [
      { label: "Sem 1", value: 94, helper: "94% no prazo" },
      { label: "Sem 2", value: 95, helper: "95% no prazo" },
      { label: "Sem 3", value: 92, helper: "92% no prazo" },
      { label: "Sem 4", value: 96, helper: "96% no prazo" },
    ],
    bars: [
      { label: "Rota A", value: 98, helper: "no prazo" },
      { label: "Rota B", value: 91, helper: "atenção" },
      { label: "Rota C", value: 87, helper: "maior atraso" },
      { label: "Rota D", value: 95, helper: "estável" },
    ],
    table: [
      { item: "Rota C", value: "8 atrasos", detail: "3 por janela de entrega", status: "Atenção" },
      { item: "Transportadora 2", value: "R$ 84 mil", detail: "Frete no mês", status: "Em dia" },
      { item: "Ocorrências", value: "29", detail: "11% abaixo do mês anterior", status: "Oportunidade" },
    ],
    alerts: [
      "A rota C concentra atrasos por janela de entrega e deve ser revisada.",
      "Custo de frete permanece estável, mas duas regiões estão acima da referência.",
    ],
  },
  {
    key: "margem",
    title: "Margem",
    eyebrow: "Rentabilidade",
    description: "Margem por produto, cliente, vendedor, região, unidade e categoria.",
    kpis: [
      { label: "Margem bruta", value: "27,8%", helper: "+1,4 p.p.", status: "positivo" },
      { label: "Desconto médio", value: "5,6%", helper: "-0,8 p.p.", status: "positivo" },
      { label: "Clientes baixa margem", value: "34", helper: "alta recorrência", status: "atenção" },
      { label: "Mix rentável", value: "62%", helper: "da receita", status: "neutro" },
    ],
    trend: [
      { label: "Jan", value: 24.8, helper: "24,8%" },
      { label: "Fev", value: 25.1, helper: "25,1%" },
      { label: "Mar", value: 26.4, helper: "26,4%" },
      { label: "Abr", value: 26.1, helper: "26,1%" },
      { label: "Mai", value: 27.2, helper: "27,2%" },
      { label: "Jun", value: 27.8, helper: "27,8%" },
    ],
    bars: [
      { label: "Categoria A", value: 32, helper: "maior margem" },
      { label: "Categoria B", value: 27, helper: "estável" },
      { label: "Categoria C", value: 19, helper: "atenção" },
      { label: "Categoria D", value: 24, helper: "recuperando" },
    ],
    table: [
      { item: "Cliente 014", value: "18,2%", detail: "Alto volume, baixa margem", status: "Atenção" },
      { item: "Produto X", value: "34,7%", detail: "Alta margem e giro", status: "Oportunidade" },
      { item: "Canal Direto", value: "29,1%", detail: "Acima da média", status: "Em dia" },
    ],
    alerts: [
      "Trinta e quatro clientes recorrentes operam abaixo da margem de referência.",
      "Categoria C tem oportunidade de revisão de preço ou mix.",
    ],
  },
  {
    key: "agronegocio",
    title: "Agronegócio",
    eyebrow: "Distribuidora de insumos",
    description: "Safra, culturas, produtores, crédito, estoque, barter, logística e assistência técnica.",
    kpis: [
      { label: "Safra 25/26", value: "R$ 12,4 mi", helper: "contratado", status: "positivo" },
      { label: "Barter entregue", value: "68%", helper: "do contratado", status: "atenção" },
      { label: "Títulos em atraso", value: "R$ 286 mil", helper: "2,9% da carteira", status: "atenção" },
      { label: "Visitas técnicas", value: "142", helper: "+18 no mês", status: "positivo" },
    ],
    trend: [
      { label: "Soja", value: 48, helper: "48% do faturamento" },
      { label: "Milho", value: 21, helper: "21% do faturamento" },
      { label: "Trigo", value: 14, helper: "14% do faturamento" },
      { label: "Café", value: 9, helper: "9% do faturamento" },
      { label: "Outras", value: 8, helper: "8% do faturamento" },
    ],
    bars: [
      { label: "Sementes", value: 92, helper: "meta da safra" },
      { label: "Fertilizantes", value: 86, helper: "meta da safra" },
      { label: "Defensivos", value: 97, helper: "meta da safra" },
      { label: "Especialidades", value: 74, helper: "meta da safra" },
    ],
    table: [
      { item: "Filial Norte", value: "R$ 3,8 mi", detail: "Soja e milho", status: "Em dia" },
      { item: "Lotes críticos", value: "18", detail: "Vencimento em até 90 dias", status: "Atenção" },
      { item: "Carteira produtores", value: "426", detail: "58 com oportunidade", status: "Oportunidade" },
    ],
    alerts: [
      "Produtos próximos do vencimento devem entrar no plano comercial da semana.",
      "Barter contratado está dentro do previsto, mas entrega exige acompanhamento por região.",
    ],
  },
];

export function getDashboardByKey(key: string) {
  return dashboards.find((dashboard) => dashboard.key === key) || dashboards[0];
}
