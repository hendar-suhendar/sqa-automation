import { faker } from '@faker-js/faker';

export const getRegistrationData = () => ({
  fullName: faker.person.fullName(),
  email: faker.internet.email({ provider: 'test.com' }).toLowerCase(),
  phoneNumber: `8${faker.string.numeric(10)}`,
  businessTypeIndividu: 'individual' as const,
  businessID: 'mynflip',
  businessTypeLegal: 'legal' as const,
  businessName: 'Test Automation Company',
  password: 'Test@12345678',
});