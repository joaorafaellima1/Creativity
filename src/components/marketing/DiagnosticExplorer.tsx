"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { getDashboardByKey } from "@/data/dashboards";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/types/content";

type Scenario = {
  key: string;
  title: string;
  area: string;
  icon: IconName;
  dashboardKey: string;
  href: string;
  pain: string;
  promise: string;
  indicators: string[];
  decisions: string[];
};

const scenarios: Scenario[] = [
  {
    key: "diretoria",
    title: "Quero enxergar a empresa inteira sem depender de reunião para montar número.",
    area: "Diretoria",
    icon: "briefcase",
    dashboardKey: "executivo",
    href: "/solucoes/bi-executivo",
    pain: "Resultados, metas, margem, caixa e operação ficam em relatórios separados.",
    promise: "Uma visão executiva consolida o que precisa de atenção, com alertas e comparação de metas.",
    indicators: ["Faturamento", "Margem", "Meta", "Clientes ativos", "Pedidos em atraso"],
    decisions: [
      "Onde agir nesta semana.",
      "Quais áreas estão desviando da meta.",
      "Quais indicadores precisam de aprofundamento.",
    ],
  },
  {
    key: "comercial",
    title: "Preciso saber quem vende, o que vende, onde perde e onde existe oportunidade.",
    area: "Comercial",
    icon: "lineChart",
    dashboardKey: "comercial",
    href: "/solucoes/bi-comercial",
    pain: "Metas, vendedores, regiões, produtos e clientes são acompanhados em controles paralelos.",
    promise: "O BI mostra desempenho comercial com leitura por carteira, mix, conversão e ticket médio.",
    indicators: ["Meta versus realizado", "Ticket médio", "Conversão", "Carteira", "Mix"],
    decisions: [
      "Quais clientes priorizar.",
      "Quais vendedores precisam de apoio.",
      "Quais produtos estão perdendo participação.",
    ],
  },
  {
    key: "financeiro",
    title: "Quero controlar caixa, vencimentos e inadimplência antes da pressão chegar.",
    area: "Financeiro",
    icon: "calculator",
    dashboardKey: "financeiro",
    href: "/solucoes/bi-financeiro",
    pain: "Contas a pagar, receber, despesas e projeções não ficam em uma leitura única.",
    promise: "A visão financeira organiza fluxo, vencimentos, inadimplência e projeções para decisão.",
    indicators: ["Fluxo de caixa", "Contas a receber", "Inadimplência", "Despesas", "Projeções"],
    decisions: [
      "Quais vencimentos pressionam o caixa.",
      "Onde cobrar primeiro.",
      "Quais despesas exigem revisão.",
    ],
  },
  {
    key: "agronegocio",
    title: "Preciso acompanhar safra, cultura, produtor, crédito, estoque e barter juntos.",
    area: "Agronegócio",
    icon: "tractor",
    dashboardKey: "agronegocio",
    href: "/solucoes/bi-agronegocio",
    pain: "A operação rural mistura vendas por safra, estoque por lote, crédito, entregas e assistência técnica.",
    promise: "O painel conecta safra, cultura, carteira, insumos, vencimentos, barter e logística rural.",
    indicators: ["Safra", "Culturas", "Produtores", "Crédito", "Barter", "Lotes"],
    decisions: [
      "Quais produtores exigem ação.",
      "Quais lotes e filiais precisam de atenção.",
      "Como está o contratado versus entregue.",
    ],
  },
];

export function DiagnosticExplorer() {
  const [activeKey, setActiveKey] = useState(scenarios[0].key);
  const active = scenarios.find((scenario) => scenario.key === activeKey) || scenarios[0];
  const dashboard = getDashboardByKey(active.dashboardKey);

  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-200">Diagnóstico rápido</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Encontre a primeira área onde o BI pode virar decisão prática.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            O caminho de compra fica mais claro quando o gestor reconhece a própria rotina e vê quais
            decisões deixam de depender de esforço manual.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3" role="tablist" aria-label="Cenários de diagnóstico">
            {scenarios.map((scenario) => (
              <button
                className={`rounded-lg border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                  scenario.key === activeKey
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                }`}
                key={scenario.key}
                role="tab"
                aria-selected={scenario.key === activeKey}
                type="button"
                onClick={() => setActiveKey(scenario.key)}
              >
                <span className="flex items-center gap-3">
                  <Icon name={scenario.icon} />
                  <span className="text-sm font-semibold uppercase">{scenario.area}</span>
                </span>
                <span className="mt-3 block text-base font-semibold leading-6">{scenario.title}</span>
              </button>
            ))}
          </div>

          <div className="grid min-w-0 gap-6">
            <div className="grid gap-5 rounded-lg border border-white/10 bg-white p-5 text-slate-950 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-cyan-700">{active.area}</p>
                <h3 className="mt-3 text-2xl font-semibold">{active.title}</h3>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
                    <p className="text-xs font-semibold uppercase text-rose-700">Gargalo comum</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{active.pain}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                    <p className="text-xs font-semibold uppercase text-emerald-700">O que muda</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{active.promise}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.indicators.map((indicator) => (
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700" key={indicator}>
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <p className="text-sm font-semibold uppercase text-cyan-200">Decisões que ficam visíveis</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-200">
                  {active.decisions.map((decision) => (
                    <li className="flex gap-2" key={decision}>
                      <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      {decision}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
                  href={active.href}
                >
                  Ver essa solução
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <DashboardPreview compact dashboard={dashboard} className="border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
