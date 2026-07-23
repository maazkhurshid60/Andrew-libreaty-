export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="/#top" aria-label="Andrew Liberty Team — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/al-logo-lockup.png"
              alt="Andrew Liberty"
              className="footer-logo-full"
              width={1024}
              height={533}
            />
          </a>
          <p className="footer-tagline">
            Strategic real estate guidance for Los Angeles buyers, sellers, and investors.
          </p>
          <div className="footer-social" aria-label="Social links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a5 5 0 0 1 2-2z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>

          <div className="footer-licensing">
            <h3>Licensing</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/AL logo 2.png" alt="Compass" className="footer-compass-logo" width={150} height={22} />
            <ul>
              <li>Andrew Ruric Liberty II | CA DRE# 01965696</li>
              <li>Compass California, Inc. | CA DRE# 01991628</li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:andrew.liberty@compass.com" className="footer-link">
                andrew.liberty@compass.com
              </a>
            </li>
            <li>
              <a href="tel:+13107090581" className="footer-link">
                (310) 709-0581
              </a>
            </li>
            <li>
              12001 Ventura Pl Ste 100
              <br />
              Studio City, CA 91604
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Open Hours</h3>
          <ul>
            <li>Monday – Sunday</li>
            <li>8:00 AM – 7:00 PM</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/property" className="footer-link">
                Properties
              </a>
            </li>
            <li>
              <a href="/neighborhoods" className="footer-link">
                Neighborhoods
              </a>
            </li>
            <li>
              <a href="/home-valuation" className="footer-link">
                Home Valuation
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-col-wide">
          <p className="footer-disclaimer">
            Andrew Liberty Team is a team of real estate agents licensed by the state of California
            affiliated with Compass. Compass is a licensed real estate broker licensed by the state
            of California and abides by equal housing opportunity laws. All material presented herein
            is intended for informational purposes only. Information is compiled from sources deemed
            reliable but is subject to errors, omissions, changes in price, condition, sale, or
            withdrawal without notice. No statement is made as to accuracy of any description. All
            measurements and square footages are approximate. This is not intended to solicit
            property already listed. Nothing herein shall be construed as legal, accounting or other
            professional advice outside the realm of real estate brokerage.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Andrew Liberty Team. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Use
          </a>
          <a href="#" className="footer-link">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}
