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
    user_first_name: 'Rocky',
    user_last_name: 'Balboa',
    user_zip_code: '15000'
  }
});
