import { ArrowRight } from "../icons";
import { HomeHashtagIcon, DollarSquareIcon, FavoriteChartIcon } from "../vuesax";

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
              <HomeHashtagIcon />
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
              <DollarSquareIcon />
            </div>
            <h3>Sell a Home</h3>
            <p>
              Price it right, position it well, and let a certified negotiation expert handle the
              offers.
            </p>
            <p className="move-proof">Positioning · pricing · negotiation, handled</p>
            <a href="#valuation" className="btn btn-secondary btn-card">
              <span>Get Home Value</span>
              <ArrowRight />
            </a>
          </article>

          <article className="move-card reveal" data-reveal-delay="200">
            <div className="move-icon" aria-hidden="true">
              <FavoriteChartIcon />
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
