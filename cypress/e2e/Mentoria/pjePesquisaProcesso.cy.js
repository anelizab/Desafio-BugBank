describe('Pesquisa de processo', () => {
    beforeEach(() => {
        //cy.visit(baseUrl);
        cy.visit(Cypress.env('url'));
    })
    
    it('Login ', () => {
        cy.get('input[id="username"]').type('04353921584');
        cy.get('input[id="password"]').type('04353921584', {log:false}); // log false = para não exibir a senha no log do teste
        cy.get('input[id="btnEntrar"]').click();
   })
 
})

