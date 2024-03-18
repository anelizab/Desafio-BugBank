// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', (email, password) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email);
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'). type(password);  
    cy.contains('button', 'Acessar').click();
});

Cypress.Commands.add('registrar', (email, name, password) => {
    cy.get('.ihdmxA').click();
       cy.wait(500);
       cy.get(':nth-child(2) > .input__default').click({force:true}).type(email).should('exist')
       cy.get(':nth-child(3) > .input__default').click({force:true}).type(name).should('exist')
       cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type(password).should('exist')
       cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type(password).should('exist')
       cy.get('#toggleAddBalance').click({force:true})  
       cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
       cy.get('#modalText').should("exist")
       cy.get('#btnCloseModal').click()
       cy.get('input[name="email"]').should("have.value","");
});