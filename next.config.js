/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: "imgix",
      path: "https://noop/",
      unoptimized: true,
    },
    reactStrictMode: true,
  };
module.exports = nextConfig
