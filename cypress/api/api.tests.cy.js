import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';

context('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
    LoginPage.loginAsValidUser()
  })

describe('API Test - PUT Request', () => {
  const petId = 1; // Example pet ID, adjust as needed
  const apiUrl = 'https://petstore.swagger.io/v2/pet';

  it('should update the pet information and return the updated data', () => {
    // Define the request body
    const requestBody = {
      id: 0,
      category: {
        id: 0,
        name: 'string'
      },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string'
        }
      ],
      status: 'available'
    };

    // Perform the PUT request
    cy.request({
      method: 'PUT',
      url: apiUrl,
      body: requestBody,
      failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
    }).then((response) => {
      // Assert the response status code
      expect(response.status).to.eq(200);

      // Assert the response body matches the request body
      expect(response.body).to.deep.equal(requestBody);

      // Optionally: Add more assertions based on expected response structure or behavior
    });
  });
});
