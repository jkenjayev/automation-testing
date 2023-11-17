import {coursesRepo as courses} from "../../../repositories";

export class CoursesAction {
	openCoursesPage = () => courses.coursesPage().click({force: true});
	searchCourse = (course: string, time: string) => {
		courses.courseSearchInput().type(course, {force: true});
		cy.wait(time);
		courses.course().should('contain', course);
	};
	filterFirstCategory = () => courses.categoryOne().click({force: true});
	filterTwoCategory = () => courses.categoryTwo().click({force: true});
	filterThirdCategory = () => courses.categoryThree().click({force: true});
	openAccessibleCourseDetails = () => courses.course().contains("Davomiylik:").eq(0).click({force: true});
	openInaccessibleCourseDetails = () => courses.course().should('not.have.text', "Davomiylik:").eq(0).click({force: true});
}

export const coursesAction: CoursesAction = new CoursesAction();