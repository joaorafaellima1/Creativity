import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = ["Dados dispersos", "Integração", "Organização", "Análise", "Decisão", "Resultado"];

export function JourneySection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHeading
            eyebrow="Transformação"
            title="Seus dados já existem. Nós transformamos esses dados em inteligência."
            description="A Creativity conecta os dados da sua empresa, organiza as informações e cria painéis gerenciais que facilitam o acompanhamento dos indicadores mais importantes."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div className="rounded-lg border border-slate-200 bg-white p-5" key={step}>
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-50 text-sm font-semibold text-cyan-700">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 ? <ArrowRight aria-hidden className="h-4 w-4 text-slate-400" /> : null}
                </div>
                <p className="mt-5 font-semibold text-slate-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
