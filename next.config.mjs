/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack configuration
  turbopack: {
    root: ".",
  },

  // TypeScript: allow builds even if there are type errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize image handling for static deployment or Ngrok previews
  images: {
    unoptimized: true,
  },

  // Hide the Next.js development overlay and any status badges
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },

  // Experimental settings (fixed type to avoid Turbopack panic)
  experimental: {
    webVitalsAttribution: [], // must be an array, not boolean
  },

  // Allow Ngrok domain during development
  allowedDevOrigins: ["https://unrebuilt-acellular-domitila.ngrok-free.dev"],
};

export default nextConfig;
