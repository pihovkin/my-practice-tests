import { test, expect } from '@playwright/test';

test('Hover over first user shows profile info', async ({ page }) => {
  await page.goto('/hovers');

  const firstFigure = page.locator('.figure').first();
  await firstFigure.hover();
  await expect(firstFigure.locator('.figcaption')).toBeVisible();
  await expect(firstFigure.locator('.figcaption')).toContainText('user1');
  await expect(firstFigure.locator('h5')).toHaveText('name: user1');
  await expect(firstFigure.locator('a')).toHaveAttribute('href', '/users/1');
});
test('Hover over each user shows correct profile info', async ({ page }) => {
  await page.goto('/hovers');

  const figures = page.locator('.figure');
  const count = await figures.count();

  for (let i = 0; i < count; i++) {
    const figure = figures.nth(i);
    await figure.hover();

    const userNumber = i + 1;
    await expect(figure.locator('.figcaption')).toBeVisible();
    await expect(figure.locator('h5')).toHaveText(`name: user${userNumber}`);
    await expect(figure.locator('a')).toHaveAttribute('href', `/users/${userNumber}`);
  }
});
