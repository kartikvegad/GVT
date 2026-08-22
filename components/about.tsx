import { Marquee } from "@/components/marquee";
import { MARQUEE_TAGS } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-zinc-50">
      <div className="section-pad pb-0">
        <div className="mx-auto grid w-[min(94%,72rem)] gap-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div data-animate="left">
            <p className="text-sm font-semibold tracking-wide text-navy uppercase">
              About us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Solar for Indian rooftops, handled end to end
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base" data-animate="right">
            <p>
              GVT is a solar EPC for homes, societies, and businesses in India.
              We cover consultancy, design, supply, construction, net metering,
              and subsidy filing under one roof.
            </p>
            <p>
              The process stays clear from the first site visit through
              commissioning. You get a layout built for your roof, load, and
              DISCOM rules — then support after the plant is live.
            </p>
            <p>
              If you are ready to put solar on your rooftop, we would like to
              take the next step with you.
            </p>
          </div>
        </div>
      </div>
      <Marquee items={MARQUEE_TAGS} className="mt-8 sm:mt-10" />
    </section>
  );
}
