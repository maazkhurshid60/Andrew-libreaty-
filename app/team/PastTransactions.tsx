import ComingSoon from "../components/ComingSoon";

export default function PastTransactions() {
  return (
    <section className="pt-section">
      <div className="container">
        <div className="pt-head reveal">
          <div>
            <h2 className="section-title">Past Transactions</h2>
            <p className="section-sub">
              A look at deals successfully navigated with strategy, discipline, and strong outcomes.
            </p>
          </div>
        </div>
        <ComingSoon
          heading="h2"
          title="Past Transactions Are Coming Soon"
          body="We're connecting our live transaction feed. Check back shortly to see deals we've closed across Los Angeles."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </div>
    </section>
  );
}
