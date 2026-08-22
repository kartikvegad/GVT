import type { FeatureId } from "@/lib/site";

type FeatureIconProps = {
  id: FeatureId;
};

export function FeatureIcon({ id }: FeatureIconProps) {
  switch (id) {
    case "bills":
      return <HousePlugIcon />;
    case "independence":
      return <ShieldBoltIcon />;
    case "eco":
      return <EcoCloudIcon />;
    case "value":
      return <GrowthChartIcon />;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}

function HousePlugIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="size-8" aria-hidden="true">
      <path
        d="M6 14.5 16 6l10 8.5V26a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 6 26V14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13 18.5v4M19 18.5v4M13 22.5h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldBoltIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="size-8" aria-hidden="true">
      <path
        d="M16 5 7 9v8.2c0 5.3 3.7 8.8 9 10.3 5.3-1.5 9-5 9-10.3V9L16 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 11.5 13 17h6l-4.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EcoCloudIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="size-8" aria-hidden="true">
      <path
        d="M10 20.5h12.2A4.3 4.3 0 0 0 26 16.8c0-2.2-1.7-4-3.9-4.2A6.2 6.2 0 0 0 10.2 14 4.4 4.4 0 0 0 10 20.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 22.5c1.4 2.2 3.6 2.2 5 0 1.4 2.2 3.6 2.2 5 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrowthChartIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="size-8" aria-hidden="true">
      <path
        d="M6 24h20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 20v4M13.5 16v8M19 12.5v11.5M24.5 8v16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 14.5 13 12l5.2 2.2L24.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
