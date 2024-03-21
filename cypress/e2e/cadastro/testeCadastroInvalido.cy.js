import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar cadastro inválido no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Validar mensagem de formato de email inválido', () => {
       cy.get('.ihdmxA').click();
       cy.wait(500);
       cy.get(':nth-child(2) > .input__default').click({force:true}).type('anelizafb@gmail').should('exist')
       cy.contains('.kOeYBn > .input__warging', 'Formato inválido').should('exist')
    }) 

    it('Validar mensagen de senhas diferentes', () => {
        cy.get('.ihdmxA').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .input__default').click({force:true}).type('anelizafb@gmail.com').should('exist')
        cy.get(':nth-child(3) > .input__default').click({force:true}).type('Aneliza').should('exist')
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('123456').should('exist')
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('666666').should('exist')
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
        cy.get('#modalText').should("exist")
        cy.contains('#modalText', 'As senhas não são iguais.').should('exist')
        cy.get('#btnCloseModal').click()
        cy.get(':nth-child(4) > .login__eye').click({force:true})
        cy.get(':nth-child(5) > .login__eye').click({force:true})
    })
   
    it('Validar mensagem de preenchimento obrigatório', () => {
        cy.get('.ihdmxA').click();
        cy.wait(500);
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
        cy.contains(':nth-child(2) > .input__warging', 'É campo obrigatório').should('exist')
        cy.contains(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging', 'É campo obrigatório').should('exist')
        cy.contains(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging', 'É campo obrigatório').should('exist')
     }) 
})

/* 
Questões diferente da especificação:
1) Na especificação do BugBank as mensagens de campo obrigatório estão diferentes do que foi desenvolvido.
*/