import { ArrowIcon } from "@/components/cta-button";

export function CardFillBlob() {
  return <span className="card-fill-blob" aria-hidden="true" />;
}

export function CardMoreInfo({ href = "#contact" }: { href?: string }) {
  return (
    <a href={href} className="card-more-info">
      <span className="card-more-info-label">More Info</span>
      <ArrowIcon />
    </a>
  );
}
