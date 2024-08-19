
---

# Cypress Test Automation Project

This repository contains end-to-end test automation scripts for SauceDemo, implemented using Cypress 
with the Page Object Model design pattern. The tests are structured to provide comprehensive coverage 
of SauceDemo website. Reporting is implemented using Mochawesome reporter.

## Setup Instructions

### Prerequisites
- Node.js installed (version >= 12)
- npm package manager (installed with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Urke280/aureum-eval-uros.git
   ```
2. Navigate into the project directory:
   ```bash
   cd cypress-project
   ```
3. Install cypress:
   ```bash
   npm install cypress --save-dev
   ```
4. Install cypress-xpath for certain selectors:
   ```bash
   npm install -D cypress-xpath
   ```
5Install mochawesome-reporter for elegant reporting:
   ```bash
   npm i --save-dev cypress-mochawesome-reporter
   ```



   
## Project Structure

```
cypress-project/
├── cypress/                                                   
│   ├── e2e/
│   ├── fixtures/
│   ├── reports/
│   ├── support/
│       ├── pages/
│       ├── commands.js
│       ├── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
└── Test-Strategy-Plan_Matrix.xslx

```

### Explanation:
- **`cypress/`**: Contains Cypress test files and folders.
    - **`e2e/`**: Main folder for test scripts.
    - **`fixtures/`**: User data organized in JSON files.
    - **`reports/`**: Reports generated using Mochawesome.
    - **`support/`**: Custom commands, other support files, and Pages.
        - **`pages/`**: Page classes containing selectors and methods.
- **`cypress.config.js`**: Cypress configuration file, also contains environment variables.
- **`package.json`**: Node.js package configuration file.
- **`Test-Strategy-Plan_Matrix.xslx`**: Contains test strategy, test plan and risk matrix. Not usually part of an automated solution, but added here for easier access

## Running Tests

### Local Execution
Run all tests in headless mode:
```bash
npx cypress run
```

Open Cypress UI:
```bash
npx cypress open
```

## Additional Information

- **Page Object Model**: Tests are organized using the Page Object Model design pattern for better maintenance and readability.
  Selectors and methods are placed in Page classes, whereas tests are located
  inside Test classes.
- **base.page**: This class contains selectors and methods related to Cart button
  and Hamburger menu, both of which appear on a number of pages.
- **checkout.page**: Selectors and methods for Checkout page are located here.
- **inventory.page**: Selectors and methods for main store page are located here. Also, bonus task with DOM manipulation is located here as it is using an element from Inventory page.
- **item.deatils.page**: This class contains selectors and methods for item details page. They are
  universal, so there was no need to write it for each item separately.
- **login.page**: This class contains selectors and methods for the Login page.
- **shopping.cart.page**: Selectors and methods needed to interact with the Shopping Cart page
  are located here.
- **cypress.config.js**: Among other things, environment variables are located here. Standard username and password,
  first name, last name, postal code, as well as arrays of items sorted by name and price.
- **checkout.cy**: Contains tests for checkout. There is also a data-driven test that pulls data from cypress.config file.
- **hamburger.menu.cy**: Tests verifying the functionality of Hamburger menu. For About link, only the href attribute is checked to avoid any
  cross-domain issues.
- **inventory.cy**: Tests covering the main shop page, adding items to cart, removing them, opening item details etc.
- **item.details.cy**: Three tests to cover Item Details page functionality.
- **login.cy**: Contains tests for login. There is a data-driven test that pulls data from cypress.config file, and verifies
  different login combinations of username and password.
- **shopping.cart.cy**: Contains tests related to the Shopping cart.
- **api.tests.cy**: Contains API test demonstrating usage of API calls on petstore.swagger.io

---

