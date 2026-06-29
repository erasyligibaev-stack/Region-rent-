const { test, expect } = require('@playwright/test');

test('catalog should display category buttons', async ({ page }) => {
  await page.goto('/almaty#catalog');

  const categoryButtons = page.locator('.categories__button');

  await expect(categoryButtons.first()).toBeVisible();

  const count = await categoryButtons.count();
  expect(count).toBeGreaterThan(0);
});

test('catalog should display car cards if city has cars', async ({ page }) => {
  await page.goto('/almaty#catalog');

  const carCards = page.locator('.card');

  await expect(carCards.first()).toBeVisible();

  const count = await carCards.count();
  expect(count).toBeGreaterThan(0);
});

test('user can open first car detail page from catalog', async ({ page }) => {
  await page.goto('/almaty#catalog');

  const firstCardModel = page.locator('.card__model').first();

  await expect(firstCardModel).toBeVisible();

  await firstCardModel.click();

  await expect(page).toHaveURL(/\/car-detail\?car=/);
  await expect(page.locator('body')).toBeVisible();
});
