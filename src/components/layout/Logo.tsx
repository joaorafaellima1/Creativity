import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ className = "", tone = "dark" }: LogoProps) {
  return (
    <Link
      className={`inline-flex shrink-0 items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
        tone === "light" ? "text-white" : "text-[#0a0a0a]"
      } ${className}`}
      href="/"
      aria-label="Página inicial da Creativity"
    >
      <span className="text-xl font-bold sm:text-2xl">Creativity</span>
      <span
        className={`hidden text-[0.6rem] font-semibold uppercase sm:inline ${
          tone === "light" ? "text-cyan-300" : "text-blue-600"
        }`}
      >
        data + AI
      </span>
    </Link>
  );
}
