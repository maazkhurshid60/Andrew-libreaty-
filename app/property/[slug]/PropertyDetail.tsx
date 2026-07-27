"use client";

import { useState } from "react";
import { ArrowRight } from "../../components/icons";
import { CallIcon, SmsIcon, ShareIcon } from "../../components/vuesax";
import PropertyMap from "./PropertyMap";
import type { Listing } from "./data";

/* ---------- Inline icons ---------- */
const BedIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M2 20v-2M22 20v-2M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" /></svg>);
const BathIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM6 12V6a2 2 0 0 1 4 0v.5M6 19l-1 2M18 19l1 2" /></svg>);
const AreaIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>);
const CalIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>);
const HomeTypeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 21v-6h6v6" /></svg>);
const HeartIcon = ({ filled }: { filled?: boolean }) => (<svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>);
const PrintIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" /></svg>);
const CopyIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>);

const FEATURE_TABS = [
  { key: "interior", label: "Interior" },
  { key: "exterior", label: "Exterior & Lot" },
  { key: "details", label: "Property Details" },
] as const;

export default function PropertyDetail({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<"interior" | "exterior" | "details">("interior");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const copyAddr = async () => {
    try {
      await navigator.clipboard.writeText(`${listing.address}, ${listing.city}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try { await navigator.share({ title: listing.address, url }); } catch { /* dismissed */ }
    } else {
      try { await navigator.clipboard.writeText(url); setStatus("Link copied to clipboard."); } catch { /* noop */ }
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first.trim() || !form.email.trim()) {
      setStatus("Please add your name and email.");
      return;
    }
    setStatus(`Thanks, ${form.first.trim()} — Andrew will reach out about ${listing.address} shortly.`);
    setForm({ first: "", last: "", email: "", phone: "", message: "" });
  };

  const rows = listing.features[tab];

  return (
    <>
      {/* ============ GALLERY ============ */}
      <div className="pd-gallery-wrap">
        <div className="container">
          <div className="pd-gallery">
            {listing.gallery.slice(0, 5).map((src, i) => (
              <div className="pd-cell" key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${listing.address} photo ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
                {i === 4 && (
                  <span className="pd-more"><AreaIcon />{listing.moreCount} More</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SUB-NAV ============ */}
      <nav className="pd-subnav" aria-label="Section navigation">
        <div className="container pd-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#location">Location</a>
          <a href="#history">History</a>
          <a href="#similar">Similar Properties</a>
        </div>
      </nav>

      {/* ============ LAYOUT ============ */}
      <div className="container">
        <div className="pd-layout">
          <div className="pd-main">
            {/* Header */}
            <div className="pd-head" id="overview">
              <div>
                <div className="pd-status-row">
                  <span className="pd-status">{listing.status}</span>
                  <span className="pd-listed">{listing.listed}</span>
                </div>
                <h1 className="pd-title">{listing.address}</h1>
                <p className="pd-addr">{listing.city}</p>
              </div>
              <div className="pd-price">
                {listing.price}
                <small>{listing.perSqft}</small>
              </div>
            </div>

            {/* Stats */}
            <div className="pd-stats">
              <div className="pd-stat"><span className="pd-stat-ic"><BedIcon /></span><div><b>{listing.beds}</b><span>Beds</span></div></div>
              <div className="pd-stat"><span className="pd-stat-ic"><BathIcon /></span><div><b>{listing.baths}</b><span>Baths</span></div></div>
              <div className="pd-stat"><span className="pd-stat-ic"><AreaIcon /></span><div><b>{listing.sqft}</b><span>SqFt</span></div></div>
              <div className="pd-stat"><span className="pd-stat-ic"><CalIcon /></span><div><b>{listing.built}</b><span>Built</span></div></div>
              <div className="pd-stat"><span className="pd-stat-ic"><HomeTypeIcon /></span><div><b>{listing.type}</b><span>Type</span></div></div>
            </div>

            {/* Actions */}
            <div className="pd-actions">
              <button className={`pd-act${saved ? " is-active" : ""}`} onClick={() => setSaved((s) => !s)}>
                <HeartIcon filled={saved} />{saved ? "Saved" : "Save"}
              </button>
              <button className="pd-act" onClick={share}><ShareIcon />Share</button>
              <button className="pd-act" onClick={() => window.print()}><PrintIcon />Print</button>
            </div>

            {/* Overview */}
            <section className="pd-section pd-overview">
              <h2 className="pd-section-title">Overview</h2>
              {listing.overview.map((p, i) => <p key={i}>{p}</p>)}
            </section>

            {/* Features */}
            <section className="pd-section" id="features">
              <h2 className="pd-section-title">Features &amp; Amenities</h2>
              <div className="pd-feat-tabs" role="tablist" aria-label="Feature groups">
                {FEATURE_TABS.map((t) => (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={tab === t.key}
                    className={`pd-feat-tab${tab === t.key ? " is-active" : ""}`}
                    onClick={() => setTab(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <dl>
                {rows.map((f) => (
                  <div className="pd-feat-row" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Location */}
            <section className="pd-section" id="location">
              <div className="pd-loc-head">
                <h2 className="pd-section-title" style={{ marginBottom: 0 }}>Location</h2>
                <button className="pd-copy" onClick={copyAddr}>
                  <CopyIcon />{copied ? "Copied!" : "Copy address"}
                </button>
              </div>
              <p className="pd-addr" style={{ marginBottom: 14 }}>{listing.address}, {listing.city}</p>
              <PropertyMap lat={listing.lat} lng={listing.lng} label={listing.pin} />
            </section>

            {/* History */}
            <section className="pd-section" id="history">
              <h2 className="pd-section-title">Property History</h2>
              <div className="pd-history">
                {listing.history.map((h, i) => (
                  <div className="pd-hist-item" key={i}>
                    <span className="pd-hist-dot" />
                    <div>
                      <p className="pd-hist-event">{h.event}</p>
                      <p className="pd-hist-sub">{h.sub}</p>
                    </div>
                    {h.price && <span className="pd-hist-price">{h.price}</span>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-agent-box">
              <div className="pd-agent-top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/team/IMG-42.png" alt="Andrew Liberty" />
                <div>
                  <b>Andrew Liberty</b>
                  <span>Founder &amp; Lead Agent · Compass</span>
                </div>
              </div>
              <form className="cf-form pd-form" onSubmit={submit} noValidate>
                <div className="pd-form-row">
                  <div className="cf-field">
                    <label htmlFor="pd-first">First Name</label>
                    <input id="pd-first" type="text" placeholder="First name" value={form.first} onChange={(e) => set("first", e.target.value)} />
                  </div>
                  <div className="cf-field">
                    <label htmlFor="pd-last">Last Name</label>
                    <input id="pd-last" type="text" placeholder="Last name" value={form.last} onChange={(e) => set("last", e.target.value)} />
                  </div>
                </div>
                <div className="cf-field">
                  <label htmlFor="pd-email">Email</label>
                  <input id="pd-email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div className="cf-field">
                  <label htmlFor="pd-phone">Phone Number</label>
                  <input id="pd-phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div className="cf-field">
                  <label htmlFor="pd-msg">Message</label>
                  <textarea id="pd-msg" rows={3} placeholder={`I'd like to know more about ${listing.address}.`} value={form.message} onChange={(e) => set("message", e.target.value)} />
                </div>
                <button type="submit" className="btn btn-gold btn-magnetic">
                  <span>Request Info</span>
                  <ArrowRight />
                </button>
                <a href="tel:+13107090581" className="pd-form-alt">
                  <CallIcon />Contact Agent
                </a>
                <p className="pd-form-status" role="status" aria-live="polite">{status}</p>
              </form>
            </div>
          </aside>
        </div>

        {/* Agent CTA band */}
        <div className="pd-cta">
          <div className="pd-cta-agent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/team/IMG-42.png" alt="Andrew Liberty" />
            <div>
              <p className="pd-cta-name">Andrew Liberty</p>
              <p className="pd-cta-sub">Interested in {listing.address}? Let&rsquo;s talk strategy.</p>
            </div>
          </div>
          <div className="pd-cta-btns">
            <a href="/contact" className="btn btn-gold btn-magnetic"><span>Selling Consultation</span><ArrowRight /></a>
            <a href="mailto:andrew.liberty@compass.com" className="btn btn-outline"><SmsIcon /><span>Contact Agent</span></a>
          </div>
        </div>
      </div>
    </>
  );
}
