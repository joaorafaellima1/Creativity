"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const cookieStorageKey = "creativity-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(!localStorage.getItem(cookieStorageKey));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(cookieStorageKey, value);
    window.dispatchEvent(new CustomEvent("creativity-consent-change", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-lg border border-neutral-200 bg-white p-4 shadow-2xl" role="dialog" aria-label="Preferências de cookies">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-neutral-700">Usamos cookies essenciais. Analytics só é ativado com sua autorização. Veja a <Link className="font-semibold text-blue-700 underline" href="/politica-de-cookies">Política de Cookies</Link>.</p>
        <div className="flex shrink-0 gap-2">
          <button className="min-h-11 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100" type="button" onClick={() => choose("rejected")}>Somente essenciais</button>
          <button className="min-h-11 rounded-md bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800" type="button" onClick={() => choose("accepted")}>Aceitar analytics</button>
        </div>
      </div>
    </div>
  );
}
