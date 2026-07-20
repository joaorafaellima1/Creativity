import { Building2, CheckCircle2, LockKeyhole } from "lucide-react";
import { caseStudies, caseStudyChecklist } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cases reais"
          title="Resultados publicados somente com autorização."
          description="A seção está pronta para apresentar clientes, desafios, soluções e resultados reais da Creativity, sem depoimentos fictícios ou números sem comprovação."
          align="center"
        />

        {caseStudies.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={caseStudy.slug}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-cyan-700">{caseStudy.segment}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">{caseStudy.clientName}</h3>
                  </div>
                  <span className="inline-flex shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                    {caseStudy.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4">
                  <CaseBlock title="Desafio" text={caseStudy.challenge} />
                  <CaseBlock title="Solução" text={caseStudy.solution} />
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase text-slate-500">Indicadores</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {caseStudy.indicators.map((indicator) => (
                      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700" key={indicator}>
                        {indicator}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">
                  {caseStudy.results.map((result) => (
                    <li className="flex gap-2" key={result}>
                      <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {result}
                    </li>
                  ))}
                </ul>

                {caseStudy.testimonial ? (
                  <figure className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <blockquote className="text-sm leading-6 text-slate-700">“{caseStudy.testimonial.quote}”</blockquote>
                    <figcaption className="mt-3 text-xs font-semibold text-slate-500">
                      {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                    </figcaption>
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
                  <Building2 aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase text-cyan-700">Pronto para publicação</p>
                  <h3 className="text-xl font-semibold text-slate-950">Envie os cases reais autorizados.</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                Assim que os dados forem enviados, os cards passam a exibir clientes, segmentos,
                desafios, soluções implantadas e resultados comprováveis.
              </p>
              <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <LockKeyhole aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <p className="text-sm leading-6 text-amber-900">
                    Se o cliente não puder ser identificado, o case pode ser publicado como “nome preservado”,
                    desde que as informações tenham autorização de uso.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase text-cyan-700">Dados necessários</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">Checklist para publicar um case real</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                {caseStudyChecklist.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase text-slate-500">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}
