const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
    },
  },
  
  env: {
    baseUrl: 'https://www.gamestolearnenglish.com/'
  }

});
