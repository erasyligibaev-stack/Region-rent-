const { test, expect } = require('@playwright/test');

test('user can open car detail page from catalog', async ({ page }) => {
  await page.goto('/almaty#catalog');

  const firstCarModel = page.locator('.card__model').first();

  await expect(firstCarModel).toBeVisible();

  const carName = await firstCarModel.innerText();

  await firstCarModel.click();

  await expect(page).toHaveURL(/\/car-detail\?car=/);
  await expect(page.getByRole('heading', { name: carName })).toBeVisible();
});

test('car detail page should display reservation form', async ({ page }) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  await expect(page).toHaveURL(/\/car-detail\?car=/);

  await expect(page.locator('.main-info__title')).toBeVisible();
  await expect(page.locator('.main-info__price').first()).toBeVisible();

  await expect(page.locator('#dateFrom')).toBeVisible();
  await expect(page.locator('#dateTo')).toBeVisible();
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#phoneNumber')).toBeVisible();

  await expect(page.locator('.reservation-form__resident-btn').first()).toBeVisible();

  await expect(page.locator('.reservation-form__button')).toBeDisabled();
});

test('user can go back from car detail page', async ({ page }) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  await expect(page).toHaveURL(/\/car-detail\?car=/);

  await page.locator('.back-button').click();

  await expect(page).toHaveURL(/\/almaty/);
  await expect(page.locator('#catalog')).toBeVisible();
});
test('reservation submit button should stay disabled until required fields are filled', async ({
  page,
}) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  const submitButton = page.locator('.reservation-form__button');

  await expect(submitButton).toBeDisabled();

  await page.locator('#name').fill('Test User');
  await page.locator('#phoneNumber').fill('+77001234567');

  await expect(submitButton).toBeDisabled();

  await page.locator('.reservation-form__resident-btn').first().click();

  await expect(submitButton).toBeDisabled();
});
test('user can select resident status on car detail page', async ({ page }) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  const residentButton = page.locator('.reservation-form__resident-btn').first();
  const nonResidentButton = page.locator('.reservation-form__resident-btn').nth(1);

  await expect(residentButton).toBeVisible();
  await expect(nonResidentButton).toBeVisible();

  await residentButton.click();
  await expect(residentButton).toHaveClass(/active/);

  await nonResidentButton.click();
  await expect(nonResidentButton).toHaveClass(/active/);
});
test('car detail page should display contact links', async ({ page }) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
  await expect(page.locator('a[href*="t.me"]').first()).toBeVisible();
  await expect(page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first()).toBeVisible();
});
test('car detail page should display date fields', async ({ page }) => {
  await page.goto('/almaty#catalog');

  await page.locator('.card__model').first().click();

  await expect(page.locator('#dateFrom')).toBeVisible();
  await expect(page.locator('#dateTo')).toBeVisible();
});
