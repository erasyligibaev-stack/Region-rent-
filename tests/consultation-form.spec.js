const { test, expect } = require('@playwright/test');

test('consultation form fields and consent checkbox work correctly', async ({ page }) => {
  await page.goto('/almaty');

  await page.getByText('Still have questions?').scrollIntoViewIfNeeded();

  const nameInput = page.locator('input[name="name"]');
  const phoneInput = page.locator('input[name="phoneNumber"]');
  const consentCheckbox = page.locator('input[type="checkbox"]');
  const turnstileInput = page.locator('input[name="cf-turnstile-response"]');
  const submitButton = page.getByRole('button', { name: 'Get a consultation' });

  await expect(nameInput).toBeVisible();
  await expect(phoneInput).toBeVisible();
  await expect(consentCheckbox).toBeVisible();
  await expect(turnstileInput).toHaveAttribute('type', 'hidden');

  await expect(submitButton).toBeDisabled();

  await nameInput.fill('Test User');
  await phoneInput.fill('+77001234567');
  await consentCheckbox.check();

  await expect(nameInput).toHaveValue('Test User');
  await expect(phoneInput).toHaveValue('+77001234567');
  await expect(consentCheckbox).toBeChecked();

  await expect(submitButton).toBeDisabled();
});
