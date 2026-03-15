import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veer International School, Badhra | Striving Towards Perfection",
  description:
    "Veer International School Badhra - A premier educational institution committed to quality education with discipline, strong moral values, and overall development. Admissions open for Play Group to Class 9th.",
  keywords: [
    "Veer International School",
    "Badhra",
    "best school in Badhra",
    "play school Badhra",
    "admissions open",
    "Haryana school",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
