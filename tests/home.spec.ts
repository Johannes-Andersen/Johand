import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('homepage', () => {
  test('homepage has title and links to intro page', async ({ page }) => {
    await page.goto('/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Create Next App/)
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/') // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
