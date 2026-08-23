import Image from "next/image";
import { DESIGN_CREDIT } from "@/lib/site";

export function DesignedByDot() {
  return (
    <a
      href={DESIGN_CREDIT.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-lg py-1 transition-opacity hover:opacity-80"
      aria-label={`${DESIGN_CREDIT.label} ${DESIGN_CREDIT.name}`}
    >
      <span className="text-xs text-zinc-400">{DESIGN_CREDIT.label}</span>
      <Image
        src={DESIGN_CREDIT.logoSrc}
        alt={DESIGN_CREDIT.name}
        width={113}
        height={44}
        className="h-5 w-auto"
      />
    </a>
  );
}
