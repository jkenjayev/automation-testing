import {SidebarCoursesRepo} from "../../../repositories";
const {myRecCourse}: SidebarCoursesRepo = new SidebarCoursesRepo()
export class SidebarCoursesAction {
	openSidebarCourse = () => myRecCourse().click({force: true});
}