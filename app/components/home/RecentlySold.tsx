"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";

type Property = {
  location: string;
  title: string;
  meta: string;
  cat: string;
  img: string;
  alt: string;
};

const PROPERTIES: Property[] = [
  {
    location: "Studio City",
    title: "Studio City Residence",
    meta: "4 bd · 3 ba · 2,860 sq ft",
    cat: "sold seller",
    img: "/images/sold-studio-city.jpg",
    alt: "Modern hillside home at dusk, Studio City",
  },
  {
    location: "Laurel Canyon",
    title: "Canyon Mid-Century",
    meta: "3 bd · 2 ba · 2,140 sq ft",
    cat: "sold buyer",
    img: "/images/sold-canyon-midcentury.jpg",
    alt: "Bright open-plan living room with designer finishes",
  },
  {
    location: "Hollywood Hills",
    title: "Hillside View Estate",
    meta: "5 bd · 4.5 ba · 4,320 sq ft",
    cat: "sold featured seller",
    img: "/images/sold-hollywood-hills.jpg",
    alt: "Luxury home exterior with pool at twilight, Hollywood Hills",
  },
  {
    location: "Sherman Oaks",
    title: "Sherman Oaks Traditional",
    meta: "4 bd · 3 ba · 3,050 sq ft",
    cat: "sold buyer featured",
    img: "/images/sold-sherman-oaks.jpg",
    alt: "Classic traditional home with manicured lawn",
  },
  {
    location: "Valley Village",
    title: "Valley Village Bungalow",
    meta: "3 bd · 2 ba · 1,780 sq ft",
    cat: "sold seller",
    img: "/images/sold-valley-village.jpg",
    alt: "Charming single-story home at golden hour",
  },
  {
    location: "Toluca Lake",
    title: "Toluca Lake Modern",
    meta: "4 bd · 4 ba · 3,610 sq ft",
    cat: "sold buyer featured",
    img: "/images/sold-toluca-lake.jpg",
    alt: "Architectural home with clean lines and glass walls",
  },
];

const TABS = [
  { filter: "sold", label: "Recently Sold" },
  { filter: "featured", label: "Featured" },
  { filter: "buyer", label: "Buyer Success" },
  { filter: "seller", label: "Seller Success" },
];

export default function RecentlySold() {
  const [activeFilter, setActiveFilter] = useState("sold");
  const carouselRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false });

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const selectFilter = (filter: string) => {
    setActiveFilter(filter);
    carouselRef.current?.scrollTo({ left: 0, behavior: prefersReduced() ? "auto" : "smooth" });
  };

  const scrollStep = () => {
    const card = carouselRef.current?.querySelector<HTMLElement>(".property-card:not(.is-hidden)");
    return card ? card.offsetWidth + 20 : 350;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = {
      isDown: true,
      startX: e.clientX,
      startScroll: carouselRef.current?.scrollLeft ?? 0,
      moved: false,
    };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const c = carouselRef.current;
    if (!c || !drag.current.isDown) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6 && !drag.current.moved) {
      drag.current.moved = true;
      c.classList.add("is-dragging");
    }
    if (drag.current.moved) c.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.isDown = false;
    carouselRef.current?.classList.remove("is-dragging");
  };

  return (
    <section className="section section-sold" id="sold">
      <div className="container">
        <div className="section-head section-head-split reveal">
          <div>
            <h2 className="section-title">Recently Sold</h2>
          </div>
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              aria-label="Previous properties"
              onClick={() => carouselRef.current?.scrollBy({ left: -scrollStep(), behavior: "smooth" })}
            >
              <ArrowLeft />
            </button>
            <button
              className="carousel-btn"
              aria-label="Next properties"
              onClick={() => carouselRef.current?.scrollBy({ left: scrollStep(), behavior: "smooth" })}
            >
              <ArrowRight className="" />
            </button>
          </div>
        </div>

        <div className="filter-tabs reveal" role="tablist" aria-label="Property filters">
          {TABS.map((tab) => (
            <button
              key={tab.filter}
              className={`filter-tab${activeFilter === tab.filter ? " is-active" : ""}`}
              role="tab"
              aria-selected={activeFilter === tab.filter}
              onClick={() => selectFilter(tab.filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="sold-carousel"
        id="sold-carousel"
        data-cursor="drag"
        ref={carouselRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {PROPERTIES.map((p) => {
          const hidden = !p.cat.split(" ").includes(activeFilter);
          return (
            <article
              key={p.title}
              className={`property-card tilt-card${hidden ? " is-hidden" : ""}`}
              data-cat={p.cat}
            >
              <div className="property-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} loading="lazy" />
                <span className="badge badge-dark">Sold</span>
              </div>
              <div className="property-body">
                <p className="property-location">{p.location}</p>
                <h3 className="property-title">{p.title}</h3>
                <p className="property-meta">{p.meta}</p>
                <a href="#" className="btn btn-tertiary btn-sm">
                  <span>View Details</span>
                  <ArrowRight />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
