import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';
import { visitAndProcessElement } from '../support/commands';

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
      InventoryPage.inventoryItemName().then(($items) => {
        const currentItemNames = $items.toArray().map(el => el.innerText.trim());
        const sortedItemNames = [...currentItemNames].sort();
        expect(currentItemNames).to.deep.equal(sortedItemNames);
      })
    })

    it('checks item sorting Z to A', () => {
      InventoryPage.sortItemsByNameDescending()
      InventoryPage.inventoryItemName().then(($items) => {
        const currentItemNames = $items.toArray().map(el => el.innerText.trim());
        const sortedItemNames = [...currentItemNames].sort().reverse();
        expect(currentItemNames).to.deep.equal(sortedItemNames);
      })
    })


    it('checks item sorting by price ascending', () => {
      InventoryPage.sortItemsByPriceAscending()
      InventoryPage.inventoryItemPrice().then(($prices) => {
        // Extract text, remove $, convert to number
        const productPrices = $prices.toArray().map(el => {
        const priceText = el.innerText.trim();
            // Remove $ and convert the remaining text to a float
            const priceValue = parseFloat(priceText.replace(/^\$/, ''));
            return priceValue;
        });
        const sortedProductPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).to.deep.equal(sortedProductPrices);
        });
    })

    it('checks item sorting by price descending', () => {
      InventoryPage.sortItemsByPriceDescending()
      InventoryPage.inventoryItemPrice().then(($prices) => {
        // Extract text, remove $, convert to number
        const productPrices = $prices.toArray().map(el => {
        const priceText = el.innerText.trim();
            // Remove $ and convert the remaining text to a float
            const priceValue = parseFloat(priceText.replace(/^\$/, ''));
            return priceValue;
        });
        const sortedProductPrices = [...productPrices].sort((a, b) => a - b).reverse();
        expect(productPrices).to.deep.equal(sortedProductPrices);
        });
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


    // Bonus task is placed here as it uses the element from the Inventory page.
    // It visits the specified element and all child elements and prints out
    // the class attribute as a way to check if all elements have been visited

    it('visits specified element and all children - **bonus task**', () => {

      cy.get('#inventory_container').then($rootElement => {
        // callback function
        const processElement = (domElement) => {
            // log class attribute of each visited element or print info message in case element has no class
          cy.log(domElement.getAttribute('class') || 'No class attribute');
        };

        // Use the recursive function
        visitAndProcessElement($rootElement, processElement);
      });


    })

  })
})