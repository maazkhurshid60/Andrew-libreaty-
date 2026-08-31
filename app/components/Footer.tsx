import { FacebookIcon, InstagramIcon, LinkedInIcon, CompassIcon, StarIcon } from "./vuesax";
import { SITE_URL } from "@/lib/site";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/iamandrewliberty?igsi=cnZ3c3g4dmxsdWdu", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/andrew.liberty.90?mibextid=wwXIfr", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrew-liberty-55aa612a?utm_source=share_via&utm_content=profile&utm_medium=member_ios", Icon: LinkedInIcon },
  { label: "Compass agent profile", href: "https://www.compass.com/agents/andrew-liberty/", Icon: CompassIcon },
  { label: "Google Reviews", href: "https://share.google/sbU7WzKUX9hpNJfOj", Icon: StarIcon },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="/#top" aria-label="Andrew Liberty Team — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${SITE_URL}/logo.png`} alt="" className="footer-logo-mark" width={34} height={39} />
            <span className="footer-logo-word">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${SITE_URL}/logo-andrew.png`} alt="Andrew" className="footer-logo-img" width={99} height={21} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${SITE_URL}/logo-liberty.png`} alt="Liberty" className="footer-logo-img" width={91} height={21} />
            </span>
          </a>
          <p className="footer-tagline">
            Strategic real estate guidance for Los Angeles buyers, sellers, and investors.
          </p>
          <div className="footer-social" aria-label="Social links">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a
                href="mailto:andrew.liberty@compass.com"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                andrew.liberty@compass.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/13107090581" target="_blank" rel="noopener noreferrer" className="footer-link">
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
              <a href="/blog" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="container footer-license-row">
        <div className="footer-licensing">
          <h3>Licensing</h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${SITE_URL}/AL logo 2.png`} alt="Compass" className="footer-compass-logo" width={150} height={22} />
          <ul>
            <li>Andrew Ruric Liberty II | CA DRE# 01965696</li>
            <li>Compass California, Inc. | CA DRE# 01991628</li>
          </ul>
        </div>
        <p className="footer-disclaimer">
          Andrew Liberty Team is a team of real estate agents licensed by the state of California
          affiliated with Compass. Compass is a licensed real estate broker licensed by the state of
          California and abides by equal housing opportunity laws. All material presented herein is
          intended for informational purposes only. Information is compiled from sources deemed
          reliable but is subject to errors, omissions, changes in price, condition, sale, or
          withdrawal without notice. No statement is made as to accuracy of any description. All
          measurements and square footages are approximate. This is not intended to solicit property
          already listed. Nothing herein shall be construed as legal, accounting or other
          professional advice outside the realm of real estate brokerage.
        </p>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Andrew Liberty Team. All rights reserved. · Site by EM Creative Studio</p>
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
