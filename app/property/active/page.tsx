import type { Metadata } from "next";
import { ArrowRight } from "../../components/icons";
import ActiveListingsSection from "./ActiveListingsSection";

const TITLE = "Active Listings — Andrew Liberty Team | Los Angeles Real Estate";
const DESCRIPTION =
  "Every home currently on the market with the Andrew Liberty Team across Studio City, Sherman Oaks, the Hollywood Hills and greater Los Angeles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/property/active" },
};

export default function ActiveListingsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="prop-hero">
        <div className="container">
          <h1 className="prop-hero-title">Active Listings</h1>
          <p className="prop-hero-sub">
            Every home currently on the market, in one place.
          </p>
        </div>
      </section>

      <ActiveListingsSection />

      {/* ============ START YOUR SEARCH ============ */}
      <section className="prop-searchband-wrap">
        <div className="container">
          <div className="prop-searchband reveal">
            <h2>Not Seeing the Right Fit?</h2>
            <a href="/home-search" className="btn btn-gold btn-magnetic">
              <span>Search Every Listing</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
