"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero background video.
 *
 * - Desktop: the video source is attached, then faded in the moment it can play
 *   (no jarring poster→video swap).
 * - Mobile / data-saver / reduced-motion: the video is NEVER downloaded — only
 *   the lightweight poster image shows. This keeps mobile fast and avoids the
 *   large media download that tanks the mobile performance score / LCP.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || /2g/.test(conn?.effectiveType ?? "");

    // Poster-only on small screens, data-saver, slow links, or reduced motion.
    if (!mq.matches || reducedMotion || slow) {
      setReady(true); // reveal the element so its poster shows; no video is loaded
      return;
    }
    // Desktop: attach and play the video.
    setSrc("/video/hero.mp4");
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!src || !v) return;
    const reveal = () => {
      setReady(true);
      v.play().catch(() => {});
    };
    if (v.readyState >= 3) {
      reveal();
      return;
    }
    v.addEventListener("canplay", reveal, { once: true });
    return () => v.removeEventListener("canplay", reveal);
  }, [src]);

  return (
    <video
      ref={ref}
      className={`hero-bg-video${ready ? " is-ready" : ""}`}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      poster="/images/hero-la-aerial.jpg"
      aria-hidden="true"
    >
      {src && <source src={src} type="video/mp4" />}
    </video>
  );
}
