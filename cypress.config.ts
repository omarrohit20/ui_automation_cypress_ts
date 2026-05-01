import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.herokuapp.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});