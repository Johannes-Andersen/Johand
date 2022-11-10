import { test, expect } from '@playwright/test'

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/)
})
