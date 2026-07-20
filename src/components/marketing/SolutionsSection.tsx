import { solutions } from "@/data/solutions";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/marketing/SolutionCard";

export function SolutionsSection({ limit }: { limit?: number }) {
  const visibleSolutions = typeof limit === "number" ? solutions.slice(0, limit) : solutions;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Inteligência de dados"
            title="Dashboards criados para a realidade de cada área."
            description="Nossa especialidade combina indicadores, regras de negócio e visualizações orientadas à decisão."
          />
          {limit ? (
            <ButtonLink href="/solucoes" variant="secondary">
              Ver todas as soluções
            </ButtonLink>
          ) : null}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleSolutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
