import { BrandMark } from "@/components/brand-mark";
import { CONTACT, FOOTER_LINKS, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-[clamp(0.75rem,3vw,2rem)] py-10">
      <div className="mx-auto grid w-[min(94%,72rem)] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" aria-label="GVT home">
            <BrandMark />
          </a>
          <p className="mt-3 max-w-xs text-sm text-zinc-500">
            MNRE-aligned solar EPC for homes, societies, and businesses across
            India — from rooftop survey to after-sales.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Quick links
          </p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-zinc-600" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block rounded-lg py-2 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="block rounded-lg py-2 hover:text-navy">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.office}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-[min(94%,72rem)] flex-col gap-2 border-t border-zinc-100 pt-6 text-xs text-zinc-400 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} GVT. All rights reserved.</p>
        <p>Serving homes and businesses across India.</p>
      </div>
    </footer>
  );
}
