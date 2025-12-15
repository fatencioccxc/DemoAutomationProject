import { AppConstants } from '@src/constant/AppConstants';
import { LandingPage } from '@src/pages/LandingPage';
import { expect, test } from '@playwright/test';
import { HomePage } from '@src/pages/HomePage';

test.describe('Login Feature', () => {

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

        console.log(`Test starting ...`);

        // Add annotations for traceability and reporting
        test.info().annotations.push(
            { type: 'Browser version', description: browser.version() },
            { type: 'URL', description: baseURL },
            { type: 'ISSUE', description: 'https://redmine.ccxc.co/issues/7889' },
        );

        // Initialize page object model (POM) classes
        landingPage = new LandingPage(page);
        homePage = new HomePage(page);

    });

    /**
     * Validates that the user can successfully log in.
     *
     * @param page - Playwright Page instance used for page interactions.
     */
    test('Login successfully', { tag: '@TCLG001' }, async ({ page }) => {

        // Step: Perform login actions
        await test.step('Click on login button, writing credentials and submit login', async () => {

            console.log(`Doing login ...`);

            await landingPage.login(
                AppConstants.ACCOUNT,
                AppConstants.PASSWORD
            );

        });

        // Step: Validate expected outcome
        await test.step('Validating expected behavior', async () => {

            await test.step('Home page validations', async () => {
                // Verify that the operations table name is displayed as expected
                expect(homePage.operationsTableName).toHaveText('Tabla de operaciones');
            });

        });

    });

    /**
     * Runs after each test.
     * Takes a screenshot, logs the completion message, and closes the page.
     *
     * @param page - Playwright Page instance to close after the test.
     */
    test.afterEach(async ({ page }) => {

        console.log(`Test finished ...`);

        // Capture a screenshot labeled with the test tag for traceability
        await homePage.takeScreenshot(
            test.info().tags[0].toString(),
            test.info()
        );

        // Close the page instance at the end of the test
        await page.close();

    });

});
