"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

/**
 * Header component for the Homestaq home page.
 * Responsive navigation bar with logo, links, and CTA buttons.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-32 flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Homestaq Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="128px"
                priority
                className="drop-shadow-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-[#c3c3c3] hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-[#c3c3c3] hover:text-white transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-[#c3c3c3] hover:text-white transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-[#c3c3c3] hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#c3c3c3] hover:text-white transition-colors duration-300 px-4 py-2">
              Sign In
            </button>
            <button className="bg-white text-[#02071a] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5">
            <div className="px-2 pt-4 pb-6 space-y-4">
              <a
                href="#features"
                className="block text-[#c3c3c3] hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-[#c3c3c3] hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block text-[#c3c3c3] hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-[#c3c3c3] hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <button className="w-full text-left text-[#c3c3c3] hover:text-white py-2">
                  Sign In
                </button>
                <button className="w-full bg-white text-[#02071a] px-6 py-3 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
