"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ids = [
      "home",
      "why-solar",
      "about",
      "solutions",
      "services",
      "process",
      "equipment",
      "projects",
      "reviews",
      "pricing",
      "savings",
      "faq",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.45] },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setReady(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        ready && scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex w-[min(94%,72rem)] items-center justify-between gap-4 py-[clamp(0.65rem,1.6vw,1rem)]">
        <a href="#home" aria-label="GVT home">
          <BrandMark priority />
        </a>

        <nav
          className="hidden items-center rounded-full bg-zinc-100 p-1 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.id === "home"
                ? active === "home" || active === "why-solar" || active === "about"
                : link.id === "services"
                  ? active === "services" ||
                    active === "process" ||
                    active === "equipment"
                  : link.id === "projects"
                    ? active === "projects" || active === "reviews"
                    : link.id === "pricing"
                      ? active === "pricing" ||
                        active === "savings" ||
                        active === "faq"
                      : active === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`rounded-full px-[clamp(0.75rem,1.4vw,1rem)] py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-foreground shadow-sm"
                    : "text-zinc-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <CtaButton href="#contact">Contact Us</CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-100 bg-white px-[clamp(0.75rem,3vw,2rem)] py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl px-3 py-2.5 text-sm font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
