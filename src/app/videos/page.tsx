import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { LeafMotif } from "@/components/LeafMotif";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Health education videos from the physicians at Avella Medical Clinic.",
};

// PLACEHOLDER library — swap each entry for a real video embed when ready.
const upcoming = [
  {
    title: "Welcome to Avella Medical Clinic",
    length: "Clinic tour",
  },
  {
    title: "What to expect at your first appointment",
    length: "Patient guide",
  },
  {
    title: "Preventive screenings by age: what and when",
    length: "Health education",
  },
  {
    title: "Telehealth visits, step by step",
    length: "How-to",
  },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Health education, on your schedule"
        lede="Short, practical videos from our physicians. Our first series is in production, and here is what's coming."
      />

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {upcoming.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-2xl border border-sage/30 bg-cream shadow-sm"
              >
                <div className="flex aspect-video items-center justify-center bg-pine">
                  <div className="flex flex-col items-center gap-3 text-cream/70">
                    <LeafMotif className="h-10 w-10 text-gold-soft/70" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                      Coming soon
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {video.length}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-forest">
                    {video.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-ink/60">
            Have a topic you&apos;d like our doctors to cover? Let us know at
            your next visit.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
