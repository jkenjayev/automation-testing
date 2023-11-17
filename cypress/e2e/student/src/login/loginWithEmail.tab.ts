import {LoginWithEmailAction} from "../../../../support/actions";

const login = new LoginWithEmailAction();

export function loginWithEmailTab() {
	describe("Login with email tab: ", () => {
		it('should login with email successfully ', () => login.withEmail(Cypress.env("TEST_EMAIL"), Cypress.env('TEST_PWD')))
		it("should recovery password successfully ", () => login.recoveryPwd(Cypress.env("TEST_EMAIL"), Cypress.env("OTP"), Cypress.env("TEST_PWD")))
	})
}