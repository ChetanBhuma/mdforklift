import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessHighlights from "@/components/BusinessHighlights";
import About from "@/components/About";
import Services from "@/components/Services";
import Machinery from "@/components/Machinery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero Section (Most Important) */}
        <Hero />

        {/* 4. Business Highlights Strip */}
        <BusinessHighlights />

        {/* 5. About Us */}
        <About />

        {/* 6. Our Services (4 Cards) */}
        <Services />

        {/* 7. Our Machinery (JCB Telehandler & ACE Forklift) */}
        <Machinery />

        {/* 8. Why Choose Us (4 Benefits) */}
        <WhyChooseUs />

        {/* 9. Contact / WhatsApp Enquiry Section */}
        <Contact />

        {/* 10. Location Section with Interactive Map */}
        <Location />
      </main>

      {/* 11. Industrial Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp & Call dialer */}
      <FloatingContact />
    </div>
  );
}

