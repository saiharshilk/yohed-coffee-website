import type { NextConfig } from "next";

// GitHub Pages serves this project from https://<user>.github.io/yohed-coffee-website/,
// so every URL needs that prefix in production. In `npm run dev` it stays empty.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/yohed-coffee-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    // Read by src/lib/asset.ts. Plain "/images/x.jpg" strings do NOT get the
    // basePath on a static export, so every /public reference goes through asset().
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
