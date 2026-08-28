"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "../components/icons";
import PropertyCard from "../property/PropertyCard";
import { useIdxListings } from "@/hooks/useIdxListings";
import { toPropertyItem, findLeadByEmail, getLeadSearches, deleteLeadSearch, type SavedSearch } from "@/lib/idx";

const SAVED_MLS_KEY = "alt-saved";
const LEAD_ID_KEY = "idx-lead-id";
const LEAD_EMAIL_KEY = "idx-lead-email";

const SearchIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
const LockIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);

function criteriaSummary(criteria: Record<string, unknown>): string {
  const parts = Object.entries(criteria)
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`);
  return parts.length ? parts.join(" · ") : "All listings";
}

export default function PortalClient() {
  const [tab, setTab] = useState<"favorites" | "searches">("favorites");

  /* ---------- Favorites: no login, just localStorage MLS numbers cross-referenced against live listings ---------- */
  const { data, loading: listingsLoading } = useIdxListings();
  const [savedMls, setSavedMls] = useState<Set<string>>(new Set());
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
      setSavedMls(new Set(JSON.parse(localStorage.getItem(SAVED_MLS_KEY) || "[]")));
    } catch {
      /* ignore */
    }
  }, []);
  const favorites = useMemo(() => {
    if (!data) return [];
    return data.filter((raw) => savedMls.has(raw.listingID)).map(toPropertyItem);
  }, [data, savedMls]);

  /* ---------- Saved searches: email-gated via the IDX leads API ---------- */
  const [leadId, setLeadId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [lookupStatus, setLookupStatus] = useState<"idle" | "checking" | "not-found" | "error">("idle");
  const [searches, setSearches] = useState<SavedSearch[]>([]);
  const [searchesLoading, setSearchesLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const savedId = localStorage.getItem(LEAD_ID_KEY);
    const savedEmail = localStorage.getItem(LEAD_EMAIL_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
    if (savedId) setLeadId(savedId);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  useEffect(() => {
    if (!leadId) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- kicks off the async fetch below
    setSearchesLoading(true);
    getLeadSearches(leadId)
      .then(setSearches)
      .catch(() => setSearches([]))
      .finally(() => setSearchesLoading(false));
  }, [leadId]);

  const lookUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLookupStatus("checking");
    try {
      const found = await findLeadByEmail(email);
      if (found) {
        localStorage.setItem(LEAD_ID_KEY, found);
        localStorage.setItem(LEAD_EMAIL_KEY, email);
        setLeadId(found);
        setLookupStatus("idle");
      } else {
        setLookupStatus("not-found");
      }
    } catch {
      setLookupStatus("error");
    }
  };

  const useDifferentEmail = () => {
    localStorage.removeItem(LEAD_ID_KEY);
    localStorage.removeItem(LEAD_EMAIL_KEY);
    setLeadId(null);
    setEmail("");
    setSearches([]);
    setLookupStatus("idle");
  };

  const removeSearch = async (searchId: string) => {
    if (!leadId) return;
    setDeletingId(searchId);
    const ok = await deleteLeadSearch(leadId, searchId);
    if (ok) setSearches((prev) => prev.filter((s) => s.id !== searchId));
    setDeletingId(null);
  };

  return (
    <>
      <div className="container">
        <div className="mp-head">
          <div>
            <h1>My Search Portal</h1>
            <p>Manage your favorite properties and saved searches in one place.</p>
          </div>
          <div className="mp-stats">
            <div className="mp-stat"><b>{favorites.length}</b><span>Properties Saved</span></div>
            <div className="mp-stat"><b>{leadId ? searches.length : "—"}</b><span>Saved Searches</span></div>
          </div>
        </div>

        <div className="mp-tabs" role="tablist" aria-label="Portal sections">
          <button role="tab" aria-selected={tab === "favorites"} className={`mp-tab${tab === "favorites" ? " is-active" : ""}`} onClick={() => setTab("favorites")}>
            Favorites <span className="count">{favorites.length}</span>
          </button>
          <button role="tab" aria-selected={tab === "searches"} className={`mp-tab${tab === "searches" ? " is-active" : ""}`} onClick={() => setTab("searches")}>
            Saved Searches {leadId && <span className="count">{searches.length}</span>}
          </button>
        </div>
      </div>

      <div className="container mp-body">
        {tab === "favorites" ? (
          listingsLoading ? (
            <p style={{ color: "var(--muted)" }}>Loading…</p>
          ) : favorites.length === 0 ? (
            <div className="mp-gate">
              <h1>No saved properties yet</h1>
              <p>Tap the heart icon on any listing in Home Search to save it here.</p>
              <div className="mp-gate-btns">
                <a href="/home-search" className="btn btn-gold btn-magnetic">
                  <span>Browse Homes</span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          ) : (
            <div className="mp-grid">
              {favorites.map((p) => (
                <PropertyCard key={p.slug} p={p} href={`/property/${p.slug}`} initialSaved />
              ))}
            </div>
          )
        ) : !leadId ? (
          <div className="mp-gate-wrap">
            <div className="mp-gate">
              <span className="mp-gate-ic"><LockIcon /></span>
              <span className="mp-gate-badge">Not signed in</span>
              <h1>See Your Saved Searches</h1>
              <p>
                Enter the email you used when saving a search from Home Search, and we&rsquo;ll pull up
                your saved searches.
              </p>
              <form onSubmit={lookUp} className="mp-toolbar" style={{ justifyContent: "center", marginTop: 20 }}>
                <label className="mp-search" style={{ maxWidth: 320 }}>
                  <SearchIcon />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email"
                  />
                </label>
                <button type="submit" className="btn btn-gold btn-magnetic" disabled={lookupStatus === "checking"}>
                  <span>{lookupStatus === "checking" ? "Checking…" : "Continue"}</span>
                  <ArrowRight />
                </button>
              </form>
              {lookupStatus === "not-found" && (
                <p className="mp-gate-note">
                  We couldn&rsquo;t find any saved searches for that email.{" "}
                  <a href="/home-search">Save one from Home Search</a> first.
                </p>
              )}
              {lookupStatus === "error" && <p className="mp-gate-note">Something went wrong — please try again.</p>}
            </div>
          </div>
        ) : (
          <>
            <p className="mp-signed">
              Showing results for <b>{email}</b> ·{" "}
              <button className="mp-signout" onClick={useDifferentEmail}>Use a different email</button>
            </p>
            {searchesLoading ? (
              <p style={{ color: "var(--muted)" }}>Loading…</p>
            ) : searches.length === 0 ? (
              <div className="mp-gate">
                <h1>No saved searches yet</h1>
                <p>Save a search from Home Search and it&rsquo;ll show up here.</p>
                <div className="mp-gate-btns">
                  <a href="/home-search" className="btn btn-gold btn-magnetic">
                    <span>Browse Homes</span>
                    <ArrowRight />
                  </a>
                </div>
              </div>
            ) : (
              <div className="mp-saved">
                {searches.map((s) => (
                  <article className="mp-saved-card" key={s.id}>
                    <div className="mp-saved-top">
                      <h3 className="mp-saved-name">{s.searchName}</h3>
                    </div>
                    <div className="mp-saved-crit">
                      <span>{criteriaSummary(s.criteria)}</span>
                    </div>
                    <div className="mp-saved-foot">
                      <a href={s.resultsUrl} target="_blank" rel="noopener noreferrer" className="mp-saved-view">
                        View results →
                      </a>
                      <button
                        onClick={() => removeSearch(s.id)}
                        disabled={deletingId === s.id}
                        className="mp-signout"
                      >
                        {deletingId === s.id ? "Removing…" : "Remove"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
