import { ArrowRight } from "./icons";

/** Shared "Coming Soon" block for listing surfaces not yet wired to a live
 *  data feed. Reuses the existing .pd-soon styling from the property-detail
 *  not-found state so every placeholder looks consistent. */
export default function ComingSoon({
  heading = "h1",
  badge = "Coming Soon",
  title,
  body,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: {
  heading?: "h1" | "h2";
  badge?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const Heading = heading;
  return (
    <div className="pd-soon">
      <span className="pd-soon-badge">{badge}</span>
      <Heading>{title}</Heading>
      <p>{body}</p>
      <a href={ctaHref} className="btn btn-gold btn-magnetic">
        <span>{ctaLabel}</span>
        <ArrowRight />
      </a>
    </div>
  );
}
