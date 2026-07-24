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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/home-hashtag.png" alt="" className="move-icon-img" />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/dollar-square.png" alt="" className="move-icon-img" />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/favorite-chart.png" alt="" className="move-icon-img" />
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
