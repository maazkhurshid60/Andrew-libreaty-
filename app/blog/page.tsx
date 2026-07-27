import type { Metadata } from "next";
import { ArrowRight } from "../components/icons";
import BlogList from "./BlogList";
import NewsletterForm from "./NewsletterForm";
import { FEATURED, POSTS } from "./posts";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const metadata: Metadata = {
  title: "The Liberty Journal — Andrew Liberty Team | LA Real Estate Insights",
  description:
    "Market perspective, delivered with clarity — strategic insights on Los Angeles real estate: neighborhoods, timing, and the decisions that matter.",
};


export default function BlogPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bl-hero">
        <div className="container bl-hero-inner">
          <div>
            <p className="eyebrow">The Liberty Brief</p>
            <h1 className="bl-hero-title">Market Perspective, Delivered with Clarity</h1>
            <p className="bl-hero-sub">
              Strategic insights on LA real estate — neighborhoods, pricing, and the moves that matter.
            </p>
          </div>
          <div className="bl-hero-stat">
            <b>{POSTS.length}</b>
            <span>Articles</span>
          </div>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="bl-featured">
        <div className="container">
          <div className="bl-featured-card">
            <a className="bl-featured-media" href={`/blog/${FEATURED.slug}`} aria-label={FEATURED.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FEATURED.img} alt={FEATURED.title} loading="eager" />
            </a>
            <div className="bl-featured-body">
              <div className="bl-featured-cat">
                <span className="bl-cat">{FEATURED.category}</span>
                <span className="bl-dot" />
                <span className="date">{FEATURED.date}</span>
              </div>
              <h2 className="bl-featured-title">
                <a href={`/blog/${FEATURED.slug}`}>{FEATURED.title}</a>
              </h2>
              <p className="bl-featured-excerpt">{FEATURED.excerpt}</p>
              <div className="bl-featured-foot">
                <span className="bl-readmeta">
                  <ClockIcon />
                  {FEATURED.read}
                </span>
                <a href={`/blog/${FEATURED.slug}`} className="bl-readmore">
                  Read Article
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FILTER + GRID ============ */}
      <BlogList posts={POSTS} />

      {/* ============ NEWSLETTER ============ */}
      <section className="bl-news-wrap">
        <div className="container">
          <div className="bl-news">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>The Liberty Brief</h2>
              <p>
                Market perspective, smart analysis, and opportunities — delivered with clarity.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
