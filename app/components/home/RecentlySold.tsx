import ComingSoon from "../ComingSoon";

export default function RecentlySold({
  title = "Recently Sold",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
} = {}) {
  return (
    <section className="section section-sold" id="sold">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
        <ComingSoon
          heading="h2"
          title="Recently Sold Is Coming Soon"
          body="We're connecting our live transaction feed. Check back shortly to see recent sales across Los Angeles."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </div>
    </section>
  );
}
