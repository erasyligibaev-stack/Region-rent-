const { test, expect } = require('@playwright/test');

test('rent catalog section controls are visible', async ({ page }) => {
  await page.goto('/almaty');

  await expect(page.getByRole('button', { name: 'All cars' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Luxury' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Electric' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'SUV' })).toBeVisible();
});

test('user can select car category', async ({ page }) => {
  await page.goto('/almaty');

  await page.getByRole('button', { name: 'SUV' }).click();

  await expect(page.getByRole('button', { name: 'SUV' })).toBeVisible();
});
