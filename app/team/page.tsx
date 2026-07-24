import type { Metadata } from "next";
import { ArrowRight } from "../components/icons";
import Testimonials from "../components/home/Testimonials";
import PastTransactions from "./PastTransactions";

export const metadata: Metadata = {
  title: "Meet the Team — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "A collective of dedicated professionals committed to delivering an extraordinary real estate experience across Los Angeles — the Andrew Liberty Team at Compass.",
};

const HERO_GALLERY = [
  { src: "/images/sold-studio-city.jpg", alt: "Modern residence, Studio City" },
  { src: "/images/sold-sherman-oaks.jpg", alt: "Traditional home, Sherman Oaks" },
  { src: "/images/sold-hollywood-hills.jpg", alt: "Estate with pool, Hollywood Hills" },
  { src: "/images/sold-toluca-lake.jpg", alt: "Architectural home, Toluca Lake" },
  { src: "/images/sold-canyon-midcentury.jpg", alt: "Mid-century home, Los Angeles" },
];

type Member = { name: string; role: string; meta: string; img: string; href?: string };
const TEAM: Member[] = [
  { name: "Andrew Liberty", role: "REALTOR®", meta: "License #01965696", img: "/team/andrew-liberty.png", href: "/team/andrew-liberty" },
  { name: "Liza Calzoni", role: "REALTOR®", meta: "License Number # 02246252", img: "/team/lisa-cabrera.png" },
  { name: "Seda Naumenko", role: "Marketing and Operations", meta: "License Number # 02246252", img: "/team/sonia-naumenko.png" },
  { name: "Andrew Coleman", role: "Designer", meta: "License Number # 02246252", img: "/team/andrew-coleman.png" },
  { name: "Victor Jimenez", role: "Manager", meta: "License Number # 02246252", img: "/team/victor-jimenez.png" },
];

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function TeamPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="team-hero">
        <div className="container">
          <h1 className="team-hero-title">Meet the Team</h1>
          <div className="team-hero-gallery">
            {HERO_GALLERY.map((g) => (
              <div className="prop-tile" key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="eager" />
              </div>
            ))}
          </div>
          <p className="team-hero-sub">
            A collective of dedicated professionals committed to delivering an extraordinary real
            estate experience.
          </p>
        </div>
      </section>

      {/* ============ TEAM GRID ============ */}
      <section className="prop-section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">The People Behind the Service</p>
            <h2 className="section-title">Andrew Liberty Team</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <article className="team-card reveal" key={m.name}>
                {m.href ? (
                  <a className="team-photo" href={m.href} aria-label={`View ${m.name}'s profile`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.name} loading="lazy" />
                  </a>
                ) : (
                  <div className="team-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.name} loading="lazy" />
                  </div>
                )}
                <div className="team-body">
                  <h3 className="team-name">
                    {m.href ? <a href={m.href}>{m.name}</a> : m.name}
                  </h3>
                  <p className="team-role">{m.role}</p>
                  <p className="team-meta">{m.meta}</p>
                  <div className="team-contact">
                    <a href="mailto:andrew.liberty@compass.com" aria-label={`Email ${m.name}`}>
                      <MailIcon />
                    </a>
                    <a href="tel:+13107090581" aria-label={`Call ${m.name}`}>
                      <PhoneIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ PAST TRANSACTIONS ============ */}
      <PastTransactions />

      {/* ============ START YOUR SEARCH ============ */}
      <section className="prop-searchband-wrap">
        <div className="container">
          <div className="prop-searchband reveal">
            <h2>Start Your Property Search</h2>
            <a href="/home-search" className="btn btn-gold btn-magnetic">
              <span>Browse Homes</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ BEYOND THE TRANSACTION ============ */}
      <section className="prop-beyond-wrap">
        <div className="container">
          <div className="prop-beyond reveal">
            <p className="eyebrow">The Long View</p>
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
              <a href="/home-search" className="btn btn-secondary">
                Browse Homes
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
