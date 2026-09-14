import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL as ALL_POSTS } from "./blog/posts";

/**
 * Static routes only. Property detail pages are driven by IDX at request time
 * and have no build-time slug list, so they're deliberately left out — an
 * incomplete sitemap is better than one full of URLs that may 404.
 *
 * /my-search-portal is excluded on purpose: it's a signed-in area.
 *
 * Priorities and frequencies below are the ones the SEO consultant supplied.
 * Four entries are marked "not in the supplied list" — the two neighbourhood
 * landing pages, /property/sold, and the blog posts. They are kept rather
 * than dropped: the list we were sent covers 11 URLs against the 25 this site
 * actually publishes, and the pages it leaves out include the two built to
 * rank for "real estate agent in <neighbourhood>", which are the ones with
 * the most to lose from being left out of the sitemap. Worth confirming with
 * him whether they were omitted deliberately or simply not known about — the
 * Valley Village page is recent.
 */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/property", priority: 0.9, changeFrequency: "weekly" },
  { path: "/home-search", priority: 0.9, changeFrequency: "daily" },
  { path: "/neighborhoods", priority: 0.8, changeFrequency: "monthly" },
  { path: "/home-valuation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/team/andrew-liberty", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/compass-concierge", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },

  /* Not in the supplied list — see above. */
  { path: "/real-estate-agent-in-laurel-canyon", priority: 0.9, changeFrequency: "monthly" },
  { path: "/real-estate-agent-in-valley-village", priority: 0.9, changeFrequency: "monthly" },
  { path: "/property/sold", priority: 0.6, changeFrequency: "weekly" },
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
