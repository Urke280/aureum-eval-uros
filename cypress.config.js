const { defineConfig } = require("cypress");

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  chromeWebSecurity: false,
  experimentalStudio: true,
  },
  env: {
    baseurl: 'https://www.saucedemo.com/',
    standard_user: 'standard_user',
    password: 'secret_sauce',
    sorted_az: 'Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)',
    sorted_za: 'Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack',
    sorted_price_asc: '$7.99$9.99$15.99$15.99$29.99$49.99',
    sorted_price_desc: '$49.99$29.99$15.99$15.99$9.99$7.99',
    user_first_name: 'Rocky',
    user_last_name: 'Balboa',
    user_zip_code: '15000'
  }
});
