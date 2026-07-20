import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    description:
      "Entendimento dos objetivos, processos, sistemas, planilhas e indicadores que orientam a gestão da empresa.",
  },
  {
    title: "Mapeamento dos dados",
    description:
      "Identificação das fontes, regras de negócio, cadastros, tratamentos necessários e pontos de integração.",
  },
  {
    title: "Protótipo",
    description:
      "Criação dos primeiros layouts e validação dos indicadores com os gestores antes do desenvolvimento completo.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Integração, tratamento dos dados, construção dos dashboards, testes e refinamento das visões gerenciais.",
  },
  {
    title: "Implantação",
    description:
      "Publicação, treinamento dos usuários, documentação e acompanhamento inicial da rotina de uso.",
  },
  {
    title: "Evolução",
    description:
      "Suporte, melhorias contínuas e inclusão de novos indicadores conforme a gestão amadurece.",
  },
];

export const integrationSources = [
  "ERPs",
  "CRMs",
  "Sistemas financeiros",
  "Bancos de dados",
  "APIs",
  "Planilhas Excel",
  "Arquivos CSV",
  "Sistemas legados",
  "Plataformas comerciais",
  "Sistemas de estoque e logística",
];

export const differentiators = [
  "Soluções desenvolvidas conforme a realidade do cliente.",
  "Entendimento do negócio antes da tecnologia.",
  "Indicadores definidos junto aos gestores.",
  "Dados centralizados e padronizados.",
  "Dashboards objetivos e fáceis de utilizar.",
  "Visão estratégica, tática e operacional.",
  "Implantação acompanhada.",
  "Possibilidade de evolução contínua.",
  "Segurança e controle de acesso.",
  "Atendimento próximo e consultivo.",
];
