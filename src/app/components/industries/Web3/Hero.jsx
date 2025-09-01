"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import Brands from "@/components/common/Brands";
import { motion, AnimatePresence } from "framer-motion";
const imagesColumn1 = ["/img-03.jpg", "/img-16.jpg", "/img-07.jpg"];

const imagesColumn2 = ["/img-03.jpg", "/img-16.jpg", "/img-07.jpg"];

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden "
    >
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{
            top: "30%",
            left: "18%",
          }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-12"
          style={{ top: "20%", left: "15%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-trophy"
            src="/assets/images/template/icon-trophy.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-trophy-dark"
            src="/assets/images/template/icon-trophy-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y rotate-45 ms-n3"
          style={{ top: "35%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-location"
            src="/assets/images/template/icon-location.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-location-dark"
            src="/assets/images/template/icon-location-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y"
          style={{ top: "80%", left: "8%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-globe"
            src="/assets/images/template/icon-globe.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-globe-dark"
            src="/assets/images/template/icon-globe-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y rotate-45"
          style={{ top: "50%", right: "18%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-crown"
            src="/assets/images/template/icon-crown.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-crown-dark"
            src="/assets/images/template/icon-crown-dark.svg"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
        <div className="container max-w-xlg">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Scalable Web3 Webflow Design and Development
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                At BrainWave, we build Web3-ready websites and Webflow platforms
                optimized for blockchain startups, NFT marketplaces, and DeFi
                protocols. Our 2025-forward approach combines wallet-integrated
                UX design with enterprise-grade blockchain SEO to help you
                acquire users and investors.
              </p>
            </div>
            <div className=" vstack sm:hstack justify-center gap-3 flex-sm-column items-center lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto ">
              <Link
                href={`/page-contact`}
                className="btn btn-md lg:btn-lg btn-primary text-white"
              >
                Book an intro Call
              </Link>
             <Link
                  href={`/case-study`}
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                  data-uc-toggle=""
                >
                 Explore All Projects
                </Link>
            </div>
            <div
              id="companies_sponsores"
              className="companies-sponsores section panel overflow-hidden rounded-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50 px-5 py-8"
            >
              <div
                className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
              >
                <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                  Trusted by Leading Businesses
                </p>
                <div className="block-panel panel">
                  <div className="element-brands text-black dark:text-white mask-x">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slash */}
    </div>
  );
}
