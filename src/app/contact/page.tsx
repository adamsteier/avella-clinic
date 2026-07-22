import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Avella Medical Clinic: ${site.phone}, ${site.address.suite} – ${site.address.street}, ${site.address.city}. Hours, directions, and appointment requests.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're easy to reach"
        lede="Call for same-day availability, or send us a note and our front desk will get back to you within one business day."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-forest">
              Visit or call
            </h2>

            <dl className="mt-6 space-y-5 text-ink/80">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Address
                </dt>
                <dd className="mt-1">
                  {site.address.suite} – {site.address.street}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-forest hover:text-gold"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-forest hover:text-gold"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Hours
                </dt>
                <dd className="mt-2">
                  <ul className="max-w-xs space-y-1.5 text-sm">
                    {site.hours.map((row) => (
                      <li key={row.days} className="flex justify-between gap-6">
                        <span>{row.days}</span>
                        <span className="text-ink/60">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <div className="relative mt-10 max-w-md">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-gold-soft/60"
              />
              <Image
                src="/images/clinic-door.jpeg"
                alt="Look for our frosted glass doors at Suite 602"
                width={1066}
                height={1421}
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-sage/30 bg-ivory p-8 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-forest">
              Send us a note
            </h2>
            <p className="mt-2 mb-6 text-sm text-ink/70">
              For appointment requests and general questions.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
