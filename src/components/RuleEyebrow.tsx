/**
 * Letterspaced gold caps flanked by short hairline rules — the same
 * lockup as the "— MEDICAL CLINIC —" line in the Avella logo.
 */
export function RuleEyebrow({
  children,
  className = "",
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-gold-soft" />
      <span>{children}</span>
      <span aria-hidden className="h-px w-8 bg-gold-soft" />
    </p>
  );
}
