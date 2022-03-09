/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => ({
  env: {
    API_URL: process.env.API_URL,
    STORAGE_BASE: process.env.STORAGE_BASE,
  },
  reactStrictMode: false,
  webpack: (config, { isServer, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: [/\.(js|ts)x?$/],

      use: ["@svgr/webpack"],
    });

    return config;
  },
});
