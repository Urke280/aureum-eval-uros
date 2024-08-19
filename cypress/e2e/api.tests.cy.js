import BasePage from '../support/pages/base.page';
import LoginPage from '../support/pages/login.page';
import InventoryPage from '../support/pages/inventory.page';
import ItemDetailsPage from '../support/pages/item.details.page';

context('Shopping Cart', () => {

describe('API Test - PUT Request', () => {

  const apiUrl = 'https://petstore.swagger.io/v2/pet';
  const petId = "40";
  const specificPetUrl = apiUrl + "/" + petId;

  it('should create an entry for a pet', () => {

    cy.fixture('create.pet.json').then((requestBody) => {
        cy.log(requestBody.id)
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: requestBody,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(requestBody);
            });
        });
    });

  it('should edit pet data', () => {

    cy.fixture('create.pet.json').then((requestBody) => {
        requestBody.status = "unavailable";
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: requestBody,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(requestBody);
            });
        });
    });

  it('should delete a pet', () => {

    cy.fixture('create.pet.json').then((requestBody) => {

        cy.request({
            method: 'DELETE',
            url: specificPetUrl,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(200);
            }).then(() => {
                cy.request({
                    method: 'GET',
                    url: specificPetUrl,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(404);
                })

            });
        });
    });
  });
});
