import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
};

export function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-navy py-1.5 pr-1.5 pl-5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-navy-hover hover:shadow-md"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

export function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
