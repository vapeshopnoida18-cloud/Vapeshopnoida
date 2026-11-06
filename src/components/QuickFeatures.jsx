import Link from "next/link";
import { FiShoppingBag, FiPhoneCall, FiChevronRight, FiTrendingUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function QuickFeatures() {
  const phoneNumber = "+918053117437";
  const displayPhone = "+91 80531 17437";
  const whatsappUrl = `https://wa.me/918053117437?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20order%20vapes%20in%20Noida.`;

  const features = [
    {
      id: 1,
      badge: "VAPE SHOP NOIDA",
      title: "Genuine Vapes",
      href: "/products",
      icon: FiShoppingBag,
      iconBg: "bg-[#325f98]/10 text-[#325f98]",
      isExternal: false,
    },
    {
      id: 2,
      badge: "VAPE SHOP NOIDA 24/7",
      title: `Call ${displayPhone}`,
      mobileTitle: "Call 24/7 Support",
      href: `tel:${phoneNumber}`,
      icon: FiPhoneCall,
      iconBg: "bg-blue-50 text-[#325f98]",
      isExternal: true,
    },
    {
      id: 3,
      badge: "FREE 30-45 MIN",
      title: "WhatsApp Order",
      href: whatsappUrl,
      icon: FaWhatsapp,
      iconBg: "bg-emerald-50 text-emerald-600",
      hasLiveDot: true,
      isExternal: true,
    },
    {
      id: 4,
      badge: "VAPE SHOP NOIDA TRENDING",
      title: "Disposable Vapes",
      href: "/products?category=disposable",
      icon: FiTrendingUp,
      iconBg: "bg-indigo-50 text-indigo-600",
      isExternal: false,
    },
  ];

  return (
    <section
      aria-label="Vape Shop Noida Express Services & Quick Support"
      className="site-section site-container"
    >
      {/* 2-Column on Mobile, 4-Column on Desktop for Compact Non-Stretched UX */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-5">
        {features.map((item) => {
          const Icon = item.icon;
          const CardContent = (
            <div className="h-full bg-white rounded-xl sm:rounded-2xl border border-gray-100/90 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-6px_rgba(50,95,152,0.12)] hover:border-[#325f98]/30 transition-all duration-300 p-2.5 sm:p-4 flex items-center justify-between gap-2 group cursor-pointer">
              {/* Left Side: Icon Pill & Texts */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                {/* Rounded Icon Badge */}
                <div
                  className={`relative w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-2xs`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {item.hasLiveDot && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                  )}
                </div>

                {/* Subtitle & Title */}
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[10px] font-bold tracking-wider text-gray-500 group-hover:text-[#325f98] transition-colors uppercase truncate">
                    {item.badge}
                  </span>
                  <h3 className="text-xs sm:text-[14px] md:text-[15px] font-bold text-gray-900 group-hover:text-[#325f98] transition-colors truncate">
                    <span className="sm:hidden">{item.mobileTitle || item.title}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                  </h3>
                </div>
              </div>

              {/* Right Side: Circular Chevron Button */}
              <div className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 group-hover:bg-[#325f98] text-gray-400 group-hover:text-white items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-0.5 shadow-2xs">
                <FiChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          );

          return item.isExternal ? (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block focus:outline-none h-full"
              aria-label={`${item.badge} - ${item.title} - Vape Shop Noida`}
            >
              {CardContent}
            </a>
          ) : (
            <Link
              key={item.id}
              href={item.href}
              className="block focus:outline-none h-full"
              aria-label={`${item.badge} - ${item.title} - Vape Shop Noida`}
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
