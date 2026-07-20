import type { ChartPoint } from "@/types/content";

export function BarList({ bars }: { bars: ChartPoint[] }) {
  if (!bars.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
        Sem comparativos disponíveis.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="mb-2 flex items-center justify-between gap-4 text-sm">
            <span className="font-medium text-slate-700">{bar.label}</span>
            <span className="text-slate-500">{bar.helper}</span>
          </div>
          <div
            className="h-3 rounded-md bg-slate-100"
            role="img"
            aria-label={`${bar.label}: ${bar.helper || `${bar.value}%`}`}
            title={`${bar.label}: ${bar.helper || `${bar.value}%`}`}
          >
            <div
              className="h-3 rounded-md bg-cyan-500"
              style={{ width: `${Math.min(Math.max(bar.value, 4), 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
