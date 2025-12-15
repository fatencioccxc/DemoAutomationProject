import { Locator, TestInfo } from '@playwright/test';

export interface IBasePage {
    click(locator: Locator): Promise<void>;
    write(locator: Locator, text: string): Promise<void>;
    takeScreenshot(tag: string, testInfo: TestInfo): Promise<void>;
}

export interface IHomePage {
    operationsTableName: Locator;
}

export interface ILandingPage {
    loginButton: Locator;
    emailTextBox: Locator;
    passwordTextBox: Locator;
    submitButton: Locator;
    login(account: string, password: string): Promise<void>;
}