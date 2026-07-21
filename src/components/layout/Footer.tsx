import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { company, whatsappUrl } from "@/config/company";
import { legalNavigation, mainNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05131f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
            BI, IA aplicada e adoção Microsoft para empresas que querem transformar o que já
            contratam em decisões melhores.
          </p>
          <a
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-teal-200 hover:bg-white/10"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Institucional</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-teal-200" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Informações</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-teal-200" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-400">{company.domain}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-400 sm:px-6 lg:px-8">
          Creativity © 2026. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
