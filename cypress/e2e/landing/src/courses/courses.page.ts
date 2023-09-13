import {CoursesAction} from "../../../../support/actions";
import {CourseDetailsPage} from "./CourseDetails.page";

const courses = new CoursesAction();

export function coursesPage() {
	describe("Courses page: ", () => {
		beforeEach(courses.openCoursesPage);
		it("should search course ", () => courses.searchCourse(Cypress.env("COURSE_TITLE"), Cypress.env("SHORT_WAIT")));
		it("should filter courses with first category", courses.filterFirstCategory);
		it("should filter courses with second category", courses.filterTwoCategory);
		it("should filter courses with third category", courses.filterThirdCategory);
		it("should open accessible course's details page", courses.openAccessibleCourseDetails);
		it("should open inaccessible course's details page", courses.openInaccessibleCourseDetails);
		CourseDetailsPage();
	})
}