import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

export default function Blogs3({ category }) {
  return (
    <div className="section py-3 sm:py-6 lg:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header className="page-header panel vstack text-center">
            <h1 className="h3 lg:h1">Category: {category}</h1>
            <span className="m-0 opacity-60">
              <br className="d-block lg:d-none" />
            </span>
          </header>
          <div className="row g-4 xl:g-8">
            <div className="col">
              <div className="panel text-center">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                  {blogsPosts4.slice(0, 9).map((elm, i) => (
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
                        <header className="panel vstack items-center gap-1 lg:gap-2 px-2 py-5">
                          <h3 className="h6 sm:h5 xl:h4 m-0 m-0">
                            <Link
                              className="text-none"
                              href={`/resource-details/${elm.id}`}
                            >
                              {elm.title}
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
