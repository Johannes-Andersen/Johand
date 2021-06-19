const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'nb-NO'],
    defaultLocale: 'en',
    localePath: path.resolve('./src/locales'),
  },
}
