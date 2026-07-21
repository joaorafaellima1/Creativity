import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { company, whatsappUrl } from "@/config/company";
import { legalNavigation } from "@/data/navigation";

const solutions = [
  ["Business Intelligence", "/solucoes/business-intelligence"],
  ["Microsoft 365", "/solucoes/microsoft-365"],
  ["Microsoft Azure", "/solucoes/microsoft-azure"],
  ["Inteligência Artificial", "/solucoes/inteligencia-artificial"],
  ["Segurança e Backup", "/solucoes/seguranca-backup"],
  ["Infraestrutura", "/solucoes/infraestrutura-corporativa"],
];

const institutional = [["Metodologia", "/metodologia"], ["Segmentos", "/segmentos"], ["Cases", "/cases"], ["Conteúdos", "/conteudos"], ["Sobre", "/sobre"], ["Contato", "/contato"]];

export function Footer() {
  return <footer className="bg-[#080808] text-white"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
    <div className="border-b border-white/15 pb-12"><Logo tone="light" /><p className="mt-8 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Da infraestrutura à inteligência.</p><p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">Tecnologia conectada para transformar operação em resultado, com clareza sobre custo, risco, adoção e próximos passos.</p></div>
    <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.8fr_0.8fr]">
      <div><h2 className="text-sm font-semibold">Contato</h2><ul className="mt-5 grid gap-4 text-sm text-neutral-400"><li><a className="inline-flex items-center gap-2 hover:text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />{company.phoneDisplay}</a></li><li><a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${company.email}`}><Mail className="h-4 w-4" />{company.email}</a></li><li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{company.city}, {company.state}</li></ul></div>
      <FooterLinks title="Soluções" links={solutions} />
      <FooterLinks title="Creativity" links={institutional} />
      <div><h2 className="text-sm font-semibold">Legal</h2><ul className="mt-5 grid gap-4 text-sm text-neutral-400">{legalNavigation.map((item) => <li key={item.href}><Link className="hover:text-white" href={item.href}>{item.label}</Link></li>)}</ul></div>
    </div>
    <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between"><p>Creativity © 2026. Todos os direitos reservados.</p><p>{company.legalName} · {company.domain}</p></div>
  </div></footer>;
}

function FooterLinks({ title, links }: { title: string; links: string[][] }) { return <div><h2 className="text-sm font-semibold">{title}</h2><ul className="mt-5 grid gap-4 text-sm text-neutral-400">{links.map(([label, href]) => <li key={href}><Link className="inline-flex items-center gap-1 hover:text-white" href={href}>{label}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden /></Link></li>)}</ul></div>; }
