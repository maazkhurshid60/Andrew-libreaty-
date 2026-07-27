import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "../../components/icons";
import { ShareIcon, FacebookIcon, WhatsappIcon } from "../../components/vuesax";
import NewsletterForm from "../NewsletterForm";
import { ALL, POSTS, getPost, DEMO_SLUG } from "../posts";

export function generateStaticParams() {
  return ALL.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article — The Liberty Journal" };
  return {
    title: `${post.title} — The Liberty Journal | Andrew Liberty Team`,
    description: post.excerpt,
  };
}

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const BackArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const isDemo = slug === DEMO_SLUG;

  return (
    <article className="ar-page">
      {/* ============ HEAD ============ */}
      <header className="ar-head">
        <div className="container">
          <div className="ar-narrow">
            <a href="/blog" className="ar-back">
              <BackArrow />
              Back to the Journal
            </a>
            <div className="ar-cat-row">
              <span className="bl-cat">{post.category}</span>
              <span className="bl-dot" />
              <span className="date">{post.date}</span>
            </div>
            <h1 className="ar-title">{post.title}</h1>
            <div className="ar-meta">
              <div className="ar-meta-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/team/IMG-42.png" alt="Andrew Liberty" />
                <div>
                  <p className="ar-meta-name">Andrew Liberty</p>
                  <p className="ar-meta-sub">Founder &amp; Lead Agent · {post.read}</p>
                </div>
              </div>
              <div className="ar-share" aria-label="Share this article">
                <a href="#" aria-label="Share on Facebook"><FacebookIcon /></a>
                <a href="#" aria-label="Share on WhatsApp"><WhatsappIcon /></a>
                <a href="#" aria-label="Copy link"><ShareIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ HERO IMAGE ============ */}
      <div className="ar-hero-img">
        <div className="container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.img} alt={post.title} />
        </div>
      </div>

      {/* ============ BODY ============ */}
      {isDemo ? (
        <div className="ar-body">
          <div className="container">
            <div className="ar-narrow">
              <p>
                Studio City has spent the last decade being talked about as one place. But anyone who
                actually lives and works here knows the truth: it&rsquo;s a collection of distinct
                pockets, each with its own personality, buyer, and price trajectory. As we head into
                the back half of 2026, the gaps between those pockets are widening — and knowing which
                is which has never mattered more.
              </p>
              <p>
                We pulled the last eighteen months of transactions, walked the streets, and compared
                notes with the buyers actually competing for these homes. Here&rsquo;s where demand is
                quietly concentrating, and why.
              </p>

              <h2>Colfax Meadows: The Quiet Powerhouse</h2>
              <p>
                Tucked south of the boulevard and framed by mature trees, Colfax Meadows keeps topping
                buyers&rsquo; lists for a simple reason: it delivers the flat, walkable, family-friendly
                grid everyone says they want, without the highway noise that undercuts nearby streets.
                Inventory is thin and turnover is slow, which keeps competition high whenever a home
                does list.
              </p>
              <ul>
                <li>Flat, walkable streets inside the Carpenter Community Charter boundary</li>
                <li>Strong land value — buyers are paying for the lot as much as the house</li>
                <li>Renovated single-stories trade at a persistent premium over the area median</li>
              </ul>

              <blockquote className="ar-quote">
                &ldquo;Studio City isn&rsquo;t cooling — it&rsquo;s recalibrating. That&rsquo;s exactly
                why serious buyers are focusing on specific pockets rather than the market as a
                whole.&rdquo;
              </blockquote>

              <h2>Wrightwood Estates: Where Space Meets Character</h2>
              <p>
                Head up into the hills and Wrightwood Estates offers what the flats can&rsquo;t: room to
                breathe. Larger lots, architectural variety, and privacy draw buyers trading a bit of
                walkability for space and view. The trade-off is a wider range of conditions — from
                mid-century originals to full modern rebuilds — so pricing rewards buyers who know how
                to read a renovation.
              </p>
              <p>
                Homes with real outdoor flow — flat pads, pools, and usable yards — are the ones setting
                new highs. Sloped, tear-down-adjacent lots still sit unless they&rsquo;re priced for what
                they are.
              </p>

              <h2>The Hills: Privacy, Views, and Premium Positioning</h2>
              <p>
                At the top of the market, the Hills continue to command a premium that has less to do
                with square footage and more to do with what you can&rsquo;t add later: a view, a gate,
                and genuine seclusion. This is the pocket where staging, timing, and representation move
                the number the most.
              </p>
              <ul>
                <li>View and privacy carry the value — finishes are the tiebreaker</li>
                <li>Longer marketing windows are normal and often strategic</li>
                <li>Off-market activity is heaviest here — relationships matter</li>
              </ul>

              <h2>Other Pockets Worth Watching</h2>
              <p>Two areas are quietly gathering momentum that we expect to show up in the numbers next year.</p>
              <h3>Woodbridge Park</h3>
              <p>
                Still a relative value on a price-per-foot basis, with a mix of original ranches and
                thoughtful remodels attracting buyers priced out of Colfax Meadows.
              </p>
              <h3>Radford-Adjacent</h3>
              <p>
                Proximity to the studios keeps a steady floor of demand, and newer construction is
                slowly resetting expectations for the blocks closest to the lot.
              </p>

              <h2>The Bottom Line</h2>
              <p>
                &ldquo;Studio City&rdquo; is no longer a single market, and pricing a home — or making an
                offer — as if it were is the fastest way to leave money on the table. Whether you&rsquo;re
                buying or selling, the pocket you&rsquo;re in should shape the strategy. If you want a
                candid read on your specific block, that&rsquo;s exactly the conversation we love to have.
              </p>

              <div className="ar-tags">
                <span>Studio City</span>
                <span>Neighborhoods</span>
                <span>Market Perspective</span>
                <span>2026 Outlook</span>
              </div>

              <div className="ar-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/team/IMG-42.png" alt="Andrew Liberty" />
                <div>
                  <p className="ar-author-name">Andrew Liberty</p>
                  <p className="ar-author-role">Founder &amp; Lead Agent</p>
                  <p className="ar-author-bio">
                    A Los Angeles based REALTOR® and certified Real Estate Negotiation Expert, Andrew
                    blends strategy and real-world experience to help clients move forward with clarity —
                    across Studio City and greater LA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="ar-narrow ar-soon">
            <span className="ar-soon-badge">Coming Soon</span>
            <h1>This article is on the way.</h1>
            <p>
              We&rsquo;re putting the finishing touches on &ldquo;{post.title}.&rdquo; In the meantime,
              explore the rest of the Journal or reach out with a question.
            </p>
            <a href="/blog" className="btn btn-gold btn-magnetic">
              <span>Back to the Journal</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      )}

      {/* ============ CONTINUE READING ============ */}
      <section className="ar-related">
        <div className="container">
          <div className="ar-related-head">
            <h2>Continue Reading</h2>
            <a href="/blog">View all articles →</a>
          </div>
          <div className="bl-grid">
            {related.map((p) => (
              <article className="bl-card" key={p.slug}>
                <a className="bl-card-media" href={`/blog/${p.slug}`} aria-label={p.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} loading="lazy" />
                </a>
                <div className="bl-card-body">
                  <div className="bl-card-top">
                    <span className="bl-cat">{p.category}</span>
                    <span className="bl-dot" />
                    <span className="bl-card-date">{p.date}</span>
                  </div>
                  <h3 className="bl-card-title">
                    <a href={`/blog/${p.slug}`}>{p.title}</a>
                  </h3>
                  <p className="bl-card-excerpt">{p.excerpt}</p>
                  <div className="bl-card-foot">
                    <span className="bl-readmeta">
                      <ClockIcon />
                      {p.read}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="bl-news-wrap">
        <div className="container">
          <div className="bl-news">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>The Liberty Brief</h2>
              <p>Market perspective, smart analysis, and opportunities — delivered with clarity.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </article>
  );
}
