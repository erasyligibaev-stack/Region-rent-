const { test, expect } = require('@playwright/test');

test('FAQ section is visible', async ({ page }) => {
  await page.goto('/almaty');

  await expect(page.getByRole('heading', { name: 'FAQ' })).toBeVisible();
  await expect(page.getByText('What documents are required to rent a car?')).toBeVisible();
  await expect(
    page.getByText('What if I accidentally scratch/damage the rented car?'),
  ).toBeVisible();
});

test('blog section is visible', async ({ page }) => {
  await page.goto('/almaty');

  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  await expect(
    page.getByText('How to choose a car for rent: a complete guide for beginners'),
  ).toBeVisible();
  await expect(page.getByText('View all')).toBeVisible();
});
