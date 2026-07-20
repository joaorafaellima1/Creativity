type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-cyan-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
