import type { Metadata } from "next";
import { company } from "@/config/company";
import { createMetadata } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const values = [
  "Clareza",
  "Confiabilidade",
  "Proximidade",
  "Evolução contínua",
  "Orientação a resultados",
  "Segurança da informação",
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
            A Creativity ajuda empresas a escolher, implantar e evoluir tecnologia com mais clareza.
            Unimos nossa especialidade em dados e Business Intelligence ao licenciamento Microsoft
            e ao acesso a um amplo ecossistema de infraestrutura, cloud, segurança e dispositivos.
          </p>
        </div>
      </section>

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
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={value}>
                <h3 className="font-semibold text-slate-950">{value}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Princípio aplicado ao desenho dos indicadores, à implantação e ao relacionamento
                  consultivo com cada empresa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Converse com a Creativity sobre a tecnologia da sua empresa." />
    </>
  );
}
