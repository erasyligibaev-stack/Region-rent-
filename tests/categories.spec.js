const { test } = require('../fixtures/pages.fixture.js');

test('car categories are visible', async ({ homePage }) => {
  await homePage.open('almaty');
  await homePage.expectCategoriesVisible();
});

test('user can select SUV category', async ({ homePage }) => {
  await homePage.open('almaty');
  await homePage.selectCategory('SUV');
});
