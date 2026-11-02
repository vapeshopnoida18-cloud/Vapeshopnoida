import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: {
    default: "Vape Shop in Noida | Express 60-90 Mins Delivery | Buy Authentic Vapes",
    template: "%s | Vape Shop in Noida",
  },
  description:
    "Best Vape Shop in Noida offering 100% genuine disposable vapes, pods & e-liquids with 60-90 minutes express home delivery across Noida Sector 18, 62, 50, 76, 137 & Greater Noida. Cash on Delivery available.",
  keywords: [
    "vape shop in noida",
    "vape shop noida",
    "vape store noida",
    "vape shop noida sector 76",
    "vape shop amarpali silicon city",
    "vape delivery noida",
    "buy vape online noida",
    "vape shop noida sector 18",
    "vape shop noida sector 62",
    "vape shop near me noida",
    "disposable vape noida",
    "IGET bar noida",
    "elf bar noida",
    "geek bar noida",
    "cash on delivery vape noida",
  ],
  metadataBase: new URL("https://vapeshopinnoida.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vape Shop in Noida | 60-90 Mins Express Vape Delivery",
    description:
      "Buy 100% genuine disposable vapes, pods & e-liquids in Noida. Superfast 60-90 mins delivery in all Noida sectors. COD available.",
    url: "https://vapeshopinnoida.com",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/herobanner/banner3.webp",
        width: 1600,
        height: 658,
        alt: "Vape Shop in Noida - Express Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop in Noida | Express 60-90 Mins Delivery",
    description:
      "Buy 100% genuine disposable vapes, pods & e-liquids in Noida with express 60-90 mins delivery and COD.",
    images: ["/herobanner/banner3.webp"],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Uttar Pradesh, India",
    "geo.position": "28.5708;77.3260",
    ICBM: "28.5708, 77.3260",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": "https://vapeshopinnoida.com/#store",
      name: "Vape Shop in Noida",
      alternateName: [
        "Vape Shop Noida",
        "Vape Store Noida",
        "Vape Shop Sector 76 Noida",
        "Vape Delivery Noida",
      ],
      url: "https://vapeshopinnoida.com",
      logo: "https://vapeshopinnoida.com/logo.webp",
      image: "https://vapeshopinnoida.com/herobanner/banner3.webp",
      telephone: "+918168738374",
      email: "vapeshopnoida18@gmail.com",
      priceRange: "₹₹",
      paymentAccepted: "Cash on Delivery, UPI, Google Pay, PhonePe, Paytm",
      currenciesAccepted: "INR",
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
        latitude: "28.5708",
        longitude: "77.3260",
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
        "Noida",
        "Sector 18 Noida",
        "Sector 62 Noida",
        "Sector 76 Noida",
        "Sector 50 Noida",
        "Sector 137 Noida",
        "Greater Noida",
        "Greater Noida West",
        "Noida Expressway",
        "Delhi NCR",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vapeshopinnoida.com/#website",
      url: "https://vapeshopinnoida.com",
      name: "Vape Shop in Noida",
      description:
        "Buy 100% genuine disposable vapes, pods and e-liquids in Noida with 60-90 mins express home delivery.",
      publisher: {
        "@id": "https://vapeshopinnoida.com/#store",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://vapeshopinnoida.com/products?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-[#325f98] selection:text-white">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <CartDrawer />
            <FloatingContactButtons />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
