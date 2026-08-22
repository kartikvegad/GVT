"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { HERO_SLIDES } from "@/lib/site";

export function Hero() {
  const pinRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const root = document.documentElement;
    if (!pinRef.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function setMetrics() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rem = parseFloat(getComputedStyle(root).fontSize) || 16;
      const navH =
        parseFloat(getComputedStyle(root).getPropertyValue("--nav-h")) ||
        5.25 * rem;
      const pad = Math.min(2 * rem, Math.max(0.75 * rem, vw * 0.03));
      const cardW = Math.min((vw - 2 * pad) * 0.94, 72 * rem);
      let cardH =
        vw >= 1024
          ? Math.min(42 * rem, Math.max(32 * rem, vw * 0.52))
          : Math.min(36 * rem, Math.max(28 * rem, vw * 0.78));
      cardH = Math.min(cardH, Math.max(18 * rem, vh - navH - 12));
      const radius = Math.min(2.25 * rem, Math.max(1.25 * rem, vw * 0.03));

      root.style.setProperty("--hero-inset-x", `${Math.max(0, (vw - cardW) / 2)}px`);
      root.style.setProperty("--hero-card-h", `${cardH}px`);
      root.style.setProperty("--hero-radius", `${radius}px`);
    }

    function setProgress() {
      if (reduced) {
        root.style.setProperty("--hero-p", "1");
        return;
      }

      const morph = window.innerHeight * 0.55;
      const raw =
        morph <= 0 ? 1 : Math.min(1, Math.max(0, window.scrollY / morph));
      const eased = raw * raw * (3 - 2 * raw);
      root.style.setProperty("--hero-p", eased.toFixed(4));
    }

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setProgress();
      });
    }

    function onResize() {
      setMetrics();
      setProgress();
    }

    setMetrics();
    setProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" ref={pinRef} className="hero-pin">
      <div className="hero-sticky">
        <div className="hero-frame">
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
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />

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
                <CtaButton href="#contact">Book a site visit</CtaButton>
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

            <div className="hero-copy-late rounded-2xl bg-black/25 px-4 py-3 backdrop-blur-sm lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
              <p className="text-sm font-semibold text-white">Turnkey rooftop solar</p>
              <p className="text-sm text-white/90">Survey, design, install, and after-sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
