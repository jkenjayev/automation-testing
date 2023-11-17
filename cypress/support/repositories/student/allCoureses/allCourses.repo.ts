import "cypress-if";

export class AllCoursesRepo {
	coursesPageLink = () => cy.get('[href="/courses"]').first();
	categories = () => cy.get("div button");
	accessibleCourse = () => cy.contains(" ta dars").if().first();
	inaccessibleCourse = () => cy.get("a.all-courses").first();
}