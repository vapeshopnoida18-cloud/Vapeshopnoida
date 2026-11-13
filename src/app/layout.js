import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: {
    default: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
    template: "%s",
  },
  description:
    "Looking for the #1 Vape Shop Noida? Buy authentic disposable vapes (Elf Bar, Geek Bar, Lost Mary, IGET) & pod mods with 30-45 mins free delivery across all Noida sectors. Instant UPI.",
  keywords: [
    "vape shop noida",
    "vape shop in noida",
    "vape stores near me",
    "smoke shop near me",
    "vape near me",
    "free vape delivery noida",
    "vape delivery noida",
    "vape shop near me noida",
    "vape store noida",
    "vape shop noida sector 18",
    "vape shop noida sector 62",
    "vape shop noida sector 76",
    "vape shop noida sector 137",
    "vape shop greater noida",
    "vape delivery ghaziabad",
    "vape shop delhi",
    "vape shop gurugram",
    "disposable vape noida",
    "geek bar noida",
    "elf bar noida",
    "lost mary noida",
    "iget vape noida",
  ],
  metadataBase: new URL("https://vapeshopinnoida.com"),
  // No global canonical in layout — each page sets its own specific canonical
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
    title: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
    description:
      "Buy 100% genuine disposable vapes (Elf Bar, Geek Bar, Lost Mary, IGET), pods & e-liquids in Noida. Superfast 30-45 mins free express delivery across Noida, Greater Noida, Ghaziabad & Delhi NCR.",
    url: "https://vapeshopinnoida.com",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/herobanner/banner3.webp",
        width: 1600,
        height: 658,
        alt: "Vape Shop Noida - 30-45 Min Free Express Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Noida | Vape Shop in Noida - 30-45 Min Free Delivery",
    description:
      "Buy 100% genuine disposable vapes, pods & e-liquids in Noida with 30-45 mins free express delivery across Noida & NCR.",
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
        "Smoke Shop Noida",
      ],
      url: "https://vapeshopinnoida.com",
      logo: "https://vapeshopinnoida.com/logo.webp",
      image: "https://vapeshopinnoida.com/herobanner/banner3.webp",
      telephone: "+918053117437",
      email: "vapeshopnoida18@gmail.com",
      priceRange: "₹₹",
      paymentAccepted: "UPI, Google Pay, PhonePe, Paytm, QR Code, Net Banking, Credit/Debit Card",
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
        "Ghaziabad",
        "Indirapuram",
        "Delhi",
        "Gurugram",
        "Delhi NCR",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1280",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vapeshopinnoida.com/#website",
      url: "https://vapeshopinnoida.com",
      name: "Vape Shop in Noida",
      description:
        "Buy 100% genuine disposable vapes, pods and e-liquids in Noida with 30-45 mins free express delivery across Noida, Greater Noida, Ghaziabad, Delhi & Gurugram.",
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
