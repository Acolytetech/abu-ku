"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonLink?: string;
  background: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">

      <Swiper
        modules={[Autoplay,Navigation, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        // effect="fade"
        navigation={true}
        className="w-full h-full"
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">

              {/* Background Animation */}
              <motion.div
                key={`bg-${i}-${activeIndex}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.background}
                  alt="hero background"
                  fill
                  priority
                  className="object-cover brightness-50"
                />
              </motion.div>

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/20" /> */}

              {/* Animated Content */}
              <motion.div
                key={`content-${i}-${activeIndex}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute top-1/2  -translate-y-1/2 md:-translate-y-1/3 
                           text-center md:text-left z-10 md:ml-10 p-10 w-full md:w-3xl px-4 flex flex-col gap-8"
              >
                <h1 className="text-3xl md:text-6xl font-bold text-green-600 drop-shadow-lg ">
                  {slide.title}
                </h1>

                <p className="text-lg  md:text-2xl  text-gray-200 drop-shadow  max-w-2xl">
                  {slide.subtitle}
                </p>

                {slide.buttonLabel && (
                  <Link href={slide.buttonLink || "#"}>
                    <button className="bg-green-600 text-white text-xl px-10 py-3 rounded-full font-semibold hover:bg-green-500 transition">
                      {slide.buttonLabel}
                    </button>
                  </Link>
                )}
              </motion.div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
