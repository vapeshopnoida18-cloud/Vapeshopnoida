import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Vape Shop Noida - Sector 76 Store & Helpline",
  description:
    "Contact Vape Shop in Noida. Visit our retail hub at Shop no 38,39, Lower Ground Floor, Street 76, Market, Amarpali Silicon City, Sector 76, Noida 201316. WhatsApp: +91 80531 17437 for 30-45 min express delivery.",
  keywords: [
    "vape shop in noida",
    "contact vape shop noida",
    "vape shop sector 76 noida",
    "vape shop amarpali silicon city",
    "vape delivery helpline noida",
    "vape shop noida whatsapp number",
    "vape shop near me noida",
    "vape shop sector 18 noida",
    "vape delivery ncr contact",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com/contact",
  },
  openGraph: {
    title: "Contact Us | Vape Shop in Noida Sector 76 - Express Delivery & Store Support",
    description:
      "Get in touch with Vape Shop in Noida at Sector 76, Amarpali Silicon City. Express 30-45 min vape delivery across all Noida sectors. WhatsApp: +91 80531 17437.",
    url: "https://vapeshopinnoida.com/contact",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Vape Shop in Noida Sector 76",
    description:
      "Express 30-45 min vape delivery across Noida. WhatsApp: +91 80531 17437.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://vapeshopinnoida.com/contact#webpage",
        url: "https://vapeshopinnoida.com/contact",
        name: "Contact Vape Shop Noida",
        description:
          "Official contact page and retail hub of Vape Shop Noida in Sector 76 Amarpali Silicon City.",
        breadcrumb: {
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
              name: "Contact Us",
              item: "https://vapeshopinnoida.com/contact",
            },
          ],
        },
      },
      {
        "@type": "Store",
        "@id": "https://vapeshopinnoida.com/#store",
        name: "Vape Shop Noida",
        image: "https://vapeshopinnoida.com/logo.webp",
        url: "https://vapeshopinnoida.com",
        telephone: "+918053117437",
        email: "vapeshopnoida18@gmail.com",
        priceRange: "₹₹",
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
          latitude: "28.567083",
          longitude: "77.382062",
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
          "Noida Sector 76",
          "Amarpali Silicon City",
          "Noida Sector 18",
          "Noida Sector 62",
          "Noida Sector 50",
          "Noida Sector 75",
          "Noida Sector 137",
          "Noida-Greater Noida Expressway",
          "Greater Noida",
          "Delhi NCR",
        ],
        paymentAccepted: "Instant UPI, UPI, Google Pay, PhonePe, Paytm",
      },
      {
        "@type": "FAQPage",
        "@id": "https://vapeshopinnoida.com/contact#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast is vape delivery from your Sector 76 Noida hub?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Orders in Sector 76 and adjacent sectors (Sector 74, 75, 50, 78) are dispatched within 30 to 45 minutes. Across other Noida sectors and Greater Noida, express riders reach within 30 to 45 minutes.",
            },
          },
          {
            "@type": "Question",
            name: "Can I order with Instant UPI (Google Pay, PhonePe, Paytm)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, 100% of our orders in Noida and Greater Noida support Instant UPI (Google Pay, PhonePe, Paytm) as well as doorstep UPI (Google Pay, PhonePe, Paytm).",
            },
          },
          {
            "@type": "Question",
            name: "How do I verify that the vape device is 100% genuine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every device comes in factory-sealed packaging with a scratch-off security QR code verifiable on the manufacturer portal.",
            },
          },
          {
            "@type": "Question",
            name: "What is your store location and operating timing in Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our retail hub is located at Shop no 38,39, Lower Ground Floor, Street 76, Market, Amarpali Silicon City, Sector 76, Noida, UP 201316, operating daily from 10:00 AM to 12:00 Midnight.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </main>
  );
}
