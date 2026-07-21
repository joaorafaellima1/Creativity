"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { company, createWhatsappUrl } from "@/config/company";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
    try {
      if (endpoint) {
        const campaign = sessionStorage.getItem("creativity_campaign");
        if (campaign) data.append("campaign", campaign);
        const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("Não foi possível enviar o formulário.");
        setStatus("success");
        setFeedback("Recebemos sua mensagem. A equipe da Creativity retornará pelo contato informado.");
        form.reset();
      } else {
        const message = [
          "Olá, gostaria de conversar com a Creativity.",
          `Nome: ${data.get("name")}`,
          `Empresa: ${data.get("company")}`,
          `E-mail: ${data.get("email")}`,
          `Telefone: ${data.get("phone")}`,
          `Interesse: ${data.get("interest")}`,
          `Porte: ${data.get("size")}`,
          `Desafio: ${data.get("challenge")}`,
        ].join("\n");
        const popup = window.open(createWhatsappUrl(message), "_blank", "noopener,noreferrer");
        if (!popup) throw new Error("O navegador bloqueou a abertura do WhatsApp.");
        setStatus("success");
        setFeedback("WhatsApp aberto com sua mensagem preenchida. Revise e envie para concluir o contato.");
      }
      trackEvent("contact_form_submit", { mode: endpoint ? "endpoint" : "whatsapp", interest: data.get("interest") });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Não foi possível concluir o envio. Tente novamente.");
      trackEvent("contact_form_error");
    }
  }

  const inputClass = "mt-2 min-h-12 w-full rounded-md border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <form className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-8" onSubmit={handleSubmit}>
      <div className="mb-7 border-b border-neutral-200 pb-5">
        <p className="text-xs font-semibold uppercase text-blue-600">Conversa inicial</p>
        <h2 className="mt-2 text-2xl font-semibold text-black">Conte o que precisa evoluir.</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">Sem apresentação genérica. Vamos partir do desafio da sua operação.</p>
      </div>
      <div className="hidden" aria-hidden="true"><label>Não preencha<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome"><input className={inputClass} name="name" autoComplete="name" required /></Field>
        <Field label="Empresa"><input className={inputClass} name="company" autoComplete="organization" required /></Field>
        <Field label="E-mail corporativo"><input className={inputClass} name="email" type="email" autoComplete="email" required /></Field>
        <Field label="Telefone"><input className={inputClass} name="phone" type="tel" autoComplete="tel" required /></Field>
        {!compact ? <Field label="Principal interesse"><select className={inputClass} name="interest" defaultValue="" required><option value="" disabled>Selecione</option><option>Dados, BI e Analytics</option><option>IA e automação</option><option>Cloud e Microsoft 365</option><option>Segurança e continuidade</option><option>Software e integrações</option><option>Infraestrutura e suporte</option><option>Diagnóstico completo</option></select></Field> : <input name="interest" type="hidden" value="Diagnóstico completo" />}
        {!compact ? <Field label="Porte da empresa"><select className={inputClass} name="size" defaultValue="" required><option value="" disabled>Selecione</option><option>Até 20 pessoas</option><option>21 a 50 pessoas</option><option>51 a 200 pessoas</option><option>201 a 500 pessoas</option><option>Mais de 500 pessoas</option></select></Field> : <input name="size" type="hidden" value="Não informado" />}
      </div>
      <Field label="Qual desafio precisa ser resolvido?" block><textarea className={`${inputClass} min-h-32 resize-y`} name="challenge" placeholder="Descreva a situação, o impacto e o que precisa ficar mais claro ou eficiente." required /></Field>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-neutral-600">
        <input className="mt-1 h-4 w-4 shrink-0 accent-blue-600" type="checkbox" name="consent" value="aceito" required />
        <span>Autorizo o uso destes dados para retorno sobre minha solicitação, conforme a <Link className="font-semibold underline hover:text-neutral-950" href="/politica-de-privacidade">Política de Privacidade</Link>.</span>
      </label>
      <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-neutral-400 sm:w-auto" disabled={status === "loading"} type="submit">
        {status === "loading" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> : <ArrowRight className="h-4 w-4" aria-hidden />}
        {status === "loading" ? "Enviando..." : "Solicitar conversa"}
      </button>
      {status !== "idle" && feedback ? <p className={`mt-5 flex gap-2 rounded-md p-4 text-sm leading-6 ${status === "error" ? "bg-red-50 text-red-800" : "bg-emerald-50 text-emerald-800"}`} role="status">{status === "error" ? <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden /> : <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />}{feedback}</p> : null}
      <p className="mt-4 text-xs leading-5 text-neutral-500">Sem endpoint configurado, o envio continua com segurança pelo WhatsApp de {company.brandName}.</p>
    </form>
  );
}

function Field({ label, children, block = false }: { label: string; children: React.ReactNode; block?: boolean }) {
  return <label className={`${block ? "mt-5 block" : "block"} text-sm font-semibold text-neutral-800`}>{label}{children}</label>;
}
