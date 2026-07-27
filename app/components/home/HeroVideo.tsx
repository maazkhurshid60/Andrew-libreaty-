"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero background video that reveals itself only once it can actually play —
 * so the viewer never sees a poster-image "flash" that then swaps to video.
 * With JS on: the video starts hidden and fades in the moment it's buffered
 * enough to play. With JS off: the CSS leaves it visible so it still shows.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const reveal = () => {
      setReady(true);
      // Muted autoplay is allowed; kick it in case the attribute didn't fire.
      v.play().catch(() => {});
    };

    // Already buffered enough (fast connection / cached)?
    if (v.readyState >= 3) {
      reveal();
      return;
    }
    v.addEventListener("canplay", reveal, { once: true });
    return () => v.removeEventListener("canplay", reveal);
  }, []);

  return (
    <video
      ref={ref}
      className={`hero-bg-video${ready ? " is-ready" : ""}`}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      poster="/images/hero-la-aerial.jpg"
      aria-hidden="true"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
