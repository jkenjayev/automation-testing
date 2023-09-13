/// <reference types="cypress" />
import {loginPage} from "./src";

describe("Student app: ", () => {
	describe("Authorization", () => {
	
	})
	beforeEach(() => cy.visit(Cypress.env("STUDENT_URL")));
	/**
	 * Login page
	 */
	// loginPage();
})