"use client";
import {
  TrendingUp,
  Radar,
  Slack,
  ArrowRightLeft,
  Mails,
  FlaskConical,
  Laptop,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutionsData = [
  {
    icon: Laptop,
    title: "Top Fintech Website Designs",
    description:
      "Ranked among the best fintech websites, our designs are crafted with innovation and functionality at the forefront.",
    tags: ["Web design", "UX Research", "Figma Design"],
  },
  {
    icon: Mails,
    title: "Future-Proof Technology & Compliance",
    description:
      "Our solutions are built with the future in mind, ensuring your fintech platform stays adaptable and compliant with ever-evolving security regulations.",
    tags: ["Webflow Design", "Webflow Experts"],
  },
  {
    icon: TrendingUp,
    title: "Optimized for Speed and Performance",
    description:
      "We build lightning-fast fintech websites that enhance UX and reduce bounce rates, ensuring smooth performance even under heavy traffic.",
    tags: ["Webflow SEO", "Link Building", "Global SEO"],
  },
  {
    icon: FlaskConical,
    title: "Fintech Support & Ongoing Optimization",
    description:
      "We offer ongoing support and optimization services, continuously refining your fintech site based on performance data and evolving trends to keep you ahead of the competition.",
    tags: [
      "A/B & Multivariate Testing",
      "Funnels",
      "Heatmaps",
      "Landing Page Optimization",
      "CRO Audits",
      "UX Flows",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Innovative Solutions with Scalability",
    description:
      "Our development approach is built for growth, ensuring your fintech platform can scale effortlessly as your business expands and evolves, without compromising on performance.",
    tags: [
      "Migrate to Webflow",
      "Wix to Webflow",
      "WordPress to Webflow",
      "Figma to Webflow",
    ],
  },
  {
    icon: Slack,
    title: "Future-Ready Webflow Fintech Solutions",
    description:
      "We build webflow websites adaptable to 2025 innovations like AI-powered Fintech websites and latest webflow web design treands. We dont follow the trend, we create trends in tech industry.",
    tags: [
      "Webflow Maintenance",
      "Webflow Support",
      "24/7 Support",
      "Ongoing Support",
    ],
  },
];

export default function Solutions() {
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
                  Why Choose BrainWave for your
                  <span className="text-primary"> Fintech </span>Brand?
                </h2>
                <p className="fs-6 xl:fs-5 py-4 text-black dark:text-white text-opacity-70">
                  Partner with a Webflow agency that truly understands the
                  distinctive challenges facing technology businesses and
                  delivers solutions that accelerate growth, enhance user
                  experience, and effectively showcase your innovative
                  capabilities.
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
