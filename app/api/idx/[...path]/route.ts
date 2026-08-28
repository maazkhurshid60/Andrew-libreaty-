import { NextRequest, NextResponse } from "next/server";
import { proxyIdxRequest } from "@/lib/idxProxy";

async function handle(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  const query = new URLSearchParams(req.nextUrl.search);

  let jsonBody: Record<string, unknown> | undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    try {
      jsonBody = await req.json();
    } catch {
      jsonBody = undefined;
    }
  }

  const result = await proxyIdxRequest({
    method: req.method,
    path: path.join("/"),
    query,
    jsonBody,
  });

  // The Fetch spec forbids a body on null-body statuses (204/205/304) — even
  // an empty string throws when constructing the Response. IDX Broker
  // returns a bare 204 for "no results" on some calls (e.g. an account with
  // zero featured listings), so this isn't just theoretical.
  const nullBodyStatus = result.status === 204 || result.status === 205 || result.status === 304;

  return new NextResponse(nullBodyStatus ? null : result.body, {
    status: result.status,
    headers: { "Content-Type": result.contentType },
  });
}

export const GET = handle;
export const PUT = handle;
export const POST = handle;
export const DELETE = handle;
