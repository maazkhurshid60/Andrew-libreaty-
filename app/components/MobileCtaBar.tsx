"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MobileCtaBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    const hero = document.querySelector<HTMLElement>(".hero");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (!bar || !hero || !footer) return;

    const update = () => {
      const pastHero = hero.getBoundingClientRect().bottom < 0;
      const footerVisible = footer.getBoundingClientRect().top < window.innerHeight;
      bar.classList.toggle("is-visible", pastHero && !footerVisible);
    };

    const observer = new IntersectionObserver(update, { threshold: [0, 0.05] });
    observer.observe(hero);
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="mobile-cta-bar" id="mobile-cta-bar" ref={barRef}>
      <a href="#sold" className="btn btn-primary">
        Browse Homes
      </a>
      <a href="#valuation" className="btn btn-secondary">
        Get Home Value
      </a>
    </div>
  );
}
