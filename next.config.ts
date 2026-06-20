import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Tells Next.js to generate flat static files
  devIndicators: false,
  images: {
    unoptimized: true, // Required for static exports since Vercel's optimization server won't be present
  },
};

export default nextConfig;

