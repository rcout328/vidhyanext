/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.leonardo.ai" }],
  },
};

export default nextConfig;
