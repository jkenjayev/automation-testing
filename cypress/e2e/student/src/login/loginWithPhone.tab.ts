import {LoginWithPhoneAction} from "../../../../support/actions";

const login: LoginWithPhoneAction = new LoginWithPhoneAction();

export function loginWithPhoneTab() {
	describe("Login with phone tab: ", () => {
		it("should login with phone successfully ",
			() => login.withPhone(Cypress.env("TEST_PHONE"), Cypress.env("TEST_PWD"))
		);
		it("should recovery password successfully ",
			() => login.recoveryPwd(Cypress.env("TEST_PHONE"), Cypress.env("OTP"), Cypress.env("TEST_PWD"))
		);
	})
}