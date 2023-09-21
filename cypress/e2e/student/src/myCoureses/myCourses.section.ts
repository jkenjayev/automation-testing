import {MyCoursesAction} from "../../../../support/actions";

const {openMyCoursesPage, openMyCourseDetailsPage} = new MyCoursesAction();

export function myCoursesSection() {
	describe('My Courses Section', () => {
		it('should open my courses page', openMyCoursesPage);
		it("should open my courses details page", openMyCourseDetailsPage);
	});
}