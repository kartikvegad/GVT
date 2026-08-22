"use client";

import { FAQS } from "@/lib/site";
import { useState } from "react";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(4.75rem,10vw,8rem)]">
      <div className="mx-auto w-[min(94%,40rem)]">
        <div className="text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            FAQs
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Your common solar questions, answered
          </h2>
        </div>

        <ul className="mt-10 divide-y divide-zinc-200 rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white" data-animate>
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-lg text-navy" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-500 sm:px-6">
                    {item.answer}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
