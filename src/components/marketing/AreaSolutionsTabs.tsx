"use client";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const areas = [
  { name: "Diretoria", question: "A empresa está melhorando resultado ou apenas aumentando volume?", metrics: ["Visão executiva", "Resultado", "Caixa", "Margem", "Metas", "Riscos", "Projeções"] },
  { name: "Comercial", question: "Onde estão as melhores oportunidades de receita e margem?", metrics: ["Faturamento", "Carteira", "Metas", "Margem", "Vendedores", "Clientes", "Produtos", "Regiões"] },
  { name: "Financeiro", question: "Quais movimentos pressionam caixa e resultado?", metrics: ["Fluxo de caixa", "Pagar e receber", "Inadimplência", "DRE", "Orçado x realizado", "Despesas"] },
  { name: "Estoque e Logística", question: "O capital está disponível no produto e lugar certos?", metrics: ["Giro", "Cobertura", "Ruptura", "Excesso", "Validade", "Lotes", "Fretes", "Entregas"] },
  { name: "Compras", question: "O que comprar, quando e com qual fornecedor?", metrics: ["Evolução de preços", "Fornecedores", "Prazos", "Pedidos", "Estoque projetado", "Saving"] },
  { name: "RH", question: "Quais sinais de pessoas afetam custo e operação?", metrics: ["Headcount", "Turnover", "Absenteísmo", "Horas extras", "Unidades", "Custos com pessoal"] },
  { name: "TI", question: "Onde custo, risco ou capacidade exigem ação?", metrics: ["Disponibilidade", "Chamados", "Custos", "Ativos", "Licenças", "Segurança", "Backups", "Cloud"] },
];

const chartHeights = [38, 54, 47, 68, 61, 76, 71, 88, 82, 95];

export function AreaSolutionsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = areas[activeIndex];

  function selectAndFocus(index: number) {
    const next = (index + areas.length) % areas.length;
    setActiveIndex(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="mt-10">
      <div className="flex gap-2 overflow-x-auto pb-4" role="tablist" aria-label="Soluções por área">
        {areas.map((area, index) => (
          <button
            className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${activeIndex === index ? "bg-black text-white" : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"}`}
            id={`area-tab-${index}`}
            key={area.name}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`area-panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            ref={(element) => { refs.current[index] = element; }}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") selectAndFocus(activeIndex + 1);
              if (event.key === "ArrowLeft") selectAndFocus(activeIndex - 1);
              if (event.key === "Home") selectAndFocus(0);
              if (event.key === "End") selectAndFocus(areas.length - 1);
            }}
          >{area.name}</button>
        ))}
      </div>

      <div className="grid overflow-hidden rounded-lg border border-neutral-200 bg-white lg:grid-cols-[0.78fr_1.22fr]" id={`area-panel-${activeIndex}`} role="tabpanel" aria-labelledby={`area-tab-${activeIndex}`}>
        <div className="flex flex-col justify-between bg-[#0a0a0a] p-7 text-white sm:p-9">
          <div>
            <p className="text-xs font-semibold uppercase text-cyan-300">{active.name}</p>
            <h3 className="mt-4 text-3xl font-medium leading-tight">{active.question}</h3>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {active.metrics.map((metric) => <li className="rounded-full border border-white/20 px-3 py-2 text-xs text-neutral-300" key={metric}>{metric}</li>)}
          </ul>
        </div>
        <div className="bg-[#e9f0f4] p-4 sm:p-7">
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
              <div><p className="text-xs font-semibold uppercase text-blue-600">Dados demonstrativos</p><p className="mt-1 font-semibold text-black">Painel de {active.name}</p></div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700"><CheckCircle2 aria-hidden className="h-4 w-4" />Atualização controlada</span>
            </div>
            <div className="grid gap-4 py-5 sm:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-xs font-semibold uppercase text-neutral-500">Evolução do período</p>
                <div className="mt-6 flex h-40 items-end gap-2 border-b border-l border-neutral-300 px-2">
                  {chartHeights.map((height, index) => <span className={`data-rise w-full ${index > 6 ? "bg-blue-600" : "bg-neutral-300"}`} key={`${activeIndex}-${height}-${index}`} style={{ height: `${height}%`, animationDelay: `${index * 35}ms` }} />)}
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-amber-200 bg-amber-50 p-4">
                <AlertCircle aria-hidden className="h-5 w-5 text-amber-700" />
                <p className="mt-7 text-xs font-semibold uppercase text-amber-700">Ponto de atenção</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-neutral-900">Um desvio relevante foi priorizado para análise da gestão.</p>
                <p className="mt-auto pt-6 text-xs leading-5 text-neutral-600">Exemplo demonstrativo, sem dados de cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
