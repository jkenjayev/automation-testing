export class SidebarCoursesRepo {
	myRecCourse = () => cy.get('[href*="/my-course-single/"]').each(el => el.length > 18).first();
}