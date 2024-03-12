const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
    },
  },
  
  env: {
    url: 'https://pje-dbserver-1g.stg.cloud.cnj.jus.br/pje/login.seam',
  },
   
   plugins: [
    {      
      name: 'clipboardy',
      async module() {
        const clipboardy = await import('clipboardy');
        return clipboardy;
      },  
    },
  ],

});
