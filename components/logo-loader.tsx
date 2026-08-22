"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";

export function LogoLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? 0 : 1100;
    const started = performance.now();
    let hidden = false;

    function hide() {
      if (hidden) return;
      hidden = true;
      const wait = Math.max(0, minMs - (performance.now() - started));
      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), reduced ? 0 : 450);
      }, wait);
    }

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    const failSafe = window.setTimeout(hide, 2500);
    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(failSafe);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`logo-loader ${leaving ? "is-leaving" : ""}`}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <span className="sr-only">Loading GVT</span>
      <LogoMark />
    </div>
  );
}
