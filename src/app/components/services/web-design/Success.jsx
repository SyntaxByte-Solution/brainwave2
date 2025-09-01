"use client";
import { facts } from "@/data/facts";
import { panelData } from "@/data/features";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const stats = [
  { value: "400%", label: "Average traffic growth for our clients" },
  { value: "90%", label: "Client satisfaction and retention rate" },
  { value: "100+", label: "Successful website launches" },
  //   { value: "95%", label: "Client satisfaction rate" },
];
export default function Success() {
  return (
    <div
      hidden=""
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-white dark:bg-gray-800">
        <div className="container max-w-xlg">
          <div className="section-inner panel">
            <div className="panel vstack items-center  text-center gap-4 lg:gap-6 xl:gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Our Proven Success in Web Development
              </motion.h2>
              <p className="max-w-md">
                Transforming businesses with exceptional web solutions that
                boost online presence, engagement, and revenue through
                measurable outcomes.
              </p>
              <div
                className="panel vstack g-2 lg:gap-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {/* <div
                  className="panel"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between text-center">
                    {panelData.map((panel) => (
                      <div key={panel.id}>
                        <div className="panel vstack items-center gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-gray-800">
                          <Image
                            className="w-64px lg:w-80px d-block dark:d-none"
                            src={panel.lightIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <Image
                            className="w-64px lg:w-80px d-none dark:d-block"
                            src={panel.darkIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <h5 className="h5 lg:h4">{panel.title}</h5>
                          <p className="fs-6 opacity-70 dark:opacity-80">
                            {panel.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="panel p-5 lg:py-9 rounded-2 bg-secondary dark:bg-black"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-6 lg:child-cols-4 col-match g-4 text-center ">
                    {stats.map((item, index) => (
                      <div key={index}>
                        <div className="panel vstack gap-1">
                          <h4 className="h2 xl:display-5 m-0">{item.value}</h4>
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
