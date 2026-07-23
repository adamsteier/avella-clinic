import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site-config";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LeafMotif } from "@/components/LeafMotif";

export const metadata: Metadata = {
  title: "Style 4: Premium Concierge",
  description:
    "Style preview: a dark, boutique private-medicine look for Avella Medical Clinic.",
};

/**
 * Style 4 — Premium Concierge.
 * Deep pine throughout, gold accents, serif display, editorial spacing.
 */

export default function StyleFourPage() {
  return (
    <div className="bg-[#10231a] text-cream">
      <p className="border-b border-gold-soft/20 bg-[#0b1a13] py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
        Style preview 4 of 4: Premium Concierge
      </p>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <LeafMotif className="pointer-events-none absolute -right-14 top-10 h-80 w-80 rotate-12 text-gold-soft/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              <span aria-hidden className="h-px w-10 bg-gold-soft/60" />
              Avella Medical Clinic
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.08] sm:text-6xl">
              An unhurried
              <br />
              standard of <em className="italic text-gold-soft">care.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
              Five physicians. Five areas of focus. Appointments that take the
              time your health deserves, in clinic or by same-day telehealth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="bg-gold-soft px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#10231a] transition-colors hover:bg-cream"
              >
                Call {site.phone}
              </a>
              <Link
                href="/services"
                className="border border-cream/30 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                The Services
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 h-full w-full border border-gold-soft/50"
            />
            <Image
              src="/images/clinic-door.jpeg"
              alt="The frosted glass entrance to Avella Medical Clinic"
              width={1066}
              height={1421}
              priority
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tagline band */}
      <section className="border-y border-gold-soft/20 bg-[#0b1a13]">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <p className="font-display text-3xl font-medium italic leading-snug text-cream sm:text-4xl">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
            {site.motto}
          </p>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl font-medium">The Services</h2>
            <span aria-hidden className="h-px flex-1 bg-gold-soft/30" />
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-gold-soft/20 bg-gold-soft/20 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group bg-[#10231a] p-8 transition-colors hover:bg-[#152b20]"
              >
                <ServiceIcon
                  slug={service.slug}
                  className="h-9 w-9 text-gold-soft"
                />
                <h3 className="mt-5 font-display text-2xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {service.short}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft opacity-70 transition-opacity group-hover:opacity-100">
                  Learn more →
                </p>
              </Link>
            ))}
            <div className="flex flex-col justify-center bg-gold-soft p-8 text-[#10231a]">
              <h3 className="font-display text-2xl font-medium">
                Private, personal, prompt.
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Call the clinic and we&apos;ll arrange the right physician and
                appointment for you.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 text-xs font-bold uppercase tracking-[0.2em] underline underline-offset-4"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth editorial */}
      <section className="border-t border-gold-soft/20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 h-full w-full border border-gold-soft/50"
            />
            <Image
              src="/images/telehealth.png"
              alt="A patient on a telehealth call with an Avella physician"
              width={1280}
              height={896}
              className="relative w-full object-cover"
            />
          </div>
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              <span aria-hidden className="h-px w-10 bg-gold-soft/60" />
              Telehealth
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight">
              The clinic comes to you
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-cream/70">
              Same-day virtual appointments by phone or secure video, for
              renewals, results, and everything that shouldn&apos;t wait for a
              parking spot.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-block border border-gold-soft px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft transition-colors hover:bg-gold-soft hover:text-[#10231a]"
            >
              Book a virtual visit
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold-soft/20 bg-[#0b1a13]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <LeafMotif className="h-10 w-10 text-gold-soft/70" />
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight">
            New patients are welcome at Avella.
          </h2>
          <a
            href={site.phoneHref}
            className="bg-gold-soft px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#10231a] transition-colors hover:bg-cream"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
