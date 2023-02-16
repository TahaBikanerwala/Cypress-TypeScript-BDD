import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../../support/page_object/HomePage";

Given('User launches the Swaglab website', () => {
    cy.visit("/");
});

When('inputs the username', () => {
    homePage.clickLoginLink();
    homePage.typeUsername("cypress_test");
});

When('inputs the password', () => {
    homePage.typePassword("test123")
});

When(/^User attempts to Login$/, () => {
   homePage.clickLoginButton() 
});

Then(/^User should see Products page$/, () => {
    homePage.getAccountUser().should('include.text','cypress_test');
});
