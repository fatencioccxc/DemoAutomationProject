import { IHomePageLocators, ILandingPageLocators, IOperationsTablePageLocators, ISupportDocumentPageLocators } from "@src/pages/interfaces/ILocators"

export const landingPageLocators = {
    LOGIN_BUTTON: '//*[@id="dp-landing-login-redirect-btn"]',
    SUBMIT_BUTTON: '//*[@id="dp-login-next-button-submit-btn"]',
    EMAIL_TEXTBOX: '//*[@id="dp-login-email-input-txt"]',
    PASSWORD_TEXTBOX: '//*[@id="dp-login-password-input-txt"]'
} as const satisfies ILandingPageLocators;

export const homePageLocators = {
    WELCOME_SPAN: '//*[@id="bodyApp"]/div/div[1]/div[2]/div[2]/span',
} as const satisfies IHomePageLocators;

export const OperationsTablePageLocators = {
    SUPPORT_DOCUMENT_MENU_LINK: '//*[@id="dp-operation-table-span-dp-electronic-invoice-sudo-info-rdo"]',
    CREATE_SUPPORT_DOCUMENT_MENU_LINK: '//*[@id="dp-operation-table-span-dp-electronic-invoice-sudo-crsd-info-rdo"]',
    EMITTED_DOCUMENTS_REPORT_MENU_LINK: '//*[@id="dp-operation-table-span-dp-electronic-invoice-sudo-rdde-info-rdo"]',
} as const satisfies IOperationsTablePageLocators;

export const supportDocumentPageLocators = {
    PREFIX_SELECT: '//*[@id="dp-support-document-support-and-buy-prefix-input-txt"]',
    PREFIX_SELECT_OPTION: '//*[@id="style-option"]//li[text()="SEDS"]',
    PAYMENT_TYPE_SELECT: '//*[@id="dp-support-document-support-and-buy-payment-type-input-txt"]',
    PAYMENT_TYPE_SELECT_OPTION: '//*[@id="style-option"]//li[text()="Contado"]',
    CURRENCY_SELECT: '//*[@id="dp-support-document-support-and-buy-foreign-exchange-input-txt"]',
    CURRENCY_SELECT_OPTION: '//*[@id="style-option"]//li[text()="Peso colombiano"]',
    SUPPLIER_SELECT: '//*[@id="dp-support-document-support-and-buy-name-supplier-input-drp"]',
    SUPPLIER_SELECT_OPTION: '//*[@id="style-option"]//li[text()="PORCELUMENX"]',
    PURCHASE_ORDER_INPUT: '//*[@id="dp-support-document-support-and-buy-number-purchase-order-input-txt"]',
    PURCHASING_MANAGER_SELECT: '//*[@id="dp-support-document-support-and-buy-purchasing-manager-input-drp"]',
    PURCHASING_MANAGER_SELECT_OPTION: '(//*[@id="style-option"]//li[text()="Fatencio"])[1]',
    CLASSIFICATION_SELECT: '//*[@id="dp-support-document-support-and-buy-clasification-input-txt"]',
    CLASSIFICATION_SELECT_OPTION: '//*[@id="style-option"]//li[text()="Productos"]',
    WAREHOUSE_SELECT: '//*[@id="dp-support-document-support-and-buy-options-warehouses-input-drp"]',
    WAREHOUSE_SELECT_OPTION: '//*[@id="style-option"]//li[text()="bodega"]',
    ADD_PRODUCT_BUTTON: '//button[text()="+ Agregar compra producto"]',
    SKU_SELECT: '//*[@id="dp-support-document-support-and-buy-products-0-input-row"]/td[2]/div/div/div[2]/div/div/input',
    SKU_SELECT_OPTION: '//*[@id="dp-support-document-support-and-buy-products-0-input-row"]/td[2]/div/div/div[2]/div/div/input/following-sibling::div[@class="select-search__search"]//li[text()="BOL-TOTTO"]',
    UNIT_COST_INPUT: '//*[@id="dp-support-document-support-and-buy-products-0-input-row"]/td[6]/div/div/input',
    QUANTITY_INPUT: '//*[@id="dp-support-document-support-and-buy-products-0-input-row"]/td[7]/div/div/input',
    DISCOUNT_PERCENTAGE_INPUT: '//*[@id="dp-support-document-support-and-buy-products-0-input-row"]/td[9]/div/input',
    DELIVERY_COST_INPUT: '//input[@id="dp-electronic-invoice-shipping-cost-table-3-input-txt"]',
    PAYMENT_METHOD_SELECT: '//*[@id="dp-support-document-support-and-buy-payment-method-input-txt"]',
    PAYMENT_METHOD_SELECT_OPTION: '//*[@id="style-option"]//li[text()="Efectivo"]',
    PREVIEW_BUTTON: '//*[@id="dp-buttons-support-document-right-button-custom-action-btn"]',
    TRANSMIT_BUTTON: '//button[text()="Transmitir"]',
    SUCCESS_MODAL: '//*[@id="dp-support-document-modals-success-correction-invoice-container-mdl"]/div/div[2]/div',
    SUCCESS_MODAL_NEXT_BUTTON: '//button[@id="dp-support-document-modals-success-correction-invoice-container-mdl-modal-type-next-action-btn"]',
} as const satisfies ISupportDocumentPageLocators;