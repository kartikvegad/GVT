import Image from "next/image";
import { CardFillBlob } from "@/components/card-fill";
import { FeatureIcon } from "@/components/feature-icon";
import { FEATURES } from "@/lib/site";

export function WhySolar() {
  const left = FEATURES.slice(0, 2);
  const right = FEATURES.slice(2);

  return (
    <section id="why-solar" className="section-pad">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight text-zinc-900">
            Why homeowners and businesses choose solar with GVT
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Across Delhi, UP, Haryana, Rajasthan, Uttarakhand, and Punjab, we
            design rooftop plants around your load, DISCOM rules, and roof —
            so the system works for how you actually use power, not as a
            one-size kit.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-[1fr_minmax(220px,32%)_1fr] lg:gap-6">
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 lg:col-start-1">
            {left.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} delay={index + 1} />
            ))}
          </div>

          <div
            data-animate="scale"
            className="group relative min-h-[min(58vw,22rem)] overflow-hidden rounded-[clamp(1.1rem,2.5vw,1.4rem)] md:col-span-2 md:min-h-72 lg:col-span-1 lg:col-start-2 lg:min-h-full"
          >
            <Image
              src="/images/technician.jpg"
              alt="Solar technician inspecting a field of panels"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 94vw, 32vw"
            />
          </div>

          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 lg:col-start-3">
            {right.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} delay={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  id,
  title,
  description,
  delay,
}: {
  id: (typeof FEATURES)[number]["id"];
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <article
      data-animate
      data-delay={String(delay)}
      className="card-fill group relative z-0 flex flex-1 flex-col overflow-hidden rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-[clamp(1.25rem,2.5vw,1.75rem)]"
    >
      <CardFillBlob />
      <div className="relative z-10">
        <div className="text-icon-blue duration-500 group-hover:text-white">
          <FeatureIcon id={id} />
        </div>
        <h3 className="mt-5 text-lg font-bold text-zinc-900 duration-500 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 duration-500 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </article>
  );
}
