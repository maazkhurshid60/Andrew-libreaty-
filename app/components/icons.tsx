import type { SVGProps } from "react";

/**
 * Right arrow used on nearly every CTA button.
 *
 * width/height are set here rather than left to CSS. The only rules sizing
 * `.btn-arrow` are descendant selectors — `.btn .btn-arrow`, `.hood-cta
 * .btn-arrow`, `.page-btn .btn-arrow` — so the icon was correct inside a
 * button and nowhere else. An <svg> with a viewBox and no dimensions falls
 * back to the replaced-element default of 300x150, which is how the Studio
 * City page ended up with 18 arrows the size of the headings beside them,
 * squeezing every flex row they sat in.
 *
 * They come before the prop spread, so a caller passing its own width/height
 * still wins, as does any CSS rule.
 */
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="btn-arrow"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/** Left arrow used on carousel "previous" controls. */
export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
