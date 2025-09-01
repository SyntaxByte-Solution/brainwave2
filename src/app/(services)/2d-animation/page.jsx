import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/services/2dAnimation/Hero";
import LogoGrid from "@/components/services/2dAnimation/LogoGrid";
import Features from "@/components/services/2dAnimation/Feature";
import Integration from "@/components/services/2dAnimation/Integration";
import ContactPage from "@/components/common/ContactPage";
import AnimatedHero from "@/components/services/2dAnimation/AnimatedHero";
export const metadata = {
  title: "2D Animation || Brainwave ",
  description:
    "Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <Hero />
          <AnimatedHero />
          <LogoGrid />
          <Features />
          <Integration />
          <ContactPage />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
