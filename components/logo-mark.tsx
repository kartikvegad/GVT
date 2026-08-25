import Image from "next/image";

export function LogoMark() {
  return (
    <div className="logo-loader-stage">
      <div className="logo-loader-mark">
        <Image
          src="/logo.png"
          alt="GVT"
          width={240}
          height={189}
          priority
          className="logo-loader-img"
        />
      </div>
      <div className="logo-loader-track" aria-hidden="true">
        <span className="logo-loader-bar" />
      </div>
      <p className="logo-loader-caption">GVT · Solar EPC</p>
    </div>
  );
}
