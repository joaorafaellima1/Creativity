import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getDashboardByKey } from "@/data/dashboards";
import { getSegmentBySlug, segments } from "@/data/segments";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";
import { CTASection } from "@/components/marketing/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return segments.map((segment) => ({ slug: segment.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);

  if (!segment) {
    return {};
  }

  return createMetadata({
    title: `BI para ${segment.name}`,
    description: segment.description,
    path: `/segmentos/${segment.slug}`,
  });
}

export default async function SegmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);

  if (!segment) {
    notFound();
  }

  const dashboard = getDashboardByKey(segment.dashboardKey);

  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Segmentos", href: "/segmentos" }, { label: segment.name }]} />
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300 text-slate-950">
            <Icon name={segment.icon} />
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-5xl">{segment.headline}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{segment.description}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase text-cyan-700">Prioridades</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">O que acompanhar</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
              {segment.priorities.map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase text-cyan-700">Oportunidades</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Como os dados ajudam</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
              {segment.opportunities.map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DashboardPreview dashboard={dashboard} />
        </div>
      </section>
      <CTASection title={`Transforme os dados de ${segment.name.toLowerCase()} em decisões mais claras.`} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
          { name: segment.name, path: `/segmentos/${segment.slug}` },
        ])}
      />
    </>
  );
}
