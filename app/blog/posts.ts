export type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  img: string;
  slug: string;
};

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type RawPost = Omit<Post, "slug">;

const FEATURED_RAW: RawPost = {
  category: "Neighborhood Guides",
  title: "The Most Sought-After Micro-Neighborhoods in Studio City for 2026",
  excerpt:
    "Colfax Meadows, Wrightwood Estates, the Hills — what defines each pocket, who they attract, and where value is quietly climbing.",
  date: "Jul 18, 2026",
  read: "6 min read",
  img: "/images/hero-la-aerial.jpg",
};

const POSTS_RAW: RawPost[] = [
  {
    category: "Market Updates",
    title: "What the $10M+ Market Surge Means for Sellers in the Hollywood Hills",
    excerpt: "The upward trend in ultra-luxury transactions signals a shift. Here's what it means if you're considering a sale.",
    date: "Jul 12, 2026",
    read: "5 min read",
    img: "/images/sold-hollywood-hills.jpg",
  },
  {
    category: "Neighborhoods",
    title: "Laurel Canyon vs. Studio City: Which Neighborhood Fits Your Lifestyle?",
    excerpt: "Walkability, schools, lot sizes, privacy, and price-per-square-foot — a side-by-side for buyers weighing both.",
    date: "Jul 5, 2026",
    read: "7 min read",
    img: "/images/laurel-canyon.jpg",
  },
  {
    category: "Selling Strategy",
    title: "Why Some Luxury Homes Shouldn't Sell Right Away",
    excerpt: "Patience and strategic timing often yield better results than rushing to market, especially in the $3M–$8M range.",
    date: "Jun 28, 2026",
    read: "5 min read",
    img: "/images/sold-toluca-lake.jpg",
  },
  {
    category: "Buying Tips",
    title: "5 Things First-Time Luxury Buyers in LA Get Wrong",
    excerpt: "Skipping pre-approval at higher tiers, underestimating renovation timelines, and misreading comps — the common missteps.",
    date: "Jun 20, 2026",
    read: "4 min read",
    img: "/images/studio-city.jpg",
  },
  {
    category: "Lifestyle",
    title: "Studio City's Best-Kept Dining and Weekend Spots",
    excerpt: "A curated guide to local restaurants, coffee shops, and weekend activities that make Studio City feel like home.",
    date: "Jun 14, 2026",
    read: "5 min read",
    img: "/images/valuation-interior.jpg",
  },
  {
    category: "Buying Tips",
    title: "Off-Market Listings in LA: How They Work and Why They Matter",
    excerpt: "Pocket listings demystified — how connected buyers access properties that never hit the MLS.",
    date: "Jun 6, 2026",
    read: "6 min read",
    img: "/images/hollywood-hills.jpg",
  },
  {
    category: "Market Updates",
    title: "Q2 2026 Market Snapshot: Studio City, Sherman Oaks & Encino",
    excerpt: "Quarterly data on median prices, days on market, and inventory levels across three key Valley neighborhoods.",
    date: "May 28, 2026",
    read: "4 min read",
    img: "/images/sold-studio-city.jpg",
  },
  {
    category: "Selling Strategy",
    title: "When Pulling Your Listing Is Actually the Smartest Move",
    excerpt: "Sometimes withdrawing a property resets buyer perception and leads to stronger offers on relaunch.",
    date: "May 20, 2026",
    read: "5 min read",
    img: "/images/sold-canyon-midcentury.jpg",
  },
  {
    category: "Investment",
    title: "Is Studio City Still a Good Investment? What the Numbers Say",
    excerpt: "Five-year appreciation trends, rental yield potential, and how Studio City compares for long-term value.",
    date: "May 10, 2026",
    read: "6 min read",
    img: "/images/sold-valley-village.jpg",
  },
  {
    category: "Investment",
    title: "From Duplex to Development: Scaling a Los Angeles Portfolio",
    excerpt: "How to think about your next step once a single rental isn't moving the needle anymore.",
    date: "May 2, 2026",
    read: "8 min read",
    img: "/images/sold-sherman-oaks.jpg",
  },
];

const withSlug = (p: RawPost): Post => ({ ...p, slug: slugify(p.title) });

export const FEATURED: Post = withSlug(FEATURED_RAW);
export const POSTS: Post[] = POSTS_RAW.map(withSlug);
export const ALL: Post[] = [FEATURED, ...POSTS];

export const getPost = (slug: string): Post | undefined => ALL.find((p) => p.slug === slug);

/** The one slug that has full demo content authored; everything else is "coming soon". */
export const DEMO_SLUG = FEATURED.slug;
