import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import CaseStudyCard from "@/components/innerpages/CaseStudy";

export const metadata = {
  title: "Case Study || Brainwave ",
  description:
    "Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <CaseStudyCard />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
