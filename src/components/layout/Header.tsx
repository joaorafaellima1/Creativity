"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";

type NavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const navigation: NavigationItem[] = [
  {
    label: "Soluções",
    href: "/#solucoes",
    children: [
      { label: "Business Intelligence", href: "/#solucoes" },
      { label: "Copilot e IA aplicada", href: "/#solucoes" },
      { label: "Microsoft 365 e Azure", href: "/#microsoft" },
    ],
  },
  {
    label: "Como funciona",
    href: "/solucoes#como-funciona",
    children: [
      { label: "Diagnóstico", href: "/solucoes#como-funciona" },
      { label: "Arquitetura e ativação", href: "/#metodo" },
      { label: "Adoção e evolução", href: "/#metodo" },
    ],
  },
  { label: "Microsoft", href: "/#microsoft" },
  { label: "Construção Civil", href: "/#construcao-civil" },
  {
    label: "Sobre nós",
    href: "/sobre",
    children: [
      { label: "Quem somos", href: "/sobre" },
      { label: "Fale com a Creativity", href: "/contato" },
    ],
  },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div className="group relative" key={item.href}>
              <Link
                className="inline-flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href={item.href}
                aria-haspopup={item.children ? "true" : undefined}
              >
                {item.label}
                {item.children ? <ChevronDown aria-hidden className="h-3.5 w-3.5" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-lg border border-neutral-200 bg-white p-2 shadow-xl shadow-black/10">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black"
                        href={child.href}
                        key={child.label}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link
          className="hidden min-h-12 items-center justify-center rounded-full bg-[#0b5cff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0048d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:inline-flex"
          href="/#contato"
        >
          Fale conosco
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 text-neutral-950 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[72px] z-50 min-h-[calc(100vh-72px)] border-t border-neutral-200 bg-white px-5 py-7 lg:hidden">
          <nav aria-label="Menu mobile" className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <div className="border-b border-neutral-200 pb-2" key={item.href}>
                <Link
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {item.children ? <ChevronDown aria-hidden className="h-4 w-4" /> : null}
                </Link>
                {item.children ? (
                  <div className="grid pl-3">
                    {item.children.map((child) => (
                      <Link
                        className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-black"
                        href={child.href}
                        key={child.label}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-semibold text-white"
              href="/#contato"
              onClick={() => setOpen(false)}
            >
              Fale conosco
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
