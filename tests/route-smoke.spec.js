const { test, expect } = require('@playwright/test');

const cities = ['almaty', 'astana', 'karagandy', 'pavlodar'];

const routes = ['', 'catalog', 'reviews', 'answers', 'blog', 'contacts'];

for (const city of cities) {
  for (const route of routes) {
    const path = route ? `/${city}/${route}` : `/${city}`;

    test(`route opens: ${path}`, async ({ page }) => {
      const response = await page.goto(path, {
        waitUntil: 'domcontentloaded',
      });

      expect(response.status()).toBeLessThan(500);

      await expect(page.locator('body')).toBeVisible();
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();

      const bodyText = await page.locator('body').innerText();

      expect(bodyText).not.toMatch(/404/i);
      expect(bodyText).not.toMatch(/not found/i);
      expect(bodyText).not.toMatch(/page not found/i);
    });
  }
}
