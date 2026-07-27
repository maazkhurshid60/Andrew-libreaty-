"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";
import PropertyCard, { type PropertyItem } from "../property/PropertyCard";

const FAVORITES: (PropertyItem & { slug: string })[] = Array.from({ length: 6 }).map((_, i) => ({
  slug: "735-n-stanley-ave",
  img: "/images/sold-toluca-lake.jpg",
  alt: "Contemporary home saved to favorites",
  location: "Los Angeles, CA 90048",
  price: "$1,975,000",
  address: "735 N Stanley Ave",
  beds: "4", baths: "5", sqft: "2,860",
  badge: "Active",
  badgeGold: true,
  // vary a touch so the grid doesn't look cloned
  ...(i % 2 ? { location: "Studio City, CA 91604", address: "4210 Bellaire Ave", img: "/images/valuation-interior.jpg" } : {}),
}));

const SAVED_SEARCHES = [
  { name: "Studio City · 3+ Beds", crit: ["Studio City", "$1M–$2.5M", "3+ Beds", "Single Family"], count: 18, isNew: true },
  { name: "Hollywood Hills · Views", crit: ["Hollywood Hills", "$2M+", "Pool", "View"], count: 9, isNew: false },
  { name: "Sherman Oaks · Move-in", crit: ["Sherman Oaks", "$1.2M–$2M", "Turnkey"], count: 12, isNew: true },
  { name: "Investment · Multi-family", crit: ["Los Angeles", "Duplex / Triplex", "$1M+"], count: 6, isNew: false },
];

const SearchIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
const Chevron = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>);
const LockIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);

export default function PortalClient() {
  const [signedIn, setSignedIn] = useState(true);
  const [tab, setTab] = useState<"favorites" | "searches">("favorites");

  /* ---------- Signed-out gate ---------- */
  if (!signedIn) {
    return (
      <div className="mp-gate-wrap">
        <div className="container">
          <div className="mp-gate">
            <span className="mp-gate-ic"><LockIcon /></span>
            <span className="mp-gate-badge">Not signed in</span>
            <h1>Sign in to your Search Portal</h1>
            <p>
              You&rsquo;re not signed in. Sign in to save favorite properties, store custom searches,
              and get notified the moment a matching home hits the market.
            </p>
            <div className="mp-gate-btns">
              <button className="btn btn-gold btn-magnetic" onClick={() => setSignedIn(true)}>
                <span>Sign In</span>
                <ArrowRight />
              </button>
              <a href="/contact" className="btn btn-secondary">Create Account</a>
            </div>
            <p className="mp-gate-note">
              Just exploring? <button onClick={() => setSignedIn(true)}>Preview the portal</button> with sample data.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Signed-in portal ---------- */
  return (
    <>
      <div className="container">
        <div className="mp-head">
          <div>
            <h1>My Search Portal</h1>
            <p>Manage your favorite properties and saved searches in one place.</p>
            <span className="mp-signed">
              Signed in as <b>you@example.com</b> ·{" "}
              <button className="mp-signout" onClick={() => setSignedIn(false)}>Sign out</button>
            </span>
          </div>
          <div className="mp-stats">
            <div className="mp-stat"><b>{FAVORITES.length}</b><span>Properties Saved</span></div>
            <div className="mp-stat"><b>{SAVED_SEARCHES.length}</b><span>Saved Searches</span></div>
          </div>
        </div>

        <div className="mp-tabs" role="tablist" aria-label="Portal sections">
          <button role="tab" aria-selected={tab === "favorites"} className={`mp-tab${tab === "favorites" ? " is-active" : ""}`} onClick={() => setTab("favorites")}>
            Favorites <span className="count">{FAVORITES.length}</span>
          </button>
          <button role="tab" aria-selected={tab === "searches"} className={`mp-tab${tab === "searches" ? " is-active" : ""}`} onClick={() => setTab("searches")}>
            Saved Searches <span className="count">{SAVED_SEARCHES.length}</span>
          </button>
        </div>

        <div className="mp-toolbar">
          <label className="mp-search">
            <SearchIcon />
            <input type="search" placeholder={tab === "favorites" ? "Search saved properties…" : "Search saved searches…"} aria-label="Search" />
          </label>
          <div className="mp-select">
            <select aria-label="Filter by status" defaultValue="all">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
            <Chevron />
          </div>
          <div className="mp-select">
            <select aria-label="Sort by" defaultValue="recent">
              <option value="recent">Sort By: Recent</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <Chevron />
          </div>
        </div>
      </div>

      <div className="container mp-body">
        {tab === "favorites" ? (
          <div className="mp-grid">
            {FAVORITES.map((p, i) => (
              <PropertyCard key={i} p={p} href={`/property/${p.slug}`} initialSaved />
            ))}
          </div>
        ) : (
          <div className="mp-saved">
            {SAVED_SEARCHES.map((s) => (
              <article className="mp-saved-card" key={s.name}>
                <div className="mp-saved-top">
                  <h3 className="mp-saved-name">{s.name}</h3>
                  {s.isNew && <span className="mp-saved-new">New matches</span>}
                </div>
                <div className="mp-saved-crit">
                  {s.crit.map((c) => <span key={c}>{c}</span>)}
                </div>
                <div className="mp-saved-foot">
                  <span className="mp-saved-count"><b>{s.count}</b> matching homes</span>
                  <a href="/home-search" className="mp-saved-view">View results →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
