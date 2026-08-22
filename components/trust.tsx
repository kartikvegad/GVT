import Image from "next/image";
import { STATS, TRUST_IMAGES } from "@/lib/site";

export function Trust() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-16">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:flex lg:flex-col lg:justify-start lg:gap-10">
          {STATS.map((stat, index) => (
            <li key={stat.label} data-animate="left" data-delay={String(index + 1)}>
              <p className="text-[clamp(1.25rem,3vw,2rem)] font-bold tracking-tight text-zinc-800">
                {stat.kicker}
              </p>
              <p className="mt-1 text-sm text-zinc-500 sm:text-base">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div data-animate>
          <p className="text-sm font-medium text-zinc-400">Solar EPC in India</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.35rem,2.8vw,2rem)] leading-snug font-bold tracking-tight text-zinc-900">
            MNRE-aligned design, certified TopCon panels, and a clear path
            from survey to handover.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-[clamp(0.5rem,1.4vw,1rem)]">
            {TRUST_IMAGES.map((image, index) => (
              <div
                key={image.src}
                data-animate="scale"
                data-delay={String(index + 1)}
                className="group relative aspect-[5/4] overflow-hidden rounded-[clamp(0.75rem,2vw,1.25rem)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
