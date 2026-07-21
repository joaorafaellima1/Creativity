import type { Metadata } from "next";
import { BarChart3, Clock3, ShieldCheck } from "lucide-react";
import { OpportunityCalculator } from "@/components/forms/OpportunityCalculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Calculadora de Oportunidade em Tecnologia",
  description: "Estime o custo mensal de relatórios manuais e licenças sem uso para identificar onde a tecnologia pode gerar eficiência.",
  path: "/calculadora",
});

const benefits = [
  { icon: Clock3, title: "Tempo manual", description: "Converta horas recorrentes da equipe em custo mensal estimado." },
  { icon: BarChart3, title: "Oportunidade visível", description: "Compare esforço operacional e licenças contratadas sem uso." },
  { icon: ShieldCheck, title: "Sem promessa artificial", description: "Use o resultado como hipótese para um diagnóstico responsável." },
];

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400"><Breadcrumbs items={[{ label: "Calculadora" }]} /></div>
          <p className="mt-8 text-sm font-semibold uppercase text-teal-300">Calculadora de oportunidade</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Quanto a operação manual e as licenças sem uso podem estar custando?</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">Faça uma simulação simples para priorizar a conversa. O objetivo não é prometer economia, mas tornar visível o custo que hoje fica espalhado entre pessoas, planilhas e contratos.</p>
        </div>
      </section>
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return <div className="flex gap-4" key={benefit.title}><Icon className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden /><div><h2 className="font-semibold text-neutral-950">{benefit.title}</h2><p className="mt-1 text-sm leading-6 text-neutral-600">{benefit.description}</p></div></div>;
          })}
        </div>
      </section>
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8"><OpportunityCalculator /></div>
      </section>
    </>
  );
}

