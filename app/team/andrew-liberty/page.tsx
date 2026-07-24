import type { Metadata } from "next";
import { ArrowRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Andrew Liberty — Founder & Lead Agent | Andrew Liberty Team",
  description:
    "Andrew Liberty is a Los Angeles based REALTOR® and certified Real Estate Negotiation Expert, blending strategy and real-world experience to help clients move forward with clarity.",
};

/* ---------- Inline icons ---------- */
const IcPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IcMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const IcPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IcBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 3 5v6c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V5l-9-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IcStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IcConnect = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49" />
  </svg>
);

/* Brand glyphs for the Connect card */
const SocFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.3V6H7.5v3h2.8v9H14V9z" /></svg>
);
const SocX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.6L6 22H3l7.5-8.6L2.5 2h6.6l4.5 6L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" /></svg>
);
const SocWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5v-.4c0-.2-.5-1.4-.7-1.9-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3a2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.7 4.3 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.6z" /></svg>
);
const SocInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
const SocLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" /></svg>
);

const SPECIALTIES = ["Luxury Residential", "Historic Estates", "Relocation"];
const SOCIALS = [
  { label: "Facebook", href: "#", Icon: SocFacebook },
  { label: "Twitter", href: "#", Icon: SocX },
  { label: "WhatsApp", href: "#", Icon: SocWhatsApp },
  { label: "Instagram", href: "#", Icon: SocInstagram },
  { label: "LinkedIn", href: "#", Icon: SocLinkedIn },
];

export default function AndrewLibertyPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="ag-hero">
        <div className="ag-hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/team/IMG-42.png" alt="Andrew Liberty, Founder & Lead Agent" loading="eager" />
        </div>
        <div className="container ag-hero-inner">
          <div className="ag-hero-copy">
            <h1 className="ag-hero-name">Andrew Liberty</h1>
            <p className="ag-hero-role">Founder &amp; Lead Agent</p>
            <p className="ag-hero-bio">
              Andrew Liberty is a Los Angeles based REALTOR® and certified Real Estate Negotiation
              Expert who brings a strong mix of strategy and real-world experience to his work. With a
              background in commercial real estate, he has a sharp eye for value and opportunity —
              whether that&rsquo;s a single-family home, an income property, or a development play.
            </p>
            <div className="ag-hero-ctas">
              <a href="tel:+13107090581" className="btn btn-gold btn-magnetic">
                <span>Schedule a Call</span>
                <ArrowRight />
              </a>
              <a href="/contact" className="btn btn-outline">
                <span>Send a Message</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GET IN TOUCH ============ */}
      <section className="ag-touch">
        <div className="container">
          <div className="ag-touch-head">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="ag-touch-name">Andrew Liberty</h2>
            <p className="ag-touch-sub">Founder &amp; Lead Agent — DRE# 01965696 · Compass</p>
            <div className="ag-touch-actions">
              <a href="tel:+13107090581" className="ag-pill ag-pill-solid">
                <IcPhone />
                <span>(310) 709-0581</span>
              </a>
              <a href="mailto:andrew.liberty@compass.com" className="ag-pill ag-pill-ghost">
                <IcMail />
                <span>andrew.liberty@compass.com</span>
              </a>
            </div>
          </div>

          <div className="ag-cards">
            <article className="ag-card">
              <span className="ag-card-ic"><IcPin /></span>
              <p className="ag-card-label">Office</p>
              <p className="ag-card-text">12001 Ventura Pl Ste 100, Studio City, CA 91604</p>
            </article>

            <article className="ag-card">
              <span className="ag-card-ic"><IcBadge /></span>
              <p className="ag-card-label">License</p>
              <p className="ag-card-text">License Number #01965696</p>
            </article>

            <article className="ag-card">
              <span className="ag-card-ic"><IcStar /></span>
              <p className="ag-card-label">Specialties</p>
              <div className="ag-tags">
                {SPECIALTIES.map((s) => (
                  <span className="ag-tag" key={s}>{s}</span>
                ))}
              </div>
            </article>

            <article className="ag-card">
              <span className="ag-card-ic"><IcConnect /></span>
              <p className="ag-card-label">Connect</p>
              <div className="ag-socials">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a className="ag-social" key={label} href={href} aria-label={label}>
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ GET TO KNOW ============ */}
      <section className="ag-story">
        <div className="container">
          <div className="ag-story-head">
            <p className="eyebrow">The Story Behind the Agent</p>
            <h2 className="ag-story-title">Get to Know Andrew Liberty</h2>
          </div>

          <div className="ag-story-cols">
            <div>
              <p>
                Andrew Liberty is a Los Angeles based REALTOR® and certified Real Estate Negotiation
                Expert who brings a strong mix of strategy and real-world experience to his work. With
                a background in commercial real estate, he has a sharp eye for value and opportunity,
                whether that is a single-family home, an income property, or a development play.
              </p>
              <p>
                He works with both investors and homebuyers and tends to take on the role of advisor
                just as much as agent. Andrew is hands-on, thoughtful, and focused on helping clients
                make smart decisions without overcomplicating the process. He does the research, looks
                at the numbers, and makes sure his clients feel confident every step of the way.
              </p>
            </div>
            <div>
              <p>
                Moving into residential real estate was a deliberate shift. He wanted to be more
                involved with people and be part of something more personal. For Andrew, it is not
                just about closing deals, it is helping clients build something meaningful for
                themselves and their families.
              </p>
              <p>
                His background in the military and entertainment industry shaped a lot of how he works
                today. He is disciplined, easy to talk to, and knows how to stay calm and focused when
                things get complicated.
              </p>
              <p>
                Originally from the East Coast, Andrew has been in Los Angeles for over twenty years and
                now calls Studio City home. When he is not working, he is usually spending time with his
                wife Gloria, their kids Cross, Mei, and Sun, their dog Eddie, and their three cats.
              </p>
            </div>
          </div>

          <figure className="ag-quote">
            <span className="ag-quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="ag-quote-text">
              &ldquo;We do not sell houses. We help people move forward.&rdquo;
            </blockquote>
            <figcaption className="ag-quote-by">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/team/IMG-42.png" alt="Andrew Liberty" />
              <span>
                <span className="ag-quote-name">Andrew Liberty</span>
                <br />
                <span className="ag-quote-role">Founder &amp; Lead Agent</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ BEYOND THE TRANSACTION ============ */}
      <section className="prop-beyond-wrap">
        <div className="container">
          <div className="prop-beyond reveal">
            <h2>Beyond the Transaction</h2>
            <p>
              Our team brings together real-world experience, thoughtful strategy, and a calm,
              hands-on approach to help clients move with clarity. From homes to investments, we
              focus on smart decisions, not unnecessary complexity.
            </p>
            <div className="prop-beyond-ctas">
              <a href="/contact" className="btn btn-gold btn-magnetic">
                <span>Contact Us</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
