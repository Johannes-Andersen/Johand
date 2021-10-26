const { i18n } = require('./next-i18next.config')

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value:
      'gyroscope=(), payment=(), usb=(), battery=(), ambient-light-sensor=(), accelerometer=(), camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' vitals.vercel-insights.com johand.dev fonts.gstatic.com fonts.googleapis.com"
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}
