// import { integrations } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
const integrations = [
  {
    icon: Rocket,
    description: "Boost organic traffic with targeted SEO strategies.",
  },
  {
    icon: Rocket,
    description: "Engage your audience with powerful social media campaigns.",
  },
  { icon: Rocket, description: "Maximize ROI with expertly managed paid ads." },
  {
    icon: Rocket,
    description: "Drive conversions with personalized email marketing.",
  },
];
export default function Integration() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Master Paid Ads Marketing
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  We specialize in comprehensive digital marketing channels
                  tailored to elevate your brand and drive measurable results
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => {
                  const IconComponent = integration.icon;
                  return (
                    <div key={index}>
                      <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
                        <div className="vstack gap-3">
                          <div className="hstack justify-between items-center">
                            {/* <div className="vstack">
                              <h5 className="h5 m-0 text-dark">
                                {integration.icon}
                              </h5>
                              <span className="fs-7 opacity-70 dark:opacity-80">
                                {integration.category}
                              </span>
                            </div> */}
                            <IconComponent
                              className="text-muted-foreground h-8 w-8 transition-colors group-hover:text-orange-500"
                              aria-hidden="true"
                            />
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
