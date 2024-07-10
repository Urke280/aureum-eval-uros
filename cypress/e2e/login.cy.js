import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';

context('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
  })

const testData = require('../fixtures/users-credentials.json')

  describe('Data driven User login test', () => {

      testData.forEach((credentials) => {
      it('checks login functionality', () => {
        if(credentials.status!="no_username"){
          LoginPage.userName().type(credentials.username)
        }
        if(credentials.status!="no_password"){
          LoginPage.password().type(credentials.password)
        }
        LoginPage.loginButton().click()

        switch (credentials.status) {
          case "ok":
            InventoryPage.inventoryList().should('be.visible');
            break;
          case "no_password":
            LoginPage.noPasswordErrorMessage().should('be.visible');
            break;
          case "no_username":
            LoginPage.noUserNameErrorMessage().should('be.visible');
            break;
          case "locked_out_user":
            LoginPage.lockedOutUserErrorMessage().should('be.visible');
            break;
          case "unregistered_user":
            LoginPage.unregisteredUserErrorMessage().should('be.visible');
            break;
          case "wrong_password":
            LoginPage.unregisteredUserErrorMessage().should('be.visible');
            break;
        }
      })
    })
  })
})