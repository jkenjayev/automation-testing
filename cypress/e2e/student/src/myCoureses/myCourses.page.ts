import {myCoursesSection} from "./myCourses.section";
import {myCourseDetailsPage} from "./myCourseDetails/myCourseDetails.page";
import {recCoursesSection} from "./recCourse.section";

export function myCoursesPage() {
	describe('My Courses Page', () => {
		beforeEach(() => cy.wait(Cypress.env("SHORT_WAIT")));
		/**
		 * My courses section
		 */
		//myCoursesSection()
		
		/**
		 * Rec courses
		 */
		// recCoursesSection();
		
		/**
		 * my courses details page
		 */
		
		myCourseDetailsPage();
	});
}