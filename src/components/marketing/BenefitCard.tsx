import { CheckCircle2 } from "lucide-react";

export function BenefitCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5">
      <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}
