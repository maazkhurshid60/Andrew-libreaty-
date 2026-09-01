"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";
import { PLACEHOLDER } from "../home-search/listings";
import { useLead } from "@/hooks/useLead";
import { addFavorite, removeFavorite } from "@/lib/favorites";

export type PropertyItem = {
  mlsId: string;
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

export default function PropertyCard({
  p,
  href = "#",
  initialSaved = false,
  onToggleSaved,
}: {
  p: PropertyItem;
  href?: string;
  initialSaved?: boolean;
  /** Notified after a save/unsave persists — lets a favorites list drop the card immediately. */
  onToggleSaved?: (mlsId: string, saved: boolean) => void;
}) {
  const [saved, setSaved] = useState(initialSaved);
  const { leadId, requireLead } = useLead();

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!leadId) {
      requireLead("Save your info to add homes to your favorites.");
      return;
    }
    const next = !saved;
    setSaved(next);
    const persist = next ? addFavorite(leadId, p.mlsId) : removeFavorite(leadId, p.mlsId);
    persist.then((ok) => {
      if (ok) {
        onToggleSaved?.(p.mlsId, next);
      } else {
        setSaved(!next);
      }
    });
  };

  return (
    <a className="pl-card" href={href}>
      <div className="pl-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={p.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
        />
        <span className={`badge ${p.badgeGold ? "badge-gold" : "badge-dark"} pl-badge`}>{p.badge}</span>
        <button
          className={`pl-heart${saved ? " is-saved" : ""}`}
          aria-label={saved ? "Remove from saved" : `Save ${p.address}`}
          aria-pressed={saved}
          onClick={toggleSave}
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
        <span className="pl-link">
          View Details
          <ArrowRight />
        </span>
      </div>
    </a>
  );
}
