/// <reference types="Cypress" />

it('Verify the prototype of fetch result is the same as Object.prototype', function() {
  cy.visit('/')
  cy.get('#result').should('have.text', 'true');
})