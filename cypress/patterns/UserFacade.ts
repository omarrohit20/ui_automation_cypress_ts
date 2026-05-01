// Facade Pattern for user actions
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LoginContext, StandardLoginStrategy } from './LoginStrategy';

export class UserFacade {
  private homePage: HomePage;
  private loginPage: LoginPage;
  private loginContext: LoginContext;

  constructor() {
    this.homePage = new HomePage();
    this.loginPage = new LoginPage();
    this.loginContext = new LoginContext(new StandardLoginStrategy());
  }

  // Simplified interface for user login
  loginUser(email: string, password: string): void {
    this.homePage.visit();
    this.homePage.clickLogin();
    this.loginContext.executeLogin(email, password);
  }

  // Can add more complex operations like registration, logout, etc.
  registerUser(email: string, password: string, confirmPassword: string): void {
    this.homePage.visit();
    this.homePage.clickRegister();
    // Assume RegisterPage exists
    // this.registerPage.register(email, password, confirmPassword);
  }
}