/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: "imgix",
      path: "https://noop/",
      unoptimized: true,
    },
    i18n: {
      locales: ['en', 'es'], // Idiomas disponibles
      defaultLocale: 'en', // Idioma por defecto
    },
    reactStrictMode: true,
  };
module.exports = nextConfig
