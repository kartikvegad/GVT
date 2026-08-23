"use client";

import { FormEvent, useState } from "react";
import { CITIES, CONTACT, PROPERTY_TYPES } from "@/lib/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-pad bg-zinc-50">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-10 md:grid-cols-2 md:items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div data-animate="left">
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Book a site visit
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base">
            Share a few details and we will call with a rooftop size and next
            steps.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-zinc-700">
            <li>
              <span className="block text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Phone
              </span>
              <a href={CONTACT.phoneHref} className="hover:text-navy">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Email
              </span>
              <a href={CONTACT.emailHref} className="hover:text-navy">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Office
              </span>
              {CONTACT.office}
            </li>
            <li>
              <span className="block text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Serving
              </span>
              {CONTACT.region}
            </li>
            <li>
              <span className="block text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Hours
              </span>
              {CONTACT.hours}
            </li>
          </ul>
        </div>

        <div className="rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-6 sm:p-8" data-animate="right">
          {submitted ? (
            <div className="flex min-h-64 flex-col justify-center">
              <h3 className="text-xl font-bold text-zinc-900">Request received</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Thanks. We’ll get back to you shortly with a rooftop plan
                and next steps.
              </p>
              <button
                type="button"
                className="mt-6 self-start text-sm font-semibold text-navy underline-offset-4 hover:underline"
                onClick={() => setSubmitted(false)}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <label className="block text-sm font-medium text-zinc-700">
                Full name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 px-3 py-3 text-sm outline-none focus:border-navy"
                  placeholder="Anita Sharma"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 px-3 py-3 text-sm outline-none focus:border-navy"
                  placeholder="+91 95600 20713"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                City
                <select
                  required
                  name="city"
                  defaultValue="Delhi"
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-sm outline-none focus:border-navy"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                Property type
                <select
                  name="property"
                  defaultValue="Independent house"
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-sm outline-none focus:border-navy"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2 block text-sm font-medium text-zinc-700">
                When are you planning to go solar?
                <select
                  name="timeline"
                  defaultValue="1–3 months"
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-sm outline-none focus:border-navy"
                >
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>Just exploring for now</option>
                </select>
              </label>
              <label className="sm:col-span-2 block text-sm font-medium text-zinc-700">
                Message
                <textarea
                  name="message"
                  rows={3}
                  className="mt-1.5 w-full min-h-11 rounded-xl border border-zinc-200 px-3 py-3 text-sm outline-none focus:border-navy"
                  placeholder="Roof type, sanctioned load, or any questions…"
                />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-hover"
              >
                Book a site visit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
