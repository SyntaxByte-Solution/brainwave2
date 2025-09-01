import Header2 from "@/components/headers/Header2";
import Pricing from "@/components/common/Pricing";
import Brands2 from "@/components/homes/home-3/Brands";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-3/Hero";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import React from "react";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Blog from "@/components/homes/home-3/Blog";
import Cta from "@/components/homes/home-3/Cta";
import Footer2 from "@/components/footers/Footer2";
import Brands3 from "@/components/common/Brands2";
import Solution from "@/components/homes/home-3/Solution";
import Success from "@/components/homes/home-3/Success";
import Contact from "@/components/homes/home-3/Contact";
import CourseSnippet from "@/components/homes/home-3/CourseSnippet";

export const metadata = {
  title:
    "Home || Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
  description:
    "Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
};
export default function HomePage3() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <Hero />
          <Brands2 />
          <Solution />
          <CourseSnippet />
          <Success />
          {/* <KeyFeatures />  */}
          {/* <Pricing /> */}
          <Testimonials />

          <Blog />
          <Cta />
          <Contact />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
