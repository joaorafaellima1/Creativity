import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { IconName } from "@/types/content";

const comparisons: Array<{
  title: string;
  icon: IconName;
  today: string;
  withCreativity: string;
  href: string;
}> = [
  {
    title: "Licenciamento Microsoft",
    icon: "cloud",
    today:
      "Licenças compradas por hábito, usuários com planos desajustados e renovações sem uma visão consolidada.",
    withCreativity:
      "Dimensionamento por perfil de uso, segurança e crescimento, com orientação para Microsoft 365, Azure, Copilot e Power Platform.",
    href: "/tecnologia#microsoft",
  },
  {
    title: "Infraestrutura corporativa",
    icon: "server",
    today:
      "Equipamentos e componentes adquiridos isoladamente, com dúvidas de compatibilidade, disponibilidade e evolução.",
    withCreativity:
      "Curadoria de soluções Dell, Lenovo e do ecossistema Ingram Micro a partir da operação, do orçamento e do prazo.",
    href: "/tecnologia#ingram",
  },
];

export function TechnologyContrastSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Escolhas mais claras"
          title="Comprar tecnologia não deveria significar escolher sozinho."
          description="A Creativity reduz complexidade antes da cotação, conectando necessidade, licenciamento e infraestrutura em uma recomendação coerente."
        />

        <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
          {comparisons.map((comparison) => (
            <article className="bg-white p-6" key={comparison.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-cyan-200">
                  <Icon name={comparison.icon} />
                </span>
                <h3 className="text-xl font-semibold text-slate-950">{comparison.title}</h3>
              </div>
              <div className="mt-6 grid gap-5">
                <div className="border-l-2 border-rose-300 pl-4">
                  <p className="text-xs font-semibold uppercase text-rose-700">Sem orientação</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{comparison.today}</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <p className="text-xs font-semibold uppercase text-emerald-700">Com a Creativity</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{comparison.withCreativity}</p>
                </div>
              </div>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                href={comparison.href}
              >
                Entender esta frente
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
