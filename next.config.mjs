/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.vapeshopinnoida.com",
          },
        ],
        destination: "https://vapeshopinnoida.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
