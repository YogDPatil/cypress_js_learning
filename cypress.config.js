const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // to decide spec or test files in cypress config
    // specPattern: 'cypress/integration/*.js'
  },
});
