import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { createMetadata, serviceSchema } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { DashboardShowcaseSection } from "@/components/marketing/DashboardShowcaseSection";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { SolutionCard } from "@/components/marketing/SolutionCard";
import { TechnologyPortfolioSection } from "@/components/marketing/TechnologyPortfolioSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = createMetadata({
  title: "Soluções de Tecnologia e Business Intelligence",
  description:
    "Conheça as soluções da Creativity em Business Intelligence, Microsoft, cloud, segurança, infraestrutura e automação.",
  path: "/solucoes",
});

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Soluções" }]} />
          </div>
          <p className="text-sm font-semibold uppercase text-cyan-200">Portfólio Creativity</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-5xl">
            Soluções para a empresa decidir, produzir e crescer.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Dados e Business Intelligence, licenciamento Microsoft, cloud, segurança e
            infraestrutura em um atendimento comercial consultivo.
          </p>
        </div>
      </section>

      <TechnologyPortfolioSection headingLevel="page" />

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-24" id="business-intelligence">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Especialidade em dados"
            title="Business Intelligence para áreas críticas da empresa."
            description="As soluções podem começar por uma área específica e evoluir para uma plataforma gerencial integrada."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      <DashboardShowcaseSection />
      <ProcessSection />
      <CTASection title="Comece pelo dashboard que mais impacta a sua gestão." />
      <JsonLd
        data={solutions.slice(0, 6).map((solution) =>
          serviceSchema(solution.name, solution.fullDescription, `/solucoes/${solution.slug}`),
        )}
      />
    </>
  );
}
