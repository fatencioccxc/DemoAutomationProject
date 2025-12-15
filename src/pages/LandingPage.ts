import { Locator, Page } from "@playwright/test";
import { BasePage } from "@src/pages/BasePage";
import { landingPageLocators } from '@src/pages/Locators';
import { ILandingPage } from "@src/pages/interfaces/IPages";

export class LandingPage extends BasePage implements ILandingPage {

    // Locators
    public readonly loginButton: Locator;
    public readonly emailTextBox: Locator;
    public readonly passwordTextBox: Locator;
    public readonly submitButton: Locator;

    /**
     * Creates a new LandingPage instance and initializes all page locators.
     *
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        // Call BasePage constructor to set up shared functionality
        super(page);

        // Initialize all required locators for the landing page
        this.loginButton = page.locator(landingPageLocators.LOGIN_BUTTON);        
        this.emailTextBox = page.locator(landingPageLocators.EMAIL_TEXTBOX);        
        this.passwordTextBox = page.locator(landingPageLocators.PASSWORD_TEXTBOX);        
        this.submitButton = page.locator(landingPageLocators.SUBMIT_BUTTON);        
    }

    /**
     * Performs a login operation using the provided credentials.
     * Navigates to the root URL, opens the login form, fills in the fields, and submits.
     *
     * @param account - The user email or username to be entered into the login form.
     * @param password - The corresponding password for authentication.
     */
    public async login(account: string, password: string): Promise<void> {
        await this.page.goto('/');
        await this.click(this.loginButton);
        await this.write(this.emailTextBox, account);
        await this.write(this.passwordTextBox, password);
        await this.click(this.submitButton);
    }
}