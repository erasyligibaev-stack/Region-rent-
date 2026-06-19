const { test, expect } = require('@playwright/test');

test('redirects from root to Almaty page', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveURL(/\/almaty$/);
  await expect(page).toHaveTitle(/Аренда авто - Region Rent/i);
});

test('Almaty landing page has main content', async ({ page }) => {
  await page.goto('/almaty');

  await expect(page.getByText('Best value car rental in Almaty')).toBeVisible();
  await expect(page.getByText('More than 70 vehicles in our own fleet.')).toBeVisible();
  await expect(page.getByText('All cars')).toBeVisible();
  await expect(page.getByText('Get a consultation')).toBeVisible();
});
