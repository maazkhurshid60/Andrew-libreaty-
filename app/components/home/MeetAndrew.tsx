import { ArrowRight } from "../icons";

export default function MeetAndrew() {
  return (
    <section className="section section-about" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-image-card tilt-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/andrew-liberty.jpg"
              alt="Andrew Liberty, Studio City real estate agent"
              loading="lazy"
            />
          </div>
          <div className="about-image-backdrop" aria-hidden="true"></div>
          <div className="about-experience-chip">
            <span className="chip-number">RENE</span>
            <span className="chip-label">Certified Negotiation Expert</span>
          </div>
        </div>

        <div className="about-copy">
          <h2 className="section-title reveal">Meet Andrew Liberty</h2>
          <p className="about-credentials reveal" data-reveal-delay="60">
            Andrew Ruric Liberty II | CA DRE# 01965696
            <br />
            Compass California, Inc. | CA DRE# 01991628
          </p>
          <p className="about-bio reveal" data-reveal-delay="120">
            Andrew Liberty is a Los Angeles based REALTOR® and certified Real Estate Negotiation
            Expert who brings a strong mix of strategy and real world experience to his work. With a
            background in commercial real estate, he has a sharp eye for value and opportunity,
            whether that is a single family home, an income property, or a development play.
          </p>
          <p className="about-bio reveal" data-reveal-delay="160">
            He works with both investors and homebuyers and tends to take on the role of advisor
            just as much as agent. Andrew is hands on, thoughtful, and focused on helping clients
            make smart decisions without overcomplicating the process. He does the research, looks
            at the numbers, and makes sure his clients feel confident every step of the way.
          </p>

          <ul className="credential-chips" aria-label="Credentials">
            {["REALTOR®", "Real Estate Negotiation Expert", "Compass · California", "Residential · Investment · Development"].map(
              (label, i) => (
                <li key={label} className="reveal" data-reveal-delay={240 + i * 70}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{label}</span>
                </li>
              )
            )}
          </ul>

          <div className="about-awards reveal" data-reveal-delay="270">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-award-img" src="/awards/realtrends-verified.png" alt="RealTrends Verified" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-award-img about-award-img--tall"
              src="/awards/la-magazine-all-stars.png"
              alt="Los Angeles Magazine Real Estate All-Stars"
            />
          </div>

          <div className="about-ctas reveal" data-reveal-delay="300">
            <a href="/contact" className="btn btn-primary btn-magnetic">
              <span>Schedule a Consultation</span>
              <ArrowRight />
            </a>
            <a href="/team" className="btn btn-secondary">
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
