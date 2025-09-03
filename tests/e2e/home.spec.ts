import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Aureo Labs/)
  })

  test('displays main heading', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toContainText('Aureo Labs')
  })

  test('has working CTA buttons', async ({ page }) => {
    const exploreButton = page.getByRole('button', { name: /Explore Products/i })
    const docsButton = page.getByRole('button', { name: /View Documentation/i })
    
    await expect(exploreButton).toBeVisible()
    await expect(docsButton).toBeVisible()
  })

  test('meets accessibility standards', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1Count = await page.getByRole('heading', { level: 1 }).count()
    expect(h1Count).toBe(1)
    
    // Check for focus visibility
    await page.keyboard.press('Tab')
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedElement).toBeTruthy()
  })

  test('has proper meta tags', async ({ page }) => {
    const description = await page.getAttribute('meta[name="description"]', 'content')
    expect(description).toContain('AI-powered platforms')
    
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content')
    expect(ogTitle).toContain('Aureo Labs')
  })

  test('responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    const mainContent = page.locator('main')
    await expect(mainContent).toBeVisible()
    
    // Check that sections stack vertically on mobile
    const sections = page.locator('section').nth(1)
    const computedStyle = await sections.evaluate((el) => {
      return window.getComputedStyle(el).display
    })
    expect(['grid', 'block', 'flex']).toContain(computedStyle)
  })
})