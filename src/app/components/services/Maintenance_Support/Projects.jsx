"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

const solutionsData = [
  {
    title: "Custom UI/UX Design",
    description:
      "Our expert web designers from India craft unique, user-friendly interfaces that ensure seamless navigation and engaging UX.",
    // image: "/game-worlds.jpg",
  },
  {
    title: "Responsive Web Design",
    description:
      "We prioritize mobile-first, fully responsive figma and Webflow designs, ensuring your website performs flawlessly on every device.",
    image: "/graphics.jpg",
  },
  {
    title: "High-Converting Landing Page Design",
    description:
      "We design high-converting Marketing Landing Pages to convert visitors to paying customers. Increase your landing page CVR now!",
    image: "/cross-platform.jpg",
  },
  {
    title: "UX Research & Strategy",
    description:
      "We base our designs on deep user research and data-driven insights, creating designs that boost conversions and customer satisfaction.",
    image: "/multiplayer.jpg",
  },
  {
    title: "Interactive Prototyping",
    description:
      "Bring your vision to life with interactive prototypes that allow you to visualize and test your digital product before final development.",
    image: "/ai-mechanics.jpg",
  },
  {
    title: "Design System & Branding",
    description:
      "Create a cohesive brand experience with our design systems, ensuring consistency across all touchpoints.",
    image: "/post-launch.jpg",
  },
];

export default function Projects() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary">
        <div className="container  max-w-full">
          <div className="section-inner panel">
            <div className="d-flex vcard  vstack gap-4 sm:gap-6 xl:gap-8">
              <div className="panel project-card text-left py-15  ">
                <h2
                  className="title h3 lg:h2 xl:h1 m-0 max-w-550px mx-auto text-dark"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  Recent Webflow
                  <span className="text-primary dark:text-secondary">
                    {" "}
                    Migration
                  </span>{" "}
                  Case Studies
                </h2>
                <p className="   py-15 max-w-550px text-dark dark:text-gray-100">
                  Explore our portfolio of exceptional web design, seamless
                  webflow transfer and tailored SEO strategies that drive
                  results for businesses worldwide.
                </p>
              </div>
              <div className="panel d-flex w-100 gap-2 overflow-hidden py-5">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={"auto"} // show multiple slides
                  loop={true} // infinite loop
                  speed={1000} // lower = slower scroll
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  className="mySwiper   "
                >
                  {solutionsData.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        marginLeft: "10px",
                        display: "inline-block",
                        maxWidth: "450px",
                      }}
                    >
                      <div
                        className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                        data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                      >
                        <div
                          className="position-cover opacity-70 bg-cover"
                          style={{ backgroundPosition: "50% 85%" }}
                          data-src="/assets/images/template/feature-06-bg-masked.png"
                          data-uc-img=""
                        />
                        <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                        <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light " />
                        <div className="project-card  py-3">
                          <div className="panel p-3">
                            <Image
                              className="rounded-1-5 lg:rounded-3"
                              alt="dashboard-components"
                              src="/success3.jpg"
                              width="400"
                              height="296"
                            />
                          </div>
                          <div
                            className="panel vstack items-start justify-center gap-2 p-3 lg:p-3 xl:p-3 pt-0 lg:pt-0 xl:pt-0"
                            data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                          >
                            <div className="content vstack items-start mt-5 gap-2">
                              <h4 className="h4 m-0">{item.title}</h4>
                              <p className="fs-6 lg:fs-5 dark:text-white">
                                {item.description}
                              </p>
                            </div>
                            <div className="tags  child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                              <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                                Financial Services
                              </span>
                              <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                                Wealth Management
                              </span>
                              <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                                M&A
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
