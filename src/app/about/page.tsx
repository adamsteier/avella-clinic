import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Avella Medical Clinic — our story, our values, and the calm, welcoming space we built for patients in Vancouver.",
};

const values = [
  {
    icon: "seniors-health",
    title: "Compassion first",
    text: "Every appointment starts with listening. We treat the person in front of us, never just the symptom.",
  },
  {
    icon: "family-medicine",
    title: "Care for generations",
    text: "From first checkups to golden years, we build relationships that let us care for whole families over time.",
  },
  {
    icon: "preventive-care",
    title: "Prevention as practice",
    text: "The best medicine keeps you well. Screening, education, and early action are woven into everything we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Avella"
        title="Medicine with a human pace"
        lede={`${site.tagline} That isn't a slogan on our wall — it's the standard for every visit.`}
      />

      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built to feel different"
              lede="Avella Medical Clinic was founded on a simple observation: patients get better care when their doctor has time to know them."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
              <p>
                Our physicians deliberately keep unhurried schedules so
                appointments never feel like a queue. The clinic itself — warm
                wood, soft light, botanical art in sage and blush — was
                designed to lower your heart rate the moment you walk through
                the frosted glass doors of Suite 602.
              </p>
              <p>
                Whether you visit in person or connect by telehealth, you can
                expect the same thing: a team that remembers your history,
                explains clearly, and follows through.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-t-full border border-gold-soft/60"
            />
            <Image
              src="/images/clinic-front.jpeg"
              alt="The Avella Medical Clinic reception with its botanical brand mural"
              width={1434}
              height={1086}
              className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="What Guides Us"
            title="Our values"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-sage/30 bg-cream p-8 text-center shadow-sm"
              >
                <ServiceIcon
                  slug={value.icon}
                  className="mx-auto h-10 w-10 text-gold"
                />
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Image
            src="/images/team.png"
            alt="The Avella Medical Clinic care team in a clinic hallway"
            width={1536}
            height={864}
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <div>
            <SectionHeading
              eyebrow="Our Team"
              title="People who love this work"
              lede="Behind every appointment is a team of physicians, nurses, and front-desk staff who chose Avella because they wanted to practice medicine this way."
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
