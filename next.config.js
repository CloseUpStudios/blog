/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const { createSecureHeaders } = require("next-secure-headers");

const isDev = process.env.NODE_ENV !== "production";

module.exports = withPWA({
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
})
