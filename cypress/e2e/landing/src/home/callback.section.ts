import { callBackAction } from "../../../../support";

export function callbackSection() {
  describe("Callback section: ", () => {
    it("should open faq ", callBackAction.openFaq);
    it("should send feedback by phone ", () => {
      callBackAction.sendFeedbackByPhone(Cypress.env("student_name"), Cypress.env("student_phone"));
    });
    it("should send feedback by telegram ", () => {
      callBackAction.sendFeedbackByTelegram(Cypress.env("student_name"), Cypress.env("telegram_nickname"));
    });
    it("should open privacy policy docs ", callBackAction.openPrivacy);
  });
}