import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Implantação consultiva, com validação antes da tecnologia tomar forma."
          description="O processo foi pensado para reduzir incertezas, alinhar indicadores e entregar dashboards que façam sentido na rotina dos gestores."
          align="center"
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li className="rounded-lg border border-slate-200 bg-slate-50 p-6" key={step.title}>
              <span className="text-sm font-semibold text-cyan-700">Etapa {index + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
