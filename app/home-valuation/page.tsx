import type { Metadata } from "next";
import { ArrowRight } from "../components/icons";
import ValuationSearch from "./ValuationSearch";

export const metadata: Metadata = {
  title: "Home Valuation — Andrew Liberty Team | What's Your Home Worth?",
  description:
    "Get an instant estimate of your Los Angeles home's value, backed by a local advisor who knows your street — not just an algorithm. Free and confidential.",
};

const FAQS = [
  {
    q: "What is a home valuation?",
    a: "A home valuation determines the current market value of a residential property. It's crucial for real estate transactions and helps prevent excessive borrowing and financial loss. When you take out a mortgage, the home acts as collateral — so a thorough valuation protects both you and the lender by confirming the property can cover the loan.",
  },
  {
    q: "How is the valuation of my home calculated?",
    a: "Your home's value is calculated from a combination of factors: its location, age, size, condition, any improvements or renovations, and recent sale prices of comparable homes nearby. It also factors in current market trends and local conditions — the estimate is dynamic and shifts with inventory, interest rates, and buyer sentiment.",
  },
  {
    q: "How accurate is the online home valuation?",
    a: "Online valuations are a great starting point and give a general estimate of your property's worth. But they may not capture recent renovations, unique features, historical or architectural significance, and subjective market perception that all affect real market value. For the most accurate assessment, schedule an in-person appraisal or CMA.",
  },
];

const METHODS = [
  {
    tag: "Market analysis",
    title: "Comparative Market Analysis",
    body: "A CMA is the tool a real estate agent uses to value a home. We find recently sold homes as similar and as close to yours as possible — usually three strong comparables — then analyze the differences. Each comp's price is adjusted to reflect what it would sell for if it were identical to your home in today's market.",
  },
  {
    tag: "Professional opinion",
    title: "Appraisals",
    body: "An appraisal is an unbiased valuation based on a licensed professional's opinion — typically what mortgage companies use for purchases and refinances. The appraiser inspects the interior and exterior, weighs recent comparable sales and market trends, and compiles a detailed report with a building sketch, comps map, and photos.",
  },
];

const WHY = [
  {
    num: "01",
    title: "Refinancing",
    body: "Lenders base loans on your property's value and typically let you borrow up to 75–96.5% against it. Knowing your value lets them calculate your equity — and the more equity you have, the better your refinance terms.",
  },
  {
    num: "02",
    title: "Home improvements",
    body: "Before renovating for resale, make sure you're not pricing yourself out of the neighborhood. A valuation shows how your home compares with others nearby and helps guide smart improvement decisions.",
  },
  {
    num: "03",
    title: "Qualifying for credit",
    body: "A Home Equity Line of Credit (HELOC) needs a certain level of equity — most lenders require at least 20%. A valuation helps you see whether you qualify and is used by the lender to make their decision.",
  },
  {
    num: "04",
    title: "Planning ahead",
    body: "Even without an immediate need, knowing your home's value is good information. It helps you plan for the future and respond to whatever financial curveballs life throws — a quick relocation, an opportunity, or an emergency.",
  },
];

export default function HomeValuationPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="val-hero" id="val-form">
        <div className="container">
          <h1 className="val-hero-title">How Much is Your Home Worth?</h1>
          <p className="val-hero-sub">
            Enter your home address below to receive a <b>free, personalized valuation</b> from Andrew
            Liberty.
          </p>
          <ValuationSearch />
        </div>
      </section>

      {/* ============ WHAT'S YOUR PROPERTY WORTH ============ */}
      <section className="section">
        <div className="container val-worth-grid">
          <div className="val-worth-media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/valuation-interior.jpg" alt="Los Angeles home interior" loading="lazy" />
          </div>
          <div className="val-worth-copy reveal" data-reveal-delay={100}>
            <p className="eyebrow">Knowledge, not guesswork</p>
            <h2 className="section-title">What&rsquo;s Your Property Worth?</h2>
            <p className="val-lead">
              Home valuations give you knowledge that helps you plan ahead and make smart decisions.
              It&rsquo;s good practice to stay informed about how much equity you have — and what you
              could borrow against or sell for.
            </p>
            <p className="val-body">
              Our tool provides a more robust, accurate assessment than you&rsquo;ll get from the major
              real estate portals. For the most precise valuation, reach out to discuss a customized
              Comparative Market Analysis or an appraisal.
            </p>
            <a href="#val-form" className="btn btn-secondary">
              Get my valuation
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ THE ESSENTIALS, EXPLAINED ============ */}
      <section className="section val-faq">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">The Essentials, Explained</h2>
            <p className="section-sub">
              A quick primer on how valuations work and what the number really means.
            </p>
          </div>
          <div className="faq-list reveal" data-reveal-delay={100}>
            {FAQS.map((f, i) => (
              <details className="faq-item" key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEARCH BAND ============ */}
      <section className="val-band-wrap">
        <div className="container">
          <div className="val-band reveal">
            <div>
              <p className="eyebrow">Start your property search</p>
              <h2>Curious what your next move looks like?</h2>
              <p>Browse active listings across Studio City, Sherman Oaks, the Hills and beyond.</p>
            </div>
            <a href="/home-search" className="btn btn-gold btn-magnetic">
              <span>Browse Homes</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ TWO ACCURATE WAYS ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">How it&rsquo;s done</p>
            <h2 className="section-title">Two Accurate Ways to Value a Home</h2>
          </div>
          <div className="methods-grid">
            {METHODS.map((m, i) => (
              <article className="method-card reveal" key={m.title} data-reveal-delay={i * 100}>
                <span className="method-tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY A VALUATION MATTERS ============ */}
      <section className="section val-why">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">When you&rsquo;ll need one</p>
            <h2 className="section-title">Why a Valuation Matters</h2>
            <p className="section-sub">Situations where knowing your home&rsquo;s value pays off.</p>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <article className="why-card reveal" key={w.num} data-reveal-delay={i * 80}>
                <span className="why-num">{w.num}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section">
        <div className="container val-final-inner">
          <h2 className="reveal">Ready for your number?</h2>
          <p className="reveal" data-reveal-delay={60}>
            Get a free, no-obligation valuation and a local expert&rsquo;s read on your home — usually
            back to you within the hour.
          </p>
          <div className="val-final-ctas reveal" data-reveal-delay={120}>
            <a href="#val-form" className="btn btn-primary btn-magnetic">
              <span>Unlock Your Free Valuation</span>
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-secondary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
