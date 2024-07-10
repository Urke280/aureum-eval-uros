export default {
    itemTitle: () =>cy.get('[data-test="inventory-item-name"]'),
    addToCartButton: () => cy.get('#add-to-cart'),
    removeButton: () =>cy.get('#remove'),
    backToProductsLink: () =>cy.get('#back-to-products'),

    clickAddToCartButton(){
      this.addToCartButton().click()
    },

    clickRemoveButton(){
      this.removeButton().click()
    },

    clickBackToProductsLink(){
      this.backToProductsLink().click()
    },
};
