"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
      <div className="section-outer panel pt-9 lg:py-3">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center "
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-4 m-0">
                Stunning Design & Webflow <br className="d-none lg:d-block" />{" "}
                Development for Startups
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Expert design and Webflow development agency to help you scale
                to <br className="d-none sm:d-block" />
                raise your success in digital goals.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column pb-5">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Book An intro call
                </Link>
                <a
                  onClick={openContactModal}
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                  data-uc-toggle=""
                >
                  Our work
                </a>
              </div>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-outer panel pb-3  lg:py-3">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="relative w-full max-w-7xl mx-auto">
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

              <Swiper
                modules={[Autoplay]}
                loop={true} // infinite loop
                speed={1000} // lower = slower scroll
                centeredSlides={true}
                centeredSlidesBounds={true}
                spaceBetween={30}
                slidesPerView={"auto"}
                // centeredSlides={false}
                grabCursor={true}
                autoplay={{
                  delay: 2500, // no delay between slides
                  disableOnInteraction: false,
                }}
                freeMode={true} // smooth continuous scroll
                // freeModeMomentum={false}
                className="mySwiper py-5"
              >
                {[...images, ...images].map((img, i) => (
                  <SwiperSlide
                    className="!w-[360px] flex items-center justify-center"
                    style={{
                      display: "inline-block px-4",
                      width: "360px",
                    }}
                  >
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={360}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className="position-absolute bottom-1 ltr:end-0 rtl:start-0 ltr:me-n8 rtl:ms-n8 mb-n8"
                style={{
                  zIndex: "21",
                  marginRight: "-5rem !important",
                  marginBottom: "-8rem !important",
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
