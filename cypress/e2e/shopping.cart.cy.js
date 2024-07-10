import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';
import ShoppingCartPage from '../support/pages/shopping.cart.page';
import CheckoutPage from '../support/pages/checkout.page';

context('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser();
  })


  describe('Shopping cart tests', () => {

    it('checks if the Cart is empty', () => {

      BasePage.clickShoppingCartButton()
      ShoppingCartPage.itemInCart().should('not.exist')
    })


    it('checks if item has been added to the cart', () => {

      InventoryPage.addBackpackToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.itemInCart().should('be.visible')
      ShoppingCartPage.itemInCart().should('have.text', 'Sauce Labs Backpack')
    })

    it('checks if multiple items have been added to the cart', () => {

      InventoryPage.addBackpackToCart()
      InventoryPage.addOnesieToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.onesieItemInCart().should('be.visible')
      ShoppingCartPage.backpackItemInCart().should('be.visible')
    })

    it('checks if item can be removed from the cart', () => {

      InventoryPage.addOnesieToCart()
      InventoryPage.addBackpackToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.removeBackpackFromCart()
      BasePage.shoppingCartBadge().should('have.text', '1')
    })

    it('checks if item details page can be accessed from the Shopping Cart', () => {

      InventoryPage.addBackpackToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.clickOnBackpackItem()
      ItemDetailsPage.itemTitle().should('have.text', 'Sauce Labs Backpack')
    })

    it('checks if shopping can be resumed', () => {

      InventoryPage.addBackpackToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.clickContinueShoppingButton()
      InventoryPage.inventoryList().should('be.visible')
    })

    it('checks if checkout can be reached from the Shopping Cart', () => {

      InventoryPage.addBackpackToCart()
      BasePage.clickShoppingCartButton()
      ShoppingCartPage.clickCheckoutButton()
      CheckoutPage.pageTitle().should('have.text', 'Checkout: Your Information')
    })

  })
})