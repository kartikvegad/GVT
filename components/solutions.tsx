import Image from "next/image";
import { SOLUTIONS } from "@/lib/site";

export function Solutions() {
  return (
    <section id="solutions" className="bg-zinc-50 px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="max-w-2xl" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Solutions
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
            <article
              key={solution.title}
              data-animate
              className="group overflow-hidden rounded-[clamp(1.1rem,2.5vw,1.4rem)] bg-white shadow-sm ring-1 ring-zinc-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
          ))}
        </div>
      </div>
    </section>
  );
}
