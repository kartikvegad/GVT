import Image from "next/image";
import { SOLUTIONS } from "@/lib/site";

export function Solutions() {
  return (
    <section id="services" className="bg-zinc-50 px-[clamp(0.75rem,3vw,2rem)] py-[clamp(4.75rem,10vw,8rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="max-w-2xl" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Turn your rooftop into a green powerhouse
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Residential, society, and industrial plants — on-grid, hybrid, or
            RESCO — designed around your load, roof, and DISCOM rules anywhere in India.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="img-card" data-animate>
              <article className="img-card-inner">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 94vw, 47vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {solution.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
