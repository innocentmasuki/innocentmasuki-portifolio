/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innocentmasuki.github.io",
      },
      {
        protocol: "https",
        hostname: "showoffplay.com",
      },
    ],
  },
};

module.exports = nextConfig;
