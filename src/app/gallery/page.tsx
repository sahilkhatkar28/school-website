"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

interface GalleryImage {
  src: string;
  category: string;
}

const categories = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "science", label: "Science Exhibition" },
  { id: "sports", label: "Sports & Games" },
  { id: "cultural", label: "Cultural Events" },
  { id: "tours", label: "Tours & Trips" },
  { id: "achievements", label: "Achievements" },
  { id: "outdoor", label: "Outdoor Activities" },
  { id: "assembly", label: "Assembly & Formations" },
  { id: "patriotic", label: "Patriotic Celebrations" },
  { id: "holi", label: "Holi Festival" },
  { id: "playschool", label: "Play School" },
  { id: "classroom", label: "Classroom" },
  { id: "transport", label: "Transport" },
  { id: "spiritual", label: "Spiritual Visits" },
];

const images: GalleryImage[] = [
  // Campus (9)
  { src: "/images/gallery/campus/school1.jpeg", category: "campus" },
  { src: "/images/gallery/campus/school2.jpeg", category: "campus" },
  { src: "/images/gallery/campus/school3.jpeg", category: "campus" },
  { src: "/images/gallery/campus/school4.jpeg", category: "campus" },
  { src: "/images/gallery/campus/function3.jpeg", category: "campus" },
  { src: "/images/gallery/campus/function4.jpeg", category: "campus" },
  { src: "/images/gallery/campus/function6.jpeg", category: "campus" },
  { src: "/images/gallery/campus/ground.jpg", category: "campus" },
  { src: "/images/gallery/campus/assembly-ground.jpg", category: "campus" },

  // Science (20)
  { src: "/images/gallery/science/science1.jpg", category: "science" },
  { src: "/images/gallery/science/science2.jpg", category: "science" },
  { src: "/images/gallery/science/science3.jpg", category: "science" },
  { src: "/images/gallery/science/science4.jpg", category: "science" },
  { src: "/images/gallery/science/Science5.jpg", category: "science" },
  { src: "/images/gallery/science/Science6.jpg", category: "science" },
  { src: "/images/gallery/science/Science7.jpg", category: "science" },
  { src: "/images/gallery/science/Scienc8.jpg", category: "science" },
  { src: "/images/gallery/science/Science9.jpg", category: "science" },
  { src: "/images/gallery/science/Science10.jpg", category: "science" },
  { src: "/images/gallery/science/Science11.jpg", category: "science" },
  { src: "/images/gallery/science/Science12.jpg", category: "science" },
  { src: "/images/gallery/science/Science13.jpg", category: "science" },
  { src: "/images/gallery/science/Science14.jpg", category: "science" },
  { src: "/images/gallery/science/IMG_20260228_112053.jpg", category: "science" },
  { src: "/images/gallery/science/brain.jpg", category: "science" },
  { src: "/images/gallery/science/brain1.jpg", category: "science" },
  { src: "/images/gallery/science/brain2.jpg", category: "science" },
  { src: "/images/gallery/science/brain3.jpg", category: "science" },
  { src: "/images/gallery/science/brain5.jpg", category: "science" },

  // Sports (13)
  { src: "/images/gallery/sports/arrowg.jpg", category: "sports" },
  { src: "/images/gallery/sports/game.jpg", category: "sports" },
  { src: "/images/gallery/sports/game2.jpg", category: "sports" },
  { src: "/images/gallery/sports/game3.jpg", category: "sports" },
  { src: "/images/gallery/sports/game4.jpg", category: "sports" },
  { src: "/images/gallery/sports/game5.jpg", category: "sports" },
  { src: "/images/gallery/sports/game6.jpg", category: "sports" },
  { src: "/images/gallery/sports/gaming.jpg", category: "sports" },
  { src: "/images/gallery/sports/gane1.jpg", category: "sports" },
  { src: "/images/gallery/sports/smash.jpg", category: "sports" },
  { src: "/images/gallery/sports/fun1.jpg", category: "sports" },
  { src: "/images/gallery/sports/assan.jpg", category: "sports" },
  { src: "/images/gallery/sports/asson2.jpg", category: "sports" },

  // Cultural (10)
  { src: "/images/gallery/cultural/function1.jpeg", category: "cultural" },
  { src: "/images/gallery/cultural/function2.jpeg", category: "cultural" },
  { src: "/images/gallery/cultural/cute.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/cute2.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/cute3.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/cute4.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/art.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/dance.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/singing.jpg", category: "cultural" },
  { src: "/images/gallery/cultural/New.8.jpg", category: "cultural" },

  // Tours (8)
  { src: "/images/gallery/tours/tour.jpg", category: "tours" },
  { src: "/images/gallery/tours/tour1.jpg", category: "tours" },
  { src: "/images/gallery/tours/tour3.jpg", category: "tours" },
  { src: "/images/gallery/tours/tour4.jpg", category: "tours" },
  { src: "/images/gallery/tours/tour5.jpg", category: "tours" },
  { src: "/images/gallery/tours/tour6.jpg", category: "tours" },
  { src: "/images/gallery/tours/class.jpg", category: "tours" },
  { src: "/images/gallery/tours/funtime1.jpg", category: "tours" },

  // Achievements (9)
  { src: "/images/gallery/achievements/achievement5.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/achievements.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/achivement1.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/appreciation.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/appreciation1.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/Appreciation2.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/Appreciation3.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/Appreciation4.jpg", category: "achievements" },
  { src: "/images/gallery/achievements/Appreciation6.jpg", category: "achievements" },

  // Outdoor (10)
  { src: "/images/gallery/outdoor/outdoor1.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/outdoor2.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/outdoor3.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/outdoor5.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/outdoor6.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/outdoo7.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/activity4.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/activity5.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/activity.jpg", category: "outdoor" },
  { src: "/images/gallery/outdoor/fun.jpg", category: "outdoor" },

  // Assembly (9)
  { src: "/images/gallery/assembly/assembly.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/assembly2.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/assembly3.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/assembly4.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/veer-formation.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/New.1.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/New.2.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/New.5.jpg", category: "assembly" },
  { src: "/images/gallery/assembly/New.6.jpg", category: "assembly" },

  // Patriotic (9)
  { src: "/images/gallery/patriotic/fubn3.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity11.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity12.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity13.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity14.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity15.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/Activity21.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/class1.jpg", category: "patriotic" },
  { src: "/images/gallery/patriotic/group5.jpg", category: "patriotic" },

  // Holi (4)
  { src: "/images/gallery/holi/holi.jpg", category: "holi" },
  { src: "/images/gallery/holi/holi2.jpg", category: "holi" },
  { src: "/images/gallery/holi/holi3.jpg", category: "holi" },
  { src: "/images/gallery/holi/fun-time.jpg", category: "holi" },

  // Play School (2)
  { src: "/images/gallery/playschool/happy.jpg", category: "playschool" },
  { src: "/images/gallery/playschool/group4.jpg", category: "playschool" },

  // Classroom (1)
  { src: "/images/gallery/classroom/class4.jpg", category: "classroom" },

  // Transport (2)
  { src: "/images/gallery/transport/buses.jpeg", category: "transport" },
  { src: "/images/gallery/transport/buses2.jpeg", category: "transport" },

  // Spiritual (2)
  { src: "/images/gallery/spiritual/spritual.jpg", category: "spiritual" },
  { src: "/images/gallery/spiritual/spritivual2.jpg", category: "spiritual" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/campus/assembly-ground.jpg"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Photo <span className="text-accent-400">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            Moments That Define Our Journey
          </motion.p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active === cat.id
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                  {cat.id !== "all" && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({images.filter((img) => img.category === cat.id).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Image count */}
          <p className="text-center text-gray-500 text-sm mb-8">
            Showing {filtered.length} photos
          </p>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(img.src)}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                      +
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt=""
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl"
              >
                ✕
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = filtered.findIndex((img) => img.src === lightbox);
                  const prev = idx > 0 ? filtered[idx - 1].src : filtered[filtered.length - 1].src;
                  setLightbox(prev);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = filtered.findIndex((img) => img.src === lightbox);
                  const next = idx < filtered.length - 1 ? filtered[idx + 1].src : filtered[0].src;
                  setLightbox(next);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
