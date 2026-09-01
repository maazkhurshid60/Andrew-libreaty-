const FAQS = [
  {
    q: "How do I choose a real estate agent in Los Angeles?",
    a: "Look for local market experience, negotiation credentials, and a clear process from consultation to closing. A good agent should also explain their pricing or search strategy before you commit to anything.",
  },
  {
    q: "What does a real estate agent do when selling a home?",
    a: "A real estate agent prices the home using market data, positions it for the right buyers, markets the listing, and negotiates offers on the seller's behalf through closing.",
  },
  {
    q: "How long does it take to sell a home in Los Angeles?",
    a: "It depends on pricing, condition, and neighborhood demand, but a well-priced home in a competitive Los Angeles market often receives offers within the first few weeks of listing.",
  },
  {
    q: "What's the difference between a REALTOR® and a real estate agent?",
    a: "A REALTOR® is a licensed real estate agent who is also a member of the National Association of REALTORS® and agrees to follow its code of ethics.",
  },
  {
    q: "Do real estate agents charge for a home valuation?",
    a: "No. Most agents, including Andrew Liberty, offer a free, no-obligation home valuation for homeowners considering a sale.",
  },
  {
    q: "What should I look for in a real estate agent for investment properties?",
    a: "Look for an agent who understands cash flow, comps, and development potential, not just residential sales. Andrew Liberty's background in commercial real estate supports this kind of numbers-first evaluation.",
  },
  {
    q: "What areas does Andrew Liberty serve as a real estate agent in Los Angeles?",
    a: "Andrew primarily serves Studio City, Sherman Oaks, Valley Village, Hollywood Hills, Laurel Canyon, and Pasadena.",
  },
  {
    q: "What awards or recognition does Andrew Liberty have as a real estate agent in Los Angeles?",
    a: "Andrew Liberty is RealTrends Verified and a Los Angeles Magazine Real Estate All-Star.",
  },
];

export default function Faq() {
  return (
    <section className="section val-faq">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list reveal" data-reveal-delay="100">
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
  );
}
