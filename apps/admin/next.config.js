const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  basePath: '/admin',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
})
