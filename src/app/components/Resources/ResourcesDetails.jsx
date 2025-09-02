"use client";
import Link from "next/link";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const blogArticles = [
  {
    title: "SEO Strategy BY Expert",
    categories: "strategy",
    description: [
      { type: "heading", level: 1, content: "Overview" },
      {
        type: "paragraph",
        content:
          " Webflow has become one of the most popular website builders for designers, developers, and businesses that want visually stunning, highly functional websites. ",
      },
      { type: "heading", level: 2, content: "Overview" },
      {
        type: "paragraph",
        content:
          "However, even the most beautiful design won’t bring results if your site cannot be found in search engines.",
      },
      { type: "heading", level: 3, content: "Overview" },
      {
        type: "paragraph",
        content:
          "That’s where SEO (Search Engine Optimization) comes in. <br/>The good news? Webflow is inherently SEO-friendly.",
      },
    ],
  },
  {
    title: "How to Build Rest Api",
    categories: "strategy",
    description: [
      { type: "heading", level: 1, content: "Overview" },
      {
        type: "paragraph",
        content:
          " Webflow has become one of the most popular website builders for designers, developers, and businesses that want visually stunning, highly functional websites. ",
      },
      { type: "heading", level: 2, content: "Overview" },
      {
        type: "paragraph",
        content:
          "However, even the most beautiful design won’t bring results if your site cannot be found in search engines.",
      },
      { type: "heading", level: 3, content: "Overview" },
      {
        type: "paragraph",
        content:
          "That’s where SEO (Search Engine Optimization) comes in. <br/>The good news? Webflow is inherently SEO-friendly.",
      },
    ],
  },
];

export default function ResourceDetails({ blogItem }) {
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/resource`}>Resources</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/resource-category/` + blogItem.category}>
                {blogItem.category}
              </Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={blogItem.imgAlt}
                    src={blogItem.imgSrc}
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                {/* <div dangerouslySetInnerHTML={{ __html: blogItem.desc }} /> */}
                {blogItem.desc.map((item, j) => {
                  if (item.type === "heading")
                    return (
                      <h3
                        key={j}
                        className="h4 xl:h3 mt-4 mb-2 xl:mb-3"
                      >
                        {item.content}
                      </h3>
                    );
                  if (item.type === "paragraph")
                    return (
                      <p
                        key={j}
                        className="mt-3"
                      >
                        {item.content}
                      </p>
                    );
                  if (item.type === "imgGallery")
                    return (
                      <figure
                        className="my-3 sm:my-4"
                        key={j}
                      >
                        <Item
                          original={item.content}
                          thumbnail={item.content}
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Gallery img"
                                src={item.content}
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                            </figure>
                          )}
                        </Item>
                      </figure>
                    );
                })}
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                {blogItem.tags.map((tag, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="gap-0"
                    >
                      {tag}
                      <span className="tags text-black dark:text-white"></span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Share:</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
