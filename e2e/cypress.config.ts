import { defineConfig } from 'cypress'

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  fixturesFolder: false,
  videosFolder: 'videos',
  screenshotsFolder: 'screenshots',
  e2e: {
    setupNodeEvents(_on, _config) {},
    supportFile: false,
    specPattern: 'integration/**/*.cy.{js,jsx,ts,tsx}',
  },
})
