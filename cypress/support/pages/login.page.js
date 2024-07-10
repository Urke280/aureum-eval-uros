export default {
    userName: () =>cy.get('#user-name'),
    password: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]'),
    closeErrorMessageButton: ()  => cy.get('[data-test="error-button"]'),
    noUserNameErrorMessage: () => cy.xpath('//h3[string()="Epic sadface: Username is required"]'),
    noPasswordErrorMessage: () => cy.xpath('//h3[string()="Epic sadface: Password is required"]'),
    lockedOutUserErrorMessage: () => cy.xpath('//h3[string()="Epic sadface: Sorry, this user has been locked out."]'),
    unregisteredUserErrorMessage: () => cy.xpath('//h3[string()="Epic sadface: Username and password do not match any user in this service"]'),

    loginAsValidUser(){
      this.userName().type(Cypress.env('standard_user'))
      this.password().type(Cypress.env('password'))
      this.loginButton().click()
    }

  };
