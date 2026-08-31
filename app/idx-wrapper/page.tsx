import type { Metadata } from "next";

/** Not a real page — IDX Broker's Dynamic Wrapper fetches this URL server-side
 *  on every full-MLS search page load and splices its own listing markup in
 *  between the two marker divs below, keeping our live Header/Footer (from
 *  app/layout.tsx) as the surrounding chrome. Deliberately excluded from
 *  NAV_LINKS/SIDE_LINKS and from search indexing — visiting it directly just
 *  shows an empty page between the header and footer, which is expected. */
export const metadata: Metadata = {
  title: "Andrew Liberty Team",
  robots: { index: false, follow: false },
};

export default function IdxWrapperPage() {
  return (
    <>
      <div id="idxStart" />
      <div id="idxStop" />
    </>
  );
}
