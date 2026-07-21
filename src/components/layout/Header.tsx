"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { portfolioPillars, getSolutionsByPillar } from "@/data/portfolio";
import { segments } from "@/data/segments";

type ActiveMenu = "solutions" | "segments" | null;

const mainLinks = [
  { label: "Início", href: "/" },
  { label: "Como trabalhamos", href: "/metodologia" },
  { label: "Cases", href: "/cases" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition ${
        scrolled ? "border-b border-neutral-200 shadow-sm" : "border-b border-transparent"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Logo priority />

        <nav aria-label="Menu principal" className="hidden items-center min-[1220px]:flex">
          <Link className="header-link" href="/">Início</Link>
          <button
            className="header-link inline-flex items-center gap-1"
            type="button"
            aria-expanded={activeMenu === "solutions"}
            onFocus={() => setActiveMenu("solutions")}
            onMouseEnter={() => setActiveMenu("solutions")}
            onClick={() => setActiveMenu((current) => current === "solutions" ? null : "solutions")}
          >
            Soluções <ChevronDown aria-hidden className="h-3.5 w-3.5" />
          </button>
          <button
            className="header-link inline-flex items-center gap-1"
            type="button"
            aria-expanded={activeMenu === "segments"}
            onFocus={() => setActiveMenu("segments")}
            onMouseEnter={() => setActiveMenu("segments")}
            onClick={() => setActiveMenu((current) => current === "segments" ? null : "segments")}
          >
            Segmentos <ChevronDown aria-hidden className="h-3.5 w-3.5" />
          </button>
          {mainLinks.slice(1).map((item) => (
            <Link className="header-link" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link
          className="hidden min-h-11 items-center justify-center rounded-full bg-[#0b5cff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0048d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 min-[1220px]:inline-flex"
          href="/contato"
          data-analytics-event="header_contact_click"
        >
          Falar com especialista
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 text-neutral-950 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 min-[1220px]:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {activeMenu === "solutions" ? (
        <div className="absolute inset-x-0 top-[76px] hidden border-y border-neutral-200 bg-white shadow-2xl shadow-black/10 min-[1220px]:block">
          <div className="mx-auto grid max-w-[1480px] grid-cols-3 gap-x-10 gap-y-8 px-10 py-9">
            {portfolioPillars.map((pillar) => (
              <div key={pillar.id}>
                <p className="text-xs font-semibold uppercase text-blue-600">{pillar.name}</p>
                <ul className="mt-3 grid gap-2">
                  {getSolutionsByPillar(pillar).map((solution) => (
                    <li key={solution.slug}>
                      <Link
                        className="block rounded-lg px-2 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black"
                        href={`/solucoes/${solution.slug}`}
                        onClick={() => setActiveMenu(null)}
                      >
                        {solution.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto flex max-w-[1480px] items-center justify-between px-10 py-4 text-sm">
              <span className="text-neutral-600">Um único parceiro para conectar, proteger, analisar e evoluir.</span>
              <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/solucoes">Ver todas as soluções</Link>
            </div>
          </div>
        </div>
      ) : null}

      {activeMenu === "segments" ? (
        <div className="absolute inset-x-0 top-[76px] hidden border-y border-neutral-200 bg-white shadow-2xl shadow-black/10 min-[1220px]:block">
          <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-4 px-10 py-8">
            {segments.map((segment) => (
              <Link
                className="rounded-lg border border-neutral-200 p-5 hover:border-blue-300 hover:bg-blue-50"
                href={`/segmentos/${segment.slug}`}
                key={segment.slug}
                onClick={() => setActiveMenu(null)}
              >
                <span className="font-semibold text-black">{segment.name}</span>
                <span className="mt-2 block text-sm leading-6 text-neutral-600">{segment.description}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="fixed inset-x-0 top-[76px] z-50 max-h-[calc(100vh-76px)] overflow-y-auto border-t border-neutral-200 bg-white px-5 py-6 min-[1220px]:hidden">
          <nav aria-label="Menu mobile" className="mx-auto grid max-w-3xl gap-2">
            <Link className="mobile-link" href="/" onClick={() => setOpen(false)}>Início</Link>
            <details className="border-b border-neutral-200 py-2">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg px-3 text-base font-semibold text-black">
                Soluções <ChevronDown aria-hidden className="h-4 w-4" />
              </summary>
              <div className="grid gap-5 px-3 pb-4 pt-2">
                {portfolioPillars.map((pillar) => (
                  <div key={pillar.id}>
                    <p className="text-xs font-semibold uppercase text-blue-600">{pillar.name}</p>
                    <div className="mt-2 grid">
                      {getSolutionsByPillar(pillar).map((solution) => (
                        <Link className="py-2 text-sm text-neutral-700" href={`/solucoes/${solution.slug}`} key={solution.slug} onClick={() => setOpen(false)}>
                          {solution.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
            <details className="border-b border-neutral-200 py-2">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg px-3 text-base font-semibold text-black">
                Segmentos <ChevronDown aria-hidden className="h-4 w-4" />
              </summary>
              <div className="grid px-3 pb-4">
                {segments.map((segment) => (
                  <Link className="py-2 text-sm text-neutral-700" href={`/segmentos/${segment.slug}`} key={segment.slug} onClick={() => setOpen(false)}>
                    {segment.name}
                  </Link>
                ))}
              </div>
            </details>
            {mainLinks.slice(1).map((item) => (
              <Link className="mobile-link" href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-semibold text-white" href="/contato" onClick={() => setOpen(false)}>
              Falar com especialista
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
