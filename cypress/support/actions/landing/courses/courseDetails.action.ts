import {courseDetailsRepo as courseDetails} from "../../../repositories";

export class CourseDetailsAction {
	openAccessibleCourseDetails = () => courseDetails.course().contains("Davomiylik:").eq(0).click({force: true});
	playFreeVideo = () => courseDetails.freeVideo().click({force: true});
	selectLessonVideo = () => courseDetails.lessonTitle().click({force: true});
	buyCourse = () => courseDetails.buyCourseBtn().click({force: true});
	menu1 = () => courseDetails.navigationMenu().eq(0).children().first().click({force: true});
	menu2 = () => courseDetails.navigationMenu().eq(1).children().first().click({force: true});
	menu3 = () => courseDetails.navigationMenu().eq(2).children().first().click({force: true});
	menu4 = () => courseDetails.navigationMenu().eq(2).children().first().click({force: true});
	menu5 = () => courseDetails.navigationMenu().eq(4).children().first().click({force: true});
	menu6 = () => courseDetails.navigationMenu().eq(5).children().first().click({force: true});
}
export const courseDetailsAction: CourseDetailsAction = new CourseDetailsAction();