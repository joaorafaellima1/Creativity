import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company, whatsappUrl } from "@/config/company";
import { legalNavigation, mainNavigation } from "@/data/navigation";
import { Logo } from "@/components/layout/Logo";

const portfolioLinks = [
  { label: "Business Intelligence", href: "/solucoes#business-intelligence" },
  { label: "Licenciamento Microsoft", href: "/tecnologia#microsoft" },
  { label: "Cloud e software", href: "/tecnologia#microsoft" },
  { label: "Infraestrutura", href: "/tecnologia#ingram" },
  { label: "Segurança", href: "/tecnologia#ingram" },
  { label: "Automação de relatórios", href: "/solucoes/automacao-relatorios" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex">
            <Logo className="h-12 sm:h-14" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {company.legalName}
            <br />
            Dados, Microsoft, cloud, segurança e infraestrutura com atendimento consultivo.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-cyan-200 hover:bg-white/10"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-slate-400">Site: {company.domain}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Navegação</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cyan-200" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Portfólio</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {portfolioLinks.map((item) => (
              <li key={item.label}>
                <Link className="hover:text-cyan-200" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Institucional</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cyan-200" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} Creativity Tecnologia Ltda. Todos os direitos reservados.</p>
          <p>Dados de dashboards exibidos no site são demonstrativos.</p>
        </div>
      </div>
    </footer>
  );
}
