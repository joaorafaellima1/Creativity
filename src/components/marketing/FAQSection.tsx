import type { FaqItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Respostas diretas para começar com segurança."
          description="As respostas abaixo ajudam a entender o processo, as possibilidades de integração e a forma de implantação."
          align="center"
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {items.map((item) => (
            <details className="group p-5" key={item.question}>
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span className="text-cyan-700 group-open:hidden">+</span>
                  <span className="hidden text-cyan-700 group-open:inline">-</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
