import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('homepage converts a recruiter in one scroll', async ({ page }) => {
    await page.goto('http://localhost:3010')

    await expect(page).toHaveTitle(/Petr Kaloč/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('THE WORK')
    await expect(page.getByRole('link', { name: 'Email Petr' }).first()).toHaveAttribute(
      'href',
      'mailto:petr@czechdesigner.com',
    )

    await page.getByRole('link', { name: 'Work' }).first().click()
    await expect(page.locator('#work')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'BANDI Brand System' })).toBeVisible()

    await expect(page.locator('#contact').getByRole('link', { name: 'petr@czechdesigner.com' })).toHaveAttribute(
      'href',
      'mailto:petr@czechdesigner.com',
    )
  })
})
