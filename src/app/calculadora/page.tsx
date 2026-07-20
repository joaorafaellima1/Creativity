import type { Metadata } from "next";
import { Calculator, FileSearch, MessageCircle, SlidersHorizontal } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { ProjectCostCalculator } from "@/components/forms/ProjectCostCalculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Calculadora de Projeto de BI",
  description:
    "Calcule uma estimativa preliminar para projeto de Business Intelligence, dashboards, integração de dados e automação de relatórios.",
  path: "/calculadora",
});

const steps = [
  {
    icon: SlidersHorizontal,
    title: "Informe o escopo",
    description: "Áreas, fontes de dados, dashboards, unidades, atualização e complexidade.",
  },
  {
    icon: Calculator,
    title: "Veja a faixa estimada",
    description: "A calculadora apresenta implantação, mensalidade e prazo provável.",
  },
  {
    icon: FileSearch,
    title: "Valide com diagnóstico",
    description: "A proposta final depende da análise das fontes e regras de negócio.",
  },
  {
    icon: MessageCircle,
    title: "Envie pelo WhatsApp",
    description: "O resumo vai pré-preenchido para acelerar a conversa comercial.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Calculadora" }]} />
          </div>
          <p className="text-sm font-semibold uppercase text-cyan-200">Calculadora de investimento</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Estime o investimento para um projeto de BI antes da primeira conversa.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Informe alguns dados sobre a empresa, fontes de informação e áreas desejadas para gerar
            uma faixa preliminar de implantação, acompanhamento mensal e prazo estimado.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {steps.map((step) => (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={step.title}>
              <step.icon aria-hidden className="h-5 w-5 text-cyan-700" />
              <h2 className="mt-4 text-base font-semibold text-slate-950">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectCostCalculator />
        </div>
      </section>
    </>
  );
}
