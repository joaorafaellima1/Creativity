import { Database } from "lucide-react";
import { integrationSources } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntegrationsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <SectionHeading
          eyebrow="Integrações"
          title="Conectamos fontes de dados sem prometer integrações nativas não confirmadas."
          description="Cada projeto avalia a disponibilidade, qualidade e forma de acesso às informações antes de definir a arquitetura."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {integrationSources.map((source) => (
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4" key={source}>
              <Database aria-hidden className="h-5 w-5 text-cyan-700" />
              <span className="text-sm font-medium text-slate-700">{source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
