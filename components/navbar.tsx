"use client";

import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { NAV_LINKS } from "@/lib/site";

type NavId = (typeof NAV_LINKS)[number]["id"];

const SPY_SECTIONS = [
  { id: "home", nav: "home" },
  { id: "why-solar", nav: "home" },
  { id: "about", nav: "about" },
  { id: "process", nav: "process" },
  { id: "services", nav: "services" },
  { id: "quality", nav: "quality" },
  { id: "projects", nav: "projects" },
  { id: "faq", nav: "faq" },
  { id: "contact", nav: "faq" },
] as const;

function isNavActive(id: NavId, active: string): boolean {
  switch (id) {
    case "home":
      return active === "home";
    case "about":
      return active === "about";
    case "process":
      return active === "process";
    case "services":
      return active === "services";
    case "quality":
      return active === "quality";
    case "projects":
      return active === "projects";
    case "faq":
      return active === "faq";
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

function readActiveNav(): NavId {
  const navH =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
    ) || 84;
  const probe = navH + 24;
  let current: NavId = "home";

  for (const section of SPY_SECTIONS) {
    const element = document.getElementById(section.id);
    if (!element) continue;
    if (element.getBoundingClientRect().top - probe <= 0) {
      current = section.nav;
    }
  }

  return current;
}

export function Navbar() {
  const barRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavId>("home");

  useEffect(() => {
    let frame = 0;

    function update() {
      if (lockRef.current) return;
      const next = readActiveNav();
      setActive((current) => (current === next ? current : next));
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    function apply() {
      const el = barRef.current;
      if (!el) return;
      document.documentElement.style.setProperty(
        "--nav-h",
        `${el.offsetHeight}px`,
      );
    }

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  function onNavClick(id: NavId) {
    setActive(id);
    lockRef.current = id;
    window.setTimeout(() => {
      if (lockRef.current === id) lockRef.current = null;
    }, 1200);
    setOpen(false);
  }

  return (
    <header className="site-header" data-menu-open={open ? "true" : "false"}>
      <div
        ref={barRef}
        className="mx-auto flex w-[min(94%,72rem)] items-center justify-between gap-4 py-[clamp(0.65rem,1.6vw,1rem)]"
      >
        <a
          href="#home"
          aria-label="GVT home"
          className="site-header-mark"
          onClick={() => onNavClick("home")}
        >
          <BrandMark priority />
        </a>

        <nav
          className="site-nav hidden items-center rounded-full p-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive = isNavActive(link.id, active);

            return (
              <a
                key={link.id}
                href={link.href}
                className={`site-nav-link rounded-full px-[clamp(0.55rem,1.1vw,0.9rem)] py-2 text-sm font-medium ${
                  isActive ? "is-active" : ""
                }`}
                onClick={() => onNavClick(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="#contact">Contact Us</CtaButton>
        </div>

        <button
          type="button"
          className="site-menu-btn inline-flex size-10 items-center justify-center rounded-full border lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-100 bg-white px-[clamp(0.75rem,3vw,2rem)] py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                onClick={() => onNavClick(link.id)}
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
