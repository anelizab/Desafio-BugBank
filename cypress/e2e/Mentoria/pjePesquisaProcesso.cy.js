// No início do seu arquivo de teste ou configuração, para carregar as variáveis de ambiente no código:
require('dotenv').config();

// Exemplo de utilização das variáveis:
const baseUrl = Cypress.env('BASE_URL');


describe('Pesquisa de processo', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    })
    
    it('Login ', () => {
        cy.get('input[id="username"]').type('04353921584');
        cy.get('input[id="password"]').type('04353921584', {log:false}); // log false = para não exibir a senha no log do teste
        cy.get('input[id="btnEntrar"]').click();
   })

})