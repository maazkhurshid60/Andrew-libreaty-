import type { Metadata } from "next";
import HomeSearchClient from "./HomeSearchClient";

export const metadata: Metadata = {
  title: "Home Search — Andrew Liberty Team | Los Angeles Real Estate",
  description:
    "Search active and coming-soon homes for sale across Los Angeles — Studio City, Sherman Oaks, the Hollywood Hills and more. Filter by price, beds, baths, and property type. Andrew Liberty Team, Compass.",
};

export default function HomeSearchPage() {
  return <HomeSearchClient />;
}
