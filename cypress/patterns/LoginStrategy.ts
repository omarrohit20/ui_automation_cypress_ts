// Strategy Pattern for different login methods
export interface LoginStrategy {
  login(email: string, password: string): void;
}

export class StandardLoginStrategy implements LoginStrategy {
  login(email: string, password: string): void {
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="login-submit"]').click();
  }
}

export class GoogleLoginStrategy implements LoginStrategy {
  login(email: string, password: string): void {
    cy.get('[data-cy="google-login"]').click();
    // Simulate Google OAuth
    cy.origin('https://accounts.google.com', () => {
      cy.get('#identifierId').type(email);
      cy.get('#identifierNext').click();
      cy.get('input[type="password"]').type(password);
      cy.get('#passwordNext').click();
    });
  }
}

export class LoginContext {
  private strategy: LoginStrategy;

  constructor(strategy: LoginStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: LoginStrategy): void {
    this.strategy = strategy;
  }

  executeLogin(email: string, password: string): void {
    this.strategy.login(email, password);
  }
}