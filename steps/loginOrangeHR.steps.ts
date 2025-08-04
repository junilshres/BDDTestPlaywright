import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the OrangeHRM login page', async function () {
  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter username {string} and password {string}', async function (username: string, password: string) {
  await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
});

When('I click the Login button', async function () {
  await this.page.getByRole('button', { name: 'Login' }).click();
});

Then('I should be logged in successfully', async function () {
  await expect(this.page.locator('h6')).toHaveText('Dashboard');
});