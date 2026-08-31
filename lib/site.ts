/** Absolute origin, used only where a request may be re-served from a
 *  different domain — currently just IDX Broker's Dynamic Wrapper, which
 *  fetches app/idx-wrapper/page.tsx and re-hosts its markup under
 *  andrew-liberty.idxbroker.com. Root-relative asset paths (/logo.png) break
 *  there since they'd resolve against IDX Broker's domain instead of ours. */
export const SITE_URL = "https://www.andrewliberty.com";
