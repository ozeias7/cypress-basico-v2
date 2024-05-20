Cypress.Commands.add('fillMandatoryFildsAndSubimit', function() {
    cy.get('#firstName').type('ozeias')
    cy.get('#lastName').type('silva')
    cy.get('#email').type('ozeiastet@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})