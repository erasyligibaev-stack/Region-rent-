# Region Rent Playwright

UI automation project for Region Rent built with Playwright.

## Project Goal

This project was created to learn Playwright and implement automated smoke tests for the Region Rent web application.

The focus is on creating stable and maintainable tests that are not dependent on dynamic content such as vehicle models, prices, or catalog size.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Git
- GitHub Actions

## Project Structure

```text
tests/
pages/
fixtures/
.github/
```

### tests

Contains automated test scenarios.

Current test suites:

- home.spec.js
- navigation.spec.js
- navigation-smoke.spec.js
- route-smoke.spec.js
- city.spec.js
- categories.spec.js
- faq-blog.spec.js
- rent-list.spec.js

### pages

Contains Page Objects.

Current pages:

- HomePage

### fixtures

Contains Playwright fixtures.

Current fixtures:

- pages.fixture.js

## Implemented Tests

### Route Smoke Tests

Checks that all major routes are accessible for all supported cities:

- Almaty
- Astana
- Karaganda
- Pavlodar

Validation includes:

- page opens successfully
- no 5xx response
- header is visible
- footer is visible
- page is not a 404 page

### Navigation Smoke Tests

Checks navigation through the main menu:

- Catalog
- Reviews
- FAQ
- Blog
- Contacts

Validation includes:

- navigation link works
- target section is opened
- page remains functional

### City Tests

Checks city selection and city-specific routes.

### Categories Tests

Checks availability and interaction with vehicle categories.

### FAQ and Blog Tests

Checks visibility of FAQ and Blog sections.

## Installation

```bash
npm install
```

## Install Browsers

```bash
npx playwright install
```

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test File

```bash
npx playwright test tests/route-smoke.spec.js
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## View HTML Report

```bash
npx playwright show-report
```

## Future Improvements

- Consultation form tests
- Catalog tests
- Vehicle details page tests
- API validation
- Network monitoring
- Data-driven testing
- CI/CD improvements
