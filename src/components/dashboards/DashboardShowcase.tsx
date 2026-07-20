"use client";

import { useState } from "react";
import { dashboards } from "@/data/dashboards";
import { DashboardPreview } from "@/components/dashboards/DashboardPreview";

const visibleKeys = ["executivo", "comercial", "financeiro", "estoque", "logistica", "margem", "agronegocio"];

export function DashboardShowcase() {
  const tabs = dashboards.filter((dashboard) => visibleKeys.includes(dashboard.key));
  const [activeKey, setActiveKey] = useState(tabs[0]?.key || "executivo");
  const active = tabs.find((dashboard) => dashboard.key === activeKey) || tabs[0];

  return (
    <div>
      <div className="mb-6 flex max-w-full gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Dashboards demonstrativos">
        {tabs.map((dashboard) => (
          <button
            className={`min-h-11 shrink-0 rounded-lg border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
              dashboard.key === activeKey
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
            }`}
            key={dashboard.key}
            role="tab"
            aria-selected={dashboard.key === activeKey}
            type="button"
            onClick={() => setActiveKey(dashboard.key)}
          >
            {dashboard.title}
          </button>
        ))}
      </div>
      <DashboardPreview dashboard={active} />
    </div>
  );
}
