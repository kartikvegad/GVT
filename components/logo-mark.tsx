import Image from "next/image";

export function LogoMark() {
  return (
    <div className="logo-loader-mark">
      <span className="logo-loader-ring" aria-hidden="true" />
      <span className="logo-loader-glow" aria-hidden="true" />
      <Image
        src="/logo.png"
        alt="GVT"
        width={240}
        height={189}
        priority
        className="logo-loader-img"
      />
    </div>
  );
}
