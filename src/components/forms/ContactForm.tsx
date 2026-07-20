"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  segment: string;
  employees: string;
  erp: string;
  need: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  role: "",
  phone: "",
  email: "",
  segment: "",
  employees: "",
  erp: "",
  need: "",
  message: "",
  consent: false,
  website: "",
};

const segments = [
  "Agronegócio",
  "Distribuidora",
  "Indústria",
  "Atacado e varejo",
  "Serviços",
  "Outro segmento",
];

const employees = ["Até 10", "11 a 50", "51 a 200", "201 a 500", "Acima de 500"];

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (values.name.trim().length < 3) errors.name = "Informe seu nome completo.";
  if (values.company.trim().length < 2) errors.company = "Informe o nome da empresa.";
  if (values.phone.trim().length < 8) errors.phone = "Informe um telefone válido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Informe um e-mail válido.";
  if (!values.segment) errors.segment = "Selecione o segmento.";
  if (!values.need) errors.need = "Selecione a principal necessidade.";
  if (values.message.trim().length < 10) errors.message = "Descreva brevemente o que você precisa.";
  if (!values.consent) errors.consent = "É necessário consentir com o tratamento dos dados.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);

  function updateField(field: keyof FormState, value: string | boolean) {
    if (!startedAt) {
      setStartedAt(Date.now());
    }
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt || Date.now() - 3000 }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Não foi possível enviar o formulário.");
      }

      setStatus("success");
      setValues(initialState);
      setStartedAt(null);
      trackEvent("contact_form_submit", { segment: values.segment, need: values.need });
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "Não foi possível enviar o formulário.");
    }
  }

  const inputClass =
    "mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100";
  const labelClass = "text-sm font-semibold text-slate-800";

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Nome
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? <span id="name-error" className="mt-1 block text-xs text-rose-600">{errors.name}</span> : null}
        </label>

        <label className={labelClass}>
          Empresa
          <input
            className={inputClass}
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <span id="company-error" className="mt-1 block text-xs text-rose-600">{errors.company}</span>
          ) : null}
        </label>

        <label className={labelClass}>
          Cargo
          <input
            className={inputClass}
            name="role"
            autoComplete="organization-title"
            value={values.role}
            onChange={(event) => updateField("role", event.target.value)}
          />
        </label>

        <label className={labelClass}>
          Telefone
          <input
            className={inputClass}
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? <span id="phone-error" className="mt-1 block text-xs text-rose-600">{errors.phone}</span> : null}
        </label>

        <label className={labelClass}>
          E-mail
          <input
            className={inputClass}
            name="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? <span id="email-error" className="mt-1 block text-xs text-rose-600">{errors.email}</span> : null}
        </label>

        <label className={labelClass}>
          Segmento
          <select
            className={inputClass}
            name="segment"
            value={values.segment}
            onChange={(event) => updateField("segment", event.target.value)}
            aria-invalid={Boolean(errors.segment)}
            aria-describedby={errors.segment ? "segment-error" : undefined}
          >
            <option value="">Selecione</option>
            {segments.map((segment) => (
              <option key={segment}>{segment}</option>
            ))}
          </select>
          {errors.segment ? (
            <span id="segment-error" className="mt-1 block text-xs text-rose-600">{errors.segment}</span>
          ) : null}
        </label>

        <label className={labelClass}>
          Número aproximado de colaboradores
          <select
            className={inputClass}
            name="employees"
            value={values.employees}
            onChange={(event) => updateField("employees", event.target.value)}
          >
            <option value="">Selecione</option>
            {employees.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          Sistema ou ERP utilizado
          <input
            className={inputClass}
            name="erp"
            placeholder="Opcional"
            value={values.erp}
            onChange={(event) => updateField("erp", event.target.value)}
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5">
        <label className={labelClass}>
          Principal necessidade
          <select
            className={inputClass}
            name="need"
            value={values.need}
            onChange={(event) => updateField("need", event.target.value)}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
          >
            <option value="">Selecione</option>
            <option>Solicitar demonstração</option>
            <option>Diagnóstico de dados</option>
            <option>Automatizar relatórios</option>
            <option>Integrar sistemas e planilhas</option>
            <option>Criar dashboards para uma área específica</option>
            <option>Licenciamento Microsoft</option>
            <option>Microsoft 365, Azure ou Power Platform</option>
            <option>Cloud e segurança</option>
            <option>Computadores e equipamentos</option>
            <option>Servidores, redes e infraestrutura</option>
            <option>Consultar outra solução de tecnologia</option>
          </select>
          {errors.need ? <span id="need-error" className="mt-1 block text-xs text-rose-600">{errors.need}</span> : null}
        </label>

        <label className={labelClass}>
          Mensagem
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <span id="message-error" className="mt-1 block text-xs text-rose-600">{errors.message}</span>
          ) : null}
        </label>

        <label className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <input
            className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            Autorizo o tratamento dos dados informados para contato comercial, diagnóstico e retorno
            sobre soluções da Creativity Tecnologia.
            {errors.consent ? (
              <span id="consent-error" className="mt-1 block text-xs text-rose-600">{errors.consent}</span>
            ) : null}
          </span>
        </label>
      </div>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> : null}
        Solicitar contato
      </button>

      {status === "success" ? (
        <div className="mt-5 flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
          Solicitação registrada. A estrutura está pronta para integração com e-mail, CRM ou webhook.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700" role="alert">
          {serverMessage}
        </div>
      ) : null}
    </form>
  );
}
