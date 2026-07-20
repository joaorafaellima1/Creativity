import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getDashboardByKey } from "@/data/dashboards";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return createMetadata({
    title: solution.name,
    description: solution.fullDescription,
    path: `/solucoes/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const dashboard = getDashboardByKey(solution.dashboardKey);
  const related = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Soluções", href: "/solucoes" }, { label: solution.name }]} />
          </div>
          <div className="flex max-w-4xl flex-col gap-5">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300 text-slate-950">
              <Icon name={solution.icon} />
            </span>
            <p className="text-sm font-semibold uppercase text-cyan-200">Solução de BI</p>
            <h1 className="text-4xl font-semibold md:text-5xl">{solution.name}</h1>
            <p className="text-lg leading-8 text-slate-300">{solution.fullDescription}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contato" variant="dark">
                Solicitar diagnóstico
              </ButtonLink>
              <ButtonLink href="/solucoes" variant="primary">
                Ver outras soluções
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Indicadores</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">O que pode ser acompanhado</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{solution.benefit}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {solution.indicators.map((indicator) => (
                <span className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700" key={indicator}>
                  {indicator}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Perguntas que o BI ajuda a responder</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {solution.businessQuestions.map((question) => (
                  <li className="flex gap-2" key={question}>
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">Pontos de implantação</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {solution.implementationNotes.map((note) => (
                  <li className="flex gap-2" key={note}>
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DashboardPreview dashboard={dashboard} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">Soluções relacionadas</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <a
                className="rounded-lg border border-slate-200 bg-white p-5 hover:border-cyan-300 hover:shadow-md"
                href={`/solucoes/${item.slug}`}
                key={item.slug}
              >
                <p className="text-sm font-semibold text-cyan-700">{item.name}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Vamos desenhar uma solução de ${solution.name} para a sua empresa?`} />
      <JsonLd
        data={[
          serviceSchema(solution.name, solution.fullDescription, `/solucoes/${solution.slug}`),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Soluções", path: "/solucoes" },
            { name: solution.name, path: `/solucoes/${solution.slug}` },
          ]),
        ]}
      />
    </>
  );
}
