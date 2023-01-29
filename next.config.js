/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["innocentmasuki.github.io", "cdn.sanity.io"]
  },
}

module.exports = nextConfig
