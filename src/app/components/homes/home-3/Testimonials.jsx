"use client";
import { reviews, testimonialsData } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import { Thumbs, EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

// const swiperThumbOptions = {
//   slidesPerView: 1,
//   spaceBetween: 11,
//   loop: true,
//   effect: "fade",
//   modules: [EffectFade, Thumbs],
//   slideToClickedSlide: true,
// };
// const swiperOptions2 = {
//   slidesPerView: 1,
//   loop: true,

//   modules: [Thumbs, Autoplay, Pagination],
//   loopedslides: 4,
// };
export default function Testimonials() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    // <div
    //   id="clients_feedback"
    //   className="clients-feedback section panel overflow-hidden"
    // >
    //   <div className="section-outer panel">
    //     <div className="container max-w-lg">
    //       <div
    //         className="section-inner panel swiper-parent"
    //         data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
    //       >
    //         <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
    //           What clients said:
    //         </h2>
    //         <div className="panel p-3 lg:p-6 bg-secondary dark:bg-gray-800 rounded-3 mt-4 sm:mt-6">
    //           <div className="row child-cols-12 sm:child-cols-6 col-match g-3 lg:g-8">
    //             <div>
    //               <div className="panel rounded-2 overflow-hidden">
    //                 <Swiper
    //                   allowTouchMove={false}
    //                   onSwiper={setThumbsSwiper}
    //                   {...swiperThumbOptions}
    //                   className="swiper connect-image"
    //                 >
    //                   {testimonials.map((elm, i) => (
    //                     <SwiperSlide
    //                       key={i}
    //                       className="swiper-slide"
    //                     >
    //                       <figure className="featured-image m-0 rounded ratio ratio-3x4 uc-transition-toggle overflow-hidden">
    //                         <Image
    //                           className="media-cover image uc-transition-scale-up uc-transition-opaque"
    //                           src={elm.imgSrc}
    //                           width={1000}
    //                           height={667}
    //                           alt="Mark Zellers"
    //                         />
    //                       </figure>
    //                     </SwiperSlide>
    //                   ))}
    //                 </Swiper>
    //               </div>
    //             </div>
    //             <div>
    //               <div className="panel">
    //                 <Swiper
    //                   thumbs={{ swiper: thumbsSwiper }}
    //                   {...swiperOptions2}
    //                   pagination={{
    //                     clickable: true,
    //                     el: ".spb1",
    //                   }}
    //                   className="swiper h-100 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
    //                 >
    //                   {testimonials.map((testimonial, index) => (
    //                     <SwiperSlide
    //                       className="swiper-slide h-100 pb-6"
    //                       key={index}
    //                     >
    //                       <div className="panel vstack justify-between items-center gap-2 lg:gap-3 h-100 text-center">
    //                         <div className="panel">
    //                           <i className="icon icon-4 unicon-quotes text-primary" />
    //                           <p className="fs-6 sm:fs-5 lg:fs-4 fw-bold mt-1 sm:mt-4 dark:text-white">
    //                             {testimonial.quote}
    //                           </p>
    //                         </div>
    //                         <div className="panel pt-0">
    //                           <div className="panel vstack items-center gap-narrow">
    //                             <h6 className="h5 m-0">{testimonial.name}</h6>
    //                             <span className="fs-6 opacity-70">
    //                               {testimonial.position}
    //                             </span>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </SwiperSlide>
    //                   ))}
    //                   <div className="panel pt-0">
    //                     <div className=" spb1 swiper-pagination text-primary m-0 justify-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
    //                   </div>
    //                 </Swiper>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                Hear from clients who've experienced remarkable transformations
                with Webyansh.
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
                          {Array.from({ length: slide.rating }).map((_, i) => (
                            <Image
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              key={i}
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">“{slide.quote}”</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{slide.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <Swiper
                className="swiper mt-2 lg:mt-3"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                  disableOnInteraction: true,
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
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide
                    style={{ transform: "rotate(180deg)" }}
                    className="swiper-slide"
                    key={index}
                  >
                    <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-2 lg:gap-4">
                        <div className="rating d-flex gap-0">
                          {[...Array(5)].map((_, starIndex) => (
                            <Image
                              key={starIndex}
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">{review.feedback}</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{review.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {review.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
