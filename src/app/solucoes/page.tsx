import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { getSolutionsByPillar, portfolioPillars } from "@/data/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Soluções de Tecnologia, Dados e IA",
  description:
    "Cloud, segurança, dados, BI, inteligência artificial, software e infraestrutura conectados para transformar operação em resultado.",
  path: "/solucoes",
});

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="[&_a]:text-neutral-400 [&_span]:text-neutral-400"><Breadcrumbs items={[{ label: "Soluções" }]} /></div>
          <p className="text-sm font-semibold uppercase text-cyan-300">Ecossistema Creativity</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
            Um único parceiro para conectar, proteger, analisar e evoluir.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Da infraestrutura à inteligência, cada solução é desenhada para trabalhar com o ambiente atual e gerar um efeito claro na operação.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-600">Seis pilares conectados</p>
              <h2 className="mt-4 text-4xl font-medium text-black sm:text-5xl">Tecnologia organizada pela necessidade do negócio.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-neutral-600 lg:justify-self-end">
              Você pode começar por uma dor específica. A arquitetura mantém espaço para integrar segurança, cloud, dados, software e suporte sem criar novas ilhas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {portfolioPillars.map((pillar) => (
              <section className="rounded-lg border border-neutral-200 bg-[#f7f7f5] p-6 sm:p-8" id={pillar.id} key={pillar.id}>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-black text-white"><Icon name={pillar.icon} /></span>
                <h2 className="mt-7 text-2xl font-semibold text-black">{pillar.name}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{pillar.description}</p>
                <div className="mt-6 grid gap-2 border-y border-neutral-300 py-5 sm:grid-cols-2">
                  <p className="text-sm"><span className="block text-xs font-semibold uppercase text-neutral-500">Problema</span><span className="mt-1 block font-medium text-neutral-800">{pillar.problem}</span></p>
                  <p className="text-sm"><span className="block text-xs font-semibold uppercase text-blue-600">Resultado buscado</span><span className="mt-1 block font-medium text-neutral-800">{pillar.result}</span></p>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {getSolutionsByPillar(pillar).map((solution) => (
                    <li key={solution.slug}>
                      <Link className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-neutral-800 hover:text-blue-700" href={`/solucoes/${solution.slug}`}>
                        {solution.shortName}<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce9ff] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Como escolher</p>
            <h2 className="mt-4 text-3xl font-medium text-black sm:text-4xl">Comece pelo impacto, não pela ferramenta.</h2>
            <p className="mt-5 text-base leading-8 text-neutral-700">O diagnóstico organiza riscos, custos, retrabalho e oportunidades para definir a primeira frente de trabalho.</p>
            <Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800" href="/diagnostico">
              Fazer diagnóstico gratuito <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Redução de custos e desperdícios", "Segurança e continuidade", "Menos retrabalho manual", "Decisões mais rápidas", "Integração entre sistemas", "Capacidade para crescer"].map((item) => (
              <div className="flex gap-3 rounded-lg border border-blue-200 bg-white p-5 text-sm font-semibold text-neutral-900" key={item}>
                <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-blue-600" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
