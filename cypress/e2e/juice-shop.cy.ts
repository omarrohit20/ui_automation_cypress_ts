import { UserFacade } from '../patterns/UserFacade';
import { LoginContext, GoogleLoginStrategy } from '../patterns/LoginStrategy';
import { HomePage } from '../pages/HomePage';

describe('Juice Shop Automation Tests', () => {
  let userFacade: UserFacade;

  beforeEach(() => {
    userFacade = new UserFacade();
  });

  it('should login user using facade pattern', () => {
    userFacade.loginUser('test@example.com', 'password123');
    // Assert login success
    cy.url().should('include', '/dashboard');
  });

  it('should login using Google strategy', () => {
    const loginContext = new LoginContext(new GoogleLoginStrategy());
    cy.visit('/login');
    loginContext.executeLogin('test@gmail.com', 'password123');
    // Assert
  });

  it('should search for products on home page', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.searchProduct('Apple Juice');
    // Assert search results
    cy.get('.product').should('contain', 'Apple Juice');
  });
});