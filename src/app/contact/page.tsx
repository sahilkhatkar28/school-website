"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/school.jpeg" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Contact <span className="text-accent-400">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mt-4"
          >
            We&apos;d Love to Hear From You
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <SectionReveal direction="left">
              <div>
                <span className="text-crimson-500 font-semibold text-sm uppercase tracking-wider">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
                  Visit Our <span className="text-primary-500">Campus</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Address</h3>
                      <p className="text-gray-600 mt-1">
                        Veer International School,<br />
                        Badhra, Haryana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                      <a
                        href="tel:7404118009"
                        className="text-primary-500 hover:text-primary-700 transition-colors text-lg mt-1 block"
                      >
                        7404118009
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                      🕐
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Office Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Saturday<br />
                        8:00 AM - 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 rounded-2xl overflow-hidden shadow-lg h-[250px] bg-gray-100 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.5!2d75.5747!3d28.7856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39134a0e9b3e8e3d%3A0x1234567890abcdef!2sBadhra%2C%20Haryana!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/Veer+International+School+Badhra+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-medium transition-colors"
                >
                  📍 Open in Google Maps →
                </a>
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal direction="right">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Have questions about admissions? Fill out the form below.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-500 font-medium hover:text-primary-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Parent Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Child&apos;s Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="Child's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Class Seeking Admission For
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select Class</option>
                        <option>Play Group</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Any questions or additional information..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 text-lg"
                    >
                      Submit Enquiry
                    </motion.button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Ready to Visit Our Campus?
          </h2>
          <p className="text-primary-800 mb-6">
            Parents are welcome to visit and experience our facilities firsthand.
          </p>
          <a
            href="tel:7404118009"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-700 transition-all hover:scale-105 shadow-lg text-lg"
          >
            📞 Call Now - 7404118009
          </a>
        </div>
      </section>
    </>
  );
}
