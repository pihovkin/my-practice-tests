import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});
test('login with wrong credentials', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'wrongname');
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});
test('successful logout', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await page.click('a[href="/logout"]');
  await expect(page).toHaveURL('/login');
});
test('check checkboxes', async ({ page }) => {
  await page.goto('/checkboxes');
  await expect(page.locator('input[type="checkbox"]:first-child')).not.toBeChecked();
  await expect(page.locator('input[type="checkbox"]:last-child')).toBeChecked();
  await page.check('input[type="checkbox"]:first-child');
  await page.uncheck('input[type="checkbox"]:last-child');
  await expect(page.locator('input[type="checkbox"]:first-child')).toBeChecked();
  await expect(page.locator('input[type="checkbox"]:last-child')).not.toBeChecked();
});
test('check dropdowns', async ({ page }) => {
  await page.goto('/dropdown');
  await expect(page.locator('select#dropdown')).toHaveValue('');
  await page.selectOption('select#dropdown', '1');
  await expect(page.locator('select#dropdown')).toHaveValue('1');
});
