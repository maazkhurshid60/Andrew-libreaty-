"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "../components/icons";
import PropertyCard, { type PropertyItem } from "../property/PropertyCard";

const PAST: PropertyItem[] = [
  {
    img: "/images/sold-hollywood-hills.jpg",
    alt: "Estate with pool, Hollywood Hills",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
  {
    img: "/images/sold-toluca-lake.jpg",
    alt: "Architectural home, Toluca Lake",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
  {
    img: "/images/sold-studio-city.jpg",
    alt: "Modern residence, Studio City",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
  {
    img: "/images/sold-sherman-oaks.jpg",
    alt: "Traditional home, Sherman Oaks",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
  {
    img: "/images/sold-canyon-midcentury.jpg",
    alt: "Mid-century home, Los Angeles",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
  {
    img: "/images/sold-valley-village.jpg",
    alt: "Single-story home, Valley Village",
    location: "Los Angeles, CA 90066",
    price: "$4,275,000",
    address: "11845 Pacific Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Sold",
  },
];

export default function PastTransactions() {
  const trackRef = useRef<HTMLDivElement>(null);

  const step = () => {
    const card = trackRef.current?.querySelector<HTMLElement>(".pl-card");
    return card ? card.offsetWidth + 20 : 360;
  };

  return (
    <section className="pt-section">
      <div className="container">
        <div className="pt-head reveal">
          <div>
            <h2 className="section-title">Past Transactions</h2>
            <p className="section-sub">
              A look at deals successfully navigated with strategy, discipline, and strong outcomes.
            </p>
          </div>
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              aria-label="Previous transactions"
              onClick={() => trackRef.current?.scrollBy({ left: -step(), behavior: "smooth" })}
            >
              <ArrowLeft />
            </button>
            <button
              className="carousel-btn"
              aria-label="Next transactions"
              onClick={() => trackRef.current?.scrollBy({ left: step(), behavior: "smooth" })}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-carousel" ref={trackRef}>
        {PAST.map((p, i) => (
          <PropertyCard key={i} p={p} />
        ))}
      </div>

      <div className="container">
        <div className="pt-viewall">
          <a href="/home-search" className="btn btn-gold btn-magnetic">
            <span>View All</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
