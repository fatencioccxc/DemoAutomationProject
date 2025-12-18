import { LandingPage } from "@src/pages/LandingPage";
import { expect, test } from "@playwright/test";
import { HomePage } from "@src/pages/HomePage";
import { afterTest, annotationsTest, login } from "@src/utils/Helpers"

test.describe('Login Feature', async () => {

    // Page object instances used across tests
    let landingPage: LandingPage;
    let homePage: HomePage;

    /**
     * Runs before each test execution.
     * Initializes page objects, adds annotations, and logs start message.
     *
     * @param page - Playwright Page instance.
     * @param baseURL - Base URL configured for the test environment.
     * @param browser - Browser instance to retrieve version and metadata.
     */
    test.beforeEach(async ({ page, baseURL, browser }) => {
        await annotationsTest(browser, '7889');
        landingPage = new LandingPage(page);
        homePage = new HomePage(page);
    });

    test('Login successfully', { tag: '@TCLG001' }, async ({ page }) => {

        await test.step('Click on login button, writing credentials and submit login button', async () => {
            await login(landingPage);
        });

        await test.step('Validating expected behavior', async () => {
            await test.step('Home page validations', async () => {
               await expect.soft(homePage.welcomeSpanText).toHaveText('información y comunicaciones');
            });
        });

    });

    test.afterEach(async ({ page }) => {
        await afterTest(test.info(), homePage);
    });

});
