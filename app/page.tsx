import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import WhatsTheMove from "./components/home/WhatsTheMove";
import MeetAndrew from "./components/home/MeetAndrew";
import RecentlySold from "./components/home/RecentlySold";
import Process from "./components/home/Process";
import Neighborhoods from "./components/home/Neighborhoods";
import Valuation from "./components/home/Valuation";
import Testimonials from "./components/home/Testimonials";
import OfficeMap from "./components/home/OfficeMap";
import Newsletter from "./components/home/Newsletter";
import FinalCta from "./components/home/FinalCta";
import Faq from "./components/home/Faq";

export const metadata: Metadata = {
  title: "Real Estate Agent in Los Angeles | Certified Negotiator",
  description:
    "Work directly with Andrew Liberty, a Certified Real Estate Negotiation Expert in Los Angeles. Get a free consultation, no directories, no waiting.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhatsTheMove />
      <MeetAndrew />
      <RecentlySold />
      <Process />
      <Neighborhoods />
      <Valuation />
      <Testimonials />
      <OfficeMap />
      <Newsletter />
      <FinalCta />
      <Faq />
    </>
  );
}
