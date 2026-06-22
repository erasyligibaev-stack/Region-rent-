const { test, expect } = require('@playwright/test');

test('home page has no critical network errors', async ({ page }) => {
  const failedResponses = [];

  page.on('response', (response) => {
    const status = response.status();
    const url = response.url();

    if (status >= 500) {
      failedResponses.push({
        status,
        url,
      });
    }
  });

  await page.goto('/almaty', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  expect(failedResponses).toEqual([]);
});
