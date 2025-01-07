import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-ics.imedx.com.au/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Sai');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Sairam@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Discovery Companion' }).click();
  await page.getByRole('link', { name: 'Workflow Companion' }).click();
  await page.getByRole('link', { name: 'AI Companion' }).click();
  await page.getByRole('link', { name: 'Discover Features' }).click();
  await page.getByRole('link', { name: 'Workflow Companion' }).click();
  await page.locator('.landingpage-arrow-down > span > .bi').first().click();
  await page.getByText('Logout').first().click();
});