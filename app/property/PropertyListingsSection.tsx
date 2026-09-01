"use client";

import { useIdxListings } from "@/hooks/useIdxListings";
import { useSavedFavorites } from "@/hooks/useSavedFavorites";
import { toPropertyItem } from "@/lib/idx";
import PropertyCard from "./PropertyCard";
import PageLoader from "../components/PageLoader";

export default function PropertyListingsSection() {
  const { data, loading } = useIdxListings();
  const savedMls = useSavedFavorites();
  const items = (data ?? []).map(toPropertyItem);
  const featured = items.filter((p) => p.badge === "Active").slice(0, 6);
  const past = items.filter((p) => p.badge === "Sold").slice(0, 6);

  return (
    <>
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
          {loading ? (
            <PageLoader label="Loading listings…" />
          ) : featured.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--muted)" }}>
              No active listings right now — check back soon.
            </p>
          ) : (
            <div className="prop-grid">
              {featured.map((p) => (
                <PropertyCard key={p.slug} p={p} href={`/property/${p.slug}`} initialSaved={savedMls.has(p.mlsId)} />
              ))}
            </div>
          )}
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
          {!loading && (
            <div className="prop-grid">
              {past.map((p) => (
                <PropertyCard key={p.slug} p={p} href={`/property/${p.slug}`} initialSaved={savedMls.has(p.mlsId)} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
