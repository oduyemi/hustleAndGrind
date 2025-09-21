/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [200, 400, 600], // good for thumbnails
    formats: ["image/avif", "image/webp"], // modern formats
  },
};

module.exports = nextConfig;
