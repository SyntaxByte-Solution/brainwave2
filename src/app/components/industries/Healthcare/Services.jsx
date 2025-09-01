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
//     icon: MessageSquare,
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
    icon: Gamepad2,
    title:
      "Custom website design for hospitals, clinics, and medical practices",
    description:
      "We craft fully customized web pages for hospitals, integrating patient portals, appointment scheduling, and other essential features, ensuring an optimal user experience.",
    // image: "/game-worlds.jpg",
  },
  {
    icon: Slack,
    title: "Medical Practice Webflow Development",
    description:
      "For healthcare providers, clinics, and medical practices, we deliver functional Webflow websites that meet all regulatory requirements and offer superior user experiences.",
    image: "/graphics.jpg",
  },
  {
    icon: TrendingUp,
    title: "Healthcare Provider SEO & Performance Optimization",
    description:
      "We optimize healthcare websites for search engines, ensuring high rankings driving more patient leads. We focus on healthcare GEO aswell.",
    image: "/cross-platform.jpg",
  },
  {
    icon: Users,
    title: "Healthcare Growth Marketing",
    description:
      "Data-driven strategies to amplify your Healthcare Webflow website’s performance, conversions, advertising and ROI",
    image: "/multiplayer.jpg",
  },
  {
    icon: Radar,
    title: "Migrate to Webflow",
    description:
      "Smooth transitions guaranteed. Migrations from WordPress to Webflow, Squarespace to Webflow, and Wix to Webflow are our specialties.",
    image: "/ai-mechanics.jpg",
  },
  {
    icon: Rocket,
    title: "Ongoing Webflow Maintenance",
    description:
      "24/7 Instant webflow maintenance and support for healthcare and longevity businesses. You take of your growth and we take care of your site.",
    image: "/post-launch.jpg",
  },
];
export default function Services() {
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
                ★ Services
              </div>
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <span className="text-primary">Healthcare</span> website
                Tailored to Your Needs
              </h2>
              <h5 className=" h5 lg:h5 xl:h4 m-0 text-center text-gray-200 max-w-550px mx-auto">
                We provide transformative healthcare solutions, from intuitive
                website design to integrated patient portals and SEO mastery.
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
