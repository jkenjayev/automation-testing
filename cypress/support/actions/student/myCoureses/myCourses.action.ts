import {MyCoursesRepo} from "../../../repositories";
const {course, myCourses} = new MyCoursesRepo();
export class MyCoursesAction {
	openMyCoursesPage = () => myCourses().click({force: true});
	openMyCourseDetailsPage = () => {
		myCourses().click({force: true});
		course().click({force: true})
	};
}