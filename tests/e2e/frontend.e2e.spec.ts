import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('homepage converts a recruiter in one scroll', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Petr Kaloč/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Senior Designer')
    await expect(page.getByRole('link', { name: 'View Work ↓' })).toBeVisible()

    await page.getByRole('link', { name: 'View Work ↓' }).click()
    await expect(page.locator('#work')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'BANDI Brand System' })).toBeVisible()

    await expect(page.getByRole('link', { name: 'Send email' })).toHaveAttribute(
      'href',
      'mailto:petr@czechdesigner.com',
    )
  })
})
