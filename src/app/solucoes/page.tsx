import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Cloud, Laptop } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Soluções de BI, Copilot e Microsoft",
  description:
    "BI e Analytics com IA, Microsoft 365, Copilot e Azure com consultoria de adoção para empresas.",
  path: "/solucoes",
});

const services = [
  {
    icon: BarChart3,
    eyebrow: "BI & Analytics com IA",
    title: "Do dado disperso à pergunta que a gestão precisa responder.",
    description:
      "Organizamos fontes, regras e indicadores para entregar painéis confiáveis. A IA entra depois do contexto, ajudando a analisar desvios, investigar causas e acelerar a leitura da operação.",
    items: [
      "Mapeamento da decisão e dos indicadores críticos",
      "Integração de ERP, planilhas e fontes corporativas",
      "Governança de acesso, origem e regra de cálculo",
      "IA aplicada sobre uma base de dados organizada",
    ],
  },
  {
    icon: Cloud,
    eyebrow: "Microsoft Solutions Partner",
    title: "Licenciamento acompanhado de adoção e resultado.",
    description:
      "Apoiamos a escolha e o uso de Microsoft 365, Copilot e Azure. O foco não é vender mais licenças, mas dimensionar quem precisa, o problema que será resolvido e como o investimento entra na rotina.",
    items: [
      "Revisão do cenário contratado e do uso atual",
      "Dimensionamento por perfil e necessidade",
      "Plano de adoção para Microsoft 365 e Copilot",
      "Evolução de nuvem e dados com Azure",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-[#071827] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Soluções" }]} />
          </div>
          <p className="text-sm font-semibold uppercase text-teal-300">Soluções</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Dados e Microsoft trabalhando para a mesma decisão.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A Creativity conecta BI, IA aplicada e adoção Microsoft a problemas concretos de gestão.
            A tecnologia entra como meio, nunca como ponto de partida.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="border-t-2 border-teal-500 pt-7" key={service.eyebrow}>
                  <Icon aria-hidden className="h-6 w-6 text-teal-700" />
                  <p className="mt-6 text-sm font-semibold uppercase text-teal-700">{service.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#071827]">{service.title}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>
                  <ul className="mt-7 grid gap-3 text-sm font-medium text-slate-700">
                    {service.items.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 md:py-20" id="como-funciona">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-teal-700">Como trabalhamos</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#071827] sm:text-4xl">
            Um caminho curto entre o problema e a adoção.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Diagnóstico", "Entendemos a decisão, o dado disponível e o que a empresa já paga."],
              ["02", "Ativação", "Organizamos dados, licenças e integrações em torno de um objetivo definido."],
              ["03", "Adoção", "Colocamos a solução na rotina, acompanhamos o uso e orientamos a evolução."],
            ].map(([number, title, description]) => (
              <div className="border-t border-slate-300 pt-5" key={number}>
                <span className="text-sm font-semibold text-teal-700">{number}</span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-slate-100 text-slate-600">
            <Laptop aria-hidden className="h-5 w-5" />
          </span>
          <div className="max-w-3xl">
            <h2 className="font-semibold text-slate-900">Equipamentos sob demanda</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Para clientes já atendidos, também viabilizamos equipamentos de TI sob encomenda.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071827] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-300">Primeiro passo</p>
            <h2 className="mt-2 text-2xl font-semibold">Comece pela decisão que hoje chega tarde.</h2>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-[#071827] hover:bg-teal-200"
            href="/#contato"
          >
            Agendar diagnóstico gratuito
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          serviceSchema(
            "BI & Analytics com IA",
            "Business Intelligence e IA aplicada a decisões reais de gestão.",
            "/solucoes",
          ),
          serviceSchema(
            "Microsoft 365, Copilot e Azure",
            "Licenciamento Microsoft com consultoria de adoção e dimensionamento.",
            "/solucoes",
          ),
        ]}
      />
    </>
  );
}
