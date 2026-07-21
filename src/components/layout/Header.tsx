"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";

const navigation = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Especialização em Construção Civil", href: "/#construcao-civil" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link className="nav-link nav-link-dark" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="hidden min-h-11 items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-[#071827] transition hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 lg:inline-flex"
          href="/#contato"
        >
          Fale com a gente
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-20 z-50 min-h-[calc(100vh-5rem)] border-t border-white/10 bg-[#071827] px-4 py-7 lg:hidden">
          <nav aria-label="Menu mobile" className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                className="rounded-lg px-3 py-4 text-base font-semibold text-slate-100 hover:bg-white/10"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-[#071827]"
              href="/#contato"
              onClick={() => setOpen(false)}
            >
              Fale com a gente
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
