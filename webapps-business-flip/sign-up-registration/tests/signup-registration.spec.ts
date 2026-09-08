import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { getRegistrationData } from '../test-data/RegistrationData';

test.describe('Registration Specification Tests', () => {
  let registrationPage: RegistrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.open();
  });

  test('TC-REG-001: Verify user can register Individual successfully', async ({ page }) => {
    const data = getRegistrationData();

    await registrationPage.enterFullName(data.fullName);
    await registrationPage.enterEmail(data.email);
    await registrationPage.enterPhoneNumber(data.phoneNumber);
    await registrationPage.selectBusinessType(data.businessTypeIndividu);
    await registrationPage.enterBusinessID(data.businessID);
    await registrationPage.enterPassword(data.password);
    await registrationPage.clickCreateAccount();

    await test.step('Verify user successfully registered', async () => {
      await expect(page).toHaveURL(/.*(otp|verification|dashboard)/);
    });
  });

  test('TC-REG-002: Verify user can register Legal Entity successfully', async ({ page }) => {
    const data = getRegistrationData();

    await registrationPage.enterFullName(data.fullName);
    await registrationPage.enterEmail(data.email);
    await registrationPage.enterPhoneNumber(data.phoneNumber);
    await registrationPage.selectBusinessType(data.businessTypeLegal);
    await registrationPage.enterBusinessName(data.businessName);
    await registrationPage.enterPassword(data.password);
    await registrationPage.clickCreateAccount();

    await test.step('Verify user successfully registered', async () => {
      await expect(page).toHaveURL(/.*(otp|verification|dashboard)/);
    });
  });
});