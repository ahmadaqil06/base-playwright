import { test, expect } from '@playwright/test';
import { getEnv } from '../../helpers/env';

const env = getEnv();

test('User can login successfully to OrangeHRM demo', async ({ page }) => {
  await test.step('Open OrangeHRM login page', async () => {
    await page.goto(env.url);
  });

  await test.step('Fill credentials', async () => {
    await page.fill('input[name="username"]', env.username);
    await page.fill('input[name="password"]', env.password);
  });

  await test.step('Submit and validate', async () => {
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
  });
});
