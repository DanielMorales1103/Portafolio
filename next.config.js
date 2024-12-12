/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: "imgix",
      path: "https://noop/",
      unoptimized: true,
    },
    reactStrictMode: true,
  };
module.exports = nextConfig
