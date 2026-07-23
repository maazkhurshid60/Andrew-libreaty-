"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide pointer & scroll interactions ported from the original js/main.js.
 * Renders the custom-cursor markup and wires up: trailing glow cursor, magnetic
 * buttons, card tilt, scroll-reveal, hero parallax + floating cards, and the
 * neighborhood image parallax. Re-runs when the route changes so freshly
 * mounted sections get their listeners.
 */
export default function GlobalEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanups: Array<() => void> = [];
    const add = (
      target: Window | Document | HTMLElement,
      type: string,
      handler: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };

    /* ---------- Scroll reveal ---------- */
    const reveals = [...document.querySelectorAll<HTMLElement>(".reveal")];
    reveals.forEach((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
    });
    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    /* ---------- Custom cursor with trailing glow ---------- */
    if (isFinePointer && !prefersReducedMotion) {
      const dot = document.querySelector<HTMLElement>(".cursor-dot");
      const glow = document.querySelector<HTMLElement>(".cursor-glow");
      if (dot && glow) {
        let mouseX = -100,
          mouseY = -100,
          glowX = -100,
          glowY = -100,
          raf = 0;

        add(
          document,
          "mousemove",
          ((e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.body.classList.add("has-cursor");
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
          }) as EventListener,
          { passive: true }
        );

        const trail = () => {
          glowX += (mouseX - glowX) * 0.16;
          glowY += (mouseY - glowY) * 0.16;
          glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
          raf = requestAnimationFrame(trail);
        };
        raf = requestAnimationFrame(trail);
        cleanups.push(() => cancelAnimationFrame(raf));

        add(document, "mouseover", ((e: MouseEvent) => {
          const el = e.target as HTMLElement;
          const interactive = el.closest("a, button, input, label, [data-cursor]");
          const drag = el.closest("[data-cursor='drag']");
          glow.classList.toggle("is-hover", !!interactive && !drag);
          glow.classList.toggle("is-drag", !!drag);
        }) as EventListener);
      }
    }

    /* ---------- Magnetic buttons ---------- */
    if (isFinePointer && !prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>(".btn-magnetic").forEach((btn) => {
        const strength = 0.22;
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const leave = () => {
          btn.style.transform = "";
        };
        add(btn, "mousemove", move as EventListener);
        add(btn, "mouseleave", leave as EventListener);
      });
    }

    /* ---------- Subtle tilt on cards ---------- */
    if (isFinePointer && !prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -3.5;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 3.5;
          card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
        };
        const leave = () => {
          card.style.transform = "";
        };
        add(card, "mousemove", move as EventListener);
        add(card, "mouseleave", leave as EventListener);
      });
    }

    /* ---------- Hero parallax + floating cards ---------- */
    if (!prefersReducedMotion) {
      const heroImage = document.querySelector<HTMLElement>("[data-parallax]");
      if (heroImage) {
        const onScroll = () => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            heroImage.style.transform = `translateY(${y * -0.08}px)`;
          }
        };
        add(window, "scroll", onScroll as EventListener, { passive: true });
      }

      const floaters = [...document.querySelectorAll<HTMLElement>(".parallax-float")];
      const hero = document.querySelector<HTMLElement>(".hero");
      if (isFinePointer && floaters.length && hero) {
        let fx = 0,
          fy = 0,
          tx = 0,
          ty = 0,
          raf = 0;
        add(
          hero,
          "mousemove",
          ((e: MouseEvent) => {
            const r = hero.getBoundingClientRect();
            tx = (e.clientX - r.left) / r.width - 0.5;
            ty = (e.clientY - r.top) / r.height - 0.5;
          }) as EventListener,
          { passive: true }
        );
        const floatLoop = () => {
          fx += (tx - fx) * 0.06;
          fy += (ty - fy) * 0.06;
          floaters.forEach((el) => {
            const depth = parseFloat(el.dataset.depth || "15");
            el.style.translate = `${(-fx * depth).toFixed(2)}px ${(-fy * depth).toFixed(2)}px`;
          });
          raf = requestAnimationFrame(floatLoop);
        };
        raf = requestAnimationFrame(floatLoop);
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    /* ---------- Neighborhood image parallax ---------- */
    const hoodImages = [...document.querySelectorAll<HTMLElement>("[data-hood-parallax]")];
    if (!prefersReducedMotion && hoodImages.length) {
      const onHoodScroll = () => {
        hoodImages.forEach((img) => {
          const card = img.closest(".hood-card");
          if (!card) return;
          const r = card.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
          img.style.transform = `translateY(${(progress * -26).toFixed(2)}px)`;
        });
      };
      add(window, "scroll", onHoodScroll as EventListener, { passive: true });
      onHoodScroll();
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <div className="cursor-dot" aria-hidden="true"></div>
      <div className="cursor-glow" aria-hidden="true">
        <span className="cursor-label">Drag</span>
      </div>
    </>
  );
}
