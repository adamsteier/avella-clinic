import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, services, doctors } from "@/lib/site-config";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Style 3: Classic Heritage",
  description:
    "Style preview: a traditional, established-practice look for Avella Medical Clinic.",
};

/**
 * Style 3 — Classic Heritage.
 * Centered, symmetrical layouts, serif type, double gold rules,
 * framed photography. The long-standing family practice.
 */

function DoubleRule({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-24 ${className}`} aria-hidden>
      <div className="h-px bg-gold-soft" />
      <div className="mt-1 h-px bg-gold-soft" />
    </div>
  );
}

export default function StyleThreePage() {
  return (
    <div className="bg-[#f7f2e7] text-[#2a3328]">
      <p className="border-b border-[#e2d9c4] bg-[#efe7d2] py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-gold">
        Style preview 3 of 4: Classic Heritage
      </p>

      {/* Hero */}
      <section className="border-b border-[#e2d9c4]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Avella Medical Clinic
          </p>
          <DoubleRule className="mt-4" />
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-pine sm:text-6xl">
            Compassionate Care.
            <br />
            Healthier Together.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#55604f]">
            A family practice in the heart of Vancouver, caring for every
            generation with the patience good medicine deserves.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="border-2 border-pine bg-pine px-8 py-3 font-semibold text-[#f7f2e7] transition-colors hover:bg-transparent hover:text-pine"
            >
              Call {site.phone}
            </a>
            <Link
              href="/services"
              className="border-2 border-gold-soft px-8 py-3 font-semibold text-gold transition-colors hover:bg-gold-soft hover:text-pine"
            >
              Our Services
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-[#8a8264]">
            Suite 602 · 1188 Grandview Avenue · New Patients Welcome
          </p>
        </div>
      </section>

      {/* Framed triptych */}
      <section className="border-b border-[#e2d9c4]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6">
          {[
            {
              src: "/images/clinic-door.jpeg",
              alt: "The frosted glass entrance to Suite 602",
              caption: "The Entrance",
            },
            {
              src: "/images/clinic-front.jpeg",
              alt: "The Avella reception and brand mural",
              caption: "Reception",
            },
            {
              src: "/images/team.png",
              alt: "The five Avella physicians",
              caption: "Our Physicians",
            },
          ].map((photo) => (
            <figure key={photo.caption} className="text-center">
              <div className="border border-gold-soft p-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#e2d9c4]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-4xl font-semibold text-pine">
            Areas of Practice
          </h2>
          <DoubleRule className="mt-4" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-soft text-gold transition-colors group-hover:bg-gold-soft group-hover:text-pine">
                  <ServiceIcon slug={service.slug} className="h-8 w-8" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-pine">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#55604f]">
                  {service.short}
                </p>
              </Link>
            ))}
            <div className="flex flex-col items-center justify-center">
              <p className="font-display text-2xl font-semibold italic text-gold">
                {site.motto}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physicians roll */}
      <section className="border-b border-[#e2d9c4] bg-[#efe7d2]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-4xl font-semibold text-pine">
            The Physicians
          </h2>
          <DoubleRule className="mt-4" />
          <ul className="mt-8 space-y-3">
            {doctors.map((doctor) => (
              <li
                key={doctor.name}
                className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4"
              >
                <span className="font-display text-xl font-semibold text-pine">
                  {doctor.name}
                </span>
                <span className="hidden h-px w-8 bg-gold-soft sm:block" aria-hidden />
                <span className="text-sm uppercase tracking-[0.18em] text-gold">
                  {doctor.focus}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/doctors"
            className="mt-8 inline-block border-2 border-pine px-8 py-3 font-semibold text-pine transition-colors hover:bg-pine hover:text-[#f7f2e7]"
          >
            Meet the Doctors
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-soft">
            {site.motto}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[#f7f2e7]">
            Book your appointment today
          </h2>
          <a
            href={site.phoneHref}
            className="mt-8 inline-block border-2 border-gold-soft px-10 py-3 font-semibold text-gold-soft transition-colors hover:bg-gold-soft hover:text-pine"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
