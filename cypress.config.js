const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
    },
  },

  env: {
    url: 'https://bugbank.netlify.app/',
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
