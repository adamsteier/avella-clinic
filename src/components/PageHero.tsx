import { RuleEyebrow } from "./RuleEyebrow";
import { LeafMotif } from "./LeafMotif";

/** Inner-page banner: deep green field with a quiet leaf watermark. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine">
      <LeafMotif className="pointer-events-none absolute -right-8 -top-10 h-64 w-64 rotate-12 text-fern/30" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <RuleEyebrow>{eyebrow}</RuleEyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
