import type { DashboardTableRow } from "@/types/content";

const statusClasses = {
  "Em dia": "bg-emerald-50 text-emerald-700",
  Atenção: "bg-amber-50 text-amber-700",
  Crítico: "bg-rose-50 text-rose-700",
  Oportunidade: "bg-cyan-50 text-cyan-700",
};

export function ManagementTable({ rows }: { rows: DashboardTableRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <caption className="sr-only">Tabela gerencial com indicadores demonstrativos</caption>
        <thead className="text-xs uppercase text-slate-500">
          <tr>
            <th className="py-3 pr-4 font-semibold" scope="col">
              Indicador
            </th>
            <th className="py-3 pr-4 font-semibold" scope="col">
              Valor
            </th>
            <th className="py-3 pr-4 font-semibold" scope="col">
              Leitura
            </th>
            <th className="py-3 font-semibold" scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => (
            <tr key={`${row.item}-${row.value}`}>
              <th className="py-3 pr-4 font-medium text-slate-800" scope="row">
                {row.item}
              </th>
              <td className="py-3 pr-4 text-slate-700">{row.value}</td>
              <td className="py-3 pr-4 text-slate-500">{row.detail}</td>
              <td className="py-3">
                <span className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ${statusClasses[row.status]}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
