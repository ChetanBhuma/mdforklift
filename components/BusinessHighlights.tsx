import React from "react";
import { Truck, Anchor, Container, Cog, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    title: "Forklift Services",
    subtitle: "Warehouse & Yard Handling",
    icon: Truck,
    href: "#services",
  },
  {
    title: "Crane Services",
    subtitle: "Industrial Lifting Solutions",
    icon: Anchor,
    href: "#services",
  },
  {
    title: "Industrial Transportation",
    subtitle: "Material & Machine Movement",
    icon: Container,
    href: "#services",
  },
  {
    title: "Machinery Solutions",
    subtitle: "Equipment Enquiries & Rental",
    icon: Cog,
    href: "#machinery",
  },
];

export default function BusinessHighlights() {
  return (
    <section className="bg-[#1F2631] border-b border-[#293545] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 sm:p-4 bg-[#171C24] border border-[#293545] rounded hover:border-[#F5A623]/60 transition-all duration-200"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-[#293545] flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#171C24] transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-wide group-hover:text-[#F5A623] transition-colors truncate">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#F5A623] transition-colors hidden sm:block flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

