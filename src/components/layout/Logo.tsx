import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      className={`inline-flex shrink-0 items-baseline gap-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 ${className}`}
      href="/"
      aria-label="Página inicial da Creativity"
    >
      <span className="text-2xl font-semibold">Creativity</span>
      <span className="hidden text-[0.65rem] font-semibold uppercase text-teal-300 sm:inline">
        data + AI
      </span>
    </Link>
  );
}
