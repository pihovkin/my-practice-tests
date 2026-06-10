import { test, expect } from '@playwright/test';

test('Drags block A to the location of block B.', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const blockA = page.locator('#column-a');
  const blockB = page.locator('#column-b');
  await blockA.dragTo(blockB);
  await expect(page.locator('#column-a')).toContainText('B');
  await expect(page.locator('#column-b')).toContainText('A');
});
