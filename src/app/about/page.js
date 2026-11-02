import Link from "next/link";
import {
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiAward,
  FiUsers,
  FiCreditCard,
  FiPackage,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export const metadata = {
  title: "About Us | Vape Shop Noida - Authentic Vapes & Express 60-90 Min Delivery",
  description:
    "Learn about Vape Shop Noida, operating from Sector 76 Amarpali Silicon City. Delivering 100% genuine disposable vapes, pod systems & nic salts with 60-90 mins doorstep express dispatch across Noida & Greater Noida.",
  keywords: [
    "about vape shop noida",
    "authentic vape store noida",
    "vape shop sector 76 noida",
    "amarpali silicon city vape",
    "genuine vapes with scratch code noida",
    "vape delivery service noida",
    "disposable vapes noida supplier",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com/about",
  },
  openGraph: {
    title: "About Us | Vape Shop Noida - 100% Authentic Vapes & Express Delivery",
    description:
      "Vape Shop Noida is Gautam Buddha Nagar's trusted destination for genuine disposable vapes, refillable pod mods & nic salts. 60-90 min express dispatch across Noida.",
    url: "https://vapeshopinnoida.com/about",
    siteName: "Vape Shop Noida",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20know%20more%20about%20your%20products%20and%20express%20delivery.`;

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://vapeshopinnoida.com/about#webpage",
        url: "https://vapeshopinnoida.com/about",
        name: "About Vape Shop Noida",
        description:
          "Official About Us page for Vape Shop Noida. Learn about our retail hub at Sector 76 Amarpali Silicon City, authenticity guarantee, and 60-90 min express delivery.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://vapeshopinnoida.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About Us",
              item: "https://vapeshopinnoida.com/about",
            },
          ],
        },
      },
      {
        "@type": "Store",
        "@id": "https://vapeshopinnoida.com/#store",
        name: "Vape Shop Noida",
        image: "https://vapeshopinnoida.com/logo.webp",
        url: "https://vapeshopinnoida.com",
        telephone: "+918168738374",
        email: "vapeshopnoida18@gmail.com",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop no 38,39, Lower Ground Floor, Street 76, Market, Amarpali Silicon City, Sector 76",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201316",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.567083",
          longitude: "77.382062",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          "Sector 76 Noida",
          "Amarpali Silicon City",
          "Sector 18 Noida",
          "Sector 62 Noida",
          "Sector 50 Noida",
          "Sector 137 Noida",
          "Noida Expressway",
          "Greater Noida",
          "Delhi NCR",
        ],
        paymentAccepted: "Cash on Delivery, UPI, Google Pay, PhonePe, Paytm",
      },
    ],
  };

  const stats = [
    {
      icon: FiShield,
      iconColor: "text-blue-600 bg-blue-50 border-blue-100",
      value: "100%",
      label: "Genuine Authenticity",
      subtext: "Factory scratch QR on every pack",
    },
    {
      icon: FiTruck,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      value: "60-90 Min",
      label: "Express Noida Dispatch",
      subtext: "Live rider delivery to your door",
    },
    {
      icon: FiCreditCard,
      iconColor: "text-amber-600 bg-amber-50 border-amber-100",
      value: "COD & UPI",
      label: "Doorstep Payment",
      subtext: "Pay after physical inspection",
    },
    {
      icon: FiUsers,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
      value: "5,000+",
      label: "Happy Noida Vapers",
      subtext: "4.9/5 average satisfaction score",
    },
  ];

  const productCategories = [
    {
      name: "Disposable Vapes",
      desc: "5,000 to 80,000 puff high-capacity devices with dual mesh coils & smart displays.",
      brands: "Geek Bar, Lost Mary, Yuoto, Elf Bar, Crown Bar, IGET",
      link: "/products?category=disposable",
    },
    {
      name: "Refillable Pod Kits",
      desc: "Ultra-compact MTL & RDL pod mod devices for rich flavor delivery and long battery life.",
      brands: "Voopoo Drag, Vaporesso XROS 5, Uwell Caliburn A2",
      link: "/products?category=pods",
    },
    {
      name: "Nicotine Salt E-Liquids",
      desc: "Smooth throat-hit nic salt formulations imported from renowned international flavor houses.",
      brands: "Nasty Juice, Elfliq Ice King, Tokyo Nic Salts",
      link: "/products?category=nic-salts",
    },
    {
      name: "Pods, Coils & Accessories",
      desc: "Factory-sealed replacement cartridges, sub-ohm coils, and high-speed Type-C charging cables.",
      brands: "Geekvape Q, Caliburn Pods, Voopoo PnP Coils",
      link: "/products",
    },
  ];

  const qualityPoints = [
    "Strict Anti-Counterfeit Policy: Every device comes with an intact, verifiable scratch QR code.",
    "Adults Only (21+): We strictly enforce age verification and never cater to minors.",
    "Tamper-Proof Packaging: Factory shrink-wrapped packaging so you know your device is untouched.",
    "Fresh Batch Guarantee: E-liquids and pre-filled pods are stored in temperature-controlled conditions.",
    "Doorstep Verification: Inspect the seal and verify scratch codes before paying via COD or UPI.",
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-6 sm:space-y-8">
        
        {/* ========================================================= */}
        {/* 1. HERO HEADER CARD (Clean, Centered, Professional) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-xs text-gray-400 mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-[#325f98] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">About Us</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#325f98] bg-blue-50/80 border border-blue-100/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AUTHENTICITY FIRST • NOIDA SECTOR 76 HUB • 60-90 MIN DISPATCH
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mt-1">
              About <span className="text-[#325f98]">Vape Shop Noida</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Gautam Buddha Nagar&apos;s trusted destination for 100% genuine disposable vapes, refillable pod mods, and imported nicotine salts with lightning-fast doorstep delivery across Noida and Greater Noida.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. FOUR KEY PILLARS / STATS (Clean White Cards) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${stat.iconColor}`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{stat.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. OUR STORY & AUTHENTICITY PROMISE (Large 2-Column Card) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#325f98] text-[11px] font-bold uppercase tracking-wider">
                <FiAward className="w-3.5 h-3.5" />
                Our Story &amp; Dedication
              </span>

              <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Built to Solve Noida&apos;s Counterfeit &amp; Slow Delivery Problem
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Operating out of <strong>Shop no 38,39, Lower Ground Floor, Street 76, Market, Amarpali Silicon City, Sector 76, Noida, Uttar Pradesh 201316</strong>, Vape Shop Noida was founded on a simple premise: adult vapers in Noida deserved access to genuine, factory-fresh devices without the risk of fake clones or waiting 3-4 days for couriers.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The Delhi NCR market is flooded with unauthorized duplicates and expired liquids. We set a benchmark by partnering directly with authorized international supply lines, ensuring that every product—from Geek Bar and Lost Mary to Vaporesso and Yuoto—carries an anti-counterfeit scratch QR code verifiable on official brand portals.
              </p>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2 text-xs">
                <div className="font-bold text-gray-900 flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-[#325f98]" />
                  <span>Strategic Dispatch Location:</span>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold pl-6">
                  Sector 76, Amarpali Silicon City, Noida (Near Sector 76 Aqua Line Metro).
                </p>
                <p className="text-gray-500 text-[11px] pl-6">
                  Allows our delivery fleet to reach Central Noida, Noida Expressway, and Greater Noida within 60 to 90 minutes.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#325f98] hover:bg-[#254977] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <FiPackage className="w-4 h-4" />
                  <span>Browse Genuine Catalog</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat with Dispatch Team</span>
                </a>
              </div>
            </div>

            {/* Quality Checklist (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100/80 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <FiShield className="w-5 h-5 text-[#325f98]" />
                <h3 className="text-base font-bold text-gray-900">
                  Our 5-Point Quality Guarantee
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-gray-700">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200/50 flex items-center justify-between text-xs text-gray-500">
                <span>Verified Fresh Batches</span>
                <span className="font-bold text-[#325f98]">100% Sealed Boxes</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. PRODUCT CATEGORIES WE SPECIALIZE IN */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#325f98] uppercase tracking-widest block mb-1">
              PRODUCT SPECIALIZATIONS
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Curated Selection of Premium Vaping Hardware
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Every device is handpicked for flavor fidelity, build quality, and battery longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/70 bg-gray-50/50 hover:bg-white hover:border-[#325f98]/40 hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{cat.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{cat.desc}</p>
                  <div className="text-[11px] text-gray-500 bg-white border border-gray-200/60 rounded-lg p-2 font-medium">
                    <strong className="text-gray-900">Brands:</strong> {cat.brands}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-600 font-semibold">In Stock</span>
                  <Link
                    href={cat.link}
                    className="text-xs text-[#325f98] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View All</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. EXPRESS SECTOR REACH BANNER */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-r from-gray-900 via-[#0e1f3d] to-gray-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-3">
              <FiClock className="w-3.5 h-3.5 text-blue-400" />
              Express Delivery Across Noida
            </span>

            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Need Authentic Vapes at Your Doorstep in 60-90 Mins?
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
              We cover Sector 76, Sector 18, Sector 62, Sector 137, Noida-Greater Noida Expressway, Pari Chowk, and Greater Noida West with reliable doorstep dispatch. Pay with Cash on Delivery or UPI after verifying the pack.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Order on WhatsApp (+91 81687 38374)</span>
              </a>

              <a
                href="tel:+918168738374"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Helpline Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
