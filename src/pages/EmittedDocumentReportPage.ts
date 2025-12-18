import { Locator, Page } from "@playwright/test";
import { BasePage } from "@src/pages/BasePage";

export class EmittedDocumentReportPage extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }

    public async getDocumentState(supportDocumentNumber: string): Promise<Locator> {
        return this.page.locator(
            `//*[@id="dp-support-document-table-create-adjustment-note-info-row"]/td[a="${supportDocumentNumber}"]/following-sibling::td[6]`
        );
    }
}