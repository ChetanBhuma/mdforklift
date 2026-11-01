import React from "react";
import { MapPin, Navigation, ExternalLink, Phone, Shield } from "lucide-react";

export default function Location() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Narela+Industrial+Area+A+Block+Parking+Delhi+India";

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FEF6E9] text-xs font-bold text-[#F5A623] tracking-widest uppercase">
            PHYSICAL FACILITY
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#171C24]">
            FIND OUR LOCATION
          </h2>
          <p className="text-base sm:text-lg text-[#626B75]">
            Centrally situated in Narela Industrial Area to support machinery
            requirements and rapid dispatch across North Delhi and NCR.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Facility Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4F5F7] border border-[#E2E6EA] rounded-md p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#171C24] text-[#F5A623] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Operational Base
                  </div>
                  <h3 className="font-heading font-bold text-2xl uppercase text-[#171C24] mt-1">
                    Narela Industrial Area
                  </h3>
                  <p className="text-sm text-[#626B75] mt-1 font-medium">
                    A Block Parking, Delhi, India.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E2E6EA] pt-5 space-y-3 text-xs sm:text-sm text-[#626B75]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                  <span>Heavy vehicle parking and equipment parking zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                  <span>Direct highway accessibility for equipment transit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                  <span>Serving industrial factories, yards & warehouses</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E2E6EA] rounded">
                <div className="text-xs font-bold uppercase text-[#171C24] mb-2 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#F5A623]" />
                  <span>Dispatch & Coordination Contacts</span>
                </div>
                <div className="space-y-1 text-sm font-semibold text-[#171C24]">
                  <div>+91 9220893841 (WhatsApp / Calls)</div>
                  <div>+91 9213391241 (Direct Calls)</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E2E6EA]">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#171C24] hover:bg-[#293545] active:bg-[#0F1217] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-[#F5A623]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed Frame */}
          <div className="lg:col-span-7 bg-[#171C24] p-3 rounded-md border border-[#293545] shadow-md flex flex-col min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full flex-1 rounded overflow-hidden bg-[#1F2631]">
              <iframe
                title="M.D Forklift Cranes & Transport Services Location Map - Narela Industrial Area Delhi"
                src="https://maps.google.com/maps?q=Narela+Industrial+Area+A+Block+Parking+Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />
            </div>
            <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                Narela Industrial Area, A Block Parking, Delhi
              </span>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] hover:underline font-semibold"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

