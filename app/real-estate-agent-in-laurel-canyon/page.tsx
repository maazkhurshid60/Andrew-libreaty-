import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "../components/icons";
import JsonLd from "../components/JsonLd";
import WhatsTheMove from "../components/home/WhatsTheMove";
import MeetAndrew from "../components/home/MeetAndrew";
import Process from "../components/home/Process";
import Neighborhoods from "../components/home/Neighborhoods";
import Valuation from "../components/home/Valuation";
import Faq from "../components/home/Faq";
import { SITE_URL, SITE_NAME, AGENT, abs } from "@/lib/site";

const PATH = "/real-estate-agent-in-laurel-canyon";

const TITLE = "Real Estate Agent in Laurel Canyon | Every Home Unique";
const DESCRIPTION =
  "Andrew Liberty is a real estate agent in Laurel Canyon who knows these homes rarely compare to one another. Real comps, not guesswork.";

const HERO_SUB =
  "Andrew Liberty is a real estate agent in Laurel Canyon who understands its winding roads, secluded lots, and one-of-a-kind homes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    locale: "en_US",
    images: [
      {
        url: "/images/laurel-canyon.jpg",
        width: 900,
        height: 562,
        alt: "Laurel Canyon, Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/laurel-canyon.jpg"],
  },
};

const MOVE_CARDS = [
  {
    title: "Buy a Home",
    body: "Laurel Canyon homes are often set back from the road on private, wooded lots, which makes comparing prices harder than in a typical neighborhood. I help you understand what a home is really worth before you make an offer.",
    ctaLabel: "Start Home Search",
    href: "/home-search",
  },
  {
    title: "Sell a Home",
    body: "Laurel Canyon buyers pay for privacy, character, and unique architecture, not just square footage. I price and market your home to reach the right buyers for what makes it special.",
    proof: "Priced on real canyon comps, not a formula",
    ctaLabel: "Get Home Value",
    href: "#valuation",
  },
  {
    title: "Invest Strategically",
    body: "Laurel Canyon's limited inventory and unique lots mean value varies a lot from property to property. I evaluate each opportunity on real comps and numbers, not just the setting.",
    ctaLabel: "Explore Opportunities",
    href: "/contact",
  },
];

const BIO = [
  "I work throughout Laurel Canyon, where privacy, character, and setting matter as much as square footage. I am a REALTOR® and Certified Real Estate Negotiation Expert with a background in commercial real estate, which gives me a sharp eye for value on any property, even the ones that don't fit a typical comp.",
  "As a real estate agent in Laurel Canyon, I have learned that no two homes here are alike, so pricing and negotiating take real, hands-on knowledge of the area. I am straightforward and focused on making sure my clients understand exactly what they're buying or selling, every step of the way.",
];

const NEARBY = [
  {
    coords: "Los Angeles · 91604",
    name: "Studio City",
    desc: "Down the canyon, with a walkable village and easy access to the Valley.",
    img: "/images/studio-city.jpg",
    href: "/neighborhoods",
  },
  {
    coords: "Los Angeles · Iconic views",
    name: "Hollywood Hills",
    desc: "Just over the ridge, with sweeping views and homes that don't come around often.",
    img: "/images/hollywood-hills.jpg",
    href: "/neighborhoods",
  },
];

const FAQS = [
  {
    q: "Is it hard to get a loan for a home in Laurel Canyon?",
    a: "Sometimes, yes. Homes on private roads, steep lots, or with unconventional construction can be harder for lenders to appraise. Working with a lender familiar with canyon properties helps avoid delays.",
  },
  {
    q: "Are Laurel Canyon homes at risk from wildfires?",
    a: "Some properties are, depending on location, vegetation, and access roads. It's worth checking a home's specific fire risk rating and insurance costs before buying, since these vary a lot within the canyon.",
  },
  {
    q: "Why are some Laurel Canyon homes hard to find comps for?",
    a: "Many homes are unique in size, layout, or setting, with few truly similar sales nearby. This makes pricing them accurately harder than in a typical neighborhood, and it's why local experience matters more here.",
  },
  {
    q: "Are Laurel Canyon roads private or public?",
    a: "Both exist in the canyon. Some homes sit on private roads that come with shared maintenance responsibilities, which is worth understanding before you buy.",
  },
  {
    q: "Is Laurel Canyon a good place to invest in real estate?",
    a: "It can be, especially for buyers who value privacy and unique properties. Because inventory is limited and homes are hard to replicate, well-chosen properties tend to hold their value.",
  },
  {
    q: "How is buying in Laurel Canyon different from buying in Hollywood Hills or Studio City?",
    a: "Laurel Canyon tends to prioritize privacy and seclusion over views or walkability. Homes are often set back from the road, and buyers here are usually looking for a quieter, more private lifestyle.",
  },
];

export default function LaurelCanyonPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Neighborhoods", item: abs("/neighborhoods") },
                { "@type": "ListItem", position: 3, name: "Laurel Canyon", item: abs(PATH) },
              ],
            },
            {
              "@type": "WebPage",
              "@id": abs(PATH),
              url: abs(PATH),
              name: TITLE,
              description: DESCRIPTION,
              primaryImageOfPage: abs("/images/laurel-canyon.jpg"),
              about: {
                "@type": "Place",
                name: "Laurel Canyon, Los Angeles, CA",
              },
              provider: { "@id": `${SITE_URL}/#agent` },
            },
            {
              "@type": "Service",
              serviceType: "Real estate agent",
              provider: { "@id": `${SITE_URL}/#agent` },
              areaServed: { "@type": "Place", name: "Laurel Canyon, Los Angeles, CA" },
              url: abs(PATH),
            },
          ],
        }}
      />

      {/* ============================ HERO ============================ */}
      <section className="nb-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="nb-hero-bg"
          src="/images/laurel-canyon.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="container">
          <nav className="nb-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="nb-crumb-sep" aria-hidden="true">
              /
            </span>
            <Link href="/neighborhoods">Neighborhoods</Link>
            <span className="nb-crumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Laurel Canyon</span>
          </nav>

          <div className="nb-hero-copy">
            <p className="eyebrow eyebrow-light">Laurel Canyon · Compass</p>
            <h1 className="nb-hero-title">
              Real Estate Agent in Laurel Canyon
              <br />
              <em>Who Knows the Canyon Life</em>
            </h1>
            <p className="nb-hero-sub">{HERO_SUB}</p>
            <div className="nb-hero-ctas">
              <a href="#valuation" className="btn btn-primary btn-magnetic">
                <span>Get Your Canyon Home Value</span>
                <ArrowRight />
              </a>
              {/* btn-secondary is inked for light sections and disappears on
                  the hero photo; btn-ghost-light is the on-dark variant. */}
              <a href="/home-search" className="btn btn-ghost-light">
                Browse Canyon Listings
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsTheMove
        eyebrow="Start Here"
        title="What’s the Move?"
        sub="Every canyon property is its own case. Here is where to begin."
        cards={MOVE_CARDS}
      />

      <MeetAndrew
        title="Meet Andrew Liberty"
        bio={BIO}
        imageAlt={`${AGENT.name}, Laurel Canyon real estate agent`}
      />

      <Process
        title="How I Work With Clients"
        sub="From a free consultation to strategy, negotiation, closing, and advice after the sale, every client goes through the same clear, six-step process. No surprises, no guesswork."
        ctaLabel="Book a Free Consultation"
      />

      <Neighborhoods
        title="Not Far From Laurel Canyon"
        sub="Two neighborhoods on either side of the ridge, each with its own case to make."
        hoods={NEARBY}
      />

      <Valuation
        eyebrow="Free & Confidential"
        title="No Two Canyon Homes Are Alike. Know Yours."
        sub="Laurel Canyon homes don't fit a standard formula. Andrew Liberty looks at your property in person, so you get a real number, not a guess."
      />

      <Faq title="Frequently Asked Questions" faqs={FAQS} />
    </>
  );
}
