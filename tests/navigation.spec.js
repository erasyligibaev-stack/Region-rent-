const { test } = require('../fixtures/pages.fixture.js');

test('main navigation anchors are visible', async ({ homePage }) => {
  await homePage.open('almaty');
  await homePage.expectHeaderVisible();
});

test('city buttons are visible', async ({ homePage }) => {
  await homePage.open('almaty');
  await homePage.expectCityButtonsVisible();
});
