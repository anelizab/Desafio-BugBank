describe('Desafio bugbank', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/');
    })
    
    it('Login ', () => {
       cy.get('.ihdmxA').click();
       cy.wait(500);
       cy.get('[name="email"]').should("exist");
       //cy.get('input[name="email"]').type('anelizafb@gmail.com');
    
    //cy.get('[name="email"]').click({force: true});
    //cy.get(':nth-child(2) > .input__default').type("anelizafb@gmail.com");
    //cy.get('[name="name"]').type("Aneliza");
    //cy.get('[name="password"]').type("123456");
    //cy.get('[name="passwordconfirmation"]').type("123456");
    // //input[@name="name"]
    
    //login
    //cy.get('input[name="email"]').should("have.value","");
    //cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("anelizafb@gmail.com");
    //cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'). type("123456");
         
       
  
    })

})
