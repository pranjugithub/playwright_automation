const { test } = require('@playwright/test');
const {HomePage} = require('../tests-examples/HomePage.spec');

test('Verify Label From Blokchain Page', async ({ page }) => {
    await page.goto('https://www.imentus.com/');
    const Home = new HomePage(page);
    await Home.getLblFromHomePage();
    

  });

  test.only('Verify Text Form', async ({ page }) => {
    await page.goto('https://www.imentus.com/');
    const Home = new HomePage(page);
    await Home.fillForm();
    

  });
  