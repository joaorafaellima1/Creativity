export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  status: "Rascunho editorial";
  publishedAt: string;
  sections: ArticleSection[];
};

export const contentCategories = [
  "Business Intelligence",
  "Inteligência Artificial",
  "Microsoft 365",
  "Azure",
  "Microsoft Fabric",
  "Segurança",
  "Backup",
  "Infraestrutura",
  "Gestão de TI",
  "Agronegócio",
  "Automação",
  "Redução de custos",
];

export const articles: Article[] = [
  {
    slug: "planilhas-manuais-custando-tempo",
    title: "Como saber se os relatórios manuais já estão custando tempo demais",
    description: "Sinais práticos para identificar retrabalho, divergência de números e dependência excessiva de planilhas.",
    category: "Business Intelligence",
    readingTime: "6 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "O problema raramente é a planilha isolada", paragraphs: ["Planilhas são úteis, mas viram risco quando concentram regras críticas, dependem de uma única pessoa e precisam ser refeitas a cada fechamento.", "O primeiro passo é mapear quanto tempo a equipe gasta coletando, conferindo e explicando diferenças."] },
      { heading: "Sinais de que vale estruturar o dado", paragraphs: ["Números diferentes para a mesma pergunta, relatórios que chegam depois da reunião e correções manuais recorrentes indicam que o processo precisa de uma base mais confiável."] },
      { heading: "Comece pela decisão", paragraphs: ["Antes de escolher uma ferramenta, defina qual decisão precisa chegar mais cedo e quais dados sustentam essa leitura."] },
    ],
  },
  {
    slug: "copilot-quem-realmente-precisa",
    title: "Microsoft Copilot: quem realmente precisa da licença?",
    description: "Um roteiro para avaliar perfis, casos de uso e adoção antes de ampliar o licenciamento.",
    category: "Microsoft 365",
    readingTime: "7 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "Licença sem caso de uso vira custo", paragraphs: ["O valor do Copilot depende da rotina, das informações disponíveis e da frequência com que cada pessoa executa tarefas que podem ser assistidas."] },
      { heading: "Avalie por perfil", paragraphs: ["Mapeie atividades de escrita, reunião, análise, pesquisa interna e preparação de materiais antes de definir o público inicial."] },
      { heading: "Adoção precisa de acompanhamento", paragraphs: ["Treinamento, exemplos reais e uma rotina de medição ajudam a decidir onde manter, ampliar ou revisar licenças."] },
    ],
  },
  {
    slug: "backup-microsoft-365-governanca",
    title: "Backup do Microsoft 365: retenção, recuperação e responsabilidade",
    description: "O que avaliar para transformar backup em uma capacidade real de continuidade.",
    category: "Backup",
    readingTime: "8 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "Recuperar é diferente de apenas reter", paragraphs: ["Políticas de retenção e backup atendem objetivos distintos. A empresa precisa definir o que recuperar, em quanto tempo e por quanto tempo manter."] },
      { heading: "Teste faz parte da estratégia", paragraphs: ["Uma cópia sem teste de restauração não comprova continuidade. Cenários críticos devem ter responsáveis e procedimentos conhecidos."] },
      { heading: "A política depende do risco", paragraphs: ["Volume, criticidade, exigências legais e impacto da indisponibilidade orientam a arquitetura adequada."] },
    ],
  },
  {
    slug: "bi-agronegocio-safra-margem-estoque",
    title: "BI no agronegócio: conectando safra, margem, estoque e crédito",
    description: "Como organizar uma visão gerencial para operações complexas de distribuição de insumos.",
    category: "Agronegócio",
    readingTime: "9 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "A safra muda a leitura do negócio", paragraphs: ["Comparações mensais isoladas podem esconder ciclo, cultura, região e condições comerciais. A modelagem precisa respeitar a lógica da operação."] },
      { heading: "Vendas sem margem não contam a história inteira", paragraphs: ["Cruzar faturamento, desconto, custo, crédito e estoque ajuda a priorizar clientes, produtos e regiões com melhor qualidade de resultado."] },
      { heading: "Integração por etapas", paragraphs: ["ERP, bancos e planilhas podem ser conectados por prioridade, sem afirmar integração nativa antes de avaliar o ambiente."] },
    ],
  },
  {
    slug: "azure-custos-sem-governanca",
    title: "Cinco sinais de que o custo Azure precisa de governança",
    description: "Indícios de recursos ociosos, falta de orçamento e crescimento de consumo sem explicação.",
    category: "Azure",
    readingTime: "6 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "Custo sem responsável cresce silenciosamente", paragraphs: ["Quando recursos não têm dono, orçamento ou finalidade documentada, fica difícil distinguir crescimento necessário de desperdício."] },
      { heading: "Alertas precisam levar a uma ação", paragraphs: ["Monitorar gasto ajuda apenas quando existem limites, responsáveis e uma rotina de revisão de capacidade."] },
      { heading: "FinOps é uma prática contínua", paragraphs: ["Otimização depende de arquitetura, uso e prioridade do negócio. Não é uma promessa fixa de economia."] },
    ],
  },
  {
    slug: "automacao-processos-o-que-priorizar",
    title: "Automação de processos: o que priorizar primeiro",
    description: "Um critério simples para escolher fluxos com volume, repetição e risco relevantes.",
    category: "Automação",
    readingTime: "5 min",
    status: "Rascunho editorial",
    publishedAt: "2026-07-21",
    sections: [
      { heading: "Automatize processos estáveis", paragraphs: ["Uma regra que muda toda semana deve ser organizada antes de virar automação. Caso contrário, a tecnologia apenas acelera a confusão."] },
      { heading: "Meça volume, tempo e risco", paragraphs: ["Tarefas frequentes, com muitas pessoas e possibilidade de erro costumam oferecer bons pontos de partida."] },
      { heading: "Planeje falhas e exceções", paragraphs: ["Logs, alertas, reprocessamento e responsabilidade operacional fazem parte da entrega."] },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
