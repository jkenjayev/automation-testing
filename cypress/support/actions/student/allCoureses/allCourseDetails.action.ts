import "cypress-if";
import { AllCourseDetailsRepo } from "../../../repositories/student/allCoureses";
const course = new AllCourseDetailsRepo();
export class AllCourseDetailsAction {
  openAccessibleCourseDetailsPage = () =>
    course
      .accessibleCourse()
      .if()
      .click({ force: true });
  continueBuying = () =>
    course.continueBtn().click({ force: true });
  openMoreDetailsPage = () =>
    course.detailsBtn().click({ force: true });
  playFreeVideo = () =>
    course.freeVideo().if().click({ force: true });
  buyOneModule = () =>
    course.buyModule().first().click({ force: true });
}
