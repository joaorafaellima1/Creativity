"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { company } from "@/config/company";
import {
  calculatorAreas,
  calculatorPricing,
  calculatorSources,
  companySizeOptions,
  complexityOptions,
  supportOptions,
  unitOptions,
  updateFrequencyOptions,
} from "@/data/pricing-calculator";
import { currencyBRL } from "@/lib/format";

type CalculatorState = {
  areas: string[];
  sources: string[];
  dashboards: number;
  companySize: string;
  units: string;
  updateFrequency: string;
  complexity: string;
  automation: boolean;
  support: string;
};

const initialState: CalculatorState = {
  areas: ["executivo", "comercial"],
  sources: ["planilhas", "erp"],
  dashboards: 5,
  companySize: "21-80",
  units: "1",
  updateFrequency: "diaria",
  complexity: "moderada",
  automation: true,
  support: "suporte",
};

function getSelected<T extends { value: string }>(items: T[], value: string) {
  return items.find((item) => item.value === value) || items[0];
}

function toggleValue(values: string[], value: string) {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }

  return [...values, value];
}

export function ProjectCostCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const estimate = useMemo(() => {
    const selectedAreas = calculatorAreas.filter((area) => state.areas.includes(area.value));
    const selectedSources = calculatorSources.filter((source) => state.sources.includes(source.value));
    const size = getSelected(companySizeOptions, state.companySize);
    const units = getSelected(unitOptions, state.units);
    const frequency = getSelected(updateFrequencyOptions, state.updateFrequency);
    const complexity = getSelected(complexityOptions, state.complexity);
    const support = getSelected(supportOptions, state.support);

    const areasImplementation = selectedAreas.reduce((sum, area) => sum + area.implementation, 0);
    const sourcesImplementation = selectedSources.reduce((sum, source) => sum + source.implementation, 0);
    const areasMonthly = selectedAreas.reduce((sum, area) => sum + area.monthly, 0);
    const sourcesMonthly = selectedSources.reduce((sum, source) => sum + source.monthly, 0);
    const dashboardsImplementation = state.dashboards * calculatorPricing.dashboardPrice;
    const dashboardsMonthly = state.dashboards * calculatorPricing.dashboardMonthly;

    const rawImplementation =
      calculatorPricing.baseImplementation +
      areasImplementation +
      sourcesImplementation +
      dashboardsImplementation +
      (units.implementation || 0) +
      (frequency.implementation || 0) +
      (state.automation ? calculatorPricing.automationImplementation : 0);

    const implementation = Math.max(
      calculatorPricing.minimumImplementation,
      rawImplementation * (size.multiplier || 1) * (complexity.multiplier || 1),
    );

    const rawMonthly =
      calculatorPricing.baseMonthly +
      areasMonthly +
      sourcesMonthly +
      dashboardsMonthly +
      (units.monthly || 0) +
      (frequency.monthly || 0) +
      (state.automation ? calculatorPricing.automationMonthly : 0) +
      (support.monthly || 0);

    const monthly = Math.max(calculatorPricing.minimumMonthly, rawMonthly * (size.multiplier || 1));
    const minImplementation = implementation * (1 - calculatorPricing.rangePercent);
    const maxImplementation = implementation * (1 + calculatorPricing.rangePercent);
    const minMonthly = monthly * (1 - calculatorPricing.rangePercent);
    const maxMonthly = monthly * (1 + calculatorPricing.rangePercent);

    const baseWeeks = 3;
    const weeks =
      baseWeeks +
      Math.ceil(selectedAreas.length / 2) +
      Math.ceil(selectedSources.length / 2) +
      Math.max(0, state.dashboards - 4) * 0.4 +
      (units.weeks || 0) +
      (frequency.weeks || 0) +
      (complexity.weeks || 0) +
      (state.automation ? 1 : 0);

    return {
      selectedAreas,
      selectedSources,
      minImplementation,
      maxImplementation,
      minMonthly,
      maxMonthly,
      weeksMin: Math.max(3, Math.floor(weeks)),
      weeksMax: Math.max(4, Math.ceil(weeks + 2)),
      complexity,
      frequency,
      units,
      support,
    };
  }, [state]);

  const whatsappSummary = [
    "Olá, usei a calculadora de projeto de BI da Creativity e gostaria de validar esta estimativa:",
    `Áreas: ${estimate.selectedAreas.map((area) => area.label).join(", ")}`,
    `Fontes: ${estimate.selectedSources.map((source) => source.label).join(", ")}`,
    `Dashboards: ${state.dashboards}`,
    `Porte: ${getSelected(companySizeOptions, state.companySize).label}`,
    `Unidades: ${estimate.units.label}`,
    `Atualização: ${estimate.frequency.label}`,
    `Complexidade: ${estimate.complexity.label}`,
    `Automação de relatórios: ${state.automation ? "sim" : "não"}`,
    `Estimativa de implantação: ${currencyBRL(estimate.minImplementation)} a ${currencyBRL(estimate.maxImplementation)}`,
    `Estimativa mensal: ${currencyBRL(estimate.minMonthly)} a ${currencyBRL(estimate.maxMonthly)}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(whatsappSummary)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
      <form className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <CalculatorGroup title="1. Quais áreas entram no projeto?" description="Selecione pelo menos uma área.">
          <div className="grid gap-3 md:grid-cols-2">
            {calculatorAreas.map((area) => (
              <CheckboxCard
                checked={state.areas.includes(area.value)}
                description={area.description}
                key={area.value}
                label={area.label}
                onChange={() =>
                  setState((current) => {
                    const nextAreas = toggleValue(current.areas, area.value);
                    return { ...current, areas: nextAreas.length ? nextAreas : current.areas };
                  })
                }
              />
            ))}
          </div>
        </CalculatorGroup>

        <CalculatorGroup title="2. De onde vêm os dados?" description="Quanto mais fontes, maior a etapa de integração.">
          <div className="grid gap-3 md:grid-cols-2">
            {calculatorSources.map((source) => (
              <CheckboxCard
                checked={state.sources.includes(source.value)}
                description={source.description}
                key={source.value}
                label={source.label}
                onChange={() =>
                  setState((current) => {
                    const nextSources = toggleValue(current.sources, source.value);
                    return { ...current, sources: nextSources.length ? nextSources : current.sources };
                  })
                }
              />
            ))}
          </div>
        </CalculatorGroup>

        <CalculatorGroup title="3. Qual o tamanho do escopo?" description="Ajuste os pontos que mais influenciam esforço.">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-800">
              Quantidade estimada de dashboards
              <div className="mt-3 flex items-center gap-4">
                <input
                  className="w-full accent-cyan-600"
                  max={20}
                  min={1}
                  type="range"
                  value={state.dashboards}
                  onChange={(event) => setState((current) => ({ ...current, dashboards: Number(event.target.value) }))}
                />
                <span className="grid h-11 w-14 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-base font-semibold text-slate-950">
                  {state.dashboards}
                </span>
              </div>
            </label>
            <SelectField
              label="Porte da empresa"
              options={companySizeOptions}
              value={state.companySize}
              onChange={(value) => setState((current) => ({ ...current, companySize: value }))}
            />
            <SelectField
              label="Unidades ou filiais"
              options={unitOptions}
              value={state.units}
              onChange={(value) => setState((current) => ({ ...current, units: value }))}
            />
            <SelectField
              label="Atualização dos dados"
              options={updateFrequencyOptions}
              value={state.updateFrequency}
              onChange={(value) => setState((current) => ({ ...current, updateFrequency: value }))}
            />
            <SelectField
              label="Complexidade das regras"
              options={complexityOptions}
              value={state.complexity}
              onChange={(value) => setState((current) => ({ ...current, complexity: value }))}
            />
            <SelectField
              label="Acompanhamento após entrega"
              options={supportOptions}
              value={state.support}
              onChange={(value) => setState((current) => ({ ...current, support: value }))}
            />
          </div>

          <label className="mt-5 flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            <input
              checked={state.automation}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
              type="checkbox"
              onChange={(event) => setState((current) => ({ ...current, automation: event.target.checked }))}
            />
            <span>
              Incluir automação de relatórios e rotinas de envio ou atualização padronizada.
            </span>
          </label>
        </CalculatorGroup>
      </form>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-xl md:p-6">
          <p className="text-sm font-semibold uppercase text-cyan-200">Estimativa preliminar</p>
          <h2 className="mt-3 text-3xl font-semibold">Investimento do projeto</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Valores calculados com base no escopo informado. A proposta final depende do diagnóstico
            das fontes, regras de negócio e disponibilidade dos dados. Referência atual calibrada em
            hora técnica de {currencyBRL(calculatorPricing.hourlyRate)}.
          </p>

          <div className="mt-6 grid gap-4">
            <EstimateCard
              label="Implantação"
              value={`${currencyBRL(estimate.minImplementation)} a ${currencyBRL(estimate.maxImplementation)}`}
              helper="Projeto, modelagem, integração, dashboards, validação e implantação."
            />
            <EstimateCard
              label="Acompanhamento mensal"
              value={`${currencyBRL(estimate.minMonthly)} a ${currencyBRL(estimate.maxMonthly)}`}
              helper="Suporte, monitoramento, ajustes e evolução conforme pacote selecionado."
            />
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <Clock aria-hidden className="h-4 w-4" />
                <p className="text-sm font-semibold uppercase">Prazo estimado</p>
              </div>
              <p className="mt-3 text-2xl font-semibold">
                {estimate.weeksMin} a {estimate.weeksMax} semanas
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Pode variar conforme acesso às bases, validação dos indicadores e disponibilidade dos gestores.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-4">
            <div className="flex gap-3">
              <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
              <p className="text-sm leading-6 text-cyan-50">
                Esta calculadora ajuda a qualificar o orçamento inicial. Ela não substitui a proposta
                comercial após diagnóstico.
              </p>
            </div>
          </div>

          <a
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar estimativa pelo WhatsApp
            <MessageCircle aria-hidden className="h-4 w-4" />
          </a>

          <a
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            href="/contato"
          >
            Solicitar diagnóstico completo
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </aside>
    </div>
  );
}

function CalculatorGroup({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="text-xl font-semibold text-slate-950">{title}</legend>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

function CheckboxCard({
  checked,
  description,
  label,
  onChange,
}: {
  checked: boolean;
  description: string;
  label: string;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition ${
        checked ? "border-cyan-500 bg-cyan-50" : "border-slate-200 bg-white hover:border-cyan-300"
      }`}
    >
      <input
        checked={checked}
        className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
        type="checkbox"
        onChange={onChange}
      />
      <span>
        <span className="block text-sm font-semibold text-slate-950">{label}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-600">{description}</span>
      </span>
    </label>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="text-sm font-semibold text-slate-800">
      {label}
      <select
        className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function EstimateCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white p-4 text-slate-950">
      <p className="text-xs font-semibold uppercase text-cyan-700">{label}</p>
      <p className="mt-2 text-2xl font-semibold leading-tight">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{helper}</p>
    </div>
  );
}
