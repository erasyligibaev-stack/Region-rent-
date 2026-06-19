const { test, expect } = require('@playwright/test');

test('user can open Astana city page', async ({ page }) => {
  await page.goto('/almaty');

  await page.getByText('Astana').click();

  await expect(page).toHaveURL(/\/astana$/);
  await expect(page.getByText(/Best value car rental in Astana/i)).toBeVisible();
});

test('user can open Karaganda city page', async ({ page }) => {
  await page.goto('/almaty');

  await page.getByText('Karaganda').click();

  await expect(page).toHaveURL(/\/karagandy$/);
  await expect(page.getByText(/Best value car rental in Karaganda/i)).toBeVisible();
});

test('user can open Pavlodar city page', async ({ page }) => {
  await page.goto('/almaty');

  await page.getByText('Pavlodar').click();

  await expect(page).toHaveURL(/\/pavlodar$/);
  await expect(page.getByText(/Best value car rental in Pavlodar/i)).toBeVisible();
});
