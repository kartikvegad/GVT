import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "", priority = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo-sm.png"
        alt="GVT"
        width={48}
        height={41}
        className="h-10 w-auto sm:h-11"
        priority={priority}
      />
      <span className="text-lg font-bold tracking-tight text-foreground">GVT</span>
    </span>
  );
}
