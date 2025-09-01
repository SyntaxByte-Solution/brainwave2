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
    title: "Specialized Webflow Expertise",
    description:
      "Brainwave is a Webflow-focused agency, meaning we have deep expertise in the platform and can tackle any maintenance needs with precision.",
    tags: ["Web design", "UX Research", "Figma Design"],
  },
  {
    icon: Mails,
    title: "24/7 Support",
    description:
      "No matter when an issue arises, our dedicated support team is ready to assist, ensuring minimal disruption to your business",
    tags: ["Webflow Design", "Webflow Experts"],
  },
  {
    icon: TrendingUp,
    title: "Fortified Website Security",
    description:
      "Regular security monitoring keeps your site safe from vulnerabilities and cyber threats, protecting your business and customer data.",
    tags: ["Webflow SEO", "Link Building", "Global SEO"],
  },
  {
    icon: FlaskConical,
    title: "Minimized Downtime",
    description:
      "Our proactive approach ensures your website stays online and operational, reducing the risk of unexpected outages.",
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
    title: "Enhanced User Engagement",
    description:
      "Regular updates and optimizations, we ensure your website provides a smooth experience for visitors, increasing time on site and conversions.",
    tags: [
      "Migrate to Webflow",
      "Wix to Webflow",
      "WordPress to Webflow",
      "Figma to Webflow",
    ],
  },
  {
    icon: Slack,
    title: "Extention of your team",
    description:
      "We are an extension of your team to help you with regular website change sand upates tokeep your site up-to-date.",
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
                  ★ Why Us
                </div>
                <h2
                  className="title h3 lg:h2 xl:h1 m-0 text-center max-w-650px mx-auto"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  Why us for
                  <span className="text-primary"> Webflow</span>dedicated
                  support
                </h2>
                <p className="fs-6 lg:fs-5 dark:text-gray-300 pt-5 max-w-650px mx-auto">
                  Drive targeted visitors to your website with our expert
                  Webflow SEO strategies. Our data-driven approach increases
                  your visibility on search engines, helping you attract more
                  qualified leads and improve conversion rates.
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
