import { test, expect } from '@playwright/test';
import { getEnv } from '../../helpers/env';
import dotenv from 'dotenv';

dotenv.config();
const env = getEnv();


test('User can login successfully to OrangeHRM demo', async ({ page }) => {
  await test.step('Open OrangeHRM login page', async () => {
    await page.goto(env.url);
  });

  await test.step('Fill credentials', async () => {
    await page.fill('input[name="username"]', env.unicname1);
    await page.fill('input[name="password"]', env.password);
  });

  await test.step('Submit and validate', async () => {
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('**/dashboard/index');
  });
});
