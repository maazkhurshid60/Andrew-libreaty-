"use client";

import { useIdxListings } from "@/hooks/useIdxListings";
import { toPropertyItem } from "@/lib/idx";
import PropertyCard from "../../property/PropertyCard";

export default function RecentlySold({
  title = "Recently Sold",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
} = {}) {
  const { data, loading } = useIdxListings();
  const sold = (data ?? [])
    .map(toPropertyItem)
    .filter((p) => p.badge === "Sold")
    .slice(0, 6);

  return (
    <section className="section section-sold" id="sold">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        {loading ? (
          <p style={{ textAlign: "center", color: "var(--muted)" }}>Loading…</p>
        ) : sold.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--muted)" }}>No sold listings to show yet.</p>
        ) : (
          <div className="prop-grid">
            {sold.map((p) => (
              <PropertyCard key={p.slug} p={p} href={`/property/${p.slug}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
