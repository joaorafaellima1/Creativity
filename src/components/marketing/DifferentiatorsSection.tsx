import { ShieldCheck } from "lucide-react";
import { differentiators } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DifferentiatorsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Tecnologia começa com entendimento do negócio."
          description="Antes de indicar uma licença, equipamento ou dashboard, a Creativity entende objetivos, ambiente e prioridades."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => (
            <div className="rounded-lg border border-slate-200 bg-white p-5" key={item}>
              <ShieldCheck aria-hidden className="h-5 w-5 text-emerald-600" />
              <p className="mt-4 text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
