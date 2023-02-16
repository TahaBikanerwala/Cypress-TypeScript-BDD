declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.click('username','password')
       */
       sign_in(username: string, password: string):Chainable<Element>;
       sign_up( el: Element, name: string, lname: string)
    }
  }