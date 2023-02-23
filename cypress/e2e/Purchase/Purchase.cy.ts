import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { eq } from 'cypress/types/lodash';

Given('User is logged in', () => {
  cy.visit("/");
  cy.sign_in("cypress_test","test123");
});

Given('Selects multiple products to add in cart', () => {
  cy.select_product('Samsung galaxy s6');
  cy.select_product('lumia');
  cy.select_product('Nexus');
});

Given('Compares individual price with total price', () => {
  cy.get('#cartur').click();
});

Then('The price should match', () => {
  cy.wait(5000);
  cy.getPrices();
});

Then('User should be able to buy the product', () => {
  cy.deleteFromCart();
});
