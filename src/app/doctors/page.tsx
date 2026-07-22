import type { Metadata } from "next";
import Image from "next/image";
import { doctors, site } from "@/lib/site-config";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { LeafMotif } from "@/components/LeafMotif";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the physicians of Avella Medical Clinic — experienced, attentive doctors in family medicine, senior's health, women's health, and children's health.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title="Physicians who take the time"
        lede="Our doctors chose Avella because they believe good medicine starts with a real relationship."
      />

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="rounded-2xl border border-sage/30 bg-cream p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest">
                  <LeafMotif className="h-8 w-8 text-gold-soft" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-forest">
                  {doctor.name}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                  {doctor.credentials} · {doctor.focus}
                </p>
                <p className="mt-3 leading-relaxed text-ink/75">{doctor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Image
            src="/images/team.png"
            alt="The Avella Medical Clinic care team standing together"
            width={1536}
            height={864}
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <div>
            <SectionHeading
              eyebrow="Joining Avella"
              title="Accepting new patients"
              lede={`Our physicians are currently welcoming new patients. Call ${site.phone} and our front desk will match you with the doctor best suited to your needs.`}
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
