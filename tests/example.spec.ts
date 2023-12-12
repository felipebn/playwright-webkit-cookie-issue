import { test } from '@playwright/test';

test('google', async ({ page }) => {
  await page.context().addCookies([
      {
          name: 'my-test-cookie',
          value: 'true',
          url: 'https://www.google.com/',
      },
      {
          name: 'my-test-cookie',
          value: 'true',
          url: 'https://www.gstatic.com',
          httpOnly: true,
          secure: true,
          sameSite: 'None',
      },
  ]);
  await page.goto('https://www.google.com/');
});
