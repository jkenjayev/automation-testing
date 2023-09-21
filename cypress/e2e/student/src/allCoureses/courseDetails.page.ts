import {AllCourseDetailsAction} from "../../../../support/actions";

const course = new AllCourseDetailsAction();

export function allCourseDetailsPage() {
	describe('Course Details Page', () => {
		beforeEach(() => {
			cy.wait(Cypress.env("SHORT_WAIT"));
			course.openAccessibleCourseDetailsPage()
			cy.wait(Cypress.env("SHORT_WAIT"));
			
		});
		it("should continue buying", course.continueBuying);
		it("should open more details page", course.openMoreDetailsPage)
		it("should play free video", course.playFreeVideo);
		it("Should buy one module", course.buyOneModule);
	});
}