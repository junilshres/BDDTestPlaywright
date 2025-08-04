import { test, expect } from '@playwright/test';

test.describe('Calculator UI', () => {
  test('should add two numbers', async ({ page }) => {
    // Replace with the actual path to your calculator HTML file
    await page.goto('file://' + process.cwd() + '/calculator.html');

    await page.fill('#input-a', '2');
    await page.fill('#input-b', '3');
    await page.click('#add-btn');

    const result = await page.textContent('#result');
    expect(result).toBe('5');
  });
});