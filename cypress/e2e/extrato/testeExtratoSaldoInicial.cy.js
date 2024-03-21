import '@testing-library/dom';
import '@testing-library/cypress';

describe('Verificar extrato no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Validar saldo inicial da conta criada, que será exibido na cor verde', () => {  
       cy.registrar('anelizafb@gmail.com', 'Aneliza', '123456');
       cy.login('anelizafb@gmail.com', '123456');
       cy.contains('.home__ContainerText-sc-1auj767-7 > :nth-child(2)', 'bem vindo ao BugBank :)').should('exist')
       cy.get('#btn-EXTRATO').click({force:true})
       cy.contains('#textTransferValue', 'R$ 1.000,00').should('exist')   
       cy.get('#textTransferValue').should('have.css','color','rgb(0, 128, 0)')   
    }) 
})