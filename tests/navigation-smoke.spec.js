const { test, expect } = require('@playwright/test');

const menuItems = [
  {
    name: 'Catalog',
    expectedUrl: /\/almaty#catalog$/,
  },
  {
    name: 'Reviews',
    expectedUrl: /\/almaty#reviews$/,
  },
  {
    name: 'FAQ',
    expectedUrl: /\/almaty#faq$/,
  },
  {
    name: 'Blog',
    expectedUrl: /\/almaty#blog$/,
  },
  {
    name: 'Contacts',
    expectedUrl: /\/almaty#contacts$/,
  },
];

for (const item of menuItems) {
  test(`user can navigate to ${item.name} from header`, async ({ page }) => {
    await page.goto('/almaty');

    const header = page.getByRole('banner');

    await header.getByText(item.name).click();

    await expect(page).toHaveURL(item.expectedUrl);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();

    const bodyText = await page.locator('body').innerText();

    expect(bodyText).not.toMatch(/404/i);
    expect(bodyText).not.toMatch(/not found/i);
    expect(bodyText).not.toMatch(/page not found/i);
  });
}
