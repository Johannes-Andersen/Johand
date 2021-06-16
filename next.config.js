const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  poweredByHeader: false,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  i18n,
})
