import Link from "next/link";
import Image from "next/image";
import {
  FiTruck,
  FiShield,
  FiBookOpen,
  FiHeadphones,
  FiMapPin,
  FiMail,
  FiGlobe,
  FiPhone,
  FiChevronRight,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { products, WHATSAPP_NUMBER } from "@/data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20order%20vapes%20with%20express%20delivery.`;
  const callUrl = `tel:+918053117437`;

  const productGuides = [
    { name: "Disposable Vapes", href: "/products?category=disposable" },
    { name: "Pod Systems", href: "/products?category=pods" },
    { name: "Vape Kits", href: "/products?category=pods" },
    { name: "Nicotine Salts (E-Liquids)", href: "/products?category=nic-salts" },
    { name: "Replacement Coils & Pods", href: "/products?category=pods" },
    { name: "Vape Accessories", href: "/products" },
  ];

  const infoLinks = [
    { name: "Vaping Laws in India", href: "/#legal-info" },
    { name: "Is Vaping Legal in Noida?", href: "/#legal-info" },
    { name: "E-Cigarette Act, 2019", href: "/#legal-info" },
    { name: "Health Risks of Vaping", href: "/#legal-info" },
    { name: "How to Quit Vaping", href: "/#legal-info" },
    { name: "FAQs", href: "/#faq-section" },
  ];

  // Best Google High-Intent Search Keywords for Top 3 Ranking
  const topGoogleKeywords = [
    { title: "Vape Shop Noida", href: "/products" },
    { title: "Vape Shop Noida Sector 76", href: "/vape-delivery/sector-76-noida" },
    { title: "Vape Shop Noida Sector 18", href: "/vape-delivery/sector-18-noida" },
    { title: "Vape Shop Noida Sector 62", href: "/vape-delivery/sector-62-noida" },
    { title: "Vape Shop Noida Sector 50", href: "/vape-delivery/sector-50-noida" },
    { title: "Vape Shop Noida Sector 75", href: "/vape-delivery/sector-75-noida" },
    { title: "Vape Shop Noida Sector 104", href: "/vape-delivery/sector-104-noida" },
    { title: "Vape Shop Noida Sector 128", href: "/vape-delivery/sector-128-noida" },
    { title: "Vape Shop Noida Sector 137", href: "/vape-delivery/sector-137-noida" },
    { title: "Vape Shop Noida Sector 142", href: "/vape-delivery/sector-142-noida" },
    { title: "Vape Shop Noida Greater Noida", href: "/vape-delivery/greater-noida" },
    { title: "Vape Shop Noida Extension", href: "/vape-delivery/noida-extension" },
    { title: "Vape Shop Noida Delivery Ghaziabad", href: "/vape-delivery/ghaziabad" },
    { title: "Vape Shop Noida Delhi NCR", href: "/vape-delivery/delhi-ncr" },
    { title: "Vape Shop Noida Gurugram", href: "/vape-delivery/gurugram" },
    { title: "Vape Store Near Me Noida", href: "/products" },
    { title: "Smoke Shop Near Me", href: "/products" },
    { title: "Buy Vape Online Noida", href: "/products" },
    { title: "Free Vape Delivery Noida", href: "/products" },
    { title: "Geek Bar Burj 80000 Noida", href: "/products/geek-bar-burj-80000-disposable-vape" },
    { title: "Lost Mary Mega 70000 Noida", href: "/products/lost-mary-mega-fullview-70000-disposable-vape" },
    { title: "Yuoto Digi 15000 Noida", href: "/products/yuoto-digi-15000-disposable-vape" },
    { title: "Elf Bar BC5000 Noida", href: "/products/ebcreate-bc5000-disposable-pod-device" },
    { title: "Voopoo Drag H40 Noida", href: "/products/voopoo-drag-h40-pro-pod-mod-kit" },
    { title: "Vaporesso XROS 5 Kit", href: "/products/vaporesso-xros-5-pod-kit" },
    { title: "Uwell Caliburn A2 Pod", href: "/products/uwell-caliburn-a2-pod-system" },
    { title: "IGET Move 50000 Puffs", href: "/products/iget-move-b50000-disposable-vape" },
    { title: "Nasty Juice Nic Salt 30ml", href: "/products/nasty-juice-nic-salt-series-30ml" },
    { title: "Crown Bar 40K MegaMax", href: "/products/crown-bar-40k-megamax-disposable-vape" },
    { title: "Best Vape Shop Noida", href: "/products" },
    { title: "Vape Shop Noida Express 30 Min", href: "/products" },
    { title: "Instant UPI Online Payment", href: "/contact" },
  ];

  return (
    <footer
      aria-label="Vape Shop Noida Official Footer"
      className="relative bg-[#050b17] text-gray-300 border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow matching reference screenshot */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6 relative z-10">
        {/* ========================================================= */}
        {/* TOP FLOATING CARD: 4 Highlights (Exact match to reference) */}
        {/* ========================================================= */}
        <div className="bg-[#0b1329]/90 border border-blue-900/40 rounded-2xl p-5 sm:p-6 mb-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <FiTruck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  Noida &amp; Delhi NCR Focus
                </h4>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  Information &amp; resources for Noida, Greater Noida &amp; Delhi NCR
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <FiShield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  Verified Information
                </h4>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  Trusted &amp; up-to-date vaping regulations
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <FiBookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  Laws &amp; Safety Guide
                </h4>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  Know India&apos;s e-cigarette rules and health guidance
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <FiHeadphones className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  Query Support
                </h4>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  Get answers to your vaping-related questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN 4-COLUMN FOOTER BODY (Exact match to reference) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          {/* Column 1: Brand & Tagline + Buttons (4.5 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Vape Shop Noida Home">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-44 brightness-0 invert">
                  <Image
                    src="/logo.webp"
                    alt="Vape Shop Noida Logo"
                    fill
                    sizes="176px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </Link>

            <div className="text-[11px] tracking-wider uppercase font-semibold text-blue-400">
              E-Cigarette Information &amp; Delivery Hub
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Vape Shop Noida is an information platform and authentic supplier for vaping regulations, product guides, and express doorstep service. Get genuine verified devices, safety tips and lightning-fast delivery across Sector 76, Sector 18, Greater Noida and Delhi NCR.
            </p>

            {/* Action Buttons: Chat on WhatsApp & Call Support (Exact screenshot styling) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06241a] hover:bg-[#093527] border border-emerald-500 text-emerald-400 text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-emerald-500/20"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center gap-2 bg-[#0d1f3b] hover:bg-[#122b52] border border-blue-500 text-blue-400 text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-blue-500/20"
              >
                <FiPhone className="w-4 h-4 text-blue-400" />
                <span>Call Support</span>
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCT GUIDES (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Product Guides
              </h3>
              <div className="w-8 h-0.5 bg-blue-500 mt-1 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {productGuides.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between group hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                    <FiChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: INFORMATION (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Information
              </h3>
              <div className="w-8 h-0.5 bg-blue-500 mt-1 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {infoLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between group hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                    <FiChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH (3 Cols) - User's exact address & email, NO social media */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Get In Touch
              </h3>
              <div className="w-8 h-0.5 bg-blue-500 mt-1 rounded-full" />
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Address (Exact user instruction) */}
              <div className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  Shop no 38,39, Lower Ground Floor, Street 76, Market, Amarpali Silicon City, Sector 76, Noida, Uttar Pradesh 201316
                </span>
              </div>

              {/* Email (Exact user instruction) */}
              <div className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:vapeshopnoida18@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                >
                  vapeshopnoida18@gmail.com
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <FiGlobe className="w-4 h-4 text-blue-400 shrink-0" />
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  www.vapeshopinnoida.com
                </Link>
              </div>

              {/* Helpline Phone */}
              <div className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+918053117437"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  +91 80531 17437 (Express Helpline)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BEST GOOGLE SEARCHING KEYWORDS (For Top 3 Rank & Indexing) */}
        {/* ========================================================= */}
        <div className="border-t border-slate-800/80 pt-6 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              Trending Google Searches in Noida &amp; Delhi NCR:
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {topGoogleKeywords.map((kw, idx) => (
              <Link
                key={idx}
                href={kw.href}
                className="text-[11px] bg-slate-900/90 hover:bg-blue-900/40 border border-slate-800 hover:border-blue-500/50 text-gray-400 hover:text-blue-300 px-2.5 py-1 rounded-md transition-all duration-150"
              >
                {kw.title}
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM COPYRIGHT & POLICY BAR (Exact match to reference) */}
        {/* ========================================================= */}
        <div className="border-t border-slate-800/80 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Vape Shop Noida. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
