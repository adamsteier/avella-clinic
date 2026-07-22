import { site } from "@/lib/site-config";
import { RuleEyebrow } from "./RuleEyebrow";

export function CtaBanner() {
  return (
    <section className="bg-forest">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <RuleEyebrow align="center">{site.motto}</RuleEyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
          New patients are welcome. Book your appointment today.
        </h2>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="rounded-full bg-gold-soft px-7 py-3 font-semibold text-pine shadow-sm transition-colors hover:bg-cream"
          >
            Call {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-cream/40 px-7 py-3 font-semibold text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            Email the Clinic
          </a>
        </div>
      </div>
    </section>
  );
}
