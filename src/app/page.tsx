import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SolutionsShowcase } from "@/components/marketing/SolutionsShowcase";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "BI e Copilot para empresas que usam Microsoft",
  description:
    "A Creativity ativa BI, Copilot e IA aplicada no ecossistema Microsoft para transformar dados reais em decisões melhores.",
  path: "/",
});

const technologies = ["Power BI", "Microsoft 365", "Copilot", "Azure", "Power Platform"];

const dailyBenefits = [
  {
    icon: Database,
    title: "Fontes conectadas, visão única",
    description:
      "ERP, planilhas e ferramentas Microsoft organizados para todos discutirem o mesmo número.",
  },
  {
    icon: BarChart3,
    title: "Decisões diárias baseadas em fatos",
    description:
      "Indicadores claros para reduzir o achismo nas conversas sobre margem, caixa e operação.",
  },
  {
    icon: Sparkles,
    title: "IA aplicada ao contexto real",
    description:
      "Copilot e análises assistidas trabalhando sobre dados preparados e perguntas de negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Governança desde o início",
    description:
      "Origem, regra de cálculo e acesso definidos para a gestão confiar no que está vendo.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="relative mx-auto min-h-[calc(100svh-132px)] max-w-[1400px] overflow-hidden rounded-lg bg-black sm:min-h-[calc(100svh-144px)]">
          <Image
            alt="Decisor analisando informações de negócio com reflexos de dados"
            className="hero-drift object-cover object-center"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1400px"
            src="/hero-decision.jpg"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex min-h-[calc(100svh-132px)] items-end justify-center px-5 py-10 text-center text-white sm:min-h-[calc(100svh-144px)] sm:px-8 sm:py-14">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase text-cyan-200 sm:text-sm">
                Dados, IA e Microsoft trabalhando juntos
              </p>
              <h1 className="mt-4 text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-7xl">
                Sua empresa já paga pela Microsoft. A gente ativa o que falta: dado virando decisão.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-neutral-200 sm:text-lg sm:leading-8">
                BI, IA aplicada e licenciamento Microsoft para empresas que querem menos planilha
                solta e mais decisão baseada em dado real.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href="#contato"
                >
                  Fale com um especialista
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-black/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-black/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href="#solucoes"
                >
                  Explore nossas soluções
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase text-blue-600">Ecossistema que já faz parte da empresa</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
            A base Microsoft que sua empresa já paga pode entregar muito mais.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            Conectamos dados, licenças e adoção para transformar ferramentas contratadas em uma
            capacidade real de gestão.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 border-y border-neutral-200 py-7">
            {technologies.map((technology) => (
              <span className="text-base font-semibold text-neutral-500" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f0] py-16 md:py-24" id="solucoes">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-600">Tudo o que precisa para decidir melhor</p>
              <h2 className="mt-4 text-4xl font-medium leading-tight text-black sm:text-5xl lg:text-6xl">
                Dados que trabalham pela sua empresa.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-neutral-600 lg:justify-self-end">
              A Creativity estrutura a base, entrega a visão e aplica IA onde ela gera resultado.
              Cada frente pode começar separada e evoluir dentro do mesmo plano de negócio.
            </p>
          </div>
          <SolutionsShowcase />
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 text-white md:py-24" id="microsoft">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-300">Microsoft Solutions Partner</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                Licenciamento com estratégia de adoção, não com venda empurrada.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400">
                Apoiamos Microsoft 365, Copilot e Azure a partir da rotina das pessoas, dos dados
                disponíveis e do resultado que a empresa precisa capturar.
              </p>
              <Link
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0b5cff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#0048d8]"
                href="#contato"
              >
                Revisar o cenário Microsoft
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Microsoft 365", "Produtividade dimensionada por perfil"],
                ["Copilot", "Adoção ligada a casos de uso reais"],
                ["Power BI", "Gestão orientada por indicadores confiáveis"],
                ["Azure", "Dados e aplicações preparados para evoluir"],
              ].map(([name, description]) => (
                <div className="rounded-lg border border-white/15 p-6" key={name}>
                  <span className="text-xs font-semibold uppercase text-cyan-300">Microsoft</span>
                  <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="metodo">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">Método Creativity</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-black sm:text-5xl">
              Da pergunta à rotina, sem projeto solto.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">
              O trabalho começa pela decisão que precisa melhorar e termina quando a solução entra
              no dia a dia da empresa.
            </p>
          </div>

          <div className="border-t border-neutral-300">
            {[
              ["01", "Diagnóstico", "Mapeamos a decisão, o dado disponível e o que a empresa já contratou."],
              ["02", "Arquitetura", "Definimos fontes, regras, acessos e a tecnologia adequada ao objetivo."],
              ["03", "Ativação", "Construímos a visão, conectamos a solução e validamos com quem decide."],
              ["04", "Adoção", "Colocamos na rotina, acompanhamos o uso e orientamos a próxima evolução."],
            ].map(([number, title, description]) => (
              <div className="grid gap-4 border-b border-neutral-300 py-7 sm:grid-cols-[0.18fr_0.45fr_1fr]" key={number}>
                <span className="text-sm font-semibold text-blue-600">{number}</span>
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className="text-sm leading-7 text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce9ff] py-16 md:py-24" id="construcao-civil">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-12">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-blue-600">
              <Building2 aria-hidden className="h-5 w-5" />
            </span>
            <p className="mt-8 text-sm font-semibold uppercase text-blue-700">Construção Civil</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-black sm:text-5xl">
              Estamos aprofundando em dados para construção civil.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Construtoras já têm ERP de obra cheio de dado parado: orçamento, cronograma, medição e
              recebíveis. Estamos desenvolvendo uma visão que conecta esses sinais para mostrar onde
              agir primeiro.
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              href="#contato"
            >
              Participar do programa piloto
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-xl shadow-blue-950/10 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase text-blue-600">Visão integrada da operação</p>
                <p className="mt-1 font-semibold text-black">Obras e carteira em um único painel</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                Em desenvolvimento
              </span>
            </div>
            <div className="grid gap-3 py-5 sm:grid-cols-3">
              {[
                ["Custo", "Real x orçado"],
                ["Cronograma", "Planejado x avanço"],
                ["Recebíveis", "Carteira e atraso"],
              ].map(([label, value]) => (
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4" key={label}>
                  <p className="text-xs font-semibold uppercase text-neutral-500">{label}</p>
                  <p className="mt-3 text-sm font-semibold text-black">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex h-44 items-end gap-3 rounded-lg bg-[#0b0b0b] px-5 pt-8">
              {[35, 58, 47, 72, 64, 86, 76, 94].map((height, index) => (
                <span
                  className={`w-full ${index > 4 ? "bg-[#4b8cff]" : "bg-neutral-600"}`}
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-blue-600">Projetado para o dia a dia do negócio</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-black sm:text-5xl lg:text-6xl">
              Clareza para a gestão. Simplicidade para quem usa.
            </h2>
          </div>
          <div className="mt-12 grid border-y border-neutral-300 md:grid-cols-2 lg:grid-cols-4">
            {dailyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  className={`py-8 md:p-7 ${index < dailyBenefits.length - 1 ? "border-b border-neutral-300 lg:border-b-0 lg:border-r" : ""}`}
                  key={benefit.title}
                >
                  <Icon aria-hidden className="h-5 w-5 text-blue-600" />
                  <h3 className="mt-8 text-xl font-semibold leading-7 text-black">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0b5cff] py-16 text-white md:py-24" id="contato">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-100">Comece com clareza</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Agende uma conversa sobre a decisão que precisa melhorar.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100">
              Entendemos seu cenário Microsoft, seus dados e a prioridade da gestão. O primeiro passo
              é um diagnóstico objetivo, sem proposta genérica.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
