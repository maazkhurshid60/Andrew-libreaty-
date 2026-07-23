import { ArrowRight } from "../icons";

const HOODS = [
  {
    coords: "Los Angeles · 91604",
    name: "Studio City",
    desc: "Village feel south of the Boulevard, minutes from the studios, with sought-after schools.",
    img: "/images/studio-city.jpg",
    delay: undefined as number | undefined,
  },
  {
    coords: "Los Angeles · The Hills",
    name: "Laurel Canyon",
    desc: "Secluded canyon living, minutes from both the Valley and the Sunset Strip.",
    img: "/images/laurel-canyon.jpg",
    delay: 100,
  },
  {
    coords: "Los Angeles · Iconic views",
    name: "Hollywood Hills",
    desc: "Skyline views and architectural pedigree that holds value across market cycles.",
    img: "/images/hollywood-hills.jpg",
    delay: 200,
  },
];

export default function Neighborhoods() {
  return (
    <section className="section section-neighborhoods" id="neighborhoods">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">Neighborhood Insights</h2>
          <p className="section-sub">Three neighborhoods we know street by street.</p>
        </div>

        <div className="hood-grid">
          {HOODS.map((hood) => (
            <a
              key={hood.name}
              href="#"
              className="hood-card reveal"
              data-reveal-delay={hood.delay}
              aria-label={`Learn more about ${hood.name}`}
            >
              <div className="hood-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hood.img} alt={hood.name} loading="lazy" data-hood-parallax />
              </div>
              <div className="hood-overlay">
                <p className="hood-coords">{hood.coords}</p>
                <h3>{hood.name}</h3>
                <p className="hood-desc">{hood.desc}</p>
                <span className="hood-cta">
                  Learn More
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
