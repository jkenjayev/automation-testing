import {HomeCoursesRepo} from "../../../repositories";
const {firstCourse, coursesLink} = new HomeCoursesRepo();
export class HomeCoursesAction {
    openFirstCourse = () => firstCourse().click({force: true});
    openCourses = () => coursesLink().click({force: true});
}