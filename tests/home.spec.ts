import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Homepage', () => {
  test('Homepage has correct title', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Create Next App/)
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
