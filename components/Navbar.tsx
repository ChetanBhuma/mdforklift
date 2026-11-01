"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronRight, MapPin } from "lucide-react";

const desktopNavLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Our Machinery", href: "#machinery" },
  { name: "Contact", href: "#contact" },
];

const mobileNavLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Our Machinery", href: "#machinery" },
  { name: "Why Work With Us", href: "#why-us" },
  { name: "Location & Map", href: "#location" },
  { name: "Contact & Enquiry", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`relative sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#171C24]/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-[#293545]"
          : "bg-[#171C24] border-b border-[#293545]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly single row: items-center justify-between flex-nowrap */}
        <div className="flex items-center justify-between h-20 flex-nowrap gap-4">
          {/* Brand Logo */}
          <Link
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#F5A623] rounded-sm py-1"
            aria-label="M.D Forklift Cranes & Transport Services Home"
          >
            <div className="relative h-11 w-36 sm:w-44 flex items-center">
              <Image
                src="/images/logo.png"
                alt="M.D Forklift Services Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </Link>

          {/* Desktop Navigation + CTAs on strictly ONE row */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-nowrap">
            {/* Nav Menu */}
            <nav className="flex items-center gap-1 xl:gap-2 flex-nowrap">
              {desktopNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1F2631] rounded transition-colors duration-150 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTAs (Call Team + GET A QUOTE) on the same row */}
            <div className="flex items-center gap-2.5 xl:gap-3 flex-nowrap flex-shrink-0 pl-2 border-l border-[#293545]">
              <a
                href="tel:+919220893841"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#F5A623] transition-colors py-2 px-3 border border-[#293545] rounded hover:border-[#F5A623]/50 whitespace-nowrap flex-shrink-0"
                title="Call immediately"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Call Team</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#171C24] bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] rounded shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile Right Controls: Call Button + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <a
              href="tel:+919220893841"
              className="p-2.5 text-[#F5A623] bg-[#1F2631] border border-[#293545] rounded-md active:scale-95 transition-transform"
              aria-label="Call +91 9220893841"
              title="Call primary number"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 text-white bg-[#1F2631] hover:bg-[#293545] border border-[#293545] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5A623] touch-manipulation cursor-pointer active:scale-95 transition-transform flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F5A623]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Dropdown Menu (Positioned directly below the header) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#171C24] border-b-2 border-[#F5A623] shadow-2xl z-50">
          <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-90px)] overflow-y-auto">
            <div className="py-2 px-1 border-b border-[#293545] flex items-center justify-between text-xs">
              <span className="uppercase tracking-wider text-gray-400 font-semibold">
                Menu Navigation
              </span>
              <span className="text-[#F5A623] font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Narela, Delhi</span>
              </span>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1 pt-1">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between px-3.5 py-3 text-base font-semibold text-gray-100 hover:text-white hover:bg-[#1F2631] active:bg-[#293545] rounded-md transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#F5A623]" />
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 mt-2 border-t border-[#293545] space-y-2.5">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center py-3.5 px-4 text-center text-sm font-bold uppercase tracking-wider text-[#171C24] bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] rounded-md shadow"
              >
                Get a Free Quote
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919220893841"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-white bg-[#1F2631] hover:bg-[#293545] border border-[#293545] rounded-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>9220893841</span>
                </a>

                <a
                  href="tel:+919213391241"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-white bg-[#1F2631] hover:bg-[#293545] border border-[#293545] rounded-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gray-400" />
                  <span>9213391241</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
