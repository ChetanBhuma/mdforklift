import React from "react";
import { MapPin, Navigation, CheckCircle2, ArrowRight } from "lucide-react";

const hubs = [
  {
    name: "Narela DSIIDC Industrial Area",
    role: "Primary Operational Base",
    tag: "Immediate Dispatch",
    description: "Full fleet availability for all blocks (A, B, C, D) and surrounding manufacturing clusters.",
  },
  {
    name: "Bawana Industrial Area",
    role: "Adjacent Industrial Hub",
    tag: "Fast Transit",
    description: "Daily machinery coordination for plastic, engineering, and manufacturing factories in Bawana.",
  },
  {
    name: "Kundli Industrial Area",
    role: "Sonipat / Delhi Border",
    tag: "High Priority Route",
    description: "Equipment support for logistics parks, packaging units, and cold storage facilities.",
  },
  {
    name: "Rai Industrial Area (HSIIDC)",
    role: "GT Karnal Corridor",
    tag: "Regular Service",
    description: "Crane and telehandler shifting services for food processing, fabrication, and export units.",
  },
  {
    name: "Alipur & GT Road Corridor",
    role: "North Delhi Logistics Belt",
    tag: "Direct Transit",
    description: "Forklift and yard unloading support for warehouses, transport yards, and freight terminals.",
  },
  {
    name: "Greater Delhi NCR",
    role: "Project-Based Shifting",
    tag: "Scheduled Jobs",
    description: "Heavy machinery transportation, long-term crane deployment, and industrial shifting across NCR.",
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FEF6E9] text-xs font-bold text-[#F5A623] tracking-widest uppercase">
            LOCAL COVERAGE & SERVICE NETWORK
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#171C24]">
            SERVICING KEY INDUSTRIAL HUBS ACROSS DELHI NCR
          </h2>
          <p className="text-base sm:text-lg text-[#626B75]">
            Strategically located at A-219 Narela DSIIDC to provide prompt equipment
            dispatch and reliable machinery transportation across North Delhi and neighboring Haryana industrial clusters.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F4F5F7] hover:bg-[#171C24] border border-[#E2E6EA] hover:border-[#F5A623] rounded-md transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-white group-hover:bg-[#1F2631] border border-[#E2E6EA] group-hover:border-[#293545] flex items-center justify-center text-[#F5A623] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#FEF6E9] group-hover:bg-[#1F2631] text-[#F5A623] rounded border border-[#F5A623]/20">
                    {hub.tag}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-gray-500 group-hover:text-gray-400 uppercase tracking-wider mb-1">
                  {hub.role}
                </div>

                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-[#171C24] group-hover:text-white transition-colors mb-2">
                  {hub.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#626B75] group-hover:text-gray-300 leading-relaxed transition-colors">
                  {hub.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E6EA] group-hover:border-[#293545] flex items-center justify-between text-xs font-semibold text-[#171C24] group-hover:text-[#F5A623] transition-colors">
                <span>Check Equipment Availability</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Local Dispatch Guarantee Strip */}
        <div className="mt-10 p-5 bg-[#171C24] text-white rounded-md border border-[#293545] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <CheckCircle2 className="w-5 h-5 text-[#25D366] flex-shrink-0" />
            <div className="text-xs sm:text-sm text-gray-300">
              <span className="font-bold text-white">Located outside these primary zones?</span>{" "}
              We handle long-distance industrial machinery transit and project deployments across Haryana, UP, and Rajasthan borders upon request.
            </div>
          </div>
          <a
            href="https://wa.me/919220893841?text=Hello%20M.D%20Forklift%2C%20I%20need%20machinery%20availability%20for%20my%20industrial%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5A623] hover:bg-[#E09210] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            <span>Confirm Site Coverage</span>
          </a>
        </div>
      </div>
    </section>
  );
}

