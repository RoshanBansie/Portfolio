// Types
import type { Metadata } from "next";
import type { Viewport } from "next";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Components
import Navbar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";

// Styling
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portolio website where I list my recent projects, techstack, development philosophy and educational timeline.",
};

export const viewport: Viewport = {
  userScalable: false,
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
