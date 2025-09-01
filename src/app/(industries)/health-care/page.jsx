import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/industries/Healthcare/Hero";
import Services from "@/components/industries/Healthcare/Services";
import AnimatedHero from "@/components/industries/Healthcare/AnimatedHero";
import CaseStudyCard from "@/components/industries/Healthcare/CaseStudy";
import Solutions from "@/components/industries/Healthcare/Solution";
import ContactPage from "@/components/common/ContactPage";
export const metadata = {
  title: "Health care || Brainwave ",
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
          <Services />
          <CaseStudyCard />
          <Solutions />
          <ContactPage />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
