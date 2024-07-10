import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';
import ShoppingCartPage from '../support/pages/shopping.cart.page';
import CheckoutPage from '../support/pages/checkout.page';

context('Checkout', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser()
    InventoryPage.addBackpackToCart()
    BasePage.clickShoppingCartButton()
    ShoppingCartPage.clickCheckoutButton()
  })

const testData = require('../fixtures/users-personal-info.json')

  describe('Data driven Checkout info form test', () => {

      testData.forEach((info) => {
      it('checks functionality of the Checkout info form', () => {
        if(info.status!="no_first_name"){
          CheckoutPage.firstNameField().type(info.first_name)
        }
        if(info.status!="no_last_name"){
          CheckoutPage.lastNameField().type(info.last_name)
        }
        if(info.status!="no_zip_code"){
          CheckoutPage.zipCodeField().type(info.zip_code)
        }
        CheckoutPage.continueButton().click()

        switch (info.status) {
          case "ok":
            CheckoutPage.pageTitle().should('have.text', 'Checkout: Overview');
            break;
          case "no_first_name":
            CheckoutPage.errorMessage().should('have.text','Error: First Name is required');
            break;
          case "no_last_name":
            CheckoutPage.errorMessage().should('have.text','Error: Last Name is required');
            break;
          case "no_zip_code":
            CheckoutPage.errorMessage().should('have.text','Error: Postal Code is required');
            break;
        }
      })
    })

      it('confirms the order', () => {

        CheckoutPage.provideValidUserInfo()
        CheckoutPage.clickFinishButton()
        CheckoutPage.successMessage().should('have.text', 'Thank you for your order!')
      })

      it('returns to Inventory page after confirming the order', () => {

        CheckoutPage.provideValidUserInfo()
        CheckoutPage.clickFinishButton()
        CheckoutPage.clickBackHomeButton()
        InventoryPage.inventoryList().should('be.visible');
      })

      it('returns to Inventory page when order is cancelled', () => {

        CheckoutPage.provideValidUserInfo()
        CheckoutPage.clickCancelButton()
        InventoryPage.inventoryList().should('be.visible');
      })
  })
})