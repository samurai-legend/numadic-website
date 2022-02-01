/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => ({
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: [/\.(js|ts)x?$/],

      use: ["@svgr/webpack"],
    });

    return config;
  },
});
