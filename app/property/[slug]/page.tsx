import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = { title: "Listing — Andrew Liberty Team" };

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PropertyDetailClient slug={slug} />;
}
