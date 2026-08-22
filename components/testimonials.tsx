import { CardCarousel } from "@/components/card-carousel";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Homeowners and businesses from across India — survey, subsidy, and
            after-sales included.
          </p>
        </div>

        <div className="mt-12 -mx-2.5">
          <CardCarousel>
            {TESTIMONIALS.map((item) => (
              <article
                key={item.name}
                className="flex h-full min-h-[220px] flex-col rounded-[clamp(1.1rem,2.5vw,1.4rem)] border border-zinc-200 bg-white p-6 sm:p-7"
              >
                <p className="flex-1 text-sm leading-relaxed text-zinc-600">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-bold text-zinc-900">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.location}</p>
                </div>
              </article>
            ))}
          </CardCarousel>
        </div>
      </div>
    </section>
  );
}
