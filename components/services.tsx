import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Complete solar EPC, from consultancy to AMC
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Site assessment, 3D design, subsidy paperwork, financing, installation,
            and after-sales — one team, no hidden costs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              data-animate
              data-delay={String((index % 3) + 1)}
              className="rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-icon-blue">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-zinc-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
