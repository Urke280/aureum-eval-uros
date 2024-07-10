import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';

context('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser();
  })


  describe('Item Details Page actions', () => {
    it('adds an item to the shopping cart from Item Details page', () => {

      InventoryPage.addSauceLabsOnesieButton().click()
      InventoryPage.clickSauceLabsBackpack()
      ItemDetailsPage.clickAddToCartButton()
      BasePage.shoppingCartBadge().should('have.text', '2')
      ItemDetailsPage.removeButton().should('be.visible')
    })

    it('removes an item to the shopping cart from Item Details page', () => {

      InventoryPage.addSauceLabsOnesieButton().click()
      InventoryPage.clickSauceLabsBackpack()
      ItemDetailsPage.clickAddToCartButton()
      ItemDetailsPage.clickRemoveButton()
      BasePage.shoppingCartBadge().should('have.text', '1')
      ItemDetailsPage.addToCartButton().should('be.visible')
    })

    it('returns to the Inventory List page', () => {

      InventoryPage.clickSauceLabsBackpack()
      ItemDetailsPage.clickBackToProductsLink()
      InventoryPage.inventoryList().should('be.visible')
    })

  })
})