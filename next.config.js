/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src close-up-blog.vercel.app;
  style-src 'self' close-up-blog.vercel.app;
  font-src 'self';  
  `

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      {
        source: ":/path*",
        headers: securityHeaders,
      }
    ]
  }
})
