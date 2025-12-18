import { Locator, Page } from "@playwright/test";
import { BasePage } from "@src/pages/BasePage";
import { OperationsTablePageLocators, supportDocumentPageLocators } from "@src/pages/pageLocators/Locators";
import { ISupportDocumentPage } from "@src/pages/interfaces/IPages";
import { sleep } from "@src/utils/Helpers";

export class SupportDocumentPage extends BasePage implements ISupportDocumentPage {

  public readonly supportDocumentMenuLink: Locator;
  public readonly createSupportDocumentLink: Locator;
  public readonly emittedDocumentsReportSubMenuLink: Locator;
  public readonly prefixSelect: Locator;
  public readonly prefixSelectOption: Locator;
  public readonly paymentTypeSelect: Locator;
  public readonly paymentTypeSelectOption: Locator;
  public readonly currencySelect: Locator;
  public readonly currencySelectOption: Locator;
  public readonly supplierSelect: Locator;
  public readonly supplierSelectOption: Locator;
  public readonly purchaseOrderInput: Locator;
  public readonly purchasingManagerSelect: Locator;
  public readonly purchasingManagerSelectOption: Locator;
  public readonly classificationSelect: Locator;
  public readonly classificationSelectOption: Locator;
  public readonly warehouseSelect: Locator;
  public readonly warehouseSelectOption: Locator;
  public readonly addProductButton: Locator;
  public readonly skuSelect: Locator;
  public readonly quantityInput: Locator;
  public readonly unitCostInput: Locator;
  public readonly discountInput: Locator;
  public readonly deliveryCostInput: Locator;
  public readonly paymentMethodSelect: Locator;
  public readonly previewButton: Locator;
  public readonly transmitButton: Locator;
  public readonly successModal: Locator;
  public readonly successModalNextButton: Locator;

  constructor(page: Page) {
    super(page);

    this.supportDocumentMenuLink = this.page.locator(OperationsTablePageLocators.SUPPORT_DOCUMENT_MENU_LINK);
    this.createSupportDocumentLink = this.page.locator(OperationsTablePageLocators.CREATE_SUPPORT_DOCUMENT_MENU_LINK);
    this.emittedDocumentsReportSubMenuLink = this.page.locator(OperationsTablePageLocators.EMITTED_DOCUMENTS_REPORT_MENU_LINK);
    this.prefixSelect = this.page.locator(supportDocumentPageLocators.PREFIX_SELECT);
    this.prefixSelectOption = this.page.locator(supportDocumentPageLocators.PREFIX_SELECT_OPTION);
    this.paymentTypeSelect = this.page.locator(supportDocumentPageLocators.PAYMENT_TYPE_SELECT);
    this.paymentTypeSelectOption = this.page.locator(supportDocumentPageLocators.PAYMENT_TYPE_SELECT_OPTION);
    this.currencySelect = this.page.locator(supportDocumentPageLocators.CURRENCY_SELECT);
    this.currencySelectOption = this.page.locator(supportDocumentPageLocators.CURRENCY_SELECT_OPTION);
    this.supplierSelect = this.page.locator(supportDocumentPageLocators.SUPPLIER_SELECT);
    this.supplierSelectOption = this.page.locator(supportDocumentPageLocators.SUPPLIER_SELECT_OPTION);
    this.purchaseOrderInput = this.page.locator(supportDocumentPageLocators.PURCHASE_ORDER_INPUT);
    this.purchasingManagerSelect = this.page.locator(supportDocumentPageLocators.PURCHASING_MANAGER_SELECT);
    this.purchasingManagerSelectOption = this.page.locator(supportDocumentPageLocators.PURCHASING_MANAGER_SELECT_OPTION);
    this.classificationSelect = this.page.locator(supportDocumentPageLocators.CLASSIFICATION_SELECT);
    this.classificationSelectOption = this.page.locator(supportDocumentPageLocators.CLASSIFICATION_SELECT_OPTION);
    this.warehouseSelect = this.page.locator(supportDocumentPageLocators.WAREHOUSE_SELECT);
    this.warehouseSelectOption = this.page.locator(supportDocumentPageLocators.WAREHOUSE_SELECT_OPTION);
    this.addProductButton = this.page.locator(supportDocumentPageLocators.ADD_PRODUCT_BUTTON);
    this.skuSelect = this.page.locator(supportDocumentPageLocators.SKU_SELECT);
    this.quantityInput = this.page.locator(supportDocumentPageLocators.QUANTITY_INPUT);
    this.unitCostInput = this.page.locator(supportDocumentPageLocators.UNIT_COST_INPUT);
    this.discountInput = this.page.locator(supportDocumentPageLocators.DISCOUNT_PERCENTAGE_INPUT);
    this.deliveryCostInput = this.page.locator(supportDocumentPageLocators.DELIVERY_COST_INPUT);
    this.paymentMethodSelect = this.page.locator(supportDocumentPageLocators.PAYMENT_METHOD_SELECT);
    this.previewButton = this.page.locator(supportDocumentPageLocators.PREVIEW_BUTTON);
    this.transmitButton = this.page.locator(supportDocumentPageLocators.TRANSMIT_BUTTON);
    this.successModal = this.page.locator(supportDocumentPageLocators.SUCCESS_MODAL);
    this.successModalNextButton = this.page.locator(supportDocumentPageLocators.SUCCESS_MODAL_NEXT_BUTTON);
  }

  public async navigateToSupportDocumentModule(): Promise<void> {
    console.log('Navigating to support document');
    await this.click(this.supportDocumentMenuLink);
    await this.click(this.createSupportDocumentLink);
  }

  public async createSupportDocument(): Promise<void> {
    console.log('Filling support document form ...');
    await this.click(this.prefixSelect);
    await this.click(this.prefixSelectOption);
    await this.click(this.paymentTypeSelect);
    await this.click(this.paymentTypeSelectOption);
    await this.selectByOption(this.currencySelect, 'Peso colombiano');
    await this.click(this.supplierSelect);
    await this.click(this.supplierSelectOption);
    await this.write(this.purchaseOrderInput, '1234567890');
    await this.click(this.purchasingManagerSelect);
    await this.click(this.purchasingManagerSelectOption);
    await this.click(this.classificationSelect);
    await this.click(this.classificationSelectOption);
    await this.click(this.warehouseSelect);
    await this.click(this.warehouseSelectOption);
    await this.click(this.addProductButton);
    await this.selectByOption(this.skuSelect, 'BOL-TOTTO');
    await this.write(this.unitCostInput, '55000');
    await this.write(this.quantityInput, '10');
    await this.write(this.discountInput, '5');
    await this.write(this.deliveryCostInput, '10000')
    await this.selectByOption(this.paymentMethodSelect, 'Efectivo');
    await this.click(this.previewButton);
    await this.waitLoadModal();
    await this.click(this.transmitButton);
    await sleep(20_000);
  }

  public async navigateToEmittedDocumentReport(): Promise<void> {
    console.log('Navigating to emitted document report ...');    
    await this.click(this.successModalNextButton);
    await this.waitLoadModal();
  }

}