import type { Kpi } from "@/types/content";

const statusClasses = {
  positivo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  atenção: "bg-amber-50 text-amber-700 border-amber-200",
  neutro: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div className="flex min-w-0 flex-col justify-between rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="max-w-[9rem] text-xs font-semibold uppercase leading-5 text-slate-500">{kpi.label}</p>
        <span className={`shrink-0 rounded-md border px-2 py-1 text-xs font-semibold ${statusClasses[kpi.status]}`}>
          {kpi.status}
        </span>
      </div>
      <div>
        <p className="mt-4 text-2xl font-semibold leading-tight text-slate-950">{kpi.value}</p>
        <p className="mt-2 text-sm leading-5 text-slate-500">{kpi.helper}</p>
      </div>
    </div>
  );
}
