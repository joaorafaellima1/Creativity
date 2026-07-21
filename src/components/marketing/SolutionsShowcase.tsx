"use client";

import { useRef, useState } from "react";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ShowcaseItem = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  prompt: string;
  answer: string;
};

const items: ShowcaseItem[] = [
  {
    label: "Business Intelligence",
    eyebrow: "Visão executiva",
    title: "O número certo chega antes da reunião.",
    description:
      "Painéis construídos a partir das decisões da diretoria, com margem, caixa, vendas e operação em uma leitura clara e confiável.",
    points: ["Indicadores com regra definida", "ERP e planilhas conectados", "Acesso por perfil"],
    icon: BarChart3,
    prompt: "Onde a margem está sendo pressionada?",
    answer: "A leitura cruza produto, canal e unidade para revelar o ponto de atenção.",
  },
  {
    label: "Engenharia de dados",
    eyebrow: "Base confiável",
    title: "Dados organizados para não depender de conferência manual.",
    description:
      "Integramos as fontes que já fazem parte da operação e criamos uma base pronta para BI, automação e IA aplicada.",
    points: ["Fontes integradas", "Atualização controlada", "Governança desde a origem"],
    icon: Database,
    prompt: "De onde vem este indicador?",
    answer: "Cada número mantém origem, tratamento e regra de cálculo documentados.",
  },
  {
    label: "Copilot e IA",
    eyebrow: "IA aplicada",
    title: "Perguntas de negócio respondidas com o contexto da empresa.",
    description:
      "A IA trabalha sobre dados organizados para resumir cenários, investigar desvios e acelerar análises que hoje consomem horas.",
    points: ["Contexto do negócio", "Respostas rastreáveis", "Adoção orientada"],
    icon: Sparkles,
    prompt: "O que mudou no resultado desta semana?",
    answer: "A IA compara sinais, destaca desvios e indica onde vale aprofundar a análise.",
  },
  {
    label: "Microsoft",
    eyebrow: "Adoção Microsoft",
    title: "Licença dimensionada para uso real, não para ficar parada.",
    description:
      "Microsoft 365, Copilot e Azure com orientação sobre quem precisa, qual processo melhora e como acompanhar o valor entregue.",
    points: ["Diagnóstico do contratado", "Plano de adoção", "Evolução com governança"],
    icon: Cloud,
    prompt: "Quem realmente precisa de Copilot?",
    answer: "O dimensionamento considera função, rotina, dados disponíveis e ganho esperado.",
  },
  {
    label: "Construção Civil",
    eyebrow: "Especialização emergente",
    title: "Obra, orçamento e recebíveis na mesma visão.",
    description:
      "Um painel em desenvolvimento para conectar o ERP da construtora e acompanhar custo real x orçado, avanço físico e carteira.",
    points: ["Custo da obra", "Cronograma físico", "Recebíveis e inadimplência"],
    icon: Building2,
    prompt: "Qual obra exige ação agora?",
    answer: "Os desvios são priorizados por impacto para orientar a conversa da gestão.",
  },
];

const bars = [36, 51, 44, 62, 57, 72, 66, 84, 77, 93];

export function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = items[activeIndex];
  const Icon = active.icon;

  function focusTab(index: number) {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="mt-12">
      <div
        className="flex gap-2 overflow-x-auto border-b border-neutral-300 pb-4"
        role="tablist"
        aria-label="Soluções da Creativity"
      >
        {items.map((item, index) => (
          <button
            className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              activeIndex === index
                ? "bg-black text-white"
                : "border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-black"
            }`}
            id={`solution-tab-${index}`}
            key={item.label}
            role="tab"
            aria-controls={`solution-panel-${index}`}
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") focusTab(activeIndex + 1);
              if (event.key === "ArrowLeft") focusTab(activeIndex - 1);
              if (event.key === "Home") focusTab(0);
              if (event.key === "End") focusTab(items.length - 1);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="grid overflow-hidden rounded-lg bg-[#0b0b0b] text-white lg:grid-cols-[0.78fr_1.22fr]"
        id={`solution-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`solution-tab-${activeIndex}`}
      >
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-black">
              <Icon aria-hidden className="h-5 w-5" />
            </span>
            <p className="mt-8 text-xs font-semibold uppercase text-cyan-300">{active.eyebrow}</p>
            <h3 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">{active.title}</h3>
            <p className="mt-5 text-base leading-7 text-neutral-400">{active.description}</p>
          </div>
          <ul className="mt-9 grid gap-3 text-sm text-neutral-200">
            {active.points.map((point) => (
              <li className="flex gap-3" key={point}>
                <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-[520px] bg-[#e9f0f4] p-4 text-neutral-950 sm:p-7 lg:min-h-[620px] lg:p-10">
          <div className="flex h-full flex-col rounded-lg border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-7">
            <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-blue-600">Creativity Decision View</p>
                <p className="mt-1 font-semibold">Sinais consolidados da operação</p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 aria-hidden className="h-4 w-4" />
                Fontes conectadas
              </span>
            </div>

            <div className="grid flex-1 gap-4 py-5 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">Tendência consolidada</p>
                  <BarChart3 aria-hidden className="h-5 w-5 text-blue-600" />
                </div>
                <div className="mt-8 flex h-48 items-end gap-2 border-b border-l border-neutral-300 px-3 pt-3">
                  {bars.map((height, index) => (
                    <span
                      className={`data-rise w-full ${index > 6 ? "bg-[#0b5cff]" : "bg-neutral-300"}`}
                      key={`${activeIndex}-${height}-${index}`}
                      style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col rounded-lg bg-[#0b5cff] p-5 text-white">
                <Sparkles aria-hidden className="h-5 w-5" />
                <p className="mt-8 text-xs font-semibold uppercase text-blue-100">Pergunte aos dados</p>
                <p className="mt-3 text-lg font-semibold leading-7">{active.prompt}</p>
                <p className="mt-auto border-t border-white/25 pt-5 text-sm leading-6 text-blue-100">
                  {active.answer}
                </p>
              </div>
            </div>

            <div className="grid gap-3 border-t border-neutral-200 pt-5 sm:grid-cols-3">
              {["ERP", "Microsoft 365", "Planilhas críticas"].map((source) => (
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600" key={source}>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
