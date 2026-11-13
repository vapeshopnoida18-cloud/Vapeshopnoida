import { products } from "@/data/products";
import { locations } from "@/data/locations";

export default function sitemap() {
  const baseUrl = "https://vapeshopinnoida.com";
  const now = new Date();

  // 1. Core Primary Static Pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Note: terms, privacy-policy, disclaimer are noindex — excluded from sitemap intentionally
  ];

  // 2. All 20 Product Detail Pages
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 3. Dedicated Local Delivery Landing Pages (Noida Sectors & NCR Hubs)
  // These give Google 100% crawlable, high-ranking canonical URLs for "Vape Shop in Sector 18", etc.
  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/vape-delivery/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes, ...locationRoutes];
}
