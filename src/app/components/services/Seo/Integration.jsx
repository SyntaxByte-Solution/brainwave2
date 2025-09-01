// import { integrations } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
const integrations = [
  {
    icon: Rocket,
    title: "Keyword Research",
    description:
      "Discover the most valuable keywords to attract targeted traffic and increase your search engine rankings.",
  },
  {
    icon: Rocket,
    title: "Backlink Building",
    description:
      "Strengthen your domain authority with high-quality backlinks from trusted websites in your industry.",
  },
  {
    icon: Rocket,
    title: "Content Optimization",
    description:
      "Create compelling, SEO-friendly content that engages visitors and drives conversions.",
  },
  {
    icon: Rocket,
    title: "Performance Analytics",
    description:
      "Analyze and monitor SEO performance to make data-driven decisions and continually improve results.",
  },
];
export default function Integration() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-black dark:text-white ">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Optimize with{" "}
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Keywords
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  We provide specialized SEO services to enhance every aspect of
                  your digital presence, from research and strategy to execution
                  and analytics.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-2 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => {
                  const IconComponent = integration.icon;
                  return (
                    <div key={index}>
                      <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark hover:bg-black dark:bg-primary dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-102 duration-150 transition-all">
                        <div className="vstack gap-3">
                          <div className="hstack justify-between items-center">
                            <div className="vstack">
                              {/* <h5 className="h5 m-0 text-dark">
                                {integration.icon}
                              </h5> */}
                              <h5 className="h5 m-0 text-dark dark:text-white dark:hover:text-black dark:opacity-70">
                                {integration.title}
                              </h5>
                            </div>
                          </div>
                          <p className="fs-6 opacity-70 dark:opacity-80">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
