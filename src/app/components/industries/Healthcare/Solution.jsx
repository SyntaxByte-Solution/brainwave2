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
    title: "Tailored Solutions for Every Healthcare Provider",
    description:
      "We don’t believe in one-size-fits-all. Whether you’re a hospital, dental clinic, or telehealth provider, we create customized healthcare websites designed to meet your unique business goals and patient needs.",
    tags: ["Web design", "UX Research", "Figma Design"],
  },
  {
    icon: Mails,
    title: "HIPAA-Compliant & Secure Websites",
    description:
      "We prioritize security, building HIPAA-compliant healthcare websites that ensure patient data is safe and secure. With strict adherence to regulations, your patients can trust their personal information is handled with care.",
    tags: ["Webflow Design", "Webflow Experts"],
  },
  {
    icon: TrendingUp,
    title: "Advanced Healthcare SEO & GEO",
    description:
      "Website speed is critical for both SEO and user experience. We build healthcare websites with optimized performance, reducing load times and helping your site rank higher on Google for healthcare-related searches.",
    tags: ["Webflow SEO", "Link Building", "Global SEO"],
  },
  {
    icon: FlaskConical,
    title: "Long-Term Partnership & Maintenance",
    description:
      "At Braiwave, we believe in building long-term relationships. Beyond launching your healthcare website, we offer continuous support, performance monitoring, and SEO maintenance to keep your site at the top of its game.",
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
    title: "Fast Turnaround & Ongoing Support",
    description:
      "Time is crucial in healthcare, which is why we deliver high-quality websites quickly and efficiently. After launch, we provide ongoing support and updates, ensuring your website continues to perform at its best.",
    tags: [
      "Migrate to Webflow",
      "Wix to Webflow",
      "WordPress to Webflow",
      "Figma to Webflow",
    ],
  },
  {
    icon: Slack,
    title: "Future-Ready Webflow Healthcare website",
    description:
      "We build webflow websites adaptable to 2025 innovations like AI-powered Healthcare websites and latest webflow web design treands. We dont follow the trend, we create trends in tech industry.",
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
                  className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  Why Choose Brainwave for your
                  <span className="text-primary"> Healthcare</span> Brand?
                </h2>
                <p className="fs-6 lg:fs-5 dark:text-gray-300 pt-5 max-w-550px mx-auto">
                  We provide transformative healthcare solutions, from intuitive
                  website design to integrated patient portals and SEO mastery.
                  Our goal is to turn your digital presence into a powerful tool
                  for patient empowerment and connection.
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
