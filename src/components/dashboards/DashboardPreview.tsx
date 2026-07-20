import { AlertTriangle } from "lucide-react";
import type { DashboardDemo } from "@/types/content";
import { BarList } from "@/components/dashboards/BarList";
import { KpiCard } from "@/components/dashboards/KpiCard";
import { ManagementTable } from "@/components/dashboards/ManagementTable";
import { MiniLineChart } from "@/components/dashboards/MiniLineChart";

type DashboardPreviewProps = {
  dashboard: DashboardDemo;
  compact?: boolean;
  className?: string;
};

export function DashboardPreview({ dashboard, compact = false, className = "" }: DashboardPreviewProps) {
  return (
    <section
      className={`min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}
      aria-label={`Dashboard demonstrativo: ${dashboard.title}`}
    >
      <div className="border-b border-slate-200 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-cyan-700">{dashboard.eyebrow}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-950">{dashboard.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{dashboard.description}</p>
          </div>
          <span className="inline-flex w-fit shrink-0 rounded-md border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold leading-5 text-amber-800 sm:whitespace-nowrap">
            Dados demonstrativos
          </span>
        </div>
      </div>

      <div className="grid min-w-0 gap-5 p-4 sm:p-5">
        <div className={`grid min-w-0 gap-3 sm:grid-cols-2 ${compact ? "" : "xl:grid-cols-4"}`}>
          {dashboard.kpis.map((kpi) => (
            <KpiCard kpi={kpi} key={kpi.label} />
          ))}
        </div>

        <div className={`grid min-w-0 gap-5 ${compact ? "" : "lg:grid-cols-[1.35fr_1fr]"}`}>
          <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Evolução</p>
                <p className="text-xs text-slate-500">Linha temporal com tooltip nativo por ponto</p>
              </div>
              <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-500">
                Atualizado 19/06/2026
              </span>
            </div>
            <MiniLineChart points={dashboard.trend} label={`Evolução demonstrativa de ${dashboard.title}`} />
          </div>

          <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Meta versus realizado</p>
            <p className="mt-1 text-xs text-slate-500">Barras comparativas com leitura textual</p>
            <div className="mt-5">
              <BarList bars={dashboard.bars} />
            </div>
          </div>
        </div>

        {!compact ? (
          <div className="grid min-w-0 gap-5 lg:grid-cols-[1fr_0.7fr]">
            <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Tabela gerencial</p>
              <div className="mt-3">
                <ManagementTable rows={dashboard.table} />
              </div>
            </div>
            <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
              <div className="flex items-center gap-2">
                <AlertTriangle aria-hidden className="h-4 w-4 text-amber-300" />
                <p className="text-sm font-semibold">Alertas interpretáveis</p>
              </div>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-200">
                {dashboard.alerts.map((alert) => (
                  <li className="border-l-2 border-cyan-300 pl-3" key={alert}>
                    {alert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
