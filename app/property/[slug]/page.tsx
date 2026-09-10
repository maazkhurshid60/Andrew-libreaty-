import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

/* Listing content is fetched from IDX in the client, so there's nothing to
   build a rich title from here — but each URL still needs to canonicalise to
   itself rather than inherit one from an ancestor. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Listing — Andrew Liberty Team",
    alternates: { canonical: `/property/${slug}` },
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PropertyDetailClient slug={slug} />;
}
