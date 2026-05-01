import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor() {
    super('/#/');
  }

  getPageTitle(): Cypress.Chainable<string> {
    return this.getElement('.title').invoke('text');
  }

  clickLogin(): void {
    cy.get('#navbarAccount', { timeout: 10000 }).click({ force: true });
    cy.get('.mat-focus-indicator', { timeout: 10000 }).contains('Login').click({ force: true });
  }

  clickRegister(): void {
    cy.get('#navbarAccount', { timeout: 10000 }).click({ force: true });
    cy.get('.mat-focus-indicator', { timeout: 10000 }).contains('Register').click({ force: true });
  }

  searchProduct(productName: string): void {
    // Search using available search input
    cy.get('input[placeholder*="search"], input[class*="search"]', { timeout: 10000 }).type(productName, { force: true });
    cy.get('button[class*="search"], [aria-label*="search"]', { timeout: 10000 }).first().click({ force: true });
  }
}