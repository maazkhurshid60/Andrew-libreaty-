import { ArrowRight } from "../icons";

export default function FinalCta() {
  return (
    <section className="section section-final">
      <div className="container final-inner">
        <h2 className="final-title reveal">Beyond the Transaction</h2>
        <p className="final-copy reveal" data-reveal-delay="60">
          Our team brings together real-world experience, thoughtful strategy, and a calm, hands-on
          approach to help clients move with clarity. From homes to investments, we focus on smart
          decisions, not unnecessary complexity.
        </p>
        <div className="final-ctas reveal" data-reveal-delay="120">
          <a href="#contact" className="btn btn-primary btn-magnetic">
            <span>Contact Us</span>
            <ArrowRight />
          </a>
          <a href="#sold" className="btn btn-secondary">
            Browse Homes
          </a>
        </div>
      </div>
    </section>
  );
}
