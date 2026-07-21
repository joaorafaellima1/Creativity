import type { Segment } from "@/types/content";

export const segments: Segment[] = [
  {
    slug: "agronegocio",
    name: "Agronegócio",
    headline: "Tecnologia construída para a complexidade da operação do agro.",
    description:
      "Dados, BI, cloud, segurança e infraestrutura para distribuidoras de insumos, cooperativas e operações que precisam conectar safra, vendas, estoque, crédito e logística.",
    icon: "tractor",
    dashboardKey: "agronegocio",
    priorities: [
      "Vendas, metas e margem por safra, filial, vendedor e cultura.",
      "Estoque por produto, lote, validade e unidade.",
      "Carteira de pedidos, compras, recebimentos e entregas.",
      "Crédito, inadimplência, barter e rentabilidade por cliente.",
      "Integração entre ERP, bancos, planilhas e fontes autorizadas.",
    ],
    opportunities: [
      "Comparar safras e antecipar mudanças de demanda.",
      "Priorizar alertas comerciais e operacionais.",
      "Reduzir consolidações manuais entre filiais.",
      "Conectar tecnologia, segurança e dados em um plano contínuo.",
    ],
  },
  {
    slug: "distribuidores",
    name: "Distribuidores",
    headline: "Margem, estoque e nível de serviço na mesma visão.",
    description:
      "Soluções para distribuidores que operam alto volume, múltiplas unidades, carteira comercial, compras, crédito e logística.",
    icon: "truck",
    dashboardKey: "logistica",
    priorities: [
      "Faturamento, metas, margem e carteira por vendedor e região.",
      "Giro, cobertura, ruptura e excesso de estoque.",
      "Compras, fornecedores e necessidade de reposição.",
      "Entregas, fretes, ocorrências e nível de serviço.",
    ],
    opportunities: [
      "Reduzir o tempo de preparação dos relatórios.",
      "Enxergar rentabilidade por cliente, produto e canal.",
      "Antecipar ruptura, excesso e atraso.",
      "Padronizar indicadores entre unidades.",
    ],
  },
  {
    slug: "industrias",
    name: "Indústrias",
    headline: "Dados para conectar produção, custos, qualidade e resultado.",
    description:
      "Tecnologia para indústrias que precisam integrar operação, vendas, estoque, infraestrutura e gestão com segurança e previsibilidade.",
    icon: "factory",
    dashboardKey: "executivo",
    priorities: [
      "Produção planejada x realizada, capacidade e eficiência.",
      "Custos, perdas, retrabalho e qualidade.",
      "Estoque de insumos e produtos acabados.",
      "Disponibilidade de sistemas e infraestrutura crítica.",
    ],
    opportunities: [
      "Identificar gargalos e perdas operacionais.",
      "Relacionar custo industrial com margem.",
      "Automatizar alertas e integrações.",
      "Planejar modernização sem interromper a operação.",
    ],
  },
  {
    slug: "empresas-servicos",
    name: "Empresas de Serviços",
    headline: "Produtividade, contratos e rentabilidade com menos controle manual.",
    description:
      "Soluções para empresas de serviços acompanharem projetos, equipes, clientes, contratos, receitas, custos e qualidade de atendimento.",
    icon: "briefcase",
    dashboardKey: "financeiro",
    priorities: [
      "Receitas, despesas, caixa e previsibilidade.",
      "Carteira, contratos, recorrência e qualidade de atendimento.",
      "Produtividade por equipe, projeto ou unidade.",
      "Colaboração, documentos e processos internos.",
    ],
    opportunities: [
      "Identificar clientes e serviços mais rentáveis.",
      "Integrar operação, financeiro e comercial.",
      "Automatizar rotinas e alertas.",
      "Dimensionar Microsoft 365 e cloud por uso real.",
    ],
  },
];

export function getSegmentBySlug(slug: string) {
  return segments.find((segment) => segment.slug === slug);
}
