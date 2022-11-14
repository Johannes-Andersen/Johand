import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Not Found', () => {
  test('Not found page has correct title', async ({ page }) => {
    await page.goto('/wazzzup')

    await expect(page).toHaveTitle('Page Not Found')
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/wazzzup')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
