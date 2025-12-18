import { Locator, Page } from "@playwright/test";
import { BasePage } from "@src/pages/BasePage";
import { homePageLocators } from "@src/pages/pageLocators/Locators";
import { IHomePage } from "@src/pages/interfaces/IPages";

export class HomePage extends BasePage implements IHomePage {

    // Locator for the operations table name displayed on the home page
    public readonly welcomeSpanText: Locator;

    /**
     * Creates a new HomePage instance and initializes all page locators.
     *
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        // Call the BasePage constructor to set up the shared page instance
        super(page);

        // Initialize the locator for the operations table name using the predefined selector
        this.welcomeSpanText = page.locator(homePageLocators.WELCOME_SPAN);
    }
}
