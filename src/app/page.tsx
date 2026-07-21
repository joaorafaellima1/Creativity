import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Laptop,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { DataDecisionVisual } from "@/components/marketing/DataDecisionVisual";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "BI e Copilot para empresas que usam Microsoft",
  description:
    "A Creativity ativa BI, Copilot e IA aplicada no ecossistema Microsoft para transformar dados reais em decisões melhores.",
  path: "/",
});

const reasons = [
  "Consultoria que já entende o ecossistema Microsoft que você paga",
  "BI aplicado a decisão real, não relatório que ninguém abre",
  "Sem venda empurrada de licença ou equipamento: só o que resolve",
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#071827] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-300">
              BI, IA e Microsoft para gestão
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Sua empresa já paga pela Microsoft. A gente ativa o que falta: dado virando decisão.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              BI, IA aplicada e licenciamento Microsoft para empresas que querem menos planilha solta
              e mais decisão baseada em dado real.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-[#071827] transition hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
                href="#contato"
              >
                Agende um diagnóstico gratuito
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="#solucoes"
              >
                Ver soluções
              </Link>
            </div>
          </div>

          <DataDecisionVisual />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="solucoes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-teal-700">O que fazemos</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#071827] sm:text-4xl">
                Tecnologia que termina em decisão, não em mais uma ferramenta.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              Começamos pela pergunta de negócio. Depois organizamos o dado, ativamos a tecnologia
              Microsoft adequada e colocamos a solução na rotina de quem decide.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="border border-slate-200 bg-[#f7fafb] p-6 md:p-8">
              <span className="grid h-11 w-11 place-items-center bg-[#071827] text-teal-300">
                <BarChart3 aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-7 text-2xl font-semibold text-slate-950">BI &amp; Analytics com IA</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Transformamos dados dispersos em painéis que respondem pergunta de negócio, com IA
                aplicada em cima, não só gráfico bonito.
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-medium text-slate-700">
                <li className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  Indicadores desenhados para uma decisão real
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  Integração de ERP, planilhas e fontes Microsoft
                </li>
              </ul>
            </article>

            <article className="border border-slate-200 bg-[#f7fafb] p-6 md:p-8">
              <span className="grid h-11 w-11 place-items-center bg-teal-100 text-teal-800">
                <Cloud aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-7 text-2xl font-semibold text-slate-950">
                Microsoft Solutions Partner
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Licenciamento Microsoft 365, Copilot e Azure com consultoria de adoção de verdade:
                quem precisa da licença, o que ela resolve, o ROI real.
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-medium text-slate-700">
                <li className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  Dimensionamento antes da compra
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  Adoção conectada aos processos da empresa
                </li>
              </ul>
            </article>
          </div>

          <article className="mt-5 flex flex-col gap-5 border border-slate-200 bg-white p-5 sm:flex-row sm:items-center md:p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center bg-slate-100 text-slate-600">
              <Laptop aria-hidden className="h-5 w-5" />
            </span>
            <div className="max-w-3xl">
              <h3 className="font-semibold text-slate-900">Equipamentos sob demanda</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Fornecimento de equipamentos de TI sob encomenda para clientes já atendidos pela
                Creativity, sem intermediário.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-teal-200 bg-[#dff7f2] py-16 md:py-24" id="construcao-civil">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-800">Especialização emergente</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#071827] sm:text-4xl">
              Estamos aprofundando em dados para construção civil
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Construtoras já têm ERP de obra cheio de dado parado: orçamento, cronograma, medição,
              recebíveis. Estamos desenvolvendo um painel que conecta a esse ERP e mostra, em tempo
              real, custo real x orçado, cronograma x avanço físico e inadimplência da carteira de
              recebíveis.
            </p>
            <Link
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#071827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2b3e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              href="#contato"
            >
              Sua construtora quer participar do programa piloto?
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <div className="border border-teal-300 bg-white p-5 md:p-7">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <span className="grid h-11 w-11 place-items-center bg-teal-100 text-teal-800">
                <Building2 aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-teal-700">Painel em desenvolvimento</p>
                <p className="mt-1 font-semibold text-slate-950">Visão integrada da obra e da carteira</p>
              </div>
            </div>
            <div className="grid gap-5 pt-5 sm:grid-cols-3">
              {[
                ["Custo", "Real x orçado"],
                ["Obra", "Cronograma x avanço"],
                ["Recebíveis", "Carteira e inadimplência"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="sobre">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-700">Por que a Creativity</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#071827] sm:text-4xl">
              Ativamos o valor do que sua empresa já tem.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A conversa não começa por uma licença ou por um dashboard. Começa pela decisão que hoje
              depende de planilha, retrabalho ou informação que chega tarde.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {reasons.map((reason, index) => (
              <div className="flex gap-4 border-b border-slate-200 py-6" key={reason}>
                <span className="text-sm font-semibold text-teal-700">0{index + 1}</span>
                <p className="text-lg font-semibold leading-7 text-slate-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 md:py-24" id="contato">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div>
            <span className="grid h-11 w-11 place-items-center bg-[#071827] text-teal-300">
              <Sparkles aria-hidden className="h-5 w-5" />
            </span>
            <p className="mt-7 text-sm font-semibold uppercase text-teal-700">Próximo passo</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#071827] sm:text-4xl">
              Descubra onde seus dados e suas licenças podem trabalhar melhor.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Em um diagnóstico inicial, entendemos o cenário, a decisão mais urgente e o que já está
              contratado. Sem proposta genérica e sem empurrar ferramenta.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
