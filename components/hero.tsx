import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { AVATARS } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="px-[clamp(0.75rem,3vw,2rem)]">
      <div className="relative mx-auto w-[min(94%,72rem)] overflow-hidden rounded-[clamp(1.25rem,3vw,2.25rem)] h-[clamp(28rem,78vw,36rem)] lg:h-[clamp(32rem,52vw,42rem)]">
        <Image
          src="/images/hero.jpg"
          alt="Solar panels under a bright blue sky"
          fill
          priority
          className="hero-kenburns object-cover object-center"
          sizes="min(94vw, 72rem)"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/15" />
        <div className="pointer-events-none absolute inset-x-0 top-[8%] text-center sm:top-[10%]">
          <p className="select-none text-[clamp(4.5rem,18vw,11rem)] leading-none font-extrabold tracking-tight text-white/20">
            GVT
          </p>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end gap-[clamp(1.25rem,3vw,2rem)] p-[clamp(1.25rem,4vw,3.5rem)] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h1 className="hero-copy text-[clamp(1.75rem,4vw,3rem)] leading-tight font-bold text-white">
              Build a Better Future with Solar Power
            </h1>
            <p className="hero-copy-delay mt-4 max-w-md text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-white/90">
              Cut electricity bills by up to 90% with MNRE-aligned rooftop solar
              for homes and businesses across Delhi NCR. TopCon panels, net
              metering, and subsidy support — handled end to end.
            </p>
            <div className="hero-copy-late mt-7">
              <CtaButton href="#contact">Get Free Consultation</CtaButton>
            </div>
          </div>

          <div className="hero-copy-late flex items-center gap-3 rounded-2xl bg-black/25 p-3 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="flex -space-x-3">
              {AVATARS.map((avatar) => (
                <Image
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <StarRow />
                <span className="text-sm font-semibold text-white">(5.0)</span>
              </div>
              <p className="text-sm text-white/90">500+ Delhi NCR Homes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="size-4 fill-current"
          aria-hidden="true"
        >
          <path d="M10 1.5 12.6 7l6 .5-4.6 4 1.4 5.8L10 14.8 4.6 17.3 6 11.5 1.4 7.5l6-.5L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}
