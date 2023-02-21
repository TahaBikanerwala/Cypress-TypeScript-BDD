

Cypress.Commands.add("sign_in",(username: string, password: string)=>{
    cy.get("#login2").click();
    cy.wait(1000);
    cy.get("#loginusername").type(username),
    cy.get("#loginpassword").type(password),
    cy.get('button').contains("Log in").click();
    
})

// Cypress.Commands.add("sign_up",(el,name,lname)=>{
//     cy.get("#login2").click();
//     cy.get("#loginusername"),
//     cy.get("#loginpassword"),
//     cy.get('button').contains("Log in")
// })