# Playwright Webkit Cookie Issue 


This repo has code to run a test to reproduce the cookie not being included in requests when using Webkit browser in Playwright.

## Running

To observe the cookie no being sent a proxy like Burp Suite should be used (community edition is fine: https://portswigger.net/burp/communitydownload).

### Working scenario (chrome)

1. Start the proxy
1. Run `npx playwright test --project=chrome`
1. In both `gstatic` and `google` domains requests the cookie `my-test-cookie=true` should be visible in the Request tab.

### NOT Working scenario (webkit)

1. Start the proxy
1. Run `npx playwright test --project=webkit`
1. In both `gstatic` and `google` domains requests the cookie `my-test-cookie=true` is not visible, which was not expected.

