"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay, Pagination } from "swiper/modules";

const images = [
  { src: "/p5.avif", alt: "Portfolio 1" },
  { src: "/p5.avif", alt: "Portfolio 2" },
  { src: "/p5.avif", alt: "Portfolio 3" },
  { src: "/p4.avif", alt: "Portfolio 4" },
  { src: "/p5.avif", alt: "Portfolio 5" },
  { src: "/p6.avif", alt: "Portfolio 6" },
];
const grid_marquee = {};
export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden"
    >
      <div className="position-absolute top-0 start-0 end-0 h-800px lg:h-screen bg-secondary dark:bg-gray-800 z-0" />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block bg-secondary dark:bg-gray-800"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "45%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
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
        <div
          className="position-absolute translate-middle-y -rotate-45"
          style={{ top: "80%", right: "8%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-diamond"
            src="/assets/images/template/icon-diamond.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-diamond-dark"
            src="/assets/images/template/icon-diamond-dark.svg"
            width="100"
            height="100"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-12 me-n3"
          style={{ top: "35%" }}
        >
          <Image
            className="w-56px xl:w-64px d-block dark:d-none"
            alt="icon-chat"
            src="/assets/images/template/icon-chat.svg"
            width="100"
            height="100"
          />
          <Image
            className="w-56px xl:w-64px d-none dark:d-block"
            alt="icon-chat-dark"
            src="/assets/images/template/icon-chat-dark.svg"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className="section-outer panel pb-10 pt-9 lg:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center "
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-4 m-0">
                Precision Meta Ads Campaigns
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Maximize your ROI with targeted Meta Ads (Facebook & Instagram)
                designed to engage audiences and drive conversions effectively.{" "}
                <br className="d-none sm:d-block" />
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column pb-5">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Book A Strategy Call
                </Link>
                <Link
                  href={`/case-study`}
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                  data-uc-toggle=""
                >
                 View Our Work
                </Link>
              </div>
              <p className=""></p>
            </div>

            <div
              className="hero-scene  panel max-w-xlg mx-auto py-8"
              data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={"auto"} // show multiple slides
                loop={true} // infinite loop
                speed={1000} // lower = slower scroll
                autoplay={{
                  delay: 2500, // no delay between slides
                  disableOnInteraction: false,
                }}
                freeMode={true} // smooth continuous scroll
                // freeModeMomentum={false}
                className="mySwiper overflow-hidden py-5 row child-cols-12 sm:child-cols-6 lg:child-cols-3  "
                style={{
                  gridColumnGap: "2em",
                  gridRowGap: "2em",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // display: "flex",
                  width: "100%",
                  height: "240px",
                }}
              >
                {[...images, ...images].map((img, i) => (
                  <SwiperSlide
                    className="relative"
                    style={{
                      display: "inline-block px-4",
                      width: "320px",
                    }}
                  >
                    <div
                      key={i}
                      className="relative w-100"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={320}
                        height={260}
                        className="h-[240px] w-[320px] rounded-xl object-cover rounded-3 "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <div className="panel text-center overflow-hidden rounded-3 border border-5 border-dark dark:border-white dark:border-opacity-20">
                <Image
                  alt="Main hero image"
                  src="/assets/images/template/dashboard.jpg"
                  width="1440"
                  height="1024"
                />
              </div> */}
              <div
                className="position-absolute bottom-1 ltr:end-0 rtl:start-0 ltr:me-n8 rtl:ms-n8 mb-n8"
                style={{
                  zIndex: "1",
                  marginRight: "-5rem !important",
                  marginBottom: "-5rem !important",
                }}
              >
                <Image
                  className="w-200px d-block dark:d-none"
                  alt="sitting"
                  src="/assets/images/template/sitting.svg"
                  width="200"
                  height="238"
                />
                <Image
                  className="w-200px d-none dark:d-block"
                  alt="sitting-dark"
                  src="/assets/images/template/sitting-dark.svg"
                  width="200"
                  height="239"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
