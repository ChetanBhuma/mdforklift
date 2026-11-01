"use client";

import React, { useState } from "react";
import { Phone, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2, Building, ShieldCheck } from "lucide-react";

interface FormState {
  fullName: string;
  phoneNumber: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phoneNumber: "",
    service: "Forklift Services",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s\-\(\)\+]/g, "");
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select the required service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide details about your machinery requirement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build properly formatted and URL-encoded WhatsApp message
    const formattedMessage =
      `*New Machinery Enquiry - M.D Forklift Cranes & Transport Services*\n\n` +
      `👤 *Name:* ${formData.fullName.trim()}\n` +
      `📞 *Phone:* ${formData.phoneNumber.trim()}\n` +
      `🏗️ *Service Required:* ${formData.service}\n` +
      `📝 *Project Requirements:* ${formData.message.trim()}\n\n` +
      `_Sent from website enquiry form_`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919220893841?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#171C24] text-white border-b border-[#293545] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1F2631] border border-[#293545] text-xs font-bold text-[#F5A623] tracking-widest uppercase">
                DIRECT ENQUIRIES & SUPPORT
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                LET&apos;S MOVE YOUR PROJECT FORWARD.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Looking for forklift, crane or transportation services? Contact
                our team to discuss your requirements.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Primary Contact Phone */}
              <a
                href="tel:+919220893841"
                className="flex items-center gap-4 p-4 bg-[#1F2631] border border-[#293545] hover:border-[#F5A623] rounded-md transition-all group"
              >
                <div className="w-12 h-12 rounded bg-[#293545] flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#171C24] transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Primary Contact Number
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors">
                    +91 9220893841
                  </div>
                  <div className="text-[11px] text-[#25D366] font-medium mt-0.5 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp Available on this number</span>
                  </div>
                </div>
              </a>

              {/* Alternate Contact Phone */}
              <a
                href="tel:+919213391241"
                className="flex items-center gap-4 p-4 bg-[#1F2631] border border-[#293545] hover:border-[#F5A623] rounded-md transition-all group"
              >
                <div className="w-12 h-12 rounded bg-[#293545] flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-[#171C24] transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Alternate Contact Number
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                    +91 9213391241
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Voice calls & project enquiries
                  </div>
                </div>
              </a>

              {/* Business Location Address */}
              <div className="flex items-start gap-4 p-4 bg-[#1F2631] border border-[#293545] rounded-md">
                <div className="w-12 h-12 rounded bg-[#293545] flex items-center justify-center text-[#F5A623] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Operating Facility Address
                  </div>
                  <div className="text-base font-semibold text-white mt-1 leading-snug">
                    Narela Industrial Area, A Block Parking, Delhi, India.
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Hub for machinery dispatch and coordination
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Integrity Banner */}
            <div className="p-3 bg-[#1F2631]/60 border border-[#293545] rounded text-xs text-gray-400 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
              <span>
                Direct communication with no middleman margins. Fast pricing based on specific machine and project scope.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1F2631] border border-[#293545] rounded-md p-6 sm:p-10 shadow-2xl relative">
              {/* Form Title */}
              <div className="border-b border-[#293545] pb-5 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-white">
                    Submit Machine Enquiry
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#25D366]/10 text-[#25D366] text-xs font-semibold border border-[#25D366]/30">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill in your details to immediately generate and launch a pre-formatted WhatsApp enquiry to our team.
                </p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-[#25D366]/10 border border-[#25D366]/40 rounded-md flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-gray-200">
                    <span className="font-bold text-white">WhatsApp chat triggered!</span> If WhatsApp didn’t open automatically, you can also message or call directly at{" "}
                    <a href="tel:+919220893841" className="text-[#F5A623] underline font-semibold">
                      +91 9220893841
                    </a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Full Name <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Ramesh Kumar / Site In-charge"
                    className={`w-full px-4 py-3 bg-[#171C24] border ${
                      errors.fullName ? "border-red-500" : "border-[#293545]"
                    } focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] rounded text-white text-sm placeholder-gray-500 transition-colors outline-none`}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    required
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Phone Number <span className="text-[#F5A623]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 bg-[#171C24] border ${
                      errors.phoneNumber ? "border-red-500" : "border-[#293545]"
                    } focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] rounded text-white text-sm placeholder-gray-500 transition-colors outline-none`}
                    aria-invalid={errors.phoneNumber ? "true" : "false"}
                    aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                    required
                  />
                  {errors.phoneNumber && (
                    <p id="phoneNumber-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Service Required <span className="text-[#F5A623]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full px-4 py-3 bg-[#171C24] border ${
                      errors.service ? "border-red-500" : "border-[#293545]"
                    } focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] rounded text-white text-sm transition-colors outline-none`}
                  >
                    <option value="Forklift Services">Forklift Services (Warehouse & Industrial)</option>
                    <option value="Crane Services">Crane Services (Lifting & Construction)</option>
                    <option value="Heavy Equipment Handling">Heavy Equipment Handling & Positioning</option>
                    <option value="Transportation Services">Transportation Services (Machinery Movement)</option>
                    <option value="Other Machinery Enquiry">Other Industrial Equipment Enquiry</option>
                  </select>
                </div>

                {/* Message / Project Requirements Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Message / Requirements <span className="text-[#F5A623]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your requirement (e.g. lift weight, duration, site location in Delhi NCR)..."
                    className={`w-full px-4 py-3 bg-[#171C24] border ${
                      errors.message ? "border-red-500" : "border-[#293545]"
                    } focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] rounded text-white text-sm placeholder-gray-500 transition-colors outline-none resize-y`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#171C24] bg-[#F5A623] hover:bg-[#E09210] active:bg-[#C87F08] disabled:opacity-50 rounded shadow-amber transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-[#171C24]" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center mt-3">
                    Submitting opens WhatsApp with your pre-filled enquiry to primary company number <span className="text-[#F5A623] font-semibold">+91 9220893841</span>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

