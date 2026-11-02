import { Suspense } from "react";
import ProductsCatalogClient from "@/components/ProductsCatalogClient";

export const metadata = {
  title: "All Vape Devices & Disposables | Vape Shop in Noida",
  description:
    "Explore authentic disposable vapes (up to 80,000 puffs), refillable pod kits & nic salts at Vape Shop in Noida. Express 60-90 min delivery across Sector 18, 62, 76 & Noida with Cash on Delivery.",
  keywords: [
    "vape shop in noida",
    "vape shop noida",
    "buy vape online noida",
    "disposable vapes noida",
    "geek bar noida",
    "ebcreate bc5000 noida",
    "yuoto vape noida",
    "geekvape coils noida",
    "vape delivery noida sector 18",
    "vape delivery noida sector 62",
    "vape delivery noida sector 76",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com/products",
  },
  openGraph: {
    title: "All Vape Devices & Disposables | Vape Shop in Noida",
    description:
      "Browse disposable vapes, refillable pod kits, coils & nic salts at Vape Shop in Noida. 100% authentic with 60-90 mins express delivery across Noida sectors.",
    url: "https://vapeshopinnoida.com/products",
    siteName: "Vape Shop in Noida",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Vape Devices & Disposables | Vape Shop in Noida",
    description:
      "Buy 100% genuine disposable vapes & pod kits with 60-90 mins express delivery in Noida.",
  },
};

export default function ProductsPage() {
  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vape Products Catalog - Vape Shop Noida",
    url: "https://vapeshopinnoida.com/products",
    description:
      "Official collection of disposable vapes, pod systems, coils and accessories delivered in Noida with 60-90 mins express shipping.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ProductsCatalogClient />
      </Suspense>
    </main>
  );
}
