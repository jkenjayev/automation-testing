import "cypress-if";
import {RecCoursesAction} from "../../../../support/actions";
const { openMyCourse,openCoursesPage, openRecCoursesDetailsPage} = new RecCoursesAction();

export function recCoursesSection() {
	beforeEach(openMyCourse);
	describe('Rec Courses Section', () => {
		it('should open courses page', openCoursesPage);
		it('should open rec courses details page', openRecCoursesDetailsPage);
	});
}