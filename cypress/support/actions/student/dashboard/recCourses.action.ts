import "cypress-if";
import {RecCoursesRepo} from "../../../repositories";
const {coursesLink, recCourses, myCourses}: RecCoursesRepo = new RecCoursesRepo();
export class RecCoursesAction {
	openMyCourse = () => myCourses().click({force: true})
	openCoursesPage = () => {
		coursesLink().click({force: true});
	}
	openRecCoursesDetailsPage = () => {
		recCourses().click({force: true});
	}
}