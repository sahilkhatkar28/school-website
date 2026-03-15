"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

const images = [
  { src: "/images/activity.jpeg", alt: "School Activity" },
  { src: "/images/activity1.jpeg", alt: "Cultural Event" },
  { src: "/images/function.jpeg", alt: "School Function" },
  { src: "/images/group.jpeg", alt: "Group Photo" },
  { src: "/images/innovative-learning.jpg", alt: "Innovative Learning" },
  { src: "/images/child-singing.jpg", alt: "Children Singing" },
  { src: "/images/activity3.jpg", alt: "Activity" },
  { src: "/images/activity4.jpg", alt: "Sports Activity" },
  { src: "/images/classroom.jpg", alt: "Classroom" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Life at <span className="text-primary-500">Veer International</span>
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="pb-12"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="!w-[300px] sm:!w-[400px] md:!w-[500px]">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionReveal>
      </div>
    </section>
  );
}
