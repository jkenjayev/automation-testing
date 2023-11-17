import {AllCoursesRepo} from "../../../repositories/student/allCoureses";
const courses = new AllCoursesRepo();

export class AllCoursesAction {
	openAllCoursesPage = () => courses.coursesPageLink().click({force: true});
	filterCoursesByCategory = () => courses.categories().each($button => {
		cy.wrap($button).click();
	});
	openAccessibleCourseDetailsPage = () => courses.accessibleCourse().click({force: true});
	openInaccessibleCoursesAttachedLink = () => courses.inaccessibleCourse().click({force: true});
}