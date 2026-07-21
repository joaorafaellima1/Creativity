import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sobre a Creativity",
  description:
    "Conheça a Creativity, consultoria brasileira de BI, IA aplicada e adoção Microsoft para empresas.",
  path: "/sobre",
});

const principles = [
  ["Pergunta antes da ferramenta", "Cada projeto começa pela decisão que precisa melhorar, não pelo produto que pode ser vendido."],
  ["Dado com contexto", "Indicadores têm origem, regra e responsável claros para que a gestão confie na leitura."],
  ["Adoção de verdade", "A solução só gera valor quando entra na rotina das pessoas que trabalham e decidem."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Sobre" }]} />
          </div>
          <p className="text-sm font-semibold uppercase text-cyan-300">Sobre a Creativity</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Somos quem ativa o valor do ecossistema Microsoft que sua empresa já tem.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A Creativity é uma empresa brasileira de TI focada em BI, IA aplicada e adoção
            Microsoft. Trabalhamos ao lado da gestão para transformar dado disperso em informação
            confiável e tecnologia contratada em uso real.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">Nosso papel</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">
              Menos ferramenta isolada. Mais capacidade de decidir.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Não atuamos como uma revenda que encerra a conversa na licença, nem como uma fábrica
              de painéis decorativos. Conectamos dados, processos e pessoas para a solução resolver
              uma necessidade concreta do negócio.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {principles.map(([title, description]) => (
              <div className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[0.7fr_1.3fr]" key={title}>
                <h3 className="flex gap-3 font-semibold text-slate-950">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  {title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f0] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold text-black">
            Vamos começar pela decisão que sua empresa precisa tomar melhor.
          </h2>
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0048d8]"
            href="/#contato"
          >
            Fale com a gente
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
