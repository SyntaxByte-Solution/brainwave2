import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/services/DigitalMaketing/Hero";
import AnimatedHero from "@/components/services/DigitalMaketing/AnimatedHero";
import Features from "@/components/services/DigitalMaketing/Features";
import Integration from "@/components/services/DigitalMaketing/Integration";
import Success from "@/components/services/DigitalMaketing/Success";
import ContactPage from "@/components/common/ContactPage";
export const metadata = {
  title: "Digital Marketing || Brainwave ",
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
          <Features />
          <Integration />
          <Success />
          <ContactPage />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
