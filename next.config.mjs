/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This might disable existing ESLint config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
