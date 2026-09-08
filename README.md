# Web Automation Test – Business Flip

Automation testing project for the **Business Flip – Sign-Up Registration** web application using **Playwright with TypeScript**.

## Test Case Documentation

The complete manual test cases and test scenarios are documented separately.

**Test Case Document:**

[View Test Cases Sample – Business Flip Sign-Up Registration](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Fhendar-suhendar%2Fsqa-automation%2Frefs%2Fheads%2Fmain%2FTest%2520Cases%2520-%2520Flip%2520For%2520Business.xlsx&wdOrigin=BROWSELINK)


This project is designed to demonstrate a maintainable and scalable QA Automation framework following industry-standard practices such as **Page Object Model (POM), reusable locators, test tagging, environment configuration, Allure reporting, and CI/CD integration**.

## Tech Stack

* **Playwright** – Web UI automation and end-to-end testing
* **TypeScript** – Programming language
* **Page Object Model (POM)** – Separates test logic from page interactions
* **Locator Layer** – Centralized and maintainable UI selectors
* **Playwright Test Runner** – Test execution, fixtures, retries, parallel execution
* **Allure Report** – Detailed and visual test execution reporting
* **Environment Configuration** – Supports configurable test environments
* **Git / GitHub** – Source code management and collaboration
* **CI/CD** – Automated test execution through CI pipeline

## Project Structure

```text
sqa-automation/
│
├── webapps-business-flip/
│   └── sign-up-registration/
│       ├── tests/
│       │   └── signup-registration.spec.ts
│       │
│       ├── pages/
│       │   └── RegistrationPage.ts
│       │
│       ├── locators/
│       │   └── registration.locator.ts
│       │
│       ├── fixtures/
│       ├── test-data/
│       ├── utils/
│       └── constants/
│
├── config/
│   └── env.ts
│
├── reports/
│   ├── allure-results/
│   ├── allure-report/
│   └── playwright-report/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Test Coverage

The automation covers the **Sign-Up Registration** feature, including:

### UI Testing

* Verify Registration page is displayed according to the approved design
* Verify all registration fields are displayed
* Verify Create Account button is displayed
* Verify Login link is displayed

### Functional Testing

* Mandatory field validation
* Full Name validation
* Email validation
* Phone Number validation
* Password validation
* Business Type selection
* Business ID validation
* Create Account button enable/disable behavior
* Invalid input validation
* Maximum input length validation
* Network/loss connection handling

### E2E Testing

* Successful user registration
* Redirect/navigation after successful registration
* Registered user can login successfully

## Test Case Classification

Test cases are categorized using Playwright tags:

```text
@ui
@functional
@e2e
@smoke
@regression
```

This allows specific test suites to be executed without creating unnecessary test folders.

Example:

```bash
npx playwright test --grep @smoke
```

```bash
npx playwright test --grep @regression
```

```bash
npx playwright test --grep @e2e
```

## Page Object Model

The framework applies the **Page Object Model (POM)** pattern.

Page interactions are separated from test scenarios to improve:

* Maintainability
* Reusability
* Readability
* Scalability
* Locator management

Example:

```text
Test
  │
  ▼
RegistrationPage
  │
  ▼
Registration Locators
  │
  ▼
Web Application
```

Test cases focus on **what is being tested**, while Page Objects handle **how the application is interacted with**.

## Locator Strategy

The framework follows a locator priority strategy:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByTestId()`
6. CSS selector
7. XPath as the last resort

Stable `data-testid` attributes are preferred when suitable for long-term automation maintenance.

## Environment Configuration

Environment configuration is separated from the test implementation.

Example:

```env
TEST_ENV=SIT
BASE_URL=https://sit-business-flip.example.com
API_URL=https://sit-api-business-flip.example.com
```

Tests use the configured `baseURL` instead of hardcoding environment URLs.

Example:

```typescript
await page.goto('/register');
```

This allows the same test suite to be executed against different environments without changing the test code.

## Allure Report

The framework uses **Allure Report** to provide detailed test execution results.

Allure provides visibility into:

* Test execution status
* Test steps
* Test duration
* Screenshots
* Video
* Trace
* Test categorization
* Failure details

Generate the Allure report:

```bash
npm run report:allure
```

Open the report:

```bash
npm run report:allure:open
```

## Playwright HTML Report

Playwright's built-in HTML report is also enabled.

```bash
npm run report:playwright
```

The report provides detailed information about test execution, including failed steps, screenshots, traces, and execution duration.

## Test Execution

Run all tests:

```bash
npm test
```

Run UI tests:

```bash
npm run test:ui
```

Run Functional tests:

```bash
npm run test:functional
```

Run E2E tests:

```bash
npm run test:e2e
```

Run Smoke tests:

```bash
npm run test:smoke
```

Run Regression tests:

```bash
npm run test:regression
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

## CI/CD

The automation framework is designed to support CI/CD execution.

Recommended execution flow:

```text
Pull Request
     │
     ▼
Smoke Test
     │
     ▼
Merge
     │
     ▼
Regression Test
     │
     ▼
Allure Report
     │
     ▼
Test Result / Artifacts
```

The tests can be executed on a CI runner such as:

* GitHub Actions
* GitLab CI
* Jenkins

CI/CD execution should use environment variables and secrets rather than storing credentials directly in the repository.

## Reporting & Evidence

Failed tests can automatically capture:

* Screenshot
* Video
* Trace

This helps QA and developers investigate failures efficiently.

## QA Automation Approach

This project follows a structured QA Automation approach:

```text
Test Case Design
       ↓
Test Scenario Classification
       ↓
Automation
       ↓
Page Object Model
       ↓
Reusable Locators
       ↓
Test Execution
       ↓
Allure / Playwright Report
       ↓
CI/CD
```

The objective is not only to automate test cases, but to build an automation framework that is **maintainable, reusable, scalable, and suitable for continuous testing**.

## Author

**QA Engineer | SQA | Automation Testing**

Skills demonstrated in this project:

* Web Automation Testing
* Playwright
* TypeScript
* Page Object Model
* Test Design
* Functional Testing
* UI Testing
* E2E Testing
* Regression Testing
* Test Reporting
* CI/CD
* QA Automation Framework Design
