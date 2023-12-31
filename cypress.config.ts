import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 960,
  
  
  reporter: "./node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
    charts: true
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
