const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
})
