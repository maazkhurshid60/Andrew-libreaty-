import type { Metadata } from "next";
import { ArrowRight } from "../../components/icons";
import PropertyCard from "../PropertyCard";
import PropertyDetail from "./PropertyDetail";
import { ALL_SLUGS, getListing, SIMILAR } from "./data";

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  if (listing) {
    return {
      title: `${listing.address}, ${listing.city} — Andrew Liberty Team`,
      description: `${listing.beds} bd · ${listing.baths} ba · ${listing.sqft} sqft — ${listing.price}. ${listing.address}, ${listing.city}.`,
    };
  }
  return { title: "Listing — Andrew Liberty Team" };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    const match = SIMILAR.find((s) => s.slug === slug);
    return (
      <div className="pd-page">
        <div className="container">
          <div className="pd-soon">
            <span className="pd-soon-badge">Listing Coming Soon</span>
            <h1>{match ? match.address : "This listing is on the way."}</h1>
            <p>
              Full details, photos, and pricing for this property are being prepared. Reach out and
              we&rsquo;ll send everything over the moment it&rsquo;s live.
            </p>
            <a href="/home-search" className="btn btn-gold btn-magnetic">
              <span>Browse Active Listings</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pd-page">
      <PropertyDetail listing={listing} />

      {/* ============ SIMILAR PROPERTIES ============ */}
      <section className="pd-similar" id="similar">
        <div className="container">
          <div className="pd-similar-head">
            <h2>Similar Properties</h2>
          </div>
          <div className="pd-similar-grid">
            {SIMILAR.map((p) => (
              <PropertyCard key={p.slug} p={p} href={`/property/${p.slug}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ DISCLAIMER ============ */}
      <section className="pd-legal">
        <div className="container">
          <p>
            Based on information from the Multiple Listing Service. All measurements and square footages
            are approximate and have not been verified by the listing agent or broker. Buyer is advised
            to independently verify the accuracy of all information through personal inspection and with
            appropriate professionals. This is not intended to solicit property already listed. Andrew
            Liberty is a real estate licensee affiliated with Compass. Compass California, Inc. · CA DRE#
            01991628. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  );
}
