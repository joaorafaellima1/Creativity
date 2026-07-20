"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const storageKey = "creativity-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(localStorage.getItem(storageKey) !== "accepted");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-700">
          Usamos cookies essenciais e podemos preparar eventos de análise mediante configuração e
          consentimento. Saiba mais na{" "}
          <Link className="font-semibold text-cyan-700 hover:text-cyan-900" href="/politica-de-privacidade">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          className="min-h-11 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          type="button"
          onClick={() => {
            localStorage.setItem(storageKey, "accepted");
            setVisible(false);
          }}
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
