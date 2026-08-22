import { PARTNERS } from "@/lib/site";

export function PartnerMarquee() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div className="bg-white">
      <p className="px-[clamp(0.75rem,3vw,2rem)] text-center text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl">
        Modules and inverters from India’s leading manufacturers
      </p>
      <div className="mt-2 overflow-hidden border-y border-zinc-100">
        <div className="marquee-track flex w-max items-center">
          {loop.map((partner, index) => {
            const duplicate = index >= PARTNERS.length;
            return (
              <span
                key={`${partner.name}-${index}`}
                className="flex h-16 w-44 shrink-0 items-center justify-center px-6"
                aria-hidden={duplicate}
              >
                <img
                  src={partner.src}
                  alt={duplicate ? "" : partner.name}
                  className="max-h-9 max-w-full object-contain"
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
