import { test as base, Page } from '@playwright/test';
import { getEnv } from '../../helpers/env';

type Fixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<Fixtures>({
  authenticatedPage: async ({ page }, use) => {
    const env = getEnv();
    await page.goto(env.url);
    await page.fill('//input[@placeholder="Username"]', env.username1);
    await page.fill('//input[@placeholder="Password"]', env.password);
    await page.click('//button[@type="submit"]');
    await page.waitForURL('**/viewSystemUsers');
    await use(page);
  }
});

export const expect = base.expect;
