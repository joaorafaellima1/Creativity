import type { IconName } from "@/types/content";

export type TechnologyPillar = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  outcome: string;
  icon: IconName;
  href: string;
  capabilities: string[];
};

export const technologyPillars: TechnologyPillar[] = [
  {
    id: "dados",
    eyebrow: "Especialidade Creativity",
    name: "Dados e Business Intelligence",
    description:
      "Dashboards, integração de dados e automação para transformar informações dispersas em gestão clara.",
    outcome: "Mais visibilidade para decidir e agir.",
    icon: "barChart",
    href: "/solucoes#business-intelligence",
    capabilities: ["Power BI e dashboards", "Integração de dados", "Automação de relatórios"],
  },
  {
    id: "microsoft",
    eyebrow: "Licenciamento e nuvem",
    name: "Soluções Microsoft",
    description:
      "Orientação comercial e licenciamento para produtividade, colaboração, nuvem, segurança e aplicações.",
    outcome: "A licença certa para cada cenário.",
    icon: "cloud",
    href: "/tecnologia#microsoft",
    capabilities: ["Microsoft 365 e Copilot", "Azure", "Power Platform e Dynamics 365"],
  },
  {
    id: "infraestrutura",
    eyebrow: "Ecossistema Ingram Micro",
    name: "Infraestrutura e tecnologia",
    description:
      "Acesso consultivo a um amplo portfólio de fabricantes, produtos e soluções corporativas.",
    outcome: "Tecnologia compatível com a operação.",
    icon: "server",
    href: "/tecnologia#ingram",
    capabilities: ["Computação e servidores", "Redes e segurança", "Cloud, colaboração e periféricos"],
  },
];

export const microsoftSolutions = [
  {
    name: "Microsoft 365 e Copilot",
    description: "Produtividade, colaboração, comunicação e recursos de IA para as equipes.",
    icon: "sparkles" as IconName,
  },
  {
    name: "Azure",
    description: "Serviços de nuvem, infraestrutura, dados, backup e continuidade para diferentes cenários.",
    icon: "cloud" as IconName,
  },
  {
    name: "Power Platform",
    description: "Power BI, Power Apps, Power Automate e Copilot Studio para dados e processos.",
    icon: "barChart" as IconName,
  },
  {
    name: "Dynamics 365",
    description: "Aplicações empresariais para relacionamento, vendas, atendimento e operações.",
    icon: "briefcase" as IconName,
  },
  {
    name: "Segurança Microsoft",
    description: "Recursos de identidade, proteção de dispositivos, dados e ambientes em nuvem.",
    icon: "shield" as IconName,
  },
  {
    name: "Windows e servidores",
    description: "Licenciamento para estações de trabalho, servidores e ambientes corporativos.",
    icon: "server" as IconName,
  },
];

export const ingramPortfolio = [
  {
    name: "Computadores e mobilidade",
    description: "Notebooks, desktops, estações de trabalho, tablets e dispositivos para equipes.",
    icon: "laptop" as IconName,
  },
  {
    name: "Data center e armazenamento",
    description: "Servidores, storage, virtualização, backup e continuidade da operação.",
    icon: "server" as IconName,
  },
  {
    name: "Redes e conectividade",
    description: "Switches, Wi-Fi corporativo, conectividade e componentes de infraestrutura.",
    icon: "network" as IconName,
  },
  {
    name: "Segurança da informação",
    description: "Proteção de endpoints, redes, identidades, dados e ambientes em nuvem.",
    icon: "shield" as IconName,
  },
  {
    name: "Cloud e software",
    description: "Soluções em nuvem, assinaturas, softwares e serviços digitais para empresas.",
    icon: "cloud" as IconName,
  },
  {
    name: "Colaboração e periféricos",
    description: "Monitores, impressão, áudio e vídeo, salas de reunião, acessórios e comunicação.",
    icon: "headphones" as IconName,
  },
];
