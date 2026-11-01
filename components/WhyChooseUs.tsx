import React from "react";
import { ShieldCheck, Layers, PhoneCall, Truck, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Industrial Equipment Solutions",
    description:
      "Reliable machinery designed for industrial lifting, factory loading, and construction requirements across Delhi NCR.",
    icon: ShieldCheck,
  },
  {
    title: "Multiple Service Categories",
    description:
      "Integrated coverage encompassing forklift rentals, crane lifting services, heavy material positioning, and site transport.",
    icon: Layers,
  },
  {
    title: "Convenient Customer Enquiries",
    description:
      "Direct communication via direct phone calls and WhatsApp to simplify quotes and project coordination.",
    icon: PhoneCall,
  },
  {
    title: "Transportation Support",
    description:
      "Dedicated equipment transit and machinery movement solutions for seamless relocation between sites and facilities.",
    icon: Truck,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F4F5F7] border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E2E6EA] text-xs font-bold text-[#171C24] tracking-widest uppercase">
            RELIABILITY & STABILITY
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#171C24]">
            WHY WORK WITH M.D FORKLIFT?
          </h2>
          <p className="text-base sm:text-lg text-[#626B75]">
            A dedicated heavy equipment partner focused on straightforward
            coordination, factual machinery solutions, and accessible customer
            service.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-white border border-[#E2E6EA] hover:border-[#F5A623] rounded-md p-6 sm:p-7 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#FEF6E9] border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-[#171C24] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#626B75] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E6EA] flex items-center justify-between text-xs text-[#626B75]">
                  <span className="font-semibold text-gray-400">Pillar 0{index + 1}</span>
                  <span className="text-[#F5A623] font-bold uppercase tracking-wider">
                    M.D Service
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Consultation Banner */}
        <div className="mt-14 bg-[#171C24] text-white rounded-md p-8 sm:p-10 border border-[#293545] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide">
              Have a heavy lifting requirement today?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Talk directly with our Narela operations team to determine suitable machinery, availability, and pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-200"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919220893841"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1F2631] hover:bg-[#252D3A] border border-[#293545] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F5A623]" />
              <span>+91 9220893841</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

