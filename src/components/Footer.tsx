"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Veer International School"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Veer International School</h3>
                <p className="text-sm text-gray-400">Badhra, Haryana</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A premier educational institution committed to providing quality education
              with discipline, strong moral values, and overall development.
            </p>
            <p className="mt-4 text-accent-400 font-semibold text-sm italic">
              &ldquo;Striving Towards Perfection&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-crimson-500 -mb-1" />
            </h4>
            <ul className="space-y-2 mt-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/academics", label: "Academics" },
                { href: "/activities", label: "Activities" },
                { href: "/admissions", label: "Admissions" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-crimson-500">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative">
              Our Programs
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-crimson-500 -mb-1" />
            </h4>
            <ul className="space-y-2 mt-2">
              {[
                "Play School",
                "Nursery & KG",
                "Primary Classes",
                "Veer Sports Academy",
                "Veer Sainik Academy",
                "Day Boarding",
              ].map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="text-crimson-500">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-crimson-500 -mb-1" />
            </h4>
            <div className="space-y-3 mt-2">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <p className="text-sm">
                  Veer International School,<br />
                  Badhra, Haryana
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:7404118009" className="text-sm hover:text-accent-400 transition-colors">
                  7404118009
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Veer International School, Badhra. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Striving Towards Perfection</p>
        </div>
      </div>
    </footer>
  );
}
