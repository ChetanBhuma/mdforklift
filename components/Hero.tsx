"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, MapPin, Truck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#171C24] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#293545]"
    >
      {/* Subtle industrial blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1F2631] border border-[#293545] text-xs font-semibold tracking-wider text-[#F5A623] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
              <span>YOUR TRUSTED INDUSTRIAL EQUIPMENT PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl uppercase tracking-tight leading-[0.95] text-white">
              Powering Your{" "}
              <span className="text-[#F5A623] inline-block">
                Heavy Lifting
              </span>{" "}
              & Transport Needs.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Reliable forklift, crane and transportation services for
              industrial, construction and material-handling requirements.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#171C24] bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] rounded shadow-amber transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919220893841"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#1F2631] hover:bg-[#252D3A] border border-[#293545] hover:border-[#F5A623]/60 rounded transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#F5A623]" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Direct Contact & Location Bar */}
            <div className="pt-4 border-t border-[#293545]/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                <a
                  href="tel:+919220893841"
                  className="flex items-center gap-3 p-3 bg-[#1F2631]/80 hover:bg-[#1F2631] border border-[#293545] rounded transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-[#293545] flex items-center justify-center text-[#F5A623] group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      Primary Contact
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">
                      +91 9220893841
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919213391241"
                  className="flex items-center gap-3 p-3 bg-[#1F2631]/80 hover:bg-[#1F2631] border border-[#293545] rounded transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-[#293545] flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      Alternate Contact
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-gray-200 transition-colors">
                      +91 9213391241
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                  A Block Parking, Narela Industrial Area, Delhi
                </span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Truck className="w-3.5 h-3.5 text-[#F5A623]" />
                  Material Handling & Equipment Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Machinery Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative industrial corner bracket */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#F5A623] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#F5A623] pointer-events-none z-20" />

              {/* Main Visual Card */}
              <div className="relative bg-[#1F2631] border border-[#293545] rounded-md p-3 sm:p-4 shadow-2xl overflow-hidden group">
                <div className="relative h-64 sm:h-80 w-full rounded bg-[#171C24] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/jcb-telehandler.jpg"
                    alt="JCB Telehandler Equipment at M.D Forklift Services"
                    fill
                    priority
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                  <div className="absolute top-3 left-3 bg-[#171C24]/90 backdrop-blur border border-[#293545] px-2.5 py-1 rounded text-[11px] font-bold text-[#F5A623] uppercase tracking-wide">
                    Featured Machine
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-[#171C24] via-[#171C24]/80 to-transparent p-3 pt-6 rounded">
                    <div className="font-heading font-bold text-lg uppercase text-white tracking-wide">
                      JCB Telehandler
                    </div>
                    <div className="text-xs text-gray-300">
                      Telescopic Material Handling Equipment
                    </div>
                  </div>
                </div>

                {/* Secondary Machinery Thumbnail & Badge Strip */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-[#171C24] border border-[#293545] rounded flex items-center gap-2.5">
                    <div className="relative w-12 h-12 flex-shrink-0 bg-[#1F2631] rounded overflow-hidden">
                      <Image
                        src="/images/ace-forklift.jpg"
                        alt="ACE Forklift"
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase font-heading">
                        ACE Forklift
                      </div>
                      <div className="text-[10px] text-gray-400">
                        Industrial Forklift
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#171C24] border border-[#293545] rounded flex flex-col justify-center">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#F5A623]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623]" />
                      <span>Ready for Enquiry</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      Narela & Delhi NCR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

