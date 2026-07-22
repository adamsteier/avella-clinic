import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site-config";
import { LeafMotif } from "./LeafMotif";

export function Footer() {
  return (
    <footer className="bg-pine text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt=""
              width={220}
              height={220}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="font-display text-xl font-bold">Avella</p>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-gold-soft">
                Medical Clinic
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.tagline} Comprehensive family health care for every stage of
            life.
          </p>
          <LeafMotif className="mt-6 h-10 w-10 text-gold-soft/60" />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/80 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Clinic Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span className="text-cream/60">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>
              {site.address.suite} – {site.address.street}
              <br />
              {site.address.city}
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-gold-soft">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}
