/**
 * Site-level constants shared by metadata, sitemap, robots and JSON-LD.
 *
 * SITE_URL has to be absolute — canonical URLs, Open Graph images and the
 * sitemap are all meaningless as relative paths. NEXT_PUBLIC_SITE_URL still
 * overrides this if it is set in the deploy environment.
 *
 * The fallback used to be andrewlibertyteam.com, which does not resolve — no
 * DNS at all. And because NEXT_PUBLIC_SITE_URL was never set in the deploy,
 * the fallback was what shipped: every canonical tag and every sitemap entry
 * on the live site pointed at a dead host, telling Google the real pages were
 * duplicates of URLs that do not exist. The site answers on andrewliberty.com
 * (the apex 308s to www, so www is the canonical form), which is what the
 * sitemap we were sent uses too.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.andrewliberty.com"
).replace(/\/$/, "");

export const SITE_NAME = "Andrew Liberty Team";

/** Absolute URL for a site-relative path. */
export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const AGENT = {
  name: "Andrew Liberty",
  legalName: "Andrew Ruric Liberty II",
  jobTitle: "REALTOR® · Certified Real Estate Negotiation Expert",
  licence: "CA DRE# 01965696",
  brokerage: "Compass California, Inc.",
  brokerageLicence: "CA DRE# 01991628",
  phone: "+1-310-709-0581",
  email: "andrew.liberty@compass.com",
  image: "/images/andrew-liberty.jpg",
  sameAs: [
    "https://www.instagram.com/iamandrewliberty",
    "https://www.facebook.com/andrew.liberty.90",
    "https://www.linkedin.com/in/andrew-liberty-55aa612a",
    "https://www.compass.com/agents/andrew-liberty/",
  ],
} as const;

/** Everywhere the team actually works — used for schema areaServed. */
export const AREAS_SERVED = [
  "Studio City",
  "Sherman Oaks",
  "Valley Village",
  "Hollywood Hills",
  "Laurel Canyon",
  "Pasadena",
] as const;
