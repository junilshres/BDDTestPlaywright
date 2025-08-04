
import { test, expect } from '@playwright/test';

test.describe('Login OrangeHRM', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardHeader = await page.locator('h6').textContent();
    expect(dashboardHeader).toBe('Dashboard');
  });
});
