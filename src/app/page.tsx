"use client";

import Hero from "@/components/Hero";
import NoticeTicker from "@/components/NoticeTicker";
import SectionReveal from "@/components/SectionReveal";
import StatsCounter from "@/components/StatsCounter";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: "👨‍🏫",
    title: "Qualified & Dedicated Staff",
    desc: "Highly qualified teachers trained from Pilani, bringing excellence in teaching and mentorship.",
  },
  {
    icon: "📚",
    title: "Activity Based Learning",
    desc: "Children learn through practical activities, experiments, and hands-on participation.",
  },
  {
    icon: "🖥️",
    title: "Digital Classrooms",
    desc: "Modern digital teaching tools making lessons interactive and engaging.",
  },
  {
    icon: "🏠",
    title: "Day Boarding Facility",
    desc: "Only school in Badhra offering Day Boarding with extended learning and care.",
  },
  {
    icon: "🧒",
    title: "Montessori Education",
    desc: "Hands-on Montessori methods for early learners focusing on independence.",
  },
  {
    icon: "📝",
    title: "Weekly Test Reports",
    desc: "Continuous evaluation with CCE curriculum and regular progress monitoring.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <NoticeTicker />

      {/* Key Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Our Key <span className="text-primary-500">Strengths</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-primary-500 group-hover:scale-110 transition-all">
                    <span className="group-hover:scale-125 transition-transform">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/principal.jpeg"
                    alt="Principal - Veer International School"
                    width={600}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-2xl -z-10" />
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  From the Desk
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Principal&apos;s <span className="text-primary-500">Message</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Welcome to Veer International School, Badhra. Our institution is
                    committed to providing quality education with discipline, strong
                    moral values, and overall development of every student.
                  </p>
                  <p>
                    We believe that education goes beyond books. Our focus on
                    activity-based learning, sports, creativity, and character building
                    ensures that every child grows into a confident and responsible
                    citizen.
                  </p>
                  <p>
                    With experienced faculty, modern infrastructure, and a nurturing
                    environment, we strive to bring out the best in every student.
                  </p>
                </div>
                <div className="mt-6 border-l-4 border-accent-500 pl-4">
                  <p className="text-lg font-semibold text-gray-900">
                    &ldquo;Striving Towards Perfection&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    - Principal, Veer International School
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                What We <span className="text-primary-500">Offer</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Play School",
                desc: "Biggest play section in Badhra with dance, art & craft activities and festival celebrations.",
                img: "/images/kid-learning.jpg",
                color: "from-accent-500 to-accent-600",
              },
              {
                title: "Veer Sports Academy",
                desc: "First school to start Khel Nursery. 4 students selected at National Level in Archery.",
                img: "/images/activity4.jpg",
                color: "from-primary-500 to-primary-700",
              },
              {
                title: "Veer Sainik Academy",
                desc: "Special coaching for Sainik School & Military School entrance exams with proven results.",
                img: "/images/group.jpeg",
                color: "from-crimson-500 to-crimson-700",
              },
            ].map((program, i) => (
              <SectionReveal key={program.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group h-[400px]"
                >
                  <Image
                    src={program.img}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-70 group-hover:opacity-80 transition-opacity`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-white/90 leading-relaxed">{program.desc}</p>
                    <Link
                      href="/activities"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                    >
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Give Your Child the Best Start
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Admissions are open for Play Group to Class 9th. Limited seats
              available to maintain our ideal 20:1 teacher-student ratio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="px-10 py-4 bg-accent-500 text-primary-900 font-bold rounded-full hover:bg-accent-400 transition-all hover:scale-105 shadow-lg text-lg"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all text-lg"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
