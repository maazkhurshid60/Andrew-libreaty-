"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, PhoneIcon } from "./icons";

const NAV_LINKS = [
  { href: "/property", label: "Properties" },
  { href: "/home-search", label: "Home Search" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/home-valuation", label: "Home Valuation" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const pathname = usePathname();
  // Inner pages have no transparent hero behind the header — keep it solid & sticky.
  const solid = pathname !== "/";

  /* Sticky glass header — shrink on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy — active nav underline for in-page anchors */
  useEffect(() => {
    const anchors = NAV_LINKS.filter((l) => l.href.startsWith("#"));
    const sections = anchors
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));
    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  /* Lock scroll + close on Escape while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-header${solid ? " is-solid" : ""}${scrolled ? " is-scrolled" : ""}`}
        id="site-header"
      >
        <div className="header-inner">
          <a href="/#top" className="wordmark" aria-label="Andrew Liberty Team — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="wordmark-logo" width={34} height={39} />
            <span className="wordmark-text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-andrew.png" alt="" className="wordmark-word" width={99} height={21} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-liberty.png" alt="" className="wordmark-word" width={91} height={21} />
            </span>
          </a>

          <nav className="main-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link${
                  activeHash === link.href ||
                  (link.href.startsWith("/") && pathname === link.href)
                    ? " is-active"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+13107090581" className="header-phone" aria-label="Call us at (310) 709-0581">
              <PhoneIcon />
              <span>(310) 709-0581</span>
            </a>
            <a href="#contact" className="btn btn-primary btn-magnetic header-cta">
              <span>Contact Us</span>
              <ArrowRight />
            </a>
            <button
              className={`menu-toggle${menuOpen ? " is-open" : ""}`}
              id="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setMenuOpen(false);
        }}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
          <a href="tel:+13107090581" className="mobile-phone">
            (310) 709-0581
          </a>
        </div>
      </div>
    </>
  );
}
