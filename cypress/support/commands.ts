// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("sign_in", (username: string, password: string) => {
    cy.get("#login2").click();
    cy.wait(5000);
    cy.get("#loginusername").type(username);
    cy.get("#loginpassword").type(password);
    cy.wait(2000)
    cy.get('button').contains("Log in").click();
})

Cypress.Commands.add("select_product", (productName: string) => {
    // cy.get('.card-title > a').should('include.text',productName);
    cy.get('.card-title > a').each(($el, index) => {
        // for (let i = 0; i < $el.length; i++) {
            if ($el.text().includes(productName)) {
                cy.get('.card-title > a').eq(index).click();
                cy.get('.btn-success').click();
                cy.get('#nava').click();
                cy.url().should('include', 'index');
            }

        // }
        cy.select_product(productName);

    });
    cy.get('#next2').click({ force:true });


})

Cypress.Commands.add("getPrices", () => {
    var amount: number = 0;
    var total: number = 0;

    cy.get('#tbodyid > .success > td:nth-child(3)').should('be.visible').each($el => {

        for (let i = 0; i < $el.length; i++) {
            amount = amount + Number($el.text());
            cy.log('****************' + amount + ' type of amount is ' + typeof (amount));
            cy.log('Length of elements is ' + $el.length);
        }
    }).then(() => {
        cy.get('#totalp').filter(':visible').then($el => {
            total = Number($el.text());
        })
    }).then(() => {
        expect(amount).to.be.equal(total);
    })

})

Cypress.Commands.add('deleteFromCart', () => {

    if (cy.get('#tbodyid > .success > td:nth-child(4) > a').filter(':visible').should('be.visible')) {
        cy.get('#tbodyid > .success > td:nth-child(4) > a').each(($el) => {
            for (let i = 0; i < $el.length; i++) {
                cy.get('#tbodyid > .success > td:nth-child(4) > a').eq(0).click();
                cy.wait(5000);
            }
        })
    }
})