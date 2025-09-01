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
const CaseStudyData = [
  {
    image: "/assets/images/template/home-06-components.png",
    title: "Hopstack",
    description:
      "B2B SaaS platform for warehouse management to streamline and digitize warehouse operations.",
    categories: "",
    tags: ["B2b Saas", "Logistics", "Fulfilment"],
  },
  ,
  {
    image: "/assets/images/template/home-06-components.png",
    title: "Aureon Solutions",
    description:
      "Leader in financial services, delivering tailored solutions like investment advisory, wealth migration, real estate insights, legacy planning, and M&A.",
    categories: "",
    tags: ["Financial Service", "Wealth Management"],
  },
  {
    image: "/assets/images/template/home-06-dashboard-components.png",
    title: "Marketplace-Company",
    description:
      "Empower India's gig and minimum wage workers through staffing, financial inclusion, and technology, enhancing their quality of life and workforce retention across industries",
    categories: "",
    tags: ["Saas", "Logistics", "MarketPlace"],
  },
  {
    image: "/assets/images/template/career.jpg",
    title: "Terra",
    description:
      "Premium 3D mobile gaming platform, built exclusively for Gen Z gamers. Play 100+ mobile games & create your own games with our revolutionary 3D engine.",
    categories: "",
    tags: ["Gaming", "EA Sport"],
  },
];
const inputStyles =
  "block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card-background)] px-3.5 py-2.5 text-[var(--color-foreground)] shadow-sm outline-0 sm:text-sm sm:leading-6 dark:bg-black dark:text-white";

export default function CaseStudyCard() {
  return (
    <div
      id="features"
      className="features section panel  scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:pt-8 xl:pt-6">
        <div className="container max-w-100 bg-dark">
          <div
            className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-100 mx-auto py-10 text-center "
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-secondary">
              All case{" "}
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                Studies
              </span>
            </h2>
            <p className="fs-6 xl:fs-5 max-w-650px text-gray-100 dark:text-white text-opacity-70">
              Explore our portfolio of exceptional web design and custom Webflow
              websites that drive results for Healthtech and Longevity
              businesses worldwide.
            </p>
          </div>
        </div>
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-6 sm:child-cols-6  lg:child-cols-6 col-match g-4">
              {CaseStudyData.map((item, i) => {
                return (
                  <div
                    className="w-md-100"
                    key={i}
                  >
                    <div
                      className="panel py-2 vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark "
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
                      <div className="row py-3 pt-4">
                        <div className="panel p-4">
                          <Image
                            className="rounded-1-5 lg:rounded-3"
                            alt="dashboard-components"
                            src={item.image}
                            width="664"
                            height="496"
                          />
                        </div>
                        <div
                          className="panel  vstack items-start justify-center gap-2 p-3 lg:p-3 xl:p-3 ml-3 lg:pt-0 xl:pt-0"
                          data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                        >
                          <div className="content vstack items-start mt-5 gap-2">
                            <h4 className="h4 m-0">{item.title}</h4>
                            <p className="fs-6 lg:fs-5 dark:text-white">
                              {item.description}
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
                          {/* <div className="content vstack items-start border-top pt-3 gap-1">
                        <h2 className="h2 m-0">$2.7M</h2>
                        <p className=" text-xs lg:fs-6 dark:text-white">
                          in funding.
                        </p>
                      </div> */}
                          <div className="tags grid-stackchild-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3 w-100 py-3">
                            {item.tags.map((tags, index) => (
                              <span
                                key={index}
                                className="categories mt-2 bg-gray-100 text-gray-600 text-s  transition-colors duration-300 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                              >
                                {tags}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* contact section */}
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
    </div>
  );
}
