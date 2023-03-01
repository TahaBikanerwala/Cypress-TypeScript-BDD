class CartPage{
    elements={
        clickPlaceOrderBtn: ()=> cy.get('.col-lg-1 > .btn'),
        nameField: ()=> cy.get('#name'),
        countryField: ()=> cy.get('#country'),
        cityField: ()=> cy.get('#city'),
        cardField: ()=> cy.get('#card'),
        monthField: ()=> cy.get('#month'),
        yearField: ()=> cy.get('#year'),
        PurchaseBtn: ()=> cy.get('#orderModal').find('.btn-primary'),
        statusHeading: ()=> cy.get('.sweet-alert > h2'),
        okBtn : ()=> cy.get('.confirm')
    }

    clickPlaceOrderBtn(){
        this.elements.clickPlaceOrderBtn().click();
    }

    fillNameField(name: string){
        this.elements.nameField().type(name);
    }

    fillCountryField(country: string){
        this.elements.countryField().type(country);
    }

    fillCityField(city: string){
        this.elements.cityField().type(city);
    }

    fillCardField(cardNumber: any){
        this.elements.cardField().type(cardNumber);
    }

    fillMonthField(month: string){
        this.elements.monthField().type(month);
    }

    fillYearField(year: any){
        this.elements.yearField().type(year)
    }

    clickPurchaseBtn(){
        this.elements.PurchaseBtn().click();
    }

    getStatus(){
        return this.elements.statusHeading();
    }
    
    clickOkBtn(){
        this.elements.okBtn().click();
    }

}

export default new CartPage();