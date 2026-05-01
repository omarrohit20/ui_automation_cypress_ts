import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor() {
    super('/');
  }

  getPageTitle(): Cypress.Chainable<string> {
    return this.getElement('.title').invoke('text');
  }

  clickLogin(): void {
    this.getElementByDataCy('login-button').click();
  }

  clickRegister(): void {
    this.getElementByDataCy('register-button').click();
  }

  searchProduct(productName: string): void {
    this.getElementByDataCy('search-input').type(productName);
    this.getElementByDataCy('search-button').click();
  }
}