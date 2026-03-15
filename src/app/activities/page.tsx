"use client";

import SectionReveal from "@/components/SectionReveal";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import { motion } from "framer-motion";

const activities = [
  { icon: "🎭", title: "Cultural Programs", desc: "Annual day, festivals, and cultural celebrations" },
  { icon: "🔬", title: "Science Exhibitions", desc: "Student-led experiments and science projects" },
  { icon: "🎨", title: "Art & Craft", desc: "Drawing, painting, and creative workshops" },
  { icon: "💃", title: "Dance & Music", desc: "Dedicated dance classes and music activities" },
  { icon: "🚌", title: "Educational Trips", desc: "Learning excursions for real-world exposure" },
  { icon: "🎉", title: "Festival Celebrations", desc: "Celebrating all festivals to develop social values" },
];

const sportsAchievements = [
  "First school in the region to start Khel Nursery",
  "4 students selected at National Level in Archery",
  "Professional coaches for Archery and Shooting",
  "Multiple playgrounds with experienced coaches",
  "Best open gym facility in the region",
  "Indoor sports club for students",
];

const sainikHighlights = [
  "Special coaching for Sainik School entrance exams",
  "Special coaching for Military School entrance exams",
  "3 students qualified Sainik School Entrance Exam",
  "1 student selected in Rai Sports School",
  "Highly experienced faculty for exam preparation",
];

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/activity.jpeg" alt="Activities" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Activities & <span className="text-accent-400">Sports</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            Learning Beyond the Classroom
          </motion.p>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                Beyond Academics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Co-Curricular <span className="text-primary-500">Activities</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group text-center"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Veer Sports Academy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <Image
                src="/images/activity4.jpg"
                alt="Sports Academy"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </SectionReveal>
            <SectionReveal direction="right">
              <div>
                <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                  Sports Excellence
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Veer <span className="text-primary-500">Sports Academy</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Veer Sports Academy focuses on building strong, healthy, and confident
                  athletes alongside academic excellence.
                </p>
                <div className="space-y-3">
                  {sportsAchievements.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Veer Sainik Academy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left" className="order-2 lg:order-1">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Defence Preparation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Veer <span className="text-primary-500">Sainik Academy</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Veer Sainik Academy prepares students for prestigious defence schools,
                  guiding them towards careers in defence services and leadership roles.
                </p>
                <div className="space-y-3">
                  {sainikHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-crimson-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" className="order-1 lg:order-2">
              <Image
                src="/images/function.jpeg"
                alt="Sainik Academy"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      <Gallery />
    </>
  );
}
