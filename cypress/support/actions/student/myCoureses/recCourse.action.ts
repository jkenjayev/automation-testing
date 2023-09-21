import {RecCoursesRepo} from "../../../repositories";
const {recCourses, coursesLink} = new RecCoursesRepo();

export class RecCourseAction {
	openCoursesPage = () => coursesLink().click({force: true});
	openFirstRecCourseDetailsPage = () => recCourses().click({force: true});
}