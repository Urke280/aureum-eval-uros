import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';

context('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser()
  })


  describe('Shopping cart actions', () => {
    it('adds a single item to the shopping cart', () => {

      InventoryPage.addSauceLabsBackpackButton().click()
      InventoryPage.removeSauceLabsBackpackButton().should('be.visible')
      BasePage.shoppingCartBadge().should('have.text', '1')

    })

    it('adds more than one item to the shopping cart', () => {

      InventoryPage.addSauceLabsBackpackButton().click()
      InventoryPage.addSauceLabsBicycleLightButton().click()
      InventoryPage.addSauceLabsBoltTShirtButton().click()
      BasePage.shoppingCartBadge().should('have.text', '3')

    })

    it('removes an item the shopping cart', () => {

      InventoryPage.addMultipleItemsToCart()
      InventoryPage.removeSauceLabsBackpackButton().click()
      BasePage.shoppingCartBadge().should('have.text', '2')

    })

    it('checks item sorting A to Z', () => {
      InventoryPage.sortItemsByNameAscending()
      InventoryPage.inventoryItemName().invoke('text').then(itemNames => {
        expect(itemNames).to.equal(Cypress.env('sorted_az'))
      })
    })

    it('checks item sorting Z to A', () => {
      InventoryPage.sortItemsByNameDescending()
      InventoryPage.inventoryItemName().invoke('text').then(itemNames => {
        cy.log(itemNames)
        expect(itemNames).to.equal(Cypress.env('sorted_za'))
      })
    })

    it('checks item sorting by price ascending', () => {
      InventoryPage.sortItemsByPriceAscending()
      InventoryPage.inventoryItemPrice().invoke('text').then(itemPrices => {
        cy.log(itemPrices)
        expect(itemPrices).to.equal(Cypress.env('sorted_price_asc'))
      })
    })

    it('checks item sorting by price descending', () => {
      InventoryPage.sortItemsByPriceDescending()
      InventoryPage.inventoryItemPrice().invoke('text').then(itemPrices => {
       cy.log(itemPrices)
        expect(itemPrices).to.equal(Cypress.env('sorted_price_desc'))
      })
    })

    it('opens the Item Details page', () => {
      InventoryPage.clickSauceLabsBackpack()
      ItemDetailsPage.itemTitle().should('have.text', 'Sauce Labs Backpack')
    })

  })
})