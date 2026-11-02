import HeroSlider from "@/components/HeroSlider";
import QuickFeatures from "@/components/QuickFeatures";
import SeoIntro from "@/components/SeoIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServiceAreas from "@/components/ServiceAreas";
import SeoLegalInfo from "@/components/SeoLegalInfo";
import HomeFaq from "@/components/HomeFaq";

export const metadata = {
  title: "Vape Shop in Noida | 60-90 Mins Express Delivery | Buy Genuine Vapes",
  description:
    "Looking for the #1 Vape Shop in Noida? Buy 100% authentic disposable vapes, refillable pod mods, mesh coils & nic salts with 60-90 mins express delivery across Sector 18, 62, 50, 76, 137 & Greater Noida. COD available.",
  keywords: [
    "vape shop in noida",
    "vape shop noida",
    "vape store in noida",
    "vape delivery noida",
    "buy vape online noida",
    "vape shop near me noida",
    "vape shop noida sector 18",
    "vape shop noida sector 62",
    "vape shop noida sector 76",
    "vape shop amarpali silicon city",
    "disposable vape noida",
    "geek bar noida",
    "elf bar noida",
    "lost mary noida",
    "cash on delivery vape noida",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com",
  },
  openGraph: {
    title: "Vape Shop in Noida | 60-90 Mins Express Delivery | 100% Genuine Vapes",
    description:
      "Looking for the best Vape Shop in Noida? Buy 100% authentic disposable vapes, pods & e-liquids with 60-90 mins express delivery across Noida sectors. COD available.",
    url: "https://vapeshopinnoida.com",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vapeshopinnoida.com/herobanner/banner3.webp",
        width: 1600,
        height: 658,
        alt: "Vape Shop in Noida - Express 60-90 Mins Doorstep Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop in Noida | 60-90 Mins Express Delivery",
    description:
      "Buy authentic vapes in Noida with 60-90 min express doorstep delivery across Sector 18, 62, 76 & Noida. COD available.",
    images: ["https://vapeshopinnoida.com/herobanner/banner3.webp"],
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* 2. Quick Action Features (100% Genuine, 24/7 Call, WhatsApp Order, Top Trending) */}
      <QuickFeatures />

      {/* 3. High-Ranking SEO Pillar Intro (#1 Vape Shop Noida, Content, Trending Tags & Trust Cards) */}
      <SeoIntro />

      {/* 4. Featured Vape Devices & Disposables Product Cards */}
      <FeaturedProducts />

      {/* 5. Key Service Areas Across Noida, Greater Noida & Delhi NCR */}
      <ServiceAreas />

      {/* 6. E-Cigarette Laws, Safety & Local Information */}
      <SeoLegalInfo />

      {/* 7. Frequently Asked Questions (FAQ) with Schema.org */}
      <HomeFaq />
    </>
  );
}
