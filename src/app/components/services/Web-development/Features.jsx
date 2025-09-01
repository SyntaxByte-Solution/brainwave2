"use client";
import {
  TrendingUp,
  Radar,
  Radio,
  Podcast,
  Mails,
  Mail,
  Laptop,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// const solutionsData = [
//   {
//     icon: LayoutTemplate,
//     title: "UI/UX Design",
//     description:
//       "Our expert Webflow design team create stunning, user-centered websites that drive conversions through strategic UI/UX design, ensuring your brand stands out.",
//     tags: ["Web design", "UX Research", "Figma Design"],
//   },
//   {
//     icon: CodeXml,
//     title: "Webflow Development",
//     description:
//       "Transform your vision into reality with our expert Webflow development services. Our certified developers create responsive, scalable websites that perform.",
//     tags: ["Webflow Design", "Webflow Experts"],
//   },
//   {
//     icon: TrendingUp,
//     title: "Webflow SEO",
//     description:
//       "Boost your online visibility with our comprehensive Webflow SEO services, ensuring your website ranks and performs. Rank higher and grow faster with our expert SEO services.",
//     tags: ["Webflow SEO", "Link Building", "Global SEO"],
//   },
//   {
//     icon: FlaskConical,
//     title: "Growth Marketing",
//     description:
//       "Turn your Webflow website into a lead generating engine. We combine UX with data to boost conversions, maximize ROI, & grow your brand.",
//     tags: [
//       "A/B & Multivariate Testing",
//       "Funnels",
//       "Heatmaps",
//       "Landing Page Optimization",
//       "CRO Audits",
//       "UX Flows",
//     ],
//   },
//   {
//     icon: ArrowRightLeft,
//     title: "Webflow Migration",
//     description:
//       "Smooth transitions guaranteed. Migrations from WordPress to Webflow, Squarespace to Webflow, and Wix to Webflow are our specialties.",
//     tags: [
//       "Migrate to Webflow",
//       "Wix to Webflow",
//       "WordPress to Webflow",
//       "Figma to Webflow",
//     ],
//   },
//   {
//     icon: Slack,
//     title: "Webflow Maintenance and Support",
//     description:
//       "We provide post launch updates, performance checks, and troubleshooting to keep your Webflow site secure and optimized.",
//     tags: [
//       "Webflow Maintenance",
//       "Webflow Support",
//       "24/7 Support",
//       "Ongoing Support",
//     ],
//   },
// ];

const solutionsData = [
  {
    icon: Podcast,
    title: "Custom Web Design",
    description:
      "Create unique, brand-aligned designs with intuitive layouts and modern aesthetics to captivate your audience.",
    image: "/seo-marketing.jpg",
  },
  {
    icon: Radio,
    title: "Full-Stack Development",
    description:
      "Deliver robust, high-performance websites with seamless front-end and back-end integration using the latest technologies.",
    image: "/social-media.jpg",
  },
  {
    icon: Radar,
    title: "SEO Optimization",
    description:
      "Enhance your site’s visibility with strategic SEO techniques, driving organic traffic and improving search engine rankings.",
    image: "/paid-ads.jpg",
  },
  {
    icon: Laptop,
    title: "Ongoing Maintenance",
    description:
      " Ensure your website remains secure, updated, and optimized with our proactive maintenance and support services.",
    image: "/email-marketing.jpg",
  },
  {
    icon: Mails,
    title: "E-Commerce Solutions",
    description:
      "Build custom online stores with seamless checkout and optimized user experience that convert visitors into customers.",
    image: "/influencer-marketing.jpg",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "Improve load speeds and enhance overall site performance for better user engagement and retention.",
    image: "/analytics-reporting.jpg",
  },
];
export default function Features() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 xl:py-9 dark:bg-gray-800">
        <div className="container  max-w-full">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-white text-muted-foreground inline-block  text-sm font-semibold text-center">
                  ★ Solution
                </div>
                <h2
                  className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  Comprehensive Web{" "}
                  <span className="text-primary"> Development </span> & Design
                </h2>
                <p className="text-gray-100 text-center mx-auto mt-4 max-w-2xl text-lg md:text-xl">
                  Unlock your digital potential with responsive, scalable, and
                  visually stunning websites that boost engagement and business
                  growth.
                </p>
              </motion.div>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {solutionsData.map((feature, index) => {
                    const IconComponent = feature.icon;

                    return (
                      <div key={index}>
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15, duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            rotate: 1.5,
                            boxShadow: "0 15px 30px rgba(51, 27, 8, 0.6)",
                            borderColor: "#dc26ff",
                          }}
                          className="feature-item panel p-4 border rounded-2 hover:bg-white dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all"
                        >
                          <div className="vstack panel min-h-250px">
                            {/* <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" /> */}
                            <div className="vstack justify-between gap-2 h-100">
                              <IconComponent
                                className="text-muted-foreground h-8 w-8 transition-colors group-hover:text-orange-500"
                                aria-hidden="true"
                              />
                              {/* <i className={`icon icon-4 ${feature.icon}`} /> */}
                              <div className="panel">
                                <div className="vstack gap-1">
                                  <h3 className="title h5 m-0 text-inherit">
                                    {feature.title}
                                  </h3>
                                  <p className="desc fs-6 opacity-70">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Link
                              href={`/page-features`}
                              className="position-cover"
                            ></Link>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
