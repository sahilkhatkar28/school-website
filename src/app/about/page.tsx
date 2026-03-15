"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🎯",
    title: "Academic Excellence",
    desc: "CCE curriculum with activity-based learning, digital classrooms, and weekly test reports.",
  },
  {
    icon: "🏋️",
    title: "Sports & Fitness",
    desc: "Veer Sports Academy with national-level coaching in archery, shooting, and more.",
  },
  {
    icon: "🎨",
    title: "Creative Arts",
    desc: "Dance, art & craft, music, and cultural programs nurturing creativity in every child.",
  },
  {
    icon: "🛡️",
    title: "Defence Preparation",
    desc: "Veer Sainik Academy preparing students for Sainik School and Military School exams.",
  },
  {
    icon: "🧒",
    title: "Early Childhood",
    desc: "Montessori-based education for early learners with the biggest play section in Badhra.",
  },
  {
    icon: "💪",
    title: "Character Building",
    desc: "Focus on discipline, moral values, honesty, and developing responsible citizens.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/school.jpeg"
            alt="Veer International School"
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
            About <span className="text-accent-400">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            A Place Where Learning Meets Excellence
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <Image
                  src="/images/classroom.jpg"
                  alt="Classroom"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white px-6 py-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-sm text-blue-200">Years of Excellence</p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  About <span className="text-primary-500">Veer International School</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Veer International School Badhra was established with the vision of
                    providing quality education to students with modern infrastructure
                    and experienced faculty.
                  </p>
                  <p>
                    The school believes in developing students not only academically but
                    also socially, emotionally, and physically. With a perfect
                    combination of traditional values and modern education, we prepare
                    students to face future challenges confidently.
                  </p>
                  <p>
                    Our campus provides a safe, hygienic, and motivating environment
                    where students enjoy learning and develop their talents.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SectionReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-primary-500 h-full">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-3xl mb-6">
                  🔭
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create responsible, disciplined, and knowledgeable citizens who
                  contribute positively to society and the nation. Our vision is to build
                  a generation of students who are academically strong, morally
                  responsible, and confident leaders of tomorrow.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-crimson-500 h-full">
                <div className="w-16 h-16 bg-crimson-50 rounded-full flex items-center justify-center text-3xl mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Provide quality education through activity-based learning",
                    "Encourage discipline, honesty, and strong moral values",
                    "Focus on overall personality development of students",
                    "Provide a safe and child-friendly learning environment",
                    "Nurture creativity, leadership, and confidence",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent-500 mt-1 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Pillars of <span className="text-primary-500">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Dedicated <span className="text-primary-500">Faculty & Staff</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <Image
                src="/images/staff.jpeg"
                alt="Our Staff"
                width={1000}
                height={600}
                className="object-cover w-full"
              />
            </div>
            <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
              Our teachers are highly qualified and many are trained professionals from
              Pilani. We maintain a 20:1 teacher-student ratio ensuring individual
              attention for every child.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
