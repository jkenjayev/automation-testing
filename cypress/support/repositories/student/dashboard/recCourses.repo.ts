import "cypress-if";
export class RecCoursesRepo {
	myCourses = () => cy.get('[href="/my-courses"]').eq(0);
	coursesLink = () => cy.get('[href="/courses"]').contains('Barcha kurslarni ko‘rish').if();
	recCourses = () => {
		return cy.get('body').then((body) => {
			if(body.find('a:contains(Barcha kurslarni ko‘rish)').length > 0) {
				 cy.get('[href*="/course-single/"]').each(el => el.length > 15 ).first();
			}
		})
		
	}
}