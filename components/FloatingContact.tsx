"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, X } from "lucide-react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick contact shortcuts" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Quick Direct Voice Call Button */}
      <a
        href="tel:+919220893841"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#171C24] hover:bg-[#293545] text-white border border-[#293545] hover:border-[#F5A623] rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 group"
        aria-label="Call +91 9220893841 immediately"
        title="Call +91 9220893841"
      >
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline text-gray-200 group-hover:text-white">
          Call Now
        </span>
        <div className="w-8 h-8 rounded-full bg-[#293545] flex items-center justify-center text-[#F5A623]">
          <Phone className="w-4 h-4" />
        </div>
      </a>

      {/* Primary Floating WhatsApp Action */}
      <a
        href="https://wa.me/919220893841?text=Hello%20M.D%20Forklift%20Services%2C%20I%20would%20like%20to%20enquire%20about%20machinery%20availability%20and%20rates."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 group"
        aria-label="Send WhatsApp message to +91 9220893841"
      >
        <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="font-heading font-bold uppercase tracking-wider text-sm hidden sm:inline">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
}

