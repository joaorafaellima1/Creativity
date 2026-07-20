import { CheckCircle2 } from "lucide-react";
import { whatsappUrl } from "@/config/company";
import { getDashboardByKey } from "@/data/dashboards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";

const valueBadges = [
  "Business Intelligence e dashboards em Power BI",
  "Microsoft 365, Azure, Copilot e Power Platform",
  "Infraestrutura Dell, Lenovo e ecossistema Ingram Micro",
  "Atendimento consultivo, do diagnóstico à evolução",
];

export function Hero() {
  const dashboard = getDashboardByKey("executivo");

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,145,178,0.24),transparent_42%),linear-gradient(180deg,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-200">
            Business Intelligence, Microsoft e infraestrutura
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Business Intelligence, licenciamento Microsoft e infraestrutura em um só parceiro.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Ajudamos pequenas e médias empresas de agronegócio, distribuição, indústria, varejo e
            serviços a organizar dados, licenciar software e equipar a operação com um único ponto
            de contato.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              external
              href={whatsappUrl}
              icon="whatsapp"
              variant="primary"
              eventName="hero_demo_request"
            >
              Falar com um especialista
            </ButtonLink>
            <ButtonLink href="/tecnologia" variant="dark" eventName="hero_solutions_click">
              Conhecer as três frentes
            </ButtonLink>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {valueBadges.map((badge) => (
              <li className="flex items-center gap-2" key={badge}>
                <CheckCircle2 aria-hidden className="h-4 w-4 text-emerald-300" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <DashboardPreview
            compact
            dashboard={dashboard}
            className="border-white/10 bg-white shadow-2xl shadow-cyan-950/40"
          />
        </div>
      </div>
    </section>
  );
}
