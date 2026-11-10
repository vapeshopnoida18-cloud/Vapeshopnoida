import Link from "next/link";

export default function SeoLegalInfo() {
  const cards = [
    {
      title: "Noida Express (30–45m)",
      titleColor: "text-[#325f98]",
      text: "Direct doorstep dispatch to Sector 18 (Atta Market), Sector 50, Sector 62, Sector 75, Sector 76, Sector 137, and all Noida residential sectors with Instant UPI payment.",
    },
    {
      title: "Greater Noida & Expressway Delivery",
      titleColor: "text-indigo-800",
      text: "Fast same-day express couriers along Noida-Greater Noida Expressway, Pari Chowk, Knowledge Park, Delta, Beta, and Greater Noida West (Noida Extension).",
    },
    {
      title: "Delhi NCR & Regional Coverage",
      titleColor: "text-rose-800",
      text: "Same-day delivery to Indirapuram, Vaishali, Vasundhara, Mayur Vihar, and surrounding Delhi NCR localities with 100% authentic scratch verification QR code.",
    },
  ];

  const trendingSearches = [
    "Geek Bar Burj 80K",
    "Yuoto Digi 15000",
    "Crown Bar 40K MegaMax",
    "Lost Mary 70K Fullview",
    "Elf Bar BC5000",
    "Voopoo Drag H40 Pro",
    "Vaporesso XROS 5",
    "Uwell Caliburn A2",
    "IGET Move 50000",
    "Nasty Juice Nic Salt",
    "Vape Delivery Sector 18",
    "Sector 62 Electronic City",
    "Sector 137 Expressway",
    "Atta Market Vape Delivery",
    "Instant UPI Vapes NCR",
    "Express Vape Delivery Noida",
  ];

  return (
    <section
      id="legal-info"
      aria-label="Local Coverage and Information"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Top Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-base sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Authentic Vapes, Pods &amp; E-Liquids Delivery Across Noida
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-4xl font-normal">
            Your trusted destination for 100% genuine vaping devices, disposable pod bars, refillable kits, and imported nicotine salt e-liquids in Noida, Greater Noida, and Delhi NCR. We provide lightning-fast 30-45 minute doorstep delivery with genuine factory scratch-code verification.
          </p>
        </div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-7 sm:mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-50/50 hover:bg-white rounded-2xl border border-gray-200/80 hover:border-[#325f98]/40 hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-start"
            >
              <h3 className={`text-sm sm:text-base font-bold ${card.titleColor} mb-1.5`}>
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trending Searches */}
        <div className="pt-6 border-t border-gray-100">
          <span className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            TRENDING SEARCHES IN NOIDA, GREATER NOIDA &amp; DELHI NCR:
          </span>

          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((item) => (
              <Link
                key={item}
                href={`/products?search=${encodeURIComponent(item)}`}
                className="inline-flex items-center text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-[#325f98] hover:border-[#325f98]/50 px-3 py-1.5 rounded-xl border border-gray-200 transition-colors shadow-2xs cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
