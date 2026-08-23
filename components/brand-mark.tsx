import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "h-14 w-auto sm:h-16", priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/logo-sm.png"
      alt="GVT"
      width={240}
      height={189}
      className={className}
      priority={priority}
    />
  );
}
