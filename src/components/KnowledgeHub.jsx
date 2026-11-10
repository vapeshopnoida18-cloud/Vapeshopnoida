import Image from "next/image";
import Link from "next/link";
import { FiClock, FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function KnowledgeHub() {
  const articles = [
    {
      id: 1,
      category: "Buyer's Guide",
      categoryColor: "bg-blue-600 text-white",
      readTime: "6 min read",
      date: "January 2026",
      author: "By Product Curators",
      title: "Top 7 Best Disposable Vapes in Noida (2026 Edition)",
      desc: "Explore top-rated high-puff disposable vapes featuring Geek Bar Burj, Lost Mary, and Elf Bar with dual mesh flavor.",
      image: "/products/geek-bar-burj-80000-disposable-vape-noida.webp",
      href: "/products?category=disposable",
      alt: "Top 7 Best Disposable Vapes in Noida 2026 Guide - Vape Shop Noida",
    },
    {
      id: 2,
      category: "Authenticity & Safety",
      categoryColor: "bg-emerald-600 text-white",
      readTime: "5 min read",
      date: "January 2026",
      author: "By Quality & Safety Team",
      title: "How to Verify Authentic Vapes with Scratch-Off QR Code",
      desc: "Avoid fake clones and counterfeit e-cigarettes with our step-by-step 16-digit manufacturer holographic security check.",
      image: "/vapes-in-noida.png",
      href: "/#verification-guide",
      alt: "How to Verify Authentic Vapes with Scratch QR Code - Vape Shop in Noida",
    },
    {
      id: 3,
      category: "Delivery & Service",
      categoryColor: "bg-indigo-600 text-white",
      readTime: "4 min read",
      date: "January 2026",
      author: "By Noida Logistics Desk",
      title: "Fastest 30-45 Minute Vape Delivery Across Noida Sectors",
      desc: "Need your disposable vape or pod kit urgently? Discover our express rider network covering Sector 18, 62, 76 & Expressway.",
      image: "/herobanner/banner3.webp",
      href: "/vape-delivery/sector-76-noida",
      alt: "Fastest Express 30-45 Mins Vape Delivery Across Noida Sectors",
    },
    {
      id: 4,
      category: "Laws & Awareness",
      categoryColor: "bg-slate-700 text-white",
      readTime: "5 min read",
      date: "January 2026",
      author: "By Legal & Compliance Desk",
      title: "Vaping Regulations, Age Verification & Safety in India",
      desc: "A comprehensive guide to statutory health rules, mandatory 21+ adult age verification, and consumer safety guidance.",
      image: "/herobanner/banner2.webp",
      href: "/#legal-info",
      alt: "Vaping Regulations, Age Verification and Safety Guide in India",
    },
  ];

  return (
    <section
      id="knowledge-hub"
      aria-label="Vape Guides and Local Buyer Insights"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-5 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#325f98] text-[11px] sm:text-xs font-semibold mb-2">
              <FiBookOpen className="w-3.5 h-3.5" />
              <span>VAPING KNOWLEDGE HUB</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Latest Vape Guides &amp; Noida Buyer Insights
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
              Authentic scratch QR verification steps, 2026 top disposable vapes, and 30-45 min doorstep delivery guides curated for Noida buyers.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#325f98] hover:text-[#254977] bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full border border-gray-200/80 transition-colors shrink-0 group"
          >
            <span>Explore All Products</span>
            <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid - Exact match to user screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {articles.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group bg-white rounded-2xl border border-gray-200/80 hover:border-[#325f98]/40 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden text-left"
            >
              {/* Card Image Banner with Category Badge & Read Time */}
              <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-slate-950/40" />

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-xs uppercase tracking-wide ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Bottom Read Time Pill */}
                <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  <FiClock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta: Date & Author */}
                  <div className="text-[11px] text-gray-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="truncate">{item.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#325f98] transition-colors leading-snug mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal line-clamp-2 mb-3">
                    {item.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#325f98] group-hover:text-[#254977]">
                  <span>Read Full Guide</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

