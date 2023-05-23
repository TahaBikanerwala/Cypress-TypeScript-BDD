import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('User is logged out', () => {
  cy.visit("/");
});

When('user signs in to the website', () => {
  cy.sign_in("cypress_test","test123");
});

Then('User should see the homepage title as {string}', (title) => {
  cy.get('title').should('have.text',title);
});

Then('User should see Heading as {string}', (heading) => {
  cy.get('#nava').should('include.text',heading);
  cy.get('.dropdown-link-2.w-dropdown-link').click();
});

