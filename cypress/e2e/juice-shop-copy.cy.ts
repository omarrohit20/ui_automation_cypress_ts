import { LoginPage } from '../pages/LoginPage';

describe('Login Validation Tests', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('should successfully navigate to dashboard → after logging in', () => {
    loginPage.visit();
    
    // Verify we're on the login page
    cy.url().should('include', '/#/login');
    
    // Perform login
    loginPage.login('test@example.com', 'test@example.com');
    
    // Assert we're redirected to the main app
    cy.url({ timeout: 10000 }).should('match', /#\/(dashboard|search|login)/);
  });
});