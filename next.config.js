const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
