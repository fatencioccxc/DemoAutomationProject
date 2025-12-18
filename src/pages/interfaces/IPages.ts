import { Locator, TestInfo } from "@playwright/test";

export interface IBasePage {
    click(locator: Locator): Promise<void>;
    write(locator: Locator, text: string): Promise<void>;
    takeScreenshot(tag: string, testInfo: TestInfo): Promise<void>;
}

export interface IHomePage {
    welcomeSpanText: Locator;
}

export interface ILandingPage {
    loginButton: Locator;
    emailTextBox: Locator;
    passwordTextBox: Locator;
    submitButton: Locator;
    login(account: string, password: string): Promise<void>;
}

export interface ISupportDocumentPage {
    supportDocumentMenuLink: Locator;
    createSupportDocumentLink: Locator;
    emittedDocumentsReportSubMenuLink: Locator;
    prefixSelect: Locator;
    prefixSelectOption: Locator;
    paymentTypeSelect: Locator;
    paymentTypeSelectOption: Locator;
    currencySelect: Locator;
    currencySelectOption: Locator;
    supplierSelect: Locator;
    supplierSelectOption: Locator;
    purchaseOrderInput: Locator;
    purchasingManagerSelect: Locator;
    purchasingManagerSelectOption: Locator;
    classificationSelect: Locator;
    classificationSelectOption: Locator;
    warehouseSelect: Locator;
    warehouseSelectOption: Locator;
    addProductButton: Locator;
    skuSelect: Locator;
    quantityInput: Locator;
    unitCostInput: Locator;
    discountInput: Locator;
    deliveryCostInput: Locator;
    paymentMethodSelect: Locator;
    previewButton: Locator;
    transmitButton: Locator;
    successModal: Locator;
    successModalNextButton: Locator;
    navigateToSupportDocumentModule(): Promise<void>;
    createSupportDocument(): Promise<void>
    navigateToEmittedDocumentReport(): Promise<void>;
}

export interface IEmittedDocumentReportPage {
    getDocumentState(): Promise<string>;
}