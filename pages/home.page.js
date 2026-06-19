const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    this.header = page.getByRole('banner');

    this.catalogLink = this.header.getByText('Catalog');
    this.reviewsLink = this.header.getByText('Reviews');
    this.faqLink = this.header.getByText('FAQ');
    this.blogLink = this.header.getByText('Blog');
    this.contactsLink = this.header.getByText('Contacts');

    this.almatyButton = page.getByRole('button', { name: 'Almaty' });
    this.astanaButton = page.getByRole('button', { name: 'Astana' });
    this.karagandaButton = page.getByRole('button', { name: 'Karaganda' });
    this.pavlodarButton = page.getByRole('button', { name: 'Pavlodar' });

    this.categoryButtons = {
      allCars: page.getByRole('button', { name: 'All cars' }),
      luxury: page.getByRole('button', { name: 'Luxury' }),
      electric: page.getByRole('button', { name: 'Electric' }),
      suv: page.getByRole('button', { name: 'SUV' }),
      crossover: page.getByRole('button', { name: 'Crossover' }),
      cabriolet: page.getByRole('button', { name: 'Cabriolet' }),
      sedan: page.getByRole('button', { name: 'Sedan' }),
      minivan: page.getByRole('button', { name: 'Minivan' }),
    };
  }

  async open(city = 'almaty') {
    await this.page.goto(`/${city}`);
  }

  async expectHeaderVisible() {
    await expect(this.catalogLink).toBeVisible();
    await expect(this.reviewsLink).toBeVisible();
    await expect(this.faqLink).toBeVisible();
    await expect(this.blogLink).toBeVisible();
    await expect(this.contactsLink).toBeVisible();
  }

  async expectCityButtonsVisible() {
    await expect(this.almatyButton).toBeVisible();
    await expect(this.astanaButton).toBeVisible();
    await expect(this.karagandaButton).toBeVisible();
    await expect(this.pavlodarButton).toBeVisible();
  }

  async selectCity(cityName) {
    await this.page.getByRole('button', { name: cityName }).click();
  }

  async expectCategoriesVisible() {
    for (const categoryButton of Object.values(this.categoryButtons)) {
      await expect(categoryButton).toBeVisible();
    }
  }

  async selectCategory(categoryName) {
    await this.page.getByRole('button', { name: categoryName }).click();
  }
}

module.exports = { HomePage };
