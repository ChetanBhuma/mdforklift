import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, MessageSquare, ArrowUp, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1217] text-white border-t border-[#293545]">
      {/* Upper Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative h-14 w-44">
              <Image
                src="/images/logo.png"
                alt="M.D Forklift Services Logo"
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>

            <div className="font-heading font-extrabold text-xl uppercase tracking-wider text-white">
              M.D FORKLIFT CRANES & TRANSPORT SERVICES
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Industrial machinery rental, forklift solutions, crane services,
              and material transportation for factories, warehouses, and
              contractors across Delhi NCR.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919220893841"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1F2631] hover:bg-[#25D366]/20 border border-[#293545] hover:border-[#25D366] rounded text-xs font-semibold text-gray-300 hover:text-white transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 9220893841</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5A623] font-heading">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#hero" className="hover:text-[#F5A623] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5A623] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#F5A623] transition-colors">
                  Our Machinery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F5A623] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F5A623] transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5A623] transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5A623] font-heading">
              Services
            </div>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Forklift Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Crane Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Heavy Equipment Handling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Transportation Services
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#F5A623] transition-colors">
                  JCB Telehandler Rental
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#F5A623] transition-colors">
                  ACE Forklift Rental
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hub & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5A623] font-heading">
              Location & Contact
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  A-219 Narela DSIIDC Industrial Area, Delhi - 110040, India.
                </span>
              </div>

              <div className="pt-2 border-t border-[#293545] space-y-2">
                <a
                  href="tel:+919220893841"
                  className="flex items-center gap-2 hover:text-[#F5A623] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F5A623]" />
                  <span className="font-semibold">+91 9220893841</span>
                </a>

                <a
                  href="tel:+919213391241"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+91 9213391241</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#F5A623] hover:bg-[#E09210] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Request a Quick Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#090B0E] border-t border-[#293545] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div>
            © {currentYear} <span className="text-white font-semibold">M.D FORKLIFT CRANES & TRANSPORT SERVICES</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Narela Industrial Area, Delhi</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-[#F5A623] hover:underline font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

