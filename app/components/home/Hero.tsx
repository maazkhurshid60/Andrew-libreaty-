import { ArrowRight } from "../icons";
import { HomeHashtagIcon, DollarSquareIcon, FavoriteChartIcon, LocationIcon } from "../vuesax";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-la-aerial.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />

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
            <a href="/home-search" className="capsule-item">
              <HomeHashtagIcon className="capsule-icon" />
              <span>Buy</span>
            </a>
            <a href="/home-valuation" className="capsule-item">
              <DollarSquareIcon className="capsule-icon" />
              <span>Sell</span>
            </a>
            <a href="/home-valuation" className="capsule-item">
              <FavoriteChartIcon className="capsule-icon" />
              <span>Home Value</span>
            </a>
            <a href="/neighborhoods" className="capsule-item">
              <LocationIcon className="capsule-icon" />
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
