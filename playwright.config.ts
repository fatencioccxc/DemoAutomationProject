import { defineConfig, devices } from '@playwright/test';
import { AppConstants } from '@src/constant/AppConstants';

export default defineConfig({
  testDir: './src/tests',
  outputDir: './src/test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  expect: {
    timeout: AppConstants.TIMEOUT
  },
  timeout: AppConstants.TIMEOUT,
  use: {
    baseURL: AppConstants.URL,
    trace: 'on',
    deviceScaleFactor: undefined,
    viewport: AppConstants.SCREEN_SIZE,
    headless: false,
    launchOptions: {
      slowMo: AppConstants.SLOW_MOTION,
      args: [
        '--incognito', 
        '--disable-features=Translate'
      ],
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
    
});
