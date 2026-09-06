"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero background video.
 *
 * - Desktop: the full 1920x1080 cut, faded in the moment it can play (no
 *   jarring poster→video swap).
 * - Mobile: a portrait crop of the same footage (540x960, no audio track,
 *   ~0.5MB against the desktop file's 5.6MB). Mobile used to get the poster
 *   only, because shipping the landscape file was too heavy — but a phone in
 *   portrait also throws away the left and right thirds to object-fit:cover,
 *   so it was paying to decode pixels it never showed. The crop is framed on
 *   the subject rather than the centre of the frame, which would have cut him
 *   in half.
 * - Data-saver / reduced-motion: still poster-only, no video downloaded.
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

    // Poster-only on data-saver, slow links, or reduced motion.
    if (reducedMotion || slow) {
      setReady(true); // reveal the element so its poster shows; no video is loaded
      return;
    }
    // Attach the cut that suits the viewport.
    setSrc(mq.matches ? "/video/hero.mp4" : "/video/hero-mobile.mp4");
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!src || !v) return;
    const reveal = () => {
      setReady(true);
      v.playbackRate = 0.6; // gentle slow-motion
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
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
    >
      {src && <source src={src} type="video/mp4" />}
    </video>
  );
}
