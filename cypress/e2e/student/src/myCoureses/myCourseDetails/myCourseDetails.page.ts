import {MyCourseDetailsAction} from "../../../../../support/actions";
const {openCourseMoreDetails, openFirstMyCourseDetailsPage, playFirstLessonOfModule, continueBuying, openMyCourses} = new MyCourseDetailsAction();
export function myCourseDetailsPage() {
	describe('My Course Details Page', () => {
		beforeEach(() => {
			openMyCourses();
			cy.wait(Cypress.env("SHORT_WAIT"));
			openFirstMyCourseDetailsPage();
		});
		it("should open my course details page", () =>{});
		it("should open my courses more details page", openCourseMoreDetails);
		it("should continue buying course modules", continueBuying);
		it("should play another module's first lesson", playFirstLessonOfModule);
	});
}