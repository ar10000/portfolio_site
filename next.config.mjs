/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Increase image size limit to handle larger images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow larger images to be optimized
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

