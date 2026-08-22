import { PARTNERS } from "@/lib/site";

export function PartnerMarquee() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div className="section-pad bg-white !py-10 sm:!py-12">
      <p className="text-center text-lg font-semibold tracking-tight text-zinc-800 sm:text-xl md:text-2xl">
        Modules and inverters from India’s leading manufacturers
      </p>
      <div className="mt-3 overflow-hidden border-y border-zinc-100">
        <div className="marquee-track flex w-max items-center">
          {loop.map((partner, index) => {
            const duplicate = index >= PARTNERS.length;
            return (
              <span
                key={`${partner.name}-${index}`}
                className="flex h-14 w-32 shrink-0 items-center justify-center px-4 sm:h-16 sm:w-40 sm:px-5 md:w-44 md:px-6"
                aria-hidden={duplicate}
              >
                <img
                  src={partner.src}
                  alt={duplicate ? "" : partner.name}
                  className="max-h-8 max-w-full object-contain sm:max-h-9"
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
