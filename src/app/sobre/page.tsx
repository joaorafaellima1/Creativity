import type { Metadata } from "next";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { TrustBar } from "@/components/marketing/TrustBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const values = [
  {
    name: "Clareza",
    description:
      "Indicadores com origem e regra de cálculo definidas, para que cada número tenha significado claro para quem decide.",
  },
  {
    name: "Confiabilidade",
    description:
      "Dados tratados e validados antes de chegar ao painel, reduzindo conferências manuais e dúvidas sobre a informação.",
  },
  {
    name: "Proximidade",
    description:
      "Acompanhamento consultivo da primeira conversa à evolução do projeto, com um time acessível para a rotina.",
  },
  {
    name: "Evolução contínua",
    description:
      "Soluções que crescem com a empresa, incorporando novos usuários, indicadores, fontes de dados e necessidades.",
  },
  {
    name: "Orientação a resultados",
    description:
      "Cada recomendação parte de uma necessidade real do negócio, seja para decidir, produzir, proteger ou crescer.",
  },
  {
    name: "Segurança da informação",
    description:
      "Controle de acesso e boas práticas de proteção considerados do armazenamento à visualização e ao uso diário.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Sobre a Creativity Tecnologia",
  description:
    "Conheça a Creativity Tecnologia, empresa de Business Intelligence, licenciamento Microsoft, cloud e infraestrutura.",
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Sobre" }]} />
          </div>
          <p className="text-sm font-semibold uppercase text-cyan-200">Sobre</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-5xl">
            {company.brandName}: tecnologia orientada ao que o negócio precisa.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A Creativity atua em três frentes: Business Intelligence e dashboards, licenciamento
            Microsoft e infraestrutura corporativa. Conectamos soluções Microsoft ao ecossistema
            Ingram Micro, incluindo tecnologias Dell e Lenovo, para atender pequenas e médias
            empresas com um único parceiro consultivo.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Posicionamento</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Uma conversa para diferentes necessidades de tecnologia.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              O trabalho começa pelo diagnóstico do cenário. A partir dele, direcionamos projetos de
              dados, licenças, nuvem, segurança, equipamentos ou infraestrutura com atendimento próximo.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={value.name}>
                <h3 className="font-semibold text-slate-950">{value.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Converse com a Creativity sobre a tecnologia da sua empresa." />
    </>
  );
}
