import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Home Search — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Search active and coming-soon homes for sale across Los Angeles — Studio City, Sherman Oaks, the Hollywood Hills and more. Filter by price, beds, baths, and property type. Andrew Liberty Team, Compass.",
};

export default function HomeSearchPage() {
  return (
    <div className="pd-page">
      <div className="container">
        <ComingSoon
          title="Home Search Is Coming Soon"
          body="We're connecting our live MLS/IDX feed so you can search active listings across Los Angeles in real time. Check back shortly, or reach out and we'll help you find homes in the meantime."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </div>
    </div>
  );
}
