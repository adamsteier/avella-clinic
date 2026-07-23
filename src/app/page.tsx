import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site-config";
import { RuleEyebrow } from "@/components/RuleEyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBanner } from "@/components/CtaBanner";
import { LeafMotif } from "@/components/LeafMotif";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <LeafMotif className="pointer-events-none absolute -left-16 top-8 h-72 w-72 -rotate-12 text-sage/25" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <RuleEyebrow>Welcome to {site.name}</RuleEyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-forest text-balance sm:text-5xl lg:text-6xl">
              Compassionate Care.
              <br />
              Healthier Together.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Avella Medical Clinic provides warm, unhurried family health care
              for every generation, in person at our Vancouver clinic or by
              same-day telehealth appointment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="rounded-full bg-forest px-7 py-3 text-center font-semibold text-cream shadow-sm transition-colors hover:bg-fern"
              >
                Call {site.phone}
              </a>
              <Link
                href="/services"
                className="rounded-full border border-forest/30 px-7 py-3 text-center font-semibold text-forest transition-colors hover:border-gold-soft hover:text-gold"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              New patients welcome
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-t-full border border-gold-soft/60"
            />
            <Image
              src="/images/clinic-front.jpeg"
              alt="The Avella Medical Clinic reception with the botanical brand mural behind the front desk"
              width={1434}
              height={1086}
              priority
              className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Care for every stage of life"
            lede="Five areas of focus, one promise: attentive medicine that treats you as a person, not a chart."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group rounded-2xl border border-sage/30 bg-cream p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-soft hover:shadow-md"
              >
                <ServiceIcon
                  slug={service.slug}
                  className="h-10 w-10 text-gold"
                />
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.short}
                </p>
                <p className="mt-4 text-sm font-semibold text-gold group-hover:text-forest">
                  Learn more →
                </p>
              </Link>
            ))}
            <div className="flex flex-col items-start justify-center rounded-2xl bg-forest p-7 text-cream">
              <LeafMotif className="h-9 w-9 text-gold-soft" />
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Not sure where to start?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                Call us and we&apos;ll match you with the right physician and
                appointment type.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 text-sm font-semibold text-gold-soft hover:text-cream"
              >
                {site.phone} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Image
            src="/images/telehealth.png"
            alt="A patient at home speaking with an Avella physician on a telehealth video call"
            width={1200}
            height={900}
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <div>
            <SectionHeading
              eyebrow="Telehealth"
              title="Same-day virtual appointments"
              lede="Can't make it into the clinic? Speak with one of our physicians from home by phone or secure video."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Same-day availability for urgent concerns",
                "Prescription renewals without a trip in",
                "Test result reviews and follow-ups",
                "Referrals to specialists when you need them",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-soft"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="mt-8 inline-block rounded-full bg-forest px-7 py-3 font-semibold text-cream transition-colors hover:bg-fern"
            >
              Book a Virtual Visit
            </a>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Our Clinic"
              title="Visit us in Suite 602"
              lede="The clinic has warm wood, soft light, and the same leaf artwork you'll see in our logo. Look for the frosted glass doors on the sixth floor at Grandview Avenue."
            />
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border border-forest/30 px-7 py-3 font-semibold text-forest transition-colors hover:border-gold-soft hover:text-gold"
            >
              More About Avella
            </Link>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 h-full w-full rounded-t-full border border-gold-soft/60"
            />
            <Image
              src="/images/clinic-door.jpeg"
              alt="The frosted glass entrance to Avella Medical Clinic, Suite 602"
              width={1066}
              height={1421}
              className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
