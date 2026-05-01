// Base Page class following SOLID principles
export abstract class BasePage {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  // Single Responsibility: Navigation
  visit(): void {
    cy.visit(this.url);
  }

  // Open-Closed: Can be extended
  abstract getPageTitle(): Cypress.Chainable<string>;

  // Dependency Inversion: Uses abstraction
  protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  protected getElementByDataCy(dataCy: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-cy="${dataCy}"]`);
  }
}