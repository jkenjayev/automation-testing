import {RegWithEmailAction} from "../../../../support/actions/student/registration";

const reg: RegWithEmailAction = new RegWithEmailAction();

export function registerWithEmail() {
	describe("Register with email tab", () => {
		it("should login with email",
			() => reg.withEmail(Cypress.env('student_name'),
				Cypress.env('TEST_EMAIL'),
				Cypress.env("TEST_PWD"),
				Cypress.env("OTP"))
		)
	})
}