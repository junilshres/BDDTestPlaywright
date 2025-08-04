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

Then('I should see the banner containing {string}', async function (text: string) {
  await expect(this.page.getByRole('banner')).toContainText(text);
});

When('I click the {string} button', async function (buttonName: string) {
  await this.page.getByRole('button', { name: buttonName }).click();
});

Then('I should see {string} visible', async function (text: string) {
  await expect(this.page.getByText(text)).toBeVisible();
});

When('I click the {string} link', async function (linkName: string) {
  await this.page.getByRole('link', { name: linkName }).click();
});

Then('the form should match the snapshot for the button {string}', async function (buttonName: string) {
  await expect(this.page.locator('form')).toMatchAriaSnapshot(`- button "${buttonName}"`);
});

When('I click {string}', async function (text: string) {
  await this.page.getByText(text).click();
});

Then('the topbar menu list should contain {string}', async function (text: string) {
  await expect(this.page.getByLabel('Topbar Menu').getByRole('list')).toContainText(text);
});

When('I click the first form icon', async function () {
  await this.page.locator('form i').first().click();
});

When('I select the option {string}', async function (optionName: string) {
  await this.page.getByRole('option', { name: optionName }).click();
});

Then('the option should be selected successfully', async function () {
  const selectedOption = await this.page.getByRole('option', { name: 'ESS' }).isSelected();
  expect(selectedOption).toBeTruthy();
});