import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="hover:text-cyan-700" href="/">
            Início
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <ChevronRight aria-hidden className="h-4 w-4 text-slate-400" />
            {item.href ? (
              <Link className="hover:text-cyan-700" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-slate-700">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
