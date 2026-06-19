const { test: base, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

module.exports = {
  test,
  expect,
};
