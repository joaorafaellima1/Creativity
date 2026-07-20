import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const signals = [
  {
    title: "Quando a reunião começa discutindo qual planilha está certa",
    before: "Cada área leva um número diferente e a decisão fica para depois.",
    after: "A diretoria vê indicadores padronizados, com origem e regra de cálculo claras.",
    href: "/solucoes/bi-executivo",
  },
  {
    title: "Quando vendas crescem, mas a margem não acompanha",
    before: "Descontos, mix e clientes pouco rentáveis aparecem tarde demais.",
    after: "Margem por produto, cliente, vendedor e canal entra na rotina de acompanhamento.",
    href: "/solucoes/bi-margem-rentabilidade",
  },
  {
    title: "Quando estoque, crédito e entrega viram surpresa operacional",
    before: "Ruptura, excesso, lotes e atrasos só aparecem quando já existe pressão.",
    after: "Alertas mostram o que precisa de ação antes de afetar caixa, cliente e operação.",
    href: "/solucoes/bi-estoque",
  },
];

const outcomes = [
  "Decisões com menos achismo e menos retrabalho.",
  "Gestores olhando para os mesmos indicadores.",
  "Prioridades claras por área, cliente, produto e período.",
  "Relatórios automáticos em vez de planilhas refeitas toda semana.",
];

export function DecisionPressureSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase text-cyan-700">Por que isso vira prioridade</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              O BI deixa de ser “mais um relatório” quando mostra o que está travando a gestão.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              O visitante precisa se reconhecer em uma rotina real: números espalhados, cobrança
              atrasada, margem escondida, estoque incerto e decisões que poderiam ter sido tomadas antes.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
              {outcomes.map((outcome) => (
                <li className="flex gap-2" key={outcome}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5">
            {signals.map((signal) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6"
                key={signal.title}
              >
                <h3 className="text-xl font-semibold text-slate-950">{signal.title}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-rose-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase text-rose-700">Hoje</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{signal.before}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase text-emerald-700">Com dados organizados</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{signal.after}</p>
                  </div>
                </div>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                  href={signal.href}
                >
                  Ver solução relacionada
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
