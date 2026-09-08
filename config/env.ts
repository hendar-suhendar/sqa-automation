import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const env = {
  environment: process.env.TEST_ENV || 'SIT',
  baseUrl: process.env.BASE_URL || 'https://business.flip.id',
  apiUrl: process.env.API_URL || '',
};