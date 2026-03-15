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
                <p className="text-sm text-gray-400">Jui Road, Badhra, Haryana</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A premier educational institution committed to providing quality education
              with discipline, strong moral values, and overall development.
            </p>
            <p className="mt-4 text-accent-400 font-semibold text-sm italic">
              &ldquo;Striving Towards Perfection&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/share/1ashhdmX7d/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/@veerinternationalschool4122?si=vyIoyH98iRxjytp2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
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
                { href: "/gallery", label: "Gallery" },
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
                  Jui Road, Badhra, Haryana
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📞</span>
                <div className="text-sm space-y-1">
                  <a href="tel:7404118009" className="block hover:text-accent-400 transition-colors">7404118009</a>
                  <a href="tel:7404119009" className="block hover:text-accent-400 transition-colors">7404119009</a>
                  <a href="tel:7404111602" className="block hover:text-accent-400 transition-colors">7404111602</a>
                  <a href="tel:7404111603" className="block hover:text-accent-400 transition-colors">7404111603</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:veerinternationalschool@gmail.com" className="text-sm hover:text-accent-400 transition-colors">
                  veerinternationalschool@gmail.com
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
