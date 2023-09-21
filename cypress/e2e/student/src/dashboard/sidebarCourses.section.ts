import {SidebarCoursesAction} from "../../../../support/actions/student/dashboard";
const {openSidebarCourse}: SidebarCoursesAction = new SidebarCoursesAction();

export function sidebarCoursesSection() {
	describe('Sidebar my courses section: ', () => {
		it("should open first course in sidebar", openSidebarCourse);
	});
}