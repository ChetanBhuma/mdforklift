import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#171C24] text-white text-xs border-b border-[#293545] py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Industrial Capability Announcement */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          <span className="text-gray-300 font-medium tracking-wide">
            Industrial Equipment | Forklift | Crane | Transportation Services
          </span>
        </div>

        {/* Right: Quick Direct Contact Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <div className="hidden md:flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Narela Industrial Area, Delhi</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919220893841"
              className="flex items-center gap-1 text-[#F5A623] hover:text-[#E09210] transition-colors"
              title="Call primary contact"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9220893841</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="tel:+919213391241"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              title="Call alternate contact"
            >
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              <span>+91 9213391241</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

