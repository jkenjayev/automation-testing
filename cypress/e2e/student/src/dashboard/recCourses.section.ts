import {RecCoursesAction} from "../../../../support/actions/student/dashboard";
const {openRecCoursesDetailsPage, openCoursesPage}: RecCoursesAction = new RecCoursesAction();
export function recCoursesSection() {
	describe("Recommended courses section:", () => {
		it("should open courses page ", openCoursesPage);
		it("should open first recommended course's details page", openRecCoursesDetailsPage);
	})
}