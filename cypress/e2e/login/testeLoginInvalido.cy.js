import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar login no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Validar login com usuário inválido', () => {
        cy.registrar('anelizafb@gmail.com', 'Aneliza', '123456');        
        cy.login('anelizab@hotmail.com', '123456');
        cy.contains('#modalText', 'Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('exist')
        cy.get('#btnCloseModal').click({force:true})
     }) 

})