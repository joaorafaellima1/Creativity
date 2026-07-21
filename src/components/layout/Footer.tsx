import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { company, whatsappUrl } from "@/config/company";
import { legalNavigation } from "@/data/navigation";

const solutionLinks = [
  { label: "Business Intelligence", href: "/#solucoes" },
  { label: "Copilot e IA aplicada", href: "/#solucoes" },
  { label: "Microsoft 365 e Azure", href: "/#microsoft" },
  { label: "Construção Civil", href: "/#construcao-civil" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="border-b border-white/15 pb-14">
          <Logo tone="light" />
          <p className="mt-8 max-w-4xl text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            A tecnologia por trás de decisões mais claras.
          </p>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <p className="max-w-lg text-base leading-7 text-neutral-400">
              BI, IA aplicada e adoção Microsoft para empresas que querem transformar dados em
              decisões de negócio.
            </p>
            <a
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Soluções</h2>
            <ul className="mt-5 grid gap-4 text-sm text-neutral-400">
              {solutionLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link className="inline-flex items-center gap-1 hover:text-white" href={item.href}>
                    {item.label}
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Creativity</h2>
            <ul className="mt-5 grid gap-4 text-sm text-neutral-400">
              <li><Link className="hover:text-white" href="/sobre">Sobre nós</Link></li>
              <li><Link className="hover:text-white" href="/contato">Contato</Link></li>
              {legalNavigation.map((item) => (
                <li key={item.href}><Link className="hover:text-white" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Creativity © 2026. Todos os direitos reservados.</p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
