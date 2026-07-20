import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
      href="/"
      aria-label="Página inicial da Creativity Tecnologia"
    >
      <Image
        src="/brand/creativity-logo-official.png"
        alt="Creativity Data Analytics"
        width={629}
        height={165}
        priority={priority}
        className={`block h-10 w-auto max-w-none shrink-0 object-contain sm:h-11 ${className}`}
      />
    </Link>
  );
}
