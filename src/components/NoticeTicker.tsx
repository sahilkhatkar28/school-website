"use client";

import { motion } from "framer-motion";

const notices = [
  "📢 Admissions Open for 2026-27 | Play Group to Class 9th",
  "🏆 4 Students Selected at National Level in Archery",
  "🎓 3 Students Qualified Sainik School Entrance Exam",
  "📚 Free Extra Remedial Classes Available",
  "🏫 Day Boarding Facility - Only School in Badhra",
  "🎯 Weekly Test Reports for Academic Progress",
];

export default function NoticeTicker() {
  return (
    <div className="bg-accent-500 py-2.5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...notices, ...notices].map((notice, i) => (
          <span key={i} className="text-sm font-medium text-primary-900 flex items-center gap-2">
            {notice}
            <span className="text-crimson-500 mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
