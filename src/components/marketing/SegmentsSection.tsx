import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { segments } from "@/data/segments";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SegmentsSection({ limit }: { limit?: number }) {
  const visibleSegments = typeof limit === "number" ? segments.slice(0, limit) : segments;

  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Segmentos"
          title="Soluções adaptadas para empresas que precisam decidir com dados confiáveis."
          description="Com destaque para distribuidoras de insumos agrícolas e operações que precisam consolidar vendas, estoque, financeiro e logística."
          align="center"
          className="[&_*]:text-white [&_p:last-child]:text-slate-300"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleSegments.map((segment) => (
            <article className="rounded-lg border border-white/10 bg-white/5 p-5" key={segment.slug}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300 text-slate-950">
                <Icon name={segment.icon} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{segment.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{segment.description}</p>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
                href={`/segmentos/${segment.slug}`}
              >
                Ver segmento
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
