import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
let username = "cypress_test"
let password = "test123"

Given('User is logged out', () => {
  cy.visit("/");
});

When('user signs in to the website', () => {
  cy.sign_in(username,password);
});

Then('User should see the homepage title as {string}', (title) => {
  cy.get('title').should('have.text',title);
});

Then('User should see Heading as {string}', (heading) => {
  cy.get('#nava').should('include.text',heading);
  cy.get('#nameofuser').should('have.text',`Welcome ${username}`);
});

