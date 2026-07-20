export type CalculatorOption = {
  label: string;
  value: string;
  description: string;
  implementation: number;
  monthly: number;
};

export type SelectOption = {
  label: string;
  value: string;
  multiplier?: number;
  implementation?: number;
  monthly?: number;
  weeks?: number;
};

export const calculatorPricing = {
  hourlyRate: 120,
  baseImplementation: 4000,
  baseMonthly: 480,
  dashboardPrice: 1200,
  dashboardMonthly: 90,
  automationImplementation: 2000,
  automationMonthly: 200,
  rangePercent: 0.16,
  minimumImplementation: 8000,
  minimumMonthly: 650,
};

export const calculatorAreas: CalculatorOption[] = [
  {
    label: "Diretoria / BI Executivo",
    value: "executivo",
    description: "Indicadores consolidados, metas, alertas e leitura gerencial.",
    implementation: 1800,
    monthly: 150,
  },
  {
    label: "Comercial e vendas",
    value: "comercial",
    description: "Vendas, metas, carteira, vendedores, produtos e regiões.",
    implementation: 2400,
    monthly: 200,
  },
  {
    label: "Financeiro",
    value: "financeiro",
    description: "Fluxo de caixa, contas a pagar, receber e inadimplência.",
    implementation: 2600,
    monthly: 230,
  },
  {
    label: "Estoque e compras",
    value: "estoque",
    description: "Giro, cobertura, ruptura, curva ABC, compras e fornecedores.",
    implementation: 2800,
    monthly: 250,
  },
  {
    label: "Logística",
    value: "logistica",
    description: "Entregas, atrasos, fretes, rotas, ocorrências e nível de serviço.",
    implementation: 2200,
    monthly: 200,
  },
  {
    label: "Margem e rentabilidade",
    value: "margem",
    description: "Margem por cliente, produto, vendedor, canal e região.",
    implementation: 2600,
    monthly: 250,
  },
  {
    label: "Agronegócio",
    value: "agronegocio",
    description: "Safra, cultura, produtores, crédito, barter, lotes e assistência técnica.",
    implementation: 3600,
    monthly: 320,
  },
];

export const calculatorSources: CalculatorOption[] = [
  {
    label: "Planilhas Excel / CSV",
    value: "planilhas",
    description: "Arquivos estruturados ou modelos atuais de acompanhamento.",
    implementation: 800,
    monthly: 70,
  },
  {
    label: "ERP ou sistema interno",
    value: "erp",
    description: "Extração de informações comerciais, financeiras ou operacionais.",
    implementation: 2400,
    monthly: 220,
  },
  {
    label: "Banco de dados",
    value: "banco",
    description: "Consulta, modelagem e tratamento a partir de base relacional.",
    implementation: 2000,
    monthly: 180,
  },
  {
    label: "APIs",
    value: "api",
    description: "Integração com sistemas, CRMs, plataformas ou serviços externos.",
    implementation: 3000,
    monthly: 270,
  },
  {
    label: "Sistemas legados",
    value: "legado",
    description: "Bases antigas, exportações manuais ou estruturas pouco padronizadas.",
    implementation: 4000,
    monthly: 350,
  },
];

export const companySizeOptions: SelectOption[] = [
  { label: "Até 20 colaboradores", value: "ate-20", multiplier: 0.95 },
  { label: "21 a 80 colaboradores", value: "21-80", multiplier: 1 },
  { label: "81 a 200 colaboradores", value: "81-200", multiplier: 1.12 },
  { label: "Acima de 200 colaboradores", value: "200-plus", multiplier: 1.25 },
];

export const unitOptions: SelectOption[] = [
  { label: "1 unidade", value: "1", implementation: 0, monthly: 0, weeks: 0 },
  { label: "2 a 3 unidades", value: "2-3", implementation: 1000, monthly: 100, weeks: 1 },
  { label: "4 a 8 unidades", value: "4-8", implementation: 2000, monthly: 180, weeks: 2 },
  { label: "Acima de 8 unidades", value: "8-plus", implementation: 3600, monthly: 300, weeks: 3 },
];

export const updateFrequencyOptions: SelectOption[] = [
  { label: "Semanal ou sob demanda", value: "semanal", implementation: 0, monthly: 0, weeks: 0 },
  { label: "Diária automatizada", value: "diaria", implementation: 1200, monthly: 130, weeks: 1 },
  { label: "Várias vezes ao dia", value: "varias", implementation: 2400, monthly: 250, weeks: 2 },
  { label: "Próximo de tempo real", value: "tempo-real", implementation: 4000, monthly: 430, weeks: 3 },
];

export const complexityOptions: SelectOption[] = [
  { label: "Dados organizados e regras simples", value: "simples", multiplier: 0.95, weeks: 0 },
  { label: "Regras de negócio moderadas", value: "moderada", multiplier: 1.15, weeks: 1 },
  { label: "Múltiplas regras, cadastros e exceções", value: "alta", multiplier: 1.38, weeks: 3 },
];

export const supportOptions: SelectOption[] = [
  { label: "Somente entrega inicial", value: "entrega", monthly: 0 },
  { label: "Suporte e pequenos ajustes", value: "suporte", monthly: 600 },
  { label: "Evolução contínua dos indicadores", value: "evolucao", monthly: 1300 },
];
