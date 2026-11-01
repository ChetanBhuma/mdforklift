"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Info, Check, MessageSquare } from "lucide-react";

const machineryList = [
  {
    id: "jcb-telehandler",
    machineNumber: "MACHINERY 01",
    name: "JCB Telehandler",
    category: "Telescopic Material Handling Equipment",
    description:
      "Designed for lifting and material-handling applications where reach and lifting capability are required.",
    imageSrc: "/images/jcb-telehandler.jpg",
    aspectRatio: "square",
    keyHighlights: [
      "Extended forward reach and elevation",
      "Robust heavy lifting capability",
      "Suited for construction & yard operations",
    ],
    serviceValue: "Crane Services",
  },
  {
    id: "ace-forklift",
    machineNumber: "MACHINERY 02",
    name: "ACE Forklift",
    category: "Industrial Forklift",
    description:
      "Suitable for material handling and movement requirements in warehouses and industrial environments.",
    imageSrc: "/images/ace-forklift.jpg",
    aspectRatio: "wide",
    keyHighlights: [
      "Palletized material transport",
      "Smooth indoor/outdoor yard navigation",
      "Ideal for warehouse & factory staging",
    ],
    serviceValue: "Forklift Services",
  },
];

export default function Machinery() {
  return (
    <section id="machinery" className="py-16 sm:py-24 bg-[#171C24] text-white border-b border-[#293545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1F2631] border border-[#293545] text-xs font-bold text-[#F5A623] tracking-widest uppercase">
            MACHINERY FLEET REFERENCE
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            OUR MACHINERY
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Equipment for Your Industrial Requirements.
          </p>
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {machineryList.map((machine) => (
            <div
              key={machine.id}
              className="bg-[#1F2631] border border-[#293545] hover:border-[#F5A623]/80 rounded-md overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Image Frame Container */}
              <div className="relative w-full bg-[#0F1217] p-4 sm:p-6 flex items-center justify-center border-b border-[#293545]">
                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#171C24]/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#F5A623] border border-[#293545] font-heading tracking-wider">
                  {machine.machineNumber}
                </div>

                <div className="relative w-full h-64 sm:h-80 overflow-hidden flex items-center justify-center">
                  <Image
                    src={machine.imageSrc}
                    alt={`${machine.name} - ${machine.category}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>

              {/* Machinery Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F5A623] mb-1">
                    {machine.category}
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide text-white mb-3">
                    {machine.name}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {machine.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {machine.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-[#293545] text-[#F5A623] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-[#293545] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/919220893841?text=Hello%2C%20I%20am%20enquiring%20about%20machinery%20availability%20for%20my%20industrial%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#171C24] hover:bg-[#252D3A] border border-[#293545] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Reference Photography Notice */}
        <div className="mt-8 p-4 bg-[#1F2631] border border-[#293545] rounded flex items-start gap-3">
          <Info className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Notice regarding machinery availability:</span>{" "}
            These are reference machinery photographs representing our fleet capabilities. Specific machine availability, operational suitability, and equipment scheduling are confirmed directly upon enquiry by our operations desk in Narela.
          </div>
        </div>
      </div>
    </section>
  );
}

