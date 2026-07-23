import Hero from "./components/home/Hero";
import WhatsTheMove from "./components/home/WhatsTheMove";
import MeetAndrew from "./components/home/MeetAndrew";
import RecentlySold from "./components/home/RecentlySold";
import Process from "./components/home/Process";
import Neighborhoods from "./components/home/Neighborhoods";
import Valuation from "./components/home/Valuation";
import Testimonials from "./components/home/Testimonials";
import Newsletter from "./components/home/Newsletter";
import FinalCta from "./components/home/FinalCta";

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
      <Newsletter />
      <FinalCta />
    </>
  );
}
