"use client";

import { BILL_RANGES } from "@/lib/site";
import { useState } from "react";

type BillId = (typeof BILL_RANGES)[number]["id"];

export function Savings() {
  const [bill, setBill] = useState<BillId>("high");
  const estimate = BILL_RANGES.find((range) => range.id === bill) ?? BILL_RANGES[2];

  return (
    <section id="savings" className="bg-zinc-50 px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Savings calculator
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Estimate your solar savings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Pick your monthly electricity bill. We’ll suggest a typical system
            size and yearly saving for a Delhi NCR rooftop — then confirm it on
            a free site visit.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-6 sm:p-8" data-animate>
          <p className="text-sm font-medium text-zinc-700">
            Monthly electricity bill (approximate)
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {BILL_RANGES.map((range) => {
              const selected = range.id === bill;
              return (
                <button
                  key={range.id}
                  type="button"
                  onClick={() => setBill(range.id)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selected
                      ? "border-navy bg-navy text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-navy/40"
                  }`}
                >
                  {range.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Suggested size
              </p>
              <p className="mt-1 text-xl font-bold text-zinc-900">{estimate.size}</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Indicative saving
              </p>
              <p className="mt-1 text-xl font-bold text-zinc-900">{estimate.save}</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Bill cut
              </p>
              <p className="mt-1 text-xl font-bold text-zinc-900">Up to 90%</p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-hover"
          >
            Get a precise quote
          </a>
        </div>
      </div>
    </section>
  );
}
