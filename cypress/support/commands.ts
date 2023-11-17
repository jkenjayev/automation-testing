/// <reference types="cypress" />
import { LoginWithEmailAction } from "./actions";

const { withEmail }: LoginWithEmailAction =
  new LoginWithEmailAction();
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add(
  "login",
  (url: string, email: string, password: string) => {
    cy.visit(url);
    withEmail(email, password);
    
  })
;

Cypress.Commands.add("openLanding", (url: string) => {
  cy.visit(url);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(
        url: string,
        email: string,
        password: string
      ): Chainable;
      
      openLanding(url: string): Chainable;
    }
  }
}
