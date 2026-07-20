import type { Metadata } from "next";
import { segments } from "@/data/segments";
import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { DashboardShowcaseSection } from "@/components/marketing/DashboardShowcaseSection";
import { SegmentsSection } from "@/components/marketing/SegmentsSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Segmentos atendidos",
  description:
    "Soluções de BI para agronegócio, distribuidoras, indústrias, atacado, varejo, serviços e empresas com múltiplas unidades.",
  path: "/segmentos",
});

export default function SegmentsPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Segmentos" }]} />
          <p className="text-sm font-semibold uppercase text-cyan-700">Segmentos</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-slate-950 md:text-5xl">
            Inteligência de dados para empresas com operação, gestão e crescimento.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A Creativity estrutura dashboards para diferentes contextos empresariais, com destaque
            para distribuidoras de insumos agrícolas e operações com dados comerciais, financeiros e
            logísticos espalhados.
          </p>
        </div>
      </section>
      <SegmentsSection />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-700">Destaque para o agronegócio</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Distribuidoras de insumos agrícolas precisam de visões por safra, cultura, produtor,
              crédito, estoque e logística.
            </h2>
            <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
              {segments[0].priorities.concat(segments[0].opportunities).map((item) => (
                <p className="rounded-lg bg-white p-4" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DashboardShowcaseSection />
      <CTASection title="Veja como seus indicadores podem ficar claros por segmento." />
    </>
  );
}
