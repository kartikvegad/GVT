import { EQUIPMENT, PARTNERS, WHY_CHOOSE } from "@/lib/site";

export function Quality() {
  return (
    <section id="equipment" className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Quality
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Only top-quality panels and equipment
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            TopCon modules, smart inverters, branded cables, and rust-free
            structures — chosen for Delhi heat, monsoon, and 25-year output.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT.map((item) => (
            <article
              key={item.title}
              data-animate
              className="rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-navy">{item.detail}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-zinc-900">
            Why homeowners choose GVT
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => (
              <article
                key={item.title}
                data-animate
                className="rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="text-base font-bold text-zinc-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-zinc-400">
            Modules and inverters from India’s leading manufacturers
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-zinc-700 uppercase">
            {PARTNERS.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
