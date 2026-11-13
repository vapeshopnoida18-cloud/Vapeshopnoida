"use client";

import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: "Where can I buy disposable vape online in Noida?",
      a: "You can buy 100% authentic disposable vapes online directly from Vape Shop in Noida (vapeshopinnoida.com). We stock original Elf Bar, Geek Bar, Lost Mary, IGET, and Yuoto devices with 30-45 minutes free express doorstep delivery across all sectors of Noida and Delhi NCR.",
    },
    {
      q: "Which is the best vape shop in Noida?",
      a: "Vape Shop in Noida is rated the #1 most trusted vape store in Noida. Operating from Sector 76 Amarpali Silicon City, we guarantee 100% authentic products with verifiable anti-counterfeit scratch-off QR codes, instant doorstep UPI payment, and the fastest 30-45 minute free delivery fleet in Noida.",
    },
    {
      q: "What vape brands are available at Vape Shop in Noida?",
      a: "We stock an extensive collection of leading international vape brands including EBCREATE (Elf Bar), Geek Bar (Pulse & Burj 80000), Lost Mary, IGET (Move & Pro), Yuoto, Crown Bar 40K, Voopoo, Vaporesso, and premium imported nicotine salts like Nasty Juice and Elfliq.",
    },
    {
      q: "Where is your store located in Noida?",
      a: "Our local store is located at Shop no 38,39, Lower Ground Floor, Street 76 Market, Amarpali Silicon City, Sector 76, Noida. From this central fulfillment hub, we deliver authentic disposable vapes, pod mods, coils, and imported nic salts across all sectors of Noida, Greater Noida, and Delhi NCR.",
    },
    {
      q: "How fast is express delivery across Noida sectors?",
      a: "Orders are dispatched within 10-15 minutes of WhatsApp order confirmation. Doorstep delivery to Sector 18, Sector 62, Sector 50, Sector 75, Sector 76, and Sector 104 takes just 30 to 45 minutes with 100% free delivery. Deliveries to Greater Noida, Expressway, and Ghaziabad arrive within 40 to 50 minutes.",
    },
    {
      q: "Are all vape products 100% genuine with scratch QR verification?",
      a: "Yes, absolutely. Every device arrives in original brand-sealed shrink-wrap with an authentic manufacturer anti-counterfeit scratch-off QR code. You can verify the 16-digit security key instantly on the brand portal before unboxing.",
    },
    {
      q: "What payment methods are supported for doorstep orders?",
      a: "We support seamless, instant digital payments via UPI (Google Pay, PhonePe, Paytm, BHIM QR scan) upon order arrival at your doorstep. Delivery across Noida is completely free on all orders.",
    },
    {
      q: "Do you deliver to Greater Noida, Ghaziabad, and Delhi NCR?",
      a: "Yes. Along with our 30-45 minute express delivery in Noida, our fleet provides fast same-day delivery to Pari Chowk, Greater Noida West (Noida Extension), Indirapuram, Vaishali, Vasundhara, Mayur Vihar, and Gurugram.",
    },
    {
      q: "How do I place an order or check stock availability?",
      a: "You can place orders directly by adding products to your cart or messaging our dedicated WhatsApp helpline at +91 80531 17437. Our customer team responds instantly with flavor options, live stock, and delivery estimates.",
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
      id="faq-section"
      aria-label="Frequently Asked Questions"
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
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Everything You Need to Know About Ordering &amp; Delivery
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Find answers to common questions about authenticity verification, delivery timings, accepted payment methods, and sector coverage in Noida.
          </p>
        </div>

        {/* FAQs Accordion */}
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
            <span>Still Have Questions?</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20have%20a%20question%20about%20ordering%20in%20Noida.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#325f98] font-semibold hover:underline"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat on WhatsApp Helpline (+91 80531 17437)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
