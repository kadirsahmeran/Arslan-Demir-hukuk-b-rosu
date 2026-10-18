import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  // MDX makaleleri çalışma zamanında fs ile okunur (ISR yenilemeleri); sunucu paketine dahil et.
  outputFileTracingIncludes: {
    "/*": ["src/content/articles/**/*.mdx"],
  },
  images: {
    qualities: [75],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.pixabay.com", pathname: "/photo/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
