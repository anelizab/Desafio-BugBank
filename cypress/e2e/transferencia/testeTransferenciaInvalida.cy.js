import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar transferência bancário no bugbank', () => {    
  
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  })  
  
  
  it('Validar mensagem de conta inválida ou inexistente', () => {
       cy.get('.ihdmxA').click();
       cy.wait(500);
       cy.get(':nth-child(2) > .input__default').click({force:true}).type('anelizafb@gmail.com').should('exist')
       cy.get(':nth-child(3) > .input__default').click({force:true}).type('Aneliza').should('exist')
       cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('123456').should('exist')
       cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('123456').should('exist')
       cy.get('#toggleAddBalance').click({force:true})  
       cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
       cy.get('#modalText').should("exist")
       cy.get('#btnCloseModal').click()
       cy.get('input[name="email"]').should("have.value","");
       cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("anelizafb@gmail.com");
       cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'). type("123456");       
       cy.contains('button', 'Acessar').click();
       cy.contains('.home__ContainerText-sc-1auj767-7 > :nth-child(2)', 'bem vindo ao BugBank :)').should('exist')
       cy.get('#textAccountNumber > span').should('exist')     
       cy.get('#btn-TRANSFERÊNCIA').click({force:true})  
       cy.get(':nth-child(1) > .input__default').type('123')
       cy.get('.account__data > :nth-child(2) > .input__default').type('4')
       cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('100')
       cy.get(':nth-child(3) > .input__default').type('Transferência para conta inválida')
       cy.get('.style__ContainerButton-sc-1wsixal-0').click({force:true}) 
       cy.contains('#modalText', 'Conta inválida ou inexistente').should('exist')
       cy.get('#btnCloseModal').click({force:true}) 
    }) 
})

/* 
Questões diferente da especificação:
1) Não exibe mensagem de campo obrigatório
2) Se não informar a conta para transferência e clicar em "Tranferir Agora", exibe mensagem que foi transferido com sucesso
3) Está permitindo digitar letra nos campos de número da conta
*/