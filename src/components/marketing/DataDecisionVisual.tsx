import { BarChart3, CheckCircle2, Database, Sparkles } from "lucide-react";

const bars = [28, 42, 36, 58, 51, 68, 61, 79, 74, 92];

export function DataDecisionVisual() {
  return (
    <div className="relative border border-white/15 bg-white p-4 shadow-2xl shadow-black/20 sm:p-5">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase text-teal-700">Visão de decisão</p>
          <p className="mt-1 font-semibold text-slate-950">Sinais da operação em um só lugar</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
          <CheckCircle2 aria-hidden className="h-4 w-4" />
          Dados conectados
        </span>
      </div>

      <div className="grid gap-4 py-5 sm:grid-cols-[0.72fr_1.28fr]">
        <div className="border border-slate-200 bg-slate-50 p-4">
          <Database aria-hidden className="h-5 w-5 text-teal-700" />
          <p className="mt-5 text-xs font-semibold uppercase text-slate-500">Fontes organizadas</p>
          <ul className="mt-3 grid gap-2 text-sm font-medium text-slate-800">
            <li className="border-b border-slate-200 pb-2">ERP e financeiro</li>
            <li className="border-b border-slate-200 pb-2">Microsoft 365</li>
            <li>Planilhas críticas</li>
          </ul>
        </div>

        <div className="border border-slate-200 bg-[#f7fafb] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Tendência operacional</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">Leitura consolidada</p>
            </div>
            <BarChart3 aria-hidden className="h-5 w-5 text-teal-700" />
          </div>
          <div className="mt-6 flex h-32 items-end gap-2 border-b border-l border-slate-300 px-2 pt-3">
            {bars.map((height, index) => (
              <span
                className={`w-full ${index > 6 ? "bg-teal-400" : "bg-slate-300"}`}
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#071827] text-teal-300">
            <Sparkles aria-hidden className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950">IA aplicada</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Contexto para perguntar e decidir.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-teal-100 text-teal-800">
            <CheckCircle2 aria-hidden className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950">Governança clara</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Origem e regra de cada indicador.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
