/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://bus-ticketing-system-nestjs-production.up.railway.app/',
        port: '3000',
      },
    ],
  },
}
