/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',         // ✅ Allow PostImage images
        port: '',
        pathname: '/**',
      },
      // You can add more hosts as needed, e.g.:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
    ],
    formats: ['image/avif', 'image/webp'], // Optional: modern formats
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;