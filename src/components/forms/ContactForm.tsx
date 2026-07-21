"use client";

import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { company } from "@/config/company";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, gostaria de agendar um diagnóstico com a Creativity.",
      `Nome: ${data.get("name")}`,
      `Empresa: ${data.get("company")}`,
      `E-mail: ${data.get("email")}`,
      `O que preciso: ${data.get("need")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const inputClass =
    "mt-2 min-h-12 w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <form className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xl shadow-blue-950/10 md:p-8" onSubmit={handleSubmit}>
      {/* Para usar Formspree, substitua onSubmit por action={process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT} e method="POST". */}
      <div className="mb-7 border-b border-neutral-200 pb-5">
        <p className="text-xs font-semibold uppercase text-blue-600">Diagnóstico inicial</p>
        <h3 className="mt-2 text-2xl font-semibold text-black">Conte o que precisa ficar mais claro.</h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-neutral-800">
          Nome
          <input className={inputClass} name="name" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-neutral-800">
          Empresa
          <input className={inputClass} name="company" autoComplete="organization" required />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-neutral-800">
        E-mail
        <input className={inputClass} name="email" type="email" autoComplete="email" required />
      </label>

      <label className="mt-5 block text-sm font-semibold text-neutral-800">
        O que sua empresa precisa resolver?
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          name="need"
          placeholder="Conte em poucas linhas onde os dados, relatórios ou licenças estão travando a operação."
          required
        />
      </label>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0048d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
        type="submit"
      >
        Agendar diagnóstico gratuito
        <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-5 text-neutral-500">
        Ao enviar, a conversa será aberta no WhatsApp com seus dados preenchidos.
      </p>
    </form>
  );
}
