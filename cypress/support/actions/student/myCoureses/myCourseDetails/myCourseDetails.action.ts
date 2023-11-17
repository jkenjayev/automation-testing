import "cypress-if";
import {MyCourseDetailsRepo} from "../../../../repositories";

const {myModule, continueBuyBtn, courseDetails, course, lesson, myCourses,video} = new MyCourseDetailsRepo();

export class MyCourseDetailsAction {
	openMyCourses = () => myCourses().click({force: true});
	openFirstMyCourseDetailsPage = () => course().click({force: true});
	openCourseMoreDetails = () => courseDetails().click({force: true});
	continueBuying = () => continueBuyBtn().click({force: true});
	playFirstLessonOfModule = () => {
		myModule().click({force: true});
		lesson().click({force: true});
		video().click({force: true});
	}
}