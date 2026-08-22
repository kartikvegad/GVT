type MarqueeProps = {
  items: readonly string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={`overflow-hidden border-y border-zinc-100 bg-white ${className}`}>
      <div className="marquee-track flex w-max items-center gap-8 py-4 pr-8">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 text-sm font-semibold tracking-wide text-navy uppercase"
          >
            {item}
            <span className="size-1.5 rounded-full bg-icon-blue" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
