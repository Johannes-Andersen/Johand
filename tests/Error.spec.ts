import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Error Found', () => {
  test('Error page has correct title', async ({ page }) => {
    await page.goto('/500')

    await expect(page).toHaveTitle('Internal server error')
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/500')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
