import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar login no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Validar login com usuário válido', () => {  
       cy.registrar('anelizafb@gmail.com', 'Aneliza', '123456');
       cy.login('anelizafb@gmail.com', '123456');
       cy.contains('.home__ContainerText-sc-1auj767-7 > :nth-child(2)', 'bem vindo ao BugBank :)').should('exist')
    }) 

    it('Validar login com usuário inválido', () => {
        cy.registrar('anelizafb@gmail.com', 'Aneliza', '123456');        
        cy.login('anelizab@hotmail.com', '123456');
        cy.contains('#modalText', 'Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('exist')
        cy.get('#btnCloseModal').click({force:true})
     }) 

})