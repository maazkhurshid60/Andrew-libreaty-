import type { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "My Search Portal — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Your personal Search Portal — save favorite properties, store custom searches, and get notified when matching Los Angeles homes hit the market.",
};

export default function SearchPortalPage() {
  return (
    <div className="mp-page">
      <PortalClient />
    </div>
  );
}
