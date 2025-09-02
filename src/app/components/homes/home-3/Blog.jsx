import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="panel vstack items-center gap-2 xl:gap-3 text-center"
                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                  <span className="fs-8 fw-bold text-uppercase">Resources</span>
                </div>
                <h2 className="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center">
                  Your Library of Design,{""}{" "}
                  <span className="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Development
                  </span>{" "}
                  and Webflow Resources
                </h2>

                <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                  Explore our resources for expert insights, tutorials, and tips
                  on Webflow, design, and SEO to elevate your web projects.
                </p>
              </div>

              <div className="panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                  {blogsPosts4.map((post, index) => (
                    <div key={index}>
                      <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                          href={`/resource`}
                          style={{ borderRadius: 8 }}
                        >
                          {post.category}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={post.imgSrc}
                            width={1280}
                            height={854}
                            alt={post.imgAlt}
                          />
                          <Link
                            href={`/resource-details/${post.id}`}
                            className="position-cover"
                            data-caption={post.imgAlt}
                          ></Link>
                        </figure>
                        <header className="panel vstack items-center   gap-1 lg:gap-2 px-2 py-4 border-gray-100 dark:border-gray-900 dark:bg-gray-900">
                          <h3 className="h5 xl:h4 m-0 text-center m-0">
                            <Link
                              className="text-none"
                              href={`/resource-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h3>
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
