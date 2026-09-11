import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL as ALL_POSTS } from "./blog/posts";

/**
 * Static routes only. Property detail pages are driven by IDX at request time
 * and have no build-time slug list, so they're deliberately left out — an
 * incomplete sitemap is better than one full of URLs that may 404.
 *
 * /my-search-portal is excluded on purpose: it's a signed-in area.
 */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/real-estate-agent-in-laurel-canyon", priority: 0.9, changeFrequency: "monthly" },
  { path: "/real-estate-agent-in-valley-village", priority: 0.9, changeFrequency: "monthly" },
  { path: "/neighborhoods", priority: 0.8, changeFrequency: "monthly" },
  { path: "/home-search", priority: 0.8, changeFrequency: "daily" },
  { path: "/home-valuation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/property", priority: 0.7, changeFrequency: "daily" },
  { path: "/property/sold", priority: 0.6, changeFrequency: "weekly" },
  { path: "/team", priority: 0.6, changeFrequency: "yearly" },
  { path: "/team/andrew-liberty", priority: 0.7, changeFrequency: "yearly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/compass-concierge", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

/** Post dates are human strings ("Jul 18, 2026"); fall back if one is malformed. */
function parsed(date: string, fallback: Date): Date {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? fallback : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...ALL_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: parsed(post.date, now),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
