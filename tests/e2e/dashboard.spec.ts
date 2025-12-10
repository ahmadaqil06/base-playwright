import { test, expect } from '../fixtures/auth.fixture';

test('Dashboard loads correctly after authentication', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.locator('h6:has-text("Dashboard")')).toBeVisible();
});
