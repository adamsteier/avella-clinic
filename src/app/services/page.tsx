import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/lib/site-config";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Family medicine, senior's health, preventive care, women's health, and children's health at Avella Medical Clinic in Vancouver.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Five areas of focus, one standard of care"
        lede="Every service below is delivered by physicians who take the time to know you, in clinic or by same-day telehealth."
      />

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-32 ${index % 2 === 1 ? "bg-ivory" : ""}`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={900}
              className={`w-full rounded-2xl object-cover shadow-md ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            />
            <div>
              <div className="flex items-center gap-4">
                <ServiceIcon
                  slug={service.slug}
                  className="h-11 w-11 text-gold"
                />
                <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
                  {service.title}
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-ink/75">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink/80"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-soft"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
