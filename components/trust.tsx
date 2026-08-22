import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { STATS, TRUST_IMAGES } from "@/lib/site";

export function Trust() {
  return (
    <section className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-12 lg:grid-cols-[0.38fr_1fr] lg:items-start lg:gap-16">
        <ul className="flex flex-row justify-between gap-6 lg:flex-col lg:justify-start lg:gap-10">
          {STATS.map((stat, index) => (
            <li key={stat.label} data-animate="left" data-delay={String(index + 1)}>
              <p className="text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-zinc-800">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-zinc-500 sm:text-base">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div data-animate>
          <p className="text-sm font-medium text-zinc-400">Trusted by families across India</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.4rem,2.6vw,2rem)] leading-snug font-bold tracking-tight text-zinc-900">
            MNRE-aligned solar EPC — clear pricing, certified TopCon panels,
            and guaranteed protection from survey to 25-year performance.
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-[clamp(0.5rem,1.4vw,1rem)]">
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
                  sizes="(max-width: 1024px) 30vw, 220px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
