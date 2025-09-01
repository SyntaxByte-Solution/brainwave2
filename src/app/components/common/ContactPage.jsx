"use client";
import { reviews, testimonialsData } from "@/data/testimonials";
import { blogPosts } from "@/data/blogs";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import {
  Linkedin,
  Instagram,
  Twitter,
  Dribbble,
  Layers,
  Link as LinkIcon,
  Video,
  ChevronDown,
} from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Dribbble", icon: Dribbble, href: "#" },
  { name: "Behance", icon: Layers, href: "#" },
  { name: "Website", icon: LinkIcon, href: "#" },
];
const inputStyles =
  "block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card-background)] px-3.5 py-2.5 text-[var(--color-foreground)] shadow-sm outline-0 sm:text-sm sm:leading-6 dark:bg-black dark:text-white";

export default function ContactPage() {
  return (
    <>
      <div className="">
        <div
          id="clients_feedback"
          className="clients-feedback section panel  scrollSpysection"
        >
          <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary dark:bg-primary text-black rounded-2 lg:rounded-3 m-2">
            <div className="container xl:max-w-xl">
              <div
                className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
                data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
              >
                <div
                  className="panel vstack items-center gap-2 xl:gap-3 text-center"
                  data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                    <span className="fs-8 fw-bold text-uppercase">
                      Clients feedback
                    </span>
                  </div>
                  <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                    Our {""}
                    <span className="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      happy
                    </span>{" "}
                    clients!
                  </p>
                  <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                    Hear from clients who've experienced remarkable
                    transformations with Webyansh.
                  </p>
                </div>
                <div className="panel w-100 mask-x">
                  <Swiper
                    className="swiper"
                    slidesPerView={1}
                    spaceBetween={16}
                    centeredSlides={true}
                    loop={true}
                    speed={10000}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    allowTouchMove={true}
                    breakpoints={{
                      1024: {
                        // Adjust according to your responsive design
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                    }}
                  >
                    {testimonialsData.map((slide, index) => (
                      <SwiperSlide
                        className="swiper-slide"
                        key={index}
                      >
                        <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                          <div className="panel vstack items-start gap-2 lg:gap-4">
                            <div className="rating d-flex gap-0">
                              {Array.from({ length: slide.rating }).map(
                                (_, i) => (
                                  <Image
                                    className="icon icon-1"
                                    alt="star"
                                    data-uc-svg=""
                                    key={i}
                                    src="/assets/images/star.svg"
                                    width="24"
                                    height="25"
                                  />
                                )
                              )}
                            </div>
                            <p className="fs-5 lg:fs-4">“{slide.quote}”</p>
                          </div>
                          <div className="panel mt-2 lg:mt-4">
                            <div className="panel vstack items-start gap-narrow">
                              <h6 className="h5 m-0 text-black">
                                {slide.name}
                              </h6>
                              <span className="fs-7 lg:h6 opacity-70">
                                {slide.title}
                              </span>
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
                    <span className="fs-8 fw-bold text-uppercase">
                      Resources
                    </span>
                  </div>
                  <h2 className="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center">
                    Your Library of Design,{""}{" "}
                    <span className="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      Development
                    </span>{" "}
                    and Webflow Resources
                  </h2>

                  <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                    Explore our resources for expert insights, tutorials, and
                    tips on Webflow, design, and SEO to elevate your web
                    projects.
                  </p>
                </div>

                <div className="panel">
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                    {blogPosts.map((post, index) => (
                      <div key={index}>
                        <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                          <Link
                            className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                            href={`/blog`}
                            style={{ borderRadius: 8 }}
                          >
                            {post.category}
                          </Link>
                          <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              src={post.imageSrc}
                              width={1280}
                              height={854}
                              alt={post.imageAlt}
                            />
                            <Link
                              href={`/blog-details/${post.id}`}
                              className="position-cover"
                              data-caption={post.imageAlt}
                            ></Link>
                          </figure>
                          <header className="panel vstack items-center   gap-1 lg:gap-2 px-2 py-4 border-gray-100 dark:border-gray-900 dark:bg-gray-900">
                            <h3 className="h5 xl:h4 m-0 text-center m-0">
                              <Link
                                className="text-none"
                                href={`/blog-details/${post.id}`}
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                              <li>
                                <div className="hstack gap-narrow ft-tertiary">
                                  <Image
                                    src={post.authorImgSrc}
                                    width={150}
                                    height={150}
                                    alt={post.authorName}
                                    className="w-24px h-24px rounded-circle me-narrow"
                                  />
                                  <Link
                                    href={`/blog-author/Amir Khan`}
                                    className="text-none fw-bold text-dark dark:text-white"
                                  >
                                    {post.authorName}
                                  </Link>
                                </div>
                              </li>
                              <li className="opacity-50">•</li>
                              <li>
                                <div className="post-date hstack gap-narrow">
                                  <span>{post.date}</span>
                                </div>
                              </li>
                            </ul>
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
      <div className=" clients-feedback section panel  scrollSpysection">
        <div className="isolate bg-[var(--color-background)] px-6 py-16 sm:py-24 lg:px-8 dark:bg-black ">
          <div className="mx-auto max-w-7xl rounded-3xl bg-secondary p-6 sm:p-10 lg:p-16 dark:bg-gray-900 ">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl dark:gray-300">
                Let&apos;s create something out of this world together.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-foreground-muted)] dark:gray-100">
                Have a project in mind? Contact us for expert design and
                development solutions. Let&apos;s discuss how we can help grow
                your business.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:mt-24 lg:grid-cols-5 lg:gap-x-12">
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-[var(--color-background)]/50 p-6 sm:p-8">
                  <Image
                    src="/founder.jpeg"
                    alt="Unknown - Founder at Brainwave"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                  <div className="mt-6 flex items-center justify-center gap-x-4">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-sm leading-6 text-[var(--color-foreground-muted)]">
                  Hi, I’m Unknown - Founder at Brainwave.{" "}
                  <Link
                    href="#"
                    className="font-semibold text-[var(--color-foreground)]"
                  >
                    Schedule a call with me
                  </Link>{" "}
                  to discuss in detail about your project and how we can help
                  your business. You can also{" "}
                  <Link
                    href="#"
                    className="font-semibold text-[var(--color-foreground)]"
                  >
                    request for free custom quote
                  </Link>{" "}
                  if the scope of work is clear.
                </p>
              </div>
              <form
                action="#"
                method="POST"
                className="lg:col-span-3"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Tony Stark",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "tony@starkindustries.com",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]"
                      >
                        {label}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type={type}
                          name={id}
                          id={id}
                          autoComplete={id}
                          placeholder={placeholder}
                          className={inputStyles}
                        />
                      </div>
                    </div>
                  ))}
                  {[
                    {
                      id: "help-with",
                      label: "How can we help? *",
                      options: [
                        "Select",
                        "Web Design",
                        "Web Development",
                        "SEO",
                      ],
                    },
                    {
                      id: "budget",
                      label: "What’s your budget? *",
                      options: ["$2k - $5k", "$5k - $10k", "$10k+"],
                    },
                    {
                      id: "deadline",
                      label: "What’s your project deadline? *",
                      options: ["Less than 4 weeks", "1-2 months", "3+ months"],
                    },
                    {
                      id: "source",
                      label: "How did you hear about us? *",
                      options: ["LinkedIn", "Google", "Referral", "Other"],
                    },
                  ].map(({ id, label, options }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]"
                      >
                        {label}
                      </label>
                      <div className="relative mt-2.5">
                        <select
                          id={id}
                          name={id}
                          className={`${inputStyles} appearance-none pr-10`}
                        >
                          {options.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <ChevronDown
                            className="h-5 w-5 text-[var(--color-foreground-muted)]"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                        className={inputStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="hover:bg-opacity-90 flex w-full items-center justify-center gap-x-2 rounded-full bg-[var(--color-accent)] px-3.5 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] shadow-sm transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    Submit and Book a call
                    <Video
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
