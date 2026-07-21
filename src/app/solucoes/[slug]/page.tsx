import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Database, ShieldCheck, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { createWhatsappUrl } from "@/config/company";
import {
  getPortfolioSolution,
  implementationSteps,
  portfolioSolutions,
} from "@/data/portfolio";
import { breadcrumbSchema, createMetadata, faqSchema, serviceSchema } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getPortfolioSolution(slug);

  if (!solution) return {};

  return createMetadata({
    title: solution.seoTitle,
    description: solution.seoDescription,
    path: `/solucoes/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getPortfolioSolution(slug);
  if (!solution) notFound();

  const related = solution.related
    .map((relatedSlug) => getPortfolioSolution(relatedSlug))
    .filter((item) => Boolean(item));
  const whatsappUrl = createWhatsappUrl(
    `Olá, conheci a solução de ${solution.name} da Creativity e gostaria de conversar sobre o meu cenário.`,
  );

  return (
    <>
      <section className="bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400">
            <Breadcrumbs items={[{ label: "Soluções", href: "/solucoes" }, { label: solution.name }]} />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-black">
                <Icon name={solution.icon} />
              </span>
              <p className="mt-7 text-sm font-semibold uppercase text-cyan-300">{solution.pillar}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                {solution.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{solution.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0048d8]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="solution_whatsapp_click"
                >
                  Falar sobre esta solução <ArrowRight aria-hidden className="h-4 w-4" />
                </a>
                <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10" href="/diagnostico">
                  Fazer diagnóstico gratuito
                </Link>
              </div>
            </div>
            <SolutionInterfaceMockup name={solution.shortName} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">Problema que resolvemos</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl">
              Quando esse ponto fica sem estrutura, a operação sente.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">{solution.problem}</p>
          </div>
          <div className="border-t border-neutral-300">
            {solution.impacts.map((impact, index) => (
              <div className="flex gap-5 border-b border-neutral-300 py-6" key={impact}>
                <span className="text-sm font-semibold text-blue-600">0{index + 1}</span>
                <p className="text-lg font-semibold leading-7 text-neutral-900">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f0] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ListSection eyebrow="O que entregamos" title="Da arquitetura à adoção" items={solution.deliverables} />
            <ListSection eyebrow="Aplicações" title="Onde a solução entra na rotina" items={solution.applications} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase text-blue-600">Processo de implantação</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium text-black sm:text-4xl">
            Começamos pelo problema e seguimos até a solução entrar em operação.
          </h2>
          <div className="mt-10 grid gap-6 border-y border-neutral-300 py-8 md:grid-cols-5">
            {implementationSteps.map(([title, description], index) => (
              <div key={title}>
                <span className="text-xs font-semibold text-blue-600">0{index + 1}</span>
                <h3 className="mt-4 font-semibold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <Database aria-hidden className="h-6 w-6 text-cyan-300" />
            <p className="mt-6 text-sm font-semibold uppercase text-cyan-300">Tecnologias avaliadas por cenário</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Arquitetura aderente ao ambiente atual.</h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {solution.technologies.map((technology) => (
                <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-200" key={technology}>{technology}</span>
              ))}
            </div>
          </div>
          <div>
            <ShieldCheck aria-hidden className="h-6 w-6 text-cyan-300" />
            <p className="mt-6 text-sm font-semibold uppercase text-cyan-300">Segurança e governança</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Controle desde o início.</h2>
            <p className="mt-5 text-base leading-8 text-neutral-400">{solution.governance}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">Resultados esperados</p>
            <h2 className="mt-4 text-3xl font-medium text-black sm:text-4xl">Efeitos que o projeto busca gerar.</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-500">
              Resultados dependem do cenário, da qualidade dos dados, da implantação e da adoção. Não representam garantia comercial.
            </p>
          </div>
          <ul className="grid gap-4">
            {solution.outcomes.map((outcome) => (
              <li className="flex gap-3 rounded-lg border border-neutral-200 p-5 text-base font-semibold text-neutral-900" key={outcome}>
                <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />{outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f3f3f0] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase text-blue-600">Perguntas frequentes</p>
          <h2 className="mt-4 text-3xl font-medium text-black sm:text-4xl">O que costuma surgir antes do projeto.</h2>
          <div className="mt-8 border-t border-neutral-300">
            {solution.faqs.map((faq) => (
              <details className="group border-b border-neutral-300 py-5" key={faq.question}>
                <summary className="flex cursor-pointer items-center justify-between gap-5 text-lg font-semibold text-black">
                  {faq.question}<span className="text-blue-600 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-7 text-neutral-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="text-3xl font-medium text-black">Soluções relacionadas</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => item ? (
              <Link className="rounded-lg border border-neutral-200 p-6 hover:border-blue-300 hover:bg-blue-50" href={`/solucoes/${item.slug}`} key={item.slug}>
                <span className="text-xs font-semibold uppercase text-blue-600">{item.pillar}</span>
                <h3 className="mt-4 text-lg font-semibold text-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{item.summary}</p>
              </Link>
            ) : null)}
          </div>
        </div>
      </section>

      <section className="bg-[#0b5cff] py-14 text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-100">Próximo passo</p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold">Vamos avaliar como {solution.name} se aplica ao seu cenário.</h2>
          </div>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar com especialista
          </a>
        </div>
      </section>

      <JsonLd data={[
        serviceSchema(solution.name, solution.seoDescription, `/solucoes/${solution.slug}`),
        faqSchema(solution.faqs),
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Soluções", path: "/solucoes" },
          { name: solution.name, path: `/solucoes/${solution.slug}` },
        ]),
      ]} />
    </>
  );
}

function ListSection({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-black">{title}</h2>
      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-neutral-700" key={item}>
            <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionInterfaceMockup({ name }: { name: string }) {
  const bars = [42, 61, 53, 74, 66, 86, 77, 94];
  return (
    <div className="rounded-lg border border-white/15 bg-white p-4 text-black shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <div><p className="text-xs font-semibold uppercase text-blue-600">Dados demonstrativos</p><p className="mt-1 font-semibold">{name}</p></div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700"><CheckCircle2 aria-hidden className="h-4 w-4" />Ambiente conectado</span>
      </div>
      <div className="grid gap-3 py-4 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-xs font-semibold uppercase text-neutral-500">Sinais da operação</p>
          <div className="mt-6 flex h-36 items-end gap-2 border-b border-l border-neutral-300 px-2">
            {bars.map((height, index) => <span className={`w-full ${index > 4 ? "bg-blue-600" : "bg-neutral-300"}`} key={`${height}-${index}`} style={{ height: `${height}%` }} />)}
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-[#0b5cff] p-4 text-white">
          <Sparkles aria-hidden className="h-5 w-5" />
          <p className="mt-8 text-xs font-semibold uppercase text-blue-100">Próxima ação</p>
          <p className="mt-3 text-base font-semibold leading-6">Prioridades organizadas para orientar a decisão.</p>
        </div>
      </div>
    </div>
  );
}
