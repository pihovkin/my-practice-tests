import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login via POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});
test('failed login via POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'wrongpassword');
  await expect(page.locator('.flash.error')).toContainText('Your password is invalid!');
});

test('logout via POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.logout();
  await expect(page).toHaveURL('/login');
  await expect(page.locator('.flash.success')).toContainText('You logged out of the secure area!');
});
