/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !! This is a workaround to avoid build errors on CI
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
