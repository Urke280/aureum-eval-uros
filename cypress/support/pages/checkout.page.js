export default {
    pageTitle: () => cy.get('[data-test="title"]'),
    cancelButton: () =>cy.get('#cancel'),
    continueButton: () => cy.get('#continue'),
    finishButton: () => cy.get('#finish'),
    firstNameField: () => cy.get('#first-name'),
    lastNameField: () => cy.get('#last-name'),
    zipCodeField: () => cy.get('#postal-code'),
    errorMessage: () => cy.get('[data-test="error"]'),
    checkoutItem: () => cy.get('[data-test="inventory-item-name"]'),
    successMessage: () => cy.get('[data-test="complete-header"]'),
    backHomeButton: () => cy.get('#back-to-products'),

    sauceLabsBackpackTitle: () => cy.get('#item_4_title_link'),


    clickCancelButton(){
      this.cancelButton().click()
    },

    clickContinueButton(){
      this.continueButton().click()
    },

    clickFinishButton(){
      this.finishButton().click()
    },

    clickBackHomeButton(){
      this.backHomeButton().click()
    },

    provideValidUserInfo(){
      this.firstNameField().type(Cypress.env('user_first_name'))
      this.lastNameField().type(Cypress.env('user_last_name'))
      this.zipCodeField().type(Cypress.env('user_zip_code'))
      this.continueButton().click()
    }
  };
