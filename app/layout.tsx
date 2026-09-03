import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Onest, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./home-search.css";
import "./property.css";
import "./valuation.css";
import "./contact.css";
import "./testimonials/testimonials.css";
import "./agent.css";
import "./compass-concierge/concierge.css";
import "./blog/blog.css";
import "./detail.css";
import "./my-search-portal/portal.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalEffects from "./components/GlobalEffects";
import MobileCtaBar from "./components/MobileCtaBar";
import AuthModal from "./components/AuthModal";
import { LeadProvider } from "@/hooks/useLead";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Liberty Team — Strategic Real Estate in Los Angeles",
  description:
    "Good moves aren't accidental. Strategic real estate guidance for buyers, sellers, and investors across Los Angeles. Andrew Liberty Team, Compass.",
  verification: {
    google: "koQHdUxBYmda27d2oTyeUG2n4_wCoCQJEI4DRTvipWg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`js ${fraunces.variable} ${onest.variable} ${instrumentSerif.variable}`}>
      <body>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC52RXBT');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NC52RXBT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LeadProvider>
          <GlobalEffects />
          <a className="skip-link" href="#main">
            Skip to main content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileCtaBar />
          <AuthModal />
        </LeadProvider>
        <Script src="https://cdn.userway.org/widget.js" data-account="Wpzt1Vuecx" strategy="afterInteractive" />
      </body>
    </html>
  );
}
