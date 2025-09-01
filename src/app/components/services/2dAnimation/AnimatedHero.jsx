"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function AnimatedHero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "We Design Website That People Cant ignore",
    "And Leave A lasting Experience. Did you Feel it? ",
    "Mobile Games",
    "VR Experiences",
    "Multiplayer Worlds",
    "Game Engines",
  ];
  //
  const words = texts[textIndex].split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);
  //   console.log(textIndex);
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary">
        <div className="container  max-w-full">
          <div className="section-inner panel">
            <div className="panel  vstack gap-4 sm:gap-6 xl:gap-8">
              <div className=" panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9  max-w-800px mx-auto text-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={texts[textIndex]}
                    className="title h3 lg:h2 xl:h1 m-0  mx-auto text-dark"
                  >
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
                {/* <h1 className="title h3 lg:h2 xl:h1 m-0 max-w-450px mx-auto text-dark">
                                  
                  Our UI/UX
                  <span className="text-primary"> design</span> Services.
                </h1> */}

                {/* <p className="   py-15  text-dark">
                  Our data-driven UX strategies boost customer satisfaction and
                  conversion rates by delivering user-focused, optimized
                  designs.
                </p> */}
                <button className="btn  btn-md lg:btn-lg btn-primary shadow-md">
                  {" "}
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
