"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";

type CardCarouselProps = {
  children: ReactNode;
  autoMs?: number;
};

export function CardCarousel({ children, autoMs = 5500 }: CardCarouselProps) {
  const slides = Children.toArray(children);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, count - perView);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, autoMs);
    return () => window.clearInterval(timer);
  }, [autoMs, maxIndex, paused]);

  function go(next: number) {
    setIndex(Math.max(0, Math.min(maxIndex, next)));
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setPaused(true);
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    window.setTimeout(() => setPaused(false), 800);

    if (startX === null || maxIndex === 0) return;
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;

    if (Math.abs(delta) < 48) return;
    if (delta < 0) go(index + 1);
    else go(index - 1);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden px-1 py-4">
        <div
          className="flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {slides.map((child, childIndex) => (
            <div
              key={childIndex}
              className="flex min-h-0 shrink-0 px-2.5"
              style={{ flex: `0 0 ${100 / perView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 ? (
        <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            className="touch-target rounded-full border border-zinc-200 bg-white text-lg text-navy transition hover:bg-zinc-50"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <div className="flex gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to slide ${dot + 1}`}
                className="touch-target rounded-full"
                onClick={() => go(dot)}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    dot === index ? "w-6 bg-navy" : "w-2 bg-zinc-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className="touch-target rounded-full border border-zinc-200 bg-white text-lg text-navy transition hover:bg-zinc-50"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
