import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import LocationDetailClient from "@/components/LocationDetailClient";

export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Vape Shop Noida",
      description: "Fast express vape delivery across Noida & NCR.",
    };
  }

  const pageUrl = `https://vapeshopinnoida.com/vape-delivery/${location.slug}`;

  return {
    title: location.title,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: pageUrl,
      siteName: "Vape Shop in Noida",
      images: [
        {
          url: "/vape-shop-noida-hero.png",
          width: 1200,
          height: 630,
          alt: location.h1,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.metaDescription,
      images: ["/vape-shop-noida-hero.png"],
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const pageUrl = `https://vapeshopinnoida.com/vape-delivery/${location.slug}`;

  // Structured Data: LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: `Vape Shop Noida – ${location.name}`,
    image: "https://vapeshopinnoida.com/vape-shop-noida-hero.png",
    url: pageUrl,
    telephone: "+918053117437",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Instant UPI, Google Pay, PhonePe, Paytm, QR Code Online Payment",
    description: location.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop no 38,39, Lower Ground Floor, Street 76 Market, Amarpali Silicon City, Sector 76",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5672",
      longitude: "77.3850",
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
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "IN",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 2,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  };

  // Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Structured Data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Delivery Areas",
        item: "https://vapeshopinnoida.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationDetailClient location={location} />
    </>
  );
}

