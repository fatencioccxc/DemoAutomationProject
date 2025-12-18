import { Page, Locator, TestInfo } from '@playwright/test';
import { IBasePage } from '@src/pages/interfaces/IPages';

export class BasePage implements IBasePage {

    protected readonly page: Page;

    /**
     * Creates a new BasePage instance.
     *
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Clicks the given locator using force mode.
     * Force is used to bypass Playwright's actionability checks.
     *
     * @param locator - The element locator that will be clicked.
     */
    public async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    /**
     * Clears the target input field and types the provided text.
     * Ensures the field is emptied before filling it.
     *
     * @param locator - The input field locator to interact with.
     * @param text - The text value to type into the input field.
     */
    public async write(locator: Locator, text: string): Promise<void> {
        await locator.clear();
        await locator.fill(text);
    }


    /**
     * Selects an option from a dropdown menu by matching the given option text.
     * This method is just for electronic documents
     * @param locator (Locator) - The locator of the dropdown menu.
     * @param option (string) - The option text to select.
     */
    public async selectByOption(locator: Locator, option: string): Promise<void> {
        await this.click(locator);
        await this.page.getByText(`${option}`, { exact: true }).filter({ hasText: `${option}` }).last().click();
    }

     /**
     * Selects an option from a dropdown menu by matching the given option text.
     * @param locator (Locator) - The locator of the dropdown menu.
     * @param option (string) - The option text to select.
     */
     public async selectDropdownOption(locator: Locator, option: string): Promise<void> {
        await this.click(locator);
        const regex = new RegExp(`^${option}`);
        await this.click(this.page.locator(`text=${regex}`).first());
    }

    /**
     * Waits for the page and modal loader to fully load before proceeding.
     * 
     * This function ensures that:
     * 1. The DOM content is completely loaded.
     * 2. Network activity has settled, meaning all necessary requests have finished.
     * 3. A custom loading modal ('custom-isLoader-modal') has disappeared from the page.
     * 
     * This helps avoid interacting with elements before the page is fully ready, 
     * reducing flakiness in automated tests.
     */
    public async waitLoadModal(): Promise<void> {
        try {
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.waitForLoadState('networkidle');
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Takes a full-page screenshot and attaches it to the test report.
     * The screenshot file name includes a custom tag combined with the current date.
     *
     * @param tag - Custom label used to identify the screenshot file.
     * @param testInfo - Playwright TestInfo object used to attach the screenshot to the report.
     */
    public async takeScreenshot(tag: string, testInfo: TestInfo): Promise<void> {
        const date: Date = new Date();
        
        // Build a screenshot name using tag and date components
        const dateScreenShot = `${tag}-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

        // Capture full-page screenshot and save it to the test-results folder
        const screenshot = await this.page.screenshot({
            path: `src/test-results/${dateScreenShot}.png`,
            fullPage: true
        });

        // Attach screenshot to the test report for easier debugging
        await testInfo.attach(`${dateScreenShot}`, {
            body: screenshot,
            contentType: 'image/png'
        });
    }

}
