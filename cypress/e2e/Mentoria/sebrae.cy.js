describe('Acessar cursos sebrae', () => {
    beforeEach(() => {
        cy.visit('https://sebrae.com.br/sites/PortalSebrae/cursosonline');
    })
    
    it('Login ', () => {
         cy.wait(10000);
         cy.get('input[id="user__login"]').click();
         cy.get('input[id="usarname"]').type('88598616087');
         cy.get('input[id="password"]').type('123456', {log:false}); // log false = para não exibir a senha no log do teste
         cy.get('input[id="kc-login"]').click();
    })

})
