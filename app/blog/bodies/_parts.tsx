import type { ReactNode } from "react";
import { ArrowRight } from "../../components/icons";

/**
 * Pieces shared by more than one article body.
 *
 * Underscore-prefixed so it reads as "not an article" next to the slug-named
 * files around it; nothing scans this directory, index.ts imports each body by
 * name, so the prefix is a signal to people rather than to the build.
 *
 * Figure and Cta lived inside tips-for-showing-your-house.tsx while it was the
 * only post. They moved here when the second article needed them, rather than
 * being copied — the alternative is two definitions drifting apart the first
 * time one of them is adjusted.
 */

/**
 * An in-article image. `width`/`height` are the asset's real pixel dimensions
 * so the browser reserves the right box before the file arrives — without them
 * the copy below jumps down as each image loads, which is the layout shift
 * Core Web Vitals measures.
 */
export function Figure({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="ar-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    </figure>
  );
}

/**
 * In-article CTA panel.
 *
 * `title` is optional: without it this renders exactly the markup it always
 * did, so the existing article is untouched. With it, the heading line is a
 * `<p class="ar-cta-title">` rather than a real heading — these are
 * promotional interruptions, not document structure, and putting them in the
 * outline would drop three extra headings between the article's actual h2s.
 */
export function Cta({
  children,
  label,
  title,
  href = "/contact",
}: {
  children: ReactNode;
  label: string;
  title?: string;
  href?: string;
}) {
  return (
    <div className="ar-cta">
      {title ? (
        <div className="ar-cta-copy">
          <p className="ar-cta-title">{title}</p>
          <p>{children}</p>
        </div>
      ) : (
        <p>{children}</p>
      )}
      <a href={href} className="btn btn-gold btn-magnetic">
        <span>{label}</span>
        <ArrowRight />
      </a>
    </div>
  );
}

/**
 * A pros-and-cons panel.
 *
 * The source copy supplies this as a two-column table. It is rendered as two
 * lists instead: the rows are not actually paired — reading across row 3 gives
 * "Strong curb appeal" against "More outdoor maintenance", which are unrelated
 * — and a real table of sentence-length cells has nowhere to go on a phone but
 * a horizontal scrollbar. Two lists stack.
 */
export function ProsCons({ pros, cons }: { pros: [string, string][]; cons: [string, string][] }) {
  return (
    <div className="ar-proscon">
      <div className="ar-proscon-pros">
        <p className="ar-proscon-head">Pros</p>
        <ul>
          {pros.map(([lead, rest]) => (
            <li key={lead}>
              <strong>{lead}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>
      <div className="ar-proscon-cons">
        <p className="ar-proscon-head">Cons</p>
        <ul>
          {cons.map(([lead, rest]) => (
            <li key={lead}>
              <strong>{lead}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
