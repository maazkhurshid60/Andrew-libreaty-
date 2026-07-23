"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";

export type PropertyItem = {
  img: string;
  alt: string;
  location: string;
  price: string;
  address: string;
  beds: string;
  baths: string;
  sqft: string;
  badge: string;
  badgeGold?: boolean;
};

const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M2 20v-2M22 20v-2M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
  </svg>
);
const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM6 12V6a2 2 0 0 1 4 0v.5M6 19l-1 2M18 19l1 2" />
  </svg>
);
const AreaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

export default function PropertyCard({ p }: { p: PropertyItem }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="pl-card">
      <div className="pl-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt={p.alt} loading="lazy" />
        <span className={`badge ${p.badgeGold ? "badge-gold" : "badge-dark"} pl-badge`}>{p.badge}</span>
        <button
          className={`pl-heart${saved ? " is-saved" : ""}`}
          aria-label={saved ? "Remove from saved" : `Save ${p.address}`}
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
        >
          <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
      </div>
      <div className="pl-body">
        <div className="pl-toprow">
          <span className="pl-loc">{p.location}</span>
          <span className="pl-dots" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="19" cy="12" r="1.6" />
            </svg>
          </span>
        </div>
        <span className="pl-price">{p.price}</span>
        <h3 className="pl-addr">{p.address}</h3>
        <p className="pl-meta">
          <span><BedIcon /> {p.beds} Beds</span>
          <span><BathIcon /> {p.baths} Baths</span>
          <span><AreaIcon /> {p.sqft} SqFt</span>
        </p>
        <a href="#" className="pl-link">
          View Details
          <ArrowRight />
        </a>
      </div>
    </article>
  );
}
