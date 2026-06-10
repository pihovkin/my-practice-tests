import { test, expect } from '@playwright/test';

test('upload file and verify success', async ({ page }) => {
  await page.goto('/upload');
  await page.setInputFiles('input[type="file"]', 'test-file.txt');
  await page.click('#file-submit');
  await expect(page.locator('h3')).toContainText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toContainText('test-file.txt');
});
