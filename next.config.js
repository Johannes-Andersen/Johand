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
    value: "default-src 'self' johand.dev; script-src 'self' 'unsafe-inline' johand.dev; script-src-elem 'self' 'unsafe-inline' johand.dev; script-src-attr 'self' 'unsafe-inline' johand.dev; style-src 'self' 'unsafe-inline' johand.dev fonts.gstatic.com fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' johand.dev fonts.gstatic.com fonts.googleapis.com; style-src-attr 'self' 'unsafe-inline' johand.dev fonts.gstatic.com fonts.googleapis.com; img-src 'self'; font-src 'self' fonts.gstatic.com fonts.googleapis.com; connect-src 'self' vitals.vercel-insights.com johand.dev fonts.gstatic.com fonts.googleapis.com; media-src 'self'; object-src 'self'; prefetch-src 'self' vitals.vercel-insights.com johand.dev fonts.gstatic.com fonts.googleapis.com; child-src 'self'; frame-src 'self'; worker-src 'self'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content; sandbox allow-forms allow-same-origin allow-scripts allow-top-navigation; base-uri 'self'; manifest-src 'self'"
  }
]

module.exports = {
  async headers() {
    if(process.env.NODE_ENV === 'development') return []
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
