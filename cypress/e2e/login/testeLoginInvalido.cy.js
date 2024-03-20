import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar login inválido no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Validar mensagem de login inválido', () => {
        cy.registrar('anelizafb@gmail.com', 'Aneliza', '123456');        
        cy.login('anelizab@hotmail.com', '123456');
        cy.contains('#modalText', 'Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('exist')
        cy.get('#btnCloseModal').click({force:true})
     }) 

    it('Validar mensagem de campo obrigatório', () => { 
        cy.get('.otUnI').click({force:true})
        cy.contains('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__warging', 'É campo obrigatório').should('exist')
        cy.contains('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging', 'É campo obrigatório').should('exist')
    }) 

})