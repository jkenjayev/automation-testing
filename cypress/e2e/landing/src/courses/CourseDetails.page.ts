import {
  CourseDetailsAction, courseDetailsAction as courseDetails, courseCallbackAction as courseCallback
} from "../../../../support";

export function CourseDetailsPage() {
  describe("Course details page: ", () => {
    beforeEach(
      courseDetails.openAccessibleCourseDetails
    );
    afterEach(() =>
      cy.wait(Cypress.env("SHORT_WAIT"))
    );
    it(
      "should select \"Bu kurs kim uchun?\" ",
      courseDetails.menu1
    );
    it(
      "should select \"Kurs afzalliklari\" ",
      courseDetails.menu2
    );
    it(
      "should select 'Kurs dasturi'",
      courseDetails.menu3
    );
    it(
      "should select 'Kurs o'qituvchilari' ",
      courseDetails.menu4
    );
    it(
      "should select \"Ko`p so`raladigan savollar\" ",
      courseDetails.menu5
    );
    it(
      "should select 'Murojaat' ",
      courseDetails.menu6
    );
    it(
      "should play free video of the course ",
      courseDetails.playFreeVideo
    );
    it(
      "should redirect to student app => course details with checked module: ",
      courseDetails.selectLessonVideo
    );
    it(
      "should redirect to student app => course details with checked all modules to buy",
      courseDetails.buyCourse
    );
    it("should send feedback by phone", () =>
      courseCallback.sendFeedbackByPhone(
        Cypress.env("student_name"),
        Cypress.env("student_phone")
      ));
    it("should send feedback by telegram", () =>
      courseCallback.sendFeedbackByTelegram(
        Cypress.env("student_name"),
        Cypress.env("telegram_nickname")
      ));
    it("should open privacy policy docs", () =>
      courseCallback.openPrivacy());
  });
}
