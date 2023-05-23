import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import cartPage from "../../support/page_object/CartPage";


Given('User is logged in', () => {
  cy.visit("/");
  cy.sign_in("cypress_test","test123");
});

Given('Selects multiple products to add in cart', () => {
  // cy.select_product('Samsung galaxy s6');
  cy.select_product('Asus Full HD');
});

Given('Compares individual price with total price', () => {
  cy.get('#cartur').click();
});

Then('The price should match', () => {
  cy.wait(5000);
  cy.getPrices();
});

Then('User should be able to buy the product', () => {
  // cy.deleteFromCart();
  cartPage.clickPlaceOrderBtn();
  cartPage.fillNameField('Test');
  cartPage.fillCountryField('India');
  cartPage.fillCityField('Pune');
  cartPage.fillCardField(123456789);
  cartPage.fillMonthField('March');
  cartPage.fillYearField(2023);
  cartPage.clickPurchaseBtn();
  cartPage.getStatus().should('have.text','Thank you for your purchase!')
  cartPage.clickOkBtn();
});
