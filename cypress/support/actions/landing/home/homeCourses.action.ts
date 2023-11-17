import { homeCoursesRepo } from "../../../repositories";

export class HomeCoursesAction {
  openFirstCourse = () => homeCoursesRepo.firstCourse().click({ force: true });
  openCourses = () => homeCoursesRepo.coursesLink().click({ force: true });
}

export const homeCourses: HomeCoursesAction = new HomeCoursesAction();