"use client";

import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: "Where is the best authentic Vape Shop in Noida?",
      a: "Vape Shop in Noida is headquartered in Sector 76, Amarpali Silicon City. We offer 100% authentic disposable vapes (up to 80,000 puffs), refillable pod mods, replacement coils, and imported nic salts with 60-90 minutes express home delivery across all sectors of Noida and Greater Noida.",
    },
    {
      q: "Is there an authentic vape shop near me in Noida with home delivery?",
      a: "Yes! If you are searching for a 'vape shop near me' or 'buy vape near me' in Noida, Vape Shop in Noida provides superfast 60-90 minutes express doorstep delivery across all sectors including Sector 15, 18 (Atta Market), Sector 50, Sector 62, Sector 76, Sector 137, Noida Expressway, and Greater Noida with Cash on Delivery (COD).",
    },
    {
      q: "How fast is vape delivery across Noida sectors and Greater Noida?",
      a: "Orders are dispatched within 15 minutes of confirmation. Deliveries to Sector 76, Sector 50, and central Noida arrive in 30-45 minutes. Deliveries to Sector 18 (Atta Market), Sector 62 (Electronic City), Sector 137, Noida Expressway, and Greater Noida arrive within 60 to 90 minutes.",
    },
    {
      q: "Can I order vapes online in Noida with Cash on Delivery (COD)?",
      a: "Yes! 100% of orders placed at Vape Shop in Noida are eligible for Cash on Delivery (COD) or doorstep digital UPI (Google Pay, PhonePe, Paytm). You only pay after inspecting the package at your doorstep.",
    },
    {
      q: "Are all vape devices 100% genuine with factory scratch QR codes?",
      a: "Yes, every disposable vape and pod kit from Geek Bar, Elf Bar, Lost Mary, Yuoto, Voopoo, and Vaporesso comes in factory shrink-wrapped packaging with an authentic scratch-off QR verification code that you can verify directly on the official brand website.",
    },
    {
      q: "Is vaping legal in Noida and Greater Noida?",
      a: "India's Electronic Cigarettes Act, 2019 prohibits the sale, distribution, import and advertising of e-cigarettes. These statutory health notices and regulations apply throughout Noida, Greater Noida, and Delhi NCR.",
    },
    {
      q: "Do vape delivery regulations apply in Noida Sector 18, Sector 62 and Sector 137?",
      a: "India's national e-cigarette legislation applies across all Noida sectors, including Sector 18, Sector 62, Sector 137, Noida Expressway, and Greater Noida.",
    },
    {
      q: "Where can I find reliable vaping health and safety guidance in Noida?",
      a: "For authentic information about e-cigarette risks, nicotine dependence, and cessation support, consult India's National Tobacco Control Programme or a certified healthcare practitioner.",
    },
  ];

  // Schema.org FAQPage Structured Data for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions - Vape Shop Noida"
      className="site-section site-container"
    >
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-9">
          <span className="text-[11px] sm:text-xs font-bold text-[#325f98] uppercase tracking-widest block mb-1.5">
            FAQS
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Vape Shop Noida – Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Find answers to common questions about Vape Shop Noida searches,
            e-cigarette regulations, vaping restrictions and health information
            across Noida, Greater Noida and Delhi NCR.
          </p>
        </div>

        {/* 6 FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-gray-50/70 border-[#325f98]/40 shadow-xs"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`text-xs sm:text-sm font-extrabold shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#325f98] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#325f98]/10 text-[#325f98]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <div className="pl-10 sm:pl-11 pr-2 pt-1 border-t border-gray-200/60">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mt-2.5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Micro-Bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 font-medium">
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Have More Questions?</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20I%20have%20a%20question%20about%20delivery%20in%20my%20sector.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#325f98] font-semibold hover:underline"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat on WhatsApp Helpline (+91 81687 38374)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

