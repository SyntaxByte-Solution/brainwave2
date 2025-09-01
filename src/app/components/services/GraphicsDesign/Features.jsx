import {
  Gamepad2,
  Slack,
  CodeXml,
  TrendingUp,
  Radar,
  Rocket,
  Users,
} from "lucide-react";
import React from "react";
import Link from "next/link";


const solutionsData = [
  {
    icon: Gamepad2,
    title: "Branding Design",
    description:
      "Craft unique logos and brand identities that resonate with your audience and build recognition.",
    // image: "/game-worlds.jpg",
  },
  {
    icon: Slack,
    title: "Color Theory & Layout",
    description:
      "Design visually appealing layouts with expert color schemes to enhance user experience.",
    image: "/graphics.jpg",
  },
  {
    icon: TrendingUp,
    title: "Vector Graphics",
    description:
      "Create scalable illustrations and icons for versatile design applications.",
    image: "/cross-platform.jpg",
  },
  {
    icon: Users,
    title: "Digital Imagery",
    description:
      "Produce high-quality digital assets for websites, social media, and marketing materials.",
    image: "/multiplayer.jpg",
  },
  {
    icon: Radar,
    title: "Print Design",
    description:
      "Design professional print materials like brochures, posters, and business cards.",
    image: "/ai-mechanics.jpg",
  },
  {
    icon: Rocket,
    title: "Mobile UI/UX Design",
    description:
      "Craft intuitive and visually appealing interfaces for mobile applications.",
    image: "/post-launch.jpg",
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
              <div className="text-white text-muted-foreground inline-block  text-sm font-semibold text-center">
                ★ Solution
              </div>
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <span className="text-primary"> Diverse</span> Graphics{" "}
                <span className="text-primary"> Design</span> Solutions.
              </h2>
              <h5 className=" h5 lg:h5 xl:h4 m-0 text-center max-w-550px mx-auto">
                Elevate your brand with a variety of design services that blend
                creativity, functionality, and market appeal to stand out
                visually.
              </h5>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {solutionsData.map((feature, index) => {
                    const IconComponent = feature.icon;

                    return (
                      <div key={index}>
                        <div className="feature-item panel p-4 border rounded-2 hover:bg-white dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all">
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
    </div>
  );
}
