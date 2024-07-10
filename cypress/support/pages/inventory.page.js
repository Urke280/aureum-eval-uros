export default {
    inventoryList: () =>cy.get('[data-test="inventory-list"]'),
    shoppingCartLink: () => cy.get('[data-test="shopping-cart-link"]'),
    shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    itemSortingSelect: () => cy.get('[data-test="product-sort-container"]'),
    inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
    inventoryItemPrice: () => cy.get('[data-test="inventory-item-price"]'),

    sauceLabsBackpackTitle: () => cy.get('#item_4_title_link'),


    addSauceLabsBackpackButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
    addSauceLabsBicycleLightButton: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
    addSauceLabsBoltTShirtButton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
    addSauceLabsFleeceJacketButton: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
    addSauceLabsOnesieButton: () => cy.get('#add-to-cart-sauce-labs-onesie'),
    addTestAllTShirtRedButton: () => cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)'),

    removeSauceLabsBackpackButton: () => cy.get('#remove-sauce-labs-backpack'),
    removeSauceLabsBicycleLightButton: () => cy.get('#remove-sauce-labs-bike-light'),
    removeSauceLabsBoltTShirtButton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
    removeSauceLabsFleeceJacketButton: () => cy.get('#remove-sauce-labs-fleece-jacket'),
    removeSauceLabsOnesieButton: () => cy.get('#remove-sauce-labs-onesie'),
    removeTestAllTShirtRedButton: () => cy.get('#remove-test.allthethings()-t-shirt-(red)'),

    addBackpackToCart(){
      this.addSauceLabsBackpackButton().click()
    },

    addOnesieToCart(){
      this.addSauceLabsOnesieButton().click()
    },

    addMultipleItemsToCart(){
      this.addSauceLabsBackpackButton().click()
      this.addSauceLabsBicycleLightButton().click()
      this.addSauceLabsBoltTShirtButton().click()
    },

    clickSauceLabsBackpack() {
      this.sauceLabsBackpackTitle().click()
    },

    sortItemsByNameAscending(){
      this.itemSortingSelect().select('az')
    },

    sortItemsByNameDescending(){
      this.itemSortingSelect().select('za')
    },

    sortItemsByPriceAscending(){
      this.itemSortingSelect().select('lohi')
    },

    sortItemsByPriceDescending(){
      this.itemSortingSelect().select('hilo')
    },

  };
