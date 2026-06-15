import { test, expect } from '@playwright/test';

test('JS Alert', async ({ page }) => {
  await page.goto('/javascript_alerts');

  let alertMessage = '';
  page.on('dialog', (dialog) => {
    alertMessage = dialog.message();
    dialog.accept();
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  expect(alertMessage).toBe('I am a JS Alert');
  expect(await page.textContent('#result')).toBe('You successfully clicked an alert');
});
test('JS Confirm - accept', async ({ page }) => {
  await page.goto('/javascript_alerts');
  let alertMessage = '';
  page.on('dialog', (dialog) => {
    alertMessage = dialog.message();
    dialog.accept();
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  expect(alertMessage).toBe('I am a JS Confirm');
  expect(await page.textContent('#result')).toBe('You clicked: Ok');
});

test('JS Confirm - dismiss', async ({ page }) => {
  await page.goto('/javascript_alerts');
  let alertMessage = '';
  page.on('dialog', (dialog) => {
    alertMessage = dialog.message();
    dialog.dismiss();
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  expect(alertMessage).toBe('I am a JS Confirm');
  expect(await page.textContent('#result')).toBe('You clicked: Cancel');
});

test('JS Prompt - enter text', async ({ page }) => {
  await page.goto('/javascript_alerts');
  let alertMessage = '';
  page.on('dialog', (dialog) => {
    alertMessage = dialog.message();
    dialog.accept('test');
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

  expect(alertMessage).toBe('I am a JS prompt');
  expect(await page.textContent('#result')).toBe('You entered: test');
});
