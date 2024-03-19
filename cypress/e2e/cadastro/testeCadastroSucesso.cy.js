import '@testing-library/dom';
import '@testing-library/cypress';

describe('Realizar cadastro no Bugbank', () => {    
    
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it.only('Validar cadastro com sucesso de uma conta com saldo', () => {
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
       cy.get('#textAccountNumber > span').should('exist')
       
       cy.get('#textBalance > span').then(($element) => {        
        const textoValor = $element.text();
        const valor = parseFloat(textoValor);      
        //expect(valor).to.be.greaterThan(0);
        //expect(valor).to.not.be.oneOf([null, "",0])
        expect(valor).to.be.not.equal('R$ 0,00')
       });

       cy.get('#textBalance > span').invoke('text').then((text) => {
        expect(text).to.be.not.equal('R$ 0,00')
       })

    }) 

    it('Validar cadastro com sucesso de uma conta sem saldo', () => {
        cy.get('.ihdmxA').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .input__default').click({force:true}).type('anelizafb@gmail.com').should('exist')
        cy.get(':nth-child(3) > .input__default').click({force:true}).type('Aneliza').should('exist')
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('123456').should('exist')
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force:true}).type('123456').should('exist')
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
        cy.get('#modalText').should("exist")
        cy.get('#btnCloseModal').click()
        cy.get('input[name="email"]').should("have.value","");
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("anelizafb@gmail.com");
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'). type("123456");       
        cy.contains('button', 'Acessar').click();
        cy.contains('.home__ContainerText-sc-1auj767-7 > :nth-child(2)', 'bem vindo ao BugBank :)').should('exist')
        cy.get('#textAccountNumber > span').should('exist')

        cy.get('#textBalance > span').invoke('text').then((text) => {
           expect(text).to.equal('R$ 0,00')
        })

        cy.get('#textBalance > span').then(($element) => {        
            const textoValor = $element.text();
            const valor = parseFloat(textoValor);      
            //expect(valor).to.be.greaterThan(0);
            //expect(valor).to.not.be.oneOf([null, "",0])
            expect(valor).to.equal('R$ 0,00')
        });

     }); 
})