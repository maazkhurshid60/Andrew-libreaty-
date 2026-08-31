import type { NextConfig } from "next";
import { SITE_URL } from "./lib/site";

const nextConfig: NextConfig = {
  // Makes Next's own JS/CSS/font bundle URLs absolute instead of
  // root-relative, so they still resolve correctly when IDX Broker's
  // Dynamic Wrapper re-serves app/idx-wrapper/page.tsx's markup under
  // andrew-liberty.idxbroker.com. No effect on normal same-origin requests.
  assetPrefix: process.env.NODE_ENV === "production" ? SITE_URL : undefined,
};

export default nextConfig;
