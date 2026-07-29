import type { Metadata } from "next";
import { ArrowRight } from "../components/icons";

export const metadata: Metadata = {
  title: "Neighborhoods — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "The Los Angeles neighborhoods the Andrew Liberty Team knows best — Studio City, Laurel Canyon, the Hollywood Hills, Sherman Oaks, Valley Village and Pasadena.",
};

const HERO_GALLERY = [
  { src: "/images/sold-studio-city.jpg", alt: "Modern residence, Studio City" },
  { src: "/images/sold-sherman-oaks.jpg", alt: "Traditional home, Sherman Oaks" },
  { src: "/images/sold-toluca-lake.jpg", alt: "Architectural glass home, Toluca Lake" },
  { src: "/images/sold-hollywood-hills.jpg", alt: "Hillside estate, Hollywood Hills" },
];

type Area = { name: string; img: string; alt: string; tall?: boolean };
// Three columns, each with one tall + one short tile (tall-short / short-tall / tall-short)
// so the middle column's second tile rides up — a woven masonry matching the Figma.
const COLUMNS: Area[][] = [
  [
    { name: "Studio City", img: "/images/studio-city.jpg", alt: "Studio City, Los Angeles", tall: true },
    { name: "Sherman Oaks", img: "/images/sold-sherman-oaks.jpg", alt: "Sherman Oaks, Los Angeles" },
  ],
  [
    { name: "Laurel Canyon", img: "/images/laurel-canyon.jpg", alt: "Laurel Canyon, Los Angeles" },
    { name: "Valley Village", img: "/images/sold-valley-village.jpg", alt: "Valley Village, Los Angeles", tall: true },
  ],
  [
    { name: "Hollywood Hills", img: "/images/hollywood-hills.jpg", alt: "Hollywood Hills, Los Angeles", tall: true },
    { name: "Pasadena", img: "/images/hero-la-aerial.jpg", alt: "Pasadena, Los Angeles" },
  ],
];

export default function NeighborhoodsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hood-hero">
        <div className="container">
          <h1 className="hood-hero-title">Neighborhoods</h1>
          <div className="hood-hero-gallery">
            {HERO_GALLERY.map((g) => (
              <div className="hood-tile" key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AREAS OF EXPERTISE ============ */}
      <section className="prop-section">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">Areas of Expertise</h2>
            <p className="section-sub">Insight into the areas we know best — and why they make sense.</p>
          </div>
          <div className="areas-grid">
            {COLUMNS.map((col, i) => (
              <div className="areas-col" key={i}>
                {col.map((a) => (
                  <a
                    key={a.name}
                    href="/home-search"
                    className={`area-card${a.tall ? " is-tall" : " is-short"}`}
                    aria-label={`Explore ${a.name}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.img} alt={a.alt} loading="lazy" />
                    <span className="area-name">{a.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <a href="/#contact" className="btn btn-gold btn-magnetic">
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
