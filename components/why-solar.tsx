import Image from "next/image";
import { FeatureIcon } from "@/components/feature-icon";
import { FEATURES } from "@/lib/site";

export function WhySolar() {
  const left = FEATURES.slice(0, 2);
  const right = FEATURES.slice(2);

  return (
    <section
      id="why-solar"
      className="px-[clamp(0.75rem,3vw,2rem)] pb-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight text-zinc-900">
            Why Switch to Solar?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            India has 300+ sunny days a year. Going solar cuts DISCOM bills,
            keeps the AC running, and turns your rooftop into a green powerhouse.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_minmax(220px,32%)_1fr] lg:gap-6">
          <div className="flex flex-col gap-5">
            {left.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} delay={index + 1} />
            ))}
          </div>

          <div
            data-animate="scale"
            className="group relative min-h-[min(58vw,22rem)] overflow-hidden rounded-[clamp(1.1rem,2.5vw,1.4rem)] lg:min-h-full"
          >
            <Image
              src="/images/technician.jpg"
              alt="Solar technician inspecting a field of panels"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 94vw, 32vw"
            />
          </div>

          <div className="flex flex-col gap-5">
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
      className="flex flex-1 flex-col rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-[clamp(1.25rem,2.5vw,1.75rem)] transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="text-icon-blue">
        <FeatureIcon id={id} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
    </article>
  );
}
