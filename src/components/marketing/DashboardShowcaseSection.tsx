import { DashboardShowcase } from "@/components/dashboards/DashboardShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DashboardShowcaseSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboards demonstrativos"
          title="Telas de análise com dados fictícios, coerentes e identificados."
          description="Os mockups abaixo mostram formatos de leitura possíveis. Eles não representam clientes reais nem copiam interfaces de marcas específicas."
          align="center"
        />
        <div className="mt-10">
          <DashboardShowcase />
        </div>
      </div>
    </section>
  );
}
