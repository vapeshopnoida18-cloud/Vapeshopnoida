"use client";

import { useState } from "react";
import Link from "next/link";
import { FiStar, FiCheckCircle, FiMapPin, FiPackage, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeReviews() {
  const [activeFilter, setActiveFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Rohit Sharma",
      location: "Sector 18, Noida",
      sector: "sector-18",
      product: "Geek Bar Burj 80000",
      rating: 5,
      time: "Yesterday",
      title: "Fastest delivery in Atta Market, 100% authentic QR code!",
      comment:
        "Ordered the Geek Bar Burj 80000 puffs on WhatsApp. The rider reached Sector 18 Atta Market in just 28 minutes. Scratched the QR code on the spot and verified it on the official Geek Bar website. Zero hassle, paid via Google Pay after inspecting. Best Vape Shop in Noida!",
    },
    {
      id: 2,
      name: "Karan Malhotra",
      location: "Sector 76 Silicon City, Noida",
      sector: "sector-76",
      product: "Lost Mary Mega 70000",
      rating: 5,
      time: "2 days ago",
      title: "Discreet packaging & instant delivery in 18 minutes",
      comment:
        "Since the store is located in Sector 76, delivery was super quick—under 20 minutes! The box was completely sealed in plain tamper-evident packaging. Lost Mary 70K flavor is incredibly smooth. Highly recommend Vape Shop Noida for genuine stock.",
    },
    {
      id: 3,
      name: "Pooja V.",
      location: "Sector 62 (Electronic City), Noida",
      sector: "sector-62",
      product: "EBCREATE BC5000 (US Edition)",
      rating: 5,
      time: "3 days ago",
      title: "Smooth delivery to corporate office, genuine Elf Bar",
      comment:
        "Got it delivered to my IT office reception in Sector 62. Delivery was free and rider was polite. Dual mesh coil gives amazing flavor. Truly appreciate the instant UPI option and verifiable anti-counterfeit QR code.",
    },
    {
      id: 4,
      name: "Siddharth Verma",
      location: "Sector 104 (Starling Mall), Noida",
      sector: "sector-104",
      product: "Yuoto Digi 15000",
      rating: 5,
      time: "4 days ago",
      title: "Great taste & genuine device in Sector 104",
      comment:
        "I was hanging out at Sector 104 high street cafe and urgently needed a disposable pod. Messaged their WhatsApp helpline, got flavor options instantly, and had it delivered within 30 minutes. 100% original product with scratch security code.",
    },
    {
      id: 5,
      name: "Ankit Tiwari",
      location: "Jaypee Wish Town, Sector 128, Noida",
      sector: "sector-128",
      product: "Voopoo Drag H40 Pod Mod",
      rating: 5,
      time: "5 days ago",
      title: "Delivered straight to Jaypee Wish Town gate",
      comment:
        "Living along the Noida Expressway, usually deliveries take hours. Vape Shop Noida rider delivered in 35 minutes directly to Klassic Towers gate. Authentic Voopoo kit, factory shrink-wrapped. Paid via PhonePe UPI.",
    },
    {
      id: 6,
      name: "Deepak Gupta",
      location: "Gaur City, Noida Extension",
      sector: "noida-extension",
      product: "IGET Move 50000 Puffs",
      rating: 5,
      time: "1 week ago",
      title: "Best vape shop near me with Greater Noida West delivery",
      comment:
        "Hard to find original IGET 50K dual flavor devices in Greater Noida West. Vape Shop Noida delivered to Gaur City 2 in 40 minutes with zero delivery charge. Official scratch code verified genuine. Will order regularly!",
    },
  ];

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((r) => r.sector === activeFilter);

  // Schema.org Review & AggregateRating JSON-LD
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Vape Shop in Noida",
    url: "https://vapeshopinnoida.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      datePublished: "2025-01-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.comment,
    })),
  };

  return (
    <section
      aria-label="Customer Reviews & Ratings for Vape Shop Noida"
      className="site-section site-container"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] sm:text-xs font-semibold mb-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold">4.9 / 5.0</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-normal">Based on 1,280+ Verified Buyers</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Customer Reviews – Vape Shop Noida
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
              Real feedback from verified buyers across Sector 18, Sector 62, Sector 76, Sector 104, Expressway &amp; NCR enjoying 30-45 mins free delivery.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl px-3.5 py-2 text-center">
              <span className="text-xs font-bold text-emerald-700 block">100% Genuine</span>
              <span className="text-[10px] text-emerald-600">Scratch QR Verified</span>
            </div>
            <div className="bg-blue-50 border border-blue-200/60 rounded-xl px-3.5 py-2 text-center">
              <span className="text-xs font-bold text-[#325f98] block">30-45 Mins</span>
              <span className="text-[10px] text-[#325f98]/80">Free Noida Express</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("sector-18")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "sector-18"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sector 18 Atta Market
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("sector-76")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "sector-76"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sector 76 Silicon City
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("sector-62")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "sector-62"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sector 62 Electronic City
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("sector-104")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "sector-104"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sector 104 High Street
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("sector-128")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "sector-128"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sector 128 Wish Town
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("noida-extension")}
            className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
              activeFilter === "noida-extension"
                ? "bg-[#325f98] text-white shadow-xs"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Gaur City (Ext)
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50/60 hover:bg-gray-50 rounded-2xl border border-gray-200/80 p-4 sm:p-5 flex flex-col justify-between transition-all hover:border-[#325f98]/40 hover:shadow-xs"
            >
              <div>
                {/* Rating & Time */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {review.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 leading-snug">
                  {review.title}
                </h3>

                {/* Comment */}
                <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Product Meta */}
              <div className="pt-3 border-t border-gray-200/70">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-gray-900 truncate">
                        {review.name}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/60 shrink-0">
                        <FiCheckCircle className="w-2.5 h-2.5" />
                        Verified
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                      <FiMapPin className="w-3 h-3 text-[#325f98] shrink-0" />
                      {review.location}
                    </span>
                  </div>

                  {/* Device Tag */}
                  <span className="text-[10px] text-gray-700 font-medium bg-white px-2 py-1 rounded-lg border border-gray-200 shrink-0 truncate max-w-[120px]">
                    {review.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-gray-700">
              Have you ordered with Vape Shop Noida? Share your experience with us!
            </span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20share%20my%20review%20and%20feedback.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Leave a Review on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

