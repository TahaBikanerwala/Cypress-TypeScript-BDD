
class HomePage{
    elements={
        loginLink:  ()=> cy.get("#login2"),
        userNameElement: ()=> cy.get("#loginusername"),
        passwordElement: ()=> cy.get("#loginpassword"),
        loginButton: ()=> cy.get('button').contains("Log in"),
        accountUser: ()=> cy.get('#nameofuser')
    }

    clickLoginLink(){
        this.elements.loginLink().click();
        cy.wait(1000);
    }

    typeUsername(username: string){
        this.elements.userNameElement().type(username);
    }

    typePassword(password: string){
        this.elements.passwordElement().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    getAccountUser(){
        return this.elements.accountUser();
    }
}

export default new HomePage();