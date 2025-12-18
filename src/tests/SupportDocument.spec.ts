import { test, expect } from "@playwright/test";
import { EmittedDocumentReportPage } from "@src/pages/EmittedDocumentReportPage";
import { HomePage } from "@src/pages/HomePage";
import { LandingPage } from "@src/pages/LandingPage";
import { SupportDocumentPage } from "@src/pages/SupportDocumentPage";
import { afterTest, annotationsTest, extractDocumentNumber, login } from "@src/utils/Helpers";

test.describe('Support document feature', async () => {

    // Page object instances used across tests
    let landingPage: LandingPage;
    let homePage: HomePage;
    let supportDocumentPage: SupportDocumentPage;
    let emittedDocumentReportPage: EmittedDocumentReportPage
    let supportDocumentNumber: string;

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
        supportDocumentPage = new SupportDocumentPage(page);
        emittedDocumentReportPage = new EmittedDocumentReportPage(page);
        //Preconditions
        await test.step('Login', async () => {
            await login(landingPage);
        });
    });

    test('Create support document successfully', {tag: '@TCSD001' }, async () => {

        await test.step('Navigate to support document module', async () => {
            await supportDocumentPage.navigateToSupportDocumentModule();
        });

        await test.step('Fill support document form', async () => {
            await supportDocumentPage.createSupportDocument();
            supportDocumentNumber = await extractDocumentNumber(await supportDocumentPage.successModal.textContent());
        });

        await test.step('Validating expected modal', async () => { 
            await expect.soft(supportDocumentPage.successModal)
            .toContainText(`Su documento soporte ha sido creado y transmitido a la DIAN con el prefijo SEDS y el número ${supportDocumentNumber}`);
        });

        await test.step('Navigating to emitted document report page', async () => {
            await supportDocumentPage.navigateToEmittedDocumentReport();
        });

        await test.step('Validating expected dian response', async () => {
            const documentState = (await emittedDocumentReportPage.getDocumentState(supportDocumentNumber));
            expect.soft(documentState).toHaveText('Aceptada');
        });

    });



    /**
     * Runs after each test.
     * Takes a screenshot, logs the completion message, and closes the page.
     *
     * @param page - Playwright Page instance to close after the test.
     */
    test.afterEach(async ({ page }) => {
        await afterTest(test.info(), homePage);
    });

});