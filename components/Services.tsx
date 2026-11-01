import React from "react";
import { Truck, Anchor, Box, Navigation, ArrowRight } from "lucide-react";

const services = [
  {
    id: "forklift-services",
    title: "Forklift Services",
    description:
      "Forklift equipment solutions for warehouse, industrial and material-handling requirements.",
    icon: Truck,
    category: "Warehouse & Yard Operations",
  },
  {
    id: "crane-services",
    title: "Crane Services",
    description:
      "Machinery and lifting service enquiries for industrial and construction requirements.",
    icon: Anchor,
    category: "Lifting & Construction",
  },
  {
    id: "heavy-equipment-handling",
    title: "Heavy Equipment Handling",
    description:
      "Equipment handling solutions for moving and positioning heavy materials.",
    icon: Box,
    category: "Positioning & Machinery",
  },
  {
    id: "transportation-services",
    title: "Transportation Services",
    description:
      "Transportation solutions for industrial equipment and material movement.",
    icon: Navigation,
    category: "Logistics & Delivery",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FEF6E9] text-xs font-bold text-[#F5A623] tracking-widest uppercase">
            OUR CORE SERVICES
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#171C24]">
            Industrial Machinery & Transport Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#626B75]">
            Comprehensive equipment rental and logistics solutions designed to
            meet industrial standards across Delhi and NCR.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#F4F5F7] hover:bg-[#171C24] border border-[#E2E6EA] hover:border-[#F5A623] rounded-md p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-white group-hover:bg-[#1F2631] border border-[#E2E6EA] group-hover:border-[#293545] flex items-center justify-center text-[#F5A623] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-gray-300 group-hover:text-[#F5A623]/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider mb-2">
                    {service.category}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#171C24] group-hover:text-white transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#626B75] group-hover:text-gray-300 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA Link */}
                <div className="mt-8 pt-4 border-t border-[#E2E6EA] group-hover:border-[#293545] transition-colors">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171C24] group-hover:text-[#F5A623] transition-colors"
                  >
                    <span>Enquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Coordination Notice */}
        <div className="mt-12 p-4 bg-[#F4F5F7] border border-[#E2E6EA] rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-[#626B75]">
            <span className="font-bold text-[#171C24]">Looking for a customized service bundle?</span>{" "}
            Contact our operations desk to discuss lifting weight, duration, and site accessibility.
          </div>
          <a
            href="tel:+919220893841"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#171C24] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#293545] transition-colors"
          >
            <span>Call +91 9220893841</span>
          </a>
        </div>
      </div>
    </section>
  );
}

