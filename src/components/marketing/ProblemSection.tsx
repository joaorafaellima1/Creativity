import { AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  "Informações espalhadas em diferentes sistemas.",
  "Relatórios manuais e demorados.",
  "Falta de confiança nos números.",
  "Dificuldade para identificar perdas e oportunidades.",
  "Falta de visão consolidada da empresa.",
  "Indicadores disponíveis somente depois do problema acontecer.",
  "Dependência de poucas pessoas para gerar relatórios.",
  "Dificuldade para comparar metas e resultados.",
];

export function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problema"
          title="Decisões importantes não podem depender de planilhas desatualizadas."
          description="Quando dados ficam espalhados, a empresa perde tempo discutindo versões dos números em vez de agir sobre o que eles mostram."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={problem}>
              <AlertCircle aria-hidden className="h-5 w-5 text-amber-600" />
              <p className="mt-4 text-sm leading-6 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
