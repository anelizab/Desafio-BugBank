import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar transferência bancário no bugbank', () => {    
  
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  })  
  
  
  it('Validar transferência com sucesso de um valor de uma conta para outra', () => {
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
       
       const accountNumberElement = cy.findByText('Conta digital:');
       accountNumberElement.invoke('text').then((accountNumber) => {
         cy.task('getClipboard').then(async () => {
           await clipboardy.writeSync(accountNumber);
         });
         cy.paste().should('equal', accountNumber);
       });

    }) 
})

// Verificar como faz para guardar os dados da conta para depois usar na transferência

// DESAFIO
// criar uma conta, guardar as informações da conta criada e sair
// criar a segunda conta 
// realizar a tranferência de valor para a primeira conta
// validar o saldo