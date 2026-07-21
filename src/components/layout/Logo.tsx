import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ className = "", priority = false, tone = "dark" }: LogoProps) {
  return (
    <Link
      className={`inline-flex shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${className}`}
      href="/"
      aria-label="Página inicial da Creativity"
    >
      <Image
        src={tone === "light" ? "/brand/creativity-logo-official.png" : "/brand/creativity-logo-light.png"}
        alt="Creativity Data Analytics"
        width={629}
        height={165}
        priority={priority}
        className="h-9 w-auto object-contain sm:h-10"
      />
    </Link>
  );
}
