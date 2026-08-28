/* ==========================================================================
   Home Search data — filter/sort helpers operating on live IDX Broker
   listings (see lib/idx.ts + hooks/useIdxListings.ts). The listings array
   itself is fetched at runtime, not stored here.
   ========================================================================== */

export type Listing = {
  id: number;
  slug: string;
  price: number;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  lot: string | null;
  addr: string;
  city: string;
  zip: string;
  mls: string;
  type: string;
  img: string;
  status: "Active" | "Sold" | "Pending";
  order: number;
  lat: number;
  lng: number;
};

export const money = (n: number) => "$" + n.toLocaleString("en-US");
export const abbr = (n: number) =>
  n >= 1e6 ? "$" + (n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 1) + "M" : "$" + Math.round(n / 1e3) + "K";

// Branded fallback for MLS photos that block cross-origin hotlinking (e.g. Cotality/Incapsula).
export const PLACEHOLDER = "/images/property-placeholder.svg";

export type SearchState = {
  status: string[];
  priceMin: number | null;
  priceMax: number | null;
  types: string[];
  beds: number;
  baths: number;
  sqft: number;
  q: string;
  sort: string;
};

export const DEFAULT_STATE: SearchState = {
  status: ["Active", "Sold", "Pending"],
  priceMin: null,
  priceMax: null,
  types: [],
  beds: 0,
  baths: 0,
  sqft: 0,
  q: "",
  sort: "newest",
};

/** Filter + sort a set of listings for a given state. */
export function applyState(listings: Listing[], state: SearchState): Listing[] {
  const out = listings.filter((l) => {
    if (!state.status.includes(l.status)) return false;
    if (state.priceMin != null && l.price < state.priceMin) return false;
    if (state.priceMax != null && l.price > state.priceMax) return false;
    if (state.types.length && !state.types.includes(l.type)) return false;
    if (state.beds && (l.beds || 0) < state.beds) return false;
    if (state.baths && (l.baths || 0) < state.baths) return false;
    if (state.sqft && (l.sqft || 0) < state.sqft) return false;
    if (state.q) {
      const hay = (l.addr + " " + l.city + " " + l.zip + " " + l.type).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  });
  const s = state.sort;
  out.sort((a, b) =>
    s === "price-asc"
      ? a.price - b.price
      : s === "price-desc"
        ? b.price - a.price
        : s === "beds-desc"
          ? (b.beds || 0) - (a.beds || 0)
          : s === "sqft-desc"
            ? (b.sqft || 0) - (a.sqft || 0)
            : a.order - b.order
  );
  return out;
}

/** Count listings matching a provisional drawer state (superset of SearchState). */
export function countFor(
  listings: Listing[],
  st: {
    status: string[];
    types: string[];
    priceMin: number | null;
    priceMax: number | null;
    beds: number;
    baths: number;
    sqft: number;
    q: string;
  }
): number {
  return listings.filter((l) => {
    if (st.status.length && !st.status.includes(l.status)) return false;
    if (st.priceMin != null && l.price < st.priceMin) return false;
    if (st.priceMax != null && l.price > st.priceMax) return false;
    if (st.types.length && !st.types.includes(l.type)) return false;
    if (st.beds && (l.beds || 0) < st.beds) return false;
    if (st.baths && (l.baths || 0) < st.baths) return false;
    if (st.sqft && (l.sqft || 0) < st.sqft) return false;
    if (st.q) {
      const hay = (l.addr + " " + l.city + " " + l.zip + " " + l.type + " " + l.mls).toLowerCase();
      if (!hay.includes(st.q.toLowerCase())) return false;
    }
    return true;
  }).length;
}

export function activeFilterCount(state: SearchState): number {
  let n = 0;
  if (
    !(state.status.length === 3 && ["Active", "Sold", "Pending"].every((s) => state.status.includes(s)))
  )
    n++;
  if (state.priceMin != null || state.priceMax != null) n++;
  if (state.types.length) n++;
  if (state.beds) n++;
  if (state.baths) n++;
  if (state.sqft) n++;
  return n;
}
