import { test, expect } from '@playwright/test';

test('Example 1: shows hidden element after click', async ({ page }) => {
  await page.goto('/dynamic_loading/1');
  await page.click('#start button');
  await expect(page.locator('#finish')).toHaveText('Hello World!');
});
test('Example 2: shows hidden element after click', async ({ page }) => {
  await page.goto('/dynamic_loading/2');
  await page.click('#start button');
  await expect(page.locator('#finish')).toHaveText('Hello World!', { timeout: 10000 });
});
