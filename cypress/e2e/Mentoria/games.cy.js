// No início do seu arquivo de teste ou configuração, para carregar as variáveis de ambiente no código
require('dotenv').config();

// Exemplo de utilização das variáveis
const baseUrl = Cypress.env('BASE_URL');


describe('Testes utilizando variáveis de ambiente', () => {
    it('Acessar pagina', () => {
        cy.visit(baseUrl);
      });

});

