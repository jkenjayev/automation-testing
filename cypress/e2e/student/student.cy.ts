/// <reference types="cypress" />
import {
  loginPage,
  registerPage,
  dashboardPage,
  myCoursesPage,
  coursesPage,
} from "./src";
import { LoginWithEmailAction } from "../../support/actions";

const { withEmail } = new LoginWithEmailAction();

describe("Student app: ", () => {
  beforeEach(() =>
    cy.visit(Cypress.env("STUDENT_URL")),
  );
  describe("Authorization", () => {
    /**
     * Login page
     */
    // loginPage();
    /**
     * Register page
     */
    // registerPage();
  });

  describe("Student panel", () => {
    beforeEach(() =>
      withEmail(
        Cypress.env("student_email"),
        Cypress.env("student_pwd"),
      ),
    );
    afterEach(() =>
      cy.wait(Cypress.env("SHORT_WAIT")),
    );
    /**
     * Dashboard page
     */
    // dashboardPage();

    /**
     * My courses page
     */
    // myCoursesPage();

    /**
     * courses page
     */
    coursesPage();
  });
});
