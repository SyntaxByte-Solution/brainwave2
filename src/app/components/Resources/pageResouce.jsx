import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

export default function Resources() {
  return (
    <div className="section py-3 sm:py-6 lg:py-9">
      <div className="container max-w-100 bg-dark">
        <div
          className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-100 mx-auto py-10 text-center "
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
        >
          <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-secondary">
            Insights for your website{" "}
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              growth
            </span>
          </h2>
          <p className="fs-6 xl:fs-5 max-w-650px text-gray-100 dark:text-white text-opacity-70">
            Discover our resources for expert tips, tutorials, and insights on
            Webflow, design, and SEO to boost your web projects.
          </p>
        </div>
      </div>
      <div className="container max-w-xl">
        <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <div className="row g-4 xl:g-8">
            <div className="col">
              <div className="panel text-center">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                  {blogsPosts4.slice(0, 13).map((elm, i) => (
                    <div key={i}>
                      <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                          href={`/resource`}
                          style={{ borderRadius: 8 }}
                        >
                          {elm.category}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={853}
                            alt="How can marketing help your business?"
                          />
                          <Link
                            href={`/resource-details/${elm.id}`}
                            className="position-cover"
                            data-caption="How can marketing help your business?"
                          ></Link>
                        </figure>
                        <header className="panel vstack items-center   gap-1 lg:gap-2 px-2 py-4 border-gray-100 dark:border-gray-900 dark:bg-gray-900">
                          <h3 className="h5 xl:h4 m-0 text-center m-0">
                            <Link
                              className="text-none"
                              href={`/resource-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          {/* <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={elm.authorImg}
                                  alt="Kevin"
                                  width={150}
                                  height={150}
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Amir Khan`}
                                  className="text-none fw-bold text-dark dark:text-white"
                                >
                                  {elm.authorName}
                                </Link>
                              </div>
                            </li>
                            <li className="opacity-50">•</li>
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{elm.date}</span>
                              </div>
                            </li>
                          </ul> */}
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
