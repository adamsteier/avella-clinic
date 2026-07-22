"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site-config";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-pine text-cream/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6">
          <p className="hidden sm:block">
            {site.address.suite} – {site.address.street}, {site.address.city}
          </p>
          <p className="hidden md:block text-cream/70">
            {site.hours[0].days}: {site.hours[0].hours}
          </p>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-semibold text-gold-soft hover:text-cream"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-ivory bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.jpeg"
              alt="Avella Medical Clinic"
              width={220}
              height={220}
              priority
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="leading-tight">
              <span className="block font-display text-2xl font-bold text-forest">
                Avella
              </span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Medical Clinic
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-forest ${
                    active
                      ? "text-forest underline decoration-gold-soft decoration-2 underline-offset-8"
                      : "text-ink/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={site.phoneHref}
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-fern lg:block"
          >
            Call to Book
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded p-2 text-forest lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="border-t border-ivory bg-cream px-4 pb-6 pt-2 lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ivory py-3 text-base font-medium text-ink/80 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-4 block rounded-full bg-forest px-5 py-3 text-center font-semibold text-cream"
            >
              Call to Book · {site.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
