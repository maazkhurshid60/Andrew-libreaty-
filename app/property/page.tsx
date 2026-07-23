import type { Metadata } from "next";
import { ArrowRight } from "../components/icons";
import PropertyCard, { type PropertyItem } from "./PropertyCard";

export const metadata: Metadata = {
  title: "Properties — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Featured listings and past transactions from the Andrew Liberty Team — strategic real estate across Studio City, Sherman Oaks, the Hollywood Hills and greater Los Angeles.",
};

const HERO_GALLERY = [
  { src: "/images/sold-studio-city.jpg", alt: "Modern hillside residence, Studio City" },
  { src: "/images/sold-hollywood-hills.jpg", alt: "Luxury estate with pool, Hollywood Hills" },
  { src: "/images/sold-toluca-lake.jpg", alt: "Architectural glass home, Toluca Lake" },
];

const FEATURED: PropertyItem[] = [
  {
    img: "/images/sold-hollywood-hills.jpg",
    alt: "Hillside estate, Hollywood Hills",
    location: "Hollywood Hills, CA 90068",
    price: "$4,190,000",
    address: "8420 Hillside Ave",
    beds: "5", baths: "4.5", sqft: "4,320",
    badge: "Featured",
    badgeGold: true,
  },
  {
    img: "/images/sold-studio-city.jpg",
    alt: "Modern residence, Studio City",
    location: "Studio City, CA 91604",
    price: "$3,295,000",
    address: "4210 Bellaire Ave",
    beds: "5", baths: "4", sqft: "3,047",
    badge: "Featured",
    badgeGold: true,
  },
  {
    img: "/images/sold-toluca-lake.jpg",
    alt: "Architectural home, Toluca Lake",
    location: "Toluca Lake, CA 91602",
    price: "$1,795,000",
    address: "4421 Strohm Ave",
    beds: "4", baths: "4", sqft: "2,450",
    badge: "New",
    badgeGold: true,
  },
];

const PAST: PropertyItem[] = [
  {
    img: "/images/sold-sherman-oaks.jpg",
    alt: "Traditional home, Sherman Oaks",
    location: "Sherman Oaks, CA 91403",
    price: "$1,450,000",
    address: "14830 Huston St",
    beds: "4", baths: "2", sqft: "2,227",
    badge: "Sold",
  },
  {
    img: "/images/laurel-canyon.jpg",
    alt: "Canyon residence, Laurel Canyon",
    location: "Laurel Canyon, CA 90046",
    price: "$1,345,000",
    address: "8876 Wonderland Ave",
    beds: "3", baths: "3", sqft: "1,261",
    badge: "Sold",
  },
  {
    img: "/images/sold-valley-village.jpg",
    alt: "Single-story bungalow, Valley Village",
    location: "Valley Village, CA 91607",
    price: "$1,180,000",
    address: "5417 Bluebell Ave",
    beds: "3", baths: "2", sqft: "1,780",
    badge: "Sold",
  },
  {
    img: "/images/studio-city.jpg",
    alt: "Contemporary home, Studio City",
    location: "Studio City, CA 91602",
    price: "$1,895,000",
    address: "4531 Kraft Ave",
    beds: "3", baths: "2.5", sqft: "2,106",
    badge: "Sold",
  },
  {
    img: "/images/sold-canyon-midcentury.jpg",
    alt: "Mid-century interior, Los Angeles",
    location: "Los Angeles, CA 90068",
    price: "$1,440,000",
    address: "6335 Grape Pl",
    beds: "2", baths: "2", sqft: "1,556",
    badge: "Sold",
  },
  {
    img: "/images/hollywood-hills.jpg",
    alt: "View estate, Hollywood Hills",
    location: "Hollywood Hills, CA 90068",
    price: "$3,699,000",
    address: "3072 Hollyridge Dr",
    beds: "4", baths: "5.5", sqft: "3,708",
    badge: "Sold",
  },
];

export default function PropertiesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="prop-hero">
        <div className="container">
          <h1 className="prop-hero-title">Properties</h1>
          <div className="prop-hero-gallery">
            {HERO_GALLERY.map((g) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={g.src} src={g.src} alt={g.alt} loading="eager" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED LISTINGS ============ */}
      <section className="prop-section prop-featured">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Start Here</p>
            <h2 className="section-title">Featured Listings</h2>
            <p className="section-sub">
              Hand-picked homes currently on the market, positioned to move with strategy.
            </p>
          </div>
          <div className="prop-grid">
            {FEATURED.map((p) => (
              <PropertyCard key={p.address} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAST TRANSACTIONS ============ */}
      <section className="prop-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Proof, Not Promises</p>
            <h2 className="section-title">Past Transactions</h2>
            <p className="section-sub">
              A view of deals consistently navigated with strategy, discipline, and steady composure.
            </p>
          </div>
          <div className="prop-grid">
            {PAST.map((p) => (
              <PropertyCard key={p.address} p={p} />
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
