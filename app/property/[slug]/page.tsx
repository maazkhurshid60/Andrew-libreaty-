import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon";

export const metadata: Metadata = { title: "Listing — Andrew Liberty Team" };

export default function PropertyDetailPage() {
  return (
    <div className="pd-page">
      <div className="container">
        <ComingSoon
          title="This Listing Is On The Way"
          body="Full details, photos, and pricing for this property are being prepared. Reach out and we'll send everything over the moment it's live."
          ctaLabel="Browse Active Listings"
          ctaHref="/home-search"
        />
      </div>
    </div>
  );
}
