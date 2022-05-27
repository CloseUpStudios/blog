/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const { createSecureHeaders } = require("next-secure-headers");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
})


module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPWA],
  {
    pwa: {
      dest: "public",
    },
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io"],
    },
    async headers() {
      return [{ source: "/:path", headers: createSecureHeaders() }];
    },
    productionBrowserSourceMaps: false,
  }
])