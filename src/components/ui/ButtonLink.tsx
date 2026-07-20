import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  icon?: "arrow" | "whatsapp" | "none";
  external?: boolean;
  className?: string;
  eventName?: string;
};

const variantClasses = {
  primary:
    "border border-cyan-500 bg-cyan-500 text-slate-950 shadow-sm hover:border-cyan-400 hover:bg-cyan-400",
  secondary:
    "border border-slate-300 bg-white text-slate-950 hover:border-cyan-500 hover:text-cyan-700",
  ghost:
    "border border-transparent bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950",
  dark:
    "border border-white/15 bg-white text-slate-950 hover:border-emerald-300 hover:bg-emerald-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  external = false,
  className = "",
  eventName,
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${variantClasses[variant]} ${className}`;
  const iconNode =
    icon === "arrow" ? (
      <ArrowRight aria-hidden className="h-4 w-4" />
    ) : icon === "whatsapp" ? (
      <MessageCircle aria-hidden className="h-4 w-4" />
    ) : null;

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event={eventName}
      >
        {children}
        {iconNode}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} data-analytics-event={eventName}>
      {children}
      {iconNode}
    </Link>
  );
}
