import type { ChartPoint } from "@/types/content";

export function MiniLineChart({ points, label }: { points: ChartPoint[]; label: string }) {
  if (!points.length) {
    return (
      <div className="grid min-h-56 place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
        Sem dados para exibir.
      </div>
    );
  }

  const width = 520;
  const height = 210;
  const padding = 28;
  const min = Math.min(...points.map((point) => point.value));
  const max = Math.max(...points.map((point) => point.value));
  const range = max - min || 1;
  const step = points.length > 1 ? (width - padding * 2) / (points.length - 1) : 0;
  const coords = points.map((point, index) => {
    const x = padding + index * step;
    const y = height - padding - ((point.value - min) / range) * (height - padding * 2);
    return { ...point, x, y };
  });
  const path = coords.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  return (
    <svg
      className="h-56 w-full"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
      preserveAspectRatio="none"
    >
      <title>{label}</title>
      {[0, 1, 2].map((line) => (
        <line
          key={line}
          x1={padding}
          x2={width - padding}
          y1={padding + line * 70}
          y2={padding + line * 70}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}
      <path d={path} fill="none" stroke="#0891b2" strokeLinecap="round" strokeWidth="4" />
      {coords.map((point) => (
        <g key={point.label}>
          <title>{`${point.label}: ${point.helper || point.value}`}</title>
          <circle cx={point.x} cy={point.y} fill="#10b981" r="5" />
        </g>
      ))}
      {coords.map((point, index) => (
        <text
          fill="#64748b"
          fontSize="12"
          key={`${point.label}-${index}`}
          textAnchor="middle"
          x={point.x}
          y={height - 6}
        >
          {point.label}
        </text>
      ))}
    </svg>
  );
}
