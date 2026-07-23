import { ArrowRight } from "../icons";

export default function WhatsTheMove() {
  return (
    <section className="section section-move" id="move">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Start Here</p>
          <h2 className="section-title">What&rsquo;s the Move?</h2>
          <p className="section-sub">A clearer path forward starts with the right first step.</p>
        </div>

        <div className="move-grid">
          <article className="move-card reveal">
            <div className="move-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="M5 9.5V21h14V9.5" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </div>
            <h3>Buy a Home</h3>
            <p>
              Find the right home at the right price, with a certified negotiator reading the
              market on your side.
            </p>
            <a href="#sold" className="btn btn-secondary btn-card">
              <span>Start Home Search</span>
              <ArrowRight />
            </a>
          </article>

          <article className="move-card move-card-featured reveal" data-reveal-delay="100">
            <div className="move-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22V3" />
                <path d="M6 4h11.5L21 7.5 17.5 11H6" />
              </svg>
            </div>
            <h3>Sell a Home</h3>
            <p>
              Price it right, position it well, and let a certified negotiation expert handle the
              offers.
            </p>
            <p className="move-proof">Positioning · pricing · negotiation, handled</p>
            <a href="#valuation" className="btn btn-primary btn-magnetic btn-card">
              <span>Get Home Value</span>
              <ArrowRight />
            </a>
          </article>

          <article className="move-card reveal" data-reveal-delay="200">
            <div className="move-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V8l6-4v17" />
                <path d="M11 21V12h8v9" />
                <path d="M8 9h.01M8 13h.01M8 17h.01M15 15h.01M15 18h.01" />
              </svg>
            </div>
            <h3>Invest Strategically</h3>
            <p>From duplexes to development lots, every deal gets evaluated on the numbers first.</p>
            <a href="#contact" className="btn btn-secondary btn-card">
              <span>Explore Opportunities</span>
              <ArrowRight />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
