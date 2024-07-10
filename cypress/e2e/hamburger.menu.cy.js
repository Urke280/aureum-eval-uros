import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';
import ShoppingCartPage from '../support/pages/shopping.cart.page';

context('Hamburger Menu', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser();
  })


  describe('Hamburger Menu tests', () => {

    it('expands the Hamburger Menu', () => {

      BasePage.clickHamburgerMenuButton()
      BasePage.closeHamburgerMenuButton().should('be.visible')
    })


    it('navigates to the Inventory page from the Hamburger menu', () => {

      BasePage.clickShoppingCartButton()
      BasePage.clickHamburgerMenuButton()
      BasePage.clickInventoryLink()
      InventoryPage.inventoryList().should('be.visible')
    })

    it('checks if the About link in the Hamburger menu leads to proper page', () => {

      BasePage.clickHamburgerMenuButton()
      BasePage.aboutLink().should('have.attr', 'href', 'https://saucelabs.com/')

    })

    it('logs out', () => {

      BasePage.clickHamburgerMenuButton()
      BasePage.clickLogoutLink()
      LoginPage.userName().should('be.visible')
    })

    it('closes the hamburger menu', () => {

      BasePage.clickHamburgerMenuButton()
      BasePage.clickCloseHamburgerMenuButton()
      BasePage.closeHamburgerMenuButton().should('not.be.visible')
    })

  })
})