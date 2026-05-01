import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor() {
    super('/#/login');
  }

  getPageTitle(): Cypress.Chainable<string> {
    return this.getElement('.login-form h1').invoke('text');
  }

  enterEmail(email: string): void {
    cy.wait(1000);
    cy.get('input[type="text"]', { timeout: 15000 }).first().type(email, { force: true });
  }

  enterPassword(password: string): void {
    cy.get('input[type="password"]', { timeout: 15000 }).type(password, { force: true });
  }

  clickLogin(): void {
    cy.get('button', { timeout: 15000 }).contains(/register|log in/i).first().click({ force: true });
  }

  getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.error, [class*="error"]', { timeout: 15000 });
  }

  login(email: string, password: string): void {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
    cy.wait(1000);
  }
}