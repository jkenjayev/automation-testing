/// <reference types="cypress" />
import {loginPage, registerPage, loginWithPhoneTab} from "./src";

describe("Student app: ", () => {
	beforeEach(() => cy.visit(Cypress.env("STUDENT_URL")));
	describe('Authorization', () => {
		/**
		 * Login page
		 */
		loginPage();
		
		/**
		 * Register page
		 */
		registerPage();
	});
	
	
})