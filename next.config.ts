import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  // Static export ke saath cacheComponents aur PPR compatible nahi hain.
  // Isliye cacheComponents aur partialPrefetching remove karo.

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