import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { technologyPillars } from "@/data/technology";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TechnologyPortfolioSectionProps = {
  headingLevel?: "home" | "page";
};

export function TechnologyPortfolioSection({
  headingLevel = "home",
}: TechnologyPortfolioSectionProps) {
  const isPage = headingLevel === "page";

  return (
    <section className="bg-white py-16 md:py-24" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Frentes de atuação"
            title={
              isPage
                ? "Tecnologia organizada a partir do que a empresa precisa resolver."
                : "Um parceiro para dados, software e infraestrutura."
            }
            description="A Creativity conecta especialização própria, licenciamento e um amplo ecossistema de tecnologia em uma jornada comercial consultiva."
          />
          {!isPage ? (
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
              href="/tecnologia"
            >
              Conhecer todo o portfólio
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {technologyPillars.map((pillar, index) => (
            <article
              className="group flex h-full flex-col border-t-4 border-cyan-500 bg-slate-50 p-6 transition hover:bg-slate-100"
              key={pillar.id}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-cyan-200">
                  <Icon name={pillar.icon} />
                </span>
                <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase text-cyan-700">{pillar.eyebrow}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.description}</p>
              <ul className="mt-5 grid gap-2">
                {pillar.capabilities.map((capability) => (
                  <li className="flex gap-2 text-sm text-slate-700" key={capability}>
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {capability}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900">
                {pillar.outcome}
              </p>
              <Link
                className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                href={pillar.href}
              >
                Explorar esta frente
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
