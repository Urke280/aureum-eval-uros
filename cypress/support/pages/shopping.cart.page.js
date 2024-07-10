export default {
    itemInCart: () =>cy.get('[data-test="inventory-item-name"]'),
    removeBackpackButton: () => cy.get('#remove-sauce-labs-backpack'),
    backpackItemInCart: () => cy.get('#item_4_title_link'),
    onesieItemInCart: () => cy.get('#item_2_title_link'),
    continueShoppingButton: () => cy.get('#continue-shopping'),
    checkoutButton: () => cy.get('#checkout'),


    addMultipleItemsToCart(){
      this.addSauceLabsBackpackButton().click()
      this.addSauceLabsBicycleLightButton().click()
      this.addSauceLabsBoltTShirtButton().click()
    },

    removeBackpackFromCart() {
      this.removeBackpackButton().click()
    },

    clickOnBackpackItem() {
      this.backpackItemInCart().click()
    },

    clickContinueShoppingButton() {
      this.continueShoppingButton().click()
    },

    clickCheckoutButton() {
      this.checkoutButton().click()
    },

  };
