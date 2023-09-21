import {AllCoursesAction} from "../../../../support/actions";
import {allCourseDetailsPage} from "./courseDetails.page";
const {openAllCoursesPage, openAccessibleCourseDetailsPage, openInaccessibleCoursesAttachedLink, filterCoursesByCategory} = new AllCoursesAction();

export function allCoursesPage() {
	describe('All Courses Page', () => {
		beforeEach(openAllCoursesPage);
		/*it('should open all courses page', () => {});
		it("should filter courses by category", () => {
			cy.wait(Cypress.env("SHORT_WAIT"));
			filterCoursesByCategory()
		});
		it('should open accessible course details page', openAccessibleCourseDetailsPage);
		it('should open inaccessible course attached link', openInaccessibleCoursesAttachedLink);*/
		describe('Course details', () => {
			/**
			 * course details page
			 */
			allCourseDetailsPage();
		});
	});
}