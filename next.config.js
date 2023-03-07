/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "http://web-sht-358a2a24.local.on-acorn.io/:path*",
      },
    ];
  },
}

module.exports = nextConfig
