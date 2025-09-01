import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/services/Gaming/Hero";
import AnimatedHero from "@/components/services/Gaming/AnimatedHero";
import Features from "@/components/services/Gaming/Features";
import Success from "@/components/services/Gaming/success";
import ContactPage from "@/components/common/ContactPage";

export const metadata = {
  title: "Game Development || Brainwave ",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};

export default function GameDevelopment() {
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
          <Success />
          <ContactPage />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
