"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
  { icon: "🖥️", title: "Digital Smart Classrooms", desc: "Interactive lessons with modern teaching tools" },
  { icon: "❄️", title: "Air-Cooled Classrooms", desc: "Comfortable learning environment year-round" },
  { icon: "🧪", title: "Science & Activity Labs", desc: "Hands-on experiments and practical learning" },
  { icon: "🏟️", title: "Large Playgrounds", desc: "Multiple grounds for different sports activities" },
  { icon: "🏠", title: "Day Boarding Facility", desc: "Extended learning and care — only school in Badhra" },
  { icon: "💃", title: "Dance & Activity Rooms", desc: "Dedicated spaces for creative expression" },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/classroom.jpg" alt="Classroom" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            <span className="text-accent-400">Academics</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            Where Education Goes Beyond Books
          </motion.p>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <Image
                src="/images/innovative-learning.jpg"
                alt="Innovative Learning"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </SectionReveal>
            <SectionReveal direction="right">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Activity-Based <span className="text-primary-500">Learning</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We believe children learn best through practical activities, experiments,
                    and participation. Our teaching approach combines modern techniques with
                    traditional values to make education interesting and practical.
                  </p>
                  <p>
                    With the CCE curriculum and continuous evaluation system, we ensure every
                    student is progressing. Weekly test reports keep parents informed about
                    their child&apos;s academic journey.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "CCE Curriculum", icon: "📋" },
                    { label: "Weekly Tests", icon: "📝" },
                    { label: "Digital Learning", icon: "💻" },
                    { label: "Free Remedial Classes", icon: "📖" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-primary-50 px-4 py-3 rounded-xl">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Play School */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left" className="order-2 lg:order-1">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Early Childhood
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Best Play School in <span className="text-primary-500">Badhra</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our play school section is designed to provide a fun-filled and safe
                  learning environment for young children, focusing on developing
                  creativity, confidence, and social skills.
                </p>
                <div className="space-y-3">
                  {[
                    "Biggest play section area in Badhra",
                    "Everyday learning activities",
                    "Special care with teacher and Aaya support",
                    "Dance classes for kids",
                    "Drawing, art, and craft activities",
                    "Celebration of all festivals and cultural events",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                src="/images/kid-learning.jpg"
                alt="Play School"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Montessori */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <Image
                src="/images/innovative-learning2.jpg"
                alt="Montessori Education"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </SectionReveal>
            <SectionReveal direction="right">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Foundation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Montessori <span className="text-primary-500">Education</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For early learners, we follow Montessori-based teaching methods that
                  focus on hands-on learning and independence. Children are encouraged
                  to explore, discover, and learn at their own pace.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Montessori program builds a strong foundation in literacy,
                  numeracy, and social skills through interactive and engaging activities
                  that make learning fun and meaningful.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Our <span className="text-primary-500">Facilities</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-5 group-hover:bg-primary-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Classes <span className="text-accent-400">Offered</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {["Play Group", "Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9"].map(
              (cls, i) => (
                <SectionReveal key={cls} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    {cls}
                  </motion.div>
                </SectionReveal>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
