const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  basePath: '/blog',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
})
