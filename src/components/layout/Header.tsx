"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/config/company";
import { segments } from "@/data/segments";
import { solutions } from "@/data/solutions";
import { trackEvent } from "@/lib/analytics";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

type ActiveMenu = "solucoes" | "segmentos" | null;

const featuredSolutions = [
  "bi-executivo",
  "bi-comercial",
  "bi-financeiro",
  "bi-estoque",
  "bi-margem-rentabilidade",
  "bi-agronegocio",
]
  .map((slug) => solutions.find((solution) => solution.slug === slug))
  .filter(Boolean);

const featuredSegments = segments.slice(0, 5);

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 shadow-sm shadow-slate-950/20 backdrop-blur"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo priority />

        <nav aria-label="Menu principal" className="hidden items-center gap-1 min-[1160px]:flex">
          <Link className="nav-link nav-link-dark" href="/">
            Início
          </Link>
          <button
            type="button"
            className="nav-link nav-link-dark inline-flex items-center gap-1"
            aria-expanded={activeMenu === "solucoes"}
            onFocus={() => setActiveMenu("solucoes")}
            onMouseEnter={() => setActiveMenu("solucoes")}
            onClick={() => setActiveMenu("solucoes")}
          >
            Soluções
            <ChevronDown aria-hidden className="h-4 w-4" />
          </button>
          <Link className="nav-link nav-link-dark" href="/tecnologia">
            Tecnologia
          </Link>
          <button
            type="button"
            className="nav-link nav-link-dark inline-flex items-center gap-1"
            aria-expanded={activeMenu === "segmentos"}
            onFocus={() => setActiveMenu("segmentos")}
            onMouseEnter={() => setActiveMenu("segmentos")}
            onClick={() => setActiveMenu("segmentos")}
          >
            Segmentos
            <ChevronDown aria-hidden className="h-4 w-4" />
          </button>
          <Link className="nav-link nav-link-dark" href="/como-funciona">
            Como funciona
          </Link>
          <Link className="nav-link nav-link-dark" href="/calculadora">
            Calculadora
          </Link>
          <Link className="nav-link nav-link-dark" href="/contato">
            Contato
          </Link>
        </nav>

        <div className="hidden items-center gap-3 min-[1160px]:flex">
          <Link className="text-sm font-semibold text-slate-200 hover:text-cyan-200" href="/calculadora">
            Calcular investimento
          </Link>
          <ButtonLink
            external
            href={whatsappUrl}
            icon="whatsapp"
            eventName="header_whatsapp_demo"
            className="px-4"
          >
            Falar com especialista
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 min-[1160px]:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {activeMenu ? <MegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} /> : null}

      {open ? (
        <div className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-slate-200 bg-white px-4 py-5 shadow-xl min-[1160px]:hidden">
          <nav aria-label="Menu mobile" className="grid gap-5">
            <div className="grid gap-2">
              {[
                ["Início", "/"],
                ["Soluções", "/solucoes"],
                ["Tecnologia", "/tecnologia"],
                ["Segmentos", "/segmentos"],
                ["Como funciona", "/como-funciona"],
                ["Calculadora", "/calculadora"],
                ["Sobre", "/sobre"],
                ["Contato", "/contato"],
              ].map(([label, href]) => (
                <Link
                  className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
                  href={href}
                  key={href}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            <MobileLinkGroup title="Soluções mais procuradas">
              {featuredSolutions.map((solution) =>
                solution ? (
                  <Link
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800"
                    href={`/solucoes/${solution.slug}`}
                    key={solution.slug}
                    onClick={() => setOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ) : null,
              )}
            </MobileLinkGroup>

            <MobileLinkGroup title="Segmentos">
              {featuredSegments.map((segment) => (
                <Link
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800"
                  href={`/segmentos/${segment.slug}`}
                  key={segment.slug}
                  onClick={() => setOpen(false)}
                >
                  {segment.name}
                </Link>
              ))}
            </MobileLinkGroup>

            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("mobile_whatsapp_demo");
                setOpen(false);
              }}
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MegaMenu({ activeMenu, onClose }: { activeMenu: Exclude<ActiveMenu, null>; onClose: () => void }) {
  const isSolutions = activeMenu === "solucoes";
  const overviewHref = isSolutions ? "/solucoes" : "/segmentos";
  const title = isSolutions ? "Escolha a área que precisa ficar clara" : "Encontre o contexto do seu negócio";
  const description = isSolutions
    ? "Atalhos para soluções de dados com impacto direto na rotina de gestão."
    : "Visões pensadas para operações comerciais, industriais, serviços e agronegócio.";
  const items = isSolutions ? featuredSolutions : featuredSegments;

  return (
    <div className="absolute inset-x-0 top-20 hidden border-b border-slate-200 bg-white shadow-xl min-[1160px]:block">
      <div className="mx-auto grid max-w-7xl gap-8 px-8 py-7 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg bg-slate-950 p-6 text-white">
          <p className="text-sm font-semibold uppercase text-cyan-200">
            {isSolutions ? "Soluções de BI" : "Segmentos"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
          <Link
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
            href={overviewHref}
            onClick={onClose}
          >
            Ver visão geral
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          {isSolutions ? (
            <Link
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white"
              href="/tecnologia"
              onClick={onClose}
            >
              Microsoft e infraestrutura
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item) =>
            item ? (
              <Link
                className="group flex gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:bg-cyan-50"
                href={`${isSolutions ? "/solucoes" : "/segmentos"}/${item.slug}`}
                key={item.slug}
                onClick={onClose}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-cyan-700 group-hover:bg-white">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950">{item.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {"shortDescription" in item ? item.shortDescription : item.description}
                  </span>
                </span>
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}

function MobileLinkGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 px-3 text-xs font-semibold uppercase text-cyan-700">{title}</p>
      <div className="grid gap-2">{children}</div>
    </div>
  );
}
