import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

const ecosystemNames = ["Microsoft", "Ingram Micro", "Dell Technologies", "Lenovo"];

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50" aria-label="Ecossistema de soluções">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-950 text-emerald-300">
            <BadgeCheck aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase text-cyan-700">Ecossistema de soluções</p>
            <p className="mt-1 text-sm text-slate-600">Tecnologia corporativa com atendimento Creativity.</p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-slate-900 sm:flex sm:flex-wrap sm:items-center">
          {ecosystemNames.map((name) => (
            <li className="border-l-2 border-cyan-500 pl-3" key={name}>
              {name}
            </li>
          ))}
        </ul>

        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
          href="/tecnologia"
        >
          Ver atuação completa
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
