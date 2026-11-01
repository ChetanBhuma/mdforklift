"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What industrial areas in Delhi NCR do you serve?",
    answer:
      "Our primary hub is located at A-219 Narela DSIIDC Industrial Area. We provide daily equipment dispatch across Narela (all industrial blocks), Bawana Industrial Area, Kundli Industrial Area, Rai HSIIDC, Alipur, GT Karnal Road logistics corridors, and project sites across Delhi NCR.",
  },
  {
    question: "What machinery is available for rental and industrial lifting?",
    answer:
      "We provide industrial forklifts (such as ACE Forklifts for factory and warehouse material movement), high-reach JCB Telehandlers for telescopic reach and site positioning, hydra cranes for heavy machinery lifting, and heavy transport vehicles for machinery shifting.",
  },
  {
    question: "Can I rent equipment for short-term, daily, or long-term durations?",
    answer:
      "Yes. We offer flexible commercial arrangements to match your project timeline, including single-shift loading/unloading, multi-day rental, monthly lease contracts, and project-based transport coordination.",
  },
  {
    question: "How quickly can a forklift or crane be dispatched to my site in Narela?",
    answer:
      "Because our operational yard is situated right inside Narela DSIIDC Industrial Area, local dispatches within Narela can be coordinated rapidly upon confirming equipment availability. Nearby industrial clusters like Bawana and Kundli can also be reached with minimal transit delay.",
  },
  {
    question: "How do I request a quote or confirm machinery availability?",
    answer:
      "You can contact our operations desk directly by calling +91 9220893841 or +91 9213391241. Alternatively, you can submit your project requirements using our website form to generate an instant, pre-filled WhatsApp enquiry to +91 9220893841.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F4F5F7] border-b border-[#E2E6EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E2E6EA] text-xs font-bold text-[#171C24] tracking-widest uppercase">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#171C24]">
            ANSWERS ABOUT MACHINERY HIRE & TRANSPORT
          </h2>
          <p className="text-base sm:text-lg text-[#626B75]">
            Everything you need to know about renting forklifts, hiring cranes,
            and coordinating industrial equipment shifting in Delhi NCR.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E2E6EA] rounded-md overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#F5A623] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wide text-[#171C24]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F4F5F7] text-[#171C24] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FEF6E9] text-[#F5A623]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#626B75] leading-relaxed border-t border-[#F4F5F7]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Callout */}
        <div className="mt-12 p-6 bg-[#171C24] text-white rounded-md border border-[#293545] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#293545] text-[#F5A623] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg uppercase text-white">
                Have a specific lifting or transport question?
              </div>
              <div className="text-xs text-gray-400">
                Our operations team is available directly via phone or WhatsApp.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href="tel:+919220893841"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1F2631] hover:bg-[#293545] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#293545] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919220893841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F5A623] hover:bg-[#E09210] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#171C24]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

