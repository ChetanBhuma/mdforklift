import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Wrench, Clock, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4F5F7] border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Machinery Photographic Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo Card */}
              <div className="relative bg-[#171C24] p-3 rounded-md shadow-card border border-[#293545] overflow-hidden">
                <div className="relative h-72 sm:h-96 w-full rounded bg-[#1F2631] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/ace-forklift.jpg"
                    alt="ACE Industrial Forklift at M.D Forklift Services"
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                  <div className="absolute top-3 right-3 bg-[#171C24]/90 backdrop-blur border border-[#293545] px-3 py-1 rounded text-xs font-bold text-[#F5A623] uppercase">
                    Industrial Handling
                  </div>
                </div>

                {/* Information Caption Strip */}
                <div className="mt-3 p-3 bg-[#1F2631] rounded flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#F5A623]" />
                    <span>Based in Narela Industrial Area, Delhi</span>
                  </div>
                  <span className="text-[#F5A623] font-semibold uppercase font-heading text-sm">
                    M.D Equipment
                  </span>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#F5A623] text-[#171C24] p-4 rounded shadow-lg border border-[#E09210] max-w-xs z-10">
                <div className="font-heading font-bold text-lg uppercase leading-tight">
                  Direct Coordination
                </div>
                <div className="text-xs font-medium text-[#171C24]/80 mt-1">
                  Connect straight with our team for quick machinery scheduling.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Content & Value Overview */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E2E6EA] text-xs font-bold text-[#171C24] tracking-widest uppercase">
              ABOUT M.D FORKLIFT
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#171C24] leading-[1.05]">
              Supporting Industrial Operations With Reliable Machinery Solutions.
            </h2>

            <p className="text-base sm:text-lg text-[#626B75] leading-relaxed">
              M.D Forklift Cranes and Transport Services provides machinery and
              transportation solutions for industrial, construction and
              material-handling requirements. We aim to make equipment enquiries
              and service coordination simple and convenient for our customers.
            </p>

            {/* Core Operational Priorities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#E2E6EA] shadow-sm">
                <div className="p-2 bg-[#FEF6E9] rounded text-[#F5A623] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#171C24] uppercase">
                    Responsive Response
                  </h3>
                  <p className="text-xs text-[#626B75] mt-0.5">
                    Fast WhatsApp and phone coordination for project needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#E2E6EA] shadow-sm">
                <div className="p-2 bg-[#FEF6E9] rounded text-[#F5A623] mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#171C24] uppercase">
                    Industrial Focus
                  </h3>
                  <p className="text-xs text-[#626B75] mt-0.5">
                    Equipment suited for factories, yards, and warehouses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#E2E6EA] shadow-sm">
                <div className="p-2 bg-[#FEF6E9] rounded text-[#F5A623] mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#171C24] uppercase">
                    Multiple Services
                  </h3>
                  <p className="text-xs text-[#626B75] mt-0.5">
                    Forklifts, cranes, machinery movement, and transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#E2E6EA] shadow-sm">
                <div className="p-2 bg-[#FEF6E9] rounded text-[#F5A623] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#171C24] uppercase">
                    Strategic Hub
                  </h3>
                  <p className="text-xs text-[#626B75] mt-0.5">
                    Located at A Block Parking, Narela Industrial Area.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#171C24] bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] rounded shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

