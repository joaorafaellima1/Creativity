import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { IntegrationsSection } from "@/components/marketing/IntegrationsSection";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Como funciona a implantação de BI",
  description:
    "Conheça o processo de diagnóstico, mapeamento, protótipo, desenvolvimento, implantação e evolução dos dashboards.",
  path: "/como-funciona",
});

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Como funciona" }]} />
          <p className="text-sm font-semibold uppercase text-cyan-700">Como funciona</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-950 md:text-5xl">
            Do diagnóstico à evolução contínua dos indicadores.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A implantação começa pelo entendimento do negócio e avança para dados, protótipos,
            dashboards, treinamento e melhorias contínuas.
          </p>
        </div>
      </section>
      <ProcessSection />
      <IntegrationsSection />
      <CTASection title="Vamos mapear as fontes de dados da sua empresa?" />
    </>
  );
}
