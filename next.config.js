/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  // env: {
  //   VERCEL: false, // Ignore Vercel deployment settings
  // },
}

module.exports = nextConfig;
