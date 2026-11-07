export default function manifest() {
  return {
    name: "Vape Shop in Noida | 30-45 Min Free Delivery",
    short_name: "Vape Shop Noida",
    description:
      "Buy 100% genuine disposable vapes, pod systems & e-liquids in Noida. Superfast 30-45 mins free express doorstep delivery across all Noida sectors with instant UPI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#325f98",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
