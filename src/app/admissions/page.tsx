"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Enquiry",
    desc: "Visit the school campus or contact the school office for admission information.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Registration",
    desc: "Fill out the Admission Registration Form available at the school office.",
    icon: "📝",
  },
  {
    step: "03",
    title: "Interaction / Assessment",
    desc: "Simple interaction for Play School, basic academic assessment for higher classes.",
    icon: "💬",
  },
  {
    step: "04",
    title: "Confirmation",
    desc: "Submit required documents, pay admission fee, and complete formalities.",
    icon: "✅",
  },
];

const documents = [
  "Birth Certificate of the student",
  "Aadhaar Card of the student",
  "Aadhaar Card of parents",
  "Previous school report card (for higher classes)",
  "Transfer Certificate (if applicable)",
  "Passport size photographs of the student",
  "Address proof",
];

const reasons = [
  "Activity Based Learning",
  "Montessori Education for Early Classes",
  "Digital Classrooms",
  "Air-Cooled & Well Ventilated Classrooms",
  "Hygienic Campus Environment",
  "Free Extra Remedial Classes",
  "Weekly Test Reports for Academic Progress",
  "Strong Focus on Sports and Extra-Curricular Activities",
  "Day Boarding Facility (Only School in Badhra)",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/group.jpeg" alt="Admissions" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 text-accent-300 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Now Accepting Applications
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            <span className="text-accent-400">Admissions</span> Open
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            Play Group to Class 9th | Session 2026-27
          </motion.p>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                How to Apply
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Admission <span className="text-primary-500">Procedure</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all text-center group"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-4xl mt-4 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>

                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary-300" />
                  )}
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classes & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Classes */}
            <SectionReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-10 shadow-md h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white text-lg">🎓</span>
                  Classes Available
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Play Group", "Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9"].map(
                    (cls) => (
                      <div
                        key={cls}
                        className="flex items-center gap-2 bg-primary-50 px-4 py-2.5 rounded-lg text-sm font-medium text-primary-700"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full" />
                        {cls}
                      </div>
                    )
                  )}
                </div>
                <p className="mt-6 text-sm text-gray-500 bg-accent-50 px-4 py-3 rounded-lg">
                  Limited seats available in each class to maintain the ideal 20:1 teacher-student ratio.
                </p>
              </div>
            </SectionReveal>

            {/* Documents */}
            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-10 shadow-md h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-crimson-500 rounded-lg flex items-center justify-center text-white text-lg">📄</span>
                  Documents Required
                </h3>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div key={doc} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-crimson-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-crimson-500 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                The Veer Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why Choose <span className="text-primary-500">Veer International?</span>
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {reasons.map((reason, i) => (
              <SectionReveal key={reason} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 bg-primary-50 px-5 py-4 rounded-xl"
                >
                  <span className="text-accent-500 font-bold text-lg">✔</span>
                  <span className="text-sm font-medium text-gray-700">{reason}</span>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-crimson-500 to-crimson-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl text-crimson-100 mb-10">
              Visit our campus or call us today. Our admission team will be happy to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:7404118009"
                className="px-10 py-4 bg-white text-crimson-600 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-lg"
              >
                📞 Call Now
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all text-lg"
              >
                Visit Campus
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
