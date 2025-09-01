import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";

import Resources from "@/components/Resources/pageResouce";
import Contact1 from "@/components/innerpages/Contact1";
export const metadata = {
  title:
    "Resources || Brainwave",
  description:
    "Brainwave - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function Blog3ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <Resources />
          <Contact1 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
