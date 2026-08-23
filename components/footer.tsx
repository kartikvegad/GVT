import { BrandMark } from "@/components/brand-mark";
import { DesignedByDot } from "@/components/designed-by-dot";
import { CONTACT, FOOTER_LINKS, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-[clamp(0.75rem,3vw,2rem)] py-6 sm:py-7">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:items-start">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" aria-label="GVT home">
            <BrandMark className="h-10 w-auto sm:h-11" />
          </a>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-zinc-500 sm:text-sm">
            MNRE-aligned solar EPC for homes, societies, and businesses across
            India — from rooftop survey to after-sales.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Quick links
          </p>
          <nav
            className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm text-zinc-600"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="rounded py-0.5 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded py-0.5 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Contact
          </p>
          <ul className="mt-2 space-y-1 text-sm leading-snug text-zinc-600">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-navy">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="hover:text-navy">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.office}</li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-5 flex w-[min(94%,72rem)] flex-col items-center gap-2 border-t border-zinc-100 pt-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} GVT. All rights reserved.</p>
        <p className="text-center sm:flex-1 sm:px-4 sm:text-center">Serving {CONTACT.region}.</p>
        <DesignedByDot />
      </div>
    </footer>
  );
}
