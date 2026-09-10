import type { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "My Search Portal — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Your personal Search Portal — save favorite properties, store custom searches, and get notified when matching Los Angeles homes hit the market.",
  alternates: { canonical: "/my-search-portal" },
  // Signed-in area with nothing crawlable; also disallowed in robots.ts.
  robots: { index: false, follow: false },
};

export default function SearchPortalPage() {
  return (
    <div className="mp-page">
      <PortalClient />
    </div>
  );
}
