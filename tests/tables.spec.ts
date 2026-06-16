import { test, expect } from '@playwright/test';

test('Table 1: has 4 rows', async ({ page }) => {
  await page.goto('/tables');
  await expect(page.locator('#table1 tbody tr')).toHaveCount(4);
});
test('Table 1: has Smith', async ({ page }) => {
  await page.goto('/tables');
  await expect(page.locator('#table1 tbody tr').first()).toContainText('Smith');
});
test('Table 1: row with $100.00 due belongs to Doe', async ({ page }) => {
  await page.goto('/tables');
  await expect(
    page.locator('#table1 tbody tr').filter({ hasText: '$100.00' }).first(),
  ).toContainText('Doe');
});
