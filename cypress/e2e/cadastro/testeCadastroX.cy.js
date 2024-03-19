import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar login no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.beforeEach(usuarios => {

        it.only('Validar login com usuário válido', () => {  
            cy.registrar(usuarios.email, usuarios.name, usuarios.password);
            //cy.login('anelizafb@gmail.com', '123456');
            //cy.contains('.home__ContainerText-sc-1auj767-7 > :nth-child(2)', 'bem vindo ao BugBank :)').should('exist')
         }) 
    })
    
})

// tentar realizar registro buscando os dados para cadastro, do arquivo de usuarios.json