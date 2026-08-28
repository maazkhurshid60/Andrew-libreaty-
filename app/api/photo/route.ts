import { NextRequest, NextResponse } from "next/server";
import { fetchPhoto } from "@/lib/photoProxy";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url") || "";
  const result = await fetchPhoto(url);

  if (!result.ok) {
    return new NextResponse(null, { status: result.status });
  }

  return new NextResponse(result.body, {
    status: 200,
    headers: {
      "Content-Type": result.contentType,
      // Immutable — these are stable listing-photo URLs (verified against
      // re-fetches from the API on the Stefanie Pollack build), safe to
      // cache aggressively at the edge.
      "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
    },
  });
}
