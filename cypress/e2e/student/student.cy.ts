/// <reference types="cypress" />
import {
  coursesPage,
  certificatesPage,
  dashboardPage,
  loginPage,
  myCoursesPage,
  notificationPage,
  registerPage,
  settingsPage,
  videosPage,
} from "./src";
import { LoginWithEmailAction } from "../../support";

const { withEmail } = new LoginWithEmailAction();

describe("Student app: ", () => {
  // beforeEach(() =>
  //   cy.visit(Cypress.env("STUDENT_URL")),
  // );
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
      cy.login(
        Cypress.env("STUDENT_URL"),
        Cypress.env("student_email"),
        Cypress.env("STUDENT_URL"),
      ),
    );
    afterEach(() =>
      cy.wait(Cypress.env("SHORT_WAIT")),
    );
    /**
     * Dashboard page
     */
    dashboardPage();

    /**
     * My courses page
     */
    // myCoursesPage();

    /**
     * courses page
     */
    // coursesPage();

    /**
     * Videos page
     */
    // videosPage();

    /**
     * notifications page
     */
    // notificationPage();

    /**
     * certificates page
     */
    // certificatesPage();
  });
});
