import Link from "next/link";
import { FiShield, FiClock, FiPackage, FiCreditCard, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function SeoIntro() {
  const whatsappUrl =
    "https://wa.me/918168738374?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20order%20vapes%20in%20Noida.";

  const trendingCategories = [
    { name: "Disposable Vapes", count: "5000+ Puffs", href: "/products?category=disposable" },
    { name: "Pod Systems & Kits", count: "Refillable", href: "/products?category=pods" },
    { name: "Nic Salts & E-Liquids", count: "Top Flavors", href: "/products?category=eliquids" },
    { name: "Replacement Coils", count: "Original", href: "/products?category=coils" },
  ];

  const bentoFeatures = [
    {
      id: 1,
      title: "100% Authentic Guarantee",
      desc: "Every device features an official scratch-and-verify QR authentication code. Zero clones, zero fakes.",
      icon: FiShield,
      iconColor: "text-[#325f98]",
      bgHover: "hover:border-[#325f98]/40",
      pill: "Verified Stock",
    },
    {
      id: 2,
      title: "60-90 Min Express Fleet",
      desc: "Dedicated local riders stationed across Noida Sector 18, 62, 76, 137 & Greater Noida for rapid delivery.",
      icon: FiClock,
      iconColor: "text-emerald-600",
      bgHover: "hover:border-emerald-500/40",
      pill: "Superfast Noida",
    },
    {
      id: 3,
      title: "100% Discreet Packaging",
      desc: "Delivered in plain, unmarked, tamper-evident sealed packaging to protect your privacy completely.",
      icon: FiPackage,
      iconColor: "text-indigo-600",
      bgHover: "hover:border-indigo-500/40",
      pill: "Total Privacy",
    },
    {
      id: 4,
      title: "Doorstep COD & Instant UPI",
      desc: "Convenient payment options at your doorstep. Inspect your package and pay via Cash or any UPI app.",
      icon: FiCreditCard,
      iconColor: "text-amber-600",
      bgHover: "hover:border-amber-500/40",
      pill: "Flexible Pay",
    },
  ];

  return (
    <section
      aria-label="About Vape Shop Noida - Authentic Devices & Express Delivery"
      className="site-section site-container"
    >
      {/* Outer Premium Frame with subtle ambient glow */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-gray-50/80 via-white to-gray-50/40 border border-gray-200/80 p-4 sm:p-7 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)]">
        
        {/* Main 2-Column Asymmetric Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Brand Story & High-Intent Local SEO (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-3.5 sm:space-y-5">
            
            {/* Top Micro Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-[#325f98]/10 border border-[#325f98]/20 text-[#325f98] text-[11px] sm:text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#325f98] animate-pulse shrink-0" />
              <span>Noida&apos;s Verified Express Vape Hub</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-normal truncate">All Sectors Covered</span>
            </div>

            {/* Main H1 Heading for Top 3 Google Ranking */}
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug sm:leading-tight">
              Best <span className="text-[#325f98]">Vape Shop in Noida</span> – 100% Genuine with 60-90 Mins Delivery
            </h1>

            {/* Keyword-Rich Content Tailored Exclusively for Noida */}
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-normal">
              Looking for a dependable <strong className="text-gray-900 font-semibold">Vape Shop in Noida</strong> or searching for a trusted <strong className="text-gray-900 font-semibold">vape shop near me</strong> with home delivery?{" "}
              We are Noida’s premier destination for original disposable vapes, advanced pod systems, replacement coils,
              and premium e-liquids. Our localized express dispatch network delivers straight to your doorstep across{" "}
              <strong className="text-gray-900 font-semibold">Sector 15, 18 (Atta Market), Sector 50, Sector 62, Sector 75, Sector 76, Sector 137</strong>,{" "}
              along the <strong className="text-gray-900 font-semibold">Noida-Greater Noida Expressway</strong>, and{" "}
              <strong className="text-gray-900 font-semibold">Pari Chowk (Greater Noida)</strong> with full Cash on Delivery support.
            </p>

            {/* Trending Quick Links Badges */}
            <div className="pt-1">
              <span className="block text-[11px] sm:text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">
                Popular Collections:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                {trendingCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white border border-gray-200/90 hover:border-[#325f98] text-[11px] sm:text-xs font-medium text-gray-800 hover:text-[#325f98] shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-[#325f98]/80 font-normal hidden sm:inline">
                      ({cat.count})
                    </span>
                    <FiArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#325f98] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Action CTA Bar (Responsive Full Width on Mobile) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#325f98] hover:bg-[#254977] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer text-center"
              >
                <FaWhatsapp className="w-4 h-4 text-white shrink-0" />
                <span>Order on WhatsApp (Fastest)</span>
              </a>
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 text-gray-800 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer text-center"
              >
                <span>Explore Catalog</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Feature Box (2-cols on Mobile too!) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-3.5">
            {bentoFeatures.map((box) => {
              const Icon = box.icon;
              return (
                <div
                  key={box.id}
                  className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 p-3 sm:p-4.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-6px_rgba(50,95,152,0.12)] transition-all duration-300 group flex flex-col justify-between ${box.bgHover}`}
                >
                  <div>
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#325f98]/10 transition-colors shrink-0">
                        <Icon className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 ${box.iconColor}`} />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-gray-500 bg-gray-100/80 px-1.5 sm:px-2 py-0.5 rounded-full truncate max-w-[80px] sm:max-w-none">
                        {box.pill}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#325f98] transition-colors mb-1 leading-snug">
                      {box.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {box.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
