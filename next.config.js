/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => ({
  env: {
    API_URL: process.env.API_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost", process.env.AWS_S3_DOMAIN],
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about-us": { page: "/about-us" },
      "/contact": { page: "/contact" }
    };
  },
  webpack: (config, { isServer, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: [/\.(js|ts)x?$/],

      use: ["@svgr/webpack"],
    });

    return config;
  },
});
