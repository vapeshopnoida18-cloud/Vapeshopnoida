import { FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function ServiceAreas() {
  const areas = [
    {
      name: "Sector 18 & Atta Market (Noida)",
      subtext: "Central Noida",
      badge: "Popular",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Sector 62 & Electronic City",
      subtext: "Corporate Hub",
      badge: "Popular",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Sector 137 & Noida Expressway",
      subtext: "Expressway Belt",
      badge: "Active",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Greater Noida West",
      subtext: "Nearby Access",
      badge: "Growing",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Indirapuram & Vaishali",
      subtext: "NCR Zone",
      badge: "Trending",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
    {
      name: "Delhi NCR Coverage",
      subtext: "Extended Reach",
      badge: "Available",
      badgeStyle:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    },
  ];

  return (
    <section
      aria-label="Vape Shop Noida NCR Service Areas"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-bold text-[#325f98] uppercase tracking-widest block mb-1.5">
            NOIDA NCR SERVICE AREAS
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Vape Shop Noida Express Delivery Areas
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Looking for Vape Shop Noida? Explore key delivery areas across Noida,
            Greater Noida and Delhi NCR with express 60-90 min doorstep delivery.
          </p>
        </div>

        {/* 6 Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {areas.map((area) => {
            const whatsappOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi Vape Shop Noida, I need express vape delivery in ${area.name}. Please share available models and estimated delivery time.`
            )}`;

            return (
              <a
                key={area.name}
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Order express vape delivery in ${area.name}`}
                className="group relative bg-white hover:bg-gray-50/70 rounded-2xl border border-gray-200/85 hover:border-[#325f98]/40 hover:shadow-md hover:shadow-[#325f98]/8 transition-all duration-200 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Location Pin Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#325f98]/10 text-[#325f98] group-hover:bg-[#325f98] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                    <FiMapPin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  </div>

                  {/* Title & Subtext */}
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate group-hover:text-[#325f98] transition-colors">
                      {area.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 mt-0.5">
                      <FiClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">Area: {area.subtext}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className={`shrink-0 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${area.badgeStyle}`}
                >
                  {area.badge}
                </span>
              </a>
            );
          })}
        </div>

        {/* Bottom Trust Micro-Bar */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 font-medium">
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>60-90 Mins Express Courier in All Sectors</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Cash on Delivery (COD) & Doorstep UPI</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20what%20is%20the%20delivery%20time%20to%20my%20sector%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#325f98] font-semibold hover:underline"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Check My Sector Delivery Time</span>
          </a>
        </div>
      </div>
    </section>
  );
}

