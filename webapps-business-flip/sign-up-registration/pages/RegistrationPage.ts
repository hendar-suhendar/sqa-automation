import { test, type Page } from '@playwright/test';
import { registrationLocators } from '../locators/RegistrationLocator';

export class RegistrationPage {
  readonly page: Page;
  readonly locator: ReturnType<typeof registrationLocators>;

  constructor(page: Page) {
    this.page = page;
    this.locator = registrationLocators(page);
  }

  async open() {
    await test.step('Open registration page', async () => {
      console.log('[STEP] Opening registration page');
      await this.page.goto('https://business.flip.id/signup');
    });
  }

  async enterFullName(fullName: string) {
    await test.step(`Enter Full Name: ${fullName}`, async () => {
      console.log(`[STEP] Entering Full Name: ${fullName}`);
      await this.locator.fullName.fill(fullName);
    });
  }

  async enterEmail(email: string) {
    await test.step(`Enter Email: ${email}`, async () => {
      console.log(`[STEP] Entering Email: ${email}`);
      await this.locator.email.fill(email);
    });
  }

  async enterPhoneNumber(phoneNumber: string) {
    await test.step(`Enter Phone Number: ${phoneNumber}`, async () => {
      console.log(`[STEP] Entering Phone Number: ${phoneNumber}`);
      await this.locator.phoneNumber.fill(phoneNumber);
    });
  }

  async selectBusinessType(type: 'individual' | 'legal') {
    await test.step(`Select Business Type: ${type}`, async () => {
      console.log(`[STEP] Selecting Business Type: ${type}`);
      if (type === 'individual') {
        await this.locator.individualBusinessType.check({ force: true });
      } else {
        await this.locator.legalEntityBusinessType.check({ force: true });
      }
    });
  }

    async enterBusinessID(businessID: string) {
    await test.step(`Enter Business ID: ${businessID}`, async () => {
        await this.locator.businessID.fill(businessID);
    });
    }

    async enterBusinessName(businessName: string) {
    await test.step(`Enter Business Name: ${businessName}`, async () => {
        await this.locator.businessName.fill(businessName);
    });
    }
  async enterPassword(password: string) {
    await test.step('Enter Password', async () => {
      console.log('[STEP] Entering Password');
      await this.locator.password.fill(password);
    });
  }

  async clickCreateAccount() {
    await test.step('Click Create Account button', async () => {
      console.log('[STEP] Clicking Create Account');
      await this.locator.createAccountButton.click();
    });
  }
}