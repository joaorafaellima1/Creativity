export type IconName =
  | "barChart"
  | "briefcase"
  | "calculator"
  | "chartSpline"
  | "checkCircle"
  | "cloud"
  | "database"
  | "factory"
  | "fileCog"
  | "headphones"
  | "landmark"
  | "laptop"
  | "layers"
  | "lineChart"
  | "map"
  | "network"
  | "package"
  | "route"
  | "server"
  | "shield"
  | "shoppingCart"
  | "sparkles"
  | "tractor"
  | "truck"
  | "users"
  | "warehouse";

export type Solution = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  indicators: string[];
  benefit: string;
  icon: IconName;
  dashboardKey: string;
  businessQuestions: string[];
  implementationNotes: string[];
};

export type Segment = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: IconName;
  dashboardKey: string;
  priorities: string[];
  opportunities: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Kpi = {
  label: string;
  value: string;
  helper: string;
  status: "positivo" | "atenção" | "neutro";
};

export type ChartPoint = {
  label: string;
  value: number;
  helper?: string;
};

export type DashboardTableRow = {
  item: string;
  value: string;
  detail: string;
  status: "Em dia" | "Atenção" | "Crítico" | "Oportunidade";
};

export type DashboardDemo = {
  key: string;
  title: string;
  eyebrow: string;
  description: string;
  kpis: Kpi[];
  trend: ChartPoint[];
  bars: ChartPoint[];
  table: DashboardTableRow[];
  alerts: string[];
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  segment: string;
  status: "Autorizado" | "Nome preservado";
  challenge: string;
  solution: string;
  indicators: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};
