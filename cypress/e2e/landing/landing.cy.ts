/// <reference types="cypress" />
import {
  homePage,
  coursesPage,
  blogPage,
} from "./src";

describe("Najottalim.uz: ", () => {
  beforeEach(() => {
    // cy.clearAllCookies();
    // cy.visit(Cypress.env("LANDING_URL"))
    cy.openLanding(Cypress.env("LANDING_URL"));
  });
  

  afterEach(() => {
    cy.wait(Cypress.env("SHORT_WAIT"));
  });

  /**
   * Home Page
   */
  homePage();

  /**
   * Courses page
   */
  coursesPage();

  /**
   * Blogs page
   */
  blogPage();
});
