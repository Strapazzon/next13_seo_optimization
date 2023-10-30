const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  env: {
    LANGUAGE_COOKIE_NAME: process.env.LANGUAGE_COOKIE_NAME,
  },
};

module.exports = nextConfig;
