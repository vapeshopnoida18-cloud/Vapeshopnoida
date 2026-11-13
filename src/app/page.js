import HeroSlider from "@/components/HeroSlider";
import QuickFeatures from "@/components/QuickFeatures";
import SeoIntro from "@/components/SeoIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomeSeoArticle from "@/components/HomeSeoArticle";
import KnowledgeHub from "@/components/KnowledgeHub";
import HomeReviews from "@/components/HomeReviews";
import VideoShowcase from "@/components/VideoShowcase";
import ServiceAreas from "@/components/ServiceAreas";
import SeoLegalInfo from "@/components/SeoLegalInfo";
import HomeFaq from "@/components/HomeFaq";

export const metadata = {
  title: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
  description:
    "Looking for the #1 Vape Shop Noida? Buy authentic disposable vapes (Elf Bar, Geek Bar, Lost Mary, IGET) & pod mods with 30-45 mins free delivery. Instant UPI.",
  keywords: [
    "vape shop noida",
    "vape shop in noida",
    "vape stores near me",
    "smoke shop near me",
    "vape near me",
    "free vape delivery noida",
    "vape delivery noida",
    "buy vape online noida",
    "vape shop near me noida",
    "vape shop noida sector 18",
    "vape shop noida sector 62",
    "vape shop noida sector 76",
    "vape shop noida sector 137",
    "vape shop greater noida",
    "vape delivery ghaziabad",
    "vape delivery delhi ncr",
    "vape shop gurugram",
    "disposable vape noida",
    "geek bar noida",
    "elf bar noida",
    "lost mary noida",
    "iget vape noida",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com",
  },
  openGraph: {
    title: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
    description:
      "Looking for the best Vape Shop Noida or Vape Shop in Noida? Buy 100% authentic disposable vapes (Elf Bar, Geek Bar, Lost Mary, IGET) & pod mods with 30-45 mins free express delivery across Noida & NCR.",
    url: "https://vapeshopinnoida.com",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vapeshopinnoida.com/herobanner/banner3.webp",
        width: 1600,
        height: 658,
        alt: "Vape Shop Noida - Express 30-45 Mins Free Doorstep Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
    description:
      "Buy authentic vapes in Noida with 30-45 min free express doorstep delivery across Sector 18, 62, 76 & Noida. Instant UPI payment.",
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

      {/* 5. Editorial SEO Content Block (Competitor-Outranking Structure) */}
      <HomeSeoArticle />

      {/* 6. Vaping Guides, Authenticity & Noida Insights Hub */}
      <KnowledgeHub />

      {/* 6. Verified Customer Reviews & Ratings for Noida */}
      <HomeReviews />

      {/* 6. Authentic Verification & Scratch QR Video Showcase */}
      <VideoShowcase />

      {/* 7. Key Service Areas Across Noida, Greater Noida & Delhi NCR */}
      <ServiceAreas />

      {/* 8. E-Cigarette Laws, Safety & Local Information */}
      <SeoLegalInfo />

      {/* 9. Frequently Asked Questions (FAQ) with Schema.org */}
      <HomeFaq />
    </>
  );
}
