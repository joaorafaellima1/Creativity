import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { whatsappUrl } from "@/config/company";
import { ingramPortfolio, microsoftSolutions } from "@/data/technology";
import { createMetadata, serviceSchema } from "@/lib/seo";
import { CTASection } from "@/components/marketing/CTASection";
import { TechnologyPortfolioSection } from "@/components/marketing/TechnologyPortfolioSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = createMetadata({
  title: "Microsoft, Cloud e Infraestrutura para Empresas",
  description:
    "Licenciamento Microsoft e soluções de cloud, segurança, infraestrutura e tecnologia com atendimento consultivo da Creativity.",
  path: "/tecnologia",
});

const buyingJourney = [
  {
    number: "01",
    title: "Entendemos a necessidade",
    description: "Objetivo, quantidade de usuários, ambiente atual, prazo, orçamento e prioridades.",
  },
  {
    number: "02",
    title: "Selecionamos a solução",
    description: "Comparamos alternativas, compatibilidade, licenciamento e capacidade de evolução.",
  },
  {
    number: "03",
    title: "Apresentamos a proposta",
    description: "A cotação reúne escopo, condições, disponibilidade e próximos passos com clareza.",
  },
  {
    number: "04",
    title: "Acompanhamos a jornada",
    description: "A Creativity permanece próxima para novas demandas, dados, automação e evolução.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="[&_a]:text-slate-300 [&_span]:text-slate-300">
            <Breadcrumbs items={[{ label: "Tecnologia" }]} />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">
                Tecnologia para empresas
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
                Um parceiro para dados, software, nuvem e infraestrutura.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A Creativity combina Business Intelligence, licenciamento Microsoft e acesso ao
                ecossistema Ingram Micro para encontrar a tecnologia adequada a cada necessidade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contato" variant="dark" eventName="technology_diagnostic_click">
                  Solicitar atendimento
                </ButtonLink>
                <ButtonLink
                  external
                  href={whatsappUrl}
                  icon="whatsapp"
                  eventName="technology_whatsapp_click"
                >
                  Falar com um especialista
                </ButtonLink>
              </div>
            </div>
            <div className="border-l border-white/15 pl-6">
              <p className="text-sm font-semibold text-white">Uma jornada, três competências</p>
              <ul className="mt-5 grid gap-4 text-sm leading-6 text-slate-300">
                {[
                  "Clareza de gestão com dados e dashboards.",
                  "Licenciamento Microsoft alinhado ao uso real.",
                  "Infraestrutura, segurança e dispositivos sob consulta.",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TechnologyPortfolioSection headingLevel="page" />

      <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-24" id="microsoft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Microsoft</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
                Licenciamento com orientação, não apenas uma lista de planos.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Avaliamos usuários, recursos, segurança e crescimento para direcionar a solução
                Microsoft adequada. A contratação e as condições são confirmadas em proposta.
              </p>
              <ButtonLink href="/contato" variant="secondary" className="mt-7">
                Pedir uma cotação Microsoft
              </ButtonLink>
            </div>
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {microsoftSolutions.map((solution) => (
                <article className="bg-white p-5" key={solution.name}>
                  <Icon className="h-5 w-5 text-cyan-700" name={solution.icon} />
                  <h3 className="mt-4 font-semibold text-slate-950">{solution.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="ingram">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ecossistema Ingram Micro"
            title="Um amplo portfólio, apresentado a partir da sua necessidade."
            description="A Creativity pode apoiar a aquisição de soluções disponíveis no ecossistema Ingram Micro. Em vez de expor o cliente a milhares de itens, fazemos a triagem por aplicação, compatibilidade, disponibilidade e orçamento."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ingramPortfolio.map((category) => (
              <article className="border-t border-slate-300 py-5" key={category.name}>
                <Icon className="h-6 w-6 text-cyan-700" name={category.icon} />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-5 border-l-4 border-emerald-500 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Não encontrou a categoria que procura?</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Envie a marca, o modelo ou o objetivo. Consultamos o portfólio e retornamos com as opções.
              </p>
            </div>
            <ButtonLink href="/contato" variant="dark" className="shrink-0">
              Consultar uma solução
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Atendimento consultivo"
            title="Da necessidade à proposta, com menos complexidade."
            description="O cliente fala com a Creativity; nós organizamos a demanda e conduzimos os próximos passos."
            align="center"
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {buyingJourney.map((step) => (
              <li className="border-t-2 border-cyan-500 pt-5" key={step.number}>
                <span className="text-sm font-semibold text-cyan-700">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Conte o que sua empresa precisa. A Creativity organiza o caminho."
        description="Fale sobre licenças, usuários, equipamentos, infraestrutura, segurança ou dados. Retornamos com as perguntas certas e uma proposta objetiva."
      />
      <JsonLd
        data={[
          serviceSchema(
            "Licenciamento Microsoft",
            "Licenciamento Microsoft e orientação para produtividade, nuvem, segurança e aplicações empresariais.",
            "/tecnologia#microsoft",
          ),
          serviceSchema(
            "Infraestrutura e soluções de tecnologia",
            "Soluções de infraestrutura, segurança, cloud, dispositivos e software por meio do ecossistema Ingram Micro.",
            "/tecnologia#ingram",
          ),
        ]}
      />
    </>
  );
}
