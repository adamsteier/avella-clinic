import { RuleEyebrow } from "./RuleEyebrow";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <RuleEyebrow align={align}>{eyebrow}</RuleEyebrow>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            dark ? "text-cream/80" : "text-ink/75"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
