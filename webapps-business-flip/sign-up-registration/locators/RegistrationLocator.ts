import type { Page } from '@playwright/test';

export const registrationLocators = (page: Page) => ({
  // Form Inputs
  fullName: page.locator('input[data-qaid="qa-name-field"]'),
  email: page.locator('input[data-qaid="qa-email-field"]'),
  phoneNumber: page.locator('input[data-qaid="qa-phone-field"]'),
  password: page.locator('input[data-qaid="qa-password-field"]'),

  // Business Type Radio Buttons
  individualBusinessType: page.locator('input[data-qaid="qa-guest-individual-business-type-radio-button"]'),
  legalEntityBusinessType: page.locator('input[data-qaid="qa-guest-legal-business-type-radio-button"]'),

  // Actions & Links
  createAccountButton: page.locator('button[data-qaid="qa-submit-button"]'),
  loginLink: page.locator('button[data-qaid="qa-back-to-login-link"]'),
  showPasswordToggle: page.locator('div[data-qaid="qa-show-password-button"]'),
  countryCodeDropdown: page.locator('div[data-qaid="undefined-trigger"]'),
  
});