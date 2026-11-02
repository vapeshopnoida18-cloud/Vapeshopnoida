import { Suspense } from "react";
import ProductsCatalogClient from "@/components/ProductsCatalogClient";

export const metadata = {
  title: "Buy Vapes & Pods Online Noida | Vape Shop Noida Official",
  description:
    "Browse disposable vapes, refillable pod kits, coils & nic salts at Vape Shop Noida. 100% authentic, 60-90 mins express delivery across Noida sectors. Cash on Delivery available.",
  keywords: [
    "vape shop noida",
    "buy vape online noida",
    "disposable vapes noida",
    "geek bar noida",
    "ebcreate bc5000 noida",
    "yuoto vape noida",
    "geekvape coils noida",
    "vape delivery noida sector 18",
    "vape delivery noida sector 62",
  ],
  alternates: {
    canonical: "https://vapeshopinnoida.com/products",
  },
  openGraph: {
    title: "Buy Vapes & Pods Online Noida | Vape Shop Noida Official",
    description:
      "Browse disposable vapes, refillable pod kits, coils & nic salts at Vape Shop Noida. 100% authentic, 60-90 mins express delivery across Noida sectors.",
    url: "https://vapeshopinnoida.com/products",
    siteName: "Vape Shop Noida",
    locale: "en_IN",
    type: "website",
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
