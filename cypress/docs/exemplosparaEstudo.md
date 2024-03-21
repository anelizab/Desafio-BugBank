      //vai interceptar uma requisição (onde busca alguma informção no back), e depois aguardar a requisição terminar
    // cy.intercept('**/notes').as('getnotes')  
    // cy.wait('@getNotes')    


    it('copies input field text to the clipboard', () => {
      cy.visit('./index.html')
    
      cy.contains('button', 'Copy to clipboard')
        .focus()
        .click()
    
      cy.assertValueCopiedToClipboard('Hello World')
    
      cy.get('#copy-to-clipboard-input-field')
        .clear()
        .type('Foo bar baz')
    
      cy.contains('button', 'Copy to clipboard')
        .focus()
        .click()
    
      cy.assertValueCopiedToClipboard('Foo bar baz')
    })
    
    Cypress.Commands.add('assertValueCopiedToClipboard', value => {
      cy.window().then(win => {
        win.navigator.clipboard.readText().then(text => {
          expect(text).to.eq(value)
        })
      })
    })

        // DESAFIO
        // criar uma conta, guardar as informações da conta criada e sair
        // criar a segunda conta 
        // realizar a tranferência de valor para a primeira conta
        // validar o saldo