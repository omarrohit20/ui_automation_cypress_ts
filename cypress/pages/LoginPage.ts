import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor() {
    super('/login');
  }

  getPageTitle(): Cypress.Chainable<string> {
    return this.getElement('.login-form h1').invoke('text');
  }

  enterEmail(email: string): void {
    this.getElementByDataCy('email').type(email);
  }

  enterPassword(password: string): void {
    this.getElementByDataCy('password').type(password);
  }

  clickLogin(): void {
    this.getElementByDataCy('login-submit').click();
  }

  login(email: string, password: string): void {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}