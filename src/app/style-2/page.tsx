import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Style 2: Modern Clinical",
  description:
    "Style preview: a bright, structured, contemporary-healthcare look for Avella Medical Clinic.",
};

/**
 * Style 2 — Modern Clinical.
 * Bright white, sans-serif only, hairline rules, structured grid.
 * Green appears as a precision accent, never as decor.
 */

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="h-5 w-5 shrink-0 text-forest"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StyleTwoPage() {
  return (
    <div className="bg-white text-[#1c2b23]">
      <p className="border-b border-[#e4e7e2] bg-[#f6f8f5] py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-forest">
        Style preview 2 of 4: Modern Clinical
      </p>

      {/* Hero */}
      <section className="border-b border-[#e4e7e2]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Avella Medical Clinic · Vancouver
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Compassionate care.
              <br />
              Healthier together.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4a5a50]">
              Family health care for every generation, in person at our
              Vancouver clinic or by same-day telehealth appointment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="bg-forest px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-fern"
              >
                Call {site.phone}
              </a>
              <Link
                href="/services"
                className="border border-[#c9d2cb] px-6 py-3 text-center text-sm font-semibold text-forest transition-colors hover:border-forest"
              >
                Explore services
              </Link>
            </div>
            <ul className="mt-8 space-y-2.5">
              {[
                "New patients welcome",
                "Same-day telehealth appointments",
                "Five physicians, five areas of focus",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[#4a5a50]"
                >
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/images/clinic-front.jpeg"
              alt="The Avella Medical Clinic reception"
              width={1434}
              height={1086}
              priority
              className="w-full rounded-lg border border-[#e4e7e2] object-cover"
            />
            <div className="absolute -bottom-5 left-5 hidden border border-[#e4e7e2] bg-white p-4 shadow-sm sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                Hours
              </p>
              <p className="mt-1 text-sm text-[#4a5a50]">
                Mon–Fri 9–5 · Sat 10–2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <section className="border-b border-[#e4e7e2]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[#e4e7e2] lg:grid-cols-4">
          {[
            ["Five physicians", "All accepting new patients"],
            ["Same-day virtual care", "Phone or secure video"],
            ["Six days a week", "Including Saturday mornings"],
            ["Suite 602", "1188 Grandview Avenue"],
          ].map(([title, sub]) => (
            <div key={title} className="px-6 py-6">
              <p className="text-sm font-bold">{title}</p>
              <p className="mt-1 text-xs text-[#6b7a70]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services as an index */}
      <section className="border-b border-[#e4e7e2]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">What we treat</h2>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-forest hover:underline sm:block"
            >
              All services →
            </Link>
          </div>
          <ol className="mt-8">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-[#e4e7e2] py-5 transition-colors hover:bg-[#f6f8f5] sm:grid-cols-[4rem_14rem_1fr_auto]"
                >
                  <span className="text-sm font-semibold text-[#9aa89f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-bold">{service.title}</span>
                  <span className="hidden text-sm text-[#6b7a70] sm:block">
                    {service.short}
                  </span>
                  <span className="text-forest opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Telehealth */}
      <section className="border-b border-[#e4e7e2]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Telehealth
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              See a doctor today, from home
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-[#4a5a50]">
              Prescription renewals, test result reviews, and urgent concerns
              handled by phone or secure video, usually the same day you call.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-block bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fern"
            >
              Book a virtual visit
            </a>
          </div>
          <Image
            src="/images/telehealth.png"
            alt="A patient on a telehealth video call with an Avella physician"
            width={1280}
            height={896}
            className="w-full rounded-lg border border-[#e4e7e2] object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ready to book?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Call the front desk and we&apos;ll find the right appointment.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="bg-white px-7 py-3 text-sm font-semibold text-forest transition-colors hover:bg-cream"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
