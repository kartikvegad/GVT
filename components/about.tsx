export function About() {
  return (
    <section id="about" className="bg-zinc-50 px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div data-animate="left">
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            About us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Powering India’s rooftops with simple, reliable solar
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base" data-animate="right">
          <p>
            In a country with abundant sunlight but rising power bills, too many
            homeowners still feel stuck — too many vendors, confusing prices,
            technical jargon, and weak after-sales. GVT was built to change
            that, starting with homes across Delhi NCR.
          </p>
          <p>
            We are an MNRE-aligned solar EPC: consultancy, design, supply,
            construction, net metering, subsidy filing, and long-term AMC under
            one roof. Clean energy should be simple, reliable, and built to last.
          </p>
          <p>
            As we grow, one rooftop at a time, we are building a community of
            solar-powered homes — not just an energy company. Let’s light up your
            home with the power of the sun.
          </p>
        </div>
      </div>
    </section>
  );
}
