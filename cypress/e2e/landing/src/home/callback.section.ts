import {CallbackAction} from "../../../../support/actions";

const {sendFeedbackByTelegram, sendFeedbackByPhone, openPrivacy, openFaq} = new CallbackAction()

export function callbackSection() {
	describe("Callback section: ", () => {
		it('should open faq ', openFaq);
		it("should send feedback by phone ", () => {
			sendFeedbackByPhone(Cypress.env("student_name"), Cypress.env("student_phone"))
		});
		it('should send feedback by telegram ', () => {
			sendFeedbackByTelegram(Cypress.env("student_name"), Cypress.env("telegram_nickname"))
		});
		it('should open privacy policy docs ', openPrivacy);
	})
}