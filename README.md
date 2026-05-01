# Juice Shop UI Automation Project

This project demonstrates UI automation testing for the [OWASP Juice Shop](https://juice-shop.herokuapp.com/) using Cypress and TypeScript, incorporating SOLID principles and design patterns.

## Design Patterns Implemented

### SOLID Principles
- **Single Responsibility**: Each class has one reason to change
- **Open-Closed**: Classes are open for extension, closed for modification
- **Liskov Substitution**: Subtypes are substitutable for their base types
- **Interface Segregation**: Clients depend only on methods they use
- **Dependency Inversion**: Depend on abstractions, not concretions

### Page Object Model (POM)
- `BasePage`: Abstract base class for all page objects
- `HomePage`: Handles home page interactions
- `LoginPage`: Handles login page interactions

### Strategy Pattern
- `LoginStrategy`: Interface for different login methods
- `StandardLoginStrategy`: Standard email/password login
- `GoogleLoginStrategy`: Google OAuth login
- `LoginContext`: Context to execute strategies

### Facade Pattern
- `UserFacade`: Simplified interface for complex user operations

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Open Cypress UI:
   ```bash
   npm run test:open
   ```

## Project Structure

```
cypress/
├── e2e/              # Test files
├── pages/            # Page Object Model classes
├── patterns/         # Design pattern implementations
├── support/          # Custom commands and support files
└── fixtures/         # Test data
```

## Usage

The project uses TypeScript for type safety and follows best practices for maintainable test automation code.