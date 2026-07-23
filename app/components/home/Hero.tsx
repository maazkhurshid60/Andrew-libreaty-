import { ArrowRight } from "../icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-map-texture" aria-hidden="true">
        <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M-20 120 C180 90 320 210 520 170 S 840 90 940 140" />
            <path d="M-20 260 C160 240 340 330 560 290 S 820 220 940 270" />
            <path d="M-20 420 C200 380 360 470 580 430 S 830 370 940 410" />
            <path d="M-20 560 C190 540 380 620 600 570 S 840 500 940 560" />
            <path d="M140 -20 C160 160 90 340 150 520 S 210 640 190 740" />
            <path d="M380 -20 C400 140 330 320 390 500 S 450 620 430 740" />
            <path d="M640 -20 C660 160 590 340 650 520 S 700 640 680 740" />
            <circle cx="520" cy="170" r="4" />
            <circle cx="390" cy="500" r="4" />
            <circle cx="650" cy="290" r="4" />
          </g>
        </svg>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal">Los Angeles · Compass</p>
          <h1 className="hero-title reveal" data-reveal-delay="80">
            Good Moves
            <br />
            <em>Aren&rsquo;t Accidental</em>
          </h1>
          <p className="hero-sub reveal" data-reveal-delay="160">
            Strategic real estate guidance for buyers, sellers, and investors across
            Los&nbsp;Angeles.
          </p>
          <p className="hero-credentials reveal" data-reveal-delay="220">
            Andrew Ruric Liberty II&nbsp;|&nbsp;CA DRE# 01965696
            <br />
            Compass California, Inc.&nbsp;|&nbsp;CA DRE# 01991628
          </p>

          {/* Search capsule */}
          <div
            className="hero-capsule reveal"
            data-reveal-delay="280"
            role="navigation"
            aria-label="Quick actions"
          >
            <a href="#move" className="capsule-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="M5 9.5V21h14V9.5" />
              </svg>
              <span>Buy</span>
            </a>
            <a href="#valuation" className="capsule-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>Sell</span>
            </a>
            <a href="#valuation" className="capsule-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 5-6" />
              </svg>
              <span>Home Value</span>
            </a>
            <a href="#neighborhoods" className="capsule-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Neighborhoods</span>
            </a>
          </div>

          <div className="hero-ctas reveal" data-reveal-delay="340">
            <a href="#sold" className="btn btn-primary btn-magnetic">
              <span>Browse Homes</span>
              <ArrowRight />
            </a>
            <a href="#valuation" className="btn btn-secondary">
              Get Home Value
            </a>
            <a href="#about" className="btn btn-tertiary">
              Meet Andrew
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap parallax-float" data-depth="12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-la-aerial.jpg"
              alt="Los Angeles neighborhood aerial"
              className="hero-image"
              data-parallax
              fetchPriority="high"
            />
          </div>

          <div className="float-card float-card-property parallax-float" data-depth="26">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/studio-city.jpg" alt="Studio City" loading="lazy" />
            <div className="float-card-body">
              <span className="badge badge-gold">Studio City</span>
              <p className="float-card-title">Where Andrew works &amp; lives</p>
              <p className="float-card-meta">Local, block-by-block expertise</p>
            </div>
          </div>

          <div className="float-card float-card-valuation parallax-float" data-depth="40">
            <div className="valuation-ring" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 5-6" />
              </svg>
            </div>
            <div>
              <p className="float-card-title">Home Valuation</p>
              <p className="float-card-meta">Free &amp; confidential · No obligation</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="hero-stats reveal" data-reveal-delay="380">
        <li>
          <span className="stat-num">REALTOR®</span>
          <span className="stat-label">Licensed · CA DRE# 01965696</span>
        </li>
        <li>
          <span className="stat-num">RENE</span>
          <span className="stat-label">Certified Negotiation Expert</span>
        </li>
        <li>
          <span className="stat-num">Compass</span>
          <span className="stat-label">California affiliated</span>
        </li>
        <li>
          <span className="stat-num">Studio City</span>
          <span className="stat-label">Local market specialist</span>
        </li>
      </ul>

      <a href="#move" className="scroll-indicator" aria-label="Scroll to next section">
        <span className="scroll-indicator-line" aria-hidden="true"></span>
        <span className="scroll-indicator-text">Scroll</span>
      </a>
    </section>
  );
}
