import type { Metadata } from "next";
import { ArrowRight } from "../../components/icons";
import SoldListingsSection from "./SoldListingsSection";

const TITLE = "Sold Listings — Andrew Liberty Team | Los Angeles Real Estate";
const DESCRIPTION =
  "Every past transaction closed by the Andrew Liberty Team across Studio City, Sherman Oaks, the Hollywood Hills and greater Los Angeles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/property/sold" },
};

export default function SoldListingsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="prop-hero">
        <div className="container">
          <h1 className="prop-hero-title">Sold Listings</h1>
          <p className="prop-hero-sub">
            Every deal navigated with strategy, discipline, and steady composure.
          </p>
        </div>
      </section>

      <SoldListingsSection />

      {/* ============ START YOUR SEARCH ============ */}
      <section className="prop-searchband-wrap">
        <div className="container">
          <div className="prop-searchband reveal">
            <h2>Looking for Your Next Home?</h2>
            <a href="/home-search" className="btn btn-gold btn-magnetic">
              <span>Browse Homes</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
