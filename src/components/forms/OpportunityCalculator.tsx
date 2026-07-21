"use client";

import { useMemo, useState } from "react";
import { Calculator, Clock3, MessageCircle, WalletCards } from "lucide-react";
import { createWhatsappUrl } from "@/config/company";
import { trackEvent } from "@/lib/analytics";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function OpportunityCalculator() {
  const [hours, setHours] = useState(10);
  const [people, setPeople] = useState(3);
  const [hourCost, setHourCost] = useState(60);
  const [licenses, setLicenses] = useState(50);
  const [licenseCost, setLicenseCost] = useState(120);
  const [unused, setUnused] = useState(15);
  const result = useMemo(() => {
    const manual = hours * people * hourCost * 4.33;
    const waste = licenses * licenseCost * (unused / 100);
    return { manual, waste, total: manual + waste, potential: manual * 0.3 + waste };
  }, [hourCost, hours, licenseCost, licenses, people, unused]);
  const message = `Olá, usei a Calculadora de Oportunidade da Creativity. Minha estimativa mensal foi ${currency.format(result.total)} entre esforço manual e licenças sem uso. Gostaria de validar este cenário.`;

  function update(setter: (value: number) => void, value: string) {
    setter(Math.max(0, Number(value) || 0));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
      <form className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-8" onSubmit={(event) => event.preventDefault()}>
        <div className="border-b border-neutral-200 pb-5">
          <p className="text-sm font-semibold uppercase text-blue-600">Seus dados</p>
          <h2 className="mt-2 text-2xl font-semibold text-neutral-950">Onde tempo e licenças podem estar sendo desperdiçados?</h2>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <NumberField label="Horas semanais em relatórios manuais" value={hours} onChange={(value) => update(setHours, value)} suffix="h" />
          <NumberField label="Pessoas envolvidas nessa rotina" value={people} onChange={(value) => update(setPeople, value)} suffix="pessoas" />
          <NumberField label="Custo médio por hora da equipe" value={hourCost} onChange={(value) => update(setHourCost, value)} prefix="R$" />
          <NumberField label="Licenças de software contratadas" value={licenses} onChange={(value) => update(setLicenses, value)} suffix="licenças" />
          <NumberField label="Custo médio mensal por licença" value={licenseCost} onChange={(value) => update(setLicenseCost, value)} prefix="R$" />
          <NumberField label="Percentual estimado sem uso" value={unused} onChange={(value) => update(setUnused, value)} suffix="%" max={100} />
        </div>
      </form>

      <aside className="rounded-lg bg-neutral-950 p-6 text-white md:p-8" aria-live="polite">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-400 text-neutral-950"><Calculator className="h-5 w-5" aria-hidden /></span>
          <div><p className="text-xs font-semibold uppercase text-teal-300">Estimativa mensal</p><h2 className="text-lg font-semibold">Oportunidade identificada</h2></div>
        </div>
        <p className="mt-7 text-4xl font-semibold">{currency.format(result.total)}</p>
        <p className="mt-2 text-sm leading-6 text-neutral-400">Custo operacional estimado que merece investigação.</p>
        <dl className="mt-7 grid gap-4 border-y border-white/15 py-6">
          <div className="flex items-center justify-between gap-4"><dt className="flex items-center gap-2 text-sm text-neutral-300"><Clock3 className="h-4 w-4 text-teal-300" aria-hidden /> Trabalho manual</dt><dd className="font-semibold">{currency.format(result.manual)}</dd></div>
          <div className="flex items-center justify-between gap-4"><dt className="flex items-center gap-2 text-sm text-neutral-300"><WalletCards className="h-4 w-4 text-teal-300" aria-hidden /> Licenças sem uso</dt><dd className="font-semibold">{currency.format(result.waste)}</dd></div>
          <div className="flex items-center justify-between gap-4"><dt className="text-sm text-neutral-300">Potencial inicial analisável*</dt><dd className="font-semibold text-teal-300">{currency.format(result.potential)}</dd></div>
        </dl>
        <p className="mt-5 text-xs leading-5 text-neutral-400">*Simulação orientativa: considera quatro semanas e meia por mês, 30% de redução possível do esforço manual e revisão do desperdício informado. O resultado real depende de diagnóstico, processo e adoção. Não representa promessa de economia.</p>
        <a className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-teal-400 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-teal-300" data-analytics-event="calculator_whatsapp" href={createWhatsappUrl(message)} onClick={() => trackEvent("calculator_complete", { estimated_opportunity: Math.round(result.total) })} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" aria-hidden /> Validar esta estimativa
        </a>
      </aside>
    </div>
  );
}

function NumberField({ label, value, onChange, prefix, suffix, max }: { label: string; value: number; onChange: (value: string) => void; prefix?: string; suffix?: string; max?: number }) {
  return (
    <label className="text-sm font-semibold leading-5 text-neutral-800">
      {label}
      <span className="mt-2 flex min-h-12 items-center rounded-md border border-neutral-300 bg-white px-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
        {prefix ? <span className="mr-2 text-sm text-neutral-500">{prefix}</span> : null}
        <input className="min-w-0 flex-1 bg-transparent py-3 text-sm text-neutral-950 outline-none" type="number" min="0" max={max} step="1" value={value} onChange={(event) => onChange(event.target.value)} />
        {suffix ? <span className="ml-2 text-xs text-neutral-500">{suffix}</span> : null}
      </span>
    </label>
  );
}

