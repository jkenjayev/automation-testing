/// <reference types="cypress" />
import {
  homePage,
  coursesPage,
  blogPage,
} from "./src";

describe("Najottalim.uz: ", () => {
  beforeEach(() => {
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
