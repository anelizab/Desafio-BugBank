describe('Pesquisa de processo', () => {
    beforeEach(() => {
        cy.visit('https://pje-dbserver-2g.stg.cloud.cnj.jus.br/pje/login.seam?loginComCertificado=false&cid=60');
    })
    
    const usuarios = require('../../fixtures/usuarios.json'); //para buscar os usuários no arquivo
    usuarios.forEach(user => {
    
    it('Login ' + user.usuario, () => {
         cy.get('input[id="usarname"]').type(user.usuario);
         cy.get('input[id="password"]').type(user.senha, {log:false}); // log false = para não exibir a senha no log do teste
         cy.get('input[id="btnEntrar"]').click();
    })

    })
})