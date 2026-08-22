import { PLANS } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Clear pricing. No hidden costs.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Typical on-grid costs for Delhi NCR. Final quotes depend on roof,
            structure, TopCon module choice, and the subsidy you are eligible for.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-animate
              className={`flex flex-col rounded-[clamp(1.1rem,2.5vw,1.4rem)] p-7 transition duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-navy text-white shadow-lg hover:shadow-xl"
                  : "border border-zinc-200 bg-white hover:shadow-md"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  plan.highlighted ? "text-sky-200" : "text-navy"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-2 text-3xl font-bold">{plan.size}</p>
              <p className="mt-1 text-2xl font-semibold">{plan.price}</p>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-white/70" : "text-zinc-500"
                }`}
              >
                {plan.note}
              </p>
              <p
                className={`mt-4 text-sm ${
                  plan.highlighted ? "text-white/80" : "text-zinc-600"
                }`}
              >
                {plan.bestFor}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckIcon highlighted={plan.highlighted} />
                    <span className={plan.highlighted ? "text-white/90" : "text-zinc-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.highlighted ? (
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-zinc-100"
                  >
                    Get this plan
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-zinc-50"
                  >
                    Request a quote
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Need a larger commercial plant?{" "}
          <a href="#contact" className="font-semibold text-navy hover:underline">
            Talk to our team
          </a>
        </p>
      </div>
    </section>
  );
}

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`mt-0.5 size-4 shrink-0 ${
        highlighted ? "text-sky-200" : "text-navy"
      }`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 8 14.5 16 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
