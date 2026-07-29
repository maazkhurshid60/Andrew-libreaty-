import type { PropertyItem } from "../PropertyCard";

export type Feature = { label: string; value: string };
export type HistoryItem = { event: string; sub: string; price?: string };

export type Listing = {
  slug: string;
  address: string;
  city: string;
  price: string;
  perSqft: string;
  status: string;
  listed: string;
  beds: string;
  baths: string;
  sqft: string;
  built: string;
  type: string;
  gallery: string[];
  moreCount: number;
  overview: string[];
  features: { interior: Feature[]; exterior: Feature[]; details: Feature[] };
  lat: number;
  lng: number;
  pin: string;
  history: HistoryItem[];
};

export const DEMO_SLUG = "735-n-stanley-ave";

const STANLEY: Listing = {
  slug: DEMO_SLUG,
  address: "735 N Stanley Ave",
  city: "Los Angeles, CA 90048",
  price: "$2,925,000",
  perSqft: "$569 / sqft",
  status: "Active",
  listed: "Listed Jul 19, 2026 · Updated 4 hours ago",
  beds: "4",
  baths: "5",
  sqft: "5,145",
  built: "2016",
  type: "Residential",
  gallery: [
    "/images/sold-hollywood-hills.jpg",
    "/images/valuation-interior.jpg",
    "/images/sold-studio-city.jpg",
    "/images/sold-toluca-lake.jpg",
    "/images/sold-canyon-midcentury.jpg",
    "/images/hollywood-hills.jpg",
    "/images/studio-city.jpg",
    "/images/laurel-canyon.jpg",
    "/images/sold-sherman-oaks.jpg",
    "/images/sold-valley-village.jpg",
    "/images/valuation-interior.jpg",
    "/images/sold-hollywood-hills.jpg",
    "/images/sold-studio-city.jpg",
    "/images/sold-toluca-lake.jpg",
    "/images/sold-canyon-midcentury.jpg",
  ],
  moreCount: 10,
  overview: [
    "Attention Backyard Lovers! Brand New! Welcome to THE OGDEN, a luxurious bright masterpiece built in the heart of Beverly Grove & Melrose District. High ceilings, white oak hardwood flooring, expansive windows, and luxurious finishes set the atmosphere for this impeccable home. Enjoy the family room where custom black insulated glass sliding doors provide a remarkable view of the expansive backyard and pool.",
    "The home boasts an opulent dining room alongside a custom-designed kitchen complete with Quartzite countertops, White Cabinets, and a full set of Wolf & Sub-Zero appliances. Ascend the stairs to the double-volume master suite that showcases high ceilings, a private balcony, and a spa-like bathroom with soaking tub and walk-in closet. In the rest of the property, an adaptable garage that can serve as an extra outdoor entertainment space, this smart home is equipped with brant-home technology and less encompassing video cameras.",
  ],
  features: {
    interior: [
      { label: "Total Stories", value: "2" },
      { label: "Bedrooms", value: "4" },
      { label: "Total Bathrooms", value: "5" },
      { label: "Full Bathrooms", value: "4" },
      { label: "Half Bathrooms", value: "1" },
      { label: "Three-Quarter Bathrooms", value: "0" },
      { label: "Interior Features", value: "Crown Moldings, Recessed Lighting, Turnkey" },
      { label: "Appliances", value: "Dryer, Dishwasher, Washer, Microwave, Range/Oven, Refrigerator" },
      { label: "Laundry Description", value: "Room" },
      { label: "Floor Description", value: "Engineered Hardwood, Tile" },
      { label: "Fireplace", value: "Yes" },
      { label: "Fireplace Description", value: "Decorative" },
      { label: "Cooling", value: "Yes" },
      { label: "Cooling Description", value: "Central" },
      { label: "Heating", value: "Yes" },
      { label: "Heating Description", value: "Central" },
    ],
    exterior: [
      { label: "Lot Size", value: "6,500 sqft" },
      { label: "Pool", value: "Yes — In Ground, Heated" },
      { label: "Parking Spaces", value: "4" },
      { label: "Garage Spaces", value: "2" },
      { label: "Architecture", value: "Contemporary" },
      { label: "Roof", value: "Flat" },
      { label: "View", value: "Pool, City Lights" },
      { label: "Construction", value: "Stucco, Glass" },
    ],
    details: [
      { label: "Property Type", value: "Residential — Single Family" },
      { label: "Year Built", value: "2016" },
      { label: "MLS #", value: "26-661237" },
      { label: "Days on Market", value: "1" },
      { label: "County", value: "Los Angeles" },
      { label: "Status", value: "Active" },
      { label: "Price / SqFt", value: "$569" },
    ],
  },
  lat: 34.0812,
  lng: -118.3612,
  pin: "$2.925M",
  history: [
    { event: "Sold", sub: "Represented by Andrew Liberty · Compass", price: "$2,825,000" },
    { event: "Listed for sale", sub: "Mar 18, 2020 · MLS Compass LA Metro", price: "$2,925,000" },
    { event: "Built", sub: "2016 · Single-Family, new construction" },
  ],
};

export const LISTINGS: Record<string, Listing> = { [DEMO_SLUG]: STANLEY };

export const getListing = (slug: string): Listing | undefined => LISTINGS[slug];

export const SIMILAR: (PropertyItem & { slug: string })[] = [
  {
    slug: "8420-hillside-ave",
    img: "/images/sold-hollywood-hills.jpg",
    alt: "Hillside estate with pool",
    location: "Hollywood Hills, CA 90068",
    price: "$3,995,000",
    address: "8420 Hillside Ave",
    beds: "4", baths: "5", sqft: "3,890",
    badge: "Active",
    badgeGold: true,
  },
  {
    slug: "4210-bellaire-ave",
    img: "/images/valuation-interior.jpg",
    alt: "Modern living interior",
    location: "Studio City, CA 91604",
    price: "$1,650,000",
    address: "4210 Bellaire Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Active",
    badgeGold: true,
  },
  {
    slug: "14830-huston-st",
    img: "/images/sold-canyon-midcentury.jpg",
    alt: "Mid-century interior",
    location: "Sherman Oaks, CA 91403",
    price: "$1,450,000",
    address: "14830 Huston St",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Active",
    badgeGold: true,
  },
  {
    slug: "4531-kraft-ave",
    img: "/images/sold-studio-city.jpg",
    alt: "Contemporary home exterior",
    location: "Studio City, CA 91602",
    price: "$1,450,000",
    address: "4531 Kraft Ave",
    beds: "4", baths: "3", sqft: "2,860",
    badge: "Active",
    badgeGold: true,
  },
];

/** Every slug that gets a prerendered page (demo + coming-soon similars). */
export const ALL_SLUGS = [DEMO_SLUG, ...SIMILAR.map((s) => s.slug)];
