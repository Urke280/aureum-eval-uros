export default {
    shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
    shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    hamburgerMenuButton: () => cy.get('#react-burger-menu-btn'),
    inventoryLink: () => cy.get('#inventory_sidebar_link'),
    aboutLink: () => cy.get('#about_sidebar_link'),
    logoutLink: () => cy.get('#logout_sidebar_link'),
    resetLink: () => cy.get('#reset_sidebar_link'),
    closeHamburgerMenuButton: () => cy.get('#react-burger-cross-btn'),

    clickShoppingCartButton() {
      this.shoppingCartButton().click()
    },

    clickHamburgerMenuButton() {
      this.hamburgerMenuButton().click()
    },

    clickInventoryLink() {
      this.inventoryLink().click()
    },

    clickAboutLink() {
      this.aboutLink().click()
    },

    clickLogoutLink() {
      this.logoutLink().click()
    },

    clickResetLink() {
      this.resetLink().click()
    },

    clickCloseHamburgerMenuButton() {
      this.closeHamburgerMenuButton().click()
    },

};
