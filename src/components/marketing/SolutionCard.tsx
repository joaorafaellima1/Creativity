import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/types/content";
import { Icon } from "@/components/ui/Icon";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
          <Icon name={solution.icon} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{solution.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{solution.shortDescription}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase text-slate-500">Indicadores principais</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {solution.indicators.slice(0, 4).map((indicator) => (
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700" key={indicator}>
              {indicator}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-700">{solution.benefit}</p>
      <Link
        className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
        href={`/solucoes/${solution.slug}`}
      >
        Ver detalhes
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    </article>
  );
}
