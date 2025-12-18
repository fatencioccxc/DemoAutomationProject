import {test, Browser, TestInfo } from "@playwright/test";
import { AppConstants } from "@src/constant/AppConstants";
import { BasePage } from "@src/pages/BasePage";
import { LandingPage } from "@src/pages/LandingPage";

export async function login(landingPage: LandingPage): Promise<void> {
    await landingPage.login(
        AppConstants.ACCOUNT,
        AppConstants.PASSWORD
    );
}

export async function annotationsTest(browser: Browser,issue: string ) {
    console.log('Test starting ...');
    test.info().annotations.push(
        { type: 'Browser version', description: browser.version() },
        { type: 'URL', description: AppConstants.URL },
        { type: 'ISSUE', description: `https://redmine.ccxc.co/issues/${issue}` },
    );
}

export async function afterTest(testInfo: TestInfo, basePage: BasePage): Promise<void> {
    console.log('Test finished ...');
    const tag = test.info().tags[0] ?? '@no-tag';
    await basePage.takeScreenshot(
        tag.toString(),
        test.info()
    );
}

export async function extractDocumentNumber(text: string): Promise<string> {
    const match = new RegExp(/el número (\d+)/).exec(text);
    console.log(`Document number: ${match[1]}`);
    return  match ? match[1] : null;
}

export async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}