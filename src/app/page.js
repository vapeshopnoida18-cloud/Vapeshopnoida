import HeroSlider from "@/components/HeroSlider";
import QuickFeatures from "@/components/QuickFeatures";
import SeoIntro from "@/components/SeoIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServiceAreas from "@/components/ServiceAreas";
import SeoLegalInfo from "@/components/SeoLegalInfo";
import HomeFaq from "@/components/HomeFaq";

export const metadata = {
  title: "Vape Shop Noida | E-Cigarette Laws & Information",
  description:
    "Searching for Vape Shop Noida? Learn about e-cigarette laws in India, vaping restrictions in Noida, health risks, FAQs and Delhi NCR regulations.",
  keywords: [
    "vape shop noida",
    "vape store noida",
    "e-cigarette laws in india",
    "vaping restrictions in noida",
    "vape delivery noida",
    "buy vape online noida",
    "vape shop noida sector 18",
    "vape shop noida sector 62",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com",
  },
  openGraph: {
    title: "Vape Shop Noida | E-Cigarette Laws & Information",
    description:
      "Searching for Vape Shop Noida? Learn about e-cigarette laws in India, vaping restrictions in Noida, health risks, FAQs and Delhi NCR regulations.",
    url: "https://vapeshopinnoida.com",
    siteName: "Vape Shop Noida",
    locale: "en_IN",
    type: "website",
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
