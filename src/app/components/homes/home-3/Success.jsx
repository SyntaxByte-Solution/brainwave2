"use client";
import Image from "next/image";

export default function CaseStudyCard() {
  return (
    
    <div
      id="features"
      className="features section panel  scrollSpysection"
    >
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Case Studies
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Success
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Stories
                </span>{" "}
                .
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Discover how our innovative web design and custom Webflow
                solutions empower businesses to achieve remarkable results.
              </p>
            </div>
            <div className="row child-cols-12  col-match g-2">
              <div>
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
                  <div className="grid-coll-3 w-100 py-6">
                    <div className="panel p-3">
                      <Image
                        className="rounded-1-5 lg:rounded-3"
                        alt="dashboard-components"
                        src="/assets/images/template/career.jpg"
                        width="664"
                        height="496"
                      />
                    </div>
                    <div
                      className="panel vstack items-start justify-center gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div className="content vstack items-start mt-5 gap-2">
                        {/* <h4 className="h4 m-0">Dashboard Components</h4> */}
                        <p className="fs-6 lg:fs-5 dark:text-white">
                          Increase in Organic Traffic by 266.4% with new
                          revamped webflow website. DA increased from 24 to 37
                          in 6 months.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                          B2B SaaS
                        </span>
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Logistics
                        </span>
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Fulfillment
                        </span>
                      </div>
                      <div className="content vstack items-start border-top py-3 gap-2">
                        <h2 className="h2 m-0">$2.7M</h2>
                        <p className=" text-xs lg:fs-6 dark:text-white">
                          in funding.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                          UI/UX Design
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Webflow
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          SEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
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
                  <div className="grid-coll-3 w-100 py-6">
                    <div className="panel p-3">
                      <Image
                        className="rounded-1-5 lg:rounded-3"
                        alt="dashboard-components"
                        src="/assets/images/template/home-06-dashboard-components.png"
                        width="664"
                        height="496"
                      />
                    </div>
                    <div
                      className="panel vstack items-start justify-center gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div className="content vstack items-start mt-5 gap-2">
                        {/* <h4 className="h4 m-0">Dashboard Components</h4> */}
                        <p className="fs-6 lg:fs-5 dark:text-white">
                          Onboarded 200+ HNI’s, 15+ corporate clients with the
                          new website design and development. Migrated old
                          WordPress site to Webflow.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
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
                      <div className="content vstack items-start border-top py-3 gap-2">
                        <h2 className="h2 m-0">23%</h2>
                        <p className="text-xs lg:fs-6 dark:text-white">
                          increase in CVR.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                          Financial Services
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Wealth Management
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          M&A
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="panel vstack py-5 items-start overflow-hidden bg-gray-800 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked-2.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="grid-coll-3 w-100 py-3">
                    <div className="panel px-3 py-3 lg:px-4 xl:px-6">
                      <Image
                        className="rounded-1-5 border border-top-0"
                        alt="ui components"
                        src="/assets/images/template/home-06-components.png"
                        width="800"
                        height="620"
                      />
                    </div>
                    <div
                      className="panel vstack items-start justify-center gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                      data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                    >
                      <div className="content vstack items-start mt-5 gap-2">
                        {/* <h4 className="h4 m-0">Dashboard Components</h4> */}
                        <p className="fs-6 lg:fs-5 dark:text-white">
                          GoFIGR raised $2.75M and website performance score
                          improved from 52 to 88 after migrating to Webflow from
                          Bubble.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                          Ai
                        </span>
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Fintech
                        </span>
                        <span className="tag mt-2 bg-gray-100 text-gray-600 text-xs  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          B2B Saas
                        </span>
                      </div>
                      <div className="content vstack items-start border-top py-3 gap-2">
                        <h2 className="h2 m-0">$2.8M</h2>
                        <p className=" text-xs lg:fs-6 dark:text-white">
                          in funding.
                        </p>
                      </div>
                      <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                          Bubble to Webflow Migration
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          Webflow
                        </span>
                        <span className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 lg:col-4">
                          SEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-center gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 m-0">Drag-and-Drop Interface</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      Unleash your creativity with our builder's intuitive UI
                      Components, experience the difference.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home-06-builder-tools.png"
                      width="1280"
                      height="800"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
