// import { integrations } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
const integrations = [
  {
    icon: Rocket,
    title: "40%",
    description: "Sales increase from visualizations.",
  },
  {
    icon: Rocket,
    title: "90%",
    description: "Client approval rating",
  },
  { icon: Rocket, title: "50+", description: "3D projects completed" },
  {
    icon: Rocket,
    title: "70%",
    description: "Audience retention rate",
  },
];
export default function Integration() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-full">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center max-w-lg">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Our 3D Animation Achievements
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Delivering top-tier 3D animations that enhance visual
                  storytelling, drive engagement, and achieve significant
                  milestones in film, gaming, and marketing industries.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 col-match g-2 lg:g-5 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((item, index) => {
                  //   const IconComponent = integration.icon;
                  {
                    /* <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
                        <div className="vstack gap-3">
                          <div className="hstack justify-between items-center">
                            <div className="vstack">
                          
                              <h2 className="h2 fs-7 dark:text-dark ">
                                {integration.title}
                              </h2>
                            </div>
                            <IconComponent
                              className="text-muted-foreground h-8 w-8 transition-colors group-hover:text-orange-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="fs-6 opacity-70 dark:opacity-80">
                            {integration.description}
                          </p>
                        </div>
                          </div> */
                  }
                  return (
                    <div key={index}>
                      <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark ">
                        <h4 className="h2 xl:display-5 m-0 dark:text-dark">
                          {item.title}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-dark text-opacity-70">
                          {item.description}
                        </p>
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
