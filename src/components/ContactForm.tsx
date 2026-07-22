"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";

/**
 * No-backend contact form: composes a pre-filled email in the
 * visitor's own mail app. Swap for a real endpoint when one exists.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Appointment request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-sage/40 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-forest">
          Your name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-forest">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(604) 555-0000"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-forest">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us briefly what you'd like to book or ask about. Please don't include sensitive medical details."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-forest px-7 py-3 font-semibold text-cream transition-colors hover:bg-fern"
      >
        Open Email to Send
      </button>
      <p className="text-xs leading-relaxed text-ink/55">
        This opens a pre-filled message in your email app. For urgent matters,
        please call the clinic directly. If this is an emergency, call 911.
      </p>
    </form>
  );
}
