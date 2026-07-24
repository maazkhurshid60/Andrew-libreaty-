import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Get in touch with the Andrew Liberty Team — call, email, or send a message about buying, selling, or investing in Los Angeles real estate.",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      {/* ============ LEFT: DETAILS ============ */}
      <div className="contact-left">
        <h1 className="contact-heading">Contact Details</h1>
        <p className="contact-team">Andrew Liberty Team</p>

        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-item-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div>
              <p className="contact-item-label">Phone</p>
              <p className="contact-item-val">
                <a href="tel:+13107090581">(310) 709-0581</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-item-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </span>
            <div>
              <p className="contact-item-label">Email</p>
              <p className="contact-item-val">
                <a href="mailto:andrew.liberty@compass.com">andrew.liberty@compass.com</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-item-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <div>
              <p className="contact-item-label">Open Hours</p>
              <p className="contact-item-val">
                Monday – Sunday
                <br />
                8:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-item-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <p className="contact-item-label">Address</p>
              <p className="contact-item-val">
                12001 Ventura Pl Ste 100
                <br />
                Studio City, CA 91604
              </p>
            </div>
          </div>
        </div>

        <p className="contact-licensing">
          Andrew Ruric Liberty II | CA DRE# 01965696
          <br />
          Compass California, Inc. | CA DRE# 01991628
        </p>

        <div className="contact-social" aria-label="Social links">
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
          <a href="#" className="social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="Compass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="m16 8-2 6-6 2 2-6 6-2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ============ RIGHT: MESSAGE FORM ============ */}
      <div className="contact-right">
        <a className="contact-close" href="/" aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </a>
        <h2 className="contact-heading">Submit a Message</h2>
        <ContactForm />
      </div>
    </section>
  );
}
