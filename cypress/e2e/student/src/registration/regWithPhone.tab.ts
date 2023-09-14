import {RegWithPhoneAction} from "../../../../support/actions/student/registration";

const reg: RegWithPhoneAction = new RegWithPhoneAction();

export function registerWithPhoneTab() {
	describe("Register with phone tab", () => {
		it("should login with phone successfully",
			() => reg.withPhone(Cypress.env("TEST_PHONE"),
				Cypress.env('TEST_PWD'), Cypress.env("TEST_PWD"))
		);
		it("should open privacy policy doc", reg.openPrivacy);
		it("should click on support link", reg.clickSupportLink);
		it("should open personal info rules", reg.openPrivacyPolicy);
	})
}