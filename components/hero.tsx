"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { AVATARS, HERO_SLIDES } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = HERO_SLIDES[index] ?? HERO_SLIDES[0];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="px-[clamp(0.75rem,3vw,2rem)]">
      <div className="relative mx-auto min-h-[28rem] w-[min(94%,72rem)] overflow-hidden rounded-[clamp(1.25rem,3vw,2.25rem)] h-[clamp(28rem,78vw,36rem)] lg:h-[clamp(32rem,52vw,42rem)]">
        {HERO_SLIDES.map((item, slideIndex) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={slideIndex === 0}
              className={`object-cover object-center ${slideIndex === index ? "hero-kenburns" : ""}`}
              sizes="min(94vw, 72rem)"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
        <div className="pointer-events-none absolute inset-x-0 top-[8%] text-center sm:top-[10%]">
          <p className="select-none text-[clamp(4.5rem,18vw,11rem)] leading-none font-extrabold tracking-tight text-white/20">
            GVT
          </p>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end gap-[clamp(1.25rem,3vw,2rem)] p-[clamp(1.25rem,4vw,3.5rem)] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="hero-copy mb-3 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
              Solar EPC · Pan-India
            </p>
            <h1
              key={slide.title}
              className="hero-copy text-[clamp(1.75rem,4vw,3rem)] leading-tight font-bold text-white"
            >
              {slide.title}
            </h1>
            <p
              key={slide.text}
              className="hero-copy-delay mt-4 max-w-md text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-white/90"
            >
              {slide.text}
            </p>
            <div className="hero-copy-late mt-7 flex flex-wrap items-center gap-4">
              <CtaButton href="#contact">Get Free Consultation</CtaButton>
              <div className="flex gap-2">
                {HERO_SLIDES.map((item, dot) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show slide ${dot + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      dot === index ? "w-8 bg-white" : "w-2 bg-white/45"
                    }`}
                    onClick={() => setIndex(dot)}
                  />
                ))}
              </div>
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
              <p className="text-sm text-white/90">500+ Homes across India</p>
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
      {Array.from({ length: 5 }).map((_, starIndex) => (
        <svg
          key={starIndex}
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
